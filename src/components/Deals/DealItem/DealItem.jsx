function DealItem({ deal}) {
    const lines = deal?.title?.split("\n");
    return (
        <div
            style={{ backgroundImage: `url(${deal?.image})` }}
            className="bg-cover bg-no-repeat bg-center basis-full text-[#FFF] rounded-2xl"
        >
            <div className="py-8 md:py-14 md:pl-8 pl-4">
                <h6 className="text-base md:text-xl font-bold mb-2 md:mb-6">{deal?.subtitle}</h6>
                <div className="mb-1 md:mb-2">
                    {
                        lines.map((line)=>(
                            <h2 key={line} className="text-2xl md:text-4xl font-extrabold leading-10">{line}</h2>
                        ))
                    }
                </div>
                <span className="block text-xs md:text-base font-medium mb-4 md:mb-10">{deal?.discount}</span>
                <button className="text-base md:text-xl font-semibold md:font-extrabold underline">{deal?.buttonText}</button>
            </div>
        </div>
    )
}

export default DealItem