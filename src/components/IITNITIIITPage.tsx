import { motion } from "framer-motion";

interface College {
  name: string;
  image: string;
  description: string;
}

import { useState } from "react";
import { X } from "lucide-react";

// 6 colleges for each
const iits: College[] = [
  {
    name: "IIT Bombay",
    image: "/iitbm.webp",
    description:
      "IIT Bombay, located in Powai, Mumbai, is one of India’s most prestigious engineering institutes and a global leader in technology education and research.\n\n" +
      "Strong branches: Computer Science, Electrical, Mechanical, Aerospace Engineering.\n" +
      "Known for innovation, startups, and entrepreneurship culture.\n\n" +
      "Academics: B.Tech, M.Tech, MSc, MBA, and PhD programs across engineering, science, design, and management.\n\n" +
      "Placements: Among the best in India.\n" +
      "Average CTC (top branches): ₹20–25 LPA.\n" +
      "Top recruiters: Google, Microsoft, Apple, Goldman Sachs, Tata Group.\n\n" +
      "B.Tech tuition fees: ~₹2.3–2.5 lakh per year.\n" +
      "Hostel + mess fees: ~₹65,000–75,000 per year.\n\n" +
      "Hostel: Fully residential campus with 16+ hostels, Wi-Fi, gym, sports complexes, swimming pool, library, medical center, and 24/7 security."
  },

  {
    name: "IIT Delhi",
    image: "/iitd.jpg",
    description:
      "IIT Delhi, situated in Hauz Khas, New Delhi, is a premier technical university known for world-class education and global collaborations.\n\n" +
      "Strong branches: Computer Science, Electrical, Civil, Textile Engineering.\n\n" +
      "Academics: Undergraduate, postgraduate, and doctoral programs in engineering, science, humanities, and management.\n\n" +
      "Placements: Excellent record.\n" +
      "Average CTC (top branches): ₹18–22 LPA.\n" +
      "Top recruiters: Google, Amazon, McKinsey, Microsoft, Qualcomm, Reliance.\n\n" +
      "B.Tech tuition fees: ~₹2.2–2.4 lakh per year.\n" +
      "Hostel + mess fees: ~₹60,000–70,000 per year.\n\n" +
      "Hostel: Separate hostels for boys and girls with mess, gyms, sports facilities, common rooms, medical center, and strong campus security."
  },

  {
    name: "IIT Madras",
    image: "/iitmad.jpeg",
    description:
      "IIT Madras, located in Chennai, is consistently ranked among the top IITs in India and is known for its beautiful green campus.\n\n" +
      "Strong branches: Mechanical, Electrical, Computer Science, Ocean Engineering.\n\n" +
      "Academics: B.Tech, Dual Degree, M.Tech, MSc, and PhD programs.\n\n" +
      "Placements: Outstanding performance.\n" +
      "Average CTC (top branches): ₹18–24 LPA.\n" +
      "Top recruiters: Google, Microsoft, Samsung, Intel, Tata Group.\n\n" +
      "B.Tech tuition fees: ~₹2.1–2.3 lakh per year.\n" +
      "Hostel + mess fees: ~₹55,000–65,000 per year.\n\n" +
      "Hostel: Fully residential campus with multiple hostels, mess, sports complexes, gym, hospital, library, Wi-Fi, and natural surroundings."
  },

  {
    name: "IIT Kanpur",
    image: "/iitkp.webp",
    description:
      "IIT Kanpur is one of India’s leading research-oriented technical institutes known for academic rigor and innovation.\n\n" +
      "Strong branches: Computer Science, Aerospace, Electrical, Mechanical Engineering.\n\n" +
      "Academics: B.Tech, M.Tech, MSc, MBA, and PhD programs with strong research focus.\n\n" +
      "Placements: Excellent outcomes.\n" +
      "Average CTC (top branches): ₹16–22 LPA.\n" +
      "Top recruiters: Google, Microsoft, Flipkart, Uber, ISRO.\n\n" +
      "B.Tech tuition fees: ~₹2.1–2.3 lakh per year.\n" +
      "Hostel + mess fees: ~₹55,000–65,000 per year.\n\n" +
      "Hostel: On-campus hostels with single/shared rooms, mess, gym, sports facilities, medical center, libraries, and 24/7 security."
  },

  {
    name: "IIT Kharagpur",
    image: "/iitkhg.jpg",
    description:
      "IIT Kharagpur is India’s first IIT and one of Asia’s largest technical campuses with a rich academic legacy.\n\n" +
      "Strong branches: Computer Science, Electrical, Mechanical, Civil Engineering.\n\n" +
      "Academics: B.Tech, Dual Degree, M.Tech, MSc, MBA, LLB, and PhD programs.\n\n" +
      "Placements: Strong record.\n" +
      "Average CTC (top branches): ₹15–20 LPA.\n" +
      "Top recruiters: Google, Microsoft, Tata Steel, Samsung, Qualcomm.\n\n" +
      "B.Tech tuition fees: ~₹2.0–2.3 lakh per year.\n" +
      "Hostel + mess fees: ~₹50,000–60,000 per year.\n\n" +
      "Hostel: Huge residential campus with 20+ hostels, mess services, sports grounds, swimming pool, gym, hospital, library, and cultural centers."
  },

  {
    name: "IIT Roorkee",
    image: "/iitrk.webp",
    description:
      "IIT Roorkee is one of the oldest technical institutions in Asia and is renowned for engineering and applied sciences.\n\n" +
      "Strong branches: Civil, Mechanical, Electrical Engineering.\n\n" +
      "Academics: B.Tech, M.Tech, MSc, MBA, and PhD programs.\n\n" +
      "Placements: Very good performance.\n" +
      "Average CTC (top branches): ₹14–20 LPA.\n" +
      "Top recruiters: Microsoft, Adobe, Amazon, L&T, Tata Group.\n\n" +
      "B.Tech tuition fees: ~₹2.0–2.3 lakh per year.\n" +
      "Hostel + mess fees: ~₹50,000–60,000 per year.\n\n" +
      "Hostel: Separate hostels for boys and girls with mess facilities, sports complexes, library access, medical center, Wi-Fi, and secure campus."
  },
];



