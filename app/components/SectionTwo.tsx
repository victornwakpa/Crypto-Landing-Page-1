import Image from "next/image";
import section2 from "@/public/assets/section-2.png"

export default function SectionTwo() {
    return (
        <div className="bg-white">
            <div className="flex md:flex-row flex-col-reverse">
                <div className="flex-1 flex items-center py-16 md:px-16 px-5">
                    <div>
                        <h2 className="md:text-5xl text-4xl text-center md:text-left capitalize font-bold mb-8 tracking-wide leading-12">The most trusted cryptocurrency platform</h2>
                        <div className="divide-y  max-w-md">
                            <div className="flex flex-col md:flex-row gap-5 py-6">
                                <p className="text-2xl font-bold text-num-color">01</p>
                                <div className="">
                                    <h3 className="text-2xl font-bold text-gray-700 mb-2">Sync between platforms</h3>
                                    <p className="text-gray-600">No matter if you're using our web interface or mobile app — your data is always synced. Just one account for all our services.</p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-5 py-6">
                                <p className="text-2xl font-bold text-num-color">02</p>
                                <div className="">
                                    <h3 className="text-2xl font-bold text-gray-700 mb-2">More focus, less clutter</h3>
                                    <p className="text-gray-600">No ads, just the crypto and content you love.</p>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-5 py-6">
                                <p className="text-2xl font-bold text-num-color">03</p>
                                <div className="">
                                    <h3 className="text-2xl font-bold text-gray-700 mb-2">Security by default</h3>
                                    <p className="text-gray-600">Enable privacy mode and app locking to protect your data.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Image src={section2} alt="this is an image" className="bg-cover" />
                </div>
            </div>
        </div>
    );
}