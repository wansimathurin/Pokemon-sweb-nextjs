import { FaHeart } from "react-icons/fa";

const page = () => {
    return (
        <div className="bg-amber-600 h-screen flex items-center justify-center flex-col p-5">
            <div className="flex overflow-hidden rounded-md w-[350px] h-[500px] relative">
                <img src="/tenor.jpg" alt="" width={"100%"} height={100} />
                <FaHeart size={25} color={"#fff"} className="absolute top-5  right-4 cursor-pointer" />
            </div>
        </div>
    )
}

export default page;