import Image from "next/image";
import Link from "next/link";
import { CardProps } from "@/types";


const Card = ({ imagePath, title, link }: CardProps) => {

    return (
        <Link href={link} passHref className="">
            <div className="max-w-sm rounded overflow-hidden shadow-lg border-double border-4 border-green-300">
                <div className="relative w-full h-80">
                    <Image
                        src={imagePath}
                        className=""
                        alt=""
                        fill={true}
                    />
                    <div className="absolute w-full h-full top-0 left-0 flex items-end justify-center ">
                        <span className="text-white text-lg px-3 text-center mb-5 bg-gray-900 ">{title}</span>
                    </div>
                </div>
            </div>
        </Link>

    )
}

export default Card;