import Image from "next/image";
import logo from "../../public/assets/Logo.svg";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <div className="flex flex-col gap-8 md:gap-0 md:flex-row bg-white py-20 px-5 md:px-20">
            <div>
                <div className="flex flex-col gap-5 md:pr-12">
                    <div className="text-center">
                    <Image src={logo} alt="image showing sign up" className="inline-block w-64" />
                    <p className="mt-2 text-center md:text-left">Take your crypto to the next level</p>
                    </div>
                    
                    <div className="flex gap-2 justify-center">
                        <Facebook className="p-2 w-8 h-8 rounded-full text-slate-50 bg-gray-600" />
                        <Twitter className="p-2 w-8 h-8 rounded-full text-slate-50 bg-gray-600" />
                        <Instagram className="p-2 w-8 h-8 rounded-full text-slate-50 bg-gray-600" />
                        <Linkedin className="p-2 w-8 h-8 rounded-full text-slate-50 bg-gray-600" />
                        <Youtube className="p-2 w-8 h-8 rounded-full text-slate-50 bg-gray-600" />
                    </div>
                </div>
            </div>
            <div className="md:flex gap-5 justify-around md:flex-1 grid grid-cols-2">
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold">Company</h3>
                    <div className="text-gray-600 flex flex-col gap-3">
                        <p>About Us</p>
                        <p>Blog</p>
                        <p>Careers</p>
                        <p>Students</p>
                        <p>Security</p>
                        <p>Trust and Safety</p>
                        <p>Newsroom</p>
                        <p>Videos</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold">Learn</h3>
                    <div className="text-gray-600 flex flex-col gap-3">
                        <p>What's Trending</p>
                        <p>Product News</p>
                        <p>Events</p>
                        <p>University</p>
                        <p>Research</p>
                        <p>Market Updates</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold">Products</h3>
                    <div className="text-gray-600 flex flex-col gap-3">
                        <p>Stock & Fund</p>
                        <p>Cash Card</p>
                        <p>Crypto</p>
                        <p>Options</p>
                        <p>Gold</p>
                        <p>Learn Snacks</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold">Suport</h3>
                    <div className="text-gray-600 flex flex-col gap-3">
                        <p>Support Center</p>
                        <p>Contact Us</p>
                        <p>System Status</p>
                        <p>Areas of Availability</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold">Resources</h3>
                    <div className="text-gray-600 flex flex-col gap-3">
                        <p>Prices</p>
                        <p>Site Widgets</p>
                        <p>Tax</p>
                        <p>Support</p>
                    </div>
                </div>
            </div>

        </div>
    );
}