"use client";
import Link from "next/link";
import { FaFacebook, FaGithub, FaTiktok, FaLinkedin, FaHeartbeat, FaUserMd, FaClock, FaShieldAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Bringing
                <span className="text-gradient block">Healthcare</span>
                Closer to Everyone
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Connect with top doctors and specialists from the comfort of your home. 
                Fast, secure, and accessible healthcare for all.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/registration">
                  <button className="btn-primary text-lg px-8 py-4">
                    Get Started Today
                  </button>
                </Link>
                <Link href="/doctors">
                  <button className="btn-secondary text-lg px-8 py-4">
                    Find Doctors
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative slide-in-right">
              <div className="relative">
                <img
                  src="https://www.outsourcestrategies.com/wp-content/uploads/2023/12/telemedicine-billing-practices.jpg"
                  alt="Telemedicine"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose TeleMed?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience healthcare like never before with our innovative platform
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-8 text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaClock className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Access</h3>
              <p className="text-gray-600">Consult with doctors anytime, anywhere, day or night.</p>
            </div>
            <div className="card p-8 text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaUserMd className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Specialists</h3>
              <p className="text-gray-600">Wide range of specialists for all your healthcare needs.</p>
            </div>
            <div className="card p-8 text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaShieldAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Secure & Private</h3>
              <p className="text-gray-600">Your health data is protected with top-level security.</p>
            </div>
            <div className="card p-8 text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaHeartbeat className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Affordable Care</h3>
              <p className="text-gray-600">Quality healthcare at a fraction of the traditional cost.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Telemedicine</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Welcome to Telemedicine, your trusted partner in healthcare innovation. We are a dedicated team of medical professionals, technologists, and visionaries committed to revolutionizing how healthcare services are delivered and accessed.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our mission is to make quality healthcare accessible to everyone, regardless of their location. We leverage cutting-edge technology to connect patients with top doctors and specialists, ensuring fast, secure, and affordable care.
              </p>
              <Link href="/about">
                <button className="btn-primary">
                  Learn More About Us
                </button>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Accessible healthcare for all
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    24/7 online consultations
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Wide network of specialists
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                    Secure and private platform
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Real stories from our satisfied patients</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Jane" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-900">Jane, Nairobi</h4>
                  <p className="text-gray-600">Patient</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Telemedicine helped me get a quick consultation for my child at midnight. The doctor was professional and caring!"
              </p>
            </div>
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Peter" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h4 className="font-semibold text-gray-900">Peter, Mombasa</h4>
                  <p className="text-gray-600">Patient</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "I love the convenience and privacy. I can talk to a specialist without leaving my home."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of patients who trust Telemedicine for their healthcare needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/registration">
              <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 text-lg">
                Sign Up Now
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300 text-lg">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
