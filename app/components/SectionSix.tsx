import Image from "next/image";
import firstImage from "@/public/assets/section-6-1.png"
import secondImage from "@/public/assets/section-6-2.png"
import thirdImage from "@/public/assets/section-6-3.png"

export default function SectionSix() {
    return (
        <div className="py-20 lg:h-screen 2xl:h-0">
            <div className="px-5 md:px-40">
                <div className="flex flex-col justify-center items-center mb-12">
                    <h2 className="text-4xl md:text-5xl px-3 md:px-0 font-semibold md:w-2/5 text-center mb-4">Get Started in Just Few Minutes</h2>
                    <p className="text-lg text-center">Has a variety of features that make it the best place to start trading</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="border rounded-xl p-4 bg-white flex flex-col items-center">
                        <Image src={firstImage} alt="image showing sign up" className="" />

                        <div className="text-center">
                            <h3 className="font-semibold text-3xl mb-3">Sign up</h3>
                            <p className="text-gray-700 text-base md:text-sm px-3">Buy Bitcoin or Ethereum, the securely store it in your wallet or send it on easily to friends </p>
                        </div>
                    </div>

                    <div className="border rounded-lg p-4 bg-white flex flex-col items-center">
                        <Image src={secondImage} alt="image showing sign up" className="" />

                        <div className="text-center">
                            <h3 className="font-semibold text-3xl mb-3">Sign up</h3>
                            <p className="text-gray-700 text-base md:text-sm px-3">Buy Bitcoin or Ethereum, the securely store it in your wallet or send it on easily to friends </p>
                        </div>
                    </div>

                    <div className="border rounded-lg p-4 bg-white flex flex-col items-center">
                        <Image src={thirdImage} alt="image showing sign up" className="" />

                        <div className="text-center">
                            <h3 className="font-semibold text-3xl mb-3">Sign up</h3>
                            <p className="text-gray-700 text-base md:text-sm px-3">Buy Bitcoin or Ethereum, the securely store it in your wallet or send it on easily to friends </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}