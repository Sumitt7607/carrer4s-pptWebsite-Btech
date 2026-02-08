import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";
import { TestimonialCard, Testimonial } from "./TestimonialCard";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aditya Kumar",
    photo: "/boy1.jpeg",
    college: "Maharaja Agrasen Institute of Technology, Delhi",
    course: "B.Tech Computer Science",
    year: 2023,
    rating: 5,
    quote:
      "Personalized counseling helped me shortlist colleges that perfectly matched my rank and preferences.",
  },
  {
    id: 2,
    name: "Mobin Khan",
    photo: "/boy2 (2).jpeg",
    college: "SRM University",
    course: "B.Tech Mechanical",
    year: 2024  ,
    rating: 5,
    quote:
      "The step-by-step guidance during counseling made the entire admission process smooth and stress-free.",
  },
  {
    id: 3,
    name: "Lakshya Singh",
    photo: "/boy3.jpeg",
    college: "Maharaja Surajmal Institute of Technology",
    course: "B.Tech Electrical",
    year: 2025,
    rating: 4,
    quote:
      "Accurate college predictions and honest advice helped me make a confident decision.",
  },
  {
    id: 4,
    name: "Rimsha",
    photo: "/boy7.jpeg",
    college: "VIT Vellore",
    course: "B.Tech IT",
    year: 2025,
    rating: 5,
    quote:
      "From document verification to final admission, the support team was always available and helpful.",
  },
  {
    id: 5,
    name: "Yash Sharma",
    photo: "/boy5.jpeg",
    college: "Bhartiya Vidyapeeth, Pune",
    course: "B.Tech IT",
    year: 2021,
    rating: 5,
    quote:
      "Clear communication and expert counseling made choosing the right college very easy for me.",
  },
  {
    id: 6,
    name: "Anamika Gupta",
    photo: "/boy8.jpeg",
    college: "Galgotias College, Greater Noida",
    course: "B.Tech Civil",
    year: 2023,
    rating: 4,
    quote:
      "I really appreciated the honest guidance and realistic expectations shared by the counselors.",
  },
  {
    id: 7,
    name: "Pushparaj",
    photo: "/boy4.jpeg",
    college: "Shri Ram College of Engineering and Management, Delhi",
    course: "B.Tech ECE",
    year: 2025,
    rating: 5,
    quote:
      "The counseling sessions cleared all my doubts and helped me secure admission in a reputed college.",
  },
];


type Position = "current" | "prev" | "next" | "hidden";

export const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [pause, setPause] = useState<boolean>(false);

  const next = useCallback(() => {
    setCurrentIndex((i) => (i + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrentIndex(
      (i) => (i - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    if (pause) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [pause, next]);

  const getPosition = (index: number): Position => {
    if (index === currentIndex) return "current";
    if (index === (currentIndex - 1 + testimonials.length) % testimonials.length)
      return "prev";
    if (index === (currentIndex + 1) % testimonials.length) return "next";
    return "hidden";
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-saffron/20 blur-3xl rounded-full" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-saffron/10 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-saffron/10 border border-saffron/30 mb-4">
            <GraduationCap className="text-saffron w-5 h-5" />
            <span className="text-saffron text-sm font-medium">
              B.Tech Admission Success
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-saffron via-orange-400 to-saffron bg-clip-text text-transparent">
              10000+
            </span>{" "}
            B.Tech Admissions
          </h2>
{/* 
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Real student stories from IITs, NITs, DTU, VIT and top engineering colleges.
          </p> */}
        </div>

        {/* Carousel */}
        <div
          className="relative h-[380px] flex items-center justify-center"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={t.id}
              testimonial={t}
              position={getPosition(i)}
              isActive={i === currentIndex}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={prev}
            className="border-saffron/40 text-saffron hover:bg-saffron hover:text-black rounded-full"
          >
            <ChevronLeft />
          </Button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={cn(
                  "h-2.5 rounded-full transition-all",
                  i === currentIndex
                    ? "w-8 bg-saffron"
                    : "w-2.5 bg-saffron/30"
                )}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={next}
            className="border-saffron/40 text-saffron hover:bg-saffron hover:text-black rounded-full"
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </section>
  );
};
