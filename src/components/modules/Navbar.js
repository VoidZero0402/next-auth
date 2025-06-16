import Link from "next/link";

function Navbar() {
    return (
        <nav className="bg-white px-16 py-5 flex items-center justify-between z-10">
            <div className="flex items-center gap-x-8">
                <span className="text-3xl text-rose-600 font-roboto-medium">JWTAuth</span>
                <ul className="flex items-center">
                    <li>
                        <Link href="/" className="py-2 px-4 text-gray-700 hover:text-rose-600 transition-all">
                            Home Page
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="py-2 px-4 text-gray-700 hover:text-rose-600 transition-all">
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="py-2 px-4 text-gray-700 hover:text-rose-600 transition-all">
                            Guids
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="py-2 px-4 text-gray-700 hover:text-rose-600 transition-all">
                            Documention
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="py-2 px-4 text-gray-700 hover:text-rose-600 transition-all">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <Link href="/auth/login" className="py-3 px-4 bg-rose-600 text-white rounded-full hover:bg-rose-700 transition-all">
                    Login / SignUp
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;