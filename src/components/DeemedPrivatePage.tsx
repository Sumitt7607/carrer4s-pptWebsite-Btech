import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";
interface College {
  name: string;
  image: string;
  description: string;
}

const colleges: College[] = [
  {
    name: "VIT Vellore",
    image: "/vit.webp",
    description:
      "VIT Vellore is one of India’s top private engineering universities, known for strong placements, modern infrastructure, and global exposure.\n\n" +
      "Strong branches: CSE, IT, AI, Data Science, ECE, Mechanical Engineering.\n\n" +
      "Admissions: Through VITEEE entrance exam.\n\n" +
      "Academics: Offers B.Tech, M.Tech, MSc, MBA, and PhD programs.\n\n" +
      "Placements: Excellent placement record.\n" +
      "Average package: ₹8–10 LPA.\n" +
      "Highest packages: ₹60+ LPA.\n" +
      "Top recruiters: Google, Microsoft, Amazon, Deloitte, Intel.\n\n" +
      "B.Tech tuition fees: ~₹2.0–4.5 lakh per year (branch-based).\n" +
      "Hostel + mess fees: ~₹1.0–1.3 lakh per year.\n\n" +
      "Hostel: Fully residential campus with modern hostels, Wi-Fi, gyms, sports complexes, library, and medical center."
  },
  {
    name: "Amity University, Noida",
    image: "/amity.webp",
    description:
      "Amity University Noida offers a wide range of B.Tech programs with industry-focused curriculum and strong corporate connections.\n\n" +
      "Strong branches: CSE, AI, IT, ECE, Mechanical Engineering.\n\n" +
      "Admissions: Through Amity JEE / CUET / Direct admission.\n\n" +
      "Academics: B.Tech, M.Tech, MBA, and PhD programs.\n\n" +
      "Placements: Good placement support.\n" +
      "Average package: ₹5–7 LPA.\n" +
      "Top recruiters: Accenture, TCS, Cognizant, Amazon, Wipro.\n\n" +
      "B.Tech tuition fees: ~₹2.5–3.5 lakh per year.\n" +
      "Hostel + mess fees: ~₹1.2–1.5 lakh per year.\n\n" +
      "Hostel: On-campus hostels with mess, Wi-Fi, sports facilities, gyms, and medical center."
  },
  {
    name: "SRM Institute of Science & Technology",
    image: "/srm.jpg",
    description:
      "SRM University is known for its large campus, diverse B.Tech specializations, and strong industry exposure.\n\n" +
      "Strong branches: CSE, AI, IT, ECE, Biotechnology, Mechanical Engineering.\n\n" +
      "Admissions: Through SRMJEEE entrance exam.\n\n" +
      "Academics: B.Tech, M.Tech, MBA, MSc, and PhD programs.\n\n" +
      "Placements: Very good placement performance.\n" +
      "Average package: ₹6–8 LPA.\n" +
      "Highest packages: ₹50+ LPA.\n" +
      "Top recruiters: Amazon, Microsoft, Samsung, TCS, Cognizant.\n\n" +
      "B.Tech tuition fees: ~₹2.5–4.0 lakh per year.\n" +
      "Hostel + mess fees: ~₹1.1–1.4 lakh per year.\n\n" +
      "Hostel: Fully residential campus with modern hostels, Wi-Fi, sports complexes, library, and hospital."
  },
  {
    name: "Manipal Academy of Higher Education",
    image: "/manipal.jpg",
    description:
      "Manipal University provides high-quality engineering education with excellent campus life and strong alumni network.\n\n" +
      "Strong branches: CSE, IT, ECE, Mechanical, Biomedical Engineering.\n\n" +
      "Admissions: Through MET (Manipal Entrance Test).\n\n" +
      "Academics: B.Tech, M.Tech, MSc, MBA, and PhD programs.\n\n" +
      "Placements: Strong placement record.\n" +
      "Average package: ₹7–9 LPA.\n" +
      "Top recruiters: Microsoft, Amazon, Goldman Sachs, Deloitte.\n\n" +
      "B.Tech tuition fees: ~₹3.0–4.5 lakh per year.\n" +
      "Hostel + mess fees: ~₹1.0–1.3 lakh per year.\n\n" +
      "Hostel: Fully residential campus with modern hostels, sports facilities, gyms, hospital, and Wi-Fi."
  },
  {
    name: "Lovely Professional University",
    image: "/lpu.jpg",
    description:
      "LPU is one of the largest private universities in India offering diverse B.Tech programs and industry-oriented training.\n\n" +
      "Strong branches: CSE, IT, AI, ECE, Mechanical Engineering.\n\n" +
      "Admissions: Through LPUNEST / CUET.\n\n" +
      "Academics: B.Tech, M.Tech, MBA, and PhD programs.\n\n" +
      "Placements: Improving placement trends.\n" +
      "Average package: ₹4–6 LPA.\n" +
      "Top recruiters: Cognizant, TCS, Capgemini, Infosys.\n\n" +
      "B.Tech tuition fees: ~₹1.8–3.0 lakh per year.\n" +
      "Hostel + mess fees: ~₹90,000–1.2 lakh per year.\n\n" +
      "Hostel: Large residential campus with hostels, Wi-Fi, sports complexes, gyms, and shopping areas."
  },
  {
    name: "Shiv Nadar University",
    image: "/shiv.jpg",
    description:
      "Shiv Nadar University focuses on research-driven education and strong academic rigor.\n\n" +
      "Strong branches: CSE, ECE, Mechanical Engineering.\n\n" +
      "Admissions: Through SNUCEE / CUET.\n\n" +
      "Academics: B.Tech, M.Tech, MSc, MBA, and PhD programs.\n\n" +
      "Placements: Good placement performance.\n" +
      "Average package: ₹6–9 LPA.\n\n" +
      "B.Tech tuition fees: ~₹3.5–4.5 lakh per year.\n" +
      "Hostel + mess fees: ~₹1.2–1.5 lakh per year.\n\n" +
      "Hostel: Fully residential campus with modern hostels, Wi-Fi, sports facilities, library, and medical unit."
  },
  {
    name: "Bharti Vidyapeeth",
    image: "/bhjar.webp",
    description:
      "Bharti Vidyapeeth is a deemed university offering quality technical education with good faculty support.\n\n" +
      "Strong branches: CSE, IT, ECE, Mechanical Engineering.\n\n" +
      "Admissions: Through BVP CET.\n\n" +
      "Academics: B.Tech, M.Tech, MBA, and PhD programs.\n\n" +
      "Placements: Moderate placement record.\n" +
      "Average package: ₹4–6 LPA.\n\n" +
      "B.Tech tuition fees: ~₹1.8–2.5 lakh per year.\n" +
      "Hostel + mess fees: ~₹80,000–1.1 lakh per year.\n\n" +
      "Hostel: On-campus hostels with mess, Wi-Fi, sports courts, and medical center."
  },
  {
    name: "Amrita University",
    image: "/amrita.jpg",
    description:
      "Amrita University is well known for discipline, research culture, and strong placements.\n\n" +
      "Strong branches: CSE, AI, ECE, Mechanical Engineering.\n\n" +
      "Admissions: Through AEEE entrance exam.\n\n" +
      "Academics: B.Tech, M.Tech, MBA, MSc, and PhD programs.\n\n" +
      "Placements: Very good placement record.\n" +
      "Average package: ₹7–9 LPA.\n\n" +
      "B.Tech tuition fees: ~₹2.0–3.5 lakh per year.\n" +
      "Hostel + mess fees: ~₹1.0–1.3 lakh per year.\n\n" +
      "Hostel: Fully residential campus with modern hostels, Wi-Fi, sports facilities, library, and hospital."
  },
  {
    name: "Thapar University",
    image: "/thapar.jpg",
    description:
      "Thapar Institute of Engineering & Technology is among India’s top private engineering colleges.\n\n" +
      "Strong branches: CSE, ECE, Mechanical Engineering.\n\n" +
      "Admissions: Through JEE Main.\n\n" +
      "Academics: B.Tech, M.Tech, MBA, and PhD programs.\n\n" +
      "Placements: Excellent placement performance.\n" +
      "Average package: ₹10–12 LPA.\n\n" +
      "B.Tech tuition fees: ~₹3.5–4.5 lakh per year.\n" +
      "Hostel + mess fees: ~₹1.0–1.3 lakh per year.\n\n" +
      "Hostel: Fully residential campus with hostels, Wi-Fi, sports complexes, library, and hospital."
  },
  {
    name: "Kalinga University",
    image: "/kalinga.jpg",
    description:
      "Kalinga University offers emerging B.Tech programs with focus on innovation and industry readiness.\n\n" +
      "Strong branches: CSE, IT, ECE.\n\n" +
      "Admissions: Through CUET / University entrance.\n\n" +
      "Academics: B.Tech, M.Tech, MBA, and PhD programs.\n\n" +
      "Placements: Growing placement ecosystem.\n" +
      "Average package: ₹3.5–6 LPA.\n\n" +
      "B.Tech tuition fees: ~₹1.5–2.5 lakh per year.\n" +
      "Hostel + mess fees: ~₹80,000–1.1 lakh per year.\n\n" +
      "Hostel: Residential campus with hostels, mess, Wi-Fi, sports facilities, and library."
  },
];


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const DeemedPrivatePage = () => {
  const [selectedCollege, setSelectedCollege] = useState(null);

  return (
    <section className="min-h-screen bg-black text-white py-14 px-4 md:px-10">
      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-500 mb-14 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Deemed & Private Universities
      </motion.h1>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {colleges.map((college, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedCollege(college)}
            className="cursor-pointer bg-[#111] rounded-2xl overflow-hidden shadow-lg 
                       border border-orange-500/30 hover:border-orange-500 transition-all"
          >
            {/* Image */}
            <div className="h-44 w-full overflow-hidden">
              <img
                src={college.image}
                alt={college.name}
                className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Text */}
            <div className="p-5 text-center">
              <h2 className="text-lg md:text-xl font-semibold text-orange-400">
                {college.name}
              </h2>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal Popup */}
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
      

              {/* Content */}
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                {selectedCollege.name}
              </h2>
<p className="whitespace-pre-line text-gray-300 text-sm leading-relaxed">
  {selectedCollege.description}
</p>


              <p className="mt-4 text-sm text-gray-400">
                Deemed / Private University • B.Tech Admissions
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default DeemedPrivatePage;
