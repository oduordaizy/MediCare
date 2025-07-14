"use client";
import { FaHeartbeat, FaUsers, FaAward, FaShieldAlt, FaGlobe, FaClock, FaUserMd } from "react-icons/fa";
import Image from "next/image";

const stats = [
  { number: "10,000+", label: "Patients Served", icon: FaUsers },
  { number: "50+", label: "Expert Doctors", icon: FaUserMd },
  { number: "24/7", label: "Available Support", icon: FaClock },
  { number: "100%", label: "Secure & Private", icon: FaShieldAlt }
];

const values = [
  {
    title: "Patient-Centered Care",
    description: "Every decision we make is focused on providing the best possible care for our patients.",
    icon: FaHeartbeat,
    color: "from-red-500 to-red-600"
  },
  {
    title: "Excellence in Healthcare",
    description: "We maintain the highest standards of medical care and professional excellence.",
    icon: FaAward,
    color: "from-yellow-500 to-yellow-600"
  },
  {
    title: "Innovation & Technology",
    description: "Leveraging cutting-edge technology to improve healthcare delivery and patient outcomes.",
    icon: FaGlobe,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Trust & Reliability",
    description: "Building lasting relationships based on trust, transparency, and reliable healthcare services.",
    icon: FaShieldAlt,
    color: "from-green-500 to-green-600"
  }
];

const team = [
  {
    name: "Dr. Sarah Johnson",
    role: "Chief Medical Officer",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    description: "Leading our medical team with over 15 years of experience in telemedicine and digital health."
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    description: "Driving innovation in healthcare technology to create seamless patient experiences."
  },
  {
    name: "Dr. Amina Hassan",
    role: "Head of Operations",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    description: "Ensuring smooth operations and maintaining the highest standards of patient care."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About MediCare</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We&apos;re revolutionizing healthcare delivery in East Africa by connecting patients with qualified doctors through our innovative telemedicine platform. Our mission is to make quality healthcare accessible, affordable, and convenient for everyone.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white text-2xl" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">Our Mission</h3>
                  <p className="text-blue-800 leading-relaxed">
                    To provide accessible, high-quality healthcare to every individual in East Africa, regardless of their location or economic status, through innovative telemedicine solutions.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl">
                  <h3 className="text-2xl font-bold text-green-900 mb-3">Our Vision</h3>
                  <p className="text-green-800 leading-relaxed">
                    To become the leading telemedicine platform in East Africa, setting the standard for digital healthcare delivery and improving health outcomes across the region.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop"
                alt="Healthcare Team"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-green-600 text-white p-4 rounded-xl">
                <div className="text-2xl font-bold">5+ Years</div>
                <div className="text-sm opacity-90">of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape our commitment to providing exceptional healthcare services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="card p-8 text-center group hover:shadow-2xl transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team is dedicated to transforming healthcare delivery in East Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card text-center group hover:shadow-2xl transition-all duration-300">
                <div className="relative mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    {member.role}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-bold mb-6">Join Us in Transforming Healthcare</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Whether you&apos;re a patient seeking care or a healthcare provider looking to expand your reach, we&apos;re here to help you achieve better health outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Get Started Today
              </button>
              <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 