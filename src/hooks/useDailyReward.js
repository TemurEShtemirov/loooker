import { useEffect, useState } from "react";
import { AVAILABLE_BADGES } from "../data/badges";

export const useDailyReward = () => {
  const [canClaim, setCanClaim] = useState(false);
  const [rewardHistory, setRewardHistory] = useState(() => {
    const saved = localStorage.getItem("looker_rewards");
    return saved ? JSON.parse(saved) : [];
  });
  const [coins, setCoins] = useState(() => {
    const saved = localStorage.getItem("loooker_coins");
    return saved ? parseInt(saved) : 0;
  });

  useEffect(() => {
    const checkRewardStatus = () => {
      const lastClaim = localStorage.getItem("loooker_last_claim");
      const today = new Date().toDateString();

      //INFO Logic check: if lastClaim is not today user can claim
      if (lastClaim !== today) {
        setCanClaim(true);
      }
    };

    checkRewardStatus();
  }, []);
  
  const addCoins = (amount) => {
    setCoins((prev) => {
      const newTotal = prev + amount;
      localStorage.setItem("loooker_coins", newTotal);
      return newTotal;
    });
  };

const claimReward = () => {
  if (!canClaim) return;

  // 1. PICKING LOGIC: Get a random badge from our data file
  const randomIndex = Math.floor(Math.random() * AVAILABLE_BADGES.length);
  const reward = AVAILABLE_BADGES[randomIndex];

  // 2. THE MEANING: Add the 50 coin "Daily Salary"
  const dailyBonus = 50;
  addCoins(dailyBonus); // This is the function we'll add to handle the math

  // 3. PERSISTENCE: Save everything
  const today = new Date().toDateString();
  const newHistory = [...rewardHistory, { ...reward, date: today }];

  setRewardHistory(newHistory);
  localStorage.setItem("loooker_rewards", JSON.stringify(newHistory));
  localStorage.setItem("loooker_last_claim", today);

  // 4. THE UI LOCK: Prevent claiming twice
  setCanClaim(false);

  // 5. THE HAPTIC: iOS 26 "Liquid Snap" feel
  if (navigator.vibrate) {
    navigator.vibrate([15, 30, 15]);
  }

  return { reward, dailyBonus };
};


  return { canClaim, rewardHistory, claimReward, coins, addCoins };
};
