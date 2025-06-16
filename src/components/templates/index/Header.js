import Link from "next/link";
import HeaderCovers from "./HeaderCovers";

function Header() {
    return (
        <header className="flex items-center gap-x-16 my-10">
            <HeaderCovers />
            <div className="w-full space-y-8">
                <h2 className="text-5xl/[1.2] font-roboto-medium text-gray-800">Start An Infinite Game With All Of Your Power</h2>
                <p className="text-xl/8 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, numquam adipisci? Aperiam iure voluptate repellendus veritatis, recusandae molestiae vel aut reiciendis qui, asperiores eveniet!</p>
                <div>
                    <Link href="/auth/login" className="py-3 px-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all">
                        Join To The Us Now
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
