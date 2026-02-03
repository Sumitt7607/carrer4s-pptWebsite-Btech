import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
interface College {
  name: string;
  image: string;
  description: string;
}

/* ---------------- DATA ---------------- */

const universities: College[] = [
  {
    name: "State Institute of Engineering & Technology, Haryana",
    image: "/si.avif",
    description:
      "State Institute of Engineering & Technology (SIET), Haryana offers B.Tech programs with a focus on core engineering branches and regional development.\n\n" +
      "Strong branches: Mechanical, Electrical, Civil, Electronics Engineering.\n\n" +
      "Admissions: Through HSTES counseling based on JEE Main rank.\n\n" +
      "Academics: Offers B.Tech and M.Tech programs.\n\n" +
      "Placements: Moderate placement record.\n" +
      "Average package: ₹3–5 LPA.\n" +
      "Top recruiters: L&T, TCS, Wipro, local manufacturing firms.\n\n" +
      "B.Tech tuition fees: ~₹45,000–60,000 per year.\n" +
      "Hostel + mess fees: ~₹25,000–35,000 per year.\n\n" +
      "Hostel: On-campus hostels with mess, Wi-Fi, sports facilities, and medical unit."
  },
  {
    name: "Kurukshetra University",
    image: "/kr.avif",
    description:
      "Kurukshetra University is a reputed state university in Haryana with strong academic heritage and experienced faculty.\n\n" +
      "Strong branches: Computer Science, Electronics, Mechanical, Electrical Engineering.\n\n" +
      "Admissions: Through HSTES / University counseling based on JEE Main.\n\n" +
      "Academics: Offers B.Tech, M.Tech, MSc, and PhD programs.\n\n" +
      "Placements: Good placement performance.\n" +
      "Average package: ₹4–7 LPA.\n" +
      "Top recruiters: Infosys, TCS, Wipro, Capgemini, HCL.\n\n" +
      "B.Tech tuition fees: ~₹50,000–70,000 per year.\n" +
      "Hostel + mess fees: ~₹30,000–40,000 per year.\n\n" +
      "Hostel: Residential campus with hostels, mess, Wi-Fi, sports complexes, library, and health center."
  },
  {
    name: "University Institute of Engineering & Technology, Rohtak",
    image: "/roh.webp",
    description:
      "UIET Rohtak provides quality B.Tech education with modern laboratories and skilled faculty.\n\n" +
      "Strong branches: Computer Science, Electronics, Mechanical Engineering.\n\n" +
      "Admissions: Through HSTES counseling based on JEE Main rank.\n\n" +
      "Academics: Offers B.Tech and M.Tech programs.\n\n" +
      "Placements: Growing placement ecosystem.\n" +
      "Average package: ₹3.5–6 LPA.\n\n" +
      "B.Tech tuition fees: ~₹45,000–65,000 per year.\n" +
      "Hostel + mess fees: ~₹25,000–35,000 per year.\n\n" +
      "Hostel: On-campus hostels with mess, Wi-Fi, sports courts, library, and campus security."
  },
  {
    name: "CH. Ranbir Singh State Institute of Engineering & Technology, Jhajjar",
    image: "/ch.webp",
    description:
      "CRS SIET Jhajjar is a government engineering institute offering affordable B.Tech programs with emphasis on practical learning.\n\n" +
      "Strong branches: Mechanical, Electrical, Electronics, Civil Engineering.\n\n" +
      "Admissions: Through HSTES counseling based on JEE Main.\n\n" +
      "Academics: Offers B.Tech and Diploma programs.\n\n" +
      "Placements: Moderate placement performance.\n" +
      "Average package: ₹3–5 LPA.\n\n" +
      "B.Tech tuition fees: ~₹40,000–60,000 per year.\n" +
      "Hostel + mess fees: ~₹25,000–35,000 per year.\n\n" +
      "Hostel: Residential campus with hostels, mess, Wi-Fi, sports facilities, and medical unit."
  },
  {
    name: "J.C Bose University of Science & Technology, YMCA Faridabad",
    image: "/jc.webp",
    description:
      "YMCA Faridabad is a top state government engineering university in Haryana known for strong placements and alumni network.\n\n" +
      "Strong branches: Computer Science, IT, Electronics, Mechanical Engineering.\n\n" +
      "Admissions: Through HSTES counseling based on JEE Main rank.\n\n" +
      "Academics: Offers B.Tech, M.Tech, MBA, and PhD programs.\n\n" +
      "Placements: Very good placement performance.\n" +
      "Average package: ₹6–9 LPA.\n" +
      "Top recruiters: Amazon, Microsoft, Infosys, TCS, Samsung.\n\n" +
      "B.Tech tuition fees: ~₹70,000–90,000 per year.\n" +
      "Hostel + mess fees: ~₹35,000–45,000 per year.\n\n" +
      "Hostel: On-campus hostels with mess, Wi-Fi, sports complexes, library, and medical center."
  },
  {
    name: "Bhagat Phool Singh Mahila Vishwavidyalaya, Sonipat",
    image: "/bg.webp",
    description:
      "BPSMV Sonipat is a women’s university offering B.Tech programs with a safe campus environment and quality academics.\n\n" +
      "Strong branches: Computer Science, Electronics, Mechanical Engineering.\n\n" +
      "Admissions: Through HSTES counseling based on JEE Main.\n\n" +
      "Academics: Offers B.Tech, M.Tech, MSc, and PhD programs.\n\n" +
      "Placements: Improving placement trends.\n" +
      "Average package: ₹3.5–6 LPA.\n\n" +
      "B.Tech tuition fees: ~₹40,000–60,000 per year.\n" +
      "Hostel + mess fees: ~₹25,000–35,000 per year.\n\n" +
      "Hostel: Fully residential campus with hostels, mess, Wi-Fi, sports facilities, and campus security."
  },
];

