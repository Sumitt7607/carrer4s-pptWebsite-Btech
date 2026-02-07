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
    "Jamia Millia Islamia (New Delhi) offers a 4-year B.Tech program in multiple branches.\n\n" +
    "Branches: Computer Engineering, Electronics & Communication, Electrical Engineering, Mechanical, Civil, etc.\n\n" +
    "Admissions: Through JEE Main (2025) + counselling.\n\n" +
    "B.Tech Tuition Fees (2025): ~₹76,900 total (4 years) / ₹64,600 approx indicative. \n\n" +
    "Hostel + Mess Fees: ~₹25,550–₹28,350 per year. \n\n" +
    "JEE Main Cutoff (2025): ~17,752 – 81,088 (General All-India rank range).\n\n" +
    "Placements (2025): Median package ~₹13.78 LPA; Highest ~₹59.91 LPA. Top recruiters include Accenture, KPMG, TCS, etc. "
},

{
  name: "Aligarh Muslim University",
  image: "/alli.png",
  description:
    "Aligarh Muslim University (AMU), Aligarh offers a 4-year B.Tech program.\n\n" +
    "Branches: Computer Engineering, Electrical Engineering, Electronics Engineering, Mechanical Engineering, Civil Engineering.\n\n" +
    "Admission (2025): Through AMUEEE (Aligarh Muslim University Engineering Entrance Exam).\n\n" +
    "B.Tech Fees (2025): ~₹50,000–60,000 total (4 years).\n\n" +
    "Hostel + Mess Fees: ~₹30,000–40,000 per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹5–7 LPA.\n" +
    "Highest package: ₹25+ LPA (overall).\n\n" +
    "Top Recruiters: TCS, Infosys, Wipro, Samsung, Tech Mahindra.\n\n" +
    "Campus Facilities: Large residential campus, multiple hostels, Wi-Fi, central library, labs, sports complexes, and university hospital."
},

{
  name: "Central University of Rajasthan",
  image: "/rajs.png",
  description:
    "Central University of Rajasthan (CURAJ), Ajmer offers a 4-year B.Tech program.\n\n" +
    "Branches: Computer Science & Engineering, Electronics & Communication Engineering.\n\n" +
    "Admission (2025): Through JEE Main + JoSAA/CSAB Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹2.0–2.2 lakh total (4 years).\n\n" +
    "Hostel + Mess Fees: ~₹35,000–45,000 per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹4–6 LPA.\n" +
    "Highest package: ₹20+ LPA (overall).\n\n" +
    "Campus Facilities: Fully residential campus, hostels, mess, Wi-Fi, labs, central library, sports facilities, and medical unit."
},


{
  name: "Central University of Haryana",
  image: "/cuhar.webp",
  description:
    "Central University of Haryana (CUH), Mahendergarh offers a 4-year B.Tech program.\n\n" +
    "Branches: Computer Science & Engineering, Electrical Engineering, Civil Engineering, Printing & Packaging Technology.\n\n" +
    "Admission (2025): Through JEE Main + JoSAA/CSAB counselling.\n\n" +
    "B.Tech Fees (2025): ~₹2.06 lakh total (4 years).\n\n" +
    "Hostel + Mess Fees: ~₹30,000–40,000 per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹3–4 LPA.\n" +
    "Highest package: ₹30+ LPA (UG overall).\n\n" +
    "Campus Facilities: Fully residential campus with hostels, Wi-Fi, central library, labs, sports facilities, and 24×7 security."
},


{
  name: "Central University of Jammu",
  image: "/cujam.jpg",
  description:
    "Central University of Jammu (CUJ), Jammu offers a 4-year B.Tech program.\n\n" +
    "Branches: Computer Science & Engineering, Electronics & Communication Engineering.\n\n" +
    "Admission (2025): Through JEE Main + JoSAA/CSAB Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹3.5–3.9 lakh total (4 years).\n\n" +
    "Hostel + Mess Fees: ~₹60,000–90,000 per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹3.5–5 LPA.\n" +
    "Highest package: ₹15+ LPA (overall).\n\n" +
    "Campus Facilities: Fully residential campus with hostels, mess, Wi-Fi, library, labs, sports facilities, and health center."
},

