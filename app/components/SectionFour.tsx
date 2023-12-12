import Image from "next/image";
import sectionFour from "@/public/assets/section-4.png"

export default function SectionFour() {
    return (
        <div className="container bg-white px-20">
            <div className="py-20 flex items-center flex-row-reverse gap-6">
                <div className="flex-1">
                    <Image src={sectionFour} alt="image" />
                </div>
                <div className="flex-1 pl-5">
                    <h2 className="text-5xl font-bold max-w-md mb-4 tracking-wide leading-tight">Lightning-Fast Crypto Trading</h2>
                    <p className="max-w-lg text-lg text-gray-700">The Exchange supports USD, EUR, and GBP. Invest in cryptocurrency slowly over time by scheduling buys daily, weekly, or monthly.</p>
                </div>
            </div>
        </div>
    );
}