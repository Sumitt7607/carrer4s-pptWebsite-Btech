import { useParams, Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { counselingData, getIconComponent } from "./data/counselingData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Calendar,
  FileText,
  Users,
  Building2,
  Clock,
  HelpCircle,
  CreditCard,
  BookOpen,
  Target,
} from "lucide-react";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const CounselingDetail = () => {
  const { id } = useParams();
  const counseling = counselingData.find((c) => c.id === id);

  if (!counseling) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Counseling Not Found</h1>
      </div>
    );
  }

  const IconComponent = getIconComponent(counseling.icon);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{counseling.name}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero */}
        <motion.section variants={sectionVariants} initial="hidden" animate="visible">
          <Card>
            <CardContent className="p-8 flex gap-6 items-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <IconComponent className="h-10 w-10 text-white" />
              </div>
              <div className="flex-1">
                <h1 className="text-4xl font-bold">{counseling.name}</h1>
                <p className="text-muted-foreground">{counseling.fullName}</p>
                <div className="flex gap-4 mt-3">
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {counseling.totalSeats} Seats
                  </span>
                  <span className="flex items-center gap-1">
                    <Building2 className="h-4 w-4" />
                    {counseling.participatingColleges} Colleges
                  </span>
                </div>
              </div>
              <a href={counseling.website} target="_blank" rel="noreferrer">
                <Button>
                  Official Website <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </motion.section>

        {/* Overview */}
        <motion.section variants={sectionVariants}>
          <SectionHeader icon={BookOpen} title="Overview" />
          <Card>
            <CardContent className="p-6 space-y-4">
              <p>{counseling.description}</p>
              <p><strong>Organizing Body:</strong> {counseling.organizingBody}</p>
              <ul className="space-y-2">
                {counseling.eligibility.map((e, i) => (
                  <li key={i} className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    {e}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.section>

        {/* Admission Process */}
        {counseling.admissionProcess?.length > 0 && (
          <motion.section variants={sectionVariants}>
            <SectionHeader icon={Target} title="Admission Process" />
            <Card>
              <CardContent className="p-6 space-y-6">
                {counseling.admissionProcess.map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-semibold">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                      {step.duration && (
                        <Badge variant="outline" className="mt-1">
                          <Clock className="h-3 w-3 mr-1" />
                          {step.duration}
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.section>
        )}

        {/* Participating Institutes (Delhi) */}
        {counseling.participatingInstitutes?.length > 0 && (
          <motion.section variants={sectionVariants}>
            <SectionHeader icon={Building2} title="Participating Institutes" />
            <Card>
              <CardContent className="p-6 grid md:grid-cols-2 gap-3">
                {counseling.participatingInstitutes.map((inst) => (
                  <div key={inst} className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    {inst}
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.section>
        )}

        {/* Seat Matrix */}
        {/* <motion.section variants={sectionVariants}>
          <SectionHeader icon={Users} title="Seat Matrix" />
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Category</TableHead>
                  <TableHead>Institution</TableHead>
                  <TableHead>Seats</TableHead>
                  <TableHead>Branches</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {counseling.seatMatrix?.length ? (
                  counseling.seatMatrix.map((row) => (
                    <TableRow key={row.category}>
                      <TableCell>{row.category}</TableCell>
                      <TableCell>{row.institution}</TableCell>
                      <TableCell>{row.seats}</TableCell>
                      <TableCell>{row.branches.join(", ")}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-muted-foreground">
                      Seat matrix will be updated soon.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Card>
        </motion.section> */}

        {/* Documents */}
        {counseling.requiredDocuments?.length > 0 && (
          <motion.section variants={sectionVariants}>
            <SectionHeader icon={FileText} title="Required Documents" />
            <Card>
              <CardContent className="p-6 grid md:grid-cols-2 gap-3">
                {counseling.requiredDocuments.map((doc, i) => (
                  <div key={i} className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    {doc}
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.section>
        )}

        {/* Fees */}
        {counseling.feeStructure?.length > 0 && (
          <motion.section variants={sectionVariants}>
            <SectionHeader icon={CreditCard} title="Fee Structure" />
            <div className="grid md:grid-cols-3 gap-4">
              {counseling.feeStructure.map((fee, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>{fee.type}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xl font-bold">{fee.amount}</p>
                    <p className="text-muted-foreground">{fee.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>
        )}

        {/* Important Dates */}
        {counseling.importantDates?.length > 0 && (
          <motion.section variants={sectionVariants}>
            <SectionHeader icon={Calendar} title="Important Dates" />
            <div className="grid md:grid-cols-3 gap-4">
              {counseling.importantDates.map((d, i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <p className="font-semibold">{d.event}</p>
                    <p className="text-muted-foreground">{d.date}</p>
                    <Badge variant="outline">{d.status}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>
        )}

        {/* FAQs */}
        {counseling.faqs?.length > 0 && (
          <motion.section variants={sectionVariants}>
            <SectionHeader icon={HelpCircle} title="FAQs" />
            <Card>
              <CardContent className="p-6">
                <Accordion type="single" collapsible>
                  {counseling.faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.section>
        )}
      </main>
    </div>
  );
};

// Section Header
const SectionHeader = ({
  icon: Icon,
  title,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
}) => (
  <div className="flex items-center gap-2 mb-4">
    <Icon className="h-5 w-5 text-primary" />
    <h2 className="text-xl font-bold">{title}</h2>
  </div>
);

export default CounselingDetail;