{
  name: "Central University of Karnataka",
  image: "/cukar.jpg",
  description:
    "Central University of Karnataka (CUK), Kalaburagi offers a 4-year B.Tech program.\n\n" +
    "Branches: Computer Science & Engineering, Electronics & Communication Engineering.\n\n" +
    "Admission (2025): Through JEE Main + JoSAA/CSAB Counselling.\n\n" +
    "B.Tech Fees (2025): ~₹1.4–1.6 lakh total (4 years).\n\n" +
    "Hostel + Mess Fees: ~₹30,000–40,000 per year.\n\n" +
    "Placements (2025):\n" +
    "Average package: ₹4–6 LPA.\n" +
    "Highest package: ₹18+ LPA (overall).\n\n" +
    "Campus Facilities: Fully residential campus with modern hostels, mess, Wi-Fi, library, labs, sports facilities, and campus security."
},
{
  name: "Assam University, Silchar",
  image: "https://d13loartjoc1yn.cloudfront.net/upload/institute/images/large/170227123358_Assam-University-Silchar-1.webp",
  description:
    "Assam University, Silchar is a central university in Assam offering affordable 4-year B.Tech programs with a focus on core engineering education and regional development.\n\n" +
    "Branches: Computer Science & Engineering, Electronics & Communication Engineering, Agricultural Engineering.\n\n" +
    "Admission (2025): Through CUET-UG (Engineering) as per central university admission norms.\n\n" +
    "B.Tech Fees (2025): ~₹35,000–45,000 total (for 4 years, tuition only).\n\n" +
    "Hostel + Mess Fees: ~₹20,000–30,000 per year.\n\n" +


    "• CSE average: ~₹3.8–4.5 LPA\n" +
    "• Median package: ~₹3.2 LPA\n" +
    "• Highest package: ~₹10–12 LPA (very few cases)\n\n" +
    "Top Recruiters: TCS, Infosys, Wipro, Tech Mahindra, local PSU & regional companies.\n\n" +
    "Campus Facilities: Large green campus with hostels, mess, Wi-Fi, central library, laboratories, sports facilities, and health center."
},
{
  name: "Birla Institute of Technology, Mesra",
  image: "https://4.bp.blogspot.com/-qHS6-Yzu20I/WKGCIMnhi3I/AAAAAAAAHNo/wErJYupAY04_4Y5FGbVH4lTACX1VuEeTQCLcB/s1600/Birla-Institute-of-Technology-Mesra-Ranchi.jpg",
  description:
    "Birla Institute of Technology (BIT), Mesra is a government-funded deemed university in Ranchi, Jharkhand, known for strong engineering programs, excellent infrastructure, and good industry connections.\n\n" +
    "Branches: Computer Science & Engineering, Information Technology, Electronics & Communication Engineering, Mechanical Engineering, Civil Engineering, and many interdisciplinary options.\n\n" +
    "Admission (2025): Through JEE Main rank via JoSAA/CSAB counselling.\n\n" +
    "B.Tech Fees (2025): ~₹13.3–16.8 lakh total for 4 years (tuition + other academic fees) depending on branch and components. Hostel + mess fees: ~₹0.84–1.0 lakh per year.\n\n" +
    "Placements (2024–25):\n" +
    "• Overall average package: ~₹11.5–11.8 LPA, with stronger averages for CSE/IT (~₹15–20 LPA).\n" +
    "• Median package: ~₹8.8–9.2 LPA (mid-range outcome).\n" +
    "• Highest package: Up to ₹1.45 crore per annum (very rare top offer).\n\n" +
    "Top Recruiters: Microsoft, Amazon, Deloitte, Infosys, Wipro, TCS, Cognizant, Rubrik, KPMG, Cipla, L&T and others, with broad participation across IT, consulting, core, and analytics roles.\n\n" +
    "Campus Facilities: Large 780-acre campus with residential hostels, central library, advanced labs, sports complexes, auditorium, clubs, and cultural & technical societies.",
},
{
  name: "Gurukula Kangri Vishwavidyalaya",
  image: "https://edufever.in/colleges/wp-content/uploads/2024/11/Gurukula-Kangri.webp",
  description:
    "Gurukula Kangri Vishwavidyalaya (GKV), Haridwar is a well-established central-government-recognized university offering B.Tech programs with a focus on ethical education, traditional values, and core engineering fundamentals.\n\n" +
    "Branches: Computer Science & Engineering, Electronics & Communication Engineering, Electrical Engineering, Mechanical Engineering (varies by intake).\n\n" +
    "Admission (2025): Through JEE Main rank via JoSAA/CSAB counselling.\n\n" +
    "B.Tech Fees (2025): ~₹2.5–3.6 lakh total tuition for full 4 years (~₹62,000–₹90,000 per year) depending on branch and fee structure. Hostel + mess fees: ~₹30,000–45,000 per year (approx).\n\n" +

    "• Overall average package: ~₹3.8–4.5 LPA (typical across branches)\n" +
    "• CSE / ECE average placement: ~₹4.5–5.2 LPA\n" +
    "• Median package: ~₹3.8–4.0 LPA (according to NIRF/placement reports)\n" +
    "• Highest package: ~₹10–12 LPA (few cases)\n\n" +
    "Top Recruiters: TCS, Infosys, Wipro, Tech Mahindra, HCL and local/regional employers across IT and engineering domains. Off-campus opportunities are common.\n\n" +
    "Campus Facilities: Residential campus with hostels, Wi-Fi, central library, laboratories, sports facilities, student clubs, and placement support.",
},
{
  name: "Indian Institute of Carpet Technology (IICT), Bhadohi",
  image: "https://tse4.mm.bing.net/th/id/OIP.VjQUQqMV1w_gknDUxYmyvwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
  description:
    "Indian Institute of Carpet Technology (IICT), Bhadohi is a government-funded technical institute under the Ministry of Textiles, Govt. of India, offering specialized engineering education in Carpet & Textile Technology. It is one of the few institutes in Asia dedicated to technical and research support for the carpet and textile industry. Admissions are based on JEE Main rank via JoSAA/CSAB counselling or UPTAC for lateral entry\n\n" +
    "Branch: B.Tech in Carpet & Textile Technology (4 years).\n\n" +
    "Admission (2025): Through JEE Main rank via JoSAA/CSAB counselling; lateral entry via UPTAC (AKTU) for eligible candidates.\n\n" +
    "B.Tech Fees (2025): ~₹3.26 lakh total for the full 4-year program (tuition, development, and other academic charges). Hostel charges ~₹23,725 annually (approx).\n\n" +
    "Placements (2024–25):\n" +
    "• Overall average/median package: ~₹3.0–3.5 LPA (typical outcome based on historical data).\n" +
    "• Highest reported package: ~₹7.5–10 LPA (rare, based on older placement reports).\n\n" +
    "Top Recruiters: Carpet and textile manufacturing companies, regional textile firms, export houses, and technical service providers",
 
},
{
  name: "Institute of Infrastructure, Technology, Research and Management (IITRAM)",
  image: "https://tse3.mm.bing.net/th/id/OIP.WcX_J2pYsCeMQQ4hlGS6JgHaFj?rs=1&pid=ImgDetMain&o=7&rm=3",
  description:
    "The Institute of Infrastructure, Technology, Research and Management (IITRAM), Ahmedabad is an autonomous government-funded state university offering 4-year B.Tech programs with a focus on engineering and infrastructure." +
    
    "Admission (2025): Through JEE Main + JoSAA/CSAB counselling and ACPC (Gujarat state counselling) based on merit / rank.\n\n" +
    "B.Tech Fees (2025):\n" +
    "• Total tuition (approx): ~₹4.8–5.9 lakh for full 4 years (~₹1.2–1.48 lakh per year).\n\n" +
    "Hostel + Mess Fees: ~₹40,000–60,000 per year (approx, campus/hostel dependent).\n\n" +
 
    "• Overall median/average package: ~₹4.5–4.9 LPA (per NIRF/placement reports).\n" +
    "• Typical placement rate: ~70–85% of eligible UG students.\n" +
    "• Highest packages (rare): ~₹12–15+ LPA (very limited).\n\n" +
    "Top Recruiters: TCS, Infosys, Wipro, Cognizant, Adani, Siemens, Tata Motors and other mass-hiring IT, infrastructure and core sector recruiters.\n\n" +
    "Campus Facilities: Urban campus with labs, Wi-Fi, library, sports areas, research centres, and dedicated placement support.",
},
{
  name: "School of Studies in Engineering & Technology, Guru Ghasidas Vishwavidyalaya",
  image: "https://www.ggu.ac.in/media/BasePageImage/main-gate.jpg",
  description:
    "The School of Studies in Engineering & Technology at Guru Ghasidas Vishwavidyalaya (GGV), Bilaspur (Chhattisgarh).\n\n" +
    "Branches: Computer Science & Engineering, Electronics & Communication Engineering, Electrical Engineering, Mechanical Engineering, Civil Engineering.\n\n" +
    "Admission (2025): Through JEE Main rank via JoSAA/CSAB counselling and/or state-level counselling for Chhattisgarh quota seats (CG PET).\n\n" +
    "B.Tech Fees (2025): ~₹30,000–60,000 per year (tuition only; central/state university fee structure).\n\n" +
    "Hostel + Mess Fees: ~₹20,000–35,000 per year (varies by hostel and room type).\n\n" +

    "• Overall average package: ~₹3.2–4.0 LPA\n" +
    "• CSE / ECE average: ~₹4.2–5.0 LPA\n" +
    "• Median package: ~₹3.5 LPA\n" +
    "• Highest package: ~₹10–12 LPA (very few students)\n\n" +
    "Top Recruiters: TCS, Infosys, Wipro, Tech Mahindra, local PSUs, and regional industry placements.\n\n" +
    "Campus Facilities: Large residential campus with hostels, Wi-Fi, central library, laboratories, auditorium, sports facilities, and medical support.",
},
{
  name: "J.K. Institute of Applied Physics & Technology (Department of Electronics & Communication), University of Allahabad",
  image: "https://www.jkinstitute.ac.in/Images/Images/jkm.jpg",
  description:
    "J.K. Institute of Applied Physics & Technology (JKIAPT), established in 1956.\n\n" +
    "Branches: Electronics & Communication Engineering (ECE), Computer Science & Engineering with major in Artificial Intelligence (CSE-AI) \n\n" +
    "Admission (2025): Through JEE Main rank via JoSAA/CSAB counselling. Cutoff closing ranks for ECE in 2025 Round 6 were around ~53,000–64,000 (General) and for CSE-AI ~28,000–49,000 (General).\n\n" +
    "B.Tech Fees (2025): ~₹1.42–3.84 lakh total for the full 4-year program (tuition). Hostel fees ~₹40,000 per year.\n\n" +

    "• Placement rate: ~70–75% of eligible students.\n" +
    "• Average package: ~₹3.8–4.5 LPA (some reports around ₹4 LPA).\n" +
    "• Median package: ~₹4.0–4.5 LPA.\n" +
    "• Highest package: ~₹7–8 LPA (typical on-campus range).\n\n" +
    "Top Recruiters: TCS, Infosys, Wipro, HCL, IBM and other mass-hiring companies (placements vary yearly).\n\n" +
    "Campus Facilities: Urban campus on the University of Allahabad grounds with labs, library, Wi-Fi, student clubs, and cultural & technical activities.",
},

