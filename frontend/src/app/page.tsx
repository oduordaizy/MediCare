"use client";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle, FaUserMd, FaLaptopMedical, FaClock, FaShieldAlt } from "react-icons/fa";
import Image from "next/image";

const features = [
  {
    icon: FaUserMd,
    title: "Expert Doctors",
    description: "Connect with qualified healthcare professionals from anywhere."
  },
  {
    icon: FaLaptopMedical,
    title: "Online Consultations",
    description: "Get medical advice and prescriptions through secure video calls."
  },
  {
    icon: FaClock,
    title: "24/7 Availability",
    description: "Access healthcare services anytime, day or night."
  },
  {
    icon: FaShieldAlt,
    title: "Secure & Private",
    description: "Your health information is protected with state-of-the-art security."
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
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Healthcare at Your
                <span className="text-gradient"> Fingertips</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Access quality healthcare from anywhere with our innovative telemedicine platform. Connect with expert doctors, get prescriptions, and receive care without leaving your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/registration">
                  <button className="btn-primary">
                    Get Started Today
                    <FaArrowRight className="ml-2" />
                  </button>
                </Link>
                <Link href="/doctors">
                  <button className="btn-secondary">
                    Find a Doctor
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
                alt="Telemedicine Consultation"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-green-600 text-white p-4 rounded-xl">
                <div className="text-2xl font-bold">10,000+</div>
                <div className="text-sm opacity-90">Happy Patients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose MediCare?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re revolutionizing healthcare delivery with cutting-edge technology and compassionate care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="card p-6 text-center group hover:shadow-2xl transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Users Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what patients and doctors are saying about MediCare.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card p-8 group hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaCheckCircle key={i} className="text-yellow-400 mr-1" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">&quot;{testimonial.content}&quot;</p>
                <div className="flex items-center">
                  <Image
                    src={`https://randomuser.me/api/portraits/${testimonial.name.includes('Sarah') || testimonial.name.includes('Amina') ? 'women' : 'men'}/${index + 1}.jpg`}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join thousands of patients who are already enjoying the convenience of telemedicine. Your health journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/registration">
              <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Create Account
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
