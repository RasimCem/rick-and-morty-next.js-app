"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Card, Search, Hero } from '@/components';
import { useInView } from 'react-intersection-observer'

interface Character {
    id: number;
    name: string;
    image: string;
}

const CharactersPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [characters, setCharacters] = useState<Character[]>([]);
    let [page, setPage] = useState(1);

    const { ref, inView } = useInView();
    const fetchData = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`);
        if (response.ok) {
            const result = await response.json();
            console.log(result, page);
            if (page < result.info.pages) {
                setCharacters([...characters, ...result.results]);
                setPage(page + 1);
            }
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setCharacters([]);
        setPage(1);
        fetchData();
    }

    useEffect(() => {
        if (inView) {
            fetchData();
        }
    }, [inView]);
    // if (characters.length === 0) return <p>No data available</p>;

    return (
        <div>
            <Hero 
                title="Characters"
            />
            <Search
                handleSubmit={handleSubmit}
                placeHolder="Search Character Name..."
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <div className="grid md:grid-cols-3 gap-4">
                {characters.map((character, index) => (
                    <Card
                        key={index}
                        imagePath={character.image}
                        title={character.name}
                        link={`/characters/details/${character.id}`}
                    ></Card>
                ))}
                <div ref={ref}></div>
            </div>
        </div>
    );
}
export default CharactersPage;