'use client';
import Navbar from "@/components/Navbar";
import React, { useState } from 'react';

export default function Trains() {
  const [classType, setClassType] = useState("all");

  return (
    <div className="bg-[#fafbfc]">
      <Navbar />
      <section className="pt-10 pb-5 flex gap-4">
        <div className="md:w-2/3 max-md:w-11/12 mx-auto  max-w-5xl">
          <h1 className="text-3xl font-bold">Search Trains</h1>
          <p>Enjoy hassle free train ticket bookings</p>
          <div className="mx-auto bg-white rounded-lg shadow-md p-6 my-4">
            {/* Route Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 mb-2">From</label>
                <input
                  type="text"
                  placeholder="City or City code"
                  spellCheck="false"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">To</label>
                <input
                  type="text"
                  placeholder="City or City code"
                  spellCheck="false"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Date Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 mb-2">Travel Date</label>
                <input
                  type="date"
                  spellCheck="false"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Cabin Class</label>
                <select
                  value={classType}
                  onChange={(e) => setClassType(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Class</option>
                  <option value="sleeper">Sleeper Class</option>
                  <option value="3ac">Third AC</option>
                  <option value="2ac">Second AC</option>
                  <option value="1ac">First AC</option>
                  <option value="2seating">Second Seating</option>
                  <option value="vistadome">Vistadome AC</option>
                  <option value="ac-chair-car">AC Chair Car</option>
                  <option value="first-class">First Class</option>
                  <option value="3ac-eco">Third AC Economy</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 cursor-pointer">
              Search Trains
            </button>
          </div>
        </div>
        <div>
          {/* Sidebar or Ads Section */}
        </div>
      </section>

      {/* Train Booking Info Section */}
      <section className="py-20 md:w-2/3 max-md:w-11/12 mx-auto">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <h1 className="text-3xl font-bold text-blue-700 mb-4">
            Book Train Tickets with Ghumtrip - Reliable, Convenient & Affordable
          </h1>
          <p className="mb-4">Ghumtrip offers a seamless experience for booking train tickets across India. Whether it&rsquo;s a quick commute or a long-distance journey, we ensure a smooth booking process with real-time availability and seat options.</p>

          <p className="mb-4">Our easy-to-use platform connects with Indian Railways systems to help you find trains, check schedules, and compare seat classes in just a few clicks.</p>

          <p className="mb-6">Plan your trip in advance or book last-minute — Ghumtrip provides transparent fares, multiple payment options, and instant confirmation.</p>

          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Why Book Trains with Ghumtrip?</h2>
          <ul className="list-disc list-inside mb-6 space-y-1">
            <li><strong>Live Train Availability</strong> - Instantly check available seats and classes.</li>
            <li><strong>Multiple Class Options</strong> - Sleeper, AC, Vistadome, Chair Car, and more.</li>
            <li><strong>Quick Booking & Secure Payments</strong> - Complete your ticket reservation in minutes.</li>
            <li><strong>PNR Status & Train Tracking</strong> - Get real-time updates for your journey.</li>
            <li><strong>24/7 Support</strong> - Assistance available anytime during your travel.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-blue-600 mb-2">How to Book Train Tickets on Ghumtrip?</h2>
          <ol className="list-decimal list-inside mb-6 space-y-1">
            <li><strong>Enter Travel Details</strong> - Fill in source, destination, date, and class preferences.</li>
            <li><strong>Browse Available Trains</strong> - View options with real-time seat availability.</li>
            <li><strong>Choose Your Seat</strong> - Select your preferred coach and seat/class.</li>
            <li><strong>Complete Passenger Info</strong> - Add traveler details.</li>
            <li><strong>Pay & Confirm</strong> - Make a secure payment and receive your e-ticket instantly.</li>
          </ol>

          <p className="mb-6">With Ghumtrip, booking train tickets is faster, easier, and more affordable. From budget travel to luxury train experiences, we have got you covered.</p>

          <h2 className="text-2xl font-semibold text-blue-600 mb-2">FAQs: Train Booking with Ghumtrip</h2>
          <ul className="space-y-4 mb-8">
            <li><strong>Can I book all types of train classes?</strong><br />
              Yes, you can book Sleeper, AC classes, Chair Car, and more based on availability.
            </li>
            <li><strong>Can I modify my train ticket?</strong><br />
              Modifications are subject to IRCTC policies and depend on ticket status and time left before departure.
            </li>
            <li><strong>Is Tatkal booking available?</strong><br />
              Yes, Ghumtrip supports Tatkal bookings as per IRCTC timings.
            </li>
            <li><strong>Are refunds available for cancelled tickets?</strong><br />
              Refunds are processed based on cancellation policy and class of ticket (confirmed/waitlisted/RAC).
            </li>
            <li><strong>What ID proof is required for booking?</strong><br />
              A valid government ID (Aadhaar, PAN, Passport, etc.) is required during travel, but not always at booking.
            </li>
            <li><strong>Is it safe to book trains on Ghumtrip?</strong><br />
              Absolutely! We use secure encryption to protect your data and payments.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-red-600 mb-2">Disclaimer</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li>Train schedules and seat availability are based on real-time IRCTC data.</li>
            <li>Cancellation, refunds, and rescheduling are subject to Indian Railways policies.</li>
            <li>Service charges and payment gateway fees (if any) will be shown before final checkout.</li>
            <li>Ghumtrip is a train ticketing partner and does not operate the trains.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
