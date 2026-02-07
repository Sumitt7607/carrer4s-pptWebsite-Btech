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
    "State Institute of Engineering & Technology (SIET), Nilokheri, Haryana offers a 4-year B.Tech program.\n\n" +
    "Branches: Mechanical Engineering, Electrical Engineering, Civil Engineering, Electronics & Communication Engineering.\n\n" +
    "Admission (2025): Through JEE Main + HSTES Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹45,000–60,000 per year.\n\n" +
    "Hostel + Mess Fees: ~₹25,000–35,000 per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹3–5 LPA.\n" +
    "Highest package: ₹10+ LPA.\n\n" +
    "Campus Facilities: On-campus hostels, mess, Wi-Fi, labs, sports facilities, and medical unit."
},
{
  name: "Kurukshetra University",
  image: "/kr.avif",
  description:
    "Kurukshetra University, Kurukshetra offers a 4-year B.Tech program.\n\n" +
    "Branches: Computer Engineering, Electronics & Communication Engineering, Mechanical Engineering, Electrical Engineering, Civil Engineering.\n\n" +
    "Admission (2025): Through JEE Main + HSTES / University counselling.\n\n" +
    "B.Tech Fees (2025): ~₹55,000–70,000 per year.\n\n" +
    "Hostel + Mess Fees: ~₹30,000–40,000 per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹4–6 LPA.\n" +
    "Highest package: ₹20+ LPA (overall).\n\n" +
    "Campus Facilities: Large residential campus with hostels, mess, Wi-Fi, central library, labs, sports complexes, and health center."
},

{
  name: "University Institute of Engineering & Technology, Rohtak",
  image: "/roh.webp",
  description:
    "University Institute of Engineering & Technology (UIET), Rohtak offers a 4-year B.Tech program.\n\n" +
    "Branches: Computer Engineering, Electronics & Communication Engineering, Mechanical Engineering, Electrical Engineering.\n\n" +
    "Admission (2025): Through JEE Main + HSTES Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹50,000–65,000 per year.\n\n" +
    "Hostel + Mess Fees: ~₹25,000–35,000 per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹3.5–5.5 LPA.\n" +
    "Highest package: ₹15+ LPA.\n\n" +
    "Campus Facilities: On-campus hostels with mess, Wi-Fi, labs, library, sports courts, and campus security."
},

  {
  name: "Ch. Ranbir Singh State Institute of Engineering & Technology, Jhajjar",
  image: "/ch.webp",
  description:
    "Ch. Ranbir Singh State Institute of Engineering & Technology (CRS SIET), Jhajjar offers a 4-year B.Tech program.\n\n" +
    "Branches: Mechanical Engineering, Electrical Engineering, Electronics & Communication Engineering, Civil Engineering.\n\n" +
    "Admission (2025): Through JEE Main + HSTES Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹40,000–60,000 per year.\n\n" +
    "Hostel + Mess Fees: ~₹25,000–35,000 per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹3–5 LPA.\n" +
    "Highest package: ₹10+ LPA.\n\n" +
    "Campus Facilities: Fully residential campus with hostels, mess, Wi-Fi, labs, sports facilities, and medical unit."
  },
{
  name: "J.C. Bose University of Science & Technology, YMCA Faridabad",
  image: "/jc.webp",
  description:
    "J.C. Bose University of Science & Technology (YMCA), Faridabad offers a 4-year B.Tech program.\n\n" +
    "Branches: Computer Engineering, Information Technology, Electronics & Communication Engineering, Mechanical Engineering, Electrical Engineering.\n\n" +
    "Admission (2025): Through JEE Main + HSTES Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹70,000–90,000 per year.\n\n" +
    "Hostel + Mess Fees: ~₹35,000–45,000 per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹6–8 LPA.\n" +
    "Highest package: ₹45+ LPA (overall).\n\n" +
    "Top Recruiters: Amazon, Microsoft, Samsung, Infosys, TCS.\n\n" +
    "Campus Facilities: On-campus hostels, mess, Wi-Fi, central library, labs, sports complexes, and medical center."
},
{
  name: "Bhagat Phool Singh Mahila Vishwavidyalaya, Sonipat",
  image: "/bg.webp",
  description:
    "Bhagat Phool Singh Mahila Vishwavidyalaya (BPSMV), Sonipat offers a 4-year B.Tech program (Women-only).\n\n" +
    "Branches: Computer Engineering, Electronics & Communication Engineering, Mechanical Engineering, Electrical Engineering.\n\n" +
    "Admission (2025): Through JEE Main + HSTES Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹40,000–60,000 per year.\n\n" +
    "Hostel + Mess Fees: ~₹25,000–35,000 per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹3.5–5.5 LPA.\n" +
    "Highest package: ₹12+ LPA.\n\n" +
    "Campus Facilities: Fully residential women-only campus with hostels, mess, Wi-Fi, labs, sports facilities, and campus security."
},

];

