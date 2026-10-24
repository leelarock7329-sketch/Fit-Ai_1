
import { ActivityLevel, Gender, Goal } from "./types";

export const GENDER_OPTIONS = Object.values(Gender);
export const ACTIVITY_LEVEL_OPTIONS = Object.values(ActivityLevel);
export const GOAL_OPTIONS = Object.values(Goal);

export const ACTIVITY_LEVEL_FACTORS: Record<ActivityLevel, number> = {
  [ActivityLevel.Sedentary]: 1.2,
  [ActivityLevel.LightlyActive]: 1.375,
  [ActivityLevel.ModeratelyActive]: 1.55,
  [ActivityLevel.VeryActive]: 1.725,
  [ActivityLevel.ExtraActive]: 1.9,
};

export const GOAL_CALORIE_ADJUSTMENT: Record<Goal, number> = {
  [Goal.LoseWeight]: -500,
  [Goal.MaintainWeight]: 0,
  [Goal.GainWeight]: 500,
};

export const MACRO_DISTRIBUTION: Record<Goal, { protein: number; carbs: number; fat: number }> = {
  [Goal.LoseWeight]: { protein: 0.4, carbs: 0.3, fat: 0.3 },
  [Goal.MaintainWeight]: { protein: 0.3, carbs: 0.4, fat: 0.3 },
  [Goal.GainWeight]: { protein: 0.35, carbs: 0.45, fat: 0.2 },
};