{
  name: "National Institute of Electronics and Information Technology (NIELIT), Aurangabad",
  image: "https://images.shiksha.com/mediadata/images/1619677874phpNsQFvi_1280x960.jpg",
  description:
    "National Institute of Electronics and Information Technology (NIELIT), Aurangabad is a government-funded technical institute under the Ministry of Electronics & Information Technology, Government of India,\n\n" +
    "Branches: B.Tech in Electronics System Engineering and Computer Science & Engineering \n\n" +
    "Admission (2025): Through JEE Main rank via JoSAA/CSAB counselling for B.Tech programs.\n\n" +
    "B.Tech Fees (2025): ~₹4.0–4.5 lakh total tuition for full 4 years (~₹1.0–1.15 lakh per year approx).:\n\n" +
    "Hostel + Mess Fees: ~₹80,000–1.0 lakh per year (approx, varies by room and block).\n\n" +

    "• Overall average package: ~₹4.0–4.5 LPA (batch-wide, moderate),\n" +
    "• CSE/ECE average (higher end): ~₹5.0–6.0 LPA (report dependent),\n" +
    "• Median package: ~₹4.0 LPA,\n" +
    "• Highest package (limited): ~₹18–25 LPA (rare top offers in select roles).\n\n" +
    "Top Recruiters: TCS, Wipro, Infosys, Bosch, Siemens, Bajaj, L&T Infotech, Voltas, and local/regional engineering firms during campus drives",

},
{
  name: "National Institute of Advanced Manufacturing Technology (NIAMT), Ranchi",
  image: "https://www.vidyavision.com/CollegeUploads/Photos/2023-02-5-12-59-27_niamt%20campus.jpg",
  description:
    "National Institute of Advanced Manufacturing Technology (NIAMT), Ranchi (formerly NIFFT) is a premier public engineering and manufacturing institute established in 1966. \n\n" +
    "Branches: Mechanical Engineering, Metallurgy & Materials Engineering, Production & Industrial Engineering, Computer Engineering (B.Tech), and related manufacturing disciplines. \n\n" +
    "Admission (2025): Through JEE Main rank via JoSAA/CSAB counselling for B.Tech programs. :\n\n" +
    "B.Tech Fees (2025): Approximately ₹3.0–4.5 lakh total for the full 4-year B.Tech program (centrally funded subsidised fees with hostel charges additional.\n\n" +

    "• Overall average package: ~₹7.1–7.4 LPA across core branches (Mechanical/Metallurgy etc.) \n" +
    "• Median package: ~₹9.5 LPA (batch-wide, per recent NIRF report) \n" +
    "• Highest package: ₹13.95–15 LPA (domestic and international) \n" +
  
    "Top Recruiters: Core and manufacturing firms like Tata Motors, JSW Group, Vedanta, L&T, Cummins, BHEL, and other heavy engineering and industrial sector companies participate in campus drives. \n\n" +
    "Campus Facilities: Fully residential campus at Hatia (Ranchi) with hostels, laboratories, advanced workshops, library, sports infrastructure.",
},
{
  name: "Sant Longowal Institute of Engineering & Technology (SLIET), Longowal",
  image: "https://www.addressguru.in/images/348233541.jpg",
  description:
    "(SLIET), Longowal is a centrally funded deemed-to-be university established by the Government of India offering quality undergraduate and postgraduate engineering programs.\n\n" +
    "Branches: Computer Science & Engineering, Electronics & Communication Engineering, Mechanical Engineering, Civil Engineering, Chemical Engineering and more.\n\n" +
    "Admission (2025): Through JEE Main rank via JoSAA/CSAB counselling (SET entrance options may also apply for some programs).\n\n" +
    "B.Tech Fees (2025): ~₹2.1–2.6 lakh total tuition for the full program (≈₹52,000–₹65,000 per year). Hostel + mess fees: ~₹22,000–₹40,000 per year (approx).\n\n" +

    "• Overall median package: ~₹4.0 LPA (UG B.Tech).\n" +
    "• Branch averages: CSE ~₹5–6 LPA, ECE/Mechanical ~₹4–5 LPA, Chemical ~₹3.5–4.0 LPA (approx, varies by department).\n" +
    "• Highest package (recent on-campus): ~₹18–20+ LPA (few cases).\n\n" +
    "Top Recruiters: TCS, Cognizant, Infosys, HCL, IBM, Mahindra, L&T Infotech, Reliance, Samsung, Honda, and others (depending on year)\n\n" +
    "Campus Facilities: Fully residential campus with hostels, Wi-Fi, central library, laboratories, sports complexes, student clubs, ",
},