const nits: College[] = [
  { 
    name: "NIT Trichy", 
    image: "/nittri.JPG",
    description:
      "India’s top-ranked NIT, often compared with older IITs for academic quality.\n\n" +
      "Strong branches: CSE, ECE, Mechanical Engineering.\n" +
      "Large, well-planned campus with modern labs, research centers, and excellent hostels.\n\n" +
      "B.Tech tuition fees: ~₹1.6 lakh per year.\n" +
      "Hostel + mess fees: ~₹55,000–65,000 per year.\n\n" +
      "Average package: ₹10–12 LPA.\n" +
      "Highest packages: ₹40+ LPA.\n\n" +
      "Top recruiters: Google, Microsoft, Amazon, Goldman Sachs, ISRO."
  },
  { 
    name: "NIT Surathkal", 
    image: "/nitsu.avif",
    description:
      "Famous for its scenic seaside campus and strong academic culture.\n\n" +
      "Strong branches: Mechanical, Civil, Electrical, Chemical Engineering.\n" +
      "Excellent sports facilities, central library, and well-maintained hostels.\n\n" +
      "B.Tech tuition fees: ~₹1.6 lakh per year.\n" +
      "Hostel + mess fees: ~₹50,000–60,000 per year.\n\n" +
      "Average package: ₹8–10 LPA.\n" +
      "Highest packages: ₹35+ LPA.\n\n" +
      "Top recruiters: Microsoft, Oracle, Adobe, L&T, Intel."
  },
  { 
    name: "NIT Warangal", 
    image: "/nitwar.webp",
    description:
      "One of the oldest and most prestigious NITs in India.\n\n" +
      "Highly preferred for CSE, ECE, and Electrical Engineering.\n" +
      "250+ acre campus with advanced labs, innovation hubs, and student activity centers.\n\n" +
      "B.Tech tuition fees: ~₹1.6 lakh per year.\n" +
      "Hostel + mess fees: ~₹50,000–60,000 per year.\n\n" +
      "Average package: ₹9–11 LPA.\n" +
      "Highest packages: ₹45+ LPA.\n\n" +
      "Top recruiters: Amazon, Qualcomm, Adobe, Goldman Sachs, Deloitte."
  },
  { 
    name: "NIT Rourkela", 
    image: "/nitrou.jpg",
    description:
      "Known for its large green campus and strong core engineering focus.\n\n" +
      "Strong branches: Mechanical, Metallurgy, Civil, CSE.\n" +
      "Modern research labs, central library, and good hostel facilities.\n\n" +
      "B.Tech tuition fees: ~₹1.6 lakh per year.\n" +
      "Hostel + mess fees: ~₹45,000–55,000 per year.\n\n" +
      "Average package: ₹7–9 LPA.\n\n" +
      "Top recruiters: Tata Steel, Google, Microsoft, Reliance."
  },
  { 
    name: "NIT Calicut", 
    image: "/nitcal.webp",
    description:
      "Leading NIT in Kerala with strong academics and faculty strength.\n\n" +
      "Strong branches: Electrical, Mechanical, Architecture.\n" +
      "Beautiful hilltop campus with modern classrooms and labs.\n\n" +
      "B.Tech tuition fees: ~₹1.6 lakh per year.\n" +
      "Hostel + mess fees: ~₹45,000–55,000 per year.\n\n" +
      "Average package: ₹7–9 LPA.\n\n" +
      "Top recruiters: Infosys, TCS, Bosch, Amazon, Siemens."
  },
  { 
    name: "NIT Durgapur", 
    image: "/nitdur.png",
    description:
      "Well-known for core engineering and disciplined academic environment.\n\n" +
      "Strong branches: Mechanical, Electrical, Chemical Engineering.\n" +
      "Modern labs, hostels, and sports facilities.\n\n" +
      "B.Tech tuition fees: ~₹1.5 lakh per year.\n" +
      "Hostel + mess fees: ~₹40,000–50,000 per year.\n\n" +
      "Average package: ₹6–8 LPA.\n\n" +
      "Top recruiters: TCS, Wipro, Cognizant, Tata Motors, L&T."
  },
];



