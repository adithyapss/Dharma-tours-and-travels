import React, { useEffect, useRef, useState } from "react";
import DestinationsPage from "./DestinationsPage";
import VarkalaDestination from "./VarkalaDestination";
import PuttaparthiDestination from "./PuttaparthiDestination";
import { destinationCards } from "./data/destinations";

const heroPlaces = [
  {
    title: "Kerala Backwaters",
    tag: "Backwaters",
    blurb: "Experience the serene tranquility of the backwaters, lush green spice plantations, and golden sandy beaches. Your ultimate getaway to God's Own Country starts here.",
    highlights: ["Houseboat Cruise", "Sunset Canal Ride", "2N / 3D Plan"],
    video: "https://videos.pexels.com/video-files/34742689/14728149_2560_1440_30fps.mp4",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQpZ1e1Hyhmww-XHAZCSHy_nwNHd1BlsyPX9E-SNIMNhK1_v144KXXaSDAi69i6mbNT-y2kyXw2p_sJsN3lua2cCyaivdddCXiq3LEHc5ss2pCq1WNF11IJr6vjAv_1rzRddfxNnd3jt-PJ57aQKQSHbN5v2VUUI_x3fzFYkSr-InQZVtQFmbUOgYadBQWsy85J6yQvvxwhUeaQG2yz1unT6VUQoHhZhpUI8MFQpkPwZfDqvMdsCILDc_NmLgKOJUH4NlCps1V5Aov",
  },
  {
    title: "Varkala Beach",
    tag: "Coastal",
    blurb: "Cliffside sunsets, sea breeze, and a laid-back coastal vibe make Varkala a perfect beach escape.",
    highlights: ["Sunset Cliff Walk", "Beach Cafes", "2N / 3D Plan"],
    video: "https://videos.pexels.com/video-files/29041043/12554403_2560_1440_30fps.mp4",
    image: "https://i.pinimg.com/736x/ae/6e/c8/ae6ec86427bd5ce1a73a47f111398ba7.jpg",
  },
  {
    title: "Munnar Tea Gardens",
    tag: "Tea Gardens",
    blurb: "Wake up to misty tea gardens, winding mountain roads, and cool weather in the Western Ghats.",
    highlights: ["Tea Estates", "Cool Climate", "3N / 4D Plan"],
    video: "https://videos.pexels.com/video-files/30762625/13158951_1920_1080_60fps.mp4",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTZoGILmiWnO3Rcz2Yjdfize2X6nsI4fNXP_EGQk999CyrUrnRLqAf93rPCwM3rBGruC3DiKSqqV0kzgz_WsrgXMqUxhFSQG80EjSUEo1wf_FJk_-DbSkBtVBg0NgPZCaJwZ6jFcA5-mFxozTtckLEw52OaAQ41jBhVlbsxfW3hnjlOGyh8c2B3TwO_bYXc3yadXqLgab_Fgv557ZF3P7vw4TYn7ogOXYsEokJVdJl4fMCv0mDeDhRoomECYPvtjTnjCu5e3CJR_dF",
  },
  {
    title: "Isha Foundation",
    tag: "Spiritual",
    blurb: "Nestled in the Velliangiri foothills, the Isha Yoga Center is a powerful space for inner transformation — home to the majestic Adiyogi Shiva statue, the sacred Dhyanalinga, and serene meditation programs amidst lush forests of the Western Ghats.",
    highlights: ["Adiyogi Shiva Statue", "Dhyanalinga Meditation", "1N / 2D Plan"],
    image: "/adi yogi.jpg",
  },
  {
    title: "Puttaparthi",
    tag: "Pilgrim Place",
    blurb: "Puttaparthi is a revered pilgrim place, known for the Sri Sathya Sai Prasanthi Nilayam ashram where devotees from around the world come for prayer, darshan, and spiritual peace.",
    highlights: ["Prasanthi Nilayam", "Daily Darshan", "1N / 2D Plan"],
    video: "https://videos.pexels.com/video-files/4734934/4734934-uhd_2560_1440_25fps.mp4",
    image: "/ptp image.jpg",
  },
];

