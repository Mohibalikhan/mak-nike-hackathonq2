'use client'
import Link from "next/link";
import { FaAngleRight, FaCaretDown, FaCaretUp } from "react-icons/fa";
;
import { useState } from "react";

function Sale() {
  // State for managing the sidebar toggle in mobile view
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:mx-auto mx-4 mb-20 max-w-screen-xl px-4 sm:px-6 md:px-8">
      {/* Sidebar Section */}
      <div className="lg:w-[250px] w-full">
        {/* Mobile toggle button */}
        <div className="flex justify-between items-center lg:hidden mt-6 mb-2">
          <h3 className="text-lg font-semibold">Categories</h3>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-xl"
          >
            {isSidebarOpen ? <FaCaretUp /> : <FaCaretDown />}
          </button>
        </div>

        {/* Categories list */}
        <ul
          className={`flex flex-col gap-6 border-r border-gray-300 pt-10 pr-6 lg:block ${isSidebarOpen ? 'block' : 'hidden'} lg:flex`}
        >
          {[
            "Women's Fashion",
            "Men's Fashion",
            "Hoodies & Sweatshirts",
            "Tops & T-shirts",
            "Shorts",
            "Sports & Outdoor",
            "Trackcuits",
            "Jumpsuits & Rompers",
            "Socks",
            "Accessories & Equipment"
            

          ].map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center w-full cursor-pointer hover:text-gray-500"
            >
              <Link href={""} className="text-sm sm:text-base">
                {item}
              </Link>
              {index < 2 && (
                <FaAngleRight className="text-sm hidden lg:block mr-4" />
              )}
            </li>
          ))}
        </ul>
      </div>
      
      
        </div>
  );
}

export default Sale;