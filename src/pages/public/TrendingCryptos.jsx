import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { trendingCryptos } from "../../data/trendingCryptos";
import CryptoCard from "../../components/crypto/CryptoCard";
import Hemelt from "../../components/common/Hemelt";

export default function TrendingCryptos() {
  const [cryptos, setCryptos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setCryptos(trendingCryptos);
  }, []);

  const filteredCryptos = cryptos.filter(crypto => {
    if (filter === "all") return true;
    if (filter === "gainers") return crypto.change.startsWith("+");
    if (filter === "losers") return crypto.change.startsWith("-");
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col ">
      
      
      <main className="flex-grow  pb-16">
   
        
        {/* helmet */}
        <Hemelt title="Cryptos Tendances" subtitle="Découvrez les cryptos les plus populaires du moment et commencez à investir dès aujourd'hui." />


        
          {/* CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              Vous voulez vérifier votre compte SIDRA ?
            </h3>
            <Link
              to="/verify"
              className="btn-accent inline-flex items-center px-8 py-3 text-lg"
            >
              Vérifier maintenant
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </Link>
          </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
         
       

          
          {/* Cryptos List */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCryptos.map((crypto, index) => (
              <CryptoCard key={crypto.id} crypto={crypto} index={index} />
            ))}
          </div>

        </div>
      </main>
      
   
    </div>
  );
}