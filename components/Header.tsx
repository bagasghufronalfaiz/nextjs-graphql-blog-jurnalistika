import Link from "next/link";

const Header = () => {
    return (
        <div className="relative bg-white mb-6">
            <div className="text-center max-w-7xl mx-auto px-4 border-b-2 border-gray-100 py-6 sm:px-6">
                <Link href="/">
                    <p className="text-3xl font-bold text-indigo-600 w-auto sm:text-2xl">
                        JURNALISTIKA by Bagas
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default Header;
