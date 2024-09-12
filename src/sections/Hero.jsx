const linkBtns = [
    {name: "Youtube", link: "https://www.youtube.com/@jeraxthefk1997", color: "yt"},
    {name: "Github", link: "https://github.com/AungZawMyo97", color: "gh"}
];

const defineColor = (className) => {
    switch (className){
        case "yt":
            return "hover:bg-custom-red";
            break;
        
        case "gh":
            return "hover:bg-custom-black";
            break;

        default:
            return "";
            break;
    }
}

const Hero = () => {
    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5">
            <div className="mx-auto flex flex-col items-center">
                <div className="flex items-center">
                    <img src="/assets/profile.JPG" className="w-40 h-40 rounded-full" loading="lazy"></img>
                    <div className="pl-5">
                        <strong className="text-gray-300 text-4xl">Aung Zaw Myo</strong>
                        <em> / JeraxTheFk</em>
                    </div>
                </div>
                
                <p className="mt-2 text-2xl text-gray-300 text-center py-10 leading-relaxed">
                    <b>Gaming Content Creator</b> <br />
                    & <br />
                    <b>Web Developer</b>
                </p>

                <div>
                    {
                        linkBtns.map((item) => (
                            <a 
                                key={item.name}
                                href={item.link}
                                target="_blank"
                                className={`rounded-full border-2 px-3 py-2 mx-2 text-sm font-medium ${defineColor(item.color)} hover:text-custom-gray-black transition-colors duration-300`}
                            >
                                {item.name}
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Hero