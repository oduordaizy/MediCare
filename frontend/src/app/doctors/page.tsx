"use client";
import { FaStar, FaPhone, FaEnvelope, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const doctors = [
  {
    name: "Dr. John Doe",
    specialty: "Cardiologist",
    experience: "10+ years",
    rating: 4.9,
    patients: 1200,
    location: "Nairobi, Kenya",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description: "Expert in treating heart conditions and providing cardiac care with the latest medical technologies.",
    availability: "Mon-Fri, 9AM-5PM",
    languages: ["English", "Swahili"]
  },
  {
    name: "Dr. Jane Smith",
    specialty: "Pediatrician",
    experience: "8+ years",
    rating: 4.8,
    patients: 950,
    location: "Mombasa, Kenya",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    description: "Specialized in child health, growth, and development with a caring and gentle approach.",
    availability: "Mon-Sat, 8AM-6PM",
    languages: ["English", "Swahili", "French"]
  },
  {
    name: "Dr. Samuel Kimani",
    specialty: "Dermatologist",
    experience: "12+ years",
    rating: 4.7,
    patients: 800,
    location: "Nairobi, Kenya",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    description: "Specialist in skin care, treating a wide range of skin conditions and cosmetic procedures.",
    availability: "Mon-Fri, 10AM-4PM",
    languages: ["English", "Swahili"]
  },
  {
    name: "Dr. Amina Yusuf",
    specialty: "Gynecologist",
    experience: "15+ years",
    rating: 4.9,
    patients: 1100,
    location: "Mombasa, Kenya",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    description: "Providing expert care in women's health, pregnancy, and reproductive health services.",
    availability: "Mon-Sat, 9AM-5PM",
    languages: ["English", "Swahili", "Arabic"]
  }
];

export default function DoctorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Expert Doctors</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our team of highly qualified and experienced doctors, ready to provide you with the best care online and in-person.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {doctors.map((doctor, index) => (
              <div key={index} className="card overflow-hidden group">
                <div className="relative">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                    <FaStar className="text-yellow-500 mr-1" />
                    <span className="text-sm font-semibold text-gray-700">{doctor.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                      <p className="text-blue-600 font-semibold">{doctor.specialty}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">{doctor.experience}</p>
                      <p className="text-sm text-gray-600">{doctor.patients} patients</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <FaMapMarkerAlt className="mr-2 text-blue-500" />
                    <span>{doctor.location}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">{doctor.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <FaCalendarAlt className="mr-2 text-green-500" />
                      <span className="text-sm font-medium text-gray-700">{doctor.availability}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {doctor.languages.map((language, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105">
                      Book Appointment
                    </button>
                    <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                      <FaPhone />
                    </button>
                    <button className="px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300">
                      <FaEnvelope />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Specialist?</h2>
            <p className="text-xl mb-6 opacity-90">
              Can't find the right doctor? Contact us and we'll help you find the perfect match
            </p>
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Find Your Doctor
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 