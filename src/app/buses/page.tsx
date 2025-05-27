'use client';
import Navbar from "@/components/Navbar";
import React, { useState } from 'react';
import { FaChild, FaUser, FaChevronDown, FaChevronUp } from 'react-icons/fa';

type PassengerType = 'adults' | 'children';
type BusType = 'ac' | 'non-ac' | 'sleeper';

export default function GhumTripBusSearch() {
  const [tripType, setTripType] = useState<'one-way' | 'round-trip'>('one-way');
  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
  });
  const [busType, setBusType] = useState<BusType>('ac');
  const [showBusTypeDropdown, setShowBusTypeDropdown] = useState(false); // New state for Bus Type dropdown

  const handlePassengerChange = (type: PassengerType, operation: 'increase' | 'decrease') => {
    setPassengers(prev => {
      const newValue = operation === 'increase' ? prev[type] + 1 : Math.max(type === 'adults' ? 1 : 0, prev[type] - 1);
      return { ...prev, [type]: newValue };
    });
  };

  const handleBusTypeSelect = (type: BusType) => {
    setBusType(type);
    setShowBusTypeDropdown(false); 
  };

  return (
    <div className="bg-[#fafbfc] min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section
        className="pt-12 pb-8 flex gap-4"
        style={{
          backgroundImage: "url('/Images/bus.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="md:w-2/3 max-md:w-11/12 mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Search Buses with GhumTrip</h1>
          <p className="mb-6 text-gray-700">Book bus tickets with ease and enjoy affordable travel</p>

          {/* Trip Type Selector */}
          <div className="flex mb-6 bg-white/90 rounded-lg p-1 w-fit shadow-sm">
            <button
              onClick={() => setTripType('one-way')}
              className={`px-6 py-2 rounded-md font-medium transition duration-200 ${
                tripType === 'one-way' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              One Way
            </button>
            <button
              onClick={() => setTripType('round-trip')}
              className={`px-6 py-2 rounded-md font-medium transition duration-200 ${
                tripType === 'round-trip' ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Round Trip
            </button>
          </div>

          {/* Search Form */}
          <div className="mx-auto bg-white/90 rounded-xl shadow-lg p-8">
            {/* Route Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">From</label>
                <input
                  type="text"
                  placeholder="Enter origin city (e.g., Delhi)"
                  spellCheck="false"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">To</label>
                <input
                  type="text"
                  placeholder="Enter destination city (e.g., Mumbai)"
                  spellCheck="false"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>
            </div>

            {/* Date Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Departure</label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>
              {tripType === 'round-trip' && (
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Return</label>
                  <input
                    type="date"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>
              )}
            </div>

            {/* Passenger and Bus Type Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Passenger Dropdown */}
              <div className="relative">
                <label className="block text-gray-700 font-medium mb-2">Passengers</label>
                <button
                  onClick={() => setShowPassengerDropdown(!showPassengerDropdown)}
                  className="w-full p-3 border border-gray-300 rounded-lg text-left flex justify-between items-center bg-white"
                >
                  <span>
                    {passengers.adults} Adult{passengers.adults !== 1 ? 's' : ''}, {passengers.children} Child{passengers.children !== 1 ? 'ren' : ''}
                  </span>
                  {showPassengerDropdown ? <FaChevronUp /> : <FaChevronDown />}
                </button>

                {showPassengerDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <FaUser className="mr-2 text-gray-600" />
                        <span>Adults (12+)</span>
                      </div>
                      <div className="flex items-center">
                        <button
                          onClick={() => handlePassengerChange('adults', 'decrease')}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                          disabled={passengers.adults <= 1}
                        >
                          -
                        </button>
                        <span className="mx-3">{passengers.adults}</span>
                        <button
                          onClick={() => handlePassengerChange('adults', 'increase')}
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
                          onClick={() => handlePassengerChange('children', 'decrease')}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                          disabled={passengers.children <= 0}
                        >
                          -
                        </button>
                        <span className="mx-3">{passengers.children}</span>
                        <button
                          onClick={() => handlePassengerChange('children', 'increase')}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bus Type Dropdown */}
              <div className="relative">
                <label className="block text-gray-700 font-medium mb-2">Bus Type</label>
                <button
                  onClick={() => setShowBusTypeDropdown(!showBusTypeDropdown)}
                  className="w-full p-3 border border-gray-300 rounded-lg text-left flex justify-between items-center bg-white"
                >
                  <span>{busType.toUpperCase()}</span>
                  {showBusTypeDropdown ? <FaChevronUp /> : <FaChevronDown />}
                </button>

                {showBusTypeDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
                    <div
                      onClick={() => handleBusTypeSelect('ac')}
                      className="py-2 px-3 hover:bg-gray-100 cursor-pointer rounded"
                    >
                      AC
                    </div>
                    <div
                      onClick={() => handleBusTypeSelect('non-ac')}
                      className="py-2 px-3 hover:bg-gray-100 cursor-pointer rounded"
                    >
                      Non-AC
                    </div>
                    <div
                      onClick={() => handleBusTypeSelect('sleeper')}
                      className="py-2 px-3 hover:bg-gray-100 cursor-pointer rounded"
                    >
                      Sleeper
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Search Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200">
              Search Buses
            </button>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-12 bg-gray-50">
        <div className="md:w-2/3 max-md:w-11/12 mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Special Bus Offers & Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="font-bold text-lg mb-2">TRAVEL10</h3>
              <p className="text-gray-700 mb-2">Flat 10% off on AC bus bookings</p>
              <p className="text-sm text-gray-500">Credit Cards</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="font-bold text-lg mb-2">NIGHTRIDE</h3>
              <p className="text-gray-700 mb-2">15% off on overnight sleeper buses</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="font-bold text-lg mb-2">GROUPTRIP</h3>
              <p className="text-gray-700 mb-2">5% off for groups of 4+ passengers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="font-bold text-lg mb-2">WEEKLY</h3>
              <p className="text-gray-700 mb-2">10% off on weekly bus bookings</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="font-bold text-lg mb-2">EARLYBUS</h3>
              <p className="text-gray-700 mb-2">Up to 20% off on bookings made 15 days in advance</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="font-bold text-lg mb-2">ROUTEDEAL</h3>
              <p className="text-gray-700 mb-2">Flat 12% off on select routes</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md border-l-4 border-blue-700 col-span-1 md:col-span-2 lg:col-span-3">
              <h3 className="font-bold text-lg mb-2 text-blue-700">NEW CUSTOMERS * USE CODE: GTNEW *</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Get Flat 12% off on buses*</li>
                <li>Flat 10% off on domestic flights</li>
                <li>Flat 25% off on hotels</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 md:w-2/3 max-md:w-11/12 mx-auto">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-blue-700 mb-6">
            Book Buses with GhumTrip - Convenient, Affordable & Hassle-Free
          </h1>
          <p className="mb-4 text-gray-600">Planning a road trip or daily commute? GhumTrip makes bus ticket booking simple, offering a wide range of routes and bus types across India.</p>
          <p className="mb-4 text-gray-600">Our platform provides an easy-to-use interface to compare bus operators, check schedules, and book tickets securely at the best prices.</p>
          <p className="mb-6 text-gray-600">GhumTrip ensures a smooth booking experience for last-minute trips or planned journeys. Whether it’s a short city hop or a long-distance ride, we have you covered with reliable bus options.</p>

          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Why Choose GhumTrip for Bus Booking?</h2>
          <ul className="list-disc list-inside mb-6 space-y-2 text-gray-600">
            <li><strong>Best Price Guarantee</strong> - Competitive fares with transparent pricing.</li>
            <li><strong>Wide Bus Options</strong> - Choose from AC, non-AC, sleeper, and more.</li>
            <li><strong>Flexible Booking</strong> - Easy cancellations and modifications on select tickets.</li>
            <li><strong>Secure Payments</strong> - Safe booking with instant ticket confirmation.</li>
            <li><strong>24/7 Customer Support</strong> - Assistance for a worry-free journey.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-600 mb-4">How to Book Buses on GhumTrip?</h2>
          <ol className="list-decimal list-inside mb-6 space-y-2 text-gray-600">
            <li><strong>Enter Your Travel Details</strong> - Select origin, destination, travel dates, and number of passengers.</li>
            <li><strong>Compare Bus Options</strong> - Browse operators, schedules, and fares.</li>
            <li><strong>Choose Your Bus</strong> - Pick a bus that fits your budget and preferences.</li>
            <li><strong>Complete the Booking</strong> - Enter passenger details, apply offers, and pay securely.</li>
            <li><strong>Receive E-Ticket</strong> - Get your ticket via email or the GhumTrip app.</li>
          </ol>

          <p className="mb-6 text-gray-600">From budget-friendly non-AC buses to comfortable sleeper coaches, GhumTrip ensures a seamless booking process for every traveler.</p>

          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Enjoy a Hassle-Free Bus Travel Experience</h2>
          <ul className="list-disc list-inside mb-6 space-y-2 text-gray-600">
            <li>Real-time bus schedules and availability</li>
            <li>Secure payment and data protection</li>
            <li>Detailed operator reviews and bus amenities</li>
            <li>Seat selection for select operators</li>
            <li>Special assistance for senior citizens</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-600 mb-4">FAQs: Book Buses with GhumTrip</h2>
          <ul className="space-y-4 mb-8 text-gray-600">
            <li>
              <strong>How can I check bus availability on GhumTrip?</strong><br />
              Enter your origin, destination, and travel dates in the search form to view real-time bus options.
            </li>
            <li>
              <strong>Does GhumTrip offer refunds for bus cancellations?</strong><br />
              Yes, refunds are processed based on the bus operator’s cancellation policy, with applicable charges deducted.
            </li>
            <li>
              <strong>Can I book one-way and round-trip bus tickets?</strong><br />
              Yes, GhumTrip supports both one-way and round-trip bus bookings.
            </li>
            <li>
              <strong>Are there hidden charges in bus bookings?</strong><br />
              GhumTrip ensures transparent pricing, with all taxes and fees displayed before payment.
            </li>
            <li>
              <strong>How do I find the best bus deals?</strong><br />
              Check ongoing offers, filter by bus type or operator, and book early for the best fares.
            </li>
            <li>
              <strong>Can I modify my bus booking?</strong><br />
              Yes, modifications are possible based on the operator’s policies and availability.
            </li>
            <li>
              <strong>What payment methods does GhumTrip accept?</strong><br />
              We accept credit/debit cards, UPI, net banking, and digital wallets.
            </li>
            <li>
              <strong>Is it safe to book buses on GhumTrip?</strong><br />
              Absolutely, we use secure encryption to protect your payment and personal details.
            </li>
            <li>
              <strong>Can I select my seat while booking?</strong><br />
              Yes, seat selection is available for many bus operators during or after booking.
            </li>
            <li>
              <strong>How will I receive my bus ticket?</strong><br />
              Your e-ticket is sent via email and accessible on the GhumTrip app.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-red-600 mb-4">Disclaimer</h3>
          <ul className="list-disc list-inside text-sm space-y-2 text-gray-600">
            <li>Bus fares and availability are subject to change at the time of booking.</li>
            <li>Cancellations and modifications are subject to the bus operator’s policies.</li>
            <li>All taxes, surcharges, or fees are displayed before final payment.</li>
            <li>GhumTrip is a travel aggregator and does not operate its own buses.</li>
            <li>Offers and discounts are subject to terms and conditions on the website.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

