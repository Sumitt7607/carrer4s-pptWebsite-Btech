import { Users, Building2, Zap, UserCheck } from "lucide-react";

export const admissionTypes = [
{
  id: "counselling",
  title: "Admission Through Counselling",
  shortDescription:
    "Secure admission via centralized government or authorized private counselling based on entrance exam ranks and merit lists.",
  icon: Users,
  route: "/admission/counselling",

  steps: [
    "Appear for the required entrance examination (JEE Main / State CET / CUET)",
    "Check merit list and counselling schedule on the official counselling website",
    "Register online and pay the counselling registration fee",
    "Fill and lock college and branch preferences within the given deadline",
    "Participate in seat allotment rounds (Round 1, 2, Mop-Up, Spot)",
    "Download seat allotment letter after seat confirmation",
    "Report for document verification (online or physical)",
    "Pay admission/seat acceptance fee to confirm the allotted seat",
    "Report to the allotted college to complete final admission formalities"
  ],

  eligibility: [
    "Passed 10+2 (or equivalent) with Physics, Chemistry & Mathematics",
    "Minimum aggregate marks: 45% (40% for SC/ST/OBC/PwD as per norms)",
    "Valid entrance exam score/rank (JEE Main / State CET / CUET etc.)",
    "Must fulfill domicile criteria if applying for state quota seats",
    "No upper age limit for most state and national-level counsellings"
  ],

  documents: [
    "Class 10 Mark Sheet & Passing Certificate",
    "Class 12 Mark Sheet & Passing Certificate",
    "Entrance Exam Admit Card & Scorecard / Rank Letter",
    "Seat Allotment Letter (downloaded from counselling portal)",
    "Category / Caste Certificate (SC/ST/OBC/EWS, if applicable)",
    "Domicile / Residence Certificate (for state quota)",
    "Aadhaar Card or any valid Government Photo ID",
    "Passport-size Photographs (6–10 copies)",
    "Transfer Certificate (TC) / Migration Certificate",
    "Income Certificate (for scholarship or fee relaxation, if applicable)"
  ],



  counsellingTypes: [
    "Central Counselling (JoSAA, CSAB, MCC, CUET-based)",
    "State-Level Counselling (AKTU, IPU, MHT CET, WBJEE, KEAM, etc.)",
    "Private/Deemed University Counselling"
  ],

  importantNotes: [
    "Seat allotment depends on rank, category, preferences, and seat availability",
    "Failure to report within deadline may lead to seat cancellation",
    "Counselling fees are usually non-refundable",
    "Keep multiple photocopies of all documents",
    "Participate in Mop-Up or Spot rounds for better chances if rank is low"
  ]
},

  {
  id: "management-quota",
  title: "Admission Through Management Quota",
  shortDescription:
    "Admission in private and deemed universities through management or institutional quota, subject to eligibility and seat availability.",
  icon: Building2,
  route: "/admission/management-quota",

  steps: [
    "Check availability of management / institutional quota seats",
    "Shortlist colleges and branches based on budget and eligibility",
    "Submit academic documents for preliminary eligibility verification",
    "Appear for interaction / counselling (if required by the college)",
    "Receive provisional admission offer from the institute",
    "Pay booking or seat confirmation amount",
    "Submit original documents for verification at the college",
    "Pay remaining tuition fees and complete enrollment formalities"
  ],

  eligibility: [
    "Passed 10+2 (or equivalent) with Physics, Chemistry & Mathematics",
    "Minimum aggregate: 45% (40% for reserved categories, varies by institute)",
    "Entrance exam score (JEE Main / State CET) preferred by many colleges",
    "Candidates without entrance rank may be considered based on vacant seats",
    "No domicile restriction for most private and deemed universities"
  ],

  documents: [
    "Class 10 Mark Sheet & Passing Certificate",
    "Class 12 Mark Sheet & Passing Certificate",
    "Entrance Exam Scorecard (if applicable)",
    "Migration Certificate",
    "Transfer Certificate (TC)",
    "Character Certificate from last attended institution",
    "Government Photo ID (Aadhaar / Passport / Voter ID)",
    "Passport-size Photographs (6–10 copies)",
    "Gap Certificate (if applicable, notarized)"
  ],

  feeRange:
    "₹1,80,000 – ₹6,50,000 per year (tuition fee only; excludes hostel and other charges)",

  collegesCovered: [
    "Private Engineering Colleges",
    "Deemed-to-be Universities",
    "Self-Financed Institutions"
  ],

  importantNotes: [
    "Management quota admissions are subject to college approval and seat availability",
    "Fees are higher than regular counselling seats",
    "Admission is valid only after registration with the affiliating university",
    "Original documents are mandatory for final confirmation",
    "Avoid agents claiming illegal or unauthorized admissions"
  ]
},

 {
  id: "direct",
  title: "Direct Admission",
  shortDescription:
    "Admission offered by private colleges against vacant or institute-level seats based on academic merit and eligibility norms.",
  icon: Zap,
  route: "/admission/direct",

  steps: [
    "Check availability of direct / institute-level seats in private colleges",
    "Shortlist colleges based on eligibility, budget, and location",
    "Submit academic details for merit and eligibility assessment",
    "Visit or apply directly to the college (online or offline)",
    "Attend document verification or interaction (if required)",
    "Receive provisional admission confirmation from the institute",
    "Pay seat confirmation or tuition fee directly to the college",
    "Complete enrollment and university registration formalities"
  ],

  eligibility: [
    "Passed 10+2 (or equivalent) with Physics, Chemistry & Mathematics",
    "Minimum aggregate marks: 45–50% (40% for reserved categories, varies by institute)",
    "Entrance exam not mandatory for vacant or institute-level seats",
    "Diploma holders eligible for lateral entry (direct admission to 2nd year) as per norms",
    "Subject to AICTE / university eligibility guidelines"
  ],

  documents: [
    "Class 10 Mark Sheet & Passing Certificate",
    "Class 12 Mark Sheet & Passing Certificate",
    "Diploma Mark Sheets & Certificate (for lateral entry candidates)",
    "Transfer Certificate (TC)",
    "Migration Certificate",
    "Character Certificate from last institution",
    "Government Photo ID (Aadhaar / Passport / Voter ID)",
    "Passport-size Photographs (6–10 copies)",
    "Anti-Ragging Affidavit (online submission as per UGC norms)"
  ],

  feeRange:
    "₹90,000 – ₹3,50,000 per year (tuition fee only; hostel and university charges extra)",

  importantNotes: [
    "Direct admission is allowed only in private/self-financed institutions",
    "Seats are offered strictly based on availability after counselling rounds",
    "Admission must be approved by the affiliating university",
    "Fees are paid directly to the college — not to individuals",
    "Original documents are required for final confirmation"
  ]
},

 {
  id: "reference",
  title: "Admission Through Reference Quota",
  shortDescription:
    "Admission facilitated through verified alumni, institutional, or professional references, subject to eligibility and seat availability.",
  icon: UserCheck,
  route: "/admission/reference",

  steps: [
    "Share your academic details along with the reference information",
    "Reference is verified with the concerned institution or authority",
    "Check availability of institute-level or management seats",
    "Shortlist colleges and branches based on eligibility and budget",
    "Submit academic documents for verification",
    "Receive provisional admission communication from the college",
    "Pay admission or seat confirmation fee directly to the institute",
    "Complete reporting and university registration formalities"
  ],

  eligibility: [
    "Passed 10+2 (or equivalent) with Physics, Chemistry & Mathematics",
    "Minimum aggregate marks as prescribed by the respective college",
    "Valid and verifiable reference (alumni, faculty, institutional or corporate)",
    "Admission subject to university and regulatory body guidelines",
    "Open to candidates from all boards and states"
  ],

  documents: [
    "Class 10 Mark Sheet & Passing Certificate",
    "Class 12 Mark Sheet & Passing Certificate",
    "Reference Details (alumni ID / official email / authorization, if applicable)",
    "Transfer Certificate (TC)",
    "Migration Certificate",
    "Character Certificate",
    "Government Photo ID (Aadhaar / Passport / Voter ID)",
    "Passport-size Photographs (6–10 copies)",
    "Previous Admission or Cancellation Documents (if applicable)"
  ],

  feeRange:
    "₹1,20,000 – ₹4,80,000 per year (depends on institution type, branch & seat category)",

  importantNotes: [
    "Reference does not override eligibility or regulatory requirements",
    "Final admission decision rests solely with the college/university",
    "Fees are paid only to the official college account or payment portal",
    "Availability of seats varies by branch and academic year",
    "All admissions must be registered with the affiliating university"
  ]
}

];
