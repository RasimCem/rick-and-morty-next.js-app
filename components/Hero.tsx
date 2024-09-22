const Hero = ({ title }: { title: string }) => {
    return (
        <div className="text-center my-10">
            <h1 className="block lg:inline-block text-2xl font-semibold leading-6 text-gray-900 group relative w-max">
                <span>{title}</span>
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-green-600 w-3/6"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-green-600 w-3/6"></span>
            </h1>
        </div>
    )
}

export default Hero;