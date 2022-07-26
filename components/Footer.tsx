import Link from "next/link";

const Footer = () => {
    return (
        <div className="relative bg-white mt-6">
            <div className="text-center max-w-7xl mx-auto px-4 border-t-2 border-gray-100 py-6 sm:px-6">
                <Link href="/">
                    <p>Powered by Jurnalistika & Vercel</p>
                </Link>
            </div>
        </div>
    );
};

export default Footer;
