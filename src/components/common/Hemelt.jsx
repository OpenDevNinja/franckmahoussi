import { sub } from 'framer-motion/client'
import React from 'react'

const Hemelt = ({title, subtitle}) => {
  return (
    <div>

         <div className="bg-gradient-to-r from-primary to-accent py-20 text-center">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
             {title}
            </h1>
            <p className="text-xl text-light/80 max-w-3xl mx-auto">
            {subtitle}
              </p>
          </div>
        </div>

      
    </div>
  )
}

export default Hemelt
