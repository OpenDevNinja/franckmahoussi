// deliveryOptions.js
export const deliveryOptions = [
  {
    id: 1,
    name: "Standard",
    description: "Livraison économique en 3-5 jours ouvrables",
    price: 1000.00,
    deliveryTime: "3-5 jours",
    icon: "🚛",
    features: [
      "Suivi de colis basique",
      "Assurance 100%",
      "Livraison en point relais",
      "Emballage standard"
    ]
  },
  {
    id: 2,
    name: "Express",
    description: "Livraison rapide en 1-2 jours ouvrables",
    price: 1500.00,
    deliveryTime: "1-2 jours",
    icon: "✈️",
    recommended: true,
    features: [

      "Assurance 100%",
      "Livraison à domicile",
      "Emballage renforcé",
      "Service client prioritaire"
    ]
  },
  {
    id: 3,
    name: "Premium",
    description: "Livraison le jour même pour les urgences",
    price: 2000.00,
    deliveryTime: "Le jour même",
    icon: "⚡",
    features: [
      "Suivi GPS en direct",
      "Assurance 100%",
      "Livraison express en 2h",
      "Fenêtre horaire de 1h",
      "Service client dédié",
      "Emballage premium"
    ]
  },
  /*   {
      id: 4,
      name: "International Standard",
      description: "Livraison économique à l'international",
      price: 24.99,
      deliveryTime: "7-10 jours",
      icon: "🌍",
      features: [
        "Suivi international",
        "Dédouanement inclus",
        "Assurance jusqu'à 200XOF",
        "Documents d'export fournis"
      ]
    },
    {
      id: 5,
      name: "International Express",
      description: "Livraison rapide à l'international",
      price: 49.99,
      deliveryTime: "3-5 jours",
      icon: "🚀",
      features: [
        "Suivi prioritaire 24/7",
        "Dédouanement accéléré",
        "Assurance jusqu'à 1000XOF",
        "Service client international",
        "Documents d'export premium"
      ]
    } */
];