const colleges: College[] = [
  
   {
  name: "Delhi Technological University (DTU)",
  image: "/dtu.webp",
  description:
    "Delhi Technological University (DTU), New Delhi offers a 4-year B.Tech program and is one of India’s top government engineering universities.\n\n" +
    "Branches: Computer Engineering, Information Technology, Electronics & Communication Engineering, Mechanical Engineering, Electrical Engineering, Civil Engineering.\n\n" +
    "Admission (2025): Through JEE Main + JAC Delhi Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹2.0–2.3 lakh per year.\n\n" +
    "Hostel + Mess Fees: ~₹45,000–60,000 per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹10–14 LPA.\n" +
    "Highest package: ₹50+ LPA.\n\n" +
    "Top Recruiters: Google, Microsoft, Amazon, Goldman Sachs, Adobe.\n\n" +
    "Campus Facilities: Limited on-campus hostels, Wi-Fi-enabled campus, central library, advanced labs, sports complexes, and medical center."
},

{
  name: "Netaji Subhas University of Technology (NSUT)",
  image: "/nsut.webp",
  description:
    "Netaji Subhas University of Technology (NSUT), New Delhi offers a 4-year B.Tech program and is a premier government engineering university.\n\n" +
    "Branches: Computer Engineering, Information Technology, Electronics & Communication Engineering, Mechanical Engineering, Electrical Engineering.\n\n" +
    "Admission (2025): Through JEE Main + JAC Delhi Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹2.0–2.3 lakh per year.\n\n" +
    "Hostel + Mess Fees: ~₹45,000–60,000 per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹9–13 LPA.\n" +
    "Highest package: ₹50+ LPA.\n\n" +
    "Top Recruiters: Amazon, Microsoft, Google, Adobe, Deloitte.\n\n" +
    "Campus Facilities: On-campus hostels with mess, Wi-Fi-enabled campus, central library, advanced labs, sports complexes, and medical unit."
},

{
  name: "Jamia Millia Islamia (Faculty of Engineering & Technology)",
  image: "/jamia.webp",
  description:
    "Jamia Millia Islamia – Faculty of Engineering & Technology (FET), New Delhi offers a 4-year B.Tech program under a central government university.\n\n" +
    "Branches: Computer Engineering, Electronics & Communication Engineering, Electrical Engineering, Mechanical Engineering, Civil Engineering.\n\n" +
    "Admission (2025): Through JEE Main + JMI Counselling (via JoSAA/CSAB equivalent process).\n\n" +
    "B.Tech Fees (2025): ~₹16,000–20,000 per year.\n\n" +
    "Hostel + Mess Fees: ~₹25,000–35,000 per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹6–9 LPA.\n" +
    "Highest package: ₹50+ LPA (overall).\n\n" +
    "Campus Facilities: Limited on-campus hostels, mess, Wi-Fi-enabled campus, central library, labs, sports facilities, and medical center."
},
{
  name: "USICT, GGSIPU",
  image: "/uscit.avif",
  description:
    "University School of Information, Communication & Technology (USICT), GGSIPU, New Delhi offers a 4-year B.Tech program.\n\n" +
    "Branches: Computer Science & Engineering, Information Technology, Electronics & Communication Engineering.\n\n" +
    "Admission (2025): Through JEE Main + JAC Delhi Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹1.5–2.0 lakh per year.\n\n" +
    "Hostel + Mess Fees: ~₹40,000–55,000 per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹6–8 LPA.\n" +
    "Highest package: ₹25+ LPA.\n\n" +
    "Campus Facilities: On-campus hostels with mess, Wi-Fi-enabled campus, central library, labs, sports facilities, and campus security."
},
{
  name: "Ambedkar Institute of Advanced Communication Technologies & Research (AIACTR)",
  image: "/am.jpg",
  description:
    "Ambedkar Institute of Advanced Communication Technologies & Research (AIACTR), New Delhi offers a 4-year B.Tech program and is a government engineering institute affiliated with GGSIPU.\n\n" +
    "Branches: Electronics & Communication Engineering.\n\n" +
    "Admission (2025): Through JEE Main + JAC Delhi Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹1.2–1.6 lakh per year.\n\n" +
    "Hostel + Mess Fees: ~₹35,000–50,000 per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹4–6 LPA.\n" +
    "Highest package: ₹15+ LPA.\n\n" +
    "Campus Facilities: Limited hostel facilities, mess, Wi-Fi-enabled campus, library, labs, and sports areas."
},
{
  name: "Govind Ballabh Pant Government Engineering College (GBPGEC)",
  image: "https://media.getmyuni.com/azure/college-image/big/govind-ballabh-pant-engineering-college-gbpec-new-delhi.jpg",
  description:
    "Govind Ballabh Pant Government Engineering College (often referred to as GB Pant College) is a government engineering institute in New Delhi affiliated with Guru Gobind Singh Indraprastha University and approved by AICTE.\n\n" +
    "Branches: Computer Science & Engineering, Electronics & Communication Engineering, Mechanical & Automation Engineering.\n\n" +
    "Admission (2026): Through IPU CET / JEE Main + JAC Delhi Counselling (depending on admission criteria updates).\n\n" +
    "B.Tech Fees (2026): ~₹1.5–1.7 lakh per year (~₹6–7 lakh total) depending on course and components. :contentReference[oaicite:0]{index=0}\n\n" +
    "Hostel + Mess Fees: No official hostel on campus, students usually arrange PGs nearby (~₹70,000–1.2 lakh per year typical range in Delhi area).\n\n" +
    "Placements (2025): Average ~₹3–6 LPA; placement assistance minimal with some students choosing off-campus offers. :contentReference[oaicite:1]{index=1}\n\n" +
    "Campus Facilities: Basic labs, library, sports areas, classrooms; limited dedicated on-campus accommodation. :contentReference[oaicite:2]{index=2}"
},
{
  name: "Delhi Skill and Entrepreneurship University (DSEU) – GB Pant Campus",
  image: "https://www.dseu.ac.in/campuses/wazirpur.jpg",
  description:
    "Delhi Skill and Entrepreneurship University (DSEU) is a state university in New Delhi focused on skill-based and industry-relevant education including engineering programs. GB Pant is one of its prominent campuses offering technical courses. :contentReference[oaicite:3]{index=3}\n\n" +
    "Branches: B.Tech (Computer Science, Electronics & Communication, Mechanical etc.), B.Tech Lateral, M.Tech and various diploma/polytechnic courses. :contentReference[oaicite:4]{index=4}\n\n" +
    "Admission (2026): Through **JEE Main + JAC Delhi Counselling / merit system** depending on program. :contentReference[oaicite:5]{index=5}\n\n" +
    "B.Tech Fees (2026): ~₹5.85–6 lakh total for full B.Tech program (~₹1.4–1.6 lakh per year). :contentReference[oaicite:6]{index=6}\n\n" +
    "Hostel + Mess Fees: Hostel available with basic amenities, typical hostel + mess ~₹40,000–70,000 per year (varies by campus & amenities). :contentReference[oaicite:7]{index=7}\n\n" +
    "Placements (2025): Average packages around **₹4–6 LPA**, with some higher offers and strong internship opportunities; companies participate in job festivals. :contentReference[oaicite:8]{index=8}\n\n" +
    "Campus Facilities: Library, labs, sports, industry-oriented skill labs, workshops and training centers. :contentReference[oaicite:9]{index=9}"
},
{
  name: "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
  image: "https://tse2.mm.bing.net/th/id/OIP.Tz31hL2RkHpKdF4PHzoYsgHaDz?rs=1&pid=ImgDetMain&o=7&rm=3",
  description:
    "Indira Gandhi Delhi Technical University for Women (IGDTUW) is a government engineering and technical university exclusively for women in New Delhi. It was established as Indira Gandhi Institute of Technology and later became a technical university. :contentReference[oaicite:10]{index=10}\n\n" +
    "Branches: B.Tech (CSE, ECE, IT, Mechanical & Automation, etc.), B.Arch, B.Tech+MBA Dual Degree, M.Tech, MBA, MCA, M.Plan and Ph.D. programs. :contentReference[oaicite:11]{index=11}\n\n" +
    "Admission (2026): Based on **JEE Main + JAC Delhi Counselling** for B.Tech and respective exams for other programs. :contentReference[oaicite:12]{index=12}\n\n" +
    "B.Tech Fees (2026): ~₹1.3–1.8 lakh per year (~₹5.2–7.2 lakh total, varies by specialization). :contentReference[oaicite:13]{index=13}\n\n" +
    "Hostel + Mess Fees: Girl’s hostel available; combined hostel + mess may be ~₹1.4–1.9 lakh per year (approx). :contentReference[oaicite:14]{index=14}\n\n" +
    "Placements (2025): Strong placements with high recruitment; average packages ~₹10–18 LPA+, highest packages reported significantly higher including premium offers. :contentReference[oaicite:15]{index=15}\n\n" +
    "Campus Facilities: Fully equipped library, modern labs, sports facilities, research centers, student clubs, and on-campus hostels. :contentReference[oaicite:16]{index=16}"
}




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
    "Government Engineering College (GEC), Ajmer is a state government engineering college in Rajasthan offering affordable B.Tech programs.\n\n" +
    "Branches: Mechanical Engineering, Electrical Engineering, Civil Engineering, Electronics & Communication Engineering.\n\n" +
    "Admission (2025): Through JEE Main + REAP Counselling (Rajasthan).\n\n" +
    "B.Tech Fees (2025): ~₹60,000–80,000 per year.\n\n" +
    "Hostel + Mess Fees: ~₹25,000–35,000 per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹3–5 LPA.\n" +
    "Highest package: ₹10+ LPA.\n\n" +
    "Campus Facilities: On-campus hostels with mess, Wi-Fi, labs, sports facilities, and medical unit.",
},

