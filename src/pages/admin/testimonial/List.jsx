import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash, FaPlus, FaSearch, FaStar } from 'react-icons/fa';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../../firebase';

const TestimonialList = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'testimonials'));
        const testimonialsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name || '',
          role: doc.data().role || '',
          content: doc.data().content || '',
          rating: doc.data().rating || 0,
          image: doc.data().image || '',
          ...doc.data()
        }));
        setTestimonials(testimonialsData);
      } catch (error) {
        console.error("Erreur lors du chargement des témoignages:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchTestimonials();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce témoignage ?')) {
      try {
        await deleteDoc(doc(db, 'testimonials', id));
        setTestimonials(testimonials.filter(testimonial => testimonial.id !== id));
      } catch (error) {
        console.error("Erreur lors de la suppression:", error);
      }
    }
  };

  const filteredTestimonials = testimonials.filter(testimonial => {
    const name = testimonial.name?.toLowerCase() || '';
    const content = testimonial.content?.toLowerCase() || '';
    const term = searchTerm.toLowerCase();
    
    return name.includes(term) || content.includes(term);
  });

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar 
        key={i} 
        className={i < rating ? "text-yellow-400" : "text-gray-300"} 
      />
    ));
  };

  if (loading) return <div className="p-6">Chargement...</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gestion des Témoignages</h1>
        <Link
          to="/admin/testimonials/add"
          className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <FaPlus className="mr-2" />
          Ajouter un témoignage
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden mb-6">
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Rechercher des témoignages..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Personne
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Témoignage
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Note
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTestimonials.length > 0 ? (
                filteredTestimonials.map((testimonial) => (
                  <tr key={testimonial.id}>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          {testimonial.image ? (
                            <img 
                              className="h-10 w-10 rounded-full object-cover" 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                            />
                          ) : (
                            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                              <span className="text-gray-500 text-xs">Photo</span>
                            </div>
                          )}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{testimonial.name}</div>
                          <div className="text-sm text-gray-500">{testimonial.role}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 line-clamp-2">{testimonial.content}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex">
                        {renderStars(testimonial.rating)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Link
                        to={`/admin/testimonials/edit/${testimonial.id}`}
                        className="text-primary-600 hover:text-primary-900 mr-4 inline-block"
                      >
                        <FaEdit />
                      </Link>
                      <button
                        onClick={() => handleDelete(testimonial.id)}
                        className="text-red-600 hover:text-red-900 inline-block"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">
                    Aucun témoignage trouvé
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TestimonialList;