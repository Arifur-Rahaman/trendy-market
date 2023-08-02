import Rectangle from './../Rectangle/Rectangle';
function NewArrival() {
    return (
        <div className="container mx-auto px-1 md:px-0">
            <div className='flex items-center gap-5 leading-8 mb-16'>
                <Rectangle/>
                <h2 className='text-3xl font-semibold font-[#3C4242]'>New Arrival</h2>
            </div>
        </div>
    )
}

export default NewArrival