{
  name: "Government Engineering College, Bikaner",
  image: "/bi.webp",
  description:
    "Government Engineering College (GEC), Bikaner is a state government engineering college in Rajasthan offering B.Tech programs.\n\n" +
    "Branches: Mechanical Engineering, Electrical Engineering, Civil Engineering, Electronics & Communication Engineering.\n\n" +
    "Admission (2025): Through JEE Main + REAP Counselling (Rajasthan).\n\n" +
    "B.Tech Fees (2025): ~₹55,000–75,000 per year.\n\n" +
    "Hostel + Mess Fees: ~₹25,000–35,000 per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹3–4.5 LPA.\n" +
    "Highest package: ₹8–10 LPA.\n\n" +
    "Campus Facilities: Fully residential campus with hostels, mess, Wi-Fi, labs, sports facilities, and campus security.",
},

{
  name: "MBM Engineering College, Jodhpur",
  image: "/rj.jpeg",
  description:
    "MBM Engineering College, Jodhpur is one of Rajasthan’s oldest and most reputed state government engineering colleges.\n\n" +
    "Branches: Computer Engineering, Electronics & Communication Engineering, Mechanical Engineering, Electrical Engineering, Civil Engineering.\n\n" +
    "Admission (2025): Through JEE Main + REAP Counselling (Rajasthan).\n\n" +
    "B.Tech Fees (2025): ~₹60,000–90,000 per year.\n\n" +
    "Hostel + Mess Fees: ~₹30,000–40,000 per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹4–6 LPA.\n" +
    "Highest package: ₹15+ LPA.\n\n" +
    "Top Recruiters: TCS, Infosys, L&T, Wipro, Reliance.\n\n" +
    "Campus Facilities: Large residential campus with hostels, mess, Wi-Fi, labs, sports facilities, library, and medical center.",
},

