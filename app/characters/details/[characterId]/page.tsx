"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { CharacterProps } from "@/types";
import { CharacterDetail, Hero } from '@/components';


const CharacterDetailsPage = ({ params }: { params: { characterId: number } }) => {

    const id = params.characterId;
    const [characterDetail, setCharacterDetail] = useState<CharacterProps | null>(null);

    const fetchData = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        if (response.ok) {
            const result = await response.json();
            setCharacterDetail(result);
        }
    }

    useEffect(() => {
        fetchData();
    }, [id]);

    return (
        <div>
            <Hero
                title="Character Details"
            />
            {characterDetail && (
                <CharacterDetail
                    id={characterDetail.id}
                    image={characterDetail.image}
                    name={characterDetail.name}
                    status={characterDetail.status}
                    species={characterDetail?.species}
                    location={characterDetail?.location}
                />
            )}
        </div>
    );
}
export default CharacterDetailsPage;