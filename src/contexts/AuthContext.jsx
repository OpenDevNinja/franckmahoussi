// src/contexts/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase'; // Import des configurations Firebase
import { 
  signInWithEmailAndPassword, // Pour la connexion email/mot de passe
  signOut, // Pour la déconnexion
  onAuthStateChanged, // Pour observer les changements d'état d'authentification
  sendPasswordResetEmail // Pour la réinitialisation de mot de passe (optionnel)
} from 'firebase/auth';

// Création du contexte d'authentification
const AuthContext = createContext();

// Fournisseur d'authentification qui englobera toute l'application
export const AuthProvider = ({ children }) => {
  // État pour stocker les informations de l'utilisateur connecté
  const [user, setUser] = useState(null);
  // État pour gérer le chargement pendant les opérations d'authentification
  const [loading, setLoading] = useState(true);
  // Hook de navigation pour rediriger l'utilisateur
  const navigate = useNavigate();

  // Effet pour vérifier l'état d'authentification au chargement de l'application
  useEffect(() => {
    // onAuthStateChanged observe les changements d'état d'authentification
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // Si un utilisateur est connecté avec Firebase
        setUser({
          uid: firebaseUser.uid, // ID unique Firebase
          email: firebaseUser.email, // Email de l'utilisateur
          displayName: firebaseUser.displayName || 'Admin', // Nom affiché
          role: 'admin' // Rôle par défaut (peut être étendu avec Firestore)
        });
      } else {
        // Si aucun utilisateur n'est connecté
        setUser(null);
      }
      // Une fois l'état vérifié, on arrête le chargement
      setLoading(false);
    });

    // Nettoyage : on se désabonne de l'observateur quand le composant est démonté
    return () => unsubscribe();
  }, []);

  /**
   * Fonction de connexion
   * @param {string} email - Email de l'administrateur
   * @param {string} password - Mot de passe
   * @returns {boolean} True si la connexion réussit, false sinon
   */
  const login = async (email, password) => {
    try {
      setLoading(true);
      // Tentative de connexion avec Firebase Auth
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;
      
      // Mise à jour de l'état utilisateur
      setUser({
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName || 'Admin',
        role: 'admin'
      });
      
      return true; // Connexion réussie
    } catch (error) {
      console.error("Erreur de connexion:", error);
      return false; // Échec de la connexion
    } finally {
      setLoading(false);
    }
  };

  /**
   * Fonction de déconnexion
   */
  const logout = async () => {
    try {
      // Déconnexion avec Firebase Auth
      await signOut(auth);
      // Réinitialisation de l'état utilisateur
      setUser(null);
      // Redirection vers la page de login
      navigate('/admin/login');
    } catch (error) {
      console.error("Erreur de déconnexion:", error);
    }
  };

  /**
   * Fonction pour réinitialiser le mot de passe (optionnel)
   * @param {string} email - Email pour l'envoi du lien de réinitialisation
   * @returns {boolean} True si l'email est envoyé, false sinon
   */
  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return true;
    } catch (error) {
      console.error("Erreur d'envoi d'email de réinitialisation:", error);
      return false;
    }
  };

  // Valeurs fournies par le contexte à tous les composants enfants
  const value = {
    user,       // Utilisateur actuel
    loading,    // État de chargement
    login,      // Fonction de connexion
    logout,     // Fonction de déconnexion
    resetPassword // Fonction de réinitialisation de mot de passe
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Hook personnalisé pour utiliser le contexte d'authentification
 * @returns {Object} Le contexte d'authentification
 * @throws {Error} Si utilisé en dehors d'un AuthProvider
 */
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth doit être utilisé à l\'intérieur d\'un AuthProvider');
  }
  return context;
};