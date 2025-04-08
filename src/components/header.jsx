export default function Header(){    
    return(
<header className="w-full bg-blue-500 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Story</h1>
        <nav>
            <ul className="hidden md:flex space-x-8">
                <li><a href="#" className="hover:text-blue-200">Home</a></li>
                <li><a href="#" className="hover:text-blue-200">Products</a></li>
                <li><a href="#" className="hover:text-blue-200">About</a></li>
                <li><a href="#" className="hover:text-blue-200">Contact</a></li>
            </ul>
            <div className="md:hidden">
                <button className="text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </nav>
    </div>
</header>

    )
}