{
  name: "Mizoram University, Aizawl",
  image: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/77/2018/1/9/Mizoram-University-Aizawl-(2).jpg",
  description:
    "Branches: Computer Engineering, Information Technology, Electronics & Communication Engineering, Electrical Engineering, Civil Engineering.\n\n" +
    "Admission (2025): Through JEE Main + JoSAA/CSAB counselling; some seats may also be filled via MZU-SET (Mizoram University Engineering Entrance) partly alongside JEE Main.\n\n" +
    "B.Tech Fees (2025): ~₹1.9–2.1 lakh total tuition for 4 years (~₹47,000–₹53,000 per year). Hostel + mess fees are very low (~₹5,000–₹10,000 per year).\n\n" +
    "Placements (2024–25):\n" +
    "• Placement rate: ~45% of eligible students; varies by branch.\n" +
    "• Average package: ~₹4.8–5.0 LPA (overall).\n" +
    "• Highest package: ~₹12–14 LPA (limited cases).\n" +
    "• Median package: ~₹4–5 LPA (typical for UG tech).\n\n" +
    "Top Recruiters: Wipro, TCS, Infosys, Cognizant, HCL, Power Grid Corporation, Airtel, Accenture etc.\n\n" +
    "Cutoffs (JEE Main 2025):\n" +
    "• Computer Engineering: ~58,000–75,000 (early rounds), closing as high as ~226,000 in later rounds.\n" +
    "• IT / ECE / Electrical / Civil: Closing ranks in the range of ~60,000–390,000 (varies by branch and round).\n\n" +
    "Campus Facilities: Urban hilltop campus with hostels, Wi-Fi, central library, labs, sports grounds, health services, and cultural & technical clubs. ",
},
{
  name: "School of Planning and Architecture (SPA), Bhopal",
  image: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/273/2018/2/13/SPA-Bhopal-6.png",
  description:
    " (SPA), Bhopal is a centrally funded premier institute established by the Government of India, specializing in planning, architecture.\n\n" +
    "Undergraduate Programs: B.Arch (Bachelor of Architecture) and B.Plan (Bachelor of Planning) — SPA Bhopal does *not* offer a traditional B.Tech. Its undergraduate focus is on B.Arch and B.Plan, \n\n" +
    "Admission (2025):\n" +
    "• **B.Arch:** Through NATA / JEE Main Paper 2 + JoSAA counselling.\n" +
    "• **B.Plan:** Through JEE Main Paper 1 + JoSAA counselling.\n\n" +
    "Fee Structure (2025):\n" +
    "• Tuition fees (approx): ~₹1.8–2.4 lakh per year (varies by program and student category).\n" +
    "• Hostel + Mess Fees: ~₹35,000–₹45,000 per year (approx).\n\n" +

    "• Overall average package (B.Plan / B.Arch): ~₹5.0–6.5 LPA.\n" +
    "• Median package: ~₹5.0 LPA.\n" +
    "• Highest package: ~₹12–15 LPA (few offers).\n\n" +
    "Top Recruiters: L&T, JLL, NBCC, CPWD, RSP, HCP, DMRC, AECOM, Gensler, HKS, various planning/consulting firms and architectural studios.\n\n" +
    "Campus Facilities: Modern urban residential campus with studios, design labs, workshops, drawing halls, computer labs, central library, auditorium, student clubs etc",
},
{
  name: "School of Planning and Architecture (SPA), New Delhi",
  image: "https://www.addressguru.in/images/1768569739.jpg",
  description:
    " (SPA), New Delhi is an Institution of National Importance established by the Government of India, .\n\n" +
    "Undergraduate Programs: Bachelor of Architecture (B.Arch — 5 years), Bachelor of Planning (B.Plan — 4 years).\n\n" +
    "Admission (2025): Through JEE Main Paper-2 (B.Arch) and Paper-1 (B.Plan) followed by JoSAA/CSAB counselling.\n\n" +
    "Fees (2025–26):\n" +
    "• B.Arch total tuition: ~₹4.7–5.2 lakh for full course (5 years).\n" +
    "• B.Plan total tuition: ~₹3.8–4.2 lakh for full course (4 years).\n" +
    "Hostel fees: ~₹28,000 per year (room) + mess charges.\n\n" +
 
    "• B.Arch median package: ~₹7.5 LPA.\n" +
    "• B.Plan median package: ~₹5.23 LPA.\n" +
    "• UG average package: ~₹6 LPA.\n" +
    "• Highest packages for UG students can reach ~₹12–20 LPA (limited cases).\n\n" +
    "Top Recruiters: AECOM, WSP, Atkins, L&T, UMTC, Infosys, Deloitte, and firms in architecture, planning, and infrastructure sectors.\n\n" +


    "Campus Facilities: Urban campus with studios, design and planning labs, workshops, central library, auditorium, student clubs etc",
},
{
  name: "School of Planning and Architecture (SPA), Vijayawada",
  image: "https://assets.architecturaldigest.in/photos/60083511274aca243711be36/master/w_1600%2Cc_limit/School-of-Planning-and-Architecture-Vijayawada-3.jpg",
  description:
    " (SPA), Vijayawada is an Institution of National Importance established by the Government of India . \n\n" +
    "Undergraduate Programs: Bachelor of Architecture  and Bachelor of Planning .\n\n" +
    "Admission (2025):\n" +
    "• **B.Arch:** Through NATA / JEE Main Paper-2 followed by JoSAA/CSAB counselling.\n" +
    "• **B.Plan:** Through JEE Main Paper-1 followed by JoSAA/CSAB counselling.\n\n" +
    "Fees (2025–26):\n" +
    "• **B.Arch tuition:** ~₹4.5–5.0 lakh total for 5 years.\n" +
    "• **B.Plan tuition:** ~₹3.8–4.2 lakh total for 4 years.\n" +
    "• **Hostel + Mess Fees:** ~₹30,000–₹40,000 per year (approx).\n\n" +
  
    "• **B.Arch median package:** ~₹7–8 LPA.\n" +
    "• **B.Plan median package:** ~₹5–6 LPA.\n" +
    "• **UG average package:** ~₹6–6.5 LPA.\n" +
    "• **Highest packages:** ~₹12–18 LPA (limited offers).\n\n" +
    "Top Recruiters: AECOM, ATKINS, L&T, CPWD, NBCC, Arup, HCP, Infosys, consultants, and infrastructure firms.\n\n" +
    "Campus Facilities: Fully urban residential campus with studios, design labs, computer labs, central library, workshops, sports facilities etc.",
},
{
  name: "Shri Mata Vaishno Devi University (SMVDU), Katra",
  image: "https://www.static-contents.youth4work.com/university/Documents/Colleges/CollegeImages/9b3500da-171f-4779-ab66-3578b8363ab4.jpg",
  description:
    "(SMVDU), Katra is a Central University established by the Government of India and Government of J&K offering engineering and multidisciplinary programs .\n\n" +
    "Branches: Computer Science & Engineering, Electronics & Communication Engineering, Electrical Engineering, Mechanical Engineering, Civil Engineering.\n\n" +
    "Admission (2025): Through JEE Main + JoSAA/CSAB counselling for B.Tech programs. SMVDU also reserves seats under state and home-university quotas.\n\n" +
    "B.Tech Fees (2025):\n" +
    "• Tuition: ~₹2.2–2.8 lakh per year (branch-dependent).\n" +
    "• Total tuition for 4 years: ~₹8.8–11.2 lakh.\n\n" +
    "Hostel + Mess Fees: ~₹40,000–₹60,000 per year.\n\n" +


    "• CSE average: ~₹6.5–7.2 LPA.\n" +
    "• Median package: ~₹5.2–5.8 LPA.\n" +
    "• Highest packages: ₹30+ LPA \n\n" +
    "Top Recruiters: TCS, Infosys, Wipro, Accenture, Capgemini, IBM, L&T Infotech, Deloitte, HP, and core engineering firms.\n\n" +
    "Campus Facilities: Modern residential campus with hostels, Wi-Fi, central library, advanced labs, sports facilities, auditoriums, research centres.",
},
{
  name: "International Institute of Information Technology (IIIT), Naya Raipur",
  image: "https://th.bing.com/th/id/OIP.3fqztNJoNopwc9b3TGslgwHaEB?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  description:
    " (IIIT), Naya Raipur is a government-established technical institute in Chhattisgarh with a focus on information technology, computer science.\n\n" +
    "Branches: Computer Science & Engineering (CSE), Electronics & Communication Engineering (ECE), Electronics & Electrical Engineering.\n\n" +
    "Admission (2025): Through JEE Main rank via JoSAA/CSAB counselling. IIIT Naya Raipur follows centralised counselling processes and state quota rules as applicable.\n\n" +
    "B.Tech Fees (2025):\n" +
    "• Tuition: ~₹1.5–2.5 lakh per year (branch & category dependent).\n" +
    "• Total tuition for full 4 years: ~₹6.0–10.0 lakh.\n\n" +
    "Hostel + Mess Fees: ~₹60,000–₹90,000 per year (approx, depending on hostel type).\n\n" +

 
    "• CSE / AI average: ~₹7.0–8.5 LPA.\n" +
    "• Median package: ~₹6.0 LPA.\n" +
    "• Highest packages (limited): ~₹22–28 LPA.\n\n" +
    "Top Recruiters: TCS, Infosys, Wipro, Deloitte, Cognizant, Capgemini, Accenture, L&T Infotech, Byju’s, and regional/IT consulting firms.\n\n" +
    "Campus Facilities: Fully residential campus with Wi-Fi, modern labs, library, sports facilities, auditorium, research centers.",
},
{
  name: "University of Hyderabad (UoH), Hyderabad",
  image: "https://1.bp.blogspot.com/-qyrxgJp6nQU/UN1jAg5rFhI/AAAAAAAADuk/23AYS6v7gN4/s1600/univhyd.jpg",
  description:
    " (UoH) is a central public university and a recognised Institution of Eminence located in Hyderabad, Telangana. It is a multidisciplinary university with strengths in sciences, humanities, social sciences, and technology. \n\n" +
    "Engineering Programmes: UoH offers **integrated engineering courses** — mainly 5-year Integrated B.Tech + M.Tech programs in Computer Science.\n\n" +
    "Admission (2025): Through **JEE Main rank via JoSAA/CSAB** for integrated engineering programmes. \n\n" +
    "Programme Duration: 5 years (Integrated B.Tech + M.Tech).\n\n" +
    "Fees (2025):\n" +
    "• Integrated B.Tech + M.Tech (Computer Science): ~₹1.97–2.0 lakh total tuition (for full 5 years).\n" +
    "• Integrated B.Tech + M.Tech (Materials Engineering): Similar fee structure (varies by batch intake).\n\n" +
    "Hostel + Mess Fees: Relatively low compared with private colleges (hostel charges vary yearly, often subsidised).\n\n" +

    
    
    "Campus Facilities: Extensive green campus with central library, research labs, hostels, sports facilities, cultural clubs."
},
{
  name: "Punjab Engineering College (PEC), Chandigarh",
  image: "https://gyaanarth.com/wp-content/uploads/2022/06/1488191355phpZpAtvz.jpg",
  description:
    " is a premier government-linked engineering institution established in 1921 and granted Deemed-to-be-University status. PEC is known for strong academics, industry exposure, and consistent placements.\n\n" +
    "B.Tech Branches: Computer Science & Engineering, Electronics & Communication, Electrical, Mechanical, Civil, Aerospace, and Information Technology (IT intake varies).\n\n" +
    "Admission: Through JEE Main rank via JoSAA/CSAB counselling (DASA and reservation categories applicable).\n\n" +
    "Fees (Approx.): Tuition for 4 years ₹7.5–7.8 lakh; Hostel & Mess ₹25,000–40,000 per year.\n\n" +
    "Placements (Latest): Highest package ~₹61 LPA, Average ~₹13.6 LPA, Median ~₹12 LPA.\n\n" +
    "Top Recruiters: Adobe, Amazon, Microsoft, Goldman Sachs, DE Shaw, Cisco, Accenture, Deloitte, L&T, TCS.\n\n" +
    "Campus: Urban campus with modern labs, hostels, library, sports facilities, active technical societies, and a dedicated Training & Placement Cell."
},

