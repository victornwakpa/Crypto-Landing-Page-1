import Image from "next/image";
import sectionfive from "@/public/assets/section-5.png"

export default function SectionFive() {
    return (
        <div className="container bg-white px-5 md:px-20">
            <div className="py-20 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                    <Image src={sectionfive} alt="image" />
                </div>
                <div className="flex-1 md:pl-5">
                    <h2 className="text-4xl md:text-5xl text-center md:text-left font-bold max-w-md mb-4 tracking-wide leading-tight">Security From Day One</h2>
                    <p className="max-w-lg text-center md:text-left text-lg text-gray-700">Safety, security and compliance. Buy and sell popular digital currencies, keep track of them in the one place.</p>
                </div>
            </div>
        </div>
    );
}