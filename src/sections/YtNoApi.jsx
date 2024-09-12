const videos = [
    {
        name: "video1",
        link: "BSScWRN6WGc"
    },
    {
        name: "video2",
        link: "8od-LBUw3pU"
    },
    {
        name: "video3",
        link: "bl43mweAJQw"
    },
    {
        name: "video4",
        link: "hJyxjSyuJo4"
    }
]

const YtNoApi = () => {
    return (
        <div className="w-full max-w-none bg-custom-gray-black">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5">
                <strong className="block text-center text-4xl">MY GAMING CONTENTS</strong>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    {videos.map((item) => (
                        <div key={item.name} className="w-full">
                        <iframe
                            className="w-full h-56 sm:h-64 md:h-72 lg:h-80"
                            src={`https://www.youtube.com/embed/${item.link}`}
                            allowFullScreen
                            title={item.name}
                        ></iframe>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default YtNoApi