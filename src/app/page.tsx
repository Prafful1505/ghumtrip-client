'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HomePage: React.FC = () => {
  const destinations = [
    { name: 'Santorini', image: '/Images/santorini.jpg', link: '/hotels?location=santorini' },
    { name: 'Dubai', image: '/Images/dubai.jpg', link: '/flights?to=DXB' },
    { name: 'Maldives', image: '/Images/maldives.jpg', link: '/packages?destination=maldives' },
    { name: 'Switzerland', image: '/Images/switzerland.jpg', link: '/packages?destination=switzerland' },
  ];

  const offers = [
    { text: 'Save INR 5000 with Elite Membership', icon: '/Icons/elite.png', link: '/offers/elite' },
    { text: '15% Off Luxury Packages', icon: '/Icons/luxury.png', link: '/offers/luxury' },
    { text: 'Complimentary Upgrades for Royals', icon: '/Icons/upgrade.png', link: '/offers/royals' },
    { text: 'Exclusive Sign-In Rewards', icon: '/Icons/reward.png', link: '/offers/rewards' },
  ];

  const luxuryPackages = [
    { name: 'Maldives Overwater Villa', price: 'INR 2,50,000', image: '/Images/maldives-villa.jpg', link: '/packages/maldives-villa' },
    { name: 'Swiss Alps Ski Retreat', price: 'INR 3,20,000', image: '/Images/swiss-alps.jpg', link: '/packages/swiss-alps' },
    { name: 'Dubai Luxury Desert Safari', price: 'INR 1,80,000', image: '/Images/dubai-safari.jpg', link: '/packages/dubai-safari' },
  ];

  const bookingLinks = [
    { name: 'Flights', link: '/flights', icon: '/Icons/package.png' },
    { name: 'Hotels', link: '/hotels', icon: '/Icons/package.png' },
    { name: 'Buses', link: '/buses', icon: '/Icons/package.png' },
    { name: 'Trains', link: '/trains', icon: '/Icons/package.png' },
    { name: 'Packages', link: '/packages', icon: '/Icons/package.png' },
  ];

  const heroImages = [
    '/Images/hero-luxury.jpg',
    '/Images/hero-tropical.jpg',
    '/Images/hero-mountain.jpg',
    '/Images/hero-city.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const useScrollAnimation = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.2,
      rootMargin: '0px',
    });

    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);

    return [ref, controls] as const;
  };

  const [heroRef] = useScrollAnimation();
  const [destRef, destControls] = useScrollAnimation();
  const [offerRef, offerControls] = useScrollAnimation();
  const [luxuryRef, luxuryControls] = useScrollAnimation();
  const [whyRef, whyControls] = useScrollAnimation();
  const [testimonialRef, testimonialControls] = useScrollAnimation();

  return (
    <div className="min-h-screen bg-cream-50 font-sans">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative h-[800px] bg-cover bg-center flex items-center justify-center"
      >
        {heroImages.map((image, index) => (
          <motion.div
            key={image}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
        <div className="absolute inset-0 bg-navy-900/30"></div>
        <div className="relative z-10 text-center px-6">
          <div className="bg-white/70 backdrop-blur-md rounded-xl p-8 max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-bold mb-4 font-serif tracking-normal text-navy-900"
            >
              Embark on a Royal Journey with Ghumtrip
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl md:text-2xl mb-8 font-sans font-medium tracking-normal text-navy-900"
            >
              Experience Luxury Travel Like Never Before
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {bookingLinks.map((item, index) => (
                <Link key={index} href={item.link} passHref>
                  <button className="bg-gradient-to-r from-gold-400 to-gold-600 text-navy-900 font-semibold px-8 py-4 rounded-lg hover:from-gold-500 hover:to-gold-700 transition-all duration-300 shadow-lg flex items-center gap-2 text-lg">
                    <Image src={item.icon} width={24} height={24} alt={`${item.name} Icon`} />
                    Book {item.name}
                  </button>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Popular Destinations Section */}
      <motion.section
        ref={destRef}
        className="py-20 px-6 md:px-20 bg-cream-50"
        initial="hidden"
        animate={destControls}
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
      >
        <motion.h2
          initial="hidden"
          animate={destControls}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
          className="text-4xl font-bold text-navy-900 mb-12 text-center font-serif tracking-wide"
        >
          Discover Exquisite Destinations
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((dest, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={destControls}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.2 } } }}
            >
              <Link href={dest.link} passHref>
                <div className="group rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-white">
                  <div className="relative">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-navy-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-4 text-center bg-white">
                    <h3 className="text-navy-900 text-xl md:text-2xl font-semibold font-serif tracking-wide">
                      {dest.name}
                    </h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Luxury Travel Packages Section */}
      <motion.section
        ref={luxuryRef}
        className="py-20 px-6 md:px-20 bg-navy-900 text-cream-50"
        initial="hidden"
        animate={luxuryControls}
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
      >
        <motion.h2
          initial="hidden"
          animate={luxuryControls}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
          className="text-4xl font-bold mb-12 text-center font-serif tracking-wide"
        >
          Indulge in Luxury Travel Packages
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {luxuryPackages.map((pkg, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={luxuryControls}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.2 } } }}
            >
              <Link href={pkg.link} passHref>
                <div className="bg-cream-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500">
                  <Image src={pkg.image} alt={pkg.name} width={400} height={250} className="w-full h-48 object-cover" />
                  <div className="p-6 text-navy-900">
                    <h3 className="text-xl font-semibold mb-2 font-serif tracking-wide">{pkg.name}</h3>
                    <p className="text-gold-600 font-semibold mb-4">{pkg.price}</p>
                    <button className="bg-gradient-to-r from-gold-400 to-gold-600 text-navy-900 font-semibold px-4 py-2 rounded-lg hover:from-gold-500 hover:to-gold-700 transition-all duration-300">
                      Explore Package
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Special Offers Section */}
      <motion.section
        ref={offerRef}
        className="py-20 px-6 md:px-20 bg-cream-50"
        initial="hidden"
        animate={offerControls}
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
      >
        <motion.h2
          initial="hidden"
          animate={offerControls}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
          className="text-4xl font-bold text-navy-900 mb-12 text-center font-serif tracking-wide"
        >
          Exclusive Royal Offers
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              animate={offerControls}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: idx * 0.2 } } }}
            >
              <Link href={offer.link} passHref>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-500 flex items-start gap-4 border-l-4 border-gold-400">
                  <Image src={offer.icon} width={40} height={40} alt="Offer Icon" />
                  <div>
                    <p className="text-navy-900 font-semibold">{offer.text}</p>
                    <span className="text-gold-600 text-sm font-medium">Discover More</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Choose Ghumtrip Section */}
      <motion.section
        ref={whyRef}
        className="py-20 px-6 md:px-20 bg-navy-900 text-cream-50"
        initial="hidden"
        animate={whyControls}
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
      >
        <motion.h2
          initial="hidden"
          animate={whyControls}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
          className="text-4xl font-bold mb-12 text-center font-serif tracking-wide"
        >
          Why Travel with Ghumtrip?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial="hidden"
            animate={whyControls}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } } }}
            className="text-center"
          >
            <div className="bg-gold-400 rounded-full p-4 inline-block mb-4">
              <svg className="w-8 h-8 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 font-serif tracking-wide">Exquisite Service</h3>
            <p className="text-cream-200">Indulge in seamless booking with personalized care.</p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={whyControls}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } } }}
            className="text-center"
          >
            <div className="bg-gold-400 rounded-full p-4 inline-block mb-4">
              <svg className="w-8 h-8 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c2.21 0 4-1.79 4-4s-1.79-4-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 font-serif tracking-wide">Royal Support</h3>
            <p className="text-cream-200">24/7 concierge assistance for a majestic journey.</p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={whyControls}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6 } } }}
            className="text-center"
          >
            <div className="bg-gold-400 rounded-full p-4 inline-block mb-4">
              <svg className="w-8 h-8 text-navy-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 font-serif tracking-wide">Premium Value</h3>
            <p className="text-cream-200">Unmatched prices for a luxurious experience.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Testimonial Section */}
      <motion.section
        ref={testimonialRef}
        className="py-20 px-6 md:px-20 bg-cream-50"
        initial="hidden"
        animate={testimonialControls}
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
      >
        <motion.h2
          initial="hidden"
          animate={testimonialControls}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
          className="text-4xl font-bold text-navy-900 mb-12 text-center font-serif tracking-wide"
        >
          What Our Royals Say
        </motion.h2>
        <motion.div
          initial="hidden"
          animate={testimonialControls}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } } }}
          className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg border-t-4 border-gold-400"
        >
          <p className="text-navy-900 text-lg italic mb-4">
            Ghumtrip turned our dream vacation into a royal experience. From seamless bookings to personalized support, every detail was perfection.
          </p>
          <p className="text-gold-600 font-semibold">— Priya Sharma, Elite Member</p>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-navy-900 text-cream-50 py-12 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 font-serif tracking-wide">Ghumtrip</h3>
            <p className="text-cream-200">Crafting Royal Journeys Since 2025</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 font-serif tracking-wide">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-cream-200 hover:text-gold-400 transition-colors">About Us</Link></li>
              <li><Link href="/support" className="text-cream-200 hover:text-gold-400 transition-colors">Support</Link></li>
              <li><Link href="/policies" className="text-cream-200 hover:text-gold-400 transition-colors">Policies</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 font-serif tracking-wide">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-cream-200 hover:text-gold-400 transition-colors">Facebook</a>
              <a href="#" className="text-cream-200 hover:text-gold-400 transition-colors">Twitter</a>
              <a href="#" className="text-cream-200 hover:text-gold-400 transition-colors">Instagram</a>
            </div>
          </div>
        </div>
        <div className="text-center text-cream-200 mt-8">
          © 2025 Ghumtrip. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;