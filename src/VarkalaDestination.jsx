import React, { useState } from "react";

const highlights = [
  "Cliffside Views",
  "Ayurvedic Spas",
  "Holy Papanasam Beach",
  "Surfing Lessons",
  "Fresh Seafood",
  "2000-Year-Old Temple",
];

const itinerary = [
  {
    day: "Day 1: Arrival & Cliffside Sunset",
    details:
      "Arrive at Varkala and check into your cliff-top resort. Spend the evening strolling along the North Cliff, exploring quirky cafes, and watching the most magnificent sunset from the edge of the cliff. Welcome dinner featuring local Kerala cuisine included.",
  },
  {
    day: "Day 2: Spirituality & Spa",
    details:
      "Morning visit to the Janardana Swami Temple. Afterward, head to the Papanasam Beach for a holy dip. In the afternoon, indulge in a 90-minute traditional Ayurvedic massage. Evening at leisure for beach activities or surfing.",
  },
  {
    day: "Day 3: Kappil Lake & Departure",
    details:
      "Short drive to Kappil Lake where the backwaters meet the sea. Enjoy a boat ride before checking out. Transfer to the station/airport for your journey back home with beautiful memories of the cliff city.",
  },
];

const packages = [
  {
    name: "Budget Explorer",
    subtitle: "Perfect for solo travelers",
    price: "₹4,999",
    cta: "Select Plan",
    featured: false,
    points: ["Guesthouse Stay", "Breakfast Included", "Shared Airport Transfer"],
  },
  {
    name: "Standard Bliss",
    subtitle: "Best for couples & friends",
    price: "₹8,499",
    cta: "Book Standard",
    featured: true,
    points: ["3-Star Cliff Resort", "Half Board (B+D)", "Private Taxi Sightseeing", "Spa Voucher Included"],
  },
  {
    name: "Luxury Retreat",
    subtitle: "Exclusive beach luxury",
    price: "₹14,999",
    cta: "Select Luxury",
    featured: false,
    points: ["5-Star Heritage Stay", "All Meals Included", "Personal Guided Tours"],
  },
];

const similarDestinations = [
  {
    title: "Kovalam Beach",
    description: "The crescent beach of the south with its iconic lighthouse.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC8CmcGRIPM0o3XBO0wqV3NtwhnI_yYIPVBjFmecvGYAgbZJORToHFmK2H257Oh5gJttrVwlzi5WENxOpweo4QWu1CEeuG5zcudog0sA7KyYDDe9mYXFp-x-K1iMooc83Wf8L_1EkZsBJMV2rq37Qv3KcKXo5kUYCeLnVJKq-bU-kIOWGIcmrfsWL3MjN8tYuYB7uMtVah01PgiaT39KQSg8R_gFTbmnOxVpcQ7LTLi7yP3A3sL7rpQqwoTBQpXV7d_wCiP1hCw4Y40",
  },
  {
    title: "Munnar Tea Estates",
    description: "Verdant hills and vast tea plantations in the Western Ghats.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD7xW1un6hKvfG_O4ZJxGNcdYETA5BSeKLl_umXCUKkNUWNP0KawZQGzcds9XEoUeV_wIrin9nAswabjoQNAeMHbYDFWLOso6Oz8DYqiT2HoTZquDAnoXQ_KD2FuXVdTVhkSA7h0_osivRWiZcbPgsNviPXDP5oowRekxD0896pIUlj0i0qAA0IdN6fuo10ri5hTMjYR0VcqNTYikAdmApM4hD8JF204FhyUApdvgUYlXS_IP0suMHG6VOndEIzqERg9e2mz6_I4mGF",
  },
  {
    title: "Alleppey Backwaters",
    description: "Serene houseboat stays through the intricate canal networks.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAF9CXtT-W5MnrQgn9-5Ef6sYOyd7827J6GmsjvKBrCySES_C1SNgbhOlYSXm_0U2dW9_BktxtrODj0_oXHxGqrSKGuSdAMT50wuAX4ofdy4Xi4-Z34Jrbzd9oLrn3XAYN6CzZehY3D800tXgImSrmA4Ww1AKzhLdZ9tDwnBCw4IXGsTu2fh0SF28rO8rtWshmh17_72RZjGO6K_m8E2b8-94hmQnLtyMwBaNLbeW4FNyyTT3VP8HtrMj-rVGRBUQ2wBGoGxaYDF5yz",
  },
];

function CheckMarkIcon() {
  return (
    <svg className="w-4 h-4 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
    </svg>
  );
}

