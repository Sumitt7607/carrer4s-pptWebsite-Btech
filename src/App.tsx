import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BTech from "./pages/BTech";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import AdmissionProcess from "./components/AdmissionProcess";
import TopUniversitiesSection from "./components/TopUniversitiesSection";
import IITNITIIITPage from "./components/IITNITIIITPage";
import CentralUniversityPage from "./components/CentralUniversityPage";
import StateUniversityPage from "./components/StateUniversityPage";
import DeemedPrivatePage from "./components/DeemedPrivatePage";
import ComputerScience from "./components/ComputerScience";
import Electronics from "./components/Electronics";
import ArtificialIntelligence from "./components/ArtificialIntelligence";
import DataScience from "./components/DataScience";
import Mechanical from "./components/Mechanical";
import Electrical from "./components/Electrical";
import InformationTechnology from "./components/InformationTechnology";
import Civil from "./components/Civil";
import Chemical from "./components/Chemical";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
     
      <BrowserRouter>
       <ScrollToTop />
        <Routes>
          {/* <Route path="/" element={<Index />} /> */}
          <Route path="/" element={<BTech />} />
          <Route path="/admission-process" element={<AdmissionProcess />} />
          <Route path="/top-universities" element={<TopUniversitiesSection />} />
<Route path="/colleges/iit-nit-iiit" element={<IITNITIIITPage />} />
<Route path="/colleges/central-universities" element={<CentralUniversityPage />} />
<Route path="/colleges/state-universities" element={<StateUniversityPage />} />
<Route path="/colleges/deemed-private" element={<DeemedPrivatePage />} />
<Route path="/computer-science" element={<ComputerScience />} />
<Route path="/electronics" element={<Electronics />} />
<Route path="/artificial-intelligence" element={<ArtificialIntelligence />} />
<Route path="/data-science" element={<DataScience />} />
<Route path="/mechanical" element={<Mechanical />} />
<Route path="/information-technology" element={<InformationTechnology />} />
<Route path="/electrical" element={<Electrical/>} />
<Route path="/chemical" element={<Chemical/>} />
<Route path="/civil" element={<Civil/>} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
