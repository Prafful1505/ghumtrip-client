import Link from "next/link";
import { FaSuitcase, FaHeadset, FaUser } from "react-icons/fa";
import { RiCoupon2Line } from "react-icons/ri";

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left side - Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600 mr-2">
            Ghumtrip
          </Link>
        </div>

        {/* Right side - Navigation */}
        <nav className="flex items-center space-x-6">
          <Link 
            href="/offers" 
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
          >
            <RiCoupon2Line className="mr-1" />
            Offers
          </Link>
          
          <Link 
            href="/business" 
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
          >
            <FaSuitcase className="mr-1" />
            Business
          </Link>
          
          <Link 
            href="/support" 
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
          >
            <FaHeadset className="mr-1" />
            Support
          </Link>
          
          <Link 
            href="/login" 
            className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
          >
            <button className="bg-transparent cursor-pointer hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Log In
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}