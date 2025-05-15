import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUsers, FaTrophy, FaLightbulb, FaHandshake, FaChartLine } from 'react-icons/fa';


const About = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "À propos | CryptoSphere";
    window.scrollTo(0, 0);
  }, [location]);

  const features = [
    {
      icon: <FaUsers className="text-4xl text-secondary" />,
      title: "Équipe d'Experts",
      description: "Nos analystes crypto possèdent plus de 10 ans d'expérience combinée dans les marchés blockchain."
    },
    {
      icon: <FaTrophy className="text-4xl text-secondary" />,
      title: "Analyses Premium",
      description: "Nos rapports mensuels sont reconnus comme références dans l'industrie des cryptomonnaies."
    },
    {
      icon: <FaLightbulb className="text-4xl text-secondary" />,
      title: "Innovation",
      description: "Nous développons constamment de nouveaux outils pour simplifier votre expérience d'investissement."
    },
    {
      icon: <FaChartLine className="text-4xl text-secondary" />,
      title: "Performance",
      description: "Nos portefeuilles recommandés ont surperformé le marché de 47% en 2023."
    }
  ];

  const stats = [
    { value: "10K+", label: "Utilisateurs actifs" },
    { value: "95%", label: "Satisfaction client" },
    { value: "24/7", label: "Support disponible" },
    { value: "2015", label: "Année de création" }
  ];

  return (
    <div className="min-h-screen flex flex-col ">
    
      
      <main className="flex-grow ">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary to-accent text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('https://assets.website-files.com/5f16d3f9836e6e4c0a9e22d5/5f1a8b4f8b9b3b2b1c1c1c1c_pattern-dark.svg')]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Notre Mission 
              </h1>
              <p className="text-xl text-light/80 max-w-3xl mx-auto">
                Démocratiser l'accès aux opportunités d'investissement blockchain grâce à une expertise de qualité.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Our Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                    Notre Histoire
                  </h2>
                  <div className="prose text-gray-700">
                    <p className="mb-4">
                      Fondé en 2015 par des passionnés de blockchain, F M Services est né de la conviction que les cryptomonnaies allaient révolutionner la finance mondiale.
                    </p>
                    <p className="mb-4">
                      Ce qui a commencé comme un petit blog technique est rapidement devenu une référence dans l'analyse des marchés crypto, avec une communauté de plus de 10 000 investisseurs actifs.
                    </p>
                    <p>
                      Aujourd'hui, nous proposons une suite complète d'outils pour les investisseurs, des formations certifiantes et des analyses de marché reconnues dans toute l'industrie.
                    </p>
                  </div>
                </div>
                <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" 
                    alt="Notre équipe" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                    <span className="text-white font-medium">L'équipe F M Services en 2023</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-md p-6 text-center border border-gray-100"
                >
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-3xl font-heading font-bold text-primary mb-4">Nos Valeurs</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
                Les principes fondamentaux qui guident chacune de nos actions
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -10 }}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-primary mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Team CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center text-white"
            >
              <h2 className="text-3xl font-heading font-bold mb-6"> Notre Missions</h2>
              <p className="text-xl text-light/80 max-w-3xl mx-auto mb-8">
               Fournir des produits et services technologiques de qualité supérieure, accompagnés 
            d'un savoir-faire expert, pour permettre à nos clients de tirer le meilleur parti 
            des innovations numériques et démocratiser l'accès aux opportunités d'investissement blockchain grâce à une expertise de qualité.
              </p>
              <button
              // navigate to contact page
              onClick={() => window.location.href = '/contact'}
              className="bg-white text-primary px-8 py-3 rounded-lg font-heading font-bold hover:bg-light transition-colors">
                Contactez nous
              </button>
            </motion.div>
          </div>
        </section>
      </main>
      
      
    </div>
  );
};

export default About;