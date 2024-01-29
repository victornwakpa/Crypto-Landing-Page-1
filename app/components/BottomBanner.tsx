import Image from "next/image"
import bottomBanner from "../../public/assets/bottom-banner.png"
import bottomBannerMobile from "../../public/assets/bottom-banner-mobile.png"
import btc from "../../public/assets/btc.png"
import luna from "../../public/assets/luna.png"
import eth from "../../public/assets/eth.png"

export default function BottomBanner() {

    return (
        <div className="py-20 bg-white relative">
            <div className="flex justify-center items-center">
                <div className="relative">
                    <Image src={bottomBannerMobile} alt="image showing sign up" className="block lg:hidden w-screen" />
                    <Image src={bottomBanner} alt="image showing sign up" className="hidden lg:block " />
                    <Image src={btc} alt="image showing sign up" className="hidden lg:block absolute top-[-70px] right-28" />
                    <Image src={eth} alt="image showing sign up" className="hidden lg:block absolute  bottom-12 right-10" />
                    <Image src={luna} alt="image showing sign up" className="hidden lg:block absolute bottom-6 right-56" />

                    <div className="absolute lg:top-20 top-1/2 left-1/2 -translate-x-1/2 lg:-translate-x-0 -translate-y-1/2 lg:-translate-y-0 lg:left-16">
                        <div className="text-center lg:text-left">
                            <h2 className="text-4xl text-center lg:text-left font-semibold text-white mb-5 w-72 lg:w-96">Join a new generation of investors</h2>
                            <button className="inline-block lg:inline bg-white text-slate-900 px-20 lg:px-10 py-3 rounded-lg font-medium">Get started</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}