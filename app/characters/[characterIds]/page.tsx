"use client";

import { CharacterProps } from "@/types";
import { useState, useEffect } from "react";
import { Card, Hero } from "@/components";

interface Params {
    characterIds: string;
}

const Page = ({ params }: { params: Params }) => {
    const characterIds = decodeURIComponent(params.characterIds);
    const [characters, setCharacters] = useState<CharacterProps[]>([]);

    const fetchData = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${characterIds}`);
        if (response.ok) {
            let result = await response.json();
            result = Array.isArray(result) ? result : [result];
            setCharacters(result);
        }
    }

    useEffect(() => {
        fetchData();
    }, [characterIds]);

    return (
        <div>
            <Hero
                title="Characters"
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
            </div>
        </div>
    );
}

export default Page;