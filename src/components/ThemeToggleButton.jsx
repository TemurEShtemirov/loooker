import React from 'react';
import { motion } from 'framer-motion';

const ThemeToggleButton = ({ isDarkMode, toggleTheme }) => {
    // Component body starts here
    const handleThemeClick = () => {
        toggleTheme();

        // Adding that "v1.2" haptic juice
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    };

    return (
        <motion.button
            onClick={handleThemeClick} // Point this to your new function
            className="fluid-btn fixed top-8 right-8 z-[999] min-w-[120px] min-h-[30px] text-[10px] font-mono tracking-widest"
            whileHover={{
                scale: 1.05,
                borderRadius: "20px 20px 20px 20px", // Rounded, but not distorted
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                transition: { duration: 0.3 }
                // Removed fixed height/width here to prevent "ugly" stretching
            }}
            whileTap={{ scale: 0.95 }}
        >
            <span className="flex items-center gap-2">
                {isDarkMode ? '🌙 DARK_MODE' : '☀️ LIGHT_MODE'}
            </span>
        </motion.button>
    );
};

export default ThemeToggleButton;