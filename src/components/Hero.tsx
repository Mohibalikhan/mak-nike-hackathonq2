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

                    <div className="contanier">
                    <p className="text-2xl font-bold uppercase">Best of Air Max</p>
                        <div className="flex justify-center items-center gap-4">
                            <div className="font-bold text-slate-600 ">
                            <Image src={"/h1.png"} alt={"shoes"} width={400} height={300} />
                            <p>Nike Air Max Plus</p>
                            <p>Women's shoes</p>
                            <p>₹ 13 995</p>
                            </div>
                            <div className="font-bold text-slate-600">
                            <Image src={"/h2.png"} alt={"shoes"} width={400} height={300} />
                            <p>Nike Air Max Plus</p>
                            <p>Men's shoes</p>
                            <p>₹ 13 995</p>
                            </div>
                            <div className="font-bold text-slate-600">
                            <Image src={"/h3.png"} alt={"shoes"} width={400} height={300} />
                            <p>Nike Air Max 97 SE </p>
                            <p>Men's shoes</p>
                            <p>₹ 13 995</p>
                            </div>
    </div>
  
                    

                </div>
                <div className="contanier p-10">
                <p className="text-2xl font-bold uppercase ">Featured</p>
                <Image src={"/run.png"} alt={"shoes"} width={1344} height={700} />
            <div className="flex justify-center items-center flex-col p-10 text-center">
                
                <h2 className="text-4xl font-bold uppercase">STEP INTO WHAT FEELS GOOD</h2>
                <p className="text-sm leading-5 w-full pt-3 pb-2 text-center lg:w-[60%]">
                    Cause everyone should know the feeling of running in the perfect pair.
                </p>
                
                    <button className="bg-black text-white rounded-full px-4 py-2 hover:bg-gray-800 transition">
                        Find Your Shoe
                    </button>

            </div>
            </div>
            <div className="contanier p-10">
                    <p className="text-2xl font-bold uppercase">Gear Up</p>
                        <div className="flex justify-center items-center gap-2">
                            <div className="font-bold text-slate-600 ">
                            <Image src={"/g1.png"} alt={"shoes"} width={300} height={200} />
                            <p>Nike Dri-FIT ADV TechKnit Ultra</p>
                            <p>Men's Short Sleeve</p>
                            <p>₹ 3895</p>
                            </div>
                            <div className="font-bold text-slate-600">
                            <Image src={"/g2.png"} alt={"shoes"} width={300} height={200} />
                            <p>Nike Dri-FIT Challenger</p>
                            <p>Men's 18cm approx</p>
                            <p>₹ 2495</p>
                            </div>
                            <div className="font-bold text-slate-600">
                            <Image src={"/g3.png"} alt={"shoes"} width={300} height={200} />
                            <p>Nike Dri-FIT ADV Run Division </p>
                            <p>Women's Long Sleeve</p>
                            <p>₹ 5295</p>
                            </div>
                            <div className="font-bold text-slate-600">
                            <Image src={"/g4.png"} alt={"shoes"} width={300} height={200} />
                            <p>Women's Running Leggings with Pockets</p>
                            <p>₹ 3795</p>
                            
                            </div>
                            </div>
                            </div>


                <div className="contanier p-10">
                <p className="text-2xl font-bold uppercase ">Don't Miss</p>
                <Image src={"/person.png"} alt={"shoes"} width={1344} height={700} />
            <div className="flex justify-center items-center flex-col p-10 text-center">
                
                <h2 className="text-4xl font-bold uppercase">FLIGHT ESSENTIALS</h2>
                <p className="text-sm leading-5 w-full pt-3 pb-2 text-center lg:w-[60%]">
                Your built-to-last, all-week wears—but with style only Jordan Brand can deliver..
                </p>
                
                    <button className="bg-black text-white rounded-full px-4 py-2 hover:bg-gray-800 transition">
                        SHOP
                    </button>

            </div>
            </div>
            <div className="contanier">
                    <p className="text-2xl font-bold uppercase">The Essentials</p>
                        <div className="flex justify-center items-center gap-4">
                            <div className="font-bold text-slate-600 ">
                            <Image src={"/l1.png"} alt={"shoes"} width={400} height={300} />
                            
                
                            </div>
                            <div className="font-bold text-slate-600">
                            <Image src={"/l2.png"} alt={"shoes"} width={400} height={300} />
                            
                            </div>
                            <div className="font-bold text-slate-600">
                            <Image src={"/l3.png"} alt={"shoes"} width={400} height={300} />
                            
                            </div>

                            
</div>
</div>


<div className="bg-white text-black">
      {/* Footer Content */}
      <div className="flex flex-col lg:flex-row justify-between px-6 lg:px-25 py-8 lg:py-16 gap-10">
        {/* icons Section */}
        <div className="flex flex-col gap-3">
          <h3 className=" lg:text-xl font-bold">Icons</h3>
          
          <Link  href={''}>Air Force 1</Link>
          <Link  href={''}>Huarache</Link>
          <Link  href={''}>Air Max 90</Link>
          <Link  href={''}>Air Max 95</Link>
          
        </div>
         {/* shoes Section */}
         <div className="flex flex-col gap-3">
          <h3 className="text-lg lg:text-xl font-bold">Shoes</h3>
          <Link href={''}>All Shoes</Link>
          <Link href={''}>Custom Shoes</Link>
          <Link href={''}>Jordan Shoes</Link>
          <Link href={''}>Running Shoes</Link>
        </div>

       

        {/* Clothing */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg lg:text-xl font-bold">Clothing</h3>
          <Link href={''}>All Clothing</Link>
          <Link href={''}>Modest Wear</Link>
          <Link href={''}>Hoddies</Link>
          <Link href={''}>Shirt & Tops</Link>
          
        </div>

        {/* Kids Section */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg lg:text-xl font-bold">Kids</h3>
          <Link href={''}>Infant & Toddler Shoes</Link>
          <Link href={''}>Kids Shoes</Link>
          <Link href={''}>Kids Jordan Shoes</Link>
          <Link href={''}>Kids BasketBall Shoes</Link>
        </div>

        
        </div>
        </div>
        
        
        </section>
        

    
    );
}