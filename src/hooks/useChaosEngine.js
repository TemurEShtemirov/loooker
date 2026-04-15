export const useChaosEngine = (score, highScore, isActive) => {
  // Only activate chaos if we are past the high score and game is active
  const isBreakingRecord = score > highScore && isActive;

  // Calculate intensity (Pace): Increases every 10 points past the record
  const chaosLevel = isBreakingRecord
    ? Math.floor((score - highScore) / 10)
    : 0;

  // Effects mapped to level
  return {
    isBreakingRecord,
    intensity: Math.min(chaosLevel, 5), // Max intensity cap at 5
    shouldShake: chaosLevel >= 1,
    shouldGlitch: chaosLevel >= 2,
    shouldChromatic: chaosLevel >= 3, // Color splitting effect
  };
};
