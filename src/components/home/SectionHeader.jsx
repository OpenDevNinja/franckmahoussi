import { motion } from 'framer-motion';

const SectionHeader = ({ 
  title, 
  subtitle, 
  titleClassName = "",
  subtitleClassName = "",
  containerClassName = "",
  animationDelay = 0
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6,
        delay: animationDelay,
        ease: [0.16, 1, 0.3, 1]
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={`text-center mb-12 ${containerClassName}`}
    >
      <motion.h2 
        className={`text-3xl md:text-4xl font-bold mb-4  text-secondary-600 ${titleClassName}`}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3 }
        }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className={`text-lg md:text-xl text-gray-700 max-w-2xl mx-auto ${subtitleClassName}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: animationDelay + 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeader;