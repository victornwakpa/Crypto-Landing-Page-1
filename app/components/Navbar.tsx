import Image from "next/image";
import logo from "@/public/assets/Logo.svg"
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
    {
        id: "products",
        title: "Products",
    },
    {
        id: "price",
        title: "Price",
    },
    {
        id: "learn",
        title: "Learn",
    },
    {
        id: "support",
        title: "Support",
    }
]

export default function Navbar() {
    return (
        <nav className="bg-white border-b-2 py-4">
            <div className="flex justify-between items-center container">
                <Image src={logo} alt={"the website logo"} />

                <div className="md:flex hidden gap-5 font-medium">
                    {navLinks.map((nav, item) => (
                        <Link key={nav.id} href={nav.id} className="">
                            {nav.title}
                        </Link>
                    ))}
                </div>

                <div className="md:flex hidden gap-4 font-semibold">
                    <Button asChild variant="ghost">
                        <Link href="#">Sign in</Link>
                    </Button>
                    <Button variant="outline" className="border-primary border-2">Get started</Button>
                </div>
            </div>
        </nav>
    );
}