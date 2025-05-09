import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import SEO from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <SEO 
        title="Página não encontrada | Quero Ser Católico"
        description="A página que você procura não foi encontrada. Retorne para a página inicial para continuar navegando pelo Quero Ser Católico."
        canonical="https://www.querosercatolico.com.br/404"
      />
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-primary-50 p-4">
        <div className="max-w-lg text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
              <span className="text-5xl font-bold text-primary-800">404</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">Página Não Encontrada</h1>
          <p className="text-lg text-primary-700/80 mb-6 max-w-sm mx-auto">
            Sentimos muito, mas a página que você está procurando não foi encontrada ou foi movida.
          </p>
          <p className="text-primary-600/70 mb-8">
            Sugerimos que você retorne para a página inicial e continue sua jornada de fé.
          </p>
          <Link to="/">
            <Button className="bg-primary hover:bg-primary/90 text-white font-medium py-5 px-6 rounded-lg flex items-center gap-2 shadow-md mx-auto">
              <HomeIcon size={18} />
              Voltar para a Página Inicial
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
