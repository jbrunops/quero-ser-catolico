import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PrayerApp from "./pages/PrayerApp";
import RosaryApp from "./pages/RosaryApp";
import IntroductionPage from "./pages/IntroductionPage";
import NotFound from "./pages/NotFound";
import { useState, useEffect } from "react";

const App = () => {
  // Create a new QueryClient instance inside the component
  const [queryClient] = useState(() => new QueryClient());

  // Adiciona configuração para viewport móvel
  useEffect(() => {
    // Ajusta o viewport para dispositivos móveis
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0');
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <BrowserRouter>
            <div className="flex flex-col min-h-screen max-w-full overflow-x-hidden">
              <Header />
              <main className="flex-grow w-full px-0">
                <Routes>
                  <Route path="/" element={<IntroductionPage />} />
                  <Route path="/terco" element={<PrayerApp />} />
                  <Route path="/rosario" element={<RosaryApp />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
