import { motion } from "framer-motion";

const Shape = ({ x, y, size, color, onClick }) => {
    return (
        <motion.div
            onClick={onClick}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, left: `${x}%`, top: `${y}%` }}
            exit={{ scale: 0 }}
            // Spring transition makes it "pop" out
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="absolute rounded-full cursor-pointer shadow-lg"
            style={{
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: color, // Solid colors work best for the liquid effect
                boxShadow: `0 0 20px ${color}88`,
            }}
        />
    );
};

export default Shape;