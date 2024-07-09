import Link from "next/link";
import Image from "next/image";

export const HeaderLogo = () => {
    return (
        <Link href="/">
            <div className="items-center hidden lg:flex">
                <Image src="/logo.png" alt="Logo" height={70} width={70} />
                <p className="font-semibold text-white text-2xl ml-2.5 font-serif">
                    FinGuard
                </p>
            </div>
        </Link>
    );
}