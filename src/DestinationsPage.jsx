import React, { useState } from "react";

const cards = [
  {
    title: "Puttaparthi",
    region: "Andhra Pradesh",
    category: "Spiritual",
    duration: "2-3 days",
    image: "/ptp home.jpg",
  },
  {
    title: "Alleppey Backwaters",
    region: "Kerala",
    category: "Nature",
    duration: "1-2 days",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLuj1d5Ez78vUG0Z6XSEUB_1WTxiO2UlVJpjklGEGu5YlbAPae1PmOytgdyeESkpJZDemuOyGSfkHL1YNgdxK1O9JdJqJkZ6op-jFr1PaYMWHOqcBFiGtevYrPAqR0z7ZvaJbbCV_Jfa08cZ4xTrWFnEPSrydcFs67oqfPQbc3nbyMXqGEw_PsioqXqOqJHJ1CAT9J2JrUQKShyy-jd5Tw9g2N8YL4AeHyEL_KkvTpKEN_aUTxtFm7kEMdrVkqlYf_HxGaxUKFCCDL",
  },
  {
    title: "Hampi Ruins",
    region: "Karnataka",
    category: "Spiritual",
    duration: "3-4 days",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3mZr7wuwfI9CYcaJFSGM8rOZCJ1MIPjf_MAwUJVdpfESlS95UxEo7lIh2gIrDRSvAIAYljh9XvsJmjL8Erl_ZMSn0UQVNf-02V0uVeLlVg60ZtJ29l_7RfjBD6YIrBcc9Ts3LsgTAlLbLNF9amSxMuyPE9Gk6OigQTObpZ8zyxwT18Hh9IyK00XnUIHavuqzAvPE92IcF-8sOY44XL-UQ9BShfqxHP_XaqcHBcBqFi-bbO1wrE9OdOeQ7sGPrgqmaKO2nVZfxN6CE",
  },
  {
    title: "Varkala Beaches",
    region: "Kerala",
    category: "Coastal",
    duration: "2-3 days",
    image: "https://i.pinimg.com/736x/ae/6e/c8/ae6ec86427bd5ce1a73a47f111398ba7.jpg",
  },
  {
    title: "Ooty Highlands",
    region: "Tamil Nadu",
    category: "Highlands",
    duration: "3-4 days",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVMXbj1pDVosXV3aBaygWrZhGWVPLFPAL63YgnjPAmveopEiLXmhOCSX7nucA2iNXx-nWUSFAeiOPN4MOJY-Z0vhGKy0ohDiQXxg8WjaF_jZu_ONNLHUzZHTAcTLeA2eSyqYHNJnsVWbNhyc986482O_4CjowKQuxBxSh4FfdGW0E7i2GWZIbmK3JrZdr0c6ojXhgXQc4hYRWL5An9ZW4pF3MEtRkJidFWfPCOsFnyYSMrpZaTcKWmaAkC0WWgYpUuDw9LmGEIYMrS",
  },
  {
    title: "Periyar Tiger Reserve",
    region: "Kerala",
    category: "Wildlife",
    duration: "2-3 days",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBATlfM8gs8iGEjCMr1JHXzRDJ41t1iDBxCLpMTxFWAyZUTJnpyuI81pqpViEKvedD5KujsE5oBjVQq-HFAFSPxfawOBWYp7XSSivpn77kF0xn-kHGrgKkwpGfmTlfjotcYXahjlCeReht7m3w-S6fRuJctRLbMVxzu1qIcOslFcPMn25UfWimqxZceQsdoqPYOu3923TAM74OgTirExq22rWy5mZYNiZvpw6r9XPjXiRE2r9k1ffX7A27pkNuYwfrQLYNssX0BVLxL",
  },

  // New destinations
  {
    title: "Mysore Palace",
    region: "Karnataka",
    category: "Heritage",
    duration: "2 days",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Kodaikanal Lake",
    region: "Tamil Nadu",
    category: "Nature",
    duration: "2-3 days",
    image: "https://images.unsplash.com/photo-1464983953574-0892a7162a47?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Rameswaram",
    region: "Tamil Nadu",
    category: "Spiritual",
    duration: "2 days",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Coorg Coffee Estates",
    region: "Karnataka",
    category: "Highlands",
    duration: "3 days",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Madurai Meenakshi Temple",
    region: "Tamil Nadu",
    category: "Spiritual",
    duration: "1-2 days",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Kabini Wildlife Sanctuary",
    region: "Karnataka",
    category: "Wildlife",
    duration: "2 days",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f3b43?auto=format&fit=crop&w=800&q=80",
  },
];

