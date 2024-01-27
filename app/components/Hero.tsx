import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImage from "@/public/assets/hero-image.png"
import brand1 from "@/public/assets/brand-1.png"
import brand2 from "@/public/assets/brand-2.png"
import brand3 from "@/public/assets/brand-3.png"
import brand4 from "@/public/assets/brand-4.png"
import brand5 from "@/public/assets/brand-5.png"

export default function Hero() {
    return (
        <div className="bg-gradient-to-t from-linear to-white">
            <div className="md:py-20 py-16 px-10">
                <div className="flex flex-col items-center gap-10">
                    <h1 className="md:text-6xl text-5xl flex flex-col text-center items-center gap-2 font-bold tracking-wide">
                        <span className="text-primary-100">One platform</span>
                        <span className="text-gray-800">all things Crypto</span>
                    </h1>

                    <p className="text-gray-600 text-lg max-w-xl text-center">Open a free account in minutes right from your phone and make your money go further</p>

                    <div className="flex md:items-center gap-3 flex-col md:flex-row">
                        <input type="text" className="border-2 rounded-lg border-gray-300 px-4 py-3 w-80 md:w-[350px]" placeholder="Email Address..." />
                        <Button className="bg-primary-100 text-white py-6 px-10">Get started</Button>
                    </div>
                </div>
            </div>

            <div className="md:flex hidden justify-center">
                <Image src={heroImage} alt="Hero image" className="" />
            </div>

            <div className="md:py-20 px-12 flex justify-center items-center">
                <div className="grid grid-cols-3 md:grid-cols-5 md:gap-20 gap-8">
                    <Image src={brand1} alt="brand logo"/>
                    <Image src={brand2} alt="brand logo"/>
                    <Image src={brand3} alt="brand logo"/>
                    <Image src={brand4} alt="brand logo"/>
                    <Image src={brand5} alt="brand logo"/>
                </div>
            </div>

            <div className="flex justify-center pt-12 md:pt-0 pb-20 mx-10">
                <div className="border flex flex-col md:flex-row justify-center px-4 md:px-0 md:py-16 rounded-xl md:divide-x-2 divide-y md:divide-y-0 divide-gray-300 bg-white">
                    <div className="text-center md:px-20 py-12  md:mx-0">
                        <p className="text-5xl mb-2 font-semibold text-gray-800">99k</p>
                        <p className="text-lg text-gray-700">People have joined</p>
                    </div>
                    <div className="text-center md:px-20 py-12 md:mx-0">
                        <p className="text-5xl mb-2 font-semibold text-gray-800">50k</p>
                        <p className="text-lg text-gray-700">VVIP users have joined</p>
                    </div>
                    <div className="text-center md:px-20 py-12 md:mx-0">
                        <p className="text-5xl mb-2 font-semibold text-gray-800">100+</p>
                        <p className="text-lg text-gray-700">Big Companies have joined</p>
                    </div>
                </div>
            </div>
        </div>
    );
}