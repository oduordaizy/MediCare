"use client";
import Link from "next/link";
import { FaArrowRight, FaUserMd, FaLaptopMedical, FaClock, FaShieldAlt, FaStar } from "react-icons/fa";
import Image from "next/image";

const features = [
  {
    icon: FaUserMd,
    title: "Expert Doctors",
    description: "Connect with qualified healthcare professionals from anywhere.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: FaLaptopMedical,
    title: "Online Consultations",
    description: "Get medical advice and prescriptions through secure video calls.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: FaClock,
    title: "24/7 Availability",
    description: "Access healthcare services anytime, day or night.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: FaShieldAlt,
    title: "Secure & Private",
    description: "Your health information is protected with state-of-the-art security.",
    color: "from-orange-500 to-orange-600"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Patient",
    content: "MediCare made it so easy to get medical care without leaving my home. The doctors were professional and caring.",
    rating: 5
  },
  {
    name: "Dr. Michael Chen",
    role: "Cardiologist",
    content: "I can now reach more patients and provide care to those who might not have access to specialized medical services.",
    rating: 5
  },
  {
    name: "Amina Hassan",
    role: "Patient",
    content: "The convenience of online consultations has been a game-changer for my busy schedule. Highly recommended!",
    rating: 5
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 pt-8 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  <div className="mb-2">Bringing</div>
                  <div className="text-gradient bg-gradient-to-r from-blue-900 to-blue-800 bg-clip-text text-transparent mb-2">Healthcare</div>
                  <div>Closer to Everyone</div>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Access quality healthcare from anywhere. Connect with expert doctors and get prescriptions without leaving your home.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/registration">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white font-bold rounded-xl hover:from-blue-800 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    <span className="flex items-center text-white">
                      Get Started Today
                      <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </Link>
                <Link href="/doctors">
                  <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105">
                    Find a Doctor
                  </button>
                </Link>
              </div>
              

            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/main-img.jpg"
                  alt="Telemedicine Consultation"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-full text-blue-800 font-semibold text-sm mb-4">
              Why Choose Us
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Why Choose MediCare?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re revolutionizing healthcare delivery with cutting-edge technology and compassionate care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative card p-8 text-center group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="text-white text-3xl" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-green-50 relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full text-green-800 font-semibold text-sm mb-4">
              Testimonials
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what patients and doctors are saying about MediCare.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative card p-8 group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 mr-1" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg italic">&quot;{testimonial.content}&quot;</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full mr-4 bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600 to-green-600 opacity-90"></div>
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute top-20 right-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join thousands of patients who are already enjoying the convenience of telemedicine. Your health journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/registration">
              <button className="group px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="flex items-center">
                  Create Account
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
