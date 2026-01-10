import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@assets/e26f3825-8deb-481b-9445-6590bcc9760e_1765438481275.jpg";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2">
            <img src={logo} alt="SkyTrades" className="h-12 w-auto rounded-md" />
          </a>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Services</a>
          <a href="#about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Contact</a>
          <Button variant="default" className="bg-primary hover:bg-primary/90 text-white">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-white/10 p-6 space-y-4">
          <a href="#services" className="block text-sm font-medium text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#about" className="block text-sm font-medium text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>About</a>
          <a href="#contact" className="block text-sm font-medium text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Contact</a>
          <Button className="w-full bg-primary hover:bg-primary/90 text-white">
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
}
