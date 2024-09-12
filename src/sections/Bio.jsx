const bioTextSpan = [
    {
        id: "1", 
        text: "Hi, I'm Aung Zaw Myo, gaming name is Jerax, a passionate gaming content creator and web developer with a love for technology and immersive storytelling. By day, I design and build interactive websites, bringing digital projects to life with clean, efficient code. By night, I dive deep into the world of gaming, streaming my adventures and creating engaging content for my community.", 
        extraColor: ""
    },
    {
        id: "2", 
        text: "As a content creator, I focus on gameplay highlights, strategies, and immersive experiences, sharing my love for titles like GTA: San Andreas, Resident Evil, and PUBG Mobile. My channel, JeraxTheFk, is where I connect with fellow gamers, sharing tips, funny moments, and intense gameplay. With a mix of classic and modern games, I aim to build a space where gamers of all levels can feel inspired and entertained.",
        extraColor: "text-gray"
    },
    {
        id: "3", 
        text: "On the development side, I specialize in building modern, user-friendly websites using technologies like React, Tailwind CSS, and ASP.NET Core. Whether it's creating seamless UI experiences or optimizing back-end systems, I thrive on solving problems and pushing the boundaries of web development.", 
        extraColor: ""
    },
    {
        id: "4", 
        text: "Balancing both worlds, I combine my technical skills with my creative passion, crafting content and projects that resonate with my audiences—whether it is through a game controller or a keyboard. Join me as I explore new realms, both in code and in-game.", 
        extraColor: ""
    },
]

const Bio = () => {
    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5 flex flex-col items-center">
            <strong className="text-4xl">MY BIO</strong>
            <p className="mt-6 leading-loose">
            {
                    bioTextSpan.map((item) => (
                        <span
                            key={item.id}
                            className={`block py-2 ${item.extraColor}`}
                        >
                            {item.text}
                        </span>
                    ))
                }
            
            </p>
        </div>
    )
}

export default Bio