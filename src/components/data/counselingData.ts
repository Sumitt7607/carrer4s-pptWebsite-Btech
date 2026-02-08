import { GraduationCap, Building2, Users, BookOpen, FileCheck, Calendar, MapPin, Award,  Landmark,University,Cpu } from "lucide-react";

export interface CounselingInfo {
  id: string;
  name: string;
  fullName: string;
  icon: string;
  description: string;
  organizingBody: string;
  eligibility: string[];
  totalSeats: number;
  participatingColleges: number;
  status: "Active" | "Upcoming" | "Completed";
  statusColor: string;
  website: string;


participatingInstitutes?: string[];



  admissionProcess?: {
    step: number;
    title: string;
    description: string;
    duration?: string;
  }[];

  seatMatrix?: {
    category: string;
    institution: string;
    seats: number;
    branches: string[];
  }[];

  requiredDocuments?: string[];

  feeStructure?: {
    type: string;
    amount: string;
    description: string;
  }[];

  importantDates?: {
    event: string;
    date: string;
    status: "Completed" | "Ongoing" | "Upcoming";
  }[];

  faqs?: {
    question: string;
    answer: string;
  }[];
}



export const counselingData: CounselingInfo[] = [
 {
  id: "josaa",
  name: "JoSAA",
  fullName: "Joint Seat Allocation Authority",
  icon: "GraduationCap",
  description:
    "JoSAA is the centralized admission and seat allocation process for IITs, NITs, IIEST, IIITs, and GFTIs in India based on JEE Main and JEE Advanced ranks.",

  organizingBody: "Ministry of Education, Government of India",

  eligibility: [
    "Valid JEE Main 2025 score for NITs, IIITs, and GFTIs",
    "Valid JEE Advanced 2025 rank for IITs",
    "Class 12 passed with Physics, Chemistry & Mathematics",
    "Age as per institute norms",
    "Minimum percentage as per institute rules"
  ],

  totalSeats: 62853,
  participatingColleges: 127,

  status: "Completed",
  statusColor: "bg-gray-500",

  website: "https://josaa.nic.in",

  admissionProcess: [
    { step: 1, title: "Registration", description: "Register using JEE credentials", duration: "June 2026" },
    { step: 2, title: "Choice Filling", description: "Fill institute & branch choices", duration: "June 2026" },
    { step: 3, title: "Seat Allotment", description: "Multiple rounds of allotment", duration: "June–July 2026" },
    { step: 4, title: "Reporting", description: "Report to allotted institute", duration: "July 2026" }
  ],

  seatMatrix: [
    {
      category: "IITs",
      institution: "Indian Institutes of Technology",
      seats: 17760,
      branches: ["CSE", "ECE", "EE", "ME", "CE", "Chemical"]
    },
    {
      category: "NITs",
      institution: "National Institutes of Technology",
      seats: 24229,
      branches: ["CSE", "ECE", "EEE", "ME", "CE", "IT"]
    },
    {
      category: "IIITs",
      institution: "Indian Institutes of Information Technology",
      seats: 8546,
      branches: ["CSE", "IT", "ECE", "AI & ML"]
    },
    {
      category: "GFTIs",
      institution: "Government Funded Technical Institutes",
      seats: 9402,
      branches: ["Various Engineering Branches"]
    }
  ],

  requiredDocuments: [
    "JEE Score Card",
    "JEE Admit Card",
    "Class 10 Mark Sheet",
    "Class 12 Mark Sheet",
    "Category Certificate (if applicable)",
    "Aadhar Card",
    "Passport Size Photographs"
  ],

  feeStructure: [
    {
      type: "Seat Acceptance Fee (General/OBC/EWS)",
      amount: "₹30,000",
      description: "Adjusted against institute fees"
    },
    {
      type: "Seat Acceptance Fee (SC/ST/PwD)",
      amount: "₹15,000",
      description: "Reduced fee"
    }
  ],


  faqs: [
    {
      question: "What does Freeze mean?",
      answer: "Freeze means you accept the allotted seat and exit further rounds."
    },
    {
      question: "Can I join CSAB after JoSAA?",
      answer: "Yes, if seats remain vacant after JoSAA."
    }
  ]
},


{
  id: "csab",
  name: "CSAB",
  fullName: "Central Seat Allocation Board – Special Rounds",
  icon: "Building2",
  description:
    "CSAB conducts Special Rounds for NITs, IIITs, and GFTIs to fill vacant seats after completion of JoSAA counselling, based on JEE Main ranks.",

  organizingBody: "Central Seat Allocation Board (Under Ministry of Education)",

  eligibility: [
    "Valid JEE Main score of the current year",
    "Candidates without JoSAA seat or those who withdrew",
    "Class 12 passed with Physics, Chemistry, Mathematics",
    "Minimum 75% marks or Top 20 percentile (as per JoSAA rules)"
  ],

  totalSeats: 8000,
  participatingColleges: 60,

  status: "Upcoming",
  statusColor: "bg-yellow-500",

  website: "https://csab.nic.in",

  admissionProcess: [
    {
      step: 1,
      title: "CSAB Registration",
      description: "Fresh registration on CSAB portal",
      duration: "August"
    },
    {
      step: 2,
      title: "Choice Filling",
      description: "Fill choices from vacant seats only",
      duration: "August"
    },
    {
      step: 3,
      title: "Special Round I",
      description: "Seat allotment for first special round",
      duration: "August"
    },
    {
      step: 4,
      title: "Special Round II",
      description: "Final allotment for remaining seats",
      duration: "September"
    },
    {
      step: 5,
      title: "Reporting",
      description: "Online reporting and document verification",
      duration: "September"
    }
  ],

  seatMatrix: [
    {
      category: "NITs",
      institution: "National Institutes of Technology",
      seats: 5000,
      branches: ["CSE", "ECE", "ME", "CE"]
    },
    {
      category: "IIITs",
      institution: "Indian Institutes of Information Technology",
      seats: 2000,
      branches: ["CSE", "IT", "ECE"]
    },
    {
      category: "GFTIs",
      institution: "Government Funded Technical Institutes",
      seats: 1000,
      branches: ["Various Engineering Branches"]
    }
  ],

  requiredDocuments: [
    "JEE Main Score Card",
    "Class 10 Mark Sheet",
    "Class 12 Mark Sheet",
    "Category Certificate (if applicable)",
    "Photo ID Proof",
    "Passport Size Photographs"
  ],

  feeStructure: [
    {
      type: "CSAB Registration Fee (General/OBC/EWS)",
      amount: "₹45,000",
      description: "Seat acceptance fee, adjusted against institute fee"
    },
    {
      type: "CSAB Registration Fee (SC/ST/PwD)",
      amount: "₹20,000",
      description: "Reduced seat acceptance fee"
    }
  ],

  importantDates: [
    {
      event: "CSAB Registration Start",
      date: "August",
      status: "Upcoming"
    },
    {
      event: "Special Round I Result",
      date: "August",
      status: "Upcoming"
    },
    {
      event: "Special Round II Result",
      date: "September",
      status: "Upcoming"
    }
  ],

  faqs: [
    {
      question: "Are IIT seats available in CSAB?",
      answer:
        "No. CSAB Special Rounds are conducted only for NITs, IIITs, and GFTIs."
    },
    {
      question: "Is CSAB registration separate from JoSAA?",
      answer:
        "Yes. Candidates must register again on the CSAB portal even if they participated in JoSAA."
    },
    {
      question: "Can I upgrade my JoSAA seat through CSAB?",
      answer:
        "Only candidates who withdraw from JoSAA or do not hold any seat can participate."
    }
  ]
},
{
  id: "jac-delhi",
  name: "JAC Delhi",
  fullName: "Joint Admission Counselling Delhi",
  icon: "Landmark",
  description:
    "JAC Delhi conducts centralized B.Tech admissions to premier government engineering institutes in Delhi based on JEE Main ranks, covering multiple rounds of seat allocation.",

  organizingBody: "Joint Admission Counselling Committee, Delhi",

  eligibility: [
    "Qualified JEE Main (Paper 1 – B.E./B.Tech)",
    "Passed Class 12 with Physics, Chemistry & Mathematics",
    "Minimum eligibility as prescribed by respective institutes",
    "Delhi Region & Outside Delhi candidates eligible",
    "Separate reservation norms for SC/ST/OBC/EWS/PwD"
  ],

  totalSeats: 7000,
  participatingColleges: 4,

  status: "Active",
  statusColor: "bg-green-500",

  website: "https://jacdelhi.admissions.nic.in",

  participatingInstitutes: [
    "Delhi Technological University (DTU)",
    "Netaji Subhas University of Technology (NSUT)",
    "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
    "Indraprastha Institute of Information Technology Delhi (IIIT-Delhi)",

  ],

  admissionProcess: [
    {
      step: 1,
      title: "Online Registration",
      description: "Register on the JAC Delhi portal using JEE Main application number",
      duration: "June"
    },
    {
      step: 2,
      title: "Choice Filling & Locking",
      description: "Select preferred institutes and branches in order of priority",
      duration: "June"
    },
    {
      step: 3,
      title: "Seat Allotment",
      description: "Multiple rounds of seat allotment based on JEE Main rank, category, and preferences",
      duration: "July"
    },
    {
      step: 4,
      title: "Seat Acceptance & Fee Payment",
      description: "Confirm allotted seat by paying seat acceptance fee",
      duration: "July"
    },
    {
      step: 5,
      title: "Document Verification",
      description: "Online / physical verification of documents",
      duration: "July"
    },
    {
      step: 6,
      title: "Reporting to Institute",
      description: "Final reporting at allotted institute to complete admission",
      duration: "July–August"
    }
  ],

  seatMatrix: [
    {
      category: "DTU & NSUT",
      institution: "Delhi Technological University & NSUT",
      seats: 4200,
      branches: ["CSE", "IT", "ECE", "EE", "ME", "Civil", "Chemical"]
    },
    {
      category: "IIIT-Delhi",
      institution: "Indraprastha Institute of Information Technology Delhi",
      seats: 800,
      branches: ["CSE", "CSAI", "CSAM", "ECE", "AI & Data Science"]
    },
    {
      category: "IGDTUW",
      institution: "Indira Gandhi Delhi Technical University for Women",
      seats: 900,
      branches: ["CSE", "IT", "ECE", "AI & ML"]
    },
    {
      category: "DSEU",
      institution: "Delhi Skill and Entrepreneurship University",
      seats: 1100,
      branches: ["CSE", "IT", "Electronics", "Mechanical"]
    }
  ],

  requiredDocuments: [
    "JEE Main Score Card",
    "JEE Main Admit Card",
    "Class 10 Mark Sheet",
    "Class 12 Mark Sheet",
    "Category Certificate (if applicable)",
    "EWS Certificate (if applicable)",
    "PwD Certificate (if applicable)",
    "Delhi Region Certificate (if applicable)",
    "Passport Size Photographs",
    "Photo ID Proof (Aadhar / Passport)"
  ],

  feeStructure: [
    {
      type: "Registration Fee",
      amount: "₹1,500",
      description: "Non-refundable counselling registration fee"
    },
    {
      type: "Seat Acceptance Fee",
      amount: "₹95,000",
      description: "Part of tuition fee, varies by institute"
    },
    {
      type: "Tuition Fee (Annual)",
      amount: "₹1,50,000 – ₹2,00,000",
      description: "Varies across DTU, NSUT, IIIT-D, IGDTUW & DSEU"
    }
  ],

  importantDates: [
    {
      event: "JAC Delhi Registration Start",
      date: "June",
      status: "Upcoming"
    },
    {
      event: "Choice Filling & Locking",
      date: "June",
      status: "Upcoming"
    },
    {
      event: "Round 1 Seat Allotment",
      date: "July",
      status: "Upcoming"
    },
    {
      event: "Final Round Allotment",
      date: "July",
      status: "Upcoming"
    },
    {
      event: "Reporting to Institutes",
      date: "July–August",
      status: "Upcoming"
    }
  ],

  faqs: [
    {
      question: "Is JAC Delhi only for Delhi students?",
      answer:
        "No. Both Delhi Region and Outside Delhi candidates can apply, though Delhi candidates get regional reservation."
    },
    {
      question: "Is IIIT-Delhi part of JoSAA?",
      answer:
        "No. IIIT-Delhi admissions are conducted exclusively through JAC Delhi."
    },
    {
      question: "Are female-only seats available?",
      answer:
        "Yes. IGDTUW offers B.Tech seats exclusively for female candidates."
    },
    {
      question: "How many counselling rounds are conducted?",
      answer:
        "JAC Delhi usually conducts multiple rounds including spot rounds depending on seat availability."
    }
  ]
},


{
  id: "ipu-btech",
  name: "IPU Counselling",
  fullName: "Guru Gobind Singh Indraprastha University B.Tech Counselling",
  icon: "University",
  description:
    "GGSIPU conducts centralized online counselling for B.Tech admissions in its constituent and affiliated colleges based on JEE Main ranks for Delhi Region and Outside Delhi candidates.",

  organizingBody: "Guru Gobind Singh Indraprastha University (GGSIPU)",

  eligibility: [
    "Qualified JEE Main (Paper 1 – B.E./B.Tech)",
    "Passed Class 12 with Physics, Chemistry & Mathematics",
    "Minimum 55% aggregate in PCM (50% for SC/ST/PwD categories)",
    "Delhi Region & Outside Delhi candidates eligible",
    "Age and other conditions as per GGSIPU admission brochure"
  ],

  totalSeats: 43000,
  participatingColleges: 40,

  status: "Active",
  statusColor: "bg-green-500",

  website: "https://ipu.admissions.nic.in",

  participatingInstitutes: [
    "University School of Information, Communication & Technology (USICT)",
    "Maharaja Agrasen Institute of Technology (MAIT)",
    "Maharaja Surajmal Institute of Technology (MSIT)",
    "Bhagwan Parshuram Institute of Technology (BPIT)",
    "Bharati Vidyapeeth College of Engineering (BVCOE)",
    "Dr. Akhilesh Das Gupta Institute of Technology & Management (ADGITM)",
    "JIMS Engineering Management Technical Campus (JEMTEC)",
    "Northern India Engineering College (NIEC)",
    "HMR Institute of Technology & Management"
  ],

  admissionProcess: [
    {
      step: 1,
      title: "Online Registration",
      description: "Register on the GGSIPU admission portal using JEE Main details",
      duration: "May–June"
    },
    {
      step: 2,
      title: "Choice Filling & Locking",
      description: "Select preferred colleges and branches in order of priority",
      duration: "June"
    },
    {
      step: 3,
      title: "Seat Allotment",
      description: "Multiple rounds of allotment based on JEE Main rank, category, and region",
      duration: "June–July"
    },
    {
      step: 4,
      title: "Seat Acceptance Fee Payment",
      description: "Pay part academic fee to confirm the allotted seat",
      duration: "July"
    },
    {
      step: 5,
      title: "Document Verification",
      description: "Online / physical verification at reporting institute",
      duration: "July"
    },
    {
      step: 6,
      title: "Final Reporting",
      description: "Report to allotted college to complete admission formalities",
      duration: "July–August"
    }
  ],

  seatMatrix: [
    {
      category: "University School",
      institution: "USICT, GGSIPU",
      seats: 900,
      branches: ["CSE", "IT", "ECE"]
    },
    {
      category: "Top Affiliated Colleges",
      institution: "MAIT, MSIT, BPIT, BVCOE",
      seats: 4500,
      branches: ["CSE", "IT", "ECE", "EEE", "ME"]
    },
    {
      category: "Other Affiliated Colleges",
      institution: "ADGITM, NIEC, JEMTEC, HMR, etc.",
      seats: 6600,
      branches: ["All Engineering Branches"]
    }
  ],

  requiredDocuments: [
    "JEE Main Score Card",
    "JEE Main Admit Card",
    "Class 10 Mark Sheet & Certificate",
    "Class 12 Mark Sheet & Certificate",
    "Category Certificate (if applicable)",
    "Delhi Region Certificate (if applicable)",
    "EWS Certificate (if applicable)",
    "PwD Certificate (if applicable)",
    "Passport Size Photographs",
    "Photo ID Proof (Aadhar / Passport)"
  ],

  feeStructure: [
    {
      type: "Counselling Registration Fee",
      amount: "₹1,500",
      description: "Non-refundable online registration fee"
    },
    {
      type: "Part Academic Fee",
      amount: "₹40,000",
      description: "Payable to confirm the allotted seat"
    },
    {
      type: "Tuition Fee (Annual)",
      amount: "₹1,00,000 – ₹1,60,000",
      description: "Varies by institute and branch"
    }
  ],

  importantDates: [
    {
      event: "IPU Registration Start",
      date: "May",
      status: "Upcoming"
    },
    {
      event: "Choice Filling & Locking",
      date: "June",
      status: "Upcoming"
    },
    {
      event: "Round 1 Seat Allotment",
      date: "June",
      status: "Upcoming"
    },
    {
      event: "Final Round Allotment",
      date: "July",
      status: "Upcoming"
    },
    {
      event: "Reporting to Colleges",
      date: "July–August",
      status: "Upcoming"
    }
  ],

  faqs: [
    {
      question: "Is JEE Main mandatory for IPU B.Tech admissions?",
      answer:
        "Yes, admission to B.Tech programs in GGSIPU affiliated colleges is based on JEE Main ranks."
    },
    {
      question: "Is there a Delhi Region quota in IPU?",
      answer:
        "Yes, a significant percentage of seats are reserved for Delhi Region candidates."
    },
    {
      question: "Can Outside Delhi candidates apply?",
      answer:
        "Yes, Outside Delhi candidates can apply under All India quota seats."
    },
    {
      question: "Does IPU conduct spot rounds?",
      answer:
        "Yes, spot rounds may be conducted if seats remain vacant after regular counselling rounds."
    }
  ]
},



{
  id: "igdtuw",
  name: "IGDTUW Counselling",
  fullName: "Indira Gandhi Delhi Technical University for Women B.Tech Counselling",
  icon: "GraduationCap",
  description:
    "IGDTUW offers B.Tech admissions exclusively for female candidates through JAC Delhi based on JEE Main ranks, focusing on technical education for women.",

  organizingBody: "Indira Gandhi Delhi Technical University for Women (IGDTUW)",

  eligibility: [
    "Female candidates only",
    "Qualified JEE Main (Paper 1 – B.E./B.Tech)",
    "Passed Class 12 with Physics, Chemistry & Mathematics",
    "Minimum eligibility as prescribed by IGDTUW",
    "Delhi Region & Outside Delhi candidates eligible",
    "Reservation norms applicable as per government rules"
  ],

  totalSeats: 1000,
  participatingColleges: 1,

  status: "Active",
  statusColor: "bg-green-500",

  website: "https://www.igdtuw.ac.in",

  participatingInstitutes: [
    "Indira Gandhi Delhi Technical University for Women (IGDTUW), Kashmere Gate Campus"
  ],

  admissionProcess: [
    {
      step: 1,
      title: "JAC Delhi Registration",
      description: "Register on JAC Delhi portal using JEE Main credentials",
      duration: "June"
    },
    {
      step: 2,
      title: "Choice Filling & Locking",
      description: "Select IGDTUW branches in order of preference",
      duration: "June"
    },
    {
      step: 3,
      title: "Seat Allotment",
      description: "Seat allotment through multiple JAC Delhi rounds",
      duration: "July"
    },
    {
      step: 4,
      title: "Seat Acceptance Fee Payment",
      description: "Pay seat acceptance fee to confirm the allotted seat",
      duration: "July"
    },
    {
      step: 5,
      title: "Document Verification",
      description: "Online / physical verification of documents",
      duration: "July"
    },
    {
      step: 6,
      title: "Reporting to University",
      description: "Final reporting at IGDTUW campus to complete admission",
      duration: "July–August"
    }
  ],

  seatMatrix: [
    {
      category: "B.Tech Programs",
      institution: "IGDTUW",
      seats: 1000,
      branches: [
        "Computer Science & Engineering (CSE)",
        "Information Technology (IT)",
        "Electronics & Communication Engineering (ECE)",
        "Artificial Intelligence & Data Science",
        "Mechanical & Automation Engineering"
      ]
    }
  ],

  requiredDocuments: [
    "JEE Main Score Card",
    "JEE Main Admit Card",
    "Class 10 Mark Sheet & Certificate",
    "Class 12 Mark Sheet & Certificate",
    "Category Certificate (if applicable)",
    "EWS Certificate (if applicable)",
    "PwD Certificate (if applicable)",
    "Delhi Region Certificate (if applicable)",
    "Passport Size Photographs",
    "Photo ID Proof (Aadhar / Passport)"
  ],

  feeStructure: [
    {
      type: "JAC Delhi Registration Fee",
      amount: "₹1,500",
      description: "Non-refundable counselling registration fee"
    },
    {
      type: "Seat Acceptance / Part Academic Fee",
      amount: "₹95,000",
      description: "Adjusted against tuition fee"
    },
    {
      type: "Tuition Fee (Annual)",
      amount: "₹1,25,000 – ₹1,50,000",
      description: "Varies slightly by branch"
    }
  ],

  importantDates: [
    {
      event: "JAC Delhi Registration Start",
      date: "June",
      status: "Upcoming"
    },
    {
      event: "Choice Filling & Locking",
      date: "June",
      status: "Upcoming"
    },
    {
      event: "Round 1 Seat Allotment",
      date: "July",
      status: "Upcoming"
    },
    {
      event: "Final Round Allotment",
      date: "July",
      status: "Upcoming"
    },


    
    {
      event: "Reporting at IGDTUW",
      date: "July–August",
      status: "Upcoming"
    }
  ],

  faqs: [
    {
      question: "Is IGDTUW only for female candidates?",
      answer:
        "Yes, IGDTUW is a women-only technical university and admissions are open exclusively to female candidates."
    },
    {
      question: "Is IGDTUW part of JoSAA?",
      answer:
        "No. IGDTUW admissions are conducted through JAC Delhi, not JoSAA."
    },
    {
      question: "Can Outside Delhi female candidates apply?",
      answer:
        "Yes, Outside Delhi female candidates can apply under the All India quota."
    },
    {
      question: "Does IGDTUW conduct spot rounds?",
      answer:
        "Yes, spot rounds may be conducted through JAC Delhi if seats remain vacant."
    }
  ]
},



  
{
  id: "hstes",
  name: "Haryana State Counselling",
  fullName: "Haryana State Technical Education Society Counselling",
  icon: "BookOpen",
  description:
    "HSTES conducts centralized online counselling for B.Tech admissions in government and private engineering colleges across Haryana based on JEE Main ranks.",
  organizingBody: "Haryana State Technical Education Society (HSTES)",
  eligibility: [
    "Qualified JEE Main",
    "Passed Class 12 with Physics, Chemistry, Mathematics",
    "Haryana domicile candidates eligible for state quota",
    "All India candidates eligible under AIQ seats",
    "Minimum 45% in Class 12 (40% for reserved categories)"
  ],
  totalSeats: 30000,
  participatingColleges: 180,
  status: "Active",
  statusColor: "bg-green-500",
  website: "https://hstes.org.in",
participatingInstitutes: [
  "Deenbandhu Chhotu Ram University of Science & Technology (DCRUST), Murthal",
  "Maharshi Dayanand University (MDU), Rohtak",
  "Guru Jambheshwar University of Science & Technology (GJUST), Hisar",
  "YMCA University of Science & Technology, Faridabad",

  "Government Engineering College, Nilokheri",
  "Government Engineering College, Sonipat",
  "Government Engineering College, Rewari",
  "Government Engineering College, Jhajjar",
  "Government Engineering College, Ambala",

  "JC Bose University of Science & Technology (Affiliated Colleges)",
  "Manav Rachna International Institute of Research & Studies, Faridabad",
  "Lingaya’s Vidyapeeth, Faridabad",
  "Aravali College of Engineering & Management, Faridabad",
  "PDM College of Engineering, Bahadurgarh",
  "Sat Kabir Institute of Technology & Management, Rohtak",
  "Vaish College of Engineering, Rohtak",
  "Hindu College of Engineering, Sonipat",
  "Seth Jai Parkash Mukand Lal Institute of Engineering & Technology, Yamunanagar",

  "Amity University, Gurugram",
  "SRM University, Sonepat",
  "GD Goenka University, Gurugram",
  "BML Munjal University, Gurugram",
  "Ansal University, Gurugram",
  "World University of Design, Sonipat"
],

  admissionProcess: [
    {
      step: 1,
      title: "Online Registration",
      description: "Register on HSTES portal using JEE Main details",
      duration: "May–June"
    },
    {
      step: 2,
      title: "Choice Filling",
      description: "Select preferred colleges and branches",
      duration: "June"
    },
    {
      step: 3,
      title: "Seat Allotment",
      description: "Round-wise seat allotment based on JEE Main rank",
      duration: "June–July"
    },
    {
      step: 4,
      title: "Document Verification",
      description: "Online/physical verification at reporting center",
      duration: "July"
    },
    {
      step: 5,
      title: "Fee Payment",
      description: "Pay admission fee to confirm seat",
      duration: "July"
    },
    {
      step: 6,
      title: "Reporting to College",
      description: "Report to allotted institute to complete admission",
      duration: "July–August"
    }
  ],



  seatMatrix: [
    {
      category: "Government Colleges",
      institution: "State Government Engineering Colleges",
      seats: 12000,
      branches: ["CSE", "ECE", "EEE", "Mechanical", "Civil"]
    },
    {
      category: "University Departments",
      institution: "MDU, DCRUST, GJU affiliated institutes",
      seats: 18000,
      branches: ["CSE", "IT", "ECE", "ME", "AI & DS"]
    },
    {
      category: "Private Colleges",
      institution: "Private Engineering Colleges",
      seats: 45000,
      branches: ["All Engineering Branches"]
    }
  ],

  requiredDocuments: [
    "JEE Main Score Card",
    "Class 10 Mark Sheet",
    "Class 12 Mark Sheet",
    "Haryana Domicile Certificate",
    "Category Certificate (if applicable)",
    "Income Certificate (if applicable)",
    "Aadhar Card",
    "Passport Size Photographs"
  ],

  feeStructure: [
    {
      type: "Counselling Registration Fee",
      amount: "₹500",
      description: "One-time counselling registration fee"
    },
    {
      type: "Government College Fee",
      amount: "₹45,000 – ₹60,000 / year",
      description: "Approximate annual tuition fee"
    },
    {
      type: "Private College Fee",
      amount: "₹80,000 – ₹1,50,000 / year",
      description: "Varies by college and branch"
    }
  ],

  importantDates: [
    {
      event: "HSTES Registration Start",
      date: "May",
      status: "Upcoming"
    },
    {
      event: "Choice Filling",
      date: "June",
      status: "Upcoming"
    },
    {
      event: "Round 1 Seat Allotment",
      date: "June",
      status: "Upcoming"
    },
    {
      event: "Subsequent Rounds",
      date: "July",
      status: "Upcoming"
    }
  ],

  faqs: [
    {
      question: "Is JEE Main mandatory for Haryana B.Tech counselling?",
      answer:
        "Yes, JEE Main score is mandatory for admission to B.Tech courses through HSTES."
    },
    {
      question: "Is there a Haryana domicile quota?",
      answer:
        "Yes, a significant percentage of seats are reserved for Haryana domicile candidates."
    },
    {
      question: "Can outside Haryana students apply?",
      answer:
        "Yes, non-Haryana candidates can apply under All India Quota seats."
    }
  ]
},
{
  id: "aktu",
  name: "UP Counselling",
  fullName: "Dr. A.P.J. Abdul Kalam Technical University Counselling (AKTU)",
  icon: "University",
  description:
    "AKTU conducts centralized online counselling for B.Tech admissions in government, aided, and private engineering colleges across Uttar Pradesh based on JEE Main ranks.",

  organizingBody: "Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow",

  eligibility: [
    "Qualified JEE Main (Paper 1)",
    "Passed Class 12 with Physics and Mathematics as compulsory subjects",
    "Chemistry / Biotechnology / Biology / Technical / Computer Science as one optional subject",
    "Minimum 45% aggregate in Class 12 (40% for SC/ST candidates of UP)",
    "Uttar Pradesh domicile candidates eligible for State quota",
    "Outside UP candidates eligible under All India quota"
  ],

  totalSeats: 120000,
  participatingColleges: 250,

  status: "Active",
  statusColor: "bg-green-500",

  website: "https://uptac.admissions.nic.in",
  participatingInstitutes: [
  "Harcourt Butler Technical University (HBTU), Kanpur",
  "Institute of Engineering & Technology (IET), Lucknow",
  "Kamla Nehru Institute of Technology (KNIT), Sultanpur",
  "Bundelkhand Institute of Engineering & Technology (BIET), Jhansi",
  "Madan Mohan Malaviya University of Technology (MMMUT), Gorakhpur",

  "JSS Academy of Technical Education, Noida",
  "Ajay Kumar Garg Engineering College (AKGEC), Ghaziabad",
  "KIET Group of Institutions, Ghaziabad",
  "Galgotias College of Engineering & Technology, Greater Noida",
  "GL Bajaj Institute of Technology & Management, Greater Noida",
  "Noida Institute of Engineering & Technology (NIET), Greater Noida",
  "ABES Engineering College, Ghaziabad",
  "IMS Engineering College, Ghaziabad",
  "Raj Kumar Goel Institute of Technology, Ghaziabad",

  "Pranveer Singh Institute of Technology (PSIT), Kanpur",
  "Babu Banarasi Das National Institute of Technology & Management (BBDNITM), Lucknow",
  "Shri Ramswaroop Memorial College of Engineering & Management, Lucknow",
  "Greater Noida Institute of Technology (GNIT), Greater Noida",
  "Accurate Institute of Management & Technology, Greater Noida",

  "United College of Engineering & Research, Prayagraj",
  "Institute of Technology & Management (ITM), Gorakhpur",
  "Lucknow Institute of Technology (LIT), Lucknow",
  "Feroze Gandhi Institute of Engineering & Technology (FGIET), Raebareli",
  "Maharana Pratap Engineering College, Kanpur"
],


  admissionProcess: [
    {
      step: 1,
      title: "UPTAC Registration",
      description: "Online registration on AKTU counselling portal using JEE Main details",
      duration: "June–July"
    },
    {
      step: 2,
      title: "Document Upload & Verification",
      description: "Upload academic and category documents for online verification",
      duration: "June–July"
    },
    {
      step: 3,
      title: "Choice Filling & Locking",
      description: "Fill and lock college and branch preferences",
      duration: "July"
    },
    {
      step: 4,
      title: "Seat Allotment",
      description: "Round-wise seat allotment based on JEE Main rank and preferences",
      duration: "July–August"
    },
    {
      step: 5,
      title: "Seat Acceptance Fee Payment",
      description: "Pay seat acceptance fee to confirm allotted seat",
      duration: "As per round"
    },
    {
      step: 6,
      title: "Reporting to Institute",
      description: "Physical reporting at allotted college for final admission",
      duration: "August"
    }
  ],

  seatMatrix: [
    {
      category: "Government Engineering Colleges",
      institution: "HBTU Kanpur, JSS Noida, KNIT Sultanpur, BIET Jhansi",
      seats: 15000,
      branches: ["CSE", "ECE", "EE", "ME", "Civil"]
    },
    {
      category: "Government Aided Colleges",
      institution: "Aided Engineering Institutes",
      seats: 10000,
      branches: ["CSE", "IT", "ECE", "ME"]
    },
    {
      category: "Private Engineering Colleges",
      institution: "AKTU Affiliated Private Colleges",
      seats: 95000,
      branches: ["All Engineering Branches"]
    }
  ],

  requiredDocuments: [
    "JEE Main Score Card",
    "Class 10 Mark Sheet",
    "Class 12 Mark Sheet",
    "UP Domicile Certificate (if applicable)",
    "Category Certificate (if applicable)",
    "Income Certificate (for fee waiver, if applicable)",
    "EWS Certificate (if applicable)",
    "Passport Size Photographs",
    "Photo ID Proof (Aadhar Card)"
  ],

  feeStructure: [
    {
      type: "UPTAC Registration Fee",
      amount: "₹1,200",
      description: "Non-refundable counselling registration fee for General/OBC candidates"
    },
    {
      type: "UPTAC Registration Fee (SC/ST)",
      amount: "₹800",
      description: "Reduced counselling registration fee for SC/ST candidates"
    },
    {
      type: "Seat Acceptance Fee",
      amount: "₹20,000",
      description: "Adjustable against first-year tuition fee after seat allotment"
    }
  ],

  importantDates: [
    {
      event: "UPTAC Registration Start",
      date: "June",
      status: "Upcoming"
    },
    {
      event: "Choice Filling",
      date: "July",
      status: "Upcoming"
    },
    {
      event: "Round 1 Seat Allotment",
      date: "July",
      status: "Upcoming"
    },
    {
      event: "Final Round Allotment",
      date: "August",
      status: "Upcoming"
    },
    {
      event: "Reporting to Colleges",
      date: "August",
      status: "Upcoming"
    }
  ],

  faqs: [
    {
      question: "Is JEE Main mandatory for UP B.Tech counselling?",
      answer:
        "Yes, JEE Main is mandatory for B.Tech admissions through AKTU counselling."
    },
    {
      question: "Is there a domicile quota in AKTU counselling?",
      answer:
        "Yes, a significant percentage of seats are reserved for Uttar Pradesh domicile candidates."
    },
    {
      question: "Are private colleges included in AKTU counselling?",
      answer:
        "Yes, AKTU counselling includes government, aided, and private engineering colleges across Uttar Pradesh."
    },
    {
      question: "Can outside UP candidates apply?",
      answer:
        "Yes, outside Uttar Pradesh candidates can apply under the All India quota seats."
    }
  ]
},


{
  id: "mht-cet",
  name: "Maharashtra State Counselling",
  fullName: "Maharashtra Common Entrance Test (MHT-CET) Engineering Counselling",
  icon: "Building2",
  description:
    "MHT-CET is the state-level entrance examination and counselling process for admission to B.E./B.Tech programs in government, aided, autonomous, and private engineering colleges across Maharashtra.",

  organizingBody: "State Common Entrance Test Cell, Maharashtra",

  eligibility: [
    "Passed HSC (Class 12) with Physics and Mathematics as compulsory subjects",
    "Chemistry / Biotechnology / Biology / Technical / Vocational subject required",
    "Minimum 50% aggregate for General category (45% for reserved categories)",
    "Maharashtra domicile candidates eligible for State quota",
    "Non-domicile candidates eligible under All India Quota via JEE Main",
    "No upper age limit"
  ],

  totalSeats: 150000,
  participatingColleges: 350,

  status: "Active",
  statusColor: "bg-green-500",

  website: "https://cetcell.mahacet.org",
  participatingInstitutes: [
  "College of Engineering, Pune (COEP Technological University)",
  "Veermata Jijabai Technological Institute (VJTI), Mumbai",
  "Sardar Patel College of Engineering (SPCE), Mumbai",
  "Walchand College of Engineering, Sangli",
  "Government College of Engineering, Aurangabad",
  "Government College of Engineering, Amravati",
  "Government College of Engineering, Karad",

  "K J Somaiya College of Engineering, Mumbai",
  "Dwarkadas J. Sanghvi College of Engineering (DJSCE), Mumbai",
  "Thadomal Shahani Engineering College (TSEC), Mumbai",
  "Fr. Conceicao Rodrigues College of Engineering (FRCRCE), Mumbai",
  "Vivekanand Education Society’s Institute of Technology (VESIT), Mumbai",
  "SIES Graduate School of Technology (SIES GST), Navi Mumbai",

  "Pune Institute of Computer Technology (PICT), Pune",
  "MIT World Peace University (MIT-WPU), Pune",
  "Bharati Vidyapeeth College of Engineering, Pune",
  "Vishwakarma Institute of Technology (VIT), Pune",
  "Vishwakarma Institute of Information Technology (VIIT), Pune",
  "Cummins College of Engineering for Women, Pune",

  "Rajarambapu Institute of Technology (RIT), Sangli",
  "Ramrao Adik Institute of Technology (RAIT), Navi Mumbai",
  "Terna Engineering College, Navi Mumbai",
  "Datta Meghe College of Engineering (DMCE), Navi Mumbai",

  "Sinhgad College of Engineering, Pune",
  "JSPM’s Rajarshi Shahu College of Engineering, Pune",
  "PCCOE – Pimpri Chinchwad College of Engineering, Pune"
],


  admissionProcess: [
    {
      step: 1,
      title: "MHT-CET Registration",
      description: "Apply online for MHT-CET examination",
      duration: "January–February"
    },
    {
      step: 2,
      title: "Admit Card Download",
      description: "Download hall ticket from official website",
      duration: "April"
    },
    {
      step: 3,
      title: "MHT-CET Examination",
      description: "Computer-based entrance examination",
      duration: "April–May"
    },
    {
      step: 4,
      title: "Result Declaration",
      description: "Percentile-based result and rank generation",
      duration: "June"
    },
    {
      step: 5,
      title: "CAP Registration",
      description: "Register for Centralized Admission Process (CAP)",
      duration: "June–July"
    },
    {
      step: 6,
      title: "Document Verification",
      description: "Online / physical verification of documents",
      duration: "June–July"
    },
    {
      step: 7,
      title: "CAP Rounds",
      description: "Multiple rounds of seat allotment",
      duration: "July–August"
    },
    {
      step: 8,
      title: "Reporting to Institute",
      description: "Final admission confirmation at allotted college",
      duration: "July–August"
    }
  ],

  seatMatrix: [
    {
      category: "Autonomous Institutes",
      institution: "COEP Tech, VJTI, SPIT, etc.",
      seats: 5000,
      branches: ["CSE", "IT", "ECE", "EE", "ME", "Civil"]
    },
    {
      category: "Government & Aided Colleges",
      institution: "Government Engineering Colleges",
      seats: 15000,
      branches: ["CSE", "ECE", "ME", "Civil", "Electrical"]
    },
    {
      category: "Private Unaided Colleges",
      institution: "Private Engineering Institutes",
      seats: 130000,
      branches: ["All Engineering Branches"]
    }
  ],

  requiredDocuments: [
    "MHT-CET Score Card",
    "JEE Main Score Card (for All India Quota, if applicable)",
    "SSC (Class 10) Mark Sheet",
    "HSC (Class 12) Mark Sheet",
    "Maharashtra Domicile Certificate",
    "Caste Certificate (if applicable)",
    "Caste Validity Certificate (if applicable)",
    "Non-Creamy Layer Certificate (OBC/VJNT)",
    "EWS Certificate (if applicable)",
    "Gap Certificate (if applicable)",
    "Photo ID Proof"
  ],

  feeStructure: [
    {
      type: "MHT-CET Application Fee (General)",
      amount: "₹1000",
      description: "Per group for General category candidates"
    },
    {
      type: "MHT-CET Application Fee (Reserved)",
      amount: "₹800",
      description: "SC/ST/OBC/PwD candidates"
    },
    {
      type: "CAP Registration Fee",
      amount: "₹1,000",
      description: "Centralized Admission Process fee"
    },
    {
      type: "Tuition Fee (Annual)",
      amount: "₹80,000 – ₹2,00,000",
      description: "Varies by college type and branch"
    }
  ],

  importantDates: [
    {
      event: "MHT-CET Application Start",
      date: "January",
      status: "Completed"
    },
    {
      event: "MHT-CET Examination",
      date: "April–May",
      status: "Upcoming"
    },
    {
      event: "Result Declaration",
      date: "June",
      status: "Upcoming"
    },
    {
      event: "CAP Registration",
      date: "June–July",
      status: "Upcoming"
    },
    {
      event: "CAP Round Allotment",
      date: "July–August",
      status: "Upcoming"
    }
  ],

  faqs: [
    {
      question: "Is JEE Main score valid for Maharashtra engineering admissions?",
      answer:
        "Yes, JEE Main score is used for 15–20% All India Quota seats in Maharashtra engineering colleges."
    },
    {
      question: "What is CAP in MHT-CET?",
      answer:
        "CAP (Centralized Admission Process) is the online counselling system used for seat allotment in engineering colleges."
    },
    {
      question: "Is Maharashtra domicile mandatory?",
      answer:
        "Domicile is required for State quota seats, but non-domicile candidates can apply through All India Quota."
    },
    {
      question: "Are diploma holders eligible?",
      answer:
        "Yes, diploma holders can apply for Direct Second Year (DSY) admissions through a separate counselling process."
    }
  ]
},



{
  id: "comedk",
  name: "COMEDK Counselling",
  fullName: "Consortium of Medical, Engineering and Dental Colleges of Karnataka (UGET)",
  icon: "Users",
  description:
    "COMEDK UGET is a national-level entrance examination and counselling process for admission to undergraduate engineering programs in private unaided engineering colleges across Karnataka, excluding government quota seats.",

  organizingBody: "Consortium of Medical, Engineering and Dental Colleges of Karnataka (COMEDK)",

  eligibility: [
    "Indian nationals only",
    "Passed Class 12 with Physics and Mathematics as compulsory subjects",
    "Chemistry / Biotechnology / Biology / Computer Science / Electronics as one optional subject",
    "Minimum 45% aggregate in PCM (40% for SC/ST/OBC candidates of Karnataka)",
    "No upper age limit"
  ],

  totalSeats: 25000,
  participatingColleges: 190,

  status: "Upcoming",
  statusColor: "bg-yellow-500",

  website: "https://www.comedk.org",
  participatingInstitutes: [
  "RV College of Engineering (RVCE), Bengaluru",
  "BMS College of Engineering (BMSCE), Bengaluru",
  "Ramaiah Institute of Technology (MSRIT), Bengaluru",
  "PES University (Ring Road Campus), Bengaluru",
  "Dayananda Sagar College of Engineering (DSCE), Bengaluru",

  "NIE – National Institute of Engineering, Mysuru",
  "Sri Jayachamarajendra College of Engineering (SJCE), Mysuru",
  "JSS Science and Technology University (JSS STU), Mysuru",

  "Bangalore Institute of Technology (BIT), Bengaluru",
  "Sir M Visvesvaraya Institute of Technology (Sir MVIT), Bengaluru",
  "New Horizon College of Engineering, Bengaluru",
  "CMR Institute of Technology, Bengaluru",
  "Acharya Institute of Technology, Bengaluru",
  "RNS Institute of Technology, Bengaluru",

  "Nitte Meenakshi Institute of Technology (NMIT), Bengaluru",
  "Bangalore Institute of Technology (BIT), Bengaluru",
  "KLE Technological University (Hubballi Campus)",
  "SDM College of Engineering & Technology, Dharwad",

  "MVJ College of Engineering, Bengaluru",
  "BNM Institute of Technology, Bengaluru",
  "Reva University (COMEDK Seats), Bengaluru",
  "Presidency University (COMEDK Seats), Bengaluru",

  "Malnad College of Engineering, Hassan",
  "Canara Engineering College, Mangaluru",
  "Sahyadri College of Engineering & Management, Mangaluru"
],


  admissionProcess: [
    {
      step: 1,
      title: "COMEDK UGET Application",
      description: "Register and apply online for COMEDK UGET examination",
      duration: "January–April"
    },
    {
      step: 2,
      title: "Admit Card Download",
      description: "Download hall ticket from official website",
      duration: "May"
    },
    {
      step: 3,
      title: "COMEDK UGET Examination",
      description: "Computer-based entrance examination",
      duration: "May"
    },
    {
      step: 4,
      title: "Result & Rank List",
      description: "Publication of scorecard and rank list",
      duration: "June"
    },
    {
      step: 5,
      title: "Counselling Registration",
      description: "Register separately for COMEDK counselling",
      duration: "June–July"
    },
    {
      step: 6,
      title: "Choice Filling & Locking",
      description: "Fill college and branch preferences",
      duration: "July"
    },
    {
      step: 7,
      title: "Seat Allotment",
      description: "Multiple rounds of online seat allotment",
      duration: "July–August"
    },
    {
      step: 8,
      title: "Reporting to College",
      description: "Report to allotted institute to complete admission",
      duration: "August"
    }
  ],

  seatMatrix: [
    {
      category: "Top Tier Private Colleges",
      institution: "RVCE, BMSCE, MSRIT, PES University",
      seats: 3000,
      branches: ["CSE", "ECE", "ISE", "AI & ML"]
    },
    {
      category: "Mid Tier Colleges",
      institution: "DSCE, NIE, SJCE, BIT",
      seats: 5000,
      branches: ["CSE", "IT", "ECE", "ME", "Civil"]
    },
    {
      category: "Other COMEDK Member Colleges",
      institution: "Other Private Unaided Engineering Colleges",
      seats: 17000,
      branches: ["All Engineering Branches"]
    }
  ],

  requiredDocuments: [
    "COMEDK UGET Rank Card",
    "COMEDK UGET Admit Card",
    "Class 10 Mark Sheet",
    "Class 12 Mark Sheet",
    "Transfer Certificate",
    "Study / Eligibility Certificate (if applicable)",
    "Category Certificate (if applicable)",
    "Passport Size Photographs",
    "Photo ID Proof (Aadhar / Passport)"
  ],

feeStructure: [
  {
    type: "COMEDK UGET Registration Fee",
    amount: "₹1,950",
    description: "Standard registration/application fee for COMEDK UGET 2025 (non-refundable)"
  },
  {
    type: "COMEDK + Uni-GAUGE Registration Fee",
    amount: "₹3,200",
    description: "Fee for candidates applying for both COMEDK and Uni-GAUGE exams"
  },


    {
      type: "Counselling Registration Fee",
      amount: "₹2,000",
      description: "Non-refundable counselling participation fee"
    },
    {
      type: "Tuition Fee (Annual)",
      amount: "₹1,50,000 – ₹3,00,000",
      description: "Varies by college and branch (regulated by COMEDK)"
    }
  ],

  importantDates: [
    {
      event: "COMEDK UGET Application Start",
      date: "January",
      status: "Completed"
    },
    {
      event: "COMEDK UGET Examination",
      date: "May",
      status: "Completed"
    },
    {
      event: "Result Declaration",
      date: "June",
      status: "Completed"
    },
    {
      event: "Counselling Registration",
      date: "June–July",
      status: "Upcoming"
    },
    {
      event: "Seat Allotment Rounds",
      date: "July–August",
      status: "Upcoming"
    }
  ],

  faqs: [
    {
      question: "Is COMEDK only for Karnataka students?",
      answer:
        "No. COMEDK is open to all Indian nationals. Karnataka domicile is not mandatory for COMEDK seats."
    },
    {
      question: "Are government engineering colleges included in COMEDK?",
      answer:
        "No. COMEDK counselling is conducted only for private unaided engineering colleges in Karnataka."
    },
    {
      question: "What is the exam pattern of COMEDK UGET?",
      answer:
        "The exam consists of 180 multiple-choice questions (60 each from Physics, Chemistry, and Mathematics) with a duration of 3 hours and no negative marking."
    },
    {
      question: "Can I get RVCE through COMEDK?",
      answer:
        "Yes. RV College of Engineering participates in COMEDK. Top branches like CSE usually require a high rank."
    }
  ]
},
{
  id: "reap",
  name: "REAP Counselling",
  fullName: "Rajasthan Engineering Admission Process",
  icon: "Building2",
  description:
    "REAP is the centralized counselling process for admission to B.E./B.Tech programs in government and private engineering colleges across Rajasthan, primarily based on JEE Main ranks and Class 12 merit.",

  organizingBody: "Centre for Electronic Governance (CEG), Rajasthan",

  eligibility: [
    "Passed Class 12 with Physics and Mathematics as compulsory subjects",
    "Chemistry / Biotechnology / Biology / Technical / Computer Science as one optional subject",
    "Minimum 45% aggregate for General category (40% for SC/ST/OBC/MBC candidates of Rajasthan)",
    "Rajasthan domicile candidates eligible for State quota",
    "Outside Rajasthan candidates eligible under limited seats via JEE Main",
    "No upper age limit"
  ],

  totalSeats: 25000,
  participatingColleges: 120,

  status: "Active",
  statusColor: "bg-green-500",

  website: "https://reapcounselling2026.com/",
  participatingInstitutes: [
  "Malaviya National Institute of Technology (MNIT), Jaipur",
  "College of Technology & Engineering (CTAE), Udaipur",
  "MBM Engineering College, Jodhpur",
  "Engineering College, Bikaner",
  "Engineering College, Ajmer",

  "Rajasthan Technical University (RTU), Kota",
  "Government Engineering College, Kota",
  "Government Engineering College, Bharatpur",
  "Government Engineering College, Jhalawar",

  "Poornima College of Engineering, Jaipur",
  "Poornima University (Engineering Colleges), Jaipur",
  "Jaipur Engineering College & Research Centre (JECRC), Jaipur",
  "JECRC University, Jaipur",
  "Arya College of Engineering & IT, Jaipur",
  "SKIT – Swami Keshvanand Institute of Technology, Jaipur",

  "LNM Institute of Information Technology (LNMIIT), Jaipur",
  "Manipal University Jaipur (Engineering Colleges)",
  "Vivekananda Global University (VGU), Jaipur",

  "Modern Institute of Technology & Research Centre (MITRC), Alwar",
  "Sobhasaria Group of Institutions, Sikar",
  "Pacific College of Engineering, Udaipur",
  "Geetanjali Institute of Technical Studies, Udaipur"
],


  admissionProcess: [
    {
      step: 1,
      title: "REAP Registration",
      description: "Online registration on REAP portal using JEE Main or Class 12 details",
      duration: "June"
    },
    {
      step: 2,
      title: "Merit Preparation",
      description: "Merit list prepared based on JEE Main rank and Class 12 marks",
      duration: "June"
    },
    {
      step: 3,
      title: "Choice Filling & Locking",
      description: "Fill college and branch preferences online",
      duration: "June–July"
    },
    {
      step: 4,
      title: "Seat Allotment",
      description: "Round-wise seat allotment based on merit and preferences",
      duration: "July"
    },
    {
      step: 5,
      title: "Seat Acceptance Fee Payment",
      description: "Pay seat acceptance fee to confirm the allotted seat",
      duration: "July"
    },
    {
      step: 6,
      title: "Document Verification",
      description: "Online / physical verification at reporting centers",
      duration: "July"
    },
    {
      step: 7,
      title: "Reporting to College",
      description: "Final reporting to allotted engineering college",
      duration: "July–August"
    }
  ],

  seatMatrix: [
    {
      category: "Government Engineering Colleges",
      institution: "RTU Kota, MBM Jodhpur, Engineering Colleges",
      seats: 12000,
      branches: ["CSE", "ECE", "EE", "ME", "Civil"]
    },
    {
      category: "Government Aided Colleges",
      institution: "Aided Engineering Institutes",
      seats: 8000,
      branches: ["CSE", "IT", "ECE", "ME"]
    },
    {
      category: "Private Engineering Colleges",
      institution: "Private Engineering Institutes across Rajasthan",
      seats: 40000,
      branches: ["All Engineering Branches"]
    }
  ],

  requiredDocuments: [
    "JEE Main Score Card (if applicable)",
    "Class 10 Mark Sheet",
    "Class 12 Mark Sheet",
    "Rajasthan Domicile Certificate",
    "Category Certificate (if applicable)",
    "Income Certificate (for fee concession, if applicable)",
    "EWS Certificate (if applicable)",
    "Passport Size Photographs",
    "Photo ID Proof (Aadhar / Voter ID)"
  ],

feeStructure: [
  {
    type: "REAP Registration Fee",
    amount: "₹590",
    description: "Non-refundable application and counselling registration fee (inclusive of GST)"
  },


    {
      type: "Seat Acceptance Fee",
      amount: "₹10,000",
      description: "Adjusted against first-year tuition fee"
    },
    {
      type: "Tuition Fee (Annual)",
      amount: "₹60,000 – ₹1,20,000",
      description: "Varies by government and private colleges"
    }
  ],

  importantDates: [
    {
      event: "REAP Registration Start",
      date: "June",
      status: "Upcoming"
    },
    {
      event: "Merit List Publication",
      date: "June",
      status: "Upcoming"
    },
    {
      event: "Round 1 Seat Allotment",
      date: "July",
      status: "Upcoming"
    },
    {
      event: "Final Round Allotment",
      date: "July",
      status: "Upcoming"
    },
    {
      event: "Reporting to Colleges",
      date: "July–August",
      status: "Upcoming"
    }
  ],

  faqs: [
    {
      question: "Is JEE Main mandatory for REAP?",
      answer:
        "JEE Main is preferred, but candidates without JEE Main can also get admission based on Class 12 merit if seats remain vacant."
    },
    {
      question: "Is Rajasthan domicile compulsory?",
      answer:
        "Rajasthan domicile is required for State quota seats. Limited seats are available for outside Rajasthan candidates."
    },
    {
      question: "Are private colleges included in REAP?",
      answer:
        "Yes, REAP covers both government and private engineering colleges in Rajasthan."
    },
    {
      question: "Does REAP conduct spot rounds?",
      answer:
        "Yes, spot rounds may be conducted at the institute level if seats remain vacant."
    }
  ]
}


];

export const getIconComponent = (iconName: string) => {
  const icons: Record<string, any> = {
    GraduationCap,
    Building2,
    Users,
    BookOpen,
    FileCheck,
    Calendar,
    MapPin,
    Award,
      Landmark,
  University,
  Cpu
  };
  return icons[iconName] || GraduationCap;
};


