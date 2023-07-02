function DealItem({ deal}) {
    const lines = deal?.title?.split("\n");
    return (
        <div
            style={{ backgroundImage: `url(${deal?.image})` }}
            className="bg-cover bg-no-repeat bg-center basis-full text-[#FFF] rounded-2xl"
        >
            <div className="py-14 pl-8">
                <h6 className="text-xl font-bold mb-6">{deal?.subtitle}</h6>
                <div className="mb-2">
                    {
                        lines.map((line)=>(
                            <h2 key={line} className="text-4xl font-extrabold leading-10">{line}</h2>
                        ))
                    }
                </div>
                <span className="block text-base font-medium mb-10">{deal?.discount}</span>
                <button className="text-xl font-extrabold underline">{deal?.buttonText}</button>
            </div>
        </div>
    )
}

export default DealItem