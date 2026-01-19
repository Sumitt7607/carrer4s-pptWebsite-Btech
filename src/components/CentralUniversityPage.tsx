import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
interface Colleges {
  name: string;
  image: string;
  description: string;
}

const colleges: Colleges[] = [
  {
    name: "Jamia Millia Islamia",
    image: "/jamia.webp",
    description:
      "Jamia Millia Islamia is a central university in New Delhi known for strong engineering, architecture, and research programs.\n\n" +
      "Strong branches: Computer Engineering, Electrical, Electronics, Mechanical Engineering.\n" +
      "Located in South Delhi with excellent academic reputation.\n\n" +
      "Admissions: B.Tech admissions through JEE Main.\n\n" +
      "Academics: Offers B.Tech, M.Tech, MSc, MBA, and PhD programs.\n\n" +
      "Placements: Good placement record.\n" +
      "Average package: ₹6–10 LPA.\n" +
      "Top recruiters: Microsoft, TCS, Infosys, L&T, Wipro.\n\n" +
      "B.Tech tuition fees: ~₹16,000–20,000 per year.\n" +
      "Hostel + mess fees: ~₹25,000–35,000 per year.\n\n" +
      "Hostel: Limited hostels, mess, Wi-Fi, library, sports facilities, and medical center."
  },
  {
    name: "Aligarh Muslim University",
    image: "/alli.png",
    description:
      "Aligarh Muslim University (AMU) is one of India’s oldest and most respected central universities.\n\n" +
      "Strong branches: Computer Engineering, Electrical, Electronics, Mechanical Engineering.\n\n" +
      "Admissions: Through AMUEEE / CUET (as per latest policy).\n\n" +
      "Academics: Offers B.Tech, M.Tech, MSc, MBA, and PhD programs.\n\n" +
      "Placements: Consistent placement performance.\n" +
      "Average package: ₹6–9 LPA.\n" +
      "Top recruiters: TCS, Infosys, Wipro, Samsung, Tech Mahindra.\n\n" +
      "B.Tech tuition fees: ~₹25,000–35,000 per year.\n" +
      "Hostel + mess fees: ~₹30,000–40,000 per year.\n\n" +
      "Hostel: Large residential campus with hostels, mess, Wi-Fi, sports complexes, hospital, and libraries."
  },
  {
    name: "Central University of Rajasthan",
    image: "/rajs.png",
    description:
      "The Central University of Rajasthan offers B.Tech programs with a focus on emerging technologies and interdisciplinary research.\n\n" +
      "Strong branches: Computer Science, Electronics, Information Technology.\n\n" +
      "Admissions: Through JEE Main / CUET (as per course rules).\n\n" +
      "Academics: B.Tech, M.Tech, MSc, and PhD programs.\n\n" +
      "Placements: Developing placement ecosystem.\n" +
      "Average package: ₹4–7 LPA.\n\n" +
      "B.Tech tuition fees: ~₹40,000–55,000 per year.\n" +
      "Hostel + mess fees: ~₹35,000–45,000 per year.\n\n" +
      "Hostel: Residential campus with hostels, mess, Wi-Fi, sports facilities, library, and medical unit."
  },
  {
    name: "Central University of Haryana",
    image: "/cuhar.webp",
    description:
      "Central University of Haryana provides quality B.Tech education with modern labs and experienced faculty.\n\n" +
      "Strong branches: Computer Science, Electronics Engineering.\n\n" +
      "Admissions: Through CUET / JEE Main (as per program).\n\n" +
      "Academics: B.Tech, M.Tech, MSc, and PhD programs.\n\n" +
      "Placements: Improving placement trends.\n" +
      "Average package: ₹4–6 LPA.\n\n" +
      "B.Tech tuition fees: ~₹35,000–50,000 per year.\n" +
      "Hostel + mess fees: ~₹30,000–40,000 per year.\n\n" +
      "Hostel: On-campus hostels with mess, Wi-Fi, sports courts, library, and campus security."
  },
  {
    name: "Central University of Jammu",
    image: "/cujam.jpg",
    description:
      "Central University of Jammu is a young but rapidly developing institution focusing on innovation and regional development.\n\n" +
      "Strong branches: Computer Science, Electronics Engineering.\n\n" +
      "Admissions: Through CUET / JEE Main.\n\n" +
      "Academics: B.Tech, M.Tech, MSc, and PhD programs.\n\n" +
      "Placements: Growing placement performance.\n" +
      "Average package: ₹3.5–6 LPA.\n\n" +
      "B.Tech tuition fees: ~₹30,000–45,000 per year.\n" +
      "Hostel + mess fees: ~₹30,000–40,000 per year.\n\n" +
      "Hostel: Residential campus with hostels, mess, Wi-Fi, library, sports facilities, and health center."
  },
  {
    name: "Central University of Karnataka",
    image: "/cukar.jpg",
    description:
      "Central University of Karnataka offers B.Tech programs in a serene campus environment emphasizing research and entrepreneurship.\n\n" +
      "Strong branches: Computer Science, Electronics Engineering.\n\n" +
      "Admissions: Through CUET / JEE Main.\n\n" +
      "Academics: B.Tech, M.Tech, MSc, and PhD programs.\n\n" +
      "Placements: Improving placement outcomes.\n" +
      "Average package: ₹4–7 LPA.\n\n" +
      "B.Tech tuition fees: ~₹35,000–50,000 per year.\n" +
      "Hostel + mess fees: ~₹30,000–40,000 per year.\n\n" +
      "Hostel: Fully residential campus with modern hostels, mess, Wi-Fi, library, sports facilities, and campus security."
  },
];


const CentralUniversityPage = () => {
const [selectedCollege, setSelectedCollege] = useState<Colleges | null>(null);
  return (
    <section className="min-h-screen bg-black text-white py-12 px-4 md:px-10">
      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-500 mb-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Central Government Universities for B.Tech
        <span className="block text-sm mt-2 text-gray-400">
          (Other than IITs & NITs)
        </span>
      </motion.h1>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {colleges.map((college, idx) => (
          <motion.div
            key={idx}
            onClick={() => setSelectedCollege(college)}
            className="cursor-pointer bg-[#111] rounded-2xl overflow-hidden shadow-lg 
                       border border-orange-500/30 hover:border-orange-500 transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <div className="h-44 overflow-hidden">
              <motion.img
                src={college.image}
                alt={college.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
            </div>

            {/* Name */}
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-orange-400">
                {college.name}
              </h2>
              <p className="text-sm text-gray-400 mt-1">
                Central Govt • B.Tech Admission
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCollege && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-[#111] rounded-2xl max-w-lg w-full p-6 border border-orange-500/40"
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              {/* Cross Button */}
              <button
                onClick={() => setSelectedCollege(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-orange-500 text-xl"
              >
                ✕
              </button>

              {/* Image */}
              {/* <img
                src={selectedCollege.image}
                alt={selectedCollege.name}
                className="w-full h-48 object-cover rounded-xl mb-4"
              /> */}

              {/* Content */}
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                {selectedCollege.name}
              </h2>

         <p className="whitespace-pre-line text-gray-300 text-sm leading-relaxed">
  {selectedCollege.description}
</p>

              <p className="mt-4 text-sm text-gray-400">
                Central Government University • B.Tech Admissions
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CentralUniversityPage;
