// // components/AboutUs.jsx
// import React from "react";

// function AboutUs() {
//   return (
//     <main className="max-w-4xl mx-auto px-4 py-12 dark:bg-slate-900 dark:text-white">
//       <h1 className="text-4xl font-bold mb-4 text-indigo-500">About Us</h1>
//       <p className="text-lg mb-4">
//         Welcome to <span className="font-semibold">Our Website</span> – a place to learn and grow. 
//         We believe in making knowledge accessible and enjoyable for everyone.
//       </p>
//       <p className="text-gray-300 mb-4">
//         Our platform provides free and premium courses, blogs, and resources designed 
//         to help students, professionals, and lifelong learners stay ahead. 
//       </p>
//       <h2 className="text-2xl font-semibold mt-6 mb-2">Our Mission</h2>
//       <p className="text-gray-300">
//         To make learning simple, engaging, and accessible for everyone across the globe. 
//         We aim to empower learners with practical knowledge and skills.
//       </p>
//     </main>
//   );
// }

// export default AboutUs;




// components/AboutUs.jsx


import React from "react";
import { FaBookOpen, FaGlobe, FaUsers } from "react-icons/fa";

function AboutUs() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-black text-white px-6 py-16">
      
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text mb-6 animate-fade-in">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Welcome to <span className="font-semibold text-indigo-300">Our Platform</span> – where learning meets innovation. 
          Knowledge made accessible & fun for everyone.
        </p>
      </section>

      {/* Mission & Vision Cards */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:scale-105 transition duration-500">
          <FaBookOpen className="text-indigo-400 text-5xl mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold text-center mb-2">Quality Learning</h3>
          <p className="text-gray-300 text-center">
            Free and premium courses, blogs, and resources tailored for all learners.
          </p>
        </div>

        <div className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:scale-105 transition duration-500">
          <FaGlobe className="text-green-400 text-5xl mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold text-center mb-2">Global Reach</h3>
          <p className="text-gray-300 text-center">
            Connecting learners worldwide with modern knowledge.
          </p>
        </div>

        <div className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:scale-105 transition duration-500">
          <FaUsers className="text-pink-400 text-5xl mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold text-center mb-2">Community Driven</h3>
          <p className="text-gray-300 text-center">
            Learn together, grow together – building a thriving learning community.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mt-20 text-center">
        <h2 className="text-4xl font-bold text-indigo-400 mb-4">Our Mission</h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg">
          Making learning simple, engaging & accessible for all. 
          Empowering learners with real-world skills.
        </p>
      </section>
    </main>
  );
}

export default AboutUs;
