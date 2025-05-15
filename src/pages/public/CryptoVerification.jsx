import React, { useEffect,useState } from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaCheckCircle, FaWhatsapp, FaClock, FaUserShield, FaChartLine } from 'react-icons/fa';
import { SiBitcoin, SiEthereum } from 'react-icons/si';

const CryptoVerification = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cryptoType: 'bitcoin',
    walletAddress: '',
    verificationType: 'basic'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Générer le message WhatsApp
    const message = `Bonjour, je souhaite un rendez-vous pour vérification crypto:\n\n` +
                    `Nom: ${formData.name}\n` +
                    `Email: ${formData.email}\n` +
                    `Téléphone: ${formData.phone}\n` +
                    `Type de crypto: ${formData.cryptoType}\n` +
                    `Adresse : ${formData.walletAddress}\n` +
                    `Type de vérification: ${formData.verificationType}`;
    
    const whatsappUrl = `https://wa.me/+2290302244?text=${encodeURIComponent(message)}`;
    
    // Redirection après un léger délai pour l'animation
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 1500);
  };

  return (
    <section className="bg-gradient-to-b from-light-100 to-light-300 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center bg-accent-100 text-accent-500 rounded-full p-3 mb-4">
            <FaShieldAlt className="text-2xl" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-500 mb-4">
            Vérification <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent-500">Sécurisée</span> de Comptes Crypto
          </h2>
          <p className="text-lg text-neutral-500 max-w-3xl mx-auto">
            Protégez vos actifs numériques avec notre service de vérification certifiée par des experts blockchain.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Formulaire */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-xl overflow-hidden"
          >
            <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-6 text-white">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <FaUserShield /> Demande de Vérification
              </h3>
              <p className="text-primary-100 mt-1">Remplissez ce formulaire pour prendre rendez-vous avec un expert</p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="p-6 md:p-8">
                <div className="space-y-5">
                  <div>
                    <label className="block text-neutral-700 mb-2 font-medium">Nom complet</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-neutral-700 mb-2 font-medium">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-700 mb-2 font-medium">Téléphone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-neutral-700 mb-2 font-medium">Type de crypto</label>
                    <div className="relative">
                      <select
                        name="cryptoType"
                        value={formData.cryptoType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 appearance-none transition-all"
                      >
                        <option value="bitcoin">Bitcoin (BTC)</option>
                        <option value="ethereum">Ethereum (ETH)</option>
                        <option value="usdt">Tether (USDT)</option>
                        <option value="bnb">Binance Coin (BNB)</option>
                        <option value="other">Autre</option>
                      </select>
                      <div className="absolute right-3 top-3 text-neutral-400">
                        {formData.cryptoType === 'bitcoin' ? (
                          <SiBitcoin className="text-xl text-secondary-500" />
                        ) : formData.cryptoType === 'ethereum' ? (
                          <SiEthereum className="text-xl text-accent-400" />
                        ) : (
                          <FaChartLine className="text-xl text-primary-500" />
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-neutral-700 mb-2 font-medium">Adresse </label>
                    <input
                      type="text"
                      name="walletAddress"
                      value={formData.walletAddress}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 font-mono text-sm transition-all"
                      placeholder="votre adresse ville et quartier"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-neutral-700 mb-2 font-medium">Type de vérification</label>
                    <div className="grid grid-cols-2 gap-3">
                      <label className={`border rounded-lg p-4 cursor-pointer transition-all ${formData.verificationType === 'basic' ? 'border-primary-500 bg-primary-50' : 'border-neutral-300 hover:border-primary-300'}`}>
                        <input
                          type="radio"
                          name="verificationType"
                          value="basic"
                          checked={formData.verificationType === 'basic'}
                          onChange={handleChange}
                          className="hidden"
                        />
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.verificationType === 'basic' ? 'border-primary-500 bg-primary-500' : 'border-neutral-400'}`}>
                            {formData.verificationType === 'basic' && <FaCheckCircle className="text-white text-xs" />}
                          </div>
                          <div>
                            <h4 className="font-medium">Basique</h4>
                            <p className="text-sm text-neutral-500">Vérification standard</p>
                          </div>
                        </div>
                      </label>
                      <label className={`border rounded-lg p-4 cursor-pointer transition-all ${formData.verificationType === 'advanced' ? 'border-primary-500 bg-primary-50' : 'border-neutral-300 hover:border-primary-300'}`}>
                        <input
                          type="radio"
                          name="verificationType"
                          value="advanced"
                          checked={formData.verificationType === 'advanced'}
                          onChange={handleChange}
                          className="hidden"
                        />
                        <div className="flex items-center gap-2">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${formData.verificationType === 'advanced' ? 'border-primary-500 bg-primary-500' : 'border-neutral-400'}`}>
                            {formData.verificationType === 'advanced' && <FaCheckCircle className="text-white text-xs" />}
                          </div>
                          <div>
                            <h4 className="font-medium">Avancée</h4>
                            <p className="text-sm text-neutral-500">Analyse complète</p>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white py-4 px-6 rounded-lg font-bold hover:from-primary-600 hover:to-accent-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    Prendre Rendez-vous <FaWhatsapp className="text-lg" />
                  </button>
                </div>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 text-center"
              >
                <div className="bg-accent-100 text-accent-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaCheckCircle className="text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-dark-500 mb-2">Demande Envoyée!</h3>
                <p className="text-neutral-600 mb-6">Vous allez être redirigé vers WhatsApp pour finaliser votre rendez-vous avec notre expert.</p>
                <div className="flex items-center justify-center text-primary-500 gap-2">
                  <FaClock className="animate-pulse" />
                  <span>Redirection en cours...</span>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Informations */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white p-6 rounded-xl shadow-lg border border-neutral-100">
              <h3 className="text-xl font-bold text-dark-500 mb-4 flex items-center gap-2">
                <FaShieldAlt className="text-primary-500" /> Pourquoi vérifier votre compte crypto?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-primary-100 text-primary-500 p-1 rounded-full mt-1">
                    <FaCheckCircle className="text-sm" />
                  </div>
                  <div>
                    <h4 className="font-medium">Protection contre la fraude</h4>
                    <p className="text-neutral-600 text-sm">Détection des activités suspectes et des wallets blacklistés</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary-100 text-primary-500 p-1 rounded-full mt-1">
                    <FaCheckCircle className="text-sm" />
                  </div>
                  <div>
                    <h4 className="font-medium">Conformité réglementaire</h4>
                    <p className="text-neutral-600 text-sm">Assurez-vous que vos transactions respectent les régulations</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary-100 text-primary-500 p-1 rounded-full mt-1">
                    <FaCheckCircle className="text-sm" />
                  </div>
                  <div>
                    <h4 className="font-medium">Confiance accrue</h4>
                    <p className="text-neutral-600 text-sm">Augmentez la crédibilité de vos transactions</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl shadow-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Notre Processus de Vérification</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium">Analyse du Wallet</h4>
                    <p className="text-primary-100 text-sm">Examen complet de l'historique des transactions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">Vérification de Réputation</h4>
                    <p className="text-primary-100 text-sm">Contrôle des listes noires et des alertes</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">Certification</h4>
                    <p className="text-primary-100 text-sm">Attestation de vérification délivrée</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-neutral-100">
              <h3 className="text-xl font-bold text-dark-500 mb-4">Questions Fréquentes</h3>
              <div className="space-y-4">
                <div className="border-b border-neutral-200 pb-4">
                  <h4 className="font-medium text-neutral-800">Combien de temps prend la vérification?</h4>
                  <p className="text-neutral-600 text-sm mt-1">Entre 24h et 48h selon le type de vérification demandé.</p>
                </div>
                <div className="border-b border-neutral-200 pb-4">
                  <h4 className="font-medium text-neutral-800">Quelles cryptos sont acceptées?</h4>
                  <p className="text-neutral-600 text-sm mt-1">Nous vérifions les principales cryptos : BTC, ETH, USDT, BNB et 50+ autres.</p>
                </div>
                <div>
                  <h4 className="font-medium text-neutral-800">Mes fonds sont-ils en sécurité?</h4>
                  <p className="text-neutral-600 text-sm mt-1">Absolument. Nous n'avons jamais accès à vos fonds, seulement à l'historique public de votre wallet.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CryptoVerification;