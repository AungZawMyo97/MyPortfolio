import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer, faPager, faPlug } from '@fortawesome/free-solid-svg-icons';

const servicesSupported = [
    {name: "website", title: "Website Development", content: "Designed to create dynamic, high-performing websites that meet your business goals. From responsive design to complex backend systems, I handle it all.", icon: faComputer},
    {name: "design", title: "Design Content", content: "This is dedicated to creating visually stunning and user-centric designs that captivate your audience and drive engagement", icon: faPager},
    {name: "api", title: "API Development" ,content: "Specialize in developing and integrating APIs that enable seamless data exchange and connectivity between your applications and services", icon: faPlug},
]

const Services = () => {
    return (
        <div className="w-full max-w-none bg-custom-gray-black">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5">
                <strong className="block text-center text-4xl">MY SERVICES AS DEVELOPER</strong>
                <div className="flex flex-wrap justify-center gap-4">
                    {servicesSupported.map((item) => (
                        <div
                        key={item.name}
                        className="flex flex-col items-center text-center p-4 max-w-xs w-full sm:max-w-sm sm:w-1/2 md:max-w-md md:w-1/3 lg:max-w-lg lg:w-1/4"
                        >
                        <FontAwesomeIcon icon={item.icon} size="4x" />
                        <strong className="block text-xl pt-3">{item.title}</strong>
                        <p className="pt-5">{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
    )
}

export default Services