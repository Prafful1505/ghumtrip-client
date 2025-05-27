'use client';
import Navbar from "@/components/Navbar";
import React, { useState } from 'react';
import { FaBed, FaChild, FaSwimmingPool, FaUser, FaWifi, FaHotel, FaStar } from 'react-icons/fa';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

type GuestType = 'adults' | 'children';
type AmenityType = 'wifi' | 'pool' | 'breakfast';
type HotelType = 'all' | 'hotel' | 'resort' | 'budget' | 'apartment' | 'luxury' | 'homestay';

export default function GhumtripHotelSearch() {
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
  });
  const [starRating, setStarRating] = useState<string>('all');
  const [hotelType, setHotelType] = useState<HotelType>('all');
  const [amenities, setAmenities] = useState<Record<AmenityType, boolean>>({
    wifi: false,
    pool: false,
    breakfast: false,
  });

  const handleRoomChange = (operation: 'increase' | 'decrease') => {
    setRooms(prev => {
      const newValue = operation === 'increase' ? prev + 1 : Math.max(1, prev - 1);
      setGuests(prevGuests => ({
        ...prevGuests,
        adults: Math.max(newValue, prevGuests.adults),
      }));
      return newValue;
    });
  };

  const handleGuestChange = (type: GuestType, operation: 'increase' | 'decrease') => {
    setGuests(prev => {
      const newValue = operation === 'increase' ? prev[type] + 1 : Math.max(type === 'adults' ? rooms : 0, prev[type] - 1);
      return { ...prev, [type]: newValue };
    });
  };

  const toggleAmenity = (type: AmenityType) => {
    setAmenities(prev => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <div className="bg-[#fafbfc] min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section
        className="pt-12 pb-8 flex gap-4"
        style={{
<<<<<<< HEAD
          backgroundImage: "url('/images/hotel.jpg')",
=======
          backgroundImage: "url('/Images/hotel.jpg')",
>>>>>>> 57e3eae (Update packages page, homepage, and add new images/icons)
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="md:w-2/3 max-md:w-11/12 mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Search Hotels with Ghumtrip</h1>
          <p className="mb-6 text-gray-700">Find the best hotel deals for a comfortable stay</p>

          {/* Search Form */}
          <div className="mx-auto bg-white/90 rounded-xl shadow-lg p-8">
            {/* Destination */}
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Destination</label>
              <input
                type="text"
                placeholder="Enter city or hotel name (e.g., Mumbai, Taj Hotel)"
                spellCheck="false"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
            </div>

            {/* Check-In/Out Dates */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Check-In</label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Check-Out</label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>
            </div>

            {/* Rooms, Guests, Star Rating, Hotel Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Rooms & Guests */}
              <div className="relative">
                <label className="block text-gray-700 font-medium mb-2">Rooms & Guests</label>
                <button
                  onClick={() => setShowGuestDropdown(!showGuestDropdown)}
                  className="w-full p-3 border border-gray-300 rounded-lg text-left flex justify-between items-center bg-white"
                >
                  <span>
                    {rooms} Room{rooms !== 1 ? 's' : ''}, {guests.adults} Adult{guests.adults !== 1 ? 's' : ''}, {guests.children} Child{guests.children !== 1 ? 'ren' : ''}
                  </span>
                  {showGuestDropdown ? <FaChevronUp /> : <FaChevronDown />}
                </button>

                {showGuestDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <FaBed className="mr-2 text-gray-600" />
                        <span>Rooms</span>
                      </div>
                      <div className="flex items-center">
                        <button
                          onClick={() => handleRoomChange('decrease')}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                          disabled={rooms <= 1}
                        >
                          -
                        </button>
                        <span className="mx-3">{rooms}</span>
                        <button
                          onClick={() => handleRoomChange('increase')}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <FaUser className="mr-2 text-gray-600" />
                        <span>Adults (12+)</span>
                      </div>
                      <div className="flex items-center">
                        <button
                          onClick={() => handleGuestChange('adults', 'decrease')}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                          disabled={guests.adults <= rooms}
                        >
                          -
                        </button>
                        <span className="mx-3">{guests.adults}</span>
                        <button
                          onClick={() => handleGuestChange('adults', 'increase')}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <FaChild className="mr-2 text-gray-600" />
                        <span>Children (2-12)</span>
                      </div>
                      <div className="flex items-center">
                        <button
                          onClick={() => handleGuestChange('children', 'decrease')}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                          disabled={guests.children <= 0}
                        >
                          -
                        </button>
                        <span className="mx-3">{guests.children}</span>
                        <button
                          onClick={() => handleGuestChange('children', 'increase')}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Star Rating */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Star Rating</label>
                <div className="relative">
                  <select
                    value={starRating}
                    onChange={(e) => setStarRating(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none"
                  >
                    <option value="all">All Ratings</option>
                    <option value="3">3 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="5">5 Stars</option>
                  </select>
                  <FaStar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600" />
                </div>
              </div>

              {/* Hotel Type */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Hotel Type</label>
                <div className="relative">
                  <select
                    value={hotelType}
                    onChange={(e) => setHotelType(e.target.value as HotelType)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none"
                  >
                    <option value="all">All Types</option>
                    <option value="hotel">Hotel</option>
                    <option value="resort">Resort</option>
                    <option value="budget">Budget Stay</option>
                    <option value="apartment">Serviced Apartment</option>
                    <option value="luxury">Luxury Hotel</option>
                    <option value="homestay">Homestay</option>
                  </select>
                  <FaHotel className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600" />
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-6">
              <h3 className="text-gray-700 font-medium mb-3">Preferred Amenities</h3>
              <div className="flex flex-col gap-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={amenities.wifi}
                    onChange={() => toggleAmenity('wifi')}
                    className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <FaWifi className="mr-2 text-gray-600" />
                  <span>Free Wi-Fi</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={amenities.pool}
                    onChange={() => toggleAmenity('pool')}
                    className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <FaSwimmingPool className="mr-2 text-gray-600" />
                  <span>Swimming Pool</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={amenities.breakfast}
                    onChange={() => toggleAmenity('breakfast')}
                    className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <FaBed className="mr-2 text-gray-600" />
                  <span>Breakfast Included</span>
                </label>
              </div>
            </div>

            {/* Search Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200">
              Search Hotels
            </button>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-12 bg-gray-50">
        <div className="md:w-2/3 max-md:w-11/12 mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Special Hotel Offers & Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="font-bold text-lg mb-2">STAYMORE</h3>
              <p className="text-gray-700 mb-2">Up to 20% off on 3+ night stays</p>
              <p className="text-sm text-gray-500">Credit Cards</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="font-bold text-lg mb-2">LUXURY</h3>
              <p className="text-gray-700 mb-2">15% off on 5-star hotels with select banks</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="font-bold text-lg mb-2">FAMILY</h3>
              <p className="text-gray-700 mb-2">Free breakfast for kids on family bookings</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="font-bold text-lg mb-2">WEEKEND</h3>
              <p className="text-gray-700 mb-2">10% off on weekend getaways</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="font-bold text-lg mb-2">EARLYBIRD</h3>
              <p className="text-gray-700 mb-2">Up to 25% off on bookings made 30 days in advance</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="font-bold text-lg mb-2">STAYCATION</h3>
              <p className="text-gray-700 mb-2">Flat 15% off on local hotel bookings</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md border-l-4 border-blue-700 col-span-1 md:col-span-2 lg:col-span-3">
              <h3 className="font-bold text-lg mb-2 text-blue-700">NEW CUSTOMERS * USE CODE: GTNEW *</h3>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-gray-700">Get Flat 25% off on hotels*</li>
                <li className="text-gray-700">Flat 10% off on domestic flights</li>
                <li className="text-gray-700">Flat 12% off on buses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 md:w-2/3 max-md:w-11/12 mx-auto">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-blue-700 mb-6">
            Book Hotels with Ghumtrip - Comfortable, Affordable & Hassle-Free
          </h1>
          <p className="mb-4 text-gray-600">Planning a relaxing getaway or a business trip? Ghumtrip offers a seamless way to book hotels across India and worldwide at unbeatable prices.</p>
          <p className="mb-4 text-gray-600">Our platform provides a wide range of accommodations, from budget hotels to luxury resorts, with an easy-to-use interface to find the perfect stay.</p>
          <p className="mb-6 text-gray-600">Ghumtrip helps you compare hotel prices, check amenities, and book securely. Whether it’s a last-minute stay or a planned vacation, we ensure a smooth booking experience with the best deals.</p>

          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Why Choose Ghumtrip for Hotel Booking?</h2>
          <ul className="list-disc list-inside mb-6 space-y-2 text-gray-600">
            <li><strong>Best Price Guarantee</strong> - Competitive rates with no hidden charges.</li>
            <li><strong>Wide Selection</strong> - Hotels, resorts, apartments, and more, all in one place.</li>
            <li><strong>Flexible Booking Options</strong> - Free cancellations on select properties.</li>
            <li><strong>Secure Payments</strong> - Safe and easy payment process with instant confirmation.</li>
            <li><strong>24/7 Customer Support</strong> - Assistance for a hassle-free stay.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-600 mb-4">How to Book Hotels on Ghumtrip?</h2>
          <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-600">
            <li><strong>Enter Your Travel Details</strong> - Select your destination, check-in/check-out dates, number of rooms/guests, and preferred hotel type.</li>
            <li><strong>Explore Options</strong> - Browse accommodations by price, star rating, type, or amenities.</li>
            <li><strong>Choose Your Stay</strong> - Pick a property that suits your budget and preferences.</li>
            <li><strong>Complete the Booking</strong> - Enter guest details, apply offers, and make a secure payment.</li>
            <li><strong>Receive Confirmation</strong> - Get your booking details via email or the Ghumtrip app.</li>
          </ol>

          <p className="mb-6 text-gray-600">From cozy homestays to spacious serviced apartments, Ghumtrip makes booking effortless, ensuring a comfortable stay for every traveler.</p>

          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Enjoy a Hassle-Free Hotel Experience</h2>
          <ul className="list-disc list-inside mb-6 space-y-2 text-gray-600">
            <li>Real-time availability and pricing</li>
            <li>Secure payment and data protection</li>
            <li>Comprehensive details and reviews</li>
            <li>Special requests (e.g., extra bed, early check-in)</li>
            <li>Exclusive deals for loyalty members</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-600 mb-4">FAQs: Book Hotels with Ghumtrip</h2>
          <ul className="space-y-4 mb-8 text-gray-600">
            <li>
              <strong>How can I check hotel availability on Ghumtrip?</strong><br />
              Enter your destination, dates, guest details, and hotel type in the search form to view real-time availability.
            </li>
            <li>
              <strong>Does Ghumtrip offer refunds for hotel cancellations?</strong><br />
              Yes, refunds depend on the property’s cancellation policy, with applicable charges deducted.
            </li>
            <li>
              <strong>Can I book hotels for same-day check-in?</strong><br />
              Yes, Ghumtrip allows bookings for same-day check-ins, subject to availability.
            </li>
            <li>
              <strong>Are there hidden charges in hotel bookings?</strong><br />
              Ghumtrip ensures transparent pricing, with all taxes and fees displayed before payment.
            </li>
            <li>
              <strong>How do I find the best hotel deals?</strong><br />
              Check ongoing offers, filter by price, type, or amenities, and book early for the best rates.
            </li>
            <li>
              <strong>Can I modify my hotel booking?</strong><br />
              Yes, modifications are possible based on the property’s policies and availability.
            </li>
            <li>
              <strong>What payment methods does Ghumtrip accept?</strong><br />
              We accept credit/debit cards, UPI, net banking, and digital wallets.
            </li>
            <li>
              <strong>Is it safe to book hotels on Ghumtrip?</strong><br />
              Absolutely, we use secure encryption to protect your payment and personal details.
            </li>
            <li>
              <strong>Can I request additional services like extra beds?</strong><br />
              Yes, you can add special requests during booking or contact support for assistance.
            </li>
            <li>
              <strong>How will I receive my booking confirmation?</strong><br />
              Your confirmation is sent via email and is accessible on the Ghumtrip app.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-red-600 mb-4">Disclaimer</h3>
          <ul className="list-disc list-inside text-sm space-y-2 text-gray-600">
            <li>Hotel rates are subject to availability at the time of booking.</li>
            <li>Cancellations and modifications are subject to property policies.</li>
            <li>All taxes, surcharges, or additional fees are displayed before final payment.</li>
            <li>Ghumtrip is a travel aggregator and does not operate its own hotels.</li>
            <li>Offers and discounts are subject to terms and conditions on the website.</li>
          </ul>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 57e3eae (Update packages page, homepage, and add new images/icons)
