function Content({ name, desc, id, countryName }) {
    return (
        <div className="flex justify-center items-center w-full mb-16 max-sm:mb-0">
            <div className="flex flex-col justify-evenly items-center w-[60vw] h-[40vh] text-center gap-8 max-sm:gap-2 max-sm:w-[90vw]">
                <h1 style={{textShadow: '2px 2px 4px rgba(255, 255, 255, 1)'}}
                    className="text-7xl font-bold text-gray-900 max-sm:text-5xl">
                    {name}
                </h1>
                <h2 className="text-2xl font-bold text-white py-1 px-5 bg-gray-900 bg-opacity-85 mb-4 rounded-3xl">{countryName}</h2>
                <p className="text-2xl font-semibold text-black bg-white bg-opacity-35 p-3 max-sm:text-lg">{desc}</p>
            </div>
        </div>
    )
}

export default Content