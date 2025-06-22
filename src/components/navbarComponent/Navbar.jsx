import Link from "next/link";

const Navbar = () => {
    return (
        <div className="h-[70px] w-full bg-amber-600 flex items-center justify-between px-5 ">
            <Link href={"/"} className="text-white font-bold text-2xl">Navbar</Link>
            <Link href={"/contact"}>
             contact
            </Link>
        </div>
    )
}

export default Navbar;