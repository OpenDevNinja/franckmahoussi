import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaClock } from 'react-icons/fa';


const Contact = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    document.title = "Contact | CryptoSphere";
    window.scrollTo(0, 0);
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous ajouteriez la logique pour envoyer le formulaire
    alert('Message envoyé! Notre équipe vous répondra sous 24h.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: <FaMapMarkerAlt className="text-2xl text-secondary" />,
      title: "Adresse",
      details: "BOHICON Qt Agbanweme C/CB AKOVI ANTOINE",
      link: "https://maps.google.com"
    },
    {
      icon: <FaPhone className="text-2xl text-secondary" />,
      title: "Téléphone",
      details: "+229 01 40 30 22 44",
      link: "tel:+33123456789"
    },
    {
      icon: <FaEnvelope className="text-2xl text-secondary" />,
      title: "Email",
      details: "supports@franckmahoussi.com",
      link: "mailto:supports@franckmahoussi.com"
      
    },
    {
      icon: <FaClock className="text-2xl text-secondary" />,
      title: "Horaires",
      details: "Lun-Ven: 08h-18h | Sam: 09h-17h",
      link: null
    }
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
                Contactez Notre Équipe
              </h1>
              <p className="text-xl text-light/80 max-w-3xl mx-auto">
                Notre équipe d'experts est disponible pour répondre à toutes vos questions sur les cryptomonnaies.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              >
                <h2 className="text-3xl font-heading font-bold text-primary mb-8">
                  Envoyez-nous un message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nom complet *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field w-full"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field w-full"
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Sujet *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="input-field w-full"
                      placeholder="Objet de votre message"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="input-field w-full"
                      placeholder="Décrivez votre demande en détail..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-primary to-accent rounded-xl text-white w-full py-3 text-lg font-heading"
                  >
                    Envoyer le message
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                  </button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Contact Methods */}
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                  <h2 className="text-3xl font-heading font-bold text-primary mb-8">
                    Nos coordonnées
                  </h2>
                  
                  <div className="space-y-6">
                    {contactMethods.map((method, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-secondary/10 p-3 rounded-lg mr-4">
                          {method.icon}
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-lg text-primary mb-1">{method.title}</h3>
                          {method.link ? (
                            <a 
                              href={method.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-gray-600 hover:text-secondary transition-colors"
                            >
                              {method.details}
                            </a>
                          ) : (
                            <p className="text-gray-600">{method.details}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="bg-gradient-to-r from-primary to-accent rounded-2xl shadow-xl p-8 md:p-12 text-white">
                  <h2 className="text-2xl font-heading font-bold mb-4">Support Instantané</h2>
                  <p className="mb-6 opacity-90">
                    Pour une assistance immédiate, contactez notre équipe via WhatsApp :
                  </p>
                  <a
                    href="https://wa.me/+33123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex ml-3.5 items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    <FaWhatsapp className="mr-3 text-xl" />
                    Discuter sur WhatsApp
                  </a>
                </div>

               
              </motion.div>
            </div>
             {/* Map */}
               {/*  <div className="bg-white rounded-2xl shadow-xl mt-24 overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1623258136849!5m2!1sfr!2sfr"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Carte Google Maps"
                  ></iframe>
                </div> */}
          </div>
        </section>
      </main>
      
     
    </div>
  );
};

export default Contact;