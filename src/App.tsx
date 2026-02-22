import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceArea from "./pages/ServiceArea";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Book from "./pages/Book";
import NotFound from "./pages/NotFound";
import TreadmillRepair from "./pages/TreadmillRepair";
import EllipticalRepair from "./pages/EllipticalRepair";
import ExerciseBikeRepair from "./pages/ExerciseBikeRepair";
import FitnessEquipmentRepair from "./pages/FitnessEquipmentRepair";
import CityAreaPage from "./components/CityAreaPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/service-area" element={<ServiceArea />} />
          <Route path="/service-area/:city" element={<CityAreaPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
          <Route path="/treadmill-repair" element={<TreadmillRepair />} />
          <Route path="/elliptical-repair" element={<EllipticalRepair />} />
          <Route path="/exercise-bike-repair" element={<ExerciseBikeRepair />} />
          <Route path="/fitness-equipment-repair" element={<FitnessEquipmentRepair />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>

            {/* Vercel Analytics */}
        <Analytics />
        <SpeedInsights />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
