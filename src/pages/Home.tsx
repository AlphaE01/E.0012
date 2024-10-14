import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to the Engineering Society</h1>
          <p className="text-xl mb-8">Empowering future engineers at Taylor's University ADP</p>
          <Link to="/events" className="bg-white text-blue-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300">
            See Events
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Networking</h3>
              <p>Connect with industry professionals and fellow engineering students.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Workshops</h3>
              <p>Enhance your skills with hands-on workshops and training sessions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Projects</h3>
              <p>Participate in exciting engineering projects and competitions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Join Us</h2>
          <p className="text-center text-xl mb-8">
            Become a part of our vibrant community and shape your engineering future!
          </p>
          <div className="text-center">
            <a
              href="https://docs.google.com/forms/d/17pPEVFoNqdxRcfx0eo_85LQ9359oWtvJgjhhOajDRLQ/edit?pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Join Us Here
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;