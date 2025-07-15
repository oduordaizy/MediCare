"use client";
import { FaStar, FaPhone, FaEnvelope, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

const specialists = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    experience: "15+ years",
    rating: 4.9,
    patients: 1500,
    location: "Nairobi, Kenya",
    image: null, // No local image provided
    description: "Expert in treating heart conditions and providing cardiac care with the latest medical technologies.",
    availability: "Mon-Fri, 9AM-5PM",
    languages: ["English", "Swahili"],
    education: "MBChB, University of Nairobi",
    certifications: ["Cardiology Board Certified", "Advanced Cardiac Life Support"]
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    experience: "12+ years",
    rating: 4.8,
    patients: 1200,
    location: "Mombasa, Kenya",
    image: null, // No local image provided
    description: "Specialized in neurological disorders, stroke treatment, and brain health management.",
    availability: "Mon-Sat, 8AM-6PM",
    languages: ["English", "Swahili", "Mandarin"],
    education: "MBChB, University of Cape Town",
    certifications: ["Neurology Board Certified", "Stroke Specialist"]
  },
  {
    name: "Dr. Amina Hassan",
    specialty: "Dermatologist",
    experience: "10+ years",
    rating: 4.7,
    patients: 900,
    location: "Nairobi, Kenya",
    image: "/doctors/amina-yusuf.png",
    description: "Expert in skin care, treating a wide range of skin conditions and cosmetic procedures.",
    availability: "Mon-Fri, 10AM-4PM",
    languages: ["English", "Swahili", "Arabic"],
    education: "MBChB, University of Nairobi",
    certifications: ["Dermatology Board Certified", "Cosmetic Dermatology"]
  },
  {
    name: "Dr. Samuel Kimani",
    specialty: "Orthopedic Surgeon",
    experience: "18+ years",
    rating: 4.9,
    patients: 2000,
    location: "Kampala, Uganda",
    image: "/doctors/samuel-kimani.png",
    description: "Specialized in joint replacement, sports injuries, and orthopedic surgery.",
    availability: "Mon-Fri, 8AM-5PM",
    languages: ["English", "Swahili", "Luganda"],
    education: "MBChB, Makerere University",
    certifications: ["Orthopedic Surgery Board Certified", "Sports Medicine"]
  }
];

export default function SpecialistsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Medical Specialists</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with highly qualified medical specialists who are experts in their fields. Our specialists provide comprehensive care for complex medical conditions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {specialists.map((specialist, index) => (
              <div key={index} className="card overflow-hidden group">
                <div className="relative">
                  {specialist.image ? (
                    <Image
                      src={specialist.image}
                      alt={specialist.name}
                      width={256}
                      height={256}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                  ) : (
                    <div className="w-full h-64 bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 rounded-t-lg">
                      <div className="text-white text-center">
                        <div className="text-6xl font-bold mb-2">
                          {specialist.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="text-lg opacity-90">{specialist.specialty}</div>
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                    <FaStar className="text-yellow-500 mr-1" />
                    <span className="text-sm font-semibold text-gray-700">{specialist.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{specialist.name}</h3>
                      <p className="text-blue-600 font-semibold">{specialist.specialty}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">{specialist.experience}</p>
                      <p className="text-sm text-gray-600">{specialist.patients} patients</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <FaMapMarkerAlt className="mr-2 text-blue-500" />
                    <span>{specialist.location}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">{specialist.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <FaCalendarAlt className="mr-2 text-green-500" />
                      <span className="text-sm font-medium text-gray-700">{specialist.availability}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {specialist.languages.map((language, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-600"><strong>Education:</strong> {specialist.education}</p>
                      <div className="text-sm text-gray-600">
                        <strong>Certifications:</strong>
                        <ul className="list-disc list-inside mt-1">
                          {specialist.certifications.map((cert, idx) => (
                            <li key={idx}>{cert}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105">
                      Book Consultation
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
            <h2 className="text-3xl font-bold mb-4">Need a Specific Specialist?</h2>
            <p className="text-xl mb-6 opacity-90">
              Can&apos;t find the right specialist? Contact us and we&apos;ll help you find the perfect match for your medical needs.
            </p>
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Find Your Specialist
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 