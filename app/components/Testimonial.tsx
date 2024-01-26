import data from "../data/data";
import Image from "next/image";

export default function Testimonial() {
    return (
        <div className="py-20 bg-white relative">
            <h2 className="text-5xl font-semibold tracking-wide leading-tight text-center mb-12">What people are saying</h2>

            <div className="px-20">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
                    {data.map((testimonial, id) => (
                        <div key={testimonial.id} className="border p-5 rounded-lg">
                            <div className="flex gap-5 items-center rounded-lg">
                                <Image src={testimonial.avatar} alt="image showing sign up" className="rounded-full" width={50} height={50} />
                                <p>
                                    <span className="block font-bold text-lg">{testimonial.name}</span>
                                    <span className="block">{testimonial.designation}</span>
                                </p>
                            </div>
                            <p className="mt-3">{testimonial.message}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent via-white h-[200px]"></div>
        </div>
    );
}