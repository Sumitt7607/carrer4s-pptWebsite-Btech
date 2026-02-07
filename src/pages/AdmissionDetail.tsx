import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Phone, Mail, MessageCircle, CheckCircle2, FileText, IndianRupee, GraduationCap } from "lucide-react";
import { admissionTypes } from "@/components/data/admissionData";
import { Button } from "@/components/ui/button";

const AdmissionDetail = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();

  const admission = admissionTypes.find((a) => a.id === type);

  if (!admission) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Admission type not found</h1>
          <Button onClick={() => navigate("/")} variant="outline">Go Back Home</Button>
        </div>
      </div>
    );
  }

  const Icon = admission.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-gradient-to-br from-saffron-darker via-saffron-dark to-saffron text-saffron-foreground py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6 text-saffron-foreground/80 hover:text-saffron-foreground hover:bg-saffron-foreground/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-saffron-foreground/15">
              <Icon className="h-8 w-8" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">{admission.title}</h1>
          </div>
          <p className="mt-4 text-lg text-saffron-foreground/80 max-w-2xl">
            {admission.shortDescription}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* Steps */}
        <Section icon={<GraduationCap className="h-5 w-5" />} title="Step-by-Step Process">
          <ol className="space-y-4">
            {admission.steps.map((step, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-saffron text-saffron-foreground text-sm font-bold">
                  {i + 1}
                </span>
                <span className="pt-1 text-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </Section>

        {/* Eligibility */}
        <Section icon={<CheckCircle2 className="h-5 w-5" />} title="Eligibility Criteria">
          <ul className="space-y-3">
            {admission.eligibility.map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-saffron-dark mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Documents */}
        <Section icon={<FileText className="h-5 w-5" />} title="Required Documents">
          <ul className="grid sm:grid-cols-2 gap-3">
            {admission.documents.map((doc, i) => (
              <li key={i} className="flex gap-2 items-start text-sm">
                <span className="text-saffron-dark mt-0.5">•</span>
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Fee */}
        <Section icon={<IndianRupee className="h-5 w-5" />} title="Fee Structure">
          <div className="rounded-lg border border-saffron/30 bg-saffron/5 p-6">
            <p className="text-lg font-semibold text-saffron-darker">{admission.feeRange}</p>
            <p className="text-sm text-muted-foreground mt-1">
              *Fees are approximate and may vary. Contact us for exact figures.
            </p>
          </div>
        </Section>

        {/* Contact */}
        <Section icon={<Phone className="h-5 w-5" />} title="Contact Us for Inquiries">
          <div className="flex flex-wrap gap-4">
            <ContactButton icon={<Phone className="h-4 w-4" />} label="+91 98765 43210" href="tel:+919876543210" />
            <ContactButton icon={<Mail className="h-4 w-4" />} label="info@btechadmissions.com" href="mailto:info@btechadmissions.com" />
            <ContactButton icon={<MessageCircle className="h-4 w-4" />} label="WhatsApp Us" href="https://wa.me/919876543210" />
          </div>
        </Section>
      </div>
    </div>
  );
};

const Section = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <div>
    <div className="flex items-center gap-2 mb-4">
      <span className="text-saffron-dark">{icon}</span>
      <h2 className="text-xl font-bold text-foreground">{title}</h2>
    </div>
    {children}
  </div>
);

const ContactButton = ({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-lg border border-saffron/30 bg-saffron-dark px-4 py-2.5 text-sm font-medium text-saffron-foreground transition-colors hover:bg-saffron"
  >
    {icon} {label}
  </a>
);

export default AdmissionDetail;

