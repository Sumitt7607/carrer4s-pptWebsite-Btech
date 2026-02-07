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
const Others: College[] = [
  {
  name: "Galgotias College of Engineering & Technology (GCET)",
  image: "https://img.jagranjosh.com/images/2022/December/19122022/Galgotias-College-of-Engineering-and-Technology-Greater-Noida-Campus-View-3.jpg",
  description:
    "Galgotias College of Engineering & Technology (GCET) is an AKTU-affiliated private engineering college known for structured academics and consistent placements.\n\n" +
    "Branches: Computer Science & Engineering, Information Technology, Electronics & Communication Engineering, Mechanical Engineering, Civil Engineering.\n\n" +
    "Admission (2025): Through JEE Main + AKTU Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹1.5–1.8 lakh per year.\n\n" +
    "Hostel + Mess Fees: ~₹90,000–1.2 lakh per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹3.5–4.5 LPA.\n" +
    "Highest package: ₹12–15 LPA.\n\n" +
    "Campus Facilities: Hostels, Wi-Fi campus, labs, library, sports facilities, and training centers.",
},

  {
  name: "Jaypee Institute of Information Technology (JIIT), Noida",
  image: "https://media.getmyuni.com/azure/college-image/big/jaypee-institute-of-information-technology-university-jiitu-noida.jpg",
  description:
    "Jaypee Institute of Information Technology (JIIT), Noida is a reputed private deemed university known for strong academics and placements in computer-related branches.\n\n" +
    "Branches: Computer Science & Engineering, Information Technology, Electronics & Communication Engineering.\n\n" +
    "Admission (2025): Through JEE Main (JoSAA-style counselling by institute).\n\n" +
    "B.Tech Fees (2025): ~₹3–3.5 lakh per year.\n\n" +
    "Hostel + Mess Fees: ~₹1.2–1.5 lakh per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹6–8 LPA.\n" +
    "Highest package: ₹40+ LPA.\n\n" +
    "Campus Facilities: Fully residential campus, modern hostels, Wi-Fi, advanced labs, library, sports facilities, and strong coding culture.",
},

{
  name: "KIET Group of Institutions, Ghaziabad",
  image: "https://tse4.mm.bing.net/th/id/OIP.isjt3g4ZEmNX7hJNuj-O8AHaFS?rs=1&pid=ImgDetMain&o=7&rm=3",
  description:
    "KIET Group of Institutions is a reputed private engineering college affiliated with AKTU, known for discipline, academics, and stable placement records.\n\n" +
    "Branches: Computer Science & Engineering, Information Technology, Electronics & Communication Engineering, Mechanical Engineering, Electrical Engineering.\n\n" +
    "Admission (2025): Through JEE Main + AKTU Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹1.4–1.7 lakh per year.\n\n" +
    "Hostel + Mess Fees: ~₹85,000–1.1 lakh per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹4–6 LPA.\n" +
    "Highest package: ₹20+ LPA.\n\n" +
    "Campus Facilities: Residential campus, hostels, Wi-Fi, modern labs, central library, and sports complexes.",
},

{
  name: "JSS Academy of Technical Education, Noida",
  image: "https://www.jssaten.ac.in/assets/a7.jpg",
  description:
    "JSS Academy of Technical Education, Noida is one of the top private engineering colleges affiliated with AKTU, known for discipline, academics, and alumni strength.\n\n" +
    "Branches: Computer Science & Engineering, Information Technology, Electronics & Communication Engineering, Electrical Engineering, Mechanical Engineering.\n\n" +
    "Admission (2025): Through JEE Main + AKTU Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹1.6–1.9 lakh per year.\n\n" +
    "Hostel + Mess Fees: ~₹80,000–1.1 lakh per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹4–6 LPA.\n" +
    "Highest package: ₹20+ LPA.\n\n" +
    "Campus Facilities: Hostels, Wi-Fi-enabled campus, well-equipped labs, library, sports grounds, and placement training.",
},

{
  name: "Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad",
  image: "https://ik.imagekit.io/syustaging/SYU_PREPROD/Ajay-Kumar-Garg-Engineering-College---_AKGEC_-_Ghaziabad-_Uttar-Pradesh_TLXoEstsMh.webp?tr=w-3840",
  description:
    "Ajay Kumar Garg Engineering College (AKGEC) is a top-ranked private engineering college affiliated with AKTU and known for excellent placements.\n\n" +
    "Branches: Computer Science & Engineering, Information Technology, Electronics & Communication Engineering, Mechanical Engineering, Electrical Engineering.\n\n" +
    "Admission (2025): Through JEE Main + AKTU Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹1.5–1.8 lakh per year.\n\n" +
    "Hostel + Mess Fees: ~₹80,000–1.1 lakh per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹5–7 LPA.\n" +
    "Highest package: ₹30+ LPA.\n\n" +
    "Campus Facilities: Hostels, Wi-Fi campus, advanced labs, library, sports facilities, and strong industry training.",
},

]
const commedk: College[] = [
  {
  name: "RV College of Engineering (RVCE), Bangalore",
  image: "https://www.collegedhundo.com/images/blog/rv-college-bangalore.jpg",
  description:
    "RV College of Engineering (RVCE), Bangalore is the top-ranked private engineering college under COMEDK and is known for excellent academics, infrastructure, and placements.\n\n" +
    "Branches: Computer Science & Engineering, Artificial Intelligence, Electronics & Communication Engineering, Electrical Engineering, Mechanical Engineering.\n\n" +
    "Admission (2025): Through COMEDK UGET Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹2.8–3 lakh per year.\n\n" +
    "Hostel + Mess Fees: ~₹1–1.3 lakh per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹10–12 LPA.\n" +
    "Highest package: ₹60+ LPA.\n\n" +
    "Campus Facilities: Autonomous campus, hostels, Wi-Fi, advanced labs, central library, sports facilities, and strong industry connections.",
},
{
  name: "BMS College of Engineering (BMSCE), Bangalore",
  image: "https://img.jagranjosh.com/images/2022/December/1122022/BMS-College-of-Engineering-Bangalore-Campus-View-3.jpg",
  description:
    "BMS College of Engineering is one of the oldest and most reputed engineering colleges in Bangalore accepting COMEDK ranks.\n\n" +
    "Branches: Computer Science & Engineering, Artificial Intelligence, Electronics & Communication Engineering, Electrical Engineering, Mechanical Engineering.\n\n" +
    "Admission (2025): Through COMEDK UGET Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹2.6–2.9 lakh per year.\n\n" +
    "Hostel + Mess Fees: ~₹90,000–1.2 lakh per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹7–9 LPA.\n" +
    "Highest package: ₹50+ LPA.\n\n" +
    "Campus Facilities: Hostels, Wi-Fi campus, modern labs, library, sports complex, and active placement cell.",
},
{
  name: "MS Ramaiah Institute of Technology (MSRIT), Bangalore",
  image: "https://www.collegedhundo.com/images/college/msrit-1170x560.jpg",
  description:
    "MS Ramaiah Institute of Technology is a premier autonomous engineering college in Bangalore with strong placement records under COMEDK.\n\n" +
    "Branches: Computer Science & Engineering, Artificial Intelligence, Electronics & Communication Engineering, Electrical Engineering, Mechanical Engineering.\n\n" +
    "Admission (2025): Through COMEDK UGET Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹2.5–2.8 lakh per year.\n\n" +
    "Hostel + Mess Fees: ~₹1–1.3 lakh per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹7–8 LPA.\n" +
    "Highest package: ₹45+ LPA.\n\n" +
    "Campus Facilities: Urban campus, hostels, Wi-Fi, advanced labs, library, sports facilities, and industry exposure.",
},
{
  name: "Dayananda Sagar College of Engineering (DSCE), Bangalore",
  image: "https://www.targetadmission.com/img/colleges/newc/30422-88483.jpg",
  description:
    "Dayananda Sagar College of Engineering is a popular COMEDK college in Bangalore known for balanced academics and placements.\n\n" +
    "Branches: Computer Science & Engineering, Artificial Intelligence, Electronics & Communication Engineering, Mechanical Engineering.\n\n" +
    "Admission (2025): Through COMEDK UGET Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹2.4–2.7 lakh per year.\n\n" +
    "Hostel + Mess Fees: ~₹90,000–1.2 lakh per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹5–6 LPA.\n" +
    "Highest package: ₹25+ LPA.\n\n" +
    "Campus Facilities: Large campus, hostels, Wi-Fi, labs, library, sports grounds, and placement training programs.",
},
{
  name: "Bangalore Institute of Technology (BIT), Bangalore",
  image: "https://bit-bangalore.edu.in/assets/images/lifebit/bit-campus-1.jpg",
  description:
    "Bangalore Institute of Technology is a well-known private engineering college under COMEDK with consistent placement performance.\n\n" +
    "Branches: Computer Science & Engineering, Information Science, Electronics & Communication Engineering, Electrical Engineering, Mechanical Engineering.\n\n" +
    "Admission (2025): Through COMEDK UGET Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹2.3–2.6 lakh per year.\n\n" +
    "Hostel + Mess Fees: ~₹80,000–1.1 lakh per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹4–6 LPA.\n" +
    "Highest package: ₹18–20 LPA.\n\n" +
    "Campus Facilities: City campus, hostels, Wi-Fi, laboratories, library, sports facilities, and placement support.",
},
{
  name: "Nitte Meenakshi Institute of Technology (NMIT), Bangalore",
  image: "https://www.collegedhundo.com/images/blog/mainBuilding.jpg",
  description:
    "Nitte Meenakshi Institute of Technology (NMIT) is a popular COMEDK college in Bangalore known for consistent placements and good infrastructure.\n\n" +
    "Branches: Computer Science & Engineering, Artificial Intelligence, Information Science, Electronics & Communication Engineering, Mechanical Engineering.\n\n" +
    "Admission (2025): Through COMEDK UGET Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹2.3–2.6 lakh per year.\n\n" +
    "Hostel + Mess Fees: ~₹90,000–1.2 lakh per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹4–5.5 LPA.\n" +
    "Highest package: ₹18–22 LPA.\n\n" +
    "Campus Facilities: Spacious campus, hostels, Wi-Fi, modern labs, library, and sports amenities.",
},
{
  name: "BNM Institute of Technology (BNMIT), Bangalore",
  image: "https://tse2.mm.bing.net/th/id/OIP.4AqMJDHDk35O-IxPxiGoSQHaDf?rs=1&pid=ImgDetMain&o=7&rm=3",
  description:
    "BNM Institute of Technology (BNMIT) is a well-established private engineering college under COMEDK with a strong academic environment.\n\n" +
    "Branches: Computer Science & Engineering, Information Science, Electronics & Communication Engineering, Electrical Engineering, Mechanical Engineering.\n\n" +
    "Admission (2025): Through COMEDK UGET Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹2.2–2.5 lakh per year.\n\n" +
    "Hostel + Mess Fees: ~₹80,000–1.1 lakh per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹4–5 LPA.\n" +
    "Highest package: ₹15–18 LPA.\n\n" +
    "Campus Facilities: City campus, hostels, Wi-Fi-enabled campus, labs, library, and sports facilities.",
},
{
  name: "CMR Institute of Technology (CMRIT), Bangalore",
  image: "https://www.cmrit.ac.in/wp-content/uploads/2021/07/about_overview-1.jpg",
  description:
    "CMR Institute of Technology (CMRIT) is a fast-growing COMEDK college in Bangalore known for industry tie-ups and practical learning.\n\n" +
    "Branches: Computer Science & Engineering, Artificial Intelligence, Information Science, Electronics & Communication Engineering, Mechanical Engineering.\n\n" +
    "Admission (2025): Through COMEDK UGET Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹2.3–2.6 lakh per year.\n\n" +
    "Hostel + Mess Fees: ~₹90,000–1.2 lakh per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹4–5.5 LPA.\n" +
    "Highest package: ₹18–20 LPA.\n\n" +
    "Campus Facilities: Modern campus, hostels, Wi-Fi, innovation labs, library, and sports facilities.",
},
{
  name: "The National Institute of Engineering (NIE), Mysuru",
  image: "https://www.comedk.org/uploads/nie-1.jpg",
  description:
    "The National Institute of Engineering (NIE), Mysuru is one of the oldest engineering colleges in Karnataka and a preferred COMEDK choice.\n\n" +
    "Branches: Computer Science & Engineering, Information Science, Electronics & Communication Engineering, Electrical Engineering, Mechanical Engineering.\n\n" +
    "Admission (2025): Through COMEDK UGET Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹2.2–2.5 lakh per year.\n\n" +
    "Hostel + Mess Fees: ~₹70,000–1 lakh per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹4.5–6 LPA.\n" +
    "Highest package: ₹20+ LPA.\n\n" +
    "Campus Facilities: Heritage campus, hostels, Wi-Fi, labs, library, sports facilities, and strong alumni network.",
},

]


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
             className="
    group cursor-pointer
    bg-gradient-to-br from-[#111] to-[#0b0b0b]
    rounded-2xl overflow-hidden
    border border-orange-500/20
    hover:border-orange-500
    shadow-[0_0_0_rgba(0,0,0,0)]
    hover:shadow-[0_0_30px_rgba(255,140,0,0.25)]
    transition-all duration-300
  "
          >
            {/* Image */}
            <div className="h-44 w-full overflow-hidden">
     <img
  src={college.image}
  alt={college.name}
  className="
    h-full w-full object-cover
    transition-transform duration-700
    group-hover:scale-110
  "
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
  

  <p className="mt-1 text-xs text-gray-400">
    B.Tech • Admissions 2026
  </p>
</div>

          </motion.div>
        ))}
      </motion.div>




 
      {/* Modal Popup */}
      <AnimatePresence>
        {selectedCollege && (
        <motion.div
  className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-3 sm:px-6"

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
 className="
    relative bg-[#111]
    rounded-2xl w-full max-w-lg
    max-h-[90vh] overflow-hidden
    border border-orange-500/40
    shadow-[0_0_40px_rgba(255,140,0,0.25)]
  "
  initial={{ scale: 0.85, y: 60 }}
  animate={{ scale: 1, y: 0 }}
  exit={{ scale: 0.85, y: 60 }}
  transition={{ duration: 0.3 }}
>

              {/* Cross Button */}
          <button
  onClick={() => setSelectedCollege(null)}
  className="
    absolute top-3 right-3 z-10
    w-9 h-9 flex items-center justify-center
    rounded-full bg-black/60
    border border-orange-500/30
    text-orange-400 hover:bg-orange-500 hover:text-black
    transition
  "
>
  ✕
</button>

              {/* Content */}
        <div className="overflow-y-auto max-h-[90vh] p-5 sm:p-6 text-[13px] sm:text-sm">
  <h2 className="text-lg sm:text-2xl font-bold text-orange-400 mb-2">
    {selectedCollege.name}
  </h2>

  <div className="h-px w-full bg-gradient-to-r from-orange-500/40 to-transparent mb-4" />

  <div className="bg-black/40 rounded-xl p-4 border border-orange-500/10">
    <p className="whitespace-pre-line text-gray-300 leading-relaxed">
      {selectedCollege.description}
    </p>
  </div>

  <p className="mt-4 text-xs text-gray-400">
     Private University • B.Tech Admissions
  </p>
</div>


            </motion.div>
          </motion.div>
        )}

      </AnimatePresence>
      
    </section>
     <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-500 mb-14 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Other Private Colleges & University in NCR
      </motion.h1>
         <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {Others.map((college, idx) => (
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
  

  <p className="mt-1 text-xs text-gray-400">
    B.Tech • Admissions 2026
  </p>
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
        Top colleges & universities of Karnataka
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {commedk.map((college, idx) => (
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
  

  <p className="mt-1 text-xs text-gray-400">
    B.Tech • Admissions 2026
  </p>
</div>

          </motion.div>
        ))}
      </motion.div>




        </>
  );
};

export default DeemedPrivatePage;