export default function DestinationsPage({ onBackHome }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMoreDestinations, setShowMoreDestinations] = useState(false);
  const initialVisibleCount = Math.max(cards.length - 6, 0);
  const visibleCards = showMoreDestinations ? cards : cards.slice(0, initialVisibleCount);

  // Navbar scroll logic
  React.useEffect(() => {
    const navbar = document.querySelector('.site-navbar, .navbar, header');
    if (navbar) {
      navbar.classList.add('glass');
      navbar.classList.remove('scrolled');
      const handleScroll = () => {
        if (window.scrollY < 80) {
          navbar.classList.add('glass');
          navbar.classList.remove('scrolled');
        } else {
          navbar.classList.add('scrolled');
          navbar.classList.remove('glass');
        }
      };
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const goHome = (event) => {
    if (onBackHome) {
      event.preventDefault();
      onBackHome();
    }
  };

  return (
    <div className="bg-[#F5F0E8] text-slate-900 min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 h-[60px] bg-[rgba(0,0,0,0.15)] backdrop-blur-[12px] border-b border-white/20 flex items-center">
        <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a className="flex items-center gap-2" href="#/" onClick={goHome}>
            <img src="/logo.jpg" alt="Sai Dharma Logo" className="w-10 h-10 rounded-full object-cover object-top border-2 border-white/40" />
            <div className="flex flex-col leading-tight">
              <span className="text-white text-[16px] font-semibold">Sai Dharma</span>
              <span className="text-[rgba(255,255,255,0.7)] text-[11px] tracking-[0.05em]">TOURS &amp; TRAVELS</span>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-white">
            <a className="hover:text-[#FF6B2B] transition-colors" href="#/destinations">Destinations</a>
            <a className="hover:text-[#FF6B2B] transition-colors" href="#">Taxi</a>
            <a className="hover:text-[#FF6B2B] transition-colors" href="#">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a className="hidden sm:flex items-center gap-2 text-sm font-semibold text-[#FF6B2B] bg-orange-50 px-3 py-1.5 rounded-full border border-orange-100 hover:bg-orange-100 transition-all" href="tel:+919876543210">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
              +91 98765 43210
            </a>
            <button className="md:hidden text-slate-600" onClick={() => setMenuOpen((v) => !v)} type="button" aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="absolute top-[60px] left-0 right-0 md:hidden bg-white border-b border-slate-200 px-6 py-4 flex flex-col gap-3 text-sm font-medium text-slate-700">
            <a className="hover:text-[#FF6B2B]" href="#/destinations" onClick={() => setMenuOpen(false)}>Destinations</a>
            <a className="hover:text-[#FF6B2B]" href="#" onClick={() => setMenuOpen(false)}>Taxi</a>
            <a className="hover:text-[#FF6B2B]" href="#" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </header>

      <section className="relative mt-[60px] h-[220px] overflow-hidden flex items-center justify-center text-center px-4">
        <div className="hero absolute inset-0 z-0" aria-hidden="true" />
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.25))]" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Explore Southern India</h1>
          <p className="text-white/90 text-sm md:text-base font-light max-w-xl mx-auto">
            Discover beaches, hills and cultural gems across Kerala, Tamil Nadu &amp; more
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="mx-[40px] bg-white p-4 rounded-xl shadow-xl border border-slate-100">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative w-full lg:flex-1">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
              </span>
              <input className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg focus:ring-[#FF6B2B] focus:border-[#FF6B2B] text-sm" placeholder="Search destinations..." type="text" />
            </div>

            <div className="w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 flex items-center gap-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-[#FF6B2B] text-white text-sm font-medium hover:opacity-90 transition-colors">All</button>
              <button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200 transition-colors">Coastal</button>
              <button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200 transition-colors">Highlands</button>
              <button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200 transition-colors">Spiritual</button>
              <button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200 transition-colors">Wildlife</button>
              <button className="whitespace-nowrap px-5 py-2.5 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-slate-200 transition-colors">Nature</button>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center text-sm text-slate-500 gap-2">
          <a className="hover:text-[#FF6B2B]" href="#/" onClick={goHome}>Home</a>
          <span>&gt;</span>
          <span className="font-medium text-slate-900">Destinations - 24 places</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleCards.map((card) => (
            <article
              key={card.title}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-2px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.12)] group cursor-pointer"
              onClick={() => {
                if (card.title === "Puttaparthi") {
                  window.location.hash = "/puttaparthi";
                } else {
                  window.location.hash = "/destination";
                }
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  if (card.title === "Puttaparthi") {
                    window.location.hash = "/puttaparthi";
                  } else {
                    window.location.hash = "/destination";
                  }
                }
              }}
              role="link"
              tabIndex={0}
            >
              <div className="h-64 overflow-hidden relative">
                <img alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={card.image} />
                <span className="absolute top-3 left-3 rounded-full bg-[#FF6B2B] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.05em] text-white">
                  {card.category}
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs font-bold text-[#FF6B2B] uppercase tracking-wider mb-1">{card.region}</p>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{card.title}</h3>
                <p className="text-slate-500 text-sm flex items-center gap-2">
                  <span>{card.category}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full" />
                  <span>{card.duration}</span>
                </p>
              </div>
            </article>
          ))}
        </div>

        {!showMoreDestinations && (
          <div className="mt-12 text-center">
            <button
              className="px-8 py-3 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 hover:border-orange-200 hover:text-[#FF6B2B] transition-all"
              type="button"
              onClick={() => setShowMoreDestinations(true)}
            >
              Load More Destinations
            </button>
          </div>
        )}
      </main>

      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Sai Dharma Tours &amp; Travels</h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Crafting unforgettable journeys through the rich landscapes and vibrant cultures of Southern India since 2012.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a className="hover:text-[#FF6B2B] transition-colors" href="#/destinations">Destinations</a></li>
                <li><a className="hover:text-[#FF6B2B] transition-colors" href="#">Taxi Services</a></li>
                <li><a className="hover:text-[#FF6B2B] transition-colors" href="#">Contact Us</a></li>
                <li><a className="hover:text-[#FF6B2B] transition-colors" href="#">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FF6B2B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                  <span>123 Heritage Lane, Kochi,<br />Kerala, India 682001</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#FF6B2B] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                  <span>+91 98765 43210</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a aria-label="Facebook" className="p-2 bg-slate-800 rounded-lg hover:bg-[#FF6B2B] transition-colors" href="#">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.14H7v4.21h2.5V23h5V11.67h3.77l.5-4.21z" /></svg>
                </a>
                <a aria-label="Instagram" className="p-2 bg-slate-800 rounded-lg hover:bg-[#FF6B2B] transition-colors" href="#">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                </a>
                <a aria-label="Twitter" className="p-2 bg-slate-800 rounded-lg hover:bg-[#FF6B2B] transition-colors" href="#">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
            <p>© 2024 Sai Dharma Tours &amp; Travels Private Limited. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-white transition-colors" href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}