"use client";
import { FaStethoscope, FaUserMd, FaHeartbeat, FaTooth, FaBaby, FaEye, FaBrain, FaLungs } from "react-icons/fa";

const specialists = [
  {
    name: "Dentist",
    icon: FaTooth,
    description: "Comprehensive dental care, from routine checkups to advanced procedures.",
    services: ["Dental Checkups", "Root Canal", "Teeth Whitening", "Orthodontics"],
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "Gynecology & Obstetrics",
    icon: FaBaby,
    description: "Women's health, pregnancy, and reproductive care by experienced specialists.",
    services: ["Prenatal Care", "Gynecological Exams", "Family Planning", "Pregnancy Care"],
    color: "from-pink-500 to-pink-600"
  },
  {
    name: "Dermatology",
    icon: FaStethoscope,
    description: "Expert care for skin, hair, and nail conditions.",
    services: ["Skin Exams", "Acne Treatment", "Skin Cancer Screening", "Cosmetic Procedures"],
    color: "from-orange-500 to-orange-600"
  },
  {
    name: "Allergies",
    icon: FaLungs,
    description: "Diagnosis and treatment of allergies for all ages.",
    services: ["Allergy Testing", "Immunotherapy", "Asthma Management", "Food Allergies"],
    color: "from-green-500 to-green-600"
  },
  {
    name: "Cardiology",
    icon: FaHeartbeat,
    description: "Heart health and cardiovascular care from leading cardiologists.",
    services: ["Heart Exams", "ECG Testing", "Cardiac Rehabilitation", "Preventive Care"],
    color: "from-red-500 to-red-600"
  },
  {
    name: "Neurology",
    icon: FaBrain,
    description: "Specialized care for neurological conditions and brain health.",
    services: ["Neurological Exams", "Headache Treatment", "Stroke Care", "Memory Disorders"],
    color: "from-purple-500 to-purple-600"
  },
  {
    name: "Ophthalmology",
    icon: FaEye,
    description: "Eye care and vision services from experienced ophthalmologists.",
    services: ["Eye Exams", "Vision Correction", "Cataract Surgery", "Glaucoma Treatment"],
    color: "from-indigo-500 to-indigo-600"
  },
  {
    name: "Pediatrics",
    icon: FaUserMd,
    description: "Comprehensive healthcare for children from birth to adolescence.",
    services: ["Well-child Visits", "Vaccinations", "Growth Monitoring", "Child Development"],
    color: "from-teal-500 to-teal-600"
  }
];

export default function SpecialistsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Medical Specialists</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our network includes a wide range of medical specialists to address all your healthcare needs with expertise and care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialists.map((specialist, index) => {
              const IconComponent = specialist.icon;
              return (
                <div key={index} className="card group hover:shadow-2xl transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${specialist.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white text-2xl" />
                  </div>
                  <div className="text-center p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{specialist.name}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{specialist.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900 mb-3">Services Include:</h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {specialist.services.map((service, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105">
                      Find Specialist
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Need a Specific Specialist?</h2>
            <p className="text-xl mb-6 opacity-90">
              Can't find the specialist you're looking for? Contact us and we'll connect you with the right expert
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                Contact Us
              </button>
              <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Browse All Specialists
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 