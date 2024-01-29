import Image from "next/image"
import bottomBanner from "../../public/assets/bottom-banner.png"
import btc from "../../public/assets/btc.png"
import luna from "../../public/assets/luna.png"
import eth from "../../public/assets/eth.png"

export default function BottomBanner() {

    return (
        <div className="hidden md:block py-20 bg-white relative">
            <div className="flex justify-center items-center">
                <div className="relative">
                    <Image src={bottomBanner} alt="image showing sign up" />
                    <Image src={btc} alt="image showing sign up" className="absolute top-[-70px] right-28" />
                    <Image src={eth} alt="image showing sign up" className="absolute  bottom-12 right-10" />
                    <Image src={luna} alt="image showing sign up" className="absolute bottom-6 right-56" />

                    <div className="absolute top-20 left-16">
                        <h2 className="text-4xl font-semibold text-white mb-5 w-96">Join a new generation of investors</h2>
                        <button className="bg-white text-slate-900 px-10 py-3 rounded-lg">Get started</button>
                    </div>
                </div>

            </div>

        </div>
    )
}