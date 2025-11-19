import React, { useState, useEffect } from 'react';
import { 
  PenTool, 
  Video, 
  Share2, 
  Code, 
  Zap, 
  ArrowRight, 
  Menu, 
  X,
  Send,
  MousePointer2
} from 'lucide-react';
import { ServiceCard } from './components/ServiceCard';
import { ZigZag, Spiral, StarBurst } from './components/DoodleIcons';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const googleFormUrl = "https://docs.google.com/forms/u/0/"; // Placeholder for the user's google form

  return (
    <div className="min-h-screen text-brb-black overflow-x-hidden selection:bg-brb-pink selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b-4 border-brb-black ${scrolled ? 'bg-white py-2' : 'bg-brb-yellow py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brb-black text-white flex items-center justify-center font-display font-bold text-xl border-2 border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
              B
            </div>
            <span className="font-display font-black text-2xl tracking-tighter">BRB AGENCY</span>
          </div>

          <div className="hidden md:flex gap-8 font-sans font-bold text-lg uppercase tracking-wide items-center">
            <a href="#services" className="hover:underline decoration-4 decoration-brb-pink underline-offset-4">What We Do</a>
            <a href="#vibe" className="hover:underline decoration-4 decoration-brb-cyan underline-offset-4">The Vibe</a>
            <a href={googleFormUrl} target="_blank" rel="noreferrer" className="bg-brb-black text-white px-6 py-2 border-2 border-transparent hover:bg-white hover:text-brb-black hover:border-brb-black shadow-hard transition-all hover:-translate-y-1">
              Let's Talk
            </a>
          </div>

          <button onClick={toggleMenu} className="md:hidden p-2 border-2 border-brb-black bg-white shadow-hard">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-brb-yellow z-40 flex flex-col items-center justify-center gap-8 animate-fade-in">
          <a href="#services" onClick={toggleMenu} className="font-display text-4xl font-black hover:text-white text-stroke">SERVICES</a>
          <a href="#vibe" onClick={toggleMenu} className="font-display text-4xl font-black hover:text-white text-stroke">THE VIBE</a>
          <a href={googleFormUrl} target="_blank" rel="noreferrer" className="font-display text-4xl font-black hover:text-white text-stroke">CONTACT</a>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
        <div className="absolute top-40 left-10 text-brb-cyan animate-bounce delay-75 hidden lg:block">
          <StarBurst className="w-16 h-16" />
        </div>
        <div className="absolute bottom-20 right-10 text-brb-pink animate-pulse hidden lg:block">
          <Spiral className="w-24 h-24" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block bg-brb-cyan border-2 border-brb-black px-4 py-1 font-bold font-sans mb-6 shadow-hard transform -rotate-2">
            🚀 100x YOUR REACH
          </div>
          <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-8">
            WE GO <span className="text-brb-pink bg-brb-black px-2 text-stroke-white">VIRAL</span><br />
            SO YOU DON'T<br />
            <span className="relative inline-block mt-2">
              HAVE TO.
              <ZigZag className="absolute -bottom-4 left-0 w-full text-brb-yellow" />
            </span>
          </h1>
          <p className="font-sans text-xl md:text-2xl max-w-2xl mx-auto mb-12 font-medium border-l-8 border-brb-pink pl-6 text-left md:text-center md:border-l-0 md:pl-0 bg-white md:bg-transparent p-4 md:p-0 shadow-hard md:shadow-none border-2 md:border-0 border-brb-black md:border-transparent">
            Writing. Shooting. Posting. Hacking the Algo. <br className="hidden md:block" />
            We build the software and the stories that break the internet.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a href={googleFormUrl} target="_blank" rel="noreferrer" className="group relative inline-flex items-center justify-center bg-brb-black text-white font-display font-bold text-2xl px-12 py-4 border-4 border-brb-black shadow-hard-lg hover:bg-brb-yellow hover:text-brb-black transition-all hover:-translate-y-2 hover:shadow-hard-xl">
              <span>START NOW</span>
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" strokeWidth={3} />
            </a>
          </div>
        </div>
      </section>

      {/* Marquee Divider */}
      <div className="bg-brb-pink border-y-4 border-brb-black py-3 overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-[marquee_10s_linear_infinite] font-display font-bold text-2xl text-white">
          SHIP FAST • BREAK THINGS • GO VIRAL • WRITE CODE • CREATE CHAOS • SHIP FAST • BREAK THINGS • GO VIRAL • WRITE CODE • CREATE CHAOS •
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white doodle-pattern relative">
        <div className="container mx-auto px-4">
          <div className="flex items-end gap-4 mb-16">
            <h2 className="font-display font-black text-6xl md:text-7xl uppercase relative inline-block bg-white border-4 border-brb-black px-6 py-2 shadow-hard">
              Our Stack
            </h2>
            <Spiral className="text-brb-purple w-12 h-12 mb-4 hidden md:block" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-2">
            <ServiceCard 
              title="Killer Copy"
              description="Scripts that hook in 3 seconds. Twitter threads that convert. Newsletters people actually read."
              icon={PenTool}
              color="yellow"
              rotation="-1deg"
            />
            <ServiceCard 
              title="Production"
              description="4K shoots, rapid editing, and thumbnails that get clicks. We make you look like a main character."
              icon={Video}
              color="cyan"
              rotation="2deg"
            />
            <ServiceCard 
              title="Distribution"
              description="We know the algo better than the engineers who built it. Posting schedules, community management, and growth hacks."
              icon={Share2}
              color="pink"
              rotation="-2deg"
            />
            <ServiceCard 
              title="Dev & Tech"
              description="Need a landing page? A custom tool? An AI wrapper? We ship clean code faster than you can say 'npm install'."
              icon={Code}
              color="purple"
              rotation="1deg"
            />
          </div>
        </div>
      </section>

      {/* Vibe / Trust Section */}
      <section id="vibe" className="py-20 bg-brb-black text-white border-t-4 border-brb-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="font-display font-black text-5xl md:text-7xl mb-6 leading-none">
                BUILT FOR THE <span className="text-brb-yellow underline decoration-wavy decoration-4 underline-offset-8">100x</span> GENERATION
              </h2>
              <p className="font-sans text-xl mb-8 text-gray-300">
                Traditional agencies move slow. They have meetings about meetings. 
                We ship. We iterate. We win. Inspired by the relentless energy of the creator economy.
              </p>
              
              <div className="space-y-4">
                {[
                  "Zero fluff, all output.",
                  "AI-integrated workflows.",
                  "Meme-literate creative direction."
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 font-bold text-lg">
                    <div className="bg-brb-cyan text-brb-black p-1 border-2 border-white shadow-[4px_4px_0px_0px_#ffffff]">
                      <Zap size={20} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-1/2 relative">
              {/* Abstract representation of "Growth" */}
              <div className="bg-white p-8 border-4 border-brb-cyan shadow-[12px_12px_0px_0px_#23F0C7] text-brb-black transform rotate-2">
                <div className="flex justify-between items-end h-64 gap-4 pb-4 border-b-4 border-brb-black">
                  {[40, 65, 50, 85, 70, 95].map((h, i) => (
                    <div 
                      key={i} 
                      className="w-full bg-brb-pink border-2 border-brb-black relative hover:bg-brb-yellow transition-colors"
                      style={{ height: `${h}%` }}
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-bold font-mono text-sm">
                        {h}k
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center font-display font-bold text-2xl mt-4 uppercase">
                  Your Views (Stonks Only)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-brb-yellow border-t-4 border-brb-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-display font-black text-6xl md:text-8xl mb-8 text-brb-black drop-shadow-lg">
            READY TO SHIP?
          </h2>
          <p className="font-sans text-2xl font-bold mb-12 max-w-2xl mx-auto">
            Stop overthinking. Start posting. Fill out the form and let's build something insane together.
          </p>
          
          <div className="bg-white border-4 border-brb-black p-8 max-w-md mx-auto shadow-hard-xl rotate-1">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 border-b-2 border-gray-200 pb-4 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-500 border border-black"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 border border-black"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 border border-black"></div>
                <span className="ml-auto font-mono text-xs text-gray-500">contact_form.exe</span>
              </div>
              <p className="text-left font-sans text-lg mb-4">
                Tell us about your project. We usually reply within 24 hours unless we're viral.
              </p>
              <a 
                href={googleFormUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-brb-pink text-brb-black border-4 border-brb-black font-bold text-xl py-4 shadow-hard hover:bg-brb-cyan hover:shadow-hard-reverse hover:translate-y-1 transition-all"
              >
                <Send size={24} strokeWidth={2.5} />
                FILL THE FORM
              </a>
              <div className="text-xs font-mono text-gray-500 mt-2 flex items-center justify-center gap-1">
                <MousePointer2 size={12} />
                <span>Powered by Google Forms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brb-black text-white py-12 border-t-4 border-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-display font-bold text-3xl tracking-tighter">
            BRB.
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6 font-mono text-sm">
            <span>© {new Date().getFullYear()} BRB Agency. All rights reserved.</span>
            <span className="hidden md:inline text-gray-600">|</span>
            <span>Made with ☕ and React</span>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-brb-yellow border-2 border-white rounded-full"></div>
            <div className="w-8 h-8 bg-brb-cyan border-2 border-white rounded-full"></div>
            <div className="w-8 h-8 bg-brb-pink border-2 border-white rounded-full"></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;