import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="flex justify-center flex-col items-center bg-[#fafafa] m-4">
            <div className="flex justify-center flex-col items-center pb-4">
                <h3 className="text-xl text-black font-bold">Hello Nike App</h3>
                <p className="text-sm text-gray-600">
                    <span>Download the app to access everything Nike.</span>{" "}
                    <Link href={"/"}> Get Your Great</Link>
                </p>
            </div>
            <Image src={"/hero.png"} alt={"shoes"} width={1344} height={700} />
            <div className="flex justify-center items-center flex-col p-10 text-center">
                <p className="text-sm">First Look</p>
                <h2 className="text-4xl font-bold uppercase">Nike Air Max Pulse</h2>
                <p className="text-sm leading-5 w-full pt-3 pb-2 text-center lg:w-[60%]">
                    Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
                    —designed to push you past your limits and help you go to the max.
                </p></div>
                <div className="flex justify-center items-center gap-3">
                    <button className="bg-black text-white rounded-full px-4 py-2 hover:bg-gray-800 transition">
                        Notify Me
                    </button>
                    <button className="bg-black text-white rounded-full px-4 py-2 hover:bg-gray-800 transition">
                        Shop Air Max
                    </button>

                </div>
                <Image src={"/run.png"} alt={"shoes"} width={1344} height={700} />
            <div className="flex justify-center items-center flex-col p-10 text-center">
                
                <h2 className="text-4xl font-bold uppercase">STEP INTO WHAT FEELS GOOD</h2>
                <p className="text-sm leading-5 w-full pt-3 pb-2 text-center lg:w-[60%]">
                    Cause everyonr should know the feeling of running in the perfect pair.
                </p>
                
                    <button className="bg-black text-white rounded-full px-4 py-2 hover:bg-gray-800 transition">
                        Find Your Shoe
                    </button>

            </div>
        
        </section>
    );
}