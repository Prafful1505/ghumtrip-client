'use client';
import Navbar from "@/components/Navbar";
import React, { useState } from 'react';
import { FaBabyCarriage, FaChevronDown, FaChevronUp, FaChild, FaUser, FaUserGraduate, FaUserShield, FaUserTie } from 'react-icons/fa';

type PassengerType = 'adults' | 'children' | 'infants';
type SpecialFareType = 'seniorCitizen' | 'student' | 'armedForces';

export default function CleartripFlightSearch() {
  const [tripType, setTripType] = useState<'one-way' | 'round-trip'>('one-way');
  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });
  const [cabinClass, setCabinClass] = useState<string>('economy');
  const [specialFares, setSpecialFares] = useState<Record<SpecialFareType, boolean>>({
    seniorCitizen: false,
    student: false,
    armedForces: false,
  });

  const handlePassengerChange = (type: PassengerType, operation: 'increase' | 'decrease') => {
    setPassengers(prev => {
      const newValue = operation === 'increase' ? prev[type] + 1 : Math.max(0, prev[type] - 1);

      // Ensure infants don't exceed adults (1 infant per adult)
      if (type === 'infants' && newValue > prev.adults) {
        return prev;
      }

      return { ...prev, [type]: newValue };
    });
  };

  const toggleSpecialFare = (type: SpecialFareType) => {
    setSpecialFares(prev => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <div className="bg-[#fafbfc]">
      <Navbar />
      <section className="pt-10 pb-5 flex gap-4"
        style={{
          backgroundImage: "url('/images/flight.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="md:w-2/3 max-md:w-11/12 mx-auto max-w-5xl">
          <h1 className="text-3xl font-bold">Search Flights</h1>
          <p className="mb-4">Enjoy hassle free flight ticket bookings at lowest airfare</p>

          {/* Trip Type Selector */}
          <div className="flex mb-4 bg-white/80 rounded-lg p-1 w-fit">
            <button
              onClick={() => setTripType('one-way')}
              className={`px-4 py-2 rounded-md ${tripType === 'one-way' ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
            >
              One Way
            </button>
            <button
              onClick={() => setTripType('round-trip')}
              className={`px-4 py-2 rounded-md ${tripType === 'round-trip' ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
            >
              Round Trip
            </button>
          </div>

          {/* Form with reduced opacity */}
          <div className="mx-auto bg-gray-100/85 rounded-lg shadow-md p-6">
            {/* Route Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 mb-2">From</label>
                <input
                  type="text"
                  placeholder="City or Airport"
                  spellCheck="false"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">To</label>
                <input
                  type="text"
                  placeholder="City or Airport"
                  spellCheck="false"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>
            </div>

            {/* Date Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 mb-2">Departure</label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                />
              </div>
              {tripType === 'round-trip' && (
                <div>
                  <label className="block text-gray-700 mb-2">Return</label>
                  <input
                    type="date"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                </div>
              )}
            </div>

            {/* Passenger and Class Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Passenger Dropdown */}
              <div className="relative">
                <label className="block text-gray-700 mb-2">Passengers</label>
                <button
                  onClick={() => setShowPassengerDropdown(!showPassengerDropdown)}
                  className="w-full p-3 border border-gray-300 rounded-lg text-left flex justify-between items-center bg-white"
                >
                  <span>
                    {passengers.adults} Adult{passengers.adults !== 1 ? 's' : ''}, {passengers.children} Child{passengers.children !== 1 ? 'ren' : ''}, {passengers.infants} Infant{passengers.infants !== 1 ? 's' : ''}
                  </span>
                  {showPassengerDropdown ? <FaChevronUp /> : <FaChevronDown />}
                </button>

                {showPassengerDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
                    <div className="flex justify-between items-center mb-3">
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

                    <div className="flex justify-between items-center mb-3">
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

                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <FaBabyCarriage className="mr-2 text-gray-600" />
                        <span>Infants (0-2)</span>
                      </div>
                      <div className="flex items-center">
                        <button
                          onClick={() => handlePassengerChange('infants', 'decrease')}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                          disabled={passengers.infants <= 0}
                        >
                          -
                        </button>
                        <span className="mx-3">{passengers.infants}</span>
                        <button
                          onClick={() => handlePassengerChange('infants', 'increase')}
                          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
                          disabled={passengers.infants >= passengers.adults}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Cabin Class Dropdown */}
              <div>
                <label className="block text-gray-700 mb-2">Cabin Class</label>
                <select
                  value={cabinClass}
                  onChange={(e) => setCabinClass(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="economy">Economy</option>
                  <option value="premium-economy">Premium Economy</option>
                  <option value="business">Business</option>
                  <option value="first">First Class</option>
                </select>
              </div>
            </div>

            {/* Special Fares */}
            <div className="mb-6">
              <h3 className="text-gray-700 mb-3">Special Fares (Select if applicable)</h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => toggleSpecialFare('seniorCitizen')}
                  className={`flex items-center px-4 py-2 rounded-full border ${specialFares.seniorCitizen ? 'bg-blue-100 border-blue-500 text-blue-700' : 'bg-gray-100 border-gray-300 text-gray-700'}`}
                >
                  <FaUserTie className="mr-2" />
                  Senior Citizen
                </button>
                <button
                  onClick={() => toggleSpecialFare('student')}
                  className={`flex items-center px-4 py-2 rounded-full border ${specialFares.student ? 'bg-blue-100 border-blue-500 text-blue-700' : 'bg-gray-100 border-gray-300 text-gray-700'}`}
                >
                  <FaUserGraduate className="mr-2" />
                  Student
                </button>
                <button
                  onClick={() => toggleSpecialFare('armedForces')}
                  className={`flex items-center px-4 py-2 rounded-full border ${specialFares.armedForces ? 'bg-blue-100 border-blue-500 text-blue-700' : 'bg-gray-100 border-gray-300 text-gray-700'}`}
                >
                  <FaUserShield className="mr-2" />
                  Armed Forces
                </button>
              </div>
            </div>

            {/* Search Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 cursor-pointer">
              Search Flights
            </button>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="md:w-2/3 max-md:w-11/12 mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">Special Offers & Deals</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Offer Cards */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="font-bold text-lg mb-2">PINES</h3>
              <p className="text-gray-700 mb-2">Up to 12% off at Flights and Friends Network</p>
              <p className="text-sm text-gray-500">Credit Cards</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="font-bold text-lg mb-2">PRIOR</h3>
              <p className="text-gray-700 mb-2">Up to 12% off + additional savings on test on Plays with Anti Bank Credit Card (IN-1)</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="font-bold text-lg mb-2">A new bunch</h3>
              <p className="text-gray-700 mb-2">UP TO 12% off + 10+ CAGREDs on Plays with DPC FREE Bank Credit Card</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <h3 className="font-bold text-lg mb-2">BROKEN</h3>
              <p className="text-gray-700 mb-2">Up to 12% off + 10+ CAGREDs on Plays with GIFT FREE Bank Credit Card</p>
            </div>

          
            {/* STEPHILLS offers */}
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="font-bold text-lg mb-2">STEPHILLS</h3>
              <p className="text-gray-700 mb-2">Up to 4,00,000 off on Plays for a year</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="font-bold text-lg mb-2">STEPHILLS</h3>
              <p className="text-gray-700 mb-2">Up to 5,00,000 off on Plays for a year</p>
            </div>

            {/* New Customer Offer */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md border-l-4 border-blue-700 col-span-1 md:col-span-2 lg:col-span-3">
              <h3 className="font-bold text-lg mb-2 text-blue-700">NEW CUSTOMERS * USE CODE: GTNEW *</h3>
              <ul className="list-disc list-inside space-y-2">
                <li className="text-gray-700">Get Flat 10% off on domestic flights*</li>
                <li className="text-gray-700">Flat 25% off on Hotels</li>
                <li className="text-gray-700">Flat 12% off on Buses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:w-2/3 max-md:w-11/12 mx-auto">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <h1 className="text-2xl font-bold text-blue-700 mb-4">
            Book Flights with Ghumtrip - Seamless, Affordable & Hassle-Free
          </h1>
          <p className="mb-4">Planning your next trip? Whether it&apos;s a domestic journey within India or an international adventure, Ghumtrip makes it simple to book cheap flights without any hassle.</p>

          <p className="mb-4">Our platform has an easy-to-use interface. It offers many airlines and affordable fares, helping you find the best travel deals.</p>

          <p className="mb-6">Ghumtrip helps you compare prices for last-minute trips and planned vacations. You can choose the best options and book quickly and safely. Whether you&apos;re flying for business or leisure, our efficient search engine and user-friendly experience make booking flights effortless.</p>

          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Why Choose Ghumtrip for Flight Booking?</h2>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li><strong>Best Deals & Transparent Pricing</strong> - No hidden charges, just competitive fares to save money.</li>
            <li><strong>Flexible Booking & Cancellations</strong> - Modify or cancel your booking with ease.</li>
            <li><strong>Wide Airline Options</strong> - Compare flight ticket pricing from multiple carriers in one place.</li>
            <li><strong>Seamless Booking Process</strong> - Quick search, secure payment, and instant confirmation.</li>
            <li><strong>24/7 Customer Support</strong> - Assistance anytime, anywhere for a smooth journey.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-600 mb-2">How to Book Flights on Ghumtrip?</h2>
          <ol className="list-decimal list-inside mb-6 space-y-1">
            <li><strong>Enter Your Travel Details</strong> - Select your departure and arrival locations, travel dates, and the number of passengers.</li>
            <li><strong>Compare Flight Options</strong> - Browse through available airlines, fares, and schedules.</li>
            <li><strong>Select the Best Flight</strong> - Choose a flight that fits your budget and timing.</li>
            <li><strong>Complete the Booking</strong> - Enter passenger details, apply any available offers, and make a secure payment.</li>
            <li><strong>Receive Instant Confirmation</strong> - Get an e-ticket and travel details in your inbox.</li>
          </ol>

          <p className="mb-6">Whether you need to book domestic flights for a weekend getaway or international flights for a vacation abroad, Ghumtrip provides a smooth and convenient experience.</p>

          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Enjoy a Hassle-Free Travel Experience</h2>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li>Real-time flight status tracking</li>
            <li>Secure payment and data protection</li>
            <li>Comprehensive travel insurance options</li>
            <li>Baggage allowance details and add-ons</li>
            <li>Special assistance services for senior citizens and infants</li>
          </ul>
          <p className="mb-6">From budget flights to luxury travel, Ghumtrip ensures a smooth, stress-free booking process, helping you save both time and money.</p>

          <h2 className="text-2xl font-semibold text-blue-600 mb-2">FAQs: Book Flights with Ghumtrip</h2>
          <ul className="space-y-4 mb-8">
            <li><strong>How can I check my flight status on Ghumtrip?</strong><br />
              You can check your flight status by entering your booking details on the &apos;Manage Booking&apos; section of the Ghumtrip website or app.
            </li>
            <li><strong>Does Ghumtrip offer refunds on cancelled tickets?</strong><br />
              Yes, refunds are processed based on the airline&apos;s cancellation policy. Any applicable charges will be deducted.
            </li>
            <li><strong>Can I book one-way and round-trip flights on Ghumtrip?</strong><br />
              Yes, Ghumtrip allows you to book both one-way and round-trip flights as per your travel needs.
            </li>
            <li><strong>Are there any additional charges on flight bookings?</strong><br />
              Ghumtrip ensures transparent pricing with no hidden charges. Any applicable taxes or fees are displayed at checkout.
            </li>
            <li><strong>How do I get the best flight deals on Ghumtrip?</strong><br />
              You can check ongoing offers, set fare alerts, and book in advance for the best flight prices.
            </li>
            <li><strong>Can I modify my flight booking?</strong><br />
              Yes, you can make flight modifications, such as changing the date or time, subject to airline policies and fees.
            </li>
            <li><strong>What payment methods does Ghumtrip accept?</strong><br />
              Ghumtrip accepts multiple payment methods, including credit/debit cards, UPI, net banking, and digital wallets.
            </li>
            <li><strong>Is it safe to book flights on Ghumtrip?</strong><br />
              Absolutely! Ghumtrip uses secure encryption technology to protect your payment and personal details.
            </li>
            <li><strong>Can I select my seat while booking?</strong><br />
              Yes, many airlines allow seat selection during booking or after ticket confirmation.
            </li>
            <li><strong>How will I receive my e-ticket?</strong><br />
              Once you confirm your booking, we will send your e-ticket to your email. You can also access it on the Ghumtrip app.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-red-600 mb-2">Disclaimer</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Flight fares are dynamic and subject to availability at the time of booking.</li>
            <li>Refunds, cancellations, and modifications are as per the airlines&apos; policies.</li>
            <li>Before the final payment, we will display any additional charges, taxes, or surcharges.</li>
            <li>Ghumtrip is a travel aggregator and does not operate its own flights.</li>
            <li>Discounts and offers are subject to the terms and conditions specified on the website.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}