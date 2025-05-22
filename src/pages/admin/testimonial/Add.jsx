import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaSave, FaStar } from 'react-icons/fa';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../../firebase';

const TestimonialAdd = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    content: '',
    rating: 5,
    image: ''
  });
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      await addDoc(collection(db, 'testimonials'), {
        ...formData,
        rating: parseInt(formData.rating),
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });

      navigate('/admin/testimonials');
    } catch (error) {
      console.error("Erreur lors de l'ajout du témoignage:", error);
    } finally {
      setUploading(false);
    }
  };

  const renderStars = () => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar 
        key={i}
        className={`h-6 w-6 cursor-pointer ${i < formData.rating ? "text-yellow-400" : "text-gray-300"}`}
        onClick={() => handleRatingChange(i + 1)}
      />
    ));
  };

  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <button onClick={() => navigate('/admin/testimonials')} className="mr-4 text-gray-600 hover:text-gray-900">
          <FaArrowLeft className="text-xl" />
        </button>
        <h1 className="text-2xl font-bold">Ajouter un témoignage</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <form onSubmit={handleSubmit}>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                />
              </div>
              
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                  Rôle/Fonction
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                  URL de la photo
                </label>
                <input
                  type="url"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                  placeholder="https://example.com/photo.jpg"
                />
                {formData.image && (
                  <div className="mt-2">
                    <img src={formData.image} alt="Preview" className="h-20 w-20 rounded-full object-cover" />
                  </div>
                )}
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Note
                </label>
                <div className="flex space-x-1">
                  {renderStars()}
                </div>
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                  Témoignage
                </label>
                <textarea
                  id="content"
                  name="content"
                  rows="4"
                  value={formData.content}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition"
                ></textarea>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 px-6 py-3 flex justify-end border-t border-gray-200">
            <button
              type="submit"
              disabled={uploading}
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center disabled:opacity-50"
            >
              {uploading ? 'Envoi en cours...' : (
                <>
                  <FaSave className="mr-2" />
                  Ajouter le témoignage
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestimonialAdd;