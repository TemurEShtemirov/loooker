import { motion } from "framer-motion";

const Timer = ({ time }) => {
    // Calculate percentage: (current time / max time) * 100
    const percentage = (time / 5) * 100;

    return (
        <div className="w-full max-w-md mx-auto mb-4 px-4">
            <div className="flex justify-between text-white text-sm mb-1 font-mono">
                <span>STAMINA</span>
                <span>{time}s</span>
            </div>

            {/* Background track */}
            <div className="h-3 w-full bg-white/10 rounded-full overflow-hidden border border-white/20 backdrop-blur-md">
                {/* Progress Fill */}
                <motion.div
                    initial={{ width: "100%" }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.5, ease: "linear" }}
                    className={`h-full rounded-full ${time < 2 ? "bg-red-500" : "bg-cyan-400"
                        }`}
                    style={{
                        boxShadow: `0 0 15px ${time < 2 ? "#ef4444" : "#22d3ee"}`,
                    }}
                />
            </div>
        </div>
    );
};

export default Timer;