const iiits: College[] = [
  { 
    name: "IIIT Hyderabad", 
    image: "/iithbad.jpg",
    description:
      "IIIT Hyderabad is India’s top institute focused exclusively on Computer Science and IT.\n\n" +
      "Strong branches: CSE, AI, Data Science, ECE.\n" +
      "Known for research, innovation, and rigorous academics.\n\n" +
      "Academics: B.Tech, Dual Degree, M.Tech, MS by Research, and PhD programs.\n\n" +
      "Placements: Among the best in India for CS.\n" +
      "Average CTC: ₹28–32 LPA.\n" +
      "Highest packages: ₹60+ LPA.\n" +
      "Top recruiters: Google, Microsoft, Amazon, Adobe, Apple.\n\n" +
      "B.Tech tuition fees: ~₹4.0–4.5 lakh per year.\n" +
      "Hostel + mess fees: ~₹85,000–95,000 per year.\n\n" +
      "Hostel: Fully residential campus with modern hostels, Wi-Fi, gym, sports facilities, library, and research labs."
  },

  { 
    name: "IIIT Delhi", 
    image: "/iiiitdel.avif", 
    description:
      "IIIT Delhi is a leading technology institute known for computer science and interdisciplinary research.\n\n" +
      "Strong branches: CSE, AI, ECE, Data Science.\n\n" +
      "Academics: B.Tech, M.Tech, MS (Research), and PhD programs.\n\n" +
      "Placements: Excellent placement record.\n" +
      "Average CTC: ₹16–20 LPA.\n" +
      "Highest packages: ₹40+ LPA.\n" +
      "Top recruiters: Google, Microsoft, Amazon, Uber, Samsung.\n\n" +
      "B.Tech tuition fees: ~₹4.0–4.3 lakh per year.\n" +
      "Hostel + mess fees: ~₹75,000–85,000 per year.\n\n" +
      "Hostel: Separate hostels for boys and girls, mess, Wi-Fi, gym, sports courts, library, and strong campus security."
  },

  { 
    name: "IIIT Bangalore", 
    image: "/iiitbang.jpg",
    description:
      "IIIT Bangalore is a premier postgraduate-focused institute with strong industry collaboration.\n\n" +
      "Strong branches: Data Science, AI, Software Engineering, ECE.\n\n" +
      "Academics: Integrated M.Tech, PG Diploma, MSc Digital Society, and PhD programs.\n\n" +
      "Placements: Strong industry-linked placements.\n" +
      "Average CTC: ₹14–18 LPA.\n" +
      "Top recruiters: Google, Microsoft, Amazon, Flipkart, Infosys.\n\n" +
      "Tuition fees: ~₹4.5–5.0 lakh per year (PG programs).\n" +
      "Hostel + mess fees: ~₹80,000–90,000 per year.\n\n" +
      "Hostel: Fully residential campus with modern hostels, Wi-Fi, gym, sports facilities, library, and innovation labs."
  },

  { 
    name: "IIIT Allahabad", 
    image: "/iiitpr.avif",
    description:
      "IIIT Allahabad is one of the top government IIITs known for strong coding culture.\n\n" +
      "Strong branches: IT, ECE, AI.\n\n" +
      "Academics: B.Tech, M.Tech, MBA, and PhD programs.\n\n" +
      "Placements: Very good placement performance.\n" +
      "Average CTC: ₹12–16 LPA.\n" +
      "Top recruiters: Google, Microsoft, Amazon, Adobe, Flipkart.\n\n" +
      "B.Tech tuition fees: ~₹2.2–2.5 lakh per year.\n" +
      "Hostel + mess fees: ~₹60,000–70,000 per year.\n\n" +
      "Hostel: Fully residential campus with hostels, mess, sports facilities, library, Wi-Fi, and medical center."
  },

  { 
    name: "IIIT Gwalior", 
    image: "/iiitgwa.jpg",
    description:
      "IIIT Gwalior is a reputed government IIIT known for computer science and electronics.\n\n" +
      "Strong branches: CSE, IT, ECE.\n\n" +
      "Academics: B.Tech, M.Tech, and PhD programs.\n\n" +
      "Placements: Consistent placements.\n" +
      "Average CTC: ₹10–14 LPA.\n" +
      "Top recruiters: Amazon, Microsoft, Infosys, TCS, Cognizant.\n\n" +
      "B.Tech tuition fees: ~₹2.0–2.3 lakh per year.\n" +
      "Hostel + mess fees: ~₹55,000–65,000 per year.\n\n" +
      "Hostel: On-campus hostels with mess, Wi-Fi, sports courts, library, and secure campus."
  },

  { 
    name: "IIIT Pune", 
    image: "/iiitpun.webp",
    description:
      "IIIT Pune is a newer government IIIT with growing reputation in IT education.\n\n" +
      "Strong branches: CSE, ECE.\n\n" +
      "Academics: B.Tech and PhD programs.\n\n" +
      "Placements: Improving placement trends.\n" +
      "Average CTC: ₹8–12 LPA.\n" +
      "Top recruiters: Infosys, TCS, Accenture, Cognizant.\n\n" +
      "B.Tech tuition fees: ~₹2.0–2.2 lakh per year.\n" +
      "Hostel + mess fees: ~₹55,000–65,000 per year.\n\n" +
      "Hostel: Residential facilities with mess, Wi-Fi, sports areas, library access, and campus security."
  },
];


const CollegeSection = ({
  title,
  colleges,
}: {
  title: string;
  colleges: College[];
}) => {
  const [selectedCollege, setSelectedCollege] = useState<College | null>(null);

  return (
    <section className="relative py-20 px-6 md:px-12 overflow-hidden">
      {/* background blobs ... same as before */}

      {/* Section Header */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400 mb-12 text-center relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h2>

      {/* Colleges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 relative z-10">
        {colleges.map((college, idx) => (
          <motion.div
            key={idx}
            onClick={() => setSelectedCollege(college)}
  className="group rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-900 to-black border border-white/10 shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-yellow-400/40"

            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={college.image}
                alt={college.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"

              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg md:text-xl font-semibold text-yellow-400">
                {college.name}
                <p className="text-xs text-gray-400 mt-1">
  Click to view details
</p>

              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔹 Modal */}
      {selectedCollege && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCollege(null)}
        >
          <motion.div
            className="bg-zinc-900 rounded-2xl max-w-lg w-full p-6 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCollege(null)}
              className="absolute top-3 right-3 text-white hover:text-yellow-400"
            >
              <X size={22} />
            </button>

            {/* Image */}
            {/* <img
              // src={selectedCollege.image}
              alt={selectedCollege.name}
              className="w-full h-56 object-cover rounded-xl mb-4"
            /> */}

            {/* Content */}
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">
              {selectedCollege.name}
            </h3>
          <p className="whitespace-pre-line text-gray-300 text-sm leading-relaxed">
  {selectedCollege.description}
</p>

          </motion.div>
        </motion.div>
      )}
    </section>
  );
};


const IITNITIIITPage = () => {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* IIT Section */}
      <CollegeSection title="Indian Institutes of Technology (IITs)" colleges={iits} />
      {/* NIT Section */}
      <CollegeSection title="National Institutes of Technology (NITs)" colleges={nits} />
      {/* IIIT Section */}
      <CollegeSection title="Indian Institutes of Information Technology (IIITs)" colleges={iiits} />
    </div>
  );
};

export default IITNITIIITPage;
