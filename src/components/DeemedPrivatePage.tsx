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
    "VIT Vellore is a large private engineering university known for strong academic systems, disciplined evaluation, and very high placement volume, especially in IT services.\n\n" +
    "Branches: Computer Science & Engineering, Information Technology, Artificial Intelligence, Data Science, Electronics & Communication Engineering, Mechanical Engineering.\n\n" +
    "Admission (2025): Through VITEEE entrance examination (rank-based category system).\n\n" +
    "B.Tech Fees (2025):\n" +
    "• Category 1 (Top ranks): ~₹2.0 lakh per year\n" +
    "• Category 2–3: ~₹3.0–3.5 lakh per year\n" +
    "• Category 4–5: ~₹4.0–4.5 lakh per year\n\n" +
    "Hostel + Mess Fees: ~₹1.0–1.3 lakh per year (block & room dependent).\n\n" +
    "Placements (2024–25):\n" +
    "• Overall average package: ~₹4.8–5.8 LPA\n" +
    "• CSE / IT average: ~₹6.0–7.0 LPA\n" +
    "• Median package: ~₹4.5–5.0 LPA\n" +
    "• Highest package: ~₹55–60 LPA (very few international/off-campus offers)\n\n" +
    "Top Recruiters: TCS, Infosys, Accenture, Cognizant, Amazon (limited roles), Microsoft (very limited).\n\n" +
    "Campus Facilities: Very large fully residential campus with hostels, Wi-Fi, labs, gyms, sports complexes, central library, and medical center.",
},


{
  name: "Amity University, Noida",
  image: "/amity.webp",
  description:
    "Amity University, Noida is a large private university offering B.Tech programs with wide branch availability and strong exposure to mass-recruiter hiring.\n\n" +
    "Branches: Computer Science & Engineering, Artificial Intelligence, Information Technology, Electronics & Communication Engineering, Mechanical Engineering.\n\n" +
    "Admission (2025): Through Amity JEE / CUET / Board merit-based direct admission.\n\n" +
    "B.Tech Fees (2025):\n" +
    "• CSE / AI / IT: ~₹3.0–3.5 lakh per year\n" +
    "• Core branches (ECE / Mechanical): ~₹2.5–3.0 lakh per year\n\n" +
    "Hostel + Mess Fees: ~₹1.2–1.5 lakh per year.\n\n" +
    "Placements (2024–25):\n" +
    "• Overall average package: ~₹3.8–4.5 LPA\n" +
    "• CSE / IT average: ~₹4.8–5.8 LPA\n" +
    "• Median package: ~₹4.0 LPA\n" +
    "• Highest package: ~₹25–30 LPA (very few, mostly off-campus / niche roles)\n\n" +
    "Top Recruiters: TCS, Cognizant, Accenture, Infosys, Wipro (majority mass hiring).\n\n" +
    "Campus Facilities: Very large urban campus with hostels, Wi-Fi, labs, sports facilities, gyms, central library, and medical center.",
},


{
  name: "SRM Institute of Science & Technology",
  image: "/srm.jpg",
  description:
    "SRM Institute of Science & Technology (SRMIST), Kattankulathur is a large private university offering B.Tech programs with strong intake capacity and mass-recruiter-driven placements.\n\n" +
    "Branches: Computer Science & Engineering, Artificial Intelligence, Information Technology, Electronics & Communication Engineering, Biotechnology, Mechanical Engineering.\n\n" +
    "Admission (2025): Through SRMJEEE entrance examination.\n\n" +
    "B.Tech Fees (2025):\n" +
    "• CSE / AI / IT (top slabs): ~₹3.5–4.0 lakh per year\n" +
    "• Core branches (ECE / Mech / BioTech): ~₹2.5–3.2 lakh per year\n\n" +
    "Hostel + Mess Fees: ~₹1.1–1.4 lakh per year (block & room dependent).\n\n" +
    "Placements (2024–25):\n" +
    "• Overall average package: ~₹4.5–5.2 LPA\n" +
    "• CSE / IT average: ~₹5.5–6.5 LPA\n" +
    "• Median package: ~₹4.5 LPA\n" +
    "• Highest package: ~₹45–50 LPA (very rare, mostly off-campus/international)\n\n" +
    "Top Recruiters: TCS, Cognizant, Accenture, Infosys, Capgemini, Amazon (limited roles).\n\n" +
    "Campus Facilities: Very large residential campus with hostels, Wi-Fi, labs, sports complexes, central library, and multi-specialty hospital.",
},

