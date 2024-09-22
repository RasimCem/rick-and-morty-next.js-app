import Image from "next/image";
import Link from "next/link";
import { CharacterProps } from "@/types";


const CharacterDetail = ({ id, image, name, status, species, location }: CharacterProps) => {
    const { name: locationName, url: locationUrl } = location;
    return (
        <section className="bg-gray-100 border-double border-4 border-green-300">
            <div className="gap-16 items-center mx-auto max-w-screen-xl lg:grid lg:grid-cols-2">
                <div className="grid grid-cols-1 gap-4">
                    <Image
                        src={image}
                        alt=''
                        width={500}
                        height={300}
                        className="w-full"
                    />
                </div>
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <ul>
                        <li>Name: {name}</li>
                        <li>Status: {status}</li>
                        <li>Species: {species}</li>
                        <li>Location: {locationName}</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default CharacterDetail;