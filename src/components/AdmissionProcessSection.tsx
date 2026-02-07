import { useState } from "react";
import { motion } from "framer-motion";
import AdmissionCard from "./AdmissionCard";
import AdmissionModal from "./AdmissionModal";

import { GraduationCap, Briefcase, Rocket, Users } from "lucide-react";

export interface AdmissionType {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  steps: string[];
  eligibility: string[];
  documents: string[];
  detailedInfo: string;
}

const admissionTypes: AdmissionType[] = [
{
  id: 1,
  title: "B.Tech Admission through  Counselling",
  icon: <GraduationCap className="w-8 h-8" />,
  description:
    "Admission to B.Tech programs through national and state-level counselling based on JEE Main or JEE Advanced ranks, ensuring a transparent, merit-driven seat allocation process.",
  steps: [
    "Online Registration on Counselling Portal",
    "Choice Filling & Preference Locking",
    "Mock Allotment (if applicable)",
    "Seat Allotment Based on Rank & Preferences",
    "Seat Acceptance & Fee Payment",

  ],
  eligibility: [
    "Qualified JEE Main or JEE Advanced examination",
    "Passed 12th standard with Physics, Chemistry, and Mathematics (PCM)",
    "Minimum 60% aggregate marks in Class 12th (varies by institute/category)",
    "Age limit as per counselling authority guidelines",
  
  ],
  documents: [
    "JEE Main / JEE Advanced Scorecard",
    "JEE Admit Card",
    "Class 12th Marksheet & Passing Certificate",
    "Class 10th Marksheet & Passing Certificate",
    "Category Certificate (SC/ST/OBC/EWS, if applicable)",
  ],
  detailedInfo:
    "B.Tech admission through JEE counselling is the most trusted and merit-based pathway into top engineering colleges in India. National-level counselling is conducted by authorities such as JoSAA and CSAB for IITs, NITs, IIITs, and GFTIs, while state authorities manage admissions to state engineering colleges. Seat allotment is done strictly based on JEE rank, category, availability of seats, and student preferences."
},
{
  id: 2,
  title: "B.Tech Admission through Management Quota",
  icon: <Briefcase className="w-8 h-8" />,
  description:
    "Direct admission pathway offered by private and deemed universities under management quota, providing flexibility in eligibility and faster admission for deserving candidates.",
  steps: [
    "Initial Enquiry & Application Submission",
    "Profile Evaluation & Eligibility Check",
    "Document Verification",
    "Personal Interview / Counselling Session",
    "Seat Confirmation",
    "Fee Payment & Admission Letter",
    "Reporting to College"
  ],
  eligibility: [
    "Passed 12th standard with Physics, Chemistry, and Mathematics (PCM)",
    "Minimum 50% aggregate marks in Class 12th (criteria may vary by institute)",
    "Entrance exam score (JEE/Main or state exam) preferred but not mandatory",
    "Clearing institutional interview or counselling round",
    "Payment of applicable management quota fees"
  ],
  documents: [
    "Class 12th Marksheet & Passing Certificate",
    "Class 10th Marksheet & Passing Certificate",
    "Entrance Exam Scorecard (if available)",
    "Migration Certificate",
    "Transfer Certificate (TC)",
    "Passport Size Photographs",

  ],
  detailedInfo:
    "Management quota admission is an alternative route for students seeking direct entry into B.Tech programs when merit-based counselling options are limited. Seats are allotted at the discretion of the institution, based on academic performance, availability, and interview assessment. This process is faster and more flexible compared to centralized counselling, making it suitable for students who wish to secure admission without extended waiting periods."
},
{
  id: 3,
  title: "B.Tech Direct Admission (Merit-Based)",
  icon: <Rocket className="w-8 h-8" />,
  description:
    "Merit-based direct admission for high-performing students, allowing entry into B.Tech programs without participating in centralized counselling processes.",
  steps: [
    "Eligibility Assessment & Shortlisting",
    "Online Application Submission",
    "Academic Profile Review",
    "Personal Interaction / Verification",
    "Provisional Seat Offer",
    "Fee Payment & Admission Confirmation",
    "Reporting to the Institute"
  ],
  eligibility: [
    "Strong academic performance in Class 12th",
    "Minimum 75% aggregate marks in Physics, Chemistry, and Mathematics (PCM)",
    "Consistent academic record across previous classes",
    "No mandatory entrance exam requirement",
    "Selection strictly based on merit and seat availability"
  ],
  documents: [
    "Class 12th Marksheet & Passing Certificate",
    "Class 10th Marksheet & Passing Certificate",
    "Transfer Certificate (TC)",
    "Character Certificate",
    "Passport Size Photographs",
    "Government ID Proof (Aadhaar/Passport)",
    "Academic Achievement Certificates (Olympiads, Awards, etc., if any)",
    "Provisional Admission / Offer Letter"
  ],
  detailedInfo:
    "The Direct Admission (Merit-Based) pathway is designed for academically strong students who wish to secure B.Tech admission through a simplified and fast-track process. Institutions evaluate candidates based on their Class 12th performance, consistency in academics, and overall profile."
},

{
  id: 4,
  title: "B.Tech Admission through Reference",
  icon: <Users className="w-8 h-8" />,
  description:
    "Admission facilitated through trusted alumni, faculty, and institutional references, offering priority review while maintaining academic and quality standards.",
  steps: [
    "Submission of Valid Reference",
    "Preliminary Eligibility & Profile Screening",
    "Reference Authentication & Verification",
    "Academic Document Verification",
 
  ],
  eligibility: [
    "Valid reference from alumni, faculty member, or institutional associate",
    "Passed 12th standard with Physics, Chemistry, and Mathematics (PCM)",
    "Minimum 55% aggregate marks in Class 12th (criteria may vary by institute)",
    "Successful background and reference verification",
    "Availability of seats in the desired branch"
  ],
  documents: [
    "Reference / Recommendation Letter",
    "Referee Details (Name, Designation, Contact Information)",
    "Class 12th Marksheet & Passing Certificate",
    "Class 10th Marksheet & Passing Certificate",

    "Passport Size Photographs",
    "Government ID Proof",

  ],
  detailedInfo:
    "Reference-based admission utilizes a strong network of alumni, faculty, and institutional partners to identify suitable candidates for B.Tech programs. While referrals allow for priority consideration and smoother coordination, final admission decisions are made strictly after academic evaluation and verification of credentials. This pathway ensures that referred students meet institutional standards while benefiting from guidance and support through the admission process."
}

];

const AdmissionProcessSection = () => {
  const [selectedAdmission, setSelectedAdmission] = useState<AdmissionType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (admission: AdmissionType) => {
    setSelectedAdmission(admission);
    setIsModalOpen(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-saffron-50 to-white py-20 px-4 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-saffron-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-saffron-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-saffron-600 via-saffron-500 to-saffron-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ backgroundSize: "200% 200%" }}
          >
           Admission Process
          </motion.h2>
          
          {/* Animated underline */}
          <motion.div
            className="h-1 bg-gradient-to-r from-saffron-400 via-saffron-500 to-saffron-600 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 200 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text--600 mt-6 text-lg max-w-2xl mx-auto"
          >
            Choose your pathway to success. We offer multiple admission routes tailored to your unique profile and aspirations.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {admissionTypes.map((admission, index) => (
            <AdmissionCard
              key={admission.id}
              admission={admission}
              index={index}
              onClick={() => handleCardClick(admission)}
            />
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AdmissionModal
        admission={selectedAdmission}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default AdmissionProcessSection;
