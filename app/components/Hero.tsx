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
        <div>
            <div className="py-20">
                <div className="flex flex-col items-center gap-10">
                    <h1 className="text-6xl flex flex-col items-center gap-2 font-bold tracking-wide">
                        <span className="text-primary">One platform</span>
                        <span className="text-gray-800">all things Crypto</span>
                    </h1>

                    <p className="text-gray-600 text-lg max-w-xl text-center">Open a free account in minutes right from your phone and make your money go further</p>

                    <div className="flex gap-3">
                        <input type="text" className="border-2 rounded-lg border-gray-300 px-4 w-[350px]" placeholder="Email Address..." />
                        <Button className="bg-primary text-white py-6">Get started</Button>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <Image src={heroImage} alt="Hero image" className="" />
            </div>

            <div className="py-20 px-12">
                <div className="flex gap-6 justify-around items-center">
                    <Image src={brand1} alt="brand logo"/>
                    <Image src={brand2} alt="brand logo"/>
                    <Image src={brand3} alt="brand logo"/>
                    <Image src={brand4} alt="brand logo"/>
                    <Image src={brand5} alt="brand logo"/>
                </div>
            </div>

            <div className="flex justify-center pb-20">
                <div className="border flex justify-center py-16 rounded-xl divide-x-2 divide-gray-300 bg-white">
                    <div className="text-center px-20">
                        <p className="text-5xl mb-2 font-semibold text-gray-800">99k</p>
                        <p className="text-lg text-gray-700">People have joined</p>
                    </div>
                    <div className="text-center px-20">
                        <p className="text-5xl mb-2 font-semibold text-gray-800">50k</p>
                        <p className="text-lg text-gray-700">VVIP users have joined</p>
                    </div>
                    <div className="text-center px-20">
                        <p className="text-5xl mb-2 font-semibold text-gray-800">100+</p>
                        <p className="text-lg text-gray-700">Big Companies have joined</p>
                    </div>
                </div>
            </div>
        </div>
    );
}