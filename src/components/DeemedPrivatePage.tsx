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
const Ipu: College[] = [
{
  name: "Maharaja Agrasen Institute of Technology (MAIT)",
  image: "https://cse.mait.ac.in/images/mait-1.jpg",
  description:
    "Maharaja Agrasen Institute of Technology (MAIT) is one of the most popular private engineering colleges under IPU, known for strong placements and a vibrant coding culture.\n\n" +
    "Strong branches: Computer Science Engineering (CSE), Information Technology (IT), Artificial Intelligence & Machine Learning (AI-ML), Electronics & Communication Engineering (ECE).\n\n" +
    "Admissions: Through JEE Main rank via IPU counselling.\n\n" +
    "Academics: Industry-oriented curriculum, active coding clubs, hackathons, and internship-driven learning.\n\n" +
    "Placements: Consistently strong placement performance.\n" +
    "Average package: ₹6–8 LPA (CSE/IT).\n" +
    "Highest packages: ₹45+ LPA.\n" +
    "Top recruiters: Amazon, Microsoft, Deloitte, Infosys, Accenture, TCS, Capgemini.\n\n" +
    "B.Tech tuition fees: ~₹1.7–1.9 lakh per year.\n\n" +
    "Campus Life: Well-maintained campus in Rohini with modern labs, libraries, sports facilities, and active student societies."
},
{
  name: "Maharaja Surajmal Institute of Technology (MSIT)",
  image: "https://www.msit.in/static/img/mainPage/slide_9.jpg",
  description:
    "Maharaja Surajmal Institute of Technology (MSIT) is a reputed IPU-affiliated engineering college known for academic discipline and consistent placements.\n\n" +
    "Strong branches: Computer Science Engineering (CSE), Information Technology (IT), Electronics & Communication Engineering (ECE).\n\n" +
    "Admissions: Through JEE Main rank via IPU counselling.\n\n" +
    "Academics: Balanced focus on theory, practical learning, and industry exposure with experienced faculty.\n\n" +
    "Placements: Reliable placement record every year.\n" +
    "Average package: ₹5–7 LPA.\n" +
    "Highest packages: ₹30+ LPA.\n" +
    "Top recruiters: Infosys, TCS, Wipro, Accenture, Cognizant, Deloitte.\n\n" +
    "B.Tech tuition fees: ~₹1.7–1.9 lakh per year.\n\n" +
    "Campus Life: Located in Janakpuri with good infrastructure, labs, sports facilities, and technical clubs."
},
{
  name: "Bhagwan Parshuram Institute of Technology (BPIT) ",
  image: "https://www.static-contents.youth4work.com/university/Documents/Colleges/CollegeImages/c20a978a-4e71-4fa6-9767-d3dc018cef32.jpg",
  description:
    "Bhagwan Parshuram Institute of Technology (BPIT) is a well-known IPU engineering college offering quality education with growing placement opportunities.\n\n" +
    "Strong branches: Computer Science Engineering (CSE), Information Technology (IT), Electronics & Communication Engineering (ECE).\n\n" +
    "Admissions: Through JEE Main rank via IPU counselling.\n\n" +
    "Academics: Focus on core engineering fundamentals, skill development, and industry-oriented training.\n\n" +
    "Placements: Improving placement trends year after year.\n" +
    "Average package: ₹4–6 LPA.\n" +
    "Highest packages: ₹20+ LPA.\n" +
    "Top recruiters: Infosys, TCS, Accenture, Capgemini, HCL.\n\n" +
    "B.Tech tuition fees: ~₹1.6–1.8 lakh per year.\n\n" +
    "Campus Life: Compact campus in Rohini with modern labs, library, sports activities, and student societies."
},
{
  name: "Ambedkar Institute of Advanced Communication Technologies & Research (AIACTR)",
  image: "https://tse4.mm.bing.net/th/id/OIP.EMn9RSCNlF6qMKX-bYDnyAHaDh?w=600&h=285&rs=1&pid=ImgDetMain&o=7&rm=3",
  description:
    "Ambedkar Institute of Advanced Communication Technologies & Research (AIACTR) is a government engineering institute under GNCT Delhi and affiliated with IPU.\n\n" +
    "Strong branches: Electronics & Communication Engineering (ECE), Information Technology (IT).\n\n" +
    "Admissions: Through JEE Main rank via IPU counselling.\n\n" +
    "Academics: Strong emphasis on electronics, communication systems, and core engineering concepts.\n\n" +
    "Placements: Moderate but stable placement support.\n" +
    "Average package: ₹4–6 LPA.\n" +
    "Top recruiters: BEL, BSNL, TCS, Infosys, Wipro.\n\n" +
    "B.Tech tuition fees: ~₹70,000–90,000 per year (government fees).\n\n" +
    "Campus Life: Located in Geeta Colony with basic infrastructure and affordable education."
},
{
  name: "Guru Tegh Bahadur Institute of Technology (GTBIT)",
  image: "https://edufever.in/colleges/wp-content/uploads/2021/07/Guru-Tegh-Bahadur-Institute-of-Technology-Delhi.jpg",
  description:
    "Guru Tegh Bahadur Institute of Technology (GTBIT) is a well-established IPU-affiliated engineering college known for its disciplined academic environment and Sikh minority quota advantage.\n\n" +
    "Strong branches: Computer Science Engineering (CSE), Information Technology (IT), Electronics & Communication Engineering (ECE), Mechanical Engineering.\n\n" +
    "Admissions: Through JEE Main rank via IPU counselling (minority quota available).\n\n" +
    "Academics: Focus on core engineering subjects, regular assessments, and skill-based learning.\n\n" +
    "Placements: Decent placement support with steady growth.\n" +
    "Average package: ₹4–6 LPA.\n" +
    "Highest packages: ₹18+ LPA.\n" +
    "Top recruiters: Infosys, TCS, Wipro, Accenture, Capgemini.\n\n" +
    "B.Tech tuition fees: ~₹1.6–1.8 lakh per year.\n\n" +
    "Campus Life: Located in Rajouri Garden with adequate labs, library, sports facilities, and student activities."
},
{
  name: "Dr. Akhilesh Das Gupta Institute of Technology & Management (ADGITM)",
  image: "https://thumbs.dreamstime.com/z/beautiful-campus-view-adgitm-formerly-known-as-northern-india-engineering-college-delhi-june-private-afflicted-to-186089883.jpg",
  description:
    "Dr. Akhilesh Das Gupta Institute of Technology & Management (ADGITM), formerly NIEC, is an IPU-affiliated engineering college with a large intake and diverse student community.\n\n" +
    "Strong branches: Computer Science Engineering (CSE), Information Technology (IT), Artificial Intelligence & Machine Learning (AI-ML), Electronics & Communication Engineering (ECE).\n\n" +
    "Admissions: Through JEE Main rank via IPU counselling.\n\n" +
    "Academics: Industry-focused curriculum with emphasis on practical learning and certifications.\n\n" +
    "Placements: Average placement record with mass recruiters.\n" +
    "Average package: ₹3.5–5 LPA.\n" +
    "Highest packages: ₹15+ LPA.\n" +
    "Top recruiters: TCS, Infosys, Wipro, Accenture, Cognizant.\n\n" +
    "B.Tech tuition fees: ~₹1.5–1.7 lakh per year.\n\n" +
    "Campus Life: Located in Shastri Park with modern infrastructure, labs, and active cultural societies."
},
{
  name: "Bharati Vidyapeeth’s College of Engineering (BVCOE) ",
  image: "https://tse2.mm.bing.net/th/id/OIP.5S0HYjOYAB0u7C1YVPSRwAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
  description:
    "Bharati Vidyapeeth’s College of Engineering (BVCOE) is one of the older IPU engineering colleges, known for academic stability and consistent results.\n\n" +
    "Strong branches: Computer Science Engineering (CSE), Information Technology (IT), Electronics & Communication Engineering (ECE), Instrumentation & Control Engineering.\n\n" +
    "Admissions: Through JEE Main rank via IPU counselling.\n\n" +
    "Academics: Structured academic approach with focus on fundamentals and project-based learning.\n\n" +
    "Placements: Moderate but consistent placements.\n" +
    "Average package: ₹4–6 LPA.\n" +
    "Highest packages: ₹18+ LPA.\n" +
    "Top recruiters: Infosys, TCS, Accenture, Capgemini, L&T.\n\n" +
    "B.Tech tuition fees: ~₹1.6–1.8 lakh per year.\n\n" +
    "Campus Life: Located in Paschim Vihar with decent infrastructure, labs, sports, and student clubs."
},
{
  name: "HMR Institute of Technology & Management (HMRITM) ",
  image: "https://www.joonsquare.com/usermanage/image/business/hmr-institute-of-technology-and-management-north-west-delhi-1-2513/hmr-institute-of-technology-and-management-north-west-delhi-hmritm03.jpg",
  description:
    "HMR Institute of Technology & Management (HMRITM) is an IPU-affiliated engineering college offering affordable education with improving academic standards.\n\n" +
    "Strong branches: Computer Science Engineering (CSE), Information Technology (IT), Electronics & Communication Engineering (ECE).\n\n" +
    "Admissions: Through JEE Main rank via IPU counselling.\n\n" +
    "Academics: Focus on foundational engineering skills and hands-on lab work.\n\n" +
    "Placements: Limited but improving placement support.\n" +
    "Average package: ₹3–4.5 LPA.\n" +
    "Top recruiters: TCS, Infosys, Wipro, HCL.\n\n" +
    "B.Tech tuition fees: ~₹1.4–1.6 lakh per year.\n\n" +
    "Campus Life: Located near Narela with basic infrastructure, labs, and sports facilities."
},
{
  name: "Northern India Engineering College (NIEC)",
  image: "https://tse1.mm.bing.net/th/id/OIP.UWGZRoGaYcIDVt804q8pvwHaB8?w=1140&h=300&rs=1&pid=ImgDetMain&o=7&rm=3",
  description:
    "Northern India Engineering College (now ADGITM) is a recognized IPU engineering institution with a long-standing presence in Delhi’s technical education space.\n\n" +
    "Strong branches: Computer Science Engineering (CSE), Information Technology (IT), Electronics & Communication Engineering (ECE).\n\n" +
    "Admissions: Through JEE Main rank via IPU counselling.\n\n" +
    "Academics: Focus on skill development, internships, and project-based learning.\n\n" +
    "Placements: Average placement opportunities with mass recruiters.\n" +
    "Average package: ₹3.5–5 LPA.\n\n" +
    "B.Tech tuition fees: ~₹1.5–1.7 lakh per year.\n\n" +
    "Campus Life: Urban campus environment with labs, library, and student activities."
}

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
