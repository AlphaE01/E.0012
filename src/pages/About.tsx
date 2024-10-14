import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
      <div className="max-w-3xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            The Engineering Society at Taylor's University ADP is dedicated to fostering a community of innovative and passionate engineering students. Our mission is to provide a platform for students to explore, learn, and grow in their chosen fields of engineering.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg mb-4">
            We envision a future where our members are at the forefront of technological advancements, driving positive change in the world through their engineering expertise and leadership skills.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Organize workshops and seminars with industry experts</li>
            <li>Facilitate networking opportunities with professionals</li>
            <li>Coordinate engineering projects and competitions</li>
            <li>Provide mentorship and academic support</li>
            <li>Arrange industrial visits and field trips</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;