{
  name: "Jawaharlal Nehru University (JNU), New Delhi",
  image: "https://jnu.ac.in/sites/default/files/sis_slider1_0.png",
  description:
    " is a central public research university. JNU does not offer a regular 4-year B.Tech program.\n\n" +
    "Key Programs: Integrated M.Sc./M.Tech (Computational & Data Sciences), Integrated M.Sc. (Mathematical Sciences), MCA, and research-oriented MSc/PhD programs.\n\n" +
    "Admission: Through JNUEE / university-level entrance exams.\n\n" +
    "Fees (2025): Tuition ₹1,000–3,000 per year; Hostel ₹600–2,400 per year; Mess ~₹2,500–3,500 per month.\n\n" +
    "Placements: Average ₹4–7 LPA (science/tech); top roles may exceed ₹10 LPA. Many students pursue higher studies.\n\n" +
    "Campus: Fully residential campus with hostels, library, research labs, and strong academic culture."
},



{
  name: "International Institute of Information Technology, Bhubaneswar (IIIT-Bhubaneswar)",
  image: "https://education.indianexpress.com/storage/images/4645814d4e59dac60265.jpg",
  description:
    " is a government-funded technical university established in 2006 by the Government of Odisha, focused on IT and engineering education.\n\n" +
    "Branches: CSE, IT, Computer Engineering, Electronics & Telecommunication, Electrical & Electronics.\n\n" +
    "Admission (2025): Through JEE Main rank via JoSAA/CSAB counselling.\n\n" +
    "Fees (Approx): Tuition ₹1.6–2.5 lakh per year; Hostel + Mess ₹60,000–90,000 per year.\n\n" +
    "Placements (Latest): Average ~₹8.5 LPA, Median ~₹7.5 LPA, Highest ~₹56 LPA (top outliers), ~90% placement rate.\n\n" +
    "Recruiters: Amazon, Oracle, Dell, Virtusa, Infosys, and major IT & tech firms."
},

