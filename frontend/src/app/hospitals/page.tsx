"use client";
import { FaHospital, FaMapMarkerAlt, FaPhone, FaGlobe } from "react-icons/fa";

const hospitals = [
  {
    name: "Nairobi General Hospital",
    location: "Nairobi, Kenya",
    specialties: ["Cardiology", "Pediatrics", "Emergency Care"],
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=300&fit=crop"
  },
  {
    name: "Mombasa Medical Centre",
    location: "Mombasa, Kenya",
    specialties: ["Surgery", "Dermatology", "Gynecology"],
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
  },
  {
    name: "Kampala Health Institute",
    location: "Kampala, Uganda",
    specialties: ["Oncology", "Neurology", "Orthopedics"],
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&h=300&fit=crop"
  },
  {
    name: "Dar es Salaam City Hospital",
    location: "Dar es Salaam, Tanzania",
    specialties: ["Internal Medicine", "ENT", "Ophthalmology"],
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop"
  }
];

export default function HospitalsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Partner Hospitals</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with leading hospitals to provide you with the best healthcare services, both online and in-person. Our network ensures you have access to quality care wherever you are.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {hospitals.map((hospital, index) => (
              <div key={index} className="card overflow-hidden group">
                <div className="relative">
                  <img
                    src={hospital.image}
                    alt={hospital.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-green-600">★ {hospital.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{hospital.name}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <FaMapMarkerAlt className="mr-2 text-blue-500" />
                    <span>{hospital.location}</span>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {hospital.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                        >
                          {specialty}
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
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Want to Partner With Us?</h2>
            <p className="text-xl mb-6 opacity-90">
              Join our network of healthcare providers and reach more patients
            </p>
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Become a Partner
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 