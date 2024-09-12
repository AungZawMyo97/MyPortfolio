const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-5 bg-gray-800 text-white text-center">
            <span className="block text-sm md:text-base">
                Developed by <span className="font-semibold">JeraxTheFk</span> &copy; {currentYear} All rights reserved.
            </span>
        </div>
    )
}

export default Footer