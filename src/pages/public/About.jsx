import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUsers, FaTrophy, FaLightbulb, FaHandshake } from 'react-icons/fa';

const About = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "À propos | EliteShop";
    window.scrollTo(0, 0);
  }, [location]);

  const features = [
    {
      icon: <FaUsers className="text-4xl text-primary-600" />,
      title: "Équipe d'Experts",
      description: "Notre équipe est composée de professionnels passionnés avec des années d'expérience."
    },
    {
      icon: <FaTrophy className="text-4xl text-secondary-600" />,
      title: "Qualité Premium",
      description: "Nous sélectionnons rigoureusement chaque produit et service pour garantir excellence."
    },
    {
      icon: <FaLightbulb className="text-4xl text-accent-600" />,
      title: "Innovation Constante",
      description: "Nous restons à la pointe de la technologie pour vous offrir les dernières innovations."
    },
    {
      icon: <FaHandshake className="text-4xl text-purple-600" />,
      title: "Engagement Client",
      description: "Votre satisfaction est notre priorité absolue. Nous sommes là pour vous à chaque étape."
    }
  ];

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold mb-4">À propos de EliteShop</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez notre histoire, notre mission et les valeurs qui nous animent.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-md p-8 mb-12"
        >
          <h2 className="text-2xl font-bold mb-4">Notre Histoire</h2>
          <div className="prose max-w-none text-gray-700">
            <p>
              Fondé en 2015, EliteShop est né de la passion pour la technologie et l'innovation. 
              Ce qui a commencé comme une petite boutique en ligne s'est rapidement transformé en 
              une référence dans le domaine des produits high-tech et des services spécialisés.
            </p>
            <p>
              Au fil des années, nous avons élargi notre offre pour inclure des formations 
              expertes en cryptomonnaies, répondant ainsi à la demande croissante de connaissances 
              dans ce domaine en pleine expansion.
            </p>
            <p>
              Aujourd'hui, nous sommes fiers de servir des milliers de clients à travers le monde, 
              avec un engagement inébranlable envers la qualité, l'innovation et la satisfaction client.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Nos Valeurs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Les principes qui guident chacune de nos actions et décisions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-primary-600 text-white rounded-xl shadow-md p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Notre Mission</h2>
          <p className="text-lg max-w-3xl mx-auto">
            "Fournir des produits et services technologiques de qualité supérieure, accompagnés 
            d'un savoir-faire expert, pour permettre à nos clients de tirer le meilleur parti 
            des innovations numériques."
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;