{
  name: "JECRC University, Jaipur",
  image: "/jec.jpg",
  description:
    "JECRC University, Jaipur offers industry-focused 4-year B.Tech programs with modern infrastructure.\n\n" +
    "Branches: Computer Science & Engineering, Information Technology, Artificial Intelligence, Electronics & Communication Engineering, Mechanical Engineering.\n\n" +
    "Admission (2025): Through JEE Main / REAP (Rajasthan) / University-level counselling.\n\n" +
    "B.Tech Fees (2025): ~₹1.6–2.4 lakh per year.\n\n" +
    "Hostel + Mess Fees: ~₹90,000–1.2 lakh per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹4–6 LPA.\n" +
    "Highest package: ₹30+ LPA (overall).\n\n" +
    "Top Recruiters: TCS, Cognizant, Infosys, Wipro, Capgemini.\n\n" +
    "Campus Facilities: On-campus hostels with mess, Wi-Fi, labs, sports facilities, gym, and medical unit.",
},

{
  name: "Poornima College of Engineering, Jaipur",
  image: "/poo.jpg",
  description:
    "Poornima College of Engineering, Jaipur offers industry-oriented 4-year B.Tech programs.\n\n" +
    "Branches: Computer Science & Engineering, Information Technology, Electronics & Communication Engineering, Mechanical Engineering.\n\n" +
    "Admission (2025): Through JEE Main + REAP Counselling (Rajasthan).\n\n" +
    "B.Tech Fees (2025): ~₹1.2–1.8 lakh per year.\n\n" +
    "Hostel + Mess Fees: ~₹80,000–1.1 lakh per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹4–6 LPA.\n" +
    "Highest package: ₹15+ LPA.\n\n" +
    "Campus Facilities: Fully residential campus with hostels, mess, Wi-Fi, labs, sports courts, and campus security.",
},

{
  name: "Manipal University Jaipur",
  image: "/mp.jpg",
  description:
    "Manipal University Jaipur (MUJ) offers global-standard 4-year B.Tech programs with modern infrastructure.\n\n" +
    "Branches: Computer Science & Engineering, Information Technology, Artificial Intelligence, Electronics & Communication Engineering, Mechanical Engineering.\n\n" +
    "Admission (2025): Through MET / JEE Main / University-level counselling.\n\n" +
    "B.Tech Fees (2025): ~₹3.0–4.5 lakh per year.\n\n" +
    "Hostel + Mess Fees: ~₹1.0–1.3 lakh per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹6–8 LPA.\n" +
    "Highest package: ₹45+ LPA (overall).\n\n" +
    "Top Recruiters: Microsoft, Amazon, Deloitte, Infosys, TCS.\n\n" +
    "Campus Facilities: Fully residential campus with modern hostels, Wi-Fi, sports complexes, gym, hospital, and central library.",
},

];
const Uttarakhand: College[] = [
{
  name: "Graphic Era University, Dehradun",
  image: "/gr.jpeg",
  description:
    "Graphic Era University, Dehradun offers industry-focused 4-year B.Tech programs with strong placement support.\n\n" +
    "Branches: Computer Science & Engineering, Information Technology, Artificial Intelligence, Data Science, Electronics & Communication Engineering, Mechanical Engineering.\n\n" +
    "Admission (2025): Through JEE Main / University-level entrance / Direct admission.\n\n" +
    "B.Tech Fees (2025): ~₹2.2–3.5 lakh per year.\n\n" +
    "Hostel + Mess Fees: ~₹1.0–1.3 lakh per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹5–7.5 LPA.\n" +
    "Highest package: ₹40+ LPA.\n\n" +
    "Top Recruiters: Amazon, Microsoft, Deloitte, Infosys, TCS.\n\n" +
    "Campus Facilities: Fully residential campus with modern hostels, Wi-Fi, sports facilities, gym, library, and medical center.",
},

  // {
  //   name: "UPES, Dehradun",
  //   image: "/upes.webp",
  //   description:
  //     "UPES Dehradun offers specialized B.Tech programs with strong industry linkage, especially in energy, petroleum, and data science.\n\n" +
  //     "Strong branches: Computer Science, AI, Data Science, Petroleum Engineering, Mechanical Engineering.\n\n" +
  //     "Admissions: Through UPESEAT / JEE Main / Board merit.\n\n" +
  //     "Academics: Offers B.Tech, M.Tech, MBA, MSc, and PhD programs.\n\n" +
  //     "Placements: Good placement performance.\n" +
  //     "Average package: ₹5–7 LPA.\n" +
  //     "Top recruiters: Schlumberger, ONGC, Infosys, TCS, Accenture.\n\n" +
  //     "B.Tech tuition fees: ~₹3.0–4.5 lakh per year.\n" +
  //     "Hostel + mess fees: ~₹1.1–1.4 lakh per year.\n\n" +
  //     "Hostel: Fully residential campus with modern hostels, Wi-Fi, sports complexes, library, and medical unit."
  // },
{
  name: "UPES, Dehradun",
  image: "/upes.webp",
  description:
    "University of Petroleum & Energy Studies (UPES), Dehradun offers specialized 4-year B.Tech programs with strong industry linkage.\n\n" +
    "Branches: Computer Science & Engineering, Artificial Intelligence, Data Science, Petroleum Engineering, Mechanical Engineering, Electronics & Communication Engineering.\n\n" +
    "Admission (2025): Through UPESEAT / JEE Main / Board merit-based admission.\n\n" +
    "B.Tech Fees (2025): ~₹3.0–4.5 lakh per year.\n\n" +
    "Hostel + Mess Fees: ~₹1.1–1.4 lakh per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹5–7 LPA.\n" +
    "Highest package: ₹35+ LPA.\n\n" +
    "Top Recruiters: Schlumberger, ONGC, Accenture, Infosys, TCS.\n\n" +
    "Campus Facilities: Fully residential campus with modern hostels, Wi-Fi, sports complexes, library, and medical unit.",
},

{
  name: "GB Pant Institute of Engineering & Technology, Pauri",
  image: "/gv.jpg",
  description:
    "GB Pant Institute of Engineering & Technology (GBPIET), Pauri is a state government engineering college in Uttarakhand offering affordable B.Tech programs.\n\n" +
    "Branches: Computer Engineering, Electronics & Communication Engineering, Mechanical Engineering, Electrical Engineering, Civil Engineering.\n\n" +
    "Admission (2025): Through JEE Main + UKSEE/State Counselling (Uttarakhand).\n\n" +
    "B.Tech Fees (2025): ~₹60,000–80,000 per year.\n\n" +
    "Hostel + Mess Fees: ~₹25,000–35,000 per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹3–5 LPA.\n" +
    "Highest package: ₹8–10 LPA.\n\n" +
    "Campus Facilities: Fully residential campus with hostels, mess, Wi-Fi, labs, sports facilities, and medical unit.",
},

{
  name: "Tula’s Institute, Dehradun",
  image: "/tula.jpg",
  description:
    "Tula’s Institute, Dehradun offers skill-oriented 4-year B.Tech programs with focus on industry readiness.\n\n" +
    "Branches: Computer Science & Engineering, Information Technology, Electronics & Communication Engineering, Mechanical Engineering.\n\n" +
    "Admission (2025): Through JEE Main / University-level counselling / Direct admission.\n\n" +
    "B.Tech Fees (2025): ~₹1.4–2.2 lakh per year.\n\n" +
    "Hostel + Mess Fees: ~₹80,000–1.1 lakh per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹3–5 LPA.\n" +
    "Highest package: ₹10+ LPA.\n\n" +
    "Campus Facilities: On-campus hostels with mess, Wi-Fi, labs, library, sports courts, and campus security.",
},

{
  name: "ICFAI University, Dehradun",
  image: "/icfai.jpg",
  description:
    "ICFAI University, Dehradun offers management-integrated 4-year B.Tech programs in a private university setup.\n\n" +
    "Branches: Computer Science & Engineering, Information Technology, Electronics & Communication Engineering.\n\n" +
    "Admission (2025): Through University-level entrance / Direct admission.\n\n" +
    "B.Tech Fees (2025): ~₹1.6–2.5 lakh per year.\n\n" +
    "Hostel + Mess Fees: ~₹90,000–1.2 lakh per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹3–5 LPA.\n" +
    "Highest package: ₹8–10 LPA.\n\n" +
    "Campus Facilities: Fully residential campus with hostels, mess, Wi-Fi, labs, sports facilities, and campus security.",
},

];
const others: College[] = [  
 {
  name: "Gautam Buddha University (GBU)",
  image: "https://tse4.mm.bing.net/th/id/OIP.R3jje0TwvbZJM-2SGm1-AAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
  description:
    "Gautam Buddha University (GBU), Greater Noida is a state government university established by the Government of Uttar Pradesh, offering full-time 4-year B.Tech programs.\n\n" +
    "Branches: Computer Science & Engineering, Information Technology, Electronics & Communication Engineering, Electrical Engineering, Mechanical Engineering, Civil Engineering.\n\n" +
    "Admission (2025): Through JEE Main / CUET-UG / University Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹1.5–1.8 lakh per year.\n\n" +
    "Hostel + Mess Fees: ~₹70,000–1 lakh per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹4–6 LPA.\n" +
    "Highest package: ₹20+ LPA.\n\n" +
    "Campus Facilities: Fully residential campus, hostels, mess, Wi-Fi-enabled campus, central library, modern labs, sports complex, and medical facilities.",
},
{
  name: "Gurugram University, Gurugram",
  image: "https://tse2.mm.bing.net/th/id/OIP.NKyh73Uw-vHoDOVgB9bIMAHaC7?rs=1&pid=ImgDetMain&o=7&rm=3",
  description:
    "Gurugram University is a Haryana state government university established to provide affordable higher education in the NCR region. It offers engineering and technology programs through its university departments and affiliated government colleges.\n\n" +
    "Branches: Computer Science & Engineering, Electronics & Communication Engineering, Mechanical Engineering, Electrical Engineering, Civil Engineering.\n\n" +
    "Admission (2025): Through JEE Main + Haryana State Counselling / University-level counselling.\n\n" +
    "B.Tech Fees (2025): ~₹1–1.3 lakh per year.\n\n" +
    "Hostel + Mess Fees: ~₹50,000–80,000 per year (limited hostel availability).\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹3–5 LPA.\n" +
    "Highest package: ₹10–12 LPA.\n\n" +
    "Campus Facilities: Government campus, classrooms, laboratories, library, Wi-Fi-enabled campus, sports facilities, and basic student amenities.",
},

]
  
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
    { title: "Other Government Colleges & Universities of Delhi NCR", data: others },
  ]

  return (
    <section className="min-h-screen bg-black text-white py-14 px-4 md:px-10">
      {/* MAIN HEADING */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-500 mb-14 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        State Government Universities & Colleges
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