{
  name: "Central Institute of Technology (CIT), Kokrajhar",
  image: "https://tse2.mm.bing.net/th/id/OIP.nEEKNA4Mbj_2Vu1NCzueFgHaEy?rs=1&pid=ImgDetMain&o=7&rm=3",
  description:
    " is a government-supported autonomous technical institute established in 2006 in Assam, offering engineering and design programs.\n\n" +
    "Branches: CSE, ECE, Civil, Instrumentation, Food Engineering & Technology.\n\n" +
    "Admission (2025): Through JEE Main / CITDEE via JoSAA/CSAB counselling.\n\n" +
    "Fees (Approx): Total B.Tech tuition ₹1.7–1.8 lakh (4 years); Hostel + Mess ₹8,000–12,000 per year.\n\n" +
    "Placements: Average ₹4–4.5 LPA, Highest ₹10–12 LPA; placement rate ~50–65% (varies by year).\n\n" +
    "Recruiters: TCS, Infosys, Wipro, ONGC, Assam Power, and select IT/core firms."
},

{
  name: "Ghani Khan Choudhury Institute of Engineering & Technology (GKCIET), Malda",
  image: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/9038/2021/7/20/Campus%20View%20of%20Ghani%20Khan%20Choudhury%20Institute%20of%20Engineering%20And%20Technology%20Malda_Campus-View.png",
  description:
    " is a centrally funded autonomous technical institute established in 2010 under the Ministry of Education, Government of India.\n\n" +
    "Branches: CSE, ECE, Electrical, Civil, Mechanical.\n\n" +
    "Admission (2025): Through JEE Main rank via JoSAA/CSAB counselling.\n\n" +
    "Fees (Approx): Tuition ₹1.6–2.0 lakh per year (₹6.4–8.0 lakh total); Hostel + Mess ₹35,000–50,000 per year.\n\n" +
    "Placements: Average ₹4.5–5.5 LPA, Median ₹4.2–4.8 LPA, Highest ₹12–15 LPA; placement rate ~60–75%.\n\n" +
    "Recruiters: TCS, Infosys, Wipro, Cognizant, Capgemini, Tech Mahindra, L&T Infotech, and select core/PSU-linked firms."
},
{
  name: "National Institute of Food Technology Entrepreneurship and Management (NIFTEM), Kundli",
  image: "https://media.getmyuni.com/azure/college-images-test/national-institute-of-food-technology-entrepreneurship-and-management-niftem-sonepat/f085ff4d53824bada747a843892817e0.jpeg",
  description:
    " is an Institute of National Importance under the Ministry of Food Processing Industries, Government of India, focused on food technology, innovation, and entrepreneurship.\n\n" +
    "Program: B.Tech in Food Technology & Management / Food Science & Technology.\n\n" +
    "Admission (2025): Through JEE Main rank via JoSAA/CSAB counselling.\n\n" +
    "Fees (Approx): Total B.Tech tuition ~₹7.9 lakh (4 years); Hostel + Mess ~₹22,000–25,000 per semester.\n\n" +
    "Placements: Median ~₹7.1 LPA, Average ~₹7–8 LPA, Highest ~₹25 LPA; placement rate ~55–80% (varies by year).\n\n" +
    "Recruiters: Nestlé, ITC, Amul, Mother Dairy, PepsiCo, HUL, Mondelez, and major food & FMCG firms."
},

{
  name: "North Eastern Regional Institute of Science and Technology (NERIST), Nirjuli",
  image: "https://img.jagranjosh.com/images/2024/January/312024/campus%20view1.jpg",
  description:
    " is a government-funded autonomous deemed-to-be-university established in 1984 under the Ministry of Education, Government of India.\n\n" +
    "Branches: CSE, ECE, Electrical, Mechanical, Civil, Agricultural Engineering.\n\n" +
    "Admission (2025): Through JEE Main / NEE-III followed by JoSAA/CSAB counselling (as applicable).\n\n" +
    "Fees (Approx): Total B.Tech tuition ~₹69,500 (full program); Hostel + Mess subsidised (nominal charges).\n\n" +
    "Placements (Latest): UG median ~₹6 LPA, PG median ~₹7 LPA; recruiters include Oil India, Tata Projects, Reliance, HCL, Wipro, TCS, IBM, Capgemini.\n\n" +
    "Campus: Fully residential campus with hostels, labs, library, sports facilities, and training & placement support."
},
{
  name: "Indian Institute of Handloom Technology (IIHT), Varanasi",
  image:"https://assets.collegedunia.com/public/image/IIHT_1st_5cd8a111f449a68077c6430ce3f28e5a.png",
  description:
    " is a government-run institute under the Ministry of Textiles, focused on handloom and textile engineering education.\n\n" +
    "Program: B.Tech in Handloom & Textile Technology (4 years).\n\n" +
    "Admission (2025): Through JEE Main rank via JoSAA/CSAB counselling.\n\n" +
    "Fees (Approx): Total B.Tech tuition ~₹72,500 (4 years); Hostel ~₹28,000 per year.\n\n" +
    "Placements (Latest): Average ~₹1.5–2.1 LPA, Highest ~₹3 LPA; placement rate ~75–80% (opted students).\n\n" +
    "Recruiters: Shahi Exports, Himatsingka, Vardhman, Bhaskar Denim, FabIndia, and other textile & apparel firms."
},

{
  name: "Chhattisgarh Swami Vivekanand Technical University (CSVTU), Bhilai",
  image: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/65/2018/4/5/Chhattisgarh-Swami-Vivekanand-Technical-University-Bhilai-(2).jpg",
  description:
    " is a state government technical university established in 2005, overseeing engineering and professional programs through affiliated colleges across Chhattisgarh.\n\n" +
    "Programs: B.Tech (via affiliated colleges) in CSE, Mechanical, Civil, Electrical, ECE, IT, along with B.Arch, B.Pharm, MBA, MCA, M.Tech.\n\n" +
    "Admission (2025): Through JEE Main / CG PET via state counselling to individual affiliated colleges.\n\n" +
    "Fees (Approx): B.Tech tuition varies widely by college (~₹60,000 per year to higher in private colleges); Hostel + Mess ~₹40,000–90,000 per year.\n\n" +
    "Placements (Typical): Average ~₹4–6 LPA; top offers up to ~₹20–30 LPA (few cases); placement rate ~70–80% (varies by college).\n\n" +
    "Recruiters: TCS, Infosys, Wipro, Cognizant, Capgemini, Tech Mahindra, Amazon, Adani, and select core/industrial firms."
},

{
  name: "Institute of Chemical Technology – IndianOil Odisha Campus (ICT-IOC), Bhubaneswar",
  image: "https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/25506/2020/9/30/Campus%20view%20of%20Institute%20of%20Chemical%20Technology%20Mumbai%20Indian%20Oil%20Odisha%20Campus%20Bhubaneswar_Campus-View.jpg",
  description:
    " is an extension campus of ICT Mumbai, established in partnership with Indian Oil Corporation, focused on chemical engineering education and industry-oriented research.\n\n" +
    "Programs: 5-year Integrated M.Tech in Chemical Engineering, Executive M.Tech, and PhD programs.\n\n" +
    "Admission (2025): Through JEE Main rank via JoSAA/CSAB counselling (for Integrated M.Tech).\n\n" +
    "Fees (Approx): Tuition ~₹79,000 per year; Hostel ~₹45,000 per year; Mess ~₹30,000 per year.\n\n" +
    "Placements (Latest): Highest ~₹19.5 LPA; typical offers ~₹5–10 LPA; placement rate ~50–80% (varies by batch).\n\n" +
    "Recruiters: Indian Oil, GAIL, Adani Group, Tata Chemicals, Technip Energies, Praj Industries, Akzo Nobel, Deloitte."
},

{
  name: "North-Eastern Hill University (NEHU), Shillong",
  image: "https://tse4.mm.bing.net/th/id/OIP.AEEV--XLQk-XrtRxV8qXFQHaE_?w=622&h=419&rs=1&pid=ImgDetMain&o=7&rm=3",
  description:
    " is a central government university established in 1973, known for academics and research across science, engineering, and humanities.\n\n" +
    "B.Tech Branches: Information Technology, Energy Engineering, Biomedical Engineering, Electronics & Communication.\n\n" +
    "Admission (2025): Through JEE Main score via JoSAA/CSAB counselling.\n\n" +
    "Fees (Approx): Total B.Tech tuition ~₹18,900 (4 years); Hostel ~₹5,000–6,000 per year (mess extra).\n\n" +
    "Placements: Modest and program-dependent; many students pursue higher studies, research, or government roles rather than corporate placements.\n\n" +
    "Campus: Residential campus with hostels, library, labs, sports facilities, and a strong academic environment."
},

{
  name: "Institute of Engineering & Technology (IoET), Dr. H. S. Gour University, Sagar",
  image: "https://tse4.mm.bing.net/th/id/OIP.40leH3hOqV3nFDyrd3gwnAHaEk?rs=1&pid=ImgDetMain&o=7&rm=3",
  description:
    " is an AICTE-approved engineering institute established in 2022 under Dr. H. S. Gour Vishwavidyalaya (a central university).\n\n" +
    "Branches: CSE, ECE, Aeronautical, Dairy, Fashion & Apparel, Food Engineering.\n\n" +
    "Admission (2025): Through JEE Main rank via JoSAA/CSAB counselling.\n\n" +
    "Fees (Approx): Total B.Tech tuition ~₹5.1 lakh (4 years); Hostel & Mess as per central university norms (modest).\n\n" +
    "Placements (Typical): Average ~₹3.5–5.5 LPA; highest ~₹8–18+ LPA; placement rate ~40–60% (varies by branch).\n\n" +
    "Recruiters: TCS, Infosys, Wipro, IBM, Tech Mahindra, HDFC Bank, Axis Bank, and regional recruiters."
},
{
  name: "Birla Institute of Technology, Mesra – Deoghar Off-Campus",
  image: "https://tse4.mm.bing.net/th/id/OIP.0p7k--8dTK6ls9EVSSvTYwHaEM?rs=1&pid=ImgDetMain&o=7&rm=3",
  description:
    " is an off-campus centre of BIT Mesra, established in 2007 and fully governed academically by BIT Mesra.\n\n" +
    "Branches: CSE, EEE, ECE, Mechanical, Production Engineering.\n\n" +
    "Admission (2025): Through JEE Main rank via JoSAA/CSAB counselling.\n\n" +
    "Fees (Approx): Total B.Tech tuition ~₹9.9–13.2 lakh (4 years); Hostel ~₹1.4–1.5 lakh (total).\n\n" +
    "Placements (Latest): Average/Median ~₹6–10 LPA; Highest up to ~₹51 LPA (exceptional cases); placement rate ~60–90% (stronger in CSE/ECE).\n\n" +
    "Recruiters: Microsoft, Accenture, Deloitte, TCS, Infosys, Wipro, CGI, GlobalLogic, Adani Group, ZS Associates, Yamaha, Amdocs."
},

{
  name: "Birla Institute of Technology, Mesra – Patna Off-Campus",
  image: "https://tse2.mm.bing.net/th/id/OIP.y-v3v6B8soEAWHiceoxYtAHaD2?rs=1&pid=ImgDetMain&o=7&rm=3",
  description:
    " is an off-campus centre of BIT Mesra, established in 2006 at Patna and academically governed by the main BIT Mesra campus.\n\n" +
    "Branches: CSE, ECE, EEE, Mechanical, Civil, Information Technology.\n\n" +
    "Admission (2025): Through JEE Main rank via JoSAA/CSAB counselling.\n\n" +
    "Fees (Approx): B.Tech tuition ~₹9.8–10.6 lakh (4 years); Hostel + Mess ~₹60,000–90,000 per year.\n\n" +
    "Placements (Latest): Average ~₹6.6–7.1 LPA; Highest ~₹34–45 LPA (exceptional cases); placement rate higher in CSE compared to core branches.\n\n" +
    "Recruiters: Microsoft, Deloitte, Tata Steel, Infosys, Wipro, Cognizant, Capgemini, Adani Group, Genpact."
},

{
  name: "Indian Institute of Handloom Technology (IIHT), Salem",
  image: "https://admissionkaro.com/wp-content/uploads/2017/03/bms-institute-of-technology-bangalore-bmsit-fee.jpg",
  description:
    " is a government-run institute established in 1960, focused on handloom and textile engineering education.\n\n" +
    "Program: B.Tech in Handloom & Textile Technology (4 years).\n\n" +
    "Admission (2025): Through JEE Main or TNEA-based counselling.\n\n" +
    "Fees (Approx): Total B.Tech tuition ~₹86,000 (4 years); Hostel ~₹53,000 (approx).\n\n" +
    "Placements (Latest): Average ~₹2–3 LPA; Highest ~₹3.6–4 LPA.\n\n" +
    "Recruiters: Jay Jay Mills, Rajapalayam Mills, Shahi Exports, Gokuldas Exports, Best Corporation, and other textile firms."
},

{
  name: "Gati Shakti Vishwavidyalaya (GSV), Vadodara",
  image: "https://tse4.mm.bing.net/th/id/OIP.soIPsB1WsV7_vpjG7stCxAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
  description:
    " is a central university (est. 2022), earlier known as NRTI, focused on transportation, rail, logistics, and allied engineering fields.\n\n" +
    "Branches: Civil (Rail), Mechanical (Rail), Electrical (Rail), ECE (Rail), AI & Data Science (Transport & Logistics), Aviation Engineering.\n\n" +
    "Admission (2025): Through JEE Main rank via JoSAA/CSAB counselling.\n\n" +
    "Fees (Approx): Total B.Tech tuition ~₹6.74 lakh (4 years); Hostel ~₹29,000–44,000 per year.\n\n" +
    "Placements (Latest): Average ~₹7 LPA; Highest ~₹30 LPA (reported).\n\n" +
    "Campus: Urban campus with modern labs, hostels, library, industry-linked training, and strong rail & transport focus."
},

{
  name: "Central University of Jharkhand (CUJ), Ranchi",
  image: "https://media.getmyuni.com/azure/college-image/big/central-university-of-jharkhand-cuj-ranchi.webp",
  description:
    " is a central government university established in 2009, recently accredited with NAAC A+ grade.\n\n" +
    "Branches: B.Tech in Computer Science & Engineering, Electrical Engineering, Civil Engineering.\n\n" +
    "Admission (2025): Through JEE Main rank via JoSAA/CSAB counselling (limited intake per branch).\n\n" +
    "Fees (Approx): Total B.Tech tuition ~₹2.2–2.6 lakh (4 years); Hostel ~₹64,600 per year; One-time ~₹6,100.\n\n" +
    "Cutoffs (General): CSE ~65k, EEE ~77k, Civil ~80k.\n\n" +
    "Placements (Recent): Highest ~₹11.25 LPA; Average/Median ~₹3–4 LPA.\n\n" +
    "Recruiters: Wipro, Tata Group, ICICI Bank, HDFC Bank, Axis Bank, Asian Paints."
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
  className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-3 sm:px-6"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
>

          <motion.div
  className="
    relative 
    bg-[#111] 
    rounded-2xl 
    w-full 
    max-w-lg 
    max-h-[90vh] 
    overflow-hidden 
    border 
    border-orange-500/40
  "
  initial={{ scale: 0.85, y: 60 }}
  animate={{ scale: 1, y: 0 }}
  exit={{ scale: 0.85, y: 60 }}
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
              <div className="overflow-y-auto max-h-[90vh] p-5 sm:p-6">
              <h2 className="text-2xl font-bold text-orange-400 mb-2">
                {selectedCollege.name}
              </h2>

         <p className="whitespace-pre-line text-gray-300 text-sm leading-relaxed">
  {selectedCollege.description}
</p>
</div>

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
