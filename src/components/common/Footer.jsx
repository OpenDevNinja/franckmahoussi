import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-4">
            F M Services
            </h3>
            <p className="text-gray-400 mb-6">
              Votre destination premium pour les produits technologiques, services de qualité et formations expertes en cryptomonnaies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Accueil</a></li>
              <li><a href="/products" className="text-gray-400 hover:text-white transition-colors">Produits</a></li>
              <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="/crypto-courses" className="text-gray-400 hover:text-white transition-colors">Formations Crypto</a></li>
              <li><a href="/delivery" className="text-gray-400 hover:text-white transition-colors">Livraison</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Formations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Livraison Express</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Stockage Sécurisé</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Audit Crypto</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support 24/7</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contactez-nous</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">📞</span>
                <span className="text-gray-400">+123 456 7890</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">✉️</span>
                <span className="text-gray-400">contact@eliteshop.com</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">📍</span>
                <span className="text-gray-400">123 Rue de la Tech, Paris, France</span>
              </li>
              <li>
                <a 
                  href="https://wa.me/1234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <FaWhatsapp className="mr-2" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} EliteShop. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Conditions générales</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Politique de confidentialité</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;