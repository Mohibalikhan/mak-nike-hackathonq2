
import Link from 'next/link';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";



function Footer() {
  return (
    <div className="bg-black text-white">
      {/* Footer Content */}
      <div className="flex flex-col lg:flex-row justify-between px-6 lg:px-20 py-8 lg:py-16 gap-12">
        {/* find a store Section */}
        <div className="flex flex-col gap-5">
          <h3 className="text-xl lg:text-2xl font-bold">FIND A STORE</h3>
          
          <Link className="text-base lg:text-sm" href={''}>BECOME A MEMBER</Link>
          <Link className="text-base lg:text-sm"href={''}>SIGN UP FOR EMAIL</Link>
          <Link className="text-base lg:text-sm" href={''}>Send Us Feedback</Link>
          <Link className="text-base lg:text-sm" href={''}>STUDENT DISCOUNTS</Link>
          
        </div>

       

        {/* help Section */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg lg:text-xl font-bold">GET HELP</h3>
          <Link href={''}>Order Status</Link>
          <Link href={''}>Delivery</Link>
          <Link href={''}>Returns</Link>
          <Link href={''}>Payment Options</Link>
          <Link href={''}>Contact Us On Nike.com Inquires</Link>
          <Link href={''}>Contact Us On All Other Inquires</Link>
        </div>

        {/* About Section */}
        <div className="flex flex-col gap-3">
          <h3 className="text-lg lg:text-xl font-bold">ABOUT ME</h3>
          <Link href={''}>News</Link>
          <Link href={''}>Careers</Link>
          <Link href={''}>Investers</Link>
          <Link href={''}>Sustainability</Link>
        </div>

        
        
          
            
            
          
          <ul className="flex items-start gap-4 mt-4">
            <li className="w-8 h-8 text-2xl">
              <Link href={''}>
                <FaFacebookF />
              </Link>
            </li>
            <li className="w-8 h-8 text-2xl">
              <Link href={''}>
                <FaInstagram />
              </Link>
            </li>
            <li className="w-8 h-8 text-2xl">
              <Link href={''}>
                <FiTwitter />
              </Link>
            </li>
            <li className="w-8 h-8 text-2xl">
              <Link href={''}>
                <RiLinkedinLine />
              </Link>
            </li>
          </ul>
        </div>
      
<div>
<div className="flex justify-between border-y border-black-400 py-2">
<p className="text-[#cac2c2] opacity-90 text-xl lg:text-base mt-2">
  Copyright Iqra Naz 2024 All right reserved
</p>
<div className='flex justify-end gap-4 mt-2 text-[#cac2c2] opacity-90 border-y-slate-950'>
  <Link href={''}>Guides</Link>
  <Link href={''}>Terms of Sale</Link>
  <Link href={''}>Terms of Use</Link>
  <Link href={''}>Nike Privacy policy</Link>
  </div>
</div>


  </div>




</div>


     

  );
}

export default Footer;