export default function DestinationViewerPage({ onBackDestinations, onBackHome }) {
  const [selectedPackage, setSelectedPackage] = React.useState(null);

  const handleSelectPackage = (pkg) => {
    setSelectedPackage(pkg.name);
  };

  const handleBackDestinations = (event) => {
    if (onBackDestinations) {
      event.preventDefault();
      onBackDestinations();
    }
  };

  const handleBackHome = (event) => {
    if (onBackHome) {
      event.preventDefault();
      onBackHome();
    }
  };

  return (
    <div className="bg-[#F5F0E8] text-[#1A1A2E] font-sans antialiased min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(26,26,46,0.8)] backdrop-blur-[10px] border-b border-white/10" data-purpose="main-navigation">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 h-20 flex items-center justify-between">
          <a className="flex items-center gap-3" href="#/" onClick={handleBackHome}>
            <img src="/logo.jpg" alt="Sai Dharma Logo" className="w-11 h-11 rounded-full object-cover object-top border-2 border-white/40" />
            <span className="flex flex-col leading-tight">
              <span className="text-white font-semibold text-xl tracking-tight">Sai Dharma</span>
              <span className="text-[rgba(255,255,255,0.7)] text-[10px] tracking-[0.2em] font-semibold">TOURS &amp; TRAVELS</span>
            </span>
          </a>
          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-2 py-2 text-white font-medium backdrop-blur-sm">
              <a className="rounded-full px-4 py-1.5 hover:text-[#FF6B2B] hover:bg-white/15 transition-colors" href="#/" onClick={handleBackHome}>Home</a>
              <a className="rounded-full px-4 py-1.5 text-[#FF6B2B] bg-white/10" href="#/destinations" onClick={handleBackDestinations}>Destinations</a>
              <a className="rounded-full px-4 py-1.5 hover:text-[#FF6B2B] hover:bg-white/15 transition-colors" href="#">Packages</a>
              <a className="rounded-full px-4 py-1.5 hover:text-[#FF6B2B] hover:bg-white/15 transition-colors" href="#">Contact</a>
            </div>
          </div>
          <button className="border-[1.5px] border-[#FF6B2B] text-[#FF6B2B] bg-transparent px-6 py-2 rounded-[30px] font-semibold hover:bg-[#FF6B2B] hover:text-white transition-colors" type="button">
            Book Now
          </button>
        </div>
      </nav>

      <section className="relative h-[560px] flex items-end pt-20 overflow-hidden" data-purpose="hero">
        <img
          alt="Varkala Cliffside View"
          className="absolute inset-0 w-full h-full object-cover"
          src="/varkala1.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,26,46,0.4)] to-[rgba(26,26,46,0.8)]" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-20 pb-16 text-white">
          <a className="inline-flex items-center text-sm mb-6 rounded-full border border-white/30 bg-[rgba(255,255,255,0.15)] px-4 py-2 hover:bg-[rgba(255,255,255,0.22)] hover:text-[#FF6B2B] transition-colors" href="#/destinations" onClick={handleBackDestinations}>
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
            Back to Destinations
          </a>
          <nav aria-label="Breadcrumb" className="flex text-sm text-gray-300 mb-4">
            <ol className="flex list-none p-0">
              <li className="flex items-center"><a href="#/" onClick={handleBackHome}>Home</a></li>
              <li className="flex items-center mx-2">/</li>
              <li className="flex items-center"><a href="#/destinations" onClick={handleBackDestinations}>Destinations</a></li>
              <li className="flex items-center mx-2">/</li>
              <li className="text-[#FF6B2B] font-semibold">Varkala Beach</li>
            </ol>
          </nav>
          <span className="inline-block bg-[#FF6B2B] text-white text-xs font-bold px-3 py-1 rounded tracking-widest mb-4">COASTAL</span>
          <h1 className="text-[42px] font-bold leading-[1.2]">Varkala Beach: The Pearl of Arabian Sea</h1>
        </div>
      </section>

      <div className="relative z-10 -mt-[30px] md:-mt-[50px] mx-[16px] md:mx-[80px]" data-purpose="stats-bar">
        <div className="bg-white rounded-[16px] shadow-[0_8px_32px_rgba(0,0,0,0.12)] px-[32px] py-[24px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              ["Duration", "3 Days"],
              ["Best Time", "Oct - Mar"],
              ["State", "Kerala"],
              ["Starting From", "₹4,999+"],
            ].map(([label, value], index) => (
              <div key={label} className="relative text-center">
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">{label}</p>
                <p className={`font-bold ${label === "Starting From" ? "text-[#FF6B2B]" : "text-[#1A1A2E]"}`}>{value}</p>
                {index < 3 && <div className="hidden md:block absolute right-0 top-0 w-px h-full bg-[rgba(0,0,0,0.08)] self-stretch" aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="px-6 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12" data-purpose="about-section">
        <div className="lg:col-span-2">
          <h2 className="mb-6 text-[#1A1A2E] text-[28px] font-semibold leading-[1.3]">The Pristine Cliffs of Varkala</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Varkala is a coastal town in the Thiruvananthapuram district of Kerala. It is the only place in southern Kerala where cliffs are found adjacent to the Arabian Sea. These tertiary sedimentary formation cliffs are a unique geological feature on the otherwise flat Kerala coast, and are known among geologists as Varkala Formation.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Beyond its geological marvels, Varkala is famous for the 2,000-year-old Janardana Swami Temple, also known as Dakshin Kashi. The Papanasam Beach (Varkala Beach) is believed to have holy waters which wash away sins, making it a perfect blend of spiritual solace and coastal adventure.
          </p>
        </div>
        <div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100" data-purpose="info-card">
            <h3 className="font-bold text-xl mb-6 border-b border-gray-100 pb-4">Trip Information</h3>
            <ul className="space-y-4">
              <li className="flex justify-between"><span className="text-gray-500">Type:</span><span className="font-semibold">Coastal / Pilgrimage</span></li>
              <li className="flex justify-between"><span className="text-gray-500">Language:</span><span className="font-semibold">Malayalam, English</span></li>
              <li className="flex justify-between"><span className="text-gray-500">Currency:</span><span className="font-semibold">INR (₹)</span></li>
              <li className="flex justify-between"><span className="text-gray-500">Best For:</span><span className="font-semibold">Couples, Solo, Spiritual</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-20 py-16 bg-white" data-purpose="highlights">
        <h2 className="text-center mb-10 text-[28px] font-semibold leading-[1.3]">Destination Highlights</h2>
        <div className="grid grid-cols-3 gap-3 h-[480px] mb-10">
          <div className="h-full overflow-hidden rounded-[12px]">
            <img alt="Varkala Highlight 1" className="w-full h-full object-cover object-center" src="/varkala1.jpg" />
          </div>
          <div className="h-full overflow-hidden rounded-[12px]">
            <img alt="Varkala Highlight 2" className="w-full h-full object-cover object-center" src="/varkala2.jpg" />
          </div>
          <div className="relative h-full overflow-hidden rounded-[12px]">
            <img alt="Varkala Highlight 3" className="w-full h-full object-cover object-center" src="/varkala3.jpg" />
            <div className="absolute inset-0 bg-black/35 flex items-center justify-center text-white text-xl font-bold">+4 more</div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {highlights.map((item) => (
            <span key={item} className="bg-[#FF6B2B]/10 text-[#FF6B2B] border border-[#FF6B2B]/20 px-6 py-3 rounded-full font-semibold">{item}</span>
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-20 py-16" data-purpose="itinerary">
        <h2 className="mb-12 text-[28px] font-semibold leading-[1.3]">Detailed Itinerary</h2>
        <div className="space-y-0 border-l-4 border-[#FF6B2B]/30 ml-4 lg:ml-8">
          {itinerary.map((item, index) => (
            <div key={item.day} className={`relative pl-10 ${index < itinerary.length - 1 ? "pb-12" : ""}`}>
              <div className="absolute -left-[14px] top-0 w-6 h-6 bg-[#FF6B2B] rounded-full border-4 border-[#F5F0E8]" />
              <h3 className="font-bold text-xl text-[#FF6B2B] mb-2">{item.day}</h3>
              <p className="text-gray-700">{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-20 py-16 bg-white" data-purpose="packages">
        <h2 className="text-center mb-12 text-[28px] font-semibold leading-[1.3]">Choose Your Comfort</h2>
        {selectedPackage && (
          <div className="mb-8 flex items-center justify-between bg-[#FF6B2B]/10 border border-[#FF6B2B]/30 rounded-xl px-6 py-4">
            <p className="text-[#FF6B2B] font-semibold">✓ <span className="font-bold">{selectedPackage}</span> selected — our team will reach out to confirm your booking!</p>
            <button onClick={() => setSelectedPackage(null)} className="text-gray-400 hover:text-gray-600 ml-4 text-lg leading-none" aria-label="Dismiss">&times;</button>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => {
            const isSelected = selectedPackage === pkg.name;
            const cardClass = pkg.featured
              ? `${isSelected ? "bg-[rgba(255,107,43,0.06)]" : "bg-white"} border-2 border-[#FF6B2B] rounded-2xl p-8 flex flex-col h-full relative shadow-2xl scale-100 lg:scale-105 z-10`
              : `${isSelected ? "border-2 border-[#FF6B2B] bg-[rgba(255,107,43,0.04)]" : "border-[0.5px] border-[rgba(0,0,0,0.08)] bg-white"} rounded-2xl p-8 flex flex-col h-full hover:shadow-xl transition-shadow`;
            const buttonClass = pkg.featured
              ? "cursor-pointer w-full bg-[#FF6B2B] text-white font-bold py-3 rounded-lg hover:bg-orange-600 active:scale-95 transition-all"
              : `${isSelected ? "bg-[#FF6B2B] text-white border-0" : "bg-transparent border-[1.5px] border-[#FF6B2B] text-[#FF6B2B]"} cursor-pointer w-full font-bold py-3 rounded-lg active:scale-95 transition-all`;

            return (
              <div
                key={pkg.name}
                className={cardClass}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6B2B] text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">Most Popular</div>
                )}
                <h3 className="font-bold text-xl mb-2">{pkg.name}</h3>
                <p className="text-gray-500 mb-6">{pkg.subtitle}</p>
                <div className="text-3xl font-bold mb-6">{pkg.price}<span className="text-sm font-normal text-gray-400"> / person</span></div>
                <ul className="space-y-4 mb-8 flex-grow">
                  {pkg.points.map((point) => (
                    <li key={point} className="flex items-center text-sm"><CheckMarkIcon />{point}</li>
                  ))}
                </ul>
                <button onClick={() => handleSelectPackage(pkg)} className={buttonClass} type="button">{isSelected ? "✓ Selected" : pkg.cta}</button>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-6 lg:px-20 py-16" data-purpose="similar-destinations">
        <h2 className="mb-10 text-[28px] font-semibold leading-[1.3]">Similar Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {similarDestinations.map((item) => (
            <div key={item.title} className="bg-white rounded-xl overflow-hidden shadow-md group">
              <div className="h-48 overflow-hidden">
                <img alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={item.image} />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{item.description}</p>
                <a className="text-[#FF6B2B] font-bold text-sm inline-flex items-center" href="#">Explore Now <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-[#1A1A2E] text-white px-6 lg:px-20 py-16" data-purpose="footer">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex flex-col leading-tight mb-6">
              <span className="text-[#FF6B2B] font-bold text-xl tracking-tight">SAI DHARMA</span>
              <span className="text-white text-[10px] tracking-[0.2em] font-semibold">TOURS &amp; TRAVELS</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">Your trusted partner for memorable journeys across India's most breathtaking destinations.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a className="hover:text-[#FF6B2B]" href="#/" onClick={handleBackHome}>Home</a></li>
              <li><a className="hover:text-[#FF6B2B]" href="#/destinations" onClick={handleBackDestinations}>All Destinations</a></li>
              <li><a className="hover:text-[#FF6B2B]" href="#">All Packages</a></li>
              <li><a className="hover:text-[#FF6B2B]" href="#">Taxi Services</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Policies</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a className="hover:text-[#FF6B2B]" href="#">Terms &amp; Conditions</a></li>
              <li><a className="hover:text-[#FF6B2B]" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-[#FF6B2B]" href="#">Cancellation Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <p className="text-gray-400 text-sm mb-4">Varkala Cliff, Kerala, India</p>
            <p className="text-gray-400 text-sm mb-4">+91 98765 43210</p>
            <p className="text-gray-400 text-sm">support@saidharmatours.com</p>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-xs">
          © 2026 Sai Dharma Tours &amp; Travels. All Rights Reserved.
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 bg-white z-50 border-t border-gray-100 hidden md:block shadow-[0_-4px_20px_rgba(0,0,0,0.1)]" data-purpose="sticky-cta">
        <div className="max-w-7xl mx-auto px-10 lg:px-20 py-4 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[#1A1A2E] font-bold text-lg">Varkala Beach Expedition</span>
            <span className="text-[#FF6B2B] font-bold">Starts from ₹4,999/-</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-[#1A1A2E] font-bold px-6 py-2 hover:bg-gray-100 rounded-lg transition-colors" type="button">Share</button>
            <button className="bg-[#FF6B2B] text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors" type="button">Book a Taxi</button>
            <button className="bg-[#FF6B2B] text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors" type="button">Enquire Now</button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white z-50 border-t border-gray-100 md:hidden flex p-4 gap-2 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <button className="flex-1 bg-[#FF6B2B] text-white py-3 rounded-lg font-bold text-sm hover:bg-orange-600 transition-colors" type="button">Book Taxi</button>
        <button className="flex-1 bg-[#FF6B2B] text-white py-3 rounded-lg font-bold text-sm" type="button">Enquire Now</button>
      </div>

      <div className="h-24 md:h-20 bg-[#F5F0E8]" />
    </div>
  );
}
