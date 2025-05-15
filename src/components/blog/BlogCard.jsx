import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function BlogCard({ post, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card overflow-hidden group"
    >
      <div className="relative overflow-hidden h-60">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={post.image}
          alt={post.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <Link
            to={`/blog/${post.slug}`}
            className="btn-secondary inline-flex items-center"
          >
            Lire l'article
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>5 min read</span>
        </div>
        <Link
          to={`/blog/${post.slug}`}
          className="block text-xl font-heading font-bold text-primary mb-3 hover:text-accent transition-colors line-clamp-2"
        >
          {post.title}
        </Link>
        <p className="text-neutral-600 mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full object-cover mr-3"
            src={post.authorAvatar}
            alt={post.author}
          />
          <div>
            <p className="font-medium text-primary">{post.author}</p>
            <p className="text-sm text-gray-500">Expert Crypto</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}