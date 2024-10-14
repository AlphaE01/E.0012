import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Engineering Society</Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-blue-200">Home</Link>
          <Link to="/about" className="hover:text-blue-200">About</Link>
          <Link to="/events" className="hover:text-blue-200">Events</Link>
          <Link to="/team" className="hover:text-blue-200">Our Team</Link>
          <Link to="/sponsors" className="hover:text-blue-200">Sponsors</Link>
          <Link to="/contact" className="hover:text-blue-200">Contact</Link>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center py-4">
            <Link to="/" className="py-2 hover:text-blue-200">Home</Link>
            <Link to="/about" className="py-2 hover:text-blue-200">About</Link>
            <Link to="/events" className="py-2 hover:text-blue-200">Events</Link>
            <Link to="/team" className="py-2 hover:text-blue-200">Our Team</Link>
            <Link to="/sponsors" className="py-2 hover:text-blue-200">Sponsors</Link>
            <Link to="/contact" className="py-2 hover:text-blue-200">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;