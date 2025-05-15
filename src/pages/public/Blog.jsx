import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../../components/blog/BlogCard";
import { blogPosts } from "../../data/blogPosts";
import Hemelt from "../../components/common/Hemelt";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setPosts(blogPosts);
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
    
      
      <main className="flex-grow  pb-16">
        
         {/* helmet */}
        <Hemelt
         title="Blogs"
         subtitle=" Analyses approfondies, guides pratiques et dernières tendances du marché des cryptomonnaies."
        />



        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Search */}
          <div className="mb-12 max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher des articles..."
                className="input-field pl-12 pr-4 py-3 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute left-4 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['Tous', 'Bitcoin', 'Ethereum', 'DeFi', 'NFT', 'Investissement'].map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full border border-primary/30 text-primary hover:bg-primary/5 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts */}
          {filteredPosts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-heading font-bold text-primary mb-2">Aucun résultat trouvé</h3>
              <p className="text-neutral-600">Essayez avec d'autres termes de recherche</p>
            </div>
          )}
        </div>
      </main>
      
     
    </div>
  );
}