const colleges: College[] = [
  {
    name: "Delhi Technological University (DTU)",
    image: "/dtu.webp",
    description:
      "Delhi Technological University (DTU) is one of India’s top government engineering universities with excellent placements and strong academic reputation.\n\n" +
      "Strong branches: Computer Science, IT, Electronics, Mechanical, Electrical Engineering.\n\n" +
      "Admissions: Through JAC Delhi counseling based on JEE Main rank.\n\n" +
      "Academics: Offers B.Tech, M.Tech, MBA, and PhD programs.\n\n" +
      "Placements: Outstanding placement record.\n" +
      "Average package: ₹10–15 LPA.\n" +
      "Highest packages: ₹50+ LPA.\n" +
      "Top recruiters: Google, Microsoft, Amazon, Goldman Sachs, Adobe.\n\n" +
      "B.Tech tuition fees: ~₹2.0–2.3 lakh per year.\n" +
      "Hostel + mess fees: ~₹45,000–60,000 per year.\n\n" +
      "Hostel: Limited on-campus hostels, Wi-Fi, sports facilities, library, and medical center."
  },
  {
    name: "Netaji Subhas University of Technology (NSUT)",
    image: "/nsut.webp",
    description:
      "NSUT is a premier government engineering university in Delhi known for modern infrastructure and top-tier academics.\n\n" +
      "Strong branches: Computer Science, IT, Electronics, Mechanical Engineering.\n\n" +
      "Admissions: Through JAC Delhi counseling based on JEE Main rank.\n\n" +
      "Academics: Offers B.Tech, M.Tech, MBA, and PhD programs.\n\n" +
      "Placements: Excellent placement performance.\n" +
      "Average package: ₹9–14 LPA.\n" +
      "Highest packages: ₹50+ LPA.\n" +
      "Top recruiters: Amazon, Microsoft, Google, Adobe, Deloitte.\n\n" +
      "B.Tech tuition fees: ~₹2.0–2.3 lakh per year.\n" +
      "Hostel + mess fees: ~₹45,000–60,000 per year.\n\n" +
      "Hostel: On-campus hostels with mess, Wi-Fi, sports complexes, library, and medical unit."
  },
  {
    name: "Jamia Millia Islamia (FET)",
    image: "/jamia.webp",
    description:
      "Jamia’s Faculty of Engineering & Technology (FET) is a central government institute offering affordable and quality B.Tech programs.\n\n" +
      "Strong branches: Computer Engineering, Electronics, Electrical, Mechanical Engineering.\n\n" +
      "Admissions: Through JEE Main (JoSAA/CSAB for central universities).\n\n" +
      "Academics: Offers B.Tech, M.Tech, MSc, and PhD programs.\n\n" +
      "Placements: Good placement record.\n" +
      "Average package: ₹6–10 LPA.\n\n" +
      "B.Tech tuition fees: ~₹16,000–20,000 per year.\n" +
      "Hostel + mess fees: ~₹25,000–35,000 per year.\n\n" +
      "Hostel: Limited hostels, mess, Wi-Fi, library, sports facilities, and medical center."
  },
  {
    name: "USICT, GGSIPU",
    image: "/uscit.avif",
    description:
      "University School of Information, Communication & Technology (USICT) is the flagship engineering institute of GGSIPU.\n\n" +
      "Strong branches: Computer Science, IT, ECE.\n\n" +
      "Admissions: Through JAC Delhi counseling based on JEE Main rank.\n\n" +
      "Academics: Offers B.Tech, M.Tech, MBA, and PhD programs.\n\n" +
      "Placements: Good placement support.\n" +
      "Average package: ₹6–9 LPA.\n\n" +
      "B.Tech tuition fees: ~₹1.5–2.0 lakh per year.\n" +
      "Hostel + mess fees: ~₹40,000–55,000 per year.\n\n" +
      "Hostel: On-campus hostels with mess, Wi-Fi, sports facilities, library, and campus security."
  },
  {
    name: "Ambedkar Institute of Advanced Communication Technologies & Research (AIACTR)",
    image: "/am.jpg",
    description:
      "Ambedkar Institute of Advanced Communication Technologies & Research (AIACTR) is a government engineering college affiliated with GGSIPU.\n\n" +
      "Strong branches: Electronics & Communication Engineering.\n\n" +
      "Admissions: Through JAC Delhi counseling based on JEE Main rank.\n\n" +
      "Academics: Offers B.Tech, M.Tech, and Diploma programs.\n\n" +
      "Placements: Moderate placement record.\n" +
      "Average package: ₹4–7 LPA.\n\n" +
      "B.Tech tuition fees: ~₹1.2–1.6 lakh per year.\n" +
      "Hostel + mess fees: ~₹35,000–50,000 per year.\n\n" +
      "Hostel: Limited hostel facilities, mess, Wi-Fi, library, and sports areas."
  },
  // {
  //   name: "MAIT",
  //   image: "/mait.jpg",
  //   description:
  //     "Maharaja Agrasen Institute of Technology (MAIT) is one of the top private colleges under GGSIPU.\n\n" +
  //     "Strong branches: Computer Science, IT, ECE, Mechanical Engineering.\n\n" +
  //     "Admissions: Through JAC Delhi counseling based on JEE Main rank.\n\n" +
  //     "Academics: Offers B.Tech and M.Tech programs.\n\n" +
  //     "Placements: Good placement performance.\n" +
  //     "Average package: ₹5–8 LPA.\n\n" +
  //     "B.Tech tuition fees: ~₹1.4–1.8 lakh per year.\n" +
  //     "Hostel + mess fees: ~₹90,000–1.3 lakh per year (private hostels nearby).\n\n" +
  //     "Hostel: Limited on-campus hostel, tie-ups with private hostels, Wi-Fi, library, and sports facilities."
  // },
];

const Rajasthan: College[] = [
  {
    name: "Government Engineering College, Ajmer",
    image: "/aj.jpg",
    description:
      "Government Engineering College (GEC), Ajmer is a reputed state government engineering college in Rajasthan known for affordable education.\n\n" +
      "Strong branches: Mechanical, Electrical, Civil, Electronics Engineering.\n\n" +
      "Admissions: Through REAP counseling based on JEE Main rank.\n\n" +
      "Academics: Offers B.Tech and M.Tech programs.\n\n" +
      "Placements: Moderate placement record.\n" +
      "Average package: ₹3–5 LPA.\n" +
      "Top recruiters: L&T, TCS, Wipro, local infrastructure firms.\n\n" +
      "B.Tech tuition fees: ~₹60,000–80,000 per year.\n" +
      "Hostel + mess fees: ~₹25,000–35,000 per year.\n\n" +
      "Hostel: On-campus hostels with mess, Wi-Fi, sports facilities, and medical unit."
  },
  {
    name: "Government Engineering College, Bikaner",
    image: "/bi.webp",
    description:
      "GEC Bikaner offers B.Tech programs with a focus on regional technical education and core engineering disciplines.\n\n" +
      "Strong branches: Mechanical, Electrical, Civil, Electronics Engineering.\n\n" +
      "Admissions: Through REAP counseling based on JEE Main rank.\n\n" +
      "Academics: Offers B.Tech programs.\n\n" +
      "Placements: Developing placement ecosystem.\n" +
      "Average package: ₹3–4.5 LPA.\n\n" +
      "B.Tech tuition fees: ~₹55,000–75,000 per year.\n" +
      "Hostel + mess fees: ~₹25,000–35,000 per year.\n\n" +
      "Hostel: Residential campus with hostels, mess, Wi-Fi, sports facilities, and campus security."
  },
  {
    name: "MBM Engineering College, Jodhpur",
    image: "/rj.jpeg",
    description:
      "MBM Engineering College, Jodhpur is one of Rajasthan’s oldest and most respected government engineering colleges.\n\n" +
      "Strong branches: Mechanical, Electrical, Civil, Electronics, Computer Engineering.\n\n" +
      "Admissions: Through REAP counseling based on JEE Main rank.\n\n" +
      "Academics: Offers B.Tech, M.Tech, and PhD programs.\n\n" +
      "Placements: Good placement performance.\n" +
      "Average package: ₹4–7 LPA.\n" +
      "Top recruiters: TCS, Infosys, L&T, Wipro, Reliance.\n\n" +
      "B.Tech tuition fees: ~₹60,000–90,000 per year.\n" +
      "Hostel + mess fees: ~₹30,000–40,000 per year.\n\n" +
      "Hostel: Large residential campus with hostels, mess, Wi-Fi, sports facilities, library, and medical center."
  },
  {
    name: "JECRC University, Jaipur",
    image: "/jec.jpg",
    description:
      "JECRC University offers modern B.Tech programs with strong industry exposure and good campus infrastructure.\n\n" +
      "Strong branches: Computer Science, IT, AI, ECE, Mechanical Engineering.\n\n" +
      "Admissions: Through JEE Main / REAP / University entrance.\n\n" +
      "Academics: Offers B.Tech, M.Tech, MBA, and PhD programs.\n\n" +
      "Placements: Good placement performance.\n" +
      "Average package: ₹4–7 LPA.\n" +
      "Top recruiters: TCS, Cognizant, Infosys, Wipro, Capgemini.\n\n" +
      "B.Tech tuition fees: ~₹1.6–2.4 lakh per year.\n" +
      "Hostel + mess fees: ~₹90,000–1.2 lakh per year.\n\n" +
      "Hostel: On-campus hostels with mess, Wi-Fi, sports facilities, gym, and medical unit."
  },
  {
    name: "Poornima College of Engineering, Jaipur",
    image: "/poo.jpg",
    description:
      "Poornima College of Engineering is known for industry-linked curriculum and decent placement performance.\n\n" +
      "Strong branches: Computer Science, IT, ECE, Mechanical Engineering.\n\n" +
      "Admissions: Through REAP counseling based on JEE Main rank.\n\n" +
      "Academics: Offers B.Tech and M.Tech programs.\n\n" +
      "Placements: Good placement trends.\n" +
      "Average package: ₹4–6 LPA.\n\n" +
      "B.Tech tuition fees: ~₹1.2–1.8 lakh per year.\n" +
      "Hostel + mess fees: ~₹80,000–1.1 lakh per year.\n\n" +
      "Hostel: Residential campus with hostels, mess, Wi-Fi, sports courts, and campus security."
  },
  {
    name: "Manipal University Jaipur",
    image: "/mp.jpg",
    description:
      "Manipal University Jaipur (MUJ) offers global-standard engineering education with modern campus facilities.\n\n" +
      "Strong branches: Computer Science, IT, AI, ECE, Mechanical Engineering.\n\n" +
      "Admissions: Through MET / JEE Main.\n\n" +
      "Academics: Offers B.Tech, M.Tech, MBA, and PhD programs.\n\n" +
      "Placements: Very good placement performance.\n" +
      "Average package: ₹6–9 LPA.\n" +
      "Top recruiters: Microsoft, Amazon, Deloitte, Infosys, TCS.\n\n" +
      "B.Tech tuition fees: ~₹3.0–4.5 lakh per year.\n" +
      "Hostel + mess fees: ~₹1.0–1.3 lakh per year.\n\n" +
      "Hostel: Fully residential campus with modern hostels, Wi-Fi, sports complexes, gym, hospital, and library."
  },
];
const Uttarakhand: College[] = [
  {
    name: "Graphic Era University, Dehradun",
    image: "/gr.jpeg",
    description:
      "Graphic Era University is a leading private engineering university in Uttarakhand known for strong placements and modern infrastructure.\n\n" +
      "Strong branches: Computer Science, IT, AI, Data Science, ECE, Mechanical Engineering.\n\n" +
      "Admissions: Through JEE Main / University entrance / Direct admission.\n\n" +
      "Academics: Offers B.Tech, M.Tech, MBA, MSc, and PhD programs.\n\n" +
      "Placements: Very good placement performance.\n" +
      "Average package: ₹5–8 LPA.\n" +
      "Highest packages: ₹40+ LPA.\n" +
      "Top recruiters: Amazon, Microsoft, Deloitte, Infosys, TCS.\n\n" +
      "B.Tech tuition fees: ~₹2.2–3.5 lakh per year.\n" +
      "Hostel + mess fees: ~₹1.0–1.3 lakh per year.\n\n" +
      "Hostel: Fully residential campus with modern hostels, Wi-Fi, sports facilities, gym, library, and medical center."
  },
  {
    name: "UPES, Dehradun",
    image: "/upes.webp",
    description:
      "UPES Dehradun offers specialized B.Tech programs with strong industry linkage, especially in energy, petroleum, and data science.\n\n" +
      "Strong branches: Computer Science, AI, Data Science, Petroleum Engineering, Mechanical Engineering.\n\n" +
      "Admissions: Through UPESEAT / JEE Main / Board merit.\n\n" +
      "Academics: Offers B.Tech, M.Tech, MBA, MSc, and PhD programs.\n\n" +
      "Placements: Good placement performance.\n" +
      "Average package: ₹5–7 LPA.\n" +
      "Top recruiters: Schlumberger, ONGC, Infosys, TCS, Accenture.\n\n" +
      "B.Tech tuition fees: ~₹3.0–4.5 lakh per year.\n" +
      "Hostel + mess fees: ~₹1.1–1.4 lakh per year.\n\n" +
      "Hostel: Fully residential campus with modern hostels, Wi-Fi, sports complexes, library, and medical unit."
  },
  {
    name: "DIT University, Dehradun",
    image: "/dit.webp",
    description:
      "DIT University provides industry-focused engineering education with emphasis on skill development and innovation.\n\n" +
      "Strong branches: Computer Science, IT, ECE, Mechanical Engineering.\n\n" +
      "Admissions: Through JEE Main / University entrance / Direct admission.\n\n" +
      "Academics: Offers B.Tech, M.Tech, MBA, and PhD programs.\n\n" +
      "Placements: Good placement trends.\n" +
      "Average package: ₹4–6 LPA.\n\n" +
      "B.Tech tuition fees: ~₹1.8–2.8 lakh per year.\n" +
      "Hostel + mess fees: ~₹90,000–1.2 lakh per year.\n\n" +
      "Hostel: On-campus hostels with mess, Wi-Fi, sports facilities, gym, and medical unit."
  },
  {
    name: "GB Pant Institute of Engineering & Technology, Pauri",
    image: "/gv.jpg",
    description:
      "GB Pant Institute of Engineering & Technology (GBPIET) is a government engineering college in Uttarakhand known for affordable education.\n\n" +
      "Strong branches: Mechanical, Electrical, Electronics, Computer Engineering.\n\n" +
      "Admissions: Through UKSEE counseling based on JEE Main rank.\n\n" +
      "Academics: Offers B.Tech and M.Tech programs.\n\n" +
      "Placements: Moderate placement performance.\n" +
      "Average package: ₹3–5 LPA.\n\n" +
      "B.Tech tuition fees: ~₹60,000–80,000 per year.\n" +
      "Hostel + mess fees: ~₹25,000–35,000 per year.\n\n" +
      "Hostel: Residential campus with hostels, mess, Wi-Fi, sports facilities, and medical unit."
  },
  {
    name: "Tula’s Institute, Dehradun",
    image: "/tula.jpg",
    description:
      "Tula’s Institute offers B.Tech programs with emphasis on skill-based training and industry readiness.\n\n" +
      "Strong branches: Computer Science, IT, ECE, Mechanical Engineering.\n\n" +
      "Admissions: Through JEE Main / University counseling / Direct admission.\n\n" +
      "Academics: Offers B.Tech and M.Tech programs.\n\n" +
      "Placements: Growing placement ecosystem.\n" +
      "Average package: ₹3–5 LPA.\n\n" +
      "B.Tech tuition fees: ~₹1.4–2.2 lakh per year.\n" +
      "Hostel + mess fees: ~₹80,000–1.1 lakh per year.\n\n" +
      "Hostel: On-campus hostels with mess, Wi-Fi, sports courts, library, and campus security."
  },
  {
    name: "ICFAI University, Dehradun",
    image: "/icfai.jpg",
    description:
      "ICFAI University Dehradun offers private engineering education with focus on management-integrated technical programs.\n\n" +
      "Strong branches: Computer Science, IT, ECE.\n\n" +
      "Admissions: Through University entrance / Direct admission.\n\n" +
      "Academics: Offers B.Tech, M.Tech, MBA, and PhD programs.\n\n" +
      "Placements: Moderate placement performance.\n" +
      "Average package: ₹3–5 LPA.\n\n" +
      "B.Tech tuition fees: ~₹1.6–2.5 lakh per year.\n" +
      "Hostel + mess fees: ~₹90,000–1.2 lakh per year.\n\n" +
      "Hostel: Residential campus with hostels, mess, Wi-Fi, sports facilities, and campus security."
  },
];


/* ---------------- ANIMATIONS ---------------- */

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* ---------------- COMPONENT ---------------- */

const StateEducationPage = () => {
  const [selectedCollege, setSelectedCollege] = useState(null);

  const allSections = [
    { title: "Haryana", data: universities },
    { title: "Delhi", data: colleges },
    { title: "Rajasthan", data: Rajasthan },
    { title: "Uttarakhand", data: Uttarakhand },
  ];

  return (
    <section className="min-h-screen bg-black text-white py-14 px-4 md:px-10">
      {/* MAIN HEADING */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-500 mb-14 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        State Universities & Colleges
      </motion.h1>

      {allSections.map((section, sIdx) => (
        <div key={sIdx} className="mb-20">
          <h2 className="text-2xl font-bold text-orange-400 mb-8 text-center">
            Top B.Tech Colleges & Universities of {section.title}
          </h2>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {section.data.map((item, idx) => (
              <motion.div
                key={idx}
                variants={card}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedCollege(item)}
                className="cursor-pointer bg-[#111] rounded-2xl overflow-hidden shadow-lg 
                           border border-orange-500/30 hover:border-orange-500 transition-all"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg md:text-xl font-semibold text-orange-400">
                    {item.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}

      {/* ---------- MODAL ---------- */}
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
                State / Govt / Private • B.Tech Admissions
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default StateEducationPage;
