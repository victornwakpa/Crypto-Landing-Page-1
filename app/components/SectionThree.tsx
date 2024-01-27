import Image from "next/image";
import sectionthree from "@/public/assets/section-3.png"

export default function SectionThree() {
    return (
        <div className="container bg-white px-5 md:px-20">
            <div className="py-20 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                    <Image src={sectionthree} alt="image" />
                </div>
                <div className="flex-1 md:pl-5">
                    <h2 className="text-4xl md:text-5xl text-center md:text-left font-bold max-w-md mb-4 tracking-wide leading-tight">Create portfolio today</h2>
                    <p className="max-w-lg text-center md:text-left text-lg text-gray-700">Buy and sell popular digital currencies, keep track of them in the one place. Has a variety of features that make it the best place to start trading</p>
                </div>
            </div>
        </div>
    );
}