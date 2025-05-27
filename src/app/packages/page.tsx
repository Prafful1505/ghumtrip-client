'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from "@/components/Navbar";

const PackagesPage: React.FC = () => {
  const packages = [
    {
      name: 'Bali Wellness Retreat',
      price: 'INR 2,00,000',
      duration: '7 Days',
      image: '/Images/bali-retreat.jpg',
      link: '/packages/bali-retreat',
      highlights: ['Spa Treatments', 'Yoga Sessions', 'Beachfront Villa'],
    },
    {
      name: 'Paris Romantic Getaway',
      price: 'INR 2,80,000',
      duration: '5 Days',
      image: '/Images/paris-romance.jpg',
      link: '/packages/paris-romance',
      highlights: ['Eiffel Tower Dinner', 'Seine River Cruise', 'Luxury Hotel'],
    },
    {
      name: 'African Safari Adventure',
      price: 'INR 3,50,000',
      duration: '10 Days',
      image: '/Images/safari-adventure.jpg',
      link: '/packages/safari-adventure',
      highlights: ['Big Five Safari', 'Luxury Lodge', 'Guided Tours'],
    },
    {
      name: 'Amalfi Coast Escape',
      price: 'INR 2,60,000',
      duration: '6 Days',
      image: '/Images/italy-coast.jpg',
      link: '/packages/italy-coast',
      highlights: ['Yacht Tour', 'Coastal Dining', 'Private Villa'],
    },
    {
      name: 'Japan Zen Journey',
      price: 'INR 3,00,000',
      duration: '8 Days',
      image: '/Images/japan-zen.jpg',
      link: '/packages/japan-zen',
      highlights: ['Kyoto Temples', 'Ryokan Stay', 'Cultural Tours'],
    },
  ];

  const heroImages = [
    '/Images/hero-luxury.jpg',
    '/Images/hero-tropical.jpg',
    '/Images/hero-mountain.jpg',
    '/Images/hero-city.jpg',
  ];

  const [filteredPackages, setFilteredPackages] = useState(packages);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = packages.filter(
      (pkg) =>
        pkg.name.toLowerCase().includes(term) ||
        pkg.highlights.some((highlight) => highlight.toLowerCase().includes(term))
    );
    setFilteredPackages(filtered);
  };

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

  const [packagesRef, packagesControls] = useScrollAnimation();

  return (
    <div className="min-h-screen bg-cream-50 font-sans">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
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
              className="text-5xl md:text-6xl font-bold mb-4 font-serif tracking-normal text-navy-900"
            >
              Discover Our Luxury Travel Packages
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl md:text-2xl font-sans font-medium tracking-normal text-navy-900"
            >
              Curated Journeys for the Discerning Traveler
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Search Bar */}
      <section className="py-10 px-6 md:px-20 bg-cream-50">
        <div className="max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="Search packages by destination or highlights..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-4 rounded-lg border-2 border-gold-400 focus:outline-none focus:border-gold-600 text-navy-900 placeholder-navy-600 text-lg"
          />
        </div>
      </section>

      {/* Packages Section */}
      <motion.section
        ref={packagesRef}
        className="py-20 px-6 md:px-20 bg-cream-50"
        initial="hidden"
        animate={packagesControls}
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
      >
        <motion.h2
          initial="hidden"
          animate={packagesControls}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
          className="text-4xl font-bold text-navy-900 mb-12 text-center font-serif tracking-wide"
        >
          Our Exclusive Packages
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.length > 0 ? (
            filteredPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={packagesControls}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.2 } } }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500"
              >
                <Link href={pkg.link} passHref>
                  <div className="relative group">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-navy-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </Link>
                <div className="p-6 text-navy-900">
                  <h3 className="text-xl font-semibold mb-2 font-serif tracking-wide">{pkg.name}</h3>
                  <p className="text-gold-600 font-semibold mb-2">{pkg.price}</p>
                  <p className="text-navy-800 mb-2">{pkg.duration}</p>
                  <ul className="list-disc list-inside text-navy-800 mb-4">
                    {pkg.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm">{highlight}</li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center">
                    <Link href={pkg.link} passHref>
                      <button className="bg-gradient-to-r from-gold-400 to-gold-600 text-navy-900 font-semibold px-4 py-2 rounded-lg hover:from-gold-500 hover:to-gold-700 transition-all duration-300">
                        View Package
                      </button>
                    </Link>
                    <div className="flex space-x-2">
                      <a
                        href={`https://twitter.com/intent/tweet?text=Check out this amazing ${pkg.name} package by Ghumtrip!&url=${encodeURIComponent(`https://yourwebsite.com${pkg.link}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-navy-900 hover:text-gold-600 transition-colors"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://yourwebsite.com${pkg.link}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-navy-900 hover:text-gold-600 transition-colors"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                      </a>
                      <a
                        href={`https://www.instagram.com/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-navy-900 hover:text-gold-600 transition-colors"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.948-.196-4.354-2.618-6.78-6.98-6.975-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-navy-900 text-center col-span-full text-lg">No packages found matching your search.</p>
          )}
        </div>
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

export default PackagesPage;