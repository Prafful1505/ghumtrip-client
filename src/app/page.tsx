import React from 'react';
import { FaPlane, FaHotel, FaBus, FaTrain, FaGift } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const HomePage = () => {
  const offers = [
    {
      text: "Discounts up to ₹1000 with SuperCoins",
      icon: "/Icons/coin.png",
      link: "/offers/supercoins"
    },
    {
      text: "Up to 10% extra discount as Ghumtrip loyalty benefit",
      icon: "/Icons/loyalty.png",
      link: "/offers/loyalty"
    },
    {
      text: "Up to 10% extra discount for Flipkart & Myntra shoppers",
      icon: "/Icons/shop.png",
      link: "/offers/shopping-partners"
    },
    {
      text: "Exclusive sign-in coupons",
      icon: "/Icons/coupon.png",
      link: "/offers/coupons"
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 px-20">
      {/* Main Content - Left/Right Layout */}
      <div className="flex flex-col items-start lg:flex-row gap-8 mb-12">
        {/* Left Column - Services */}
        <div className="lg:w-2/3">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">So, where to?</h1>
            <p className="text-xl text-gray-600">Plan your trip with us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Flight Card */}
            <Link href="/flights" passHref>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center mb-4">
                  <FaPlane className="text-blue-600 text-2xl mr-3" />
                  <h2 className="font-bold text-lg">Flights</h2>
                </div>
                <p className="text-gray-600">Get up to 25% off on domestic and international flights</p>
              </div>
            </Link>

            {/* Hotel Card */}
            <Link href="/hotels" passHref>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center mb-4">
                  <FaHotel className="text-green-600 text-2xl mr-3" />
                  <h2 className="font-bold text-lg">Hotels</h2>
                </div>
                <p className="text-gray-600">Up to 30% on 10L+ stays</p>
              </div>
            </Link>

            {/* Bus Card */}
            <Link href="/buses" passHref>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center mb-4">
                  <FaBus className="text-orange-600 text-2xl mr-3" />
                  <h2 className="font-bold text-lg">Buses</h2>
                </div>
                <p className="text-gray-600">Flat 12% off on first booking</p>
              </div>
            </Link>

            {/* Train Card */}
            <Link href="/trains" passHref>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center mb-4">
                  <FaTrain className="text-purple-600 text-2xl mr-3" />
                  <h2 className="font-bold text-lg">Trains</h2>
                </div>
                <p className="text-gray-600">New on Clearing</p>
              </div>
            </Link>

            {/* Packages Card */}
            <Link href="/packages" passHref>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center mb-4">
                  <FaGift className="text-red-600 text-2xl mr-3" />
                  <h2 className="font-bold text-lg">Packages</h2>
                </div>
                <p className="text-gray-600">Thailand, Dubai, Kashmir and more starting ₹13,999</p>
              </div>
            </Link>

            {/* Popular Searches */}
            <div className="md:col-span-2 lg:col-span-3">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Popular searches</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { text: "Hotels in Goa | 25 - 26 May - 2 guests", link: "/hotels?location=goa&date=2023-05-25&guests=2" },
                  { text: "New Delhi → Mumbai | Next week - 1 traveller", link: "/flights?from=DEL&to=BOM&date=next-week&travellers=1" },
                  { text: "Bangalore → Goa | Next week - 1 traveller", link: "/flights?from=BLR&to=GOI&date=next-week&travellers=1" },
                  { text: "New Delhi → Bangkok | Next week - 1 traveller", link: "/flights?from=DEL&to=BKK&date=next-week&travellers=1" }
                ].map((search, index) => (
                  <Link key={index} href={search.link} passHref>
                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                      <p className="text-gray-700">{search.text}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Savings and Offers */}
        <div className="bg-[#f0f5ff] max-w-sm p-4 rounded-2xl shadow-md flex flex-col items-center text-center space-y-4">
          <div className="bg-white rounded-full p-3 shadow">
            <Image src="/Icons/lock.png" width={30} height={30} alt="Lock icon" />
          </div>
          <h2 className="font-semibold text-lg">Never miss a saving</h2>

          <div className="grid grid-cols-2 gap-3 w-full">
            {offers.map((offer, idx) => (
              <Link key={idx} href={offer.link} passHref>
                <div className="bg-white p-3 pb-6 rounded-xl flex items-start gap-2 text-sm shadow-sm relative cursor-pointer hover:shadow-md transition-shadow">
                  <div className="absolute right-2 bottom-2">
                    <Image src={offer.icon} width={30} height={30} alt="Icon" />
                  </div>
                  <span>{offer.text}</span>
                </div>
              </Link>
            ))}
          </div>

          <Link href="/login" passHref>
            <button className="bg-black text-white font-semibold px-4 py-2 rounded-xl hover:opacity-90 transition-opacity w-full">
              Log in now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;