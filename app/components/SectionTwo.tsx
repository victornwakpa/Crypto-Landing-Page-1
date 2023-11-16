import Image from "next/image";
import section2 from "@/public/assets/section-2.png"

export default function SectionTwo() {
    return (
        <div className="bg-white">
            <div className="flex">
                <div className="flex-1 flex items-center py-16 px-16">
                    <div>
                        <h2 className="text-5xl capitalize font-bold mb-8 tracking-wide leading-12">The most trusted cryptocurrency platform</h2>
                        <div className="divide-y  max-w-md">
                            <div className="flex gap-5 py-6">
                                <p className="text-2xl font-bold text-gray-400">01</p>
                                <div className="">
                                    <h3 className="text-2xl font-bold text-gray-700 mb-2">Sync between platforms</h3>
                                    <p className="text-gray-600">No matter if you're using our web interface or mobile app — your data is always synced. Just one account for all our services.</p>
                                </div>
                            </div>

                            <div className="flex gap-5 py-6">
                                <p className="text-2xl font-bold text-gray-400">02</p>
                                <div className="">
                                    <h3 className="text-2xl font-bold text-gray-700 mb-2">More focus, less clutter</h3>
                                    <p className="text-gray-600">No ads, just the crypto and content you love.</p>
                                </div>
                            </div>

                            <div className="flex gap-5 py-6">
                                <p className="text-2xl font-bold text-gray-400">03</p>
                                <div className="">
                                    <h3 className="text-2xl font-bold text-gray-700 mb-2">Security by default</h3>
                                    <p className="text-gray-600">Enable privacy mode and app locking to protect your data.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Image src={section2} alt="this is an image" />
                </div>
            </div>
        </div>
    );
}