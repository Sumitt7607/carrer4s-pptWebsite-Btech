import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";
import { TestimonialCard, Testimonial } from "./TestimonialCard";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "user1",
    photo: "/boy1.jpeg",
    college: "IIT Delhi",
    course: "B.Tech Computer Science",
    year: 2024,
    rating: 5,
    quote:
      "The counseling helped me choose the right branch and college based on my JEE rank.",
  },
  {
    id: 2,
    name: "user2",
    photo: "/boy2 (2).jpeg",
    college: "NIT Trichy",
    course: "B.Tech Mechanical",
    year: 2024,
    rating: 5,
    quote:
      "Got my dream NIT because of proper guidance and transparent counseling.",
  },
  {
    id: 3,
    name: "user3",
    photo: "/boy3.jpeg",
    college: "DTU Delhi",
    course: "B.Tech Electrical",
    year: 2023,
    rating: 4,
    quote:
      "Best admission guidance platform for engineering aspirants.",
  },
  {
    id: 4,
    name: "user4",
    photo: "/boy7.jpeg",
    college: "VIT Vellore",
    course: "B.Tech IT",
    year: 2024,
    rating: 5,
    quote:
      "Stress-free admission journey with excellent support at every step.",
  },
    {
    id: 5,
    name: "user5",
    photo: "/boy5.jpeg",
    college: "VIT Vellore",
    course: "B.Tech IT",
    year: 2024,
    rating: 5,
    quote:
      "Stress-free admission journey with excellent support at every step.",
  },
  {
    id: 6,
    name: "user6",
    photo: "/boy8.jpeg",
    college: "IIT Bombay",
    course: "B.Tech Civil",
    year: 2023,
    rating: 4,
    quote:
      "The counseling helped me choose the right branch and college based on my JEE rank.",
  },
  {
    id: 7,
    name: "user7",              
    photo: "/boy4.jpeg",
    college: "NIT Warangal",
    course: "B.Tech ECE",             
    year: 2024,
    rating: 5,
    quote:
      "Got my dream NIT because of proper guidance and transparent counseling.",  
  }

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
              500+
            </span>{" "}
            B.Tech Admissions
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto">
            Real student stories from IITs, NITs, DTU, VIT and top engineering colleges.
          </p>
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
