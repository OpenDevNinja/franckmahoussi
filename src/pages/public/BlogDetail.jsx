import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../../data/blogPosts";
import { motion } from "framer-motion";


export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const foundPost = blogPosts.find((p) => p.slug === slug);
    setPost(foundPost);

    // Simuler des articles similaires
    if (foundPost) {
      setRelatedPosts(
        blogPosts
          .filter((p) => p.id !== foundPost.id)
          .slice(0, 3)
      );
    }
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
     
      
      <main className="flex-grow ">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary to-accent py-20 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('https://assets.website-files.com/5f16d3f9836e6e4c0a9e22d5/5f1a8b4f8b9b3b2b1c1c1c1c_pattern-dark.svg')]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
             
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 text-light/80">
                <div className="flex items-center">
                  <img
                    className="w-10 h-10 rounded-full object-cover mr-3"
                    src={post.authorAvatar}
                    alt={post.author}
                  />
                  <span>{post.author}</span>
                </div>
                <span className="hidden sm:block">•</span>
                <span>{post.date}</span>
                <span className="hidden sm:block">•</span>
                <span>8 min de lecture</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="prose prose-lg max-w-none"
            >
              <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12">
                {['Blockchain', 'Investissement', 'Technologie'].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Author Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-16 pt-8 border-t border-gray-200"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                <img
                  className="w-20 h-20 rounded-full object-cover"
                  src={post.authorAvatar}
                  alt={post.author}
                />
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-heading font-bold text-primary">
                    {post.author}
                  </h3>
                  <p className="text-secondary mb-3">Expert en cryptomonnaies</p>
                  <p className="text-neutral-600 max-w-2xl">
                    {post.author} est un analyste chevronné avec plus de 10 ans d'expérience dans les technologies blockchain et les marchés cryptos. Ses analyses sont régulièrement citées dans les médias spécialisés.
                  </p>
                  <div className="flex justify-center md:justify-start space-x-4 mt-4">
                    {['twitter', 'linkedin', 'medium'].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="text-gray-400 hover:text-secondary transition-colors"
                      >
                        <span className="sr-only">{social}</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mt-16"
              >
                <h3 className="text-2xl font-heading font-bold text-primary mb-8">
                  Articles similaires
                </h3>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {relatedPosts.map((relatedPost) => (
                    <div key={relatedPost.id} className="card overflow-hidden group">
                      <Link to={`/blog/${relatedPost.slug}`} className="block">
                        <div className="relative h-40 overflow-hidden">
                          <img
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            src={relatedPost.image}
                            alt={relatedPost.title}
                          />
                        </div>
                        <div className="p-6">
                          <h4 className="text-lg font-heading font-bold text-primary mb-2 line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-neutral-600 text-sm mb-3">{relatedPost.date}</p>
                          <p className="text-neutral-600 line-clamp-3">{relatedPost.excerpt}</p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Newsletter CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8 md:p-12 text-center"
            >
              <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                Ne manquez pas nos prochaines analyses
              </h3>
              <p className="text-neutral-600 max-w-2xl mx-auto mb-6">
                Abonnez-vous à notre newsletter pour recevoir les derniers articles et analyses directement dans votre boîte mail.
              </p>
              <form className="max-w-md mx-auto flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="input-field flex-grow rounded-r-none border-r-0"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary rounded-l-none px-6"
                >
                  S'abonner
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      
      
    </div>
  );
}