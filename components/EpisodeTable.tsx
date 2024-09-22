"use client";
import { EpisodeProps } from '@/types';
import Link from 'next/link';
import { useState, useEffect } from "react";
import { useInView } from 'react-intersection-observer'

const EpisodeTable = () => {
    const [page, setPage] = useState(1);
    const [episodes, setEpisodes] = useState<EpisodeProps[]>([]);
    const { ref, inView } = useInView();

    const fetchData = async () => {
        const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`);
        if (response.ok) {
            const result = await response.json();
            if (page < result.info.pages) {
                setEpisodes([...episodes, ...result.results]);
                setPage(page + 1);
            }

        }
    }

    useEffect(() => {
        if (inView) {
            fetchData();
        }
    }, [inView]);

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-sm">
            <table className="w-full text-sm text-left text-gray-300">
                <thead className="text-xs text-gray-700 uppercase bg-green-100">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Episode
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Air Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Characters
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {episodes.map((episode) => {
                        let characterIds = episode?.characters.map((url) => {
                            return url.split('/').pop()
                        }).join(",");
                        const targetRoute = `/characters/${characterIds}`;

                        return (
                            <tr className="bg-white text-gray-900 border-b hover:bg-green-200 ">
                                <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    {episode.episode}
                                </td>
                                <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    {episode.name}
                                </td>
                                <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    {episode.air_date}
                                </td>
                                <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                    <Link href={targetRoute}>
                                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-lime-300 group-hover:from-green-400 group-hover:to-lime-300 focus:ring-4 focus:outline-none focus:ring-lime-200 ">
                                            <span className="relative px-3 py-1.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                                                Show Characters
                                            </span>
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div ref={ref}></div>
        </div>
    );
}

export default EpisodeTable;