{
  name: "Manipal Academy of Higher Education",
  image: "/manipal.jpg",
  description:
    "Manipal Academy of Higher Education (MAHE), Manipal is a reputed private university known for strong academics, global exposure, and a well-established alumni network.\n\n" +
    "Branches: Computer Science & Engineering, Information Technology, Electronics & Communication Engineering, Mechanical Engineering, Electrical Engineering, Biomedical Engineering.\n\n" +
    "Admission (2025): Through MET (Manipal Entrance Test).\n\n" +
    "B.Tech Fees (2025):\n" +
    "• CSE / IT / AI-related branches: ~₹4.0–4.5 lakh per year\n" +
    "• Core branches (ECE / Mech / EE / Biomedical): ~₹3.0–3.6 lakh per year\n\n" +
    "Hostel + Mess Fees: ~₹1.0–1.3 lakh per year (room & block dependent).\n\n" +
    "Placements (2024–25):\n" +
    "• Overall average package: ~₹5.5–6.5 LPA\n" +
    "• CSE / IT average: ~₹7–8 LPA\n" +
    "• Median package: ~₹5.5 LPA\n" +
    "• Highest package: ~₹45–50 LPA (very limited, mostly off-campus / international)\n\n" +
    "Top Recruiters: Microsoft, Amazon, Goldman Sachs, Deloitte, Nvidia, Qualcomm.\n\n" +
    "Campus Facilities: Fully residential campus with modern hostels, Wi-Fi, advanced labs, sports facilities, gyms, hospital, and central library.",
},

{
  name: "Lovely Professional University",
  image: "/lpu.jpg",
  description:
    "Lovely Professional University (LPU), Phagwara is a large private university offering B.Tech programs with wide branch availability and strong exposure to mass-recruiter hiring.\n\n" +
    "Branches: Computer Science & Engineering, Information Technology, Artificial Intelligence, Electronics & Communication Engineering, Mechanical Engineering.\n\n" +
    "Admission (2025): Through LPUNEST / CUET / Board merit-based direct admission.\n\n" +
    "B.Tech Fees (2025):\n" +
    "• CSE / AI / IT: ~₹2.5–3.0 lakh per year\n" +
    "• Core branches (ECE / Mechanical): ~₹1.8–2.3 lakh per year\n\n" +
    "Hostel + Mess Fees: ~₹90,000–1.2 lakh per year (room & block dependent).\n\n" +
    "Placements (2024–25):\n" +
    "• Overall average package: ~₹3.5–4.2 LPA\n" +
    "• CSE / IT average: ~₹4.5–5.2 LPA\n" +
    "• Median package: ~₹3.6 LPA\n" +
    "• Highest package: ~₹28–30 LPA (very few off-campus / international offers)\n\n" +
    "Top Recruiters: TCS, Cognizant, Capgemini, Infosys, Accenture (mostly mass hiring).\n\n" +
    "Campus Facilities: Very large residential campus with hostels, Wi-Fi, labs, sports complexes, gyms, shopping areas, and medical facilities.",
},


{
  name: "Shiv Nadar University",
  image: "/shiv.jpg",
  description:
    "Shiv Nadar University (SNU), Greater Noida is a research-focused private university emphasizing academic rigor, interdisciplinary learning, and higher studies orientation.\n\n" +
    "Branches: Computer Science & Engineering, Electronics & Communication Engineering, Mechanical Engineering, Artificial Intelligence, Data Science.\n\n" +
    "Admission (2025): Through SNUCEE / CUET / Board merit-based selection.\n\n" +
    "B.Tech Fees (2025): ~₹3.8–4.5 lakh per year (branch-dependent).\n\n" +
    "Hostel + Mess Fees: ~₹1.2–1.5 lakh per year.\n\n" +
    "Placements (2024–25):\n" +
    "• Overall average package: ~₹4.5–5.5 LPA\n" +
    "• CSE / AI average: ~₹5.5–6.5 LPA\n" +
    "• Median package: ~₹4.5 LPA\n" +
    "• Highest package: ~₹30–35 LPA (very few international / niche offers)\n\n" +
    "Campus Facilities: Fully residential campus with modern hostels, Wi-Fi, central library, research labs, sports facilities, and medical unit.",
},


{
  name: "Bharati Vidyapeeth",
  image: "/bhjar.webp",
  description:
    "Bharati Vidyapeeth (Deemed to be University) offers B.Tech programs with a traditional academic structure and moderate industry exposure.\n\n" +
    "Branches: Computer Science & Engineering, Information Technology, Electronics & Communication Engineering, Mechanical Engineering.\n\n" +
    "Admission (2025): Through BVP CET (Bharati Vidyapeeth Common Entrance Test).\n\n" +
    "B.Tech Fees (2025):\n" +
    "• CSE / IT: ~₹2.2–2.5 lakh per year\n" +
    "• Core branches (ECE / Mechanical): ~₹1.8–2.1 lakh per year\n\n" +
    "Hostel + Mess Fees: ~₹70,000–1.0 lakh per year (campus & room dependent).\n\n" +
    "Placements (2024–25):\n" +
    "• Overall average package: ~₹3.5–4.5 LPA\n" +
    "• CSE / IT average: ~₹4.5–5.5 LPA\n" +
    "• Highest package: ~₹14–16 LPA (very limited cases)\n\n" +
    "Campus Facilities: Residential campuses with hostels, basic sports facilities, libraries, labs, and medical support.",
},


{
  name: "Amrita Vishwa Vidyapeetham",
  image: "/amrita.jpg",
  description:
    "Amrita Vishwa Vidyapeetham is a deemed-to-be university known for disciplined academics, research focus, and stable core engineering outcomes.\n\n" +
    "Branches: Computer Science & Engineering, Artificial Intelligence, Electronics & Communication Engineering, Mechanical Engineering, Electrical Engineering.\n\n" +
    "Admission (2025): Through AEEE (Amrita Entrance Examination – Engineering) / JEE Main (limited seats).\n\n" +
    "B.Tech Fees (2025):\n" +
    "• CSE / AI (Top campuses): ~₹3.5–4.5 lakh per year\n" +
    "• Core branches / other campuses: ~₹2.0–3.0 lakh per year\n\n" +
    "Hostel + Mess Fees: ~₹90,000–1.2 lakh per year (campus & room-type dependent).\n\n" +
    "Placements (2024–25):\n" +
    "• Overall average package: ~₹4.5–6 LPA\n" +
    "• CSE top-campus average: ~₹6–7 LPA\n" +
    "• Highest domestic package: ~₹40 LPA (very few students)\n\n" +
    "Campus Facilities: Fully residential campuses with hostels, Wi-Fi, labs, libraries, sports facilities, and multi-specialty hospitals.",
},

{
  name: "Thapar Institute of Engineering & Technology",
  image: "/thapar.jpg",
  description:
    "Thapar Institute of Engineering & Technology (TIET), Patiala is a top-tier private engineering institution known for strong academics, competitive peer quality, and consistent core & tech placements.\n\n" +
    "Branches: Computer Science & Engineering, Electronics & Communication Engineering, Mechanical Engineering, Electrical Engineering, Civil Engineering.\n\n" +
    "Admission : Through JEE Main–based counselling (rank-dependent cutoffs).\n\n" +
    "B.Tech Fees : ~₹3.8–4.5 lakh per year (branch-dependent).\n\n" +
    "Hostel + Mess Fees: ~₹1.0–1.3 lakh per year.\n\n" +
    "Placements (2024–25):\n" +
    "• Overall average package: ~₹6.5–7.5 LPA\n" +
    "• CSE average: ~₹9–10 LPA\n" +
    "• Median package: ~₹6.0–6.5 LPA\n" +
    "• Highest package: ~₹45–50 LPA (very few, mostly international/off-campus)\n\n" +
    "Campus Facilities: Fully residential campus with hostels, Wi-Fi, sports complexes, central library, advanced labs, and on-campus medical facilities.",
},

{
  name: "Kalinga University",
  image: "/kalinga.jpg",
  description:
    "Kalinga University, Raipur is a private university offering B.Tech programs with a focus on basic engineering education and regional placement opportunities.\n\n" +
    "Branches: Computer Science & Engineering, Information Technology, Electronics & Communication Engineering.\n\n" +
    "Admission (2025): Through CUET / University-level entrance / Direct admission.\n\n" +
    "B.Tech Fees (2025): ~₹1.6–2.3 lakh per year (branch-dependent).\n\n" +
    "Hostel + Mess Fees: ~₹75,000–1.0 lakh per year.\n\n" +
    "Placements (2024–25):\n" +
    "• Overall average package: ~₹2.8–3.5 LPA\n" +
    "• CSE / IT average: ~₹3.5–4.2 LPA\n" +
    "• Median package: ~₹3.0 LPA\n" +
    "• Highest package: ~₹8–10 LPA (very few cases)\n\n" +
    "Campus Facilities: Residential campus with hostels, Wi-Fi, basic labs, library, sports facilities, and campus security.",
},


];
const Ipu: College[] = [
{
  name: "Maharaja Agrasen Institute of Technology (MAIT)",
  image: "https://cse.mait.ac.in/images/mait-1.jpg",
  description:
    "Maharaja Agrasen Institute of Technology (MAIT), Rohini is one of the strongest private engineering colleges under GGSIPU, known for solid academics, coding culture, and consistent placements.\n\n" +
    "Branches: Computer Science & Engineering, Information Technology, Artificial Intelligence & Machine Learning, Electronics & Communication Engineering.\n\n" +
    "Admission (2025): Through JEE Main rank via GGSIPU (IPU) Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹1.7–1.9 lakh per year.\n\n" +
    "Placements (2024–25):\n" +
    "• Overall average package: ~₹4.8–5.5 LPA\n" +
    "• CSE / IT average: ~₹6.0–6.8 LPA\n" +
    "• Median package: ~₹5.0 LPA\n" +
    "• Highest package: ~₹40–45 LPA (very few off-campus / PPO offers)\n\n" +
    "Top Recruiters: TCS, Infosys, Accenture, Cognizant, Capgemini, Amazon (limited), Microsoft (very limited).\n\n" +
    "Campus Facilities: Urban campus with modern labs, library, sports facilities, and active technical & cultural societies.",
},

{
  name: "Maharaja Surajmal Institute of Technology (MSIT)",
  image: "https://www.msit.in/static/img/mainPage/slide_9.jpg",
  description:
    "Maharaja Surajmal Institute of Technology (MSIT), Janakpuri is a well-established private engineering college under GGSIPU, known for academic discipline, stable results, and consistent placements within the IPU ecosystem.\n\n" +
    "Branches: Computer Science & Engineering, Information Technology, Electronics & Communication Engineering.\n\n" +
    "Admission (2025): Through JEE Main rank via GGSIPU (IPU) Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹1.7–1.9 lakh per year.\n\n" +
    "Placements (2024–25):\n" +
    "• Overall average package: ~₹4.5–5.2 LPA\n" +
    "• CSE / IT average: ~₹5.5–6.3 LPA\n" +
    "• Median package: ~₹4.8 LPA\n" +
    "• Highest package: ~₹28–30 LPA (very few off-campus / PPO cases)\n\n" +
    "Top Recruiters: TCS, Infosys, Accenture, Cognizant, Capgemini, Wipro (mostly mass & mid-tier roles).\n\n" +
    "Campus Facilities: Urban campus with modern labs, library, sports facilities, and active technical & cultural clubs.",
},


{
  name: "Bhagwan Parshuram Institute of Technology (BPIT)",
  image: "https://www.static-contents.youth4work.com/university/Documents/Colleges/CollegeImages/c20a978a-4e71-4fa6-9767-d3dc018cef32.jpg",
  description:
    "Bhagwan Parshuram Institute of Technology (BPIT), Rohini is a well-known private engineering college affiliated with GGSIPU, offering quality education with steadily improving placements.\n\n" +
    "Branches: Computer Science & Engineering, Information Technology, Electronics & Communication Engineering.\n\n" +
    "Admission (2025): Through JEE Main rank via IPU Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹1.6–1.8 lakh per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹4–6 LPA.\n" +
    "Highest package: ₹20+ LPA.\n\n" +
    "Top Recruiters: Infosys, TCS, Accenture, Capgemini, HCL.\n\n" +
    "Campus Facilities: Compact urban campus with modern labs, library, sports activities, and active student societies.",
},

// {
//   name: "Bhagwan Parshuram Institute of Technology (BPIT)",
//   image: "https://www.static-contents.youth4work.com/university/Documents/Colleges/CollegeImages/c20a978a-4e71-4fa6-9767-d3dc018cef32.jpg",
//   description:
//     "Bhagwan Parshuram Institute of Technology (BPIT), Rohini is a private engineering college under GGSIPU offering B.Tech programs with a focus on core academics and gradual improvement in placements.\n\n" +
//     "Branches: Computer Science & Engineering, Information Technology, Electronics & Communication Engineering.\n\n" +
//     "Admission (2025): Through JEE Main rank via GGSIPU (IPU) Counselling.\n\n" +
//     "B.Tech Fees (2025): ~₹1.6–1.8 lakh per year.\n\n" +
//     "Placements (2024–25):\n" +
//     "• Overall average package: ~₹3.8–4.5 LPA\n" +
//     "• CSE / IT average: ~₹4.5–5.2 LPA\n" +
//     "• Median package: ~₹4.0 LPA\n" +
//     "• Highest package: ~₹18–20 LPA (very few off-campus / PPO cases)\n\n" +
//     "Top Recruiters: TCS, Infosys, Accenture, Capgemini, HCL (primarily mass & mid-tier recruiters).\n\n" +
//     "Campus Facilities: Compact urban campus with labs, library, basic sports facilities, and active student societies.",
// },


{
  name: "Guru Tegh Bahadur Institute of Technology (GTBIT)",
  image: "https://edufever.in/colleges/wp-content/uploads/2021/07/Guru-Tegh-Bahadur-Institute-of-Technology-Delhi.jpg",
  description:
    "Guru Tegh Bahadur Institute of Technology (GTBIT), Rajouri Garden is a reputed private engineering college affiliated with GGSIPU, known for its disciplined academic environment and Sikh minority quota.\n\n" +
    "Branches: Computer Science & Engineering, Information Technology, Electronics & Communication Engineering, Mechanical Engineering.\n\n" +
    "Admission (2025): Through JEE Main rank via IPU Counselling (Sikh minority quota available).\n\n" +
    "B.Tech Fees (2025): ~₹1.6–1.8 lakh per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹4–6 LPA.\n" +
    "Highest package: ₹18+ LPA.\n\n" +
    "Top Recruiters: Infosys, TCS, Wipro, Accenture, Capgemini.\n\n" +
    "Campus Facilities: Urban campus with labs, library, sports facilities, and active student societies.",
},
{
  name: "Dr. Akhilesh Das Gupta Institute of Technology & Management (ADGITM)",
  image: "https://thumbs.dreamstime.com/z/beautiful-campus-view-adgitm-formerly-known-as-northern-india-engineering-college-delhi-june-private-afflicted-to-186089883.jpg",
  description:
    "Dr. Akhilesh Das Gupta Institute of Technology & Management (ADGITM), New Delhi (formerly NIEC) is a private engineering college affiliated with GGSIPU, known for its large intake and diverse student community.\n\n" +
    "Branches: Computer Science & Engineering, Information Technology, Artificial Intelligence & Machine Learning, Electronics & Communication Engineering.\n\n" +
    "Admission (2025): Through JEE Main rank via IPU Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹1.5–1.7 lakh per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹3.5–5 LPA.\n" +
    "Highest package: ₹15+ LPA.\n\n" +
    "Top Recruiters: TCS, Infosys, Wipro, Accenture, Cognizant.\n\n" +
    "Campus Facilities: Urban campus at Shastri Park with modern infrastructure, labs, and active cultural & technical societies.",
},

{
  name: "Bharati Vidyapeeth’s College of Engineering (BVCOE)",
  image: "https://tse2.mm.bing.net/th/id/OIP.5S0HYjOYAB0u7C1YVPSRwAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
  description:
    "Bharati Vidyapeeth’s College of Engineering (BVCOE), Paschim Vihar is one of the older private engineering colleges affiliated with GGSIPU, known for academic stability and consistent results.\n\n" +
    "Branches: Computer Science & Engineering, Information Technology, Electronics & Communication Engineering, Instrumentation & Control Engineering.\n\n" +
    "Admission (2025): Through JEE Main rank via IPU Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹1.6–1.8 lakh per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹4–6 LPA.\n" +
    "Highest package: ₹18+ LPA.\n\n" +
    "Top Recruiters: Infosys, TCS, Accenture, Capgemini, L&T.\n\n" +
    "Campus Facilities: Urban campus with labs, library, sports facilities, and active student clubs.",
},

{
  name: "HMR Institute of Technology & Management (HMRITM)",
  image: "https://www.joonsquare.com/usermanage/image/business/hmr-institute-of-technology-and-management-north-west-delhi-1-2513/hmr-institute-of-technology-and-management-north-west-delhi-hmritm03.jpg",
  description:
    "HMR Institute of Technology & Management (HMRITM), North West Delhi is a private engineering college under GGSIPU offering B.Tech programs with relatively low fees and a focus on entry-level placements.\n\n" +
    "Branches: Computer Science & Engineering, Information Technology, Electronics & Communication Engineering.\n\n" +
    "Admission (2025): Through JEE Main rank via GGSIPU (IPU) Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹1.4–1.6 lakh per year.\n\n" +
    "Placements (2024–25):\n" +
    "• Overall average package: ~₹2.8–3.4 LPA\n" +
    "• CSE / IT average: ~₹3.5–4.2 LPA\n" +
    "• Median package: ~₹3.0 LPA\n" +
    "• Highest package: ~₹9–10 LPA (very few off-campus / PPO cases)\n\n" +
    "Top Recruiters: TCS, Infosys, Wipro, HCL (mostly mass-hiring service roles).\n\n" +
    "Campus Facilities: Suburban campus near Narela with basic labs, library, limited sports facilities, and essential student amenities.",
},

{
  name: "Northern India Engineering College (NIEC)",
  image: "https://tse1.mm.bing.net/th/id/OIP.UWGZRoGaYcIDVt804q8pvwHaB8?w=1140&h=300&rs=1&pid=ImgDetMain&o=7&rm=3",
  description:
    "Northern India Engineering College (NIEC), New Delhi is the former name of Dr. Akhilesh Das Gupta Institute of Technology & Management (ADGITM). The institute continues under the ADGITM name and follows the same academic structure and placement outcomes.\n\n" +
    "Branches: Computer Science & Engineering, Information Technology, Electronics & Communication Engineering.\n\n" +
    "Admission (2025): Through JEE Main rank via GGSIPU (IPU) Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹1.5–1.7 lakh per year.\n\n" +
    "Placements (2024–25):\n" +
    "• Overall average package: ~₹3.2–3.8 LPA\n" +
    "• CSE / IT average: ~₹4.0–4.8 LPA\n" +
    "• Median package: ~₹3.5 LPA\n" +
    "• Highest package: ~₹12–15 LPA (very few off-campus / PPO cases)\n\n" +
    "Campus Facilities: Urban campus at Shastri Park with labs, library, Wi-Fi, and active technical & cultural student activities.",
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
    <>

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


     <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-500 mb-14 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Top  colleges of  Guru Gobind Singh Indraprastha University (GGSIPU) 
      </motion.h1>


{/* ANother Ipu card crid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {Ipu.map((college, idx) => (
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
         
        </>
  );
};

export default DeemedPrivatePage;
