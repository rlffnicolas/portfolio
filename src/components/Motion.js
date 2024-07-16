import React from 'react';
import { motion } from "framer-motion"

const Motion = ({children}) => {
    
    return (
        <motion.div
            initial={{ 
                position: 'fixed',
                top: '10%',
                left: '20%',
                width: '100%',
                height: '100%',
                opacity: 0,
             }}
            animate={{ 
                rotate: 0, 
                top: '2%',
                opacity: 1,
             }}
            exit={{ 
                opacity: 0,
                top: '-10%',
             }}
            transition={{ 
                type: "spring",
                stiffness: 150,
                damping: 18,
             }}
        >
            {children}
        </motion.div>
    )   
}

export default Motion;