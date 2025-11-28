import { Button } from "@/components/ui/button";
import { ChevronDown, Flame, MapPin, Clock, Users } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * DESIGN PHILOSOPHY: Retro Diner 90s
 * - Vibrant colors: Red (#FF1744), Yellow (#FFD700), Neon Pink (#FF006E), Black (#1A1A1A)
 * - Bold typography: Fredoka One for headlines, Poppins for body
 * - Checkered patterns and 3D effects
 * - Nostalgic celebration of 1995 (02/07/1995)
 */

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Calculate time until event (02/07/1995 - using future date for demo)
    const eventDate = new Date("2025-07-02T18:00:00").getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b-4 border-black z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="text-3xl font-black text-red-600" style={{ fontFamily: "'Fredoka One'" }}>
              🍔 BURGER
            </div>
            <div className="text-sm font-bold text-black" style={{ fontFamily: "'Fredoka One'" }}>
              EVENT
            </div>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="font-bold text-black hover:text-red-600 transition">About</a>
            <a href="#menu" className="font-bold text-black hover:text-red-600 transition">Menu</a>
            <a href="#countdown" className="font-bold text-black hover:text-red-600 transition">Countdown</a>
            <a href="#contact" className="font-bold text-black hover:text-red-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        {/* Checkered Background */}
        <div className="absolute inset-0 checkered-pattern opacity-10 -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl font-black text-red-600 leading-tight" style={{ fontFamily: "'Fredoka One'" }}>
                  BURGER
                </h1>
                <h1 className="text-5xl md:text-6xl font-black text-yellow-500 leading-tight" style={{ fontFamily: "'Fredoka One'" }}>
                  CELEBRATION
                </h1>
                <p className="text-xl font-bold text-black">
                  🎉 Celebrating 30 Years of Flavor! (Since 1995)
                </p>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Join us for an unforgettable retro 90s burger festival! Experience authentic flavors, neon vibes, and pure celebration. This is not just food—this is nostalgia on a plate.
              </p>

              <div className="flex gap-4 pt-4">
                <button className="btn-retro">
                  Reserve Now
                </button>
                <button className="btn-retro bg-yellow-500 text-black border-black hover:bg-yellow-400">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="card-retro overflow-hidden">
                <img 
                  src="/hero-burger.jpg" 
                  alt="Retro Burger Hero" 
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-yellow-500 border-4 border-black rounded-full p-6 shadow-lg" style={{ width: '120px', height: '120px' }}>
                <div className="text-center">
                  <p className="text-2xl font-black text-black">02</p>
                  <p className="text-xs font-bold text-black">JUL</p>
                  <p className="text-xs font-bold text-black">1995</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section id="countdown" className="py-16 md:py-24 bg-red-600 text-white diagonal-cut">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12" style={{ fontFamily: "'Fredoka One'" }}>
            Time Until the Feast!
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label} className="card-retro bg-white text-black p-6 md:p-8 text-center">
                <p className="text-4xl md:text-5xl font-black" style={{ fontFamily: "'Fredoka One'" }}>
                  {String(item.value).padStart(2, "0")}
                </p>
                <p className="text-sm md:text-base font-bold mt-2 uppercase">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-red-600" style={{ fontFamily: "'Fredoka One'" }}>
            Why You'll Love It
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔥",
                title: "Authentic Burgers",
                description: "Handcrafted with premium ingredients and retro 90s recipes that defined a generation.",
              },
              {
                icon: "🎨",
                title: "Neon Vibes",
                description: "Immerse yourself in authentic 90s diner atmosphere with neon signs and checkered floors.",
              },
              {
                icon: "🎉",
                title: "Pure Celebration",
                description: "Live music, games, and festivities celebrating 30 years of burger excellence.",
              },
            ].map((feature, idx) => (
              <div key={idx} className="card-retro p-8 hover:scale-105 transition-transform">
                <p className="text-5xl mb-4">{feature.icon}</p>
                <h3 className="text-2xl font-black text-red-600 mb-4" style={{ fontFamily: "'Fredoka One'" }}>
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section id="menu" className="py-16 md:py-24 bg-yellow-50 checkered-pattern">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-red-600" style={{ fontFamily: "'Fredoka One'" }}>
            Menu Highlights
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card-retro overflow-hidden">
              <img 
                src="/celebration-burger.jpg" 
                alt="Celebration Burgers" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="card-retro p-6">
                <h3 className="text-2xl font-black text-red-600 mb-2" style={{ fontFamily: "'Fredoka One'" }}>
                  The Retro Classic
                </h3>
                <p className="text-gray-700">Double patty, melted cheese, crispy bacon, fresh lettuce, and our signature sauce.</p>
                <p className="text-2xl font-black text-yellow-600 mt-4">$12.99</p>
              </div>

              <div className="card-retro p-6">
                <h3 className="text-2xl font-black text-red-600 mb-2" style={{ fontFamily: "'Fredoka One'" }}>
                  The 90s Special
                </h3>
                <p className="text-gray-700">Triple stack with caramelized onions, pickles, and a touch of nostalgia.</p>
                <p className="text-2xl font-black text-yellow-600 mt-4">$14.99</p>
              </div>

              <div className="card-retro p-6">
                <h3 className="text-2xl font-black text-red-600 mb-2" style={{ fontFamily: "'Fredoka One'" }}>
                  The Celebration Burger
                </h3>
                <p className="text-gray-700">Our signature creation with all the toppings and a special anniversary blend.</p>
                <p className="text-2xl font-black text-yellow-600 mt-4">$16.99</p>
              </div>
            </div>
          </div>

          <div className="card-retro overflow-hidden">
            <img 
              src="/ingredients-collage.jpg" 
              alt="Fresh Ingredients" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-red-600" style={{ fontFamily: "'Fredoka One'" }}>
            Event Details
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-retro p-8 text-center">
              <Calendar className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-black text-red-600 mb-2" style={{ fontFamily: "'Fredoka One'" }}>
                Date
              </h3>
              <p className="text-lg font-bold text-black">July 2, 2025</p>
              <p className="text-sm text-gray-600">Celebrating 30 Years!</p>
            </div>

            <div className="card-retro p-8 text-center">
              <Clock className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-black text-red-600 mb-2" style={{ fontFamily: "'Fredoka One'" }}>
                Time
              </h3>
              <p className="text-lg font-bold text-black">6:00 PM - 11:00 PM</p>
              <p className="text-sm text-gray-600">5 hours of pure fun!</p>
            </div>

            <div className="card-retro p-8 text-center">
              <MapPin className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-black text-red-600 mb-2" style={{ fontFamily: "'Fredoka One'" }}>
                Location
              </h3>
              <p className="text-lg font-bold text-black">Downtown Plaza</p>
              <p className="text-sm text-gray-600">123 Main Street</p>
            </div>
          </div>
        </div>
      </section>

      {/* Diner Interior */}
      <section className="py-16 md:py-24 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="card-retro overflow-hidden">
              <img 
                src="/retro-diner-interior.jpg" 
                alt="Retro Diner Interior" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black text-yellow-300" style={{ fontFamily: "'Fredoka One'" }}>
                The Atmosphere
              </h2>
              <p className="text-lg leading-relaxed">
                Step into a time machine! Our retro diner captures the essence of the 1990s with authentic checkered floors, neon signs, and chrome details. Every corner is designed to transport you back to the golden age of burger culture.
              </p>
              <ul className="space-y-3 text-lg font-bold">
                <li>✓ Authentic 90s Diner Decor</li>
                <li>✓ Neon Lighting & Signage</li>
                <li>✓ Retro Vinyl Booths</li>
                <li>✓ Live DJ & Music</li>
                <li>✓ Photo Booth with Props</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 md:py-24 bg-yellow-500 diagonal-cut">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6" style={{ fontFamily: "'Fredoka One'" }}>
            Don't Miss Out!
          </h2>
          <p className="text-xl font-bold text-black mb-8 max-w-2xl mx-auto">
            Reserve your spot now for the most nostalgic burger celebration of the year. Limited seats available!
          </p>
          <button className="btn-retro bg-red-600 border-black text-white hover:bg-red-700">
            Reserve Your Spot
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-bold text-lg mb-2" style={{ fontFamily: "'Fredoka One'" }}>
            🍔 BURGER EVENT 1995 🍔
          </p>
          <p className="text-gray-400">Celebrating 30 years of pure burger excellence</p>
          <p className="text-gray-500 text-sm mt-4">© 2025 Burger Event. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-6">
            <a href="#" className="text-red-600 hover:text-red-400 font-bold">Facebook</a>
            <a href="#" className="text-red-600 hover:text-red-400 font-bold">Instagram</a>
            <a href="#" className="text-red-600 hover:text-red-400 font-bold">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Icon component for calendar (since lucide-react might not have it)
function Calendar({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
    </svg>
  );
}