function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-tropical-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
    </svg>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHeroPlace, setActiveHeroPlace] = useState(0);
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState(() => {
    if (window.location.hash === "#/destinations") return "destinations";
    if (window.location.hash === "#/destination") return "destination-viewer";
    if (window.location.hash === "#/puttaparthi") return "puttaparthi";
    return "home";
  });
  const heroVideoRef = useRef(null);
  const activePlace = heroPlaces[activeHeroPlace];
  const nextPlace = heroPlaces[(activeHeroPlace + 1) % heroPlaces.length];
  const activeVideo = activePlace.video || null;
  const cycleHeroPlace = () => {
    setActiveHeroPlace((prev) => (prev + 1) % heroPlaces.length);
  };
  const createRipple = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = `${diameter}px`;
    circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add("btn-ripple");

    const existingRipple = button.querySelector(".btn-ripple");
    if (existingRipple) {
      existingRipple.remove();
    }

    button.appendChild(circle);
  };
  const navigateToPage = (page) => {
    if (page === "destinations") {
      window.location.hash = "/destinations";
      return;
    }
    if (page === "destination-viewer") {
      window.location.hash = "/destination";
      return;
    }
    if (page === "puttaparthi") {
      window.location.hash = "/puttaparthi";
      return;
    }
    window.location.hash = "/";
  };
  const [heroTitleTop, ...heroTitleBottomParts] = activePlace.title.split(" ");
  const heroTitleBottom = heroTitleBottomParts.join(" ") || activePlace.tag;

  useEffect(() => {
    const layers = document.querySelectorAll(".parallax-layer");
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      layers.forEach((layer) => {
        const speed = parseFloat(layer.getAttribute("data-speed") || "0");
        const rect = layer.getBoundingClientRect();
        const elementTop = rect.top + scrollY;
        if (scrollY + windowHeight * 1.5 > elementTop && scrollY - windowHeight * 0.5 < elementTop) {
          const offset = (scrollY - (elementTop - windowHeight / 2)) * speed;
          layer.style.transform = `translateY(${offset}px)`;
        }
      });
    };
    handleScroll();
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => { handleScroll(); ticking = false; });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroPlace((prev) => (prev + 1) % heroPlaces.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleNavbarScroll = () => {
      setIsNavbarScrolled(window.scrollY > 80);
    };

    handleNavbarScroll();
    window.addEventListener("scroll", handleNavbarScroll);
    return () => window.removeEventListener("scroll", handleNavbarScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      let nextPage = "home";
      if (window.location.hash === "#/destinations") {
        nextPage = "destinations";
      } else if (window.location.hash === "#/destination") {
        nextPage = "destination-viewer";
      } else if (window.location.hash === "#/puttaparthi") {
        nextPage = "puttaparthi";
      }
      setCurrentPage(nextPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (!activeVideo || !heroVideoRef.current) return;
    const videoEl = heroVideoRef.current;
    videoEl.load();
    const playPromise = videoEl.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        // Autoplay can be blocked in some environments; ignore silently.
      });
    }
  }, [activeVideo]);

  if (currentPage === "destinations") {
    return <DestinationsPage onBackHome={() => navigateToPage("home")} />;
  }

  if (currentPage === "destination-viewer") {
    return (
      <VarkalaDestination
        onBackHome={() => navigateToPage("home")}
        onBackDestinations={() => navigateToPage("destinations")}
      />
    );
  }

  if (currentPage === "puttaparthi") {
    return (
      <PuttaparthiDestination
        onBackHome={() => navigateToPage("home")}
        onBackDestinations={() => navigateToPage("destinations")}
      />
    );
  }

  return (
    <div className="bg-sand-light text-ocean-blue overflow-x-hidden">

      {/* ── Header ── */}
      <header className={`site-navbar absolute top-0 left-0 w-full z-50 ${isNavbarScrolled ? "scrolled" : ""}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/logo.jpg" alt="Sai Dharma Logo" className="w-12 h-12 rounded-full object-cover object-top border-2 border-white/40" />
            <div className="leading-tight">
              <p className="text-xl font-bold tracking-tight text-[#FFFFFF]">Sai Dharma</p>
              <p className="text-xs uppercase tracking-[0.24em] text-[rgba(255,255,255,0.7)]">Tours &amp; Travels</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center">
            <div className="navbar-links-pill">
              <a className="site-navbar-link rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-widest hover:bg-white/25" href="#/destinations" onClick={() => setMenuOpen(false)}>Destinations</a>
              <a className="site-navbar-link rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-widest hover:bg-white/25" href="#">Taxi Service</a>
              <a className="site-navbar-link rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-widest hover:bg-white/25" href="#">Contact</a>
            </div>
          </nav>

          {/* Contact info (desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-right">
              <p className="text-xs uppercase text-[rgba(255,255,255,0.7)]">Call Us 24/7</p>
              <p className="text-lg font-bold text-sunset-orange">+91 98765 43210</p>
            </div>
            <button className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              </svg>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen
              ? <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
              : <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
            }
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-black/70 backdrop-blur px-6 py-4 flex flex-col gap-3 text-sm font-semibold uppercase tracking-widest">
            {["Destinations", "Taxi Service", "Contact"].map((l) => (
              <a key={l} className="rounded-full border border-white/20 bg-white/10 px-4 py-3 hover:bg-white/20 hover:text-sunset-orange transition" href={l === "Destinations" ? "#/destinations" : "#"} onClick={() => setMenuOpen(false)}>{l}</a>
            ))}
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section className="relative min-h-[96vh] flex items-center overflow-hidden">
        <div className="parallax-bg-container">
          {activeVideo ? (
            <video
              key={activeVideo}
              ref={heroVideoRef}
              className="parallax-bg-image parallax-layer object-cover"
              data-speed="0.2"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src={activeVideo} type="video/mp4" />
            </video>
          ) : (
            <div
              className="parallax-bg-image parallax-layer"
              data-speed="0.2"
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('${activePlace.image}')` }}
            />
          )}
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-y-0 right-0 w-[45%] bg-gradient-to-l from-black/30 to-transparent pointer-events-none" />
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[96vh] py-12 md:py-16 relative z-10">

          {/* Text content */}
          <div className="text-white flex flex-col justify-center h-full lg:max-w-2xl">
            <h2 className="text-coast-gold font-semibold tracking-[0.4em] uppercase mb-6 text-shadow-hero text-lg parallax-layer" data-speed="0.05">
              Discover Southern India
            </h2>
            <h1 className="text-7xl md:text-9xl font-extrabold mb-8 leading-none tracking-tight text-shadow-hero parallax-layer" data-speed="0.1">
              {heroTitleTop.toUpperCase()}<br />
              <span className="text-white">
                {heroTitleBottom}
              </span>
            </h1>
            <p className="text-xl mb-12 max-w-xl opacity-90 leading-relaxed text-shadow-hero font-medium parallax-layer" data-speed="0.08">
              {activePlace.blurb}
            </p>
            <div className="flex flex-wrap gap-6 parallax-layer" data-speed="0.05">
              <button className="bg-sunset-orange hover:bg-orange-600 text-white px-10 py-5 rounded-md font-bold text-lg transition flex items-center gap-3 shadow-2xl">
                Book a Taxi
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                  <path clipRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fillRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Hero flash cards — active card + upcoming preview with parallax */}
          <div className="hidden lg:flex justify-end items-start pt-8">
            <div className="relative h-[500px] w-[500px]">
              {/* Upcoming place (back card) */}
              <div
                className="absolute left-[215px] top-[82px] w-[280px] h-[336px] rounded-[34px] overflow-hidden shadow-2xl border border-white/15 card-zoom group parallax-layer z-20 cursor-pointer"
                data-speed="-0.06"
                onClick={cycleHeroPlace}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && cycleHeroPlace()}
                role="button"
                tabIndex={0}
                aria-label={`Show ${nextPlace.title}`}
              >
                <img alt={nextPlace.title} className="w-full h-full object-cover transition duration-500" src={nextPlace.image} />
                <div className="absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-black/35 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent flex flex-col justify-end p-6">
                  <span className="text-xs text-coast-gold uppercase font-bold mb-1">{nextPlace.tag}</span>
                  <h3 className="text-xl font-bold text-white leading-none">{nextPlace.title.split(" ")[0]}</h3>
                </div>
                <button className="absolute top-8 right-7 bg-white/25 backdrop-blur rounded-full p-2.5" onClick={(e) => e.stopPropagation()}>
                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                </button>
              </div>

              {/* Active place (front card) */}
              <div
                className="absolute left-[35px] top-0 w-[320px] h-[500px] rounded-[34px] overflow-hidden shadow-2xl border border-white/15 card-zoom group parallax-layer z-30 transition-all duration-700 cursor-pointer"
                data-speed="-0.12"
                onClick={cycleHeroPlace}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && cycleHeroPlace()}
                role="button"
                tabIndex={0}
                aria-label="Show next place"
              >
                <img alt={activePlace.title} className="w-full h-full object-cover transition duration-500" src={activePlace.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent flex flex-col justify-end p-8">
                  <span className="text-sm text-coast-gold uppercase font-bold mb-2 tracking-widest">{activePlace.tag}</span>
                  <h3 className="text-2xl md:text-[28px] font-bold text-white leading-tight">{activePlace.title}</h3>
                </div>
                <button className="absolute top-8 right-7 bg-white/25 backdrop-blur rounded-full p-3" onClick={(e) => e.stopPropagation()}>
                  <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>
                </button>
              </div>

              <button
                className="absolute right-[116px] top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/30 text-white backdrop-blur-md transition hover:bg-sunset-orange"
                onClick={cycleHeroPlace}
                aria-label={`Show ${nextPlace.title}`}
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white animate-bounce opacity-50 z-10">
          <p className="text-[10px] uppercase tracking-widest mb-2 text-center">Scroll</p>
          <svg className="h-8 w-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </section>

      {/* ── Destination Highlights ── */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-xl">
              <h2 className="text-coast-gold font-bold uppercase tracking-widest text-sm mb-2">Explore Destinations</h2>
              <h3 className="text-4xl font-bold text-ocean-blue leading-tight">Must-Visit Jewels of the South</h3>
            </div>
            <a className="ripple-container mt-4 md:mt-0 inline-flex items-center rounded-full border-2 border-[#FF6B2B] px-6 py-2 text-sm font-bold uppercase tracking-[0.14em] text-[#FF6B2B] transition-all duration-200 hover:scale-[1.02] hover:bg-[#FF6B2B] hover:text-[#FFFFFF]" href="#/destinations" onClick={createRipple}>
              View All Destinations
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinationCards.map((card) => (
              <div key={card.title} className="group bg-coast-white rounded-2xl overflow-hidden shadow-lg border border-black/5">
                <div className="h-64 overflow-hidden relative">
                  <img
                    alt={card.title}
                    className="w-full h-[120%] object-cover group-hover:scale-105 transition duration-500 absolute top-[-10%] parallax-layer"
                    data-speed="0.1"
                    src={card.image}
                  />
                  <span className={`absolute top-4 left-4 ${card.badgeClass} text-white text-xs px-3 py-1 rounded-full font-bold uppercase z-10`}>
                    {card.badge}
                  </span>
                </div>
                <div className="p-6 relative z-10 bg-coast-white">
                  <h4 className="text-xl font-bold text-[#1A1A2E] mb-2">{card.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{card.desc}</p>
                  <div className="flex items-center text-xs font-semibold text-gray-500 space-x-4">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {card.days}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21l-8.228-9.932a8 8 0 1116.456 0L12 21z" />
                      </svg>
                      {card.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              className="ripple-container inline-flex items-center gap-3 rounded-full border-2 border-[#FF6B2B] bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#FF6B2B] shadow-lg transition-all duration-200 hover:scale-[1.02] hover:bg-[#FF6B2B] hover:text-[#FFFFFF]"
              href="#/destinations"
              onClick={createRipple}
            >
              <span className="ripple-label">
                View All Destinations
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M5 12h14m-6-6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Booking Section ── */}
      <section className="bg-sand-light py-20">
        <div className="container mx-auto px-6">
          <div className="bg-coast-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">

            {/* Taxi service info */}
            <div className="lg:w-1/2 p-12 bg-coast-white flex flex-col justify-center">
              <div className="inline-flex w-16 h-16 bg-ocean-blue/10 text-ocean-blue rounded-2xl items-center justify-center mb-6">
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4">Premium Taxi Services</h3>
              <p className="text-gray-600 mb-8">
                Travel across South India with ease. Our fleet of air-conditioned vehicles and experienced local drivers ensure a safe and comfortable journey to any destination.
              </p>
              <ul className="space-y-3 mb-8 text-sm font-medium text-gray-700">
                {["24/7 Availability", "Transparent Pricing", "GPS Tracked Fleets"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
              <a className="bg-ocean-blue text-white font-bold py-4 px-8 rounded-lg text-center hover:bg-blue-800 transition shadow-lg shadow-blue-200" href="#">
                Book Your Ride Now
              </a>
            </div>

            {/* Hotel visual */}
            <div className="lg:w-1/2 relative min-h-[400px] overflow-hidden">
              <img
                alt="Luxury Hotel"
                className="absolute inset-0 w-full h-[120%] object-cover top-[-10%] parallax-layer"
                data-speed="0.05"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhQI20J-oG_WlVVBrbn8BOH9CL2Q92YuJLLE63CEUhuNBwqMbmVhkyLHyVDgqaecNzsE5FSYYUpMf1H6eAUxEGLsxIxX7PCJUF-2EtfPLgUCYTiwPX4KEhZkEBi-TZBzHDKoJpqfOlNV79yLLBeE3OUWgh9zFFT8Yi125rwkx3XOvdRVgYvGZZqTwE7XRAKqMqeA9ee-Bq7xXxoRtD4zDtzPeJjFf8j61keFwa3RAfupFl2kyvLHr1hjRG_mdQWF_RwMvtfWiujXTZ"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-12 text-center">
                <div className="text-white relative z-10">
                  <h3 className="text-4xl font-bold mb-4 parallax-layer" data-speed="0.03">Stays That Stay With You</h3>
                  <p className="mb-8 opacity-90 max-w-sm mx-auto parallax-layer" data-speed="0.02">
                    From heritage bungalows to modern luxury resorts, find the perfect stay for your Southern adventure.
                  </p>
                  <button className="border-2 border-white hover:bg-white hover:text-gray-900 transition font-bold px-8 py-3 rounded-lg parallax-layer" data-speed="0.01">
                    Browse Hotels
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-ocean-blue text-coast-white pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

            {/* Brand */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-sunset-orange rounded-full flex items-center justify-center">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
                <span className="text-xl font-bold">SouthTravel</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                We specialize in crafting unforgettable travel experiences across the diverse landscapes of Southern India. Quality, safety, and local expertise are our pillars.
              </p>
              <div className="flex space-x-4">
                <a className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-coast-gold transition" href="#" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-coast-gold transition" href="#" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Explore links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Explore</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                {["Backwaters of Kerala", "Hill Stations of Coorg", "Temples of Tamil Nadu", "Beaches of Goa", "Heritage Sites"].map((l) => (
                  <li key={l}><a className="hover:text-white transition" href="#">{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6">Our Services</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                {["Inter-City Taxis", "Airport Transfers", "Luxury Hotel Booking", "Custom Tour Packages", "Corporate Travels"].map((l) => (
                  <li key={l}><a className="hover:text-white transition" href="#">{l}</a></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-6">Get in Touch</h4>
              <div className="space-y-4 text-sm">
                <p className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-coast-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  <span className="text-gray-300">123 Palm Avenue, Fort Kochi,<br />Kerala, India - 682001</span>
                </p>
                <p className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-coast-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  <span className="text-lg font-bold">+91 98765 43210</span>
                </p>
                <p className="flex items-center gap-3">
                  <svg className="h-5 w-5 text-coast-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  <a className="hover:text-coast-gold transition text-gray-300" href="mailto:info@southtravel.in">info@southtravel.in</a>
                </p>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-white/10 text-center text-xs text-gray-500">
            <p>&copy; 2023 SouthTravel Tourism Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
