
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import InternshipOffers from "./pages/InternshipOffers";
import InternshipDetails from "./pages/InternshipDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import StudentApplications from "./pages/StudentApplications";
import StudentProfile from "./pages/StudentProfile";
import StudentRecommendedOffers from "./pages/StudentRecommendedOffers";
import CompanyDashboard from "./pages/CompanyDashboard";
import CompanyPostOffer from "./pages/CompanyPostOffer";
import CompanyProfile from "./pages/CompanyProfile";
import CompanyReceivedApplications from "./pages/CompanyReceivedApplications";
import CompanyApplicationDetails from "./pages/CompanyApplicationDetails";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/internship-offers" element={<InternshipOffers />} />
            <Route path="/internship/:id" element={<InternshipDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            {/* Student Routes */}
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/student/applications" element={<StudentApplications />} />
            <Route path="/student/profile" element={<StudentProfile />} />
            <Route path="/student/recommended-offers" element={<StudentRecommendedOffers />} />
            
            {/* Company Routes */}
            <Route path="/company/dashboard" element={<CompanyDashboard />} />
            <Route path="/company/post-offer" element={<CompanyPostOffer />} />
            <Route path="/company/profile" element={<CompanyProfile />} />
            <Route path="/company/received-applications" element={<CompanyReceivedApplications />} />
            <Route path="/company/application/:id" element={<CompanyApplicationDetails />} />
            
            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
