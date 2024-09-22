import Image from "next/image";
import Link from "next/link";
import { CharacterProps } from "@/types";


const CharacterDetail = ({ character }): CharacterProps => {

    return (
        <section className="bg-gray-100 border-double border-4 border-green-300">
            {character ? (
                <div className="gap-16 items-center mx-auto max-w-screen-xl lg:grid lg:grid-cols-2">
                    <div className="grid grid-cols-1 gap-4">
                        <Image
                            src={character.image}
                            alt=''
                            width={500}
                            height={300}
                            className="w-full"
                        />
                    </div>
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <ul>
                            <li>Name: {character.name}</li>
                            <li>Status: {character.status}</li>
                            <li>Species: {character.species}</li>
                            <li>Location: {character.location.name}</li>
                        </ul>
                    </div>
                </div>
            ) : (<p>No data</p>)}
        </section>

    )
}

export default CharacterDetail;