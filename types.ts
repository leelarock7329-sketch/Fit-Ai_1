
export enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other",
}

export enum ActivityLevel {
  Sedentary = "Sedentary",
  LightlyActive = "Lightly Active",
  ModeratelyActive = "Moderately Active",
  VeryActive = "Very Active",
  ExtraActive = "Extra Active",
}

export enum Goal {
  LoseWeight = "Lose Weight",
  MaintainWeight = "Maintain Weight",
  GainWeight = "Gain Muscle",
}

export interface UserProfile {
  name: string;
  age: number;
  gender: Gender;
  height: number; // in cm
  weight: number; // in kg
  activityLevel: ActivityLevel;
  goal: Goal;
  dietaryPreferences: string;
}

export interface Macros {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface Exercise {
  name: string;
  sets: string;
  reps: string;
  videoUrl?: string;
  description: string;
}

export interface Workout {
  id: string;
  name:string;
  category: "Beginner" | "Intermediate" | "Advanced";
  goal: "Strength" | "Hypertrophy" | "Endurance" | "Fat Loss";
  duration: number; // in minutes
  equipment: string[];
  exercises: Exercise[];
  imageUrl: string;
}

export interface Product {
  id: string;
  name: string;
  category: "Equipment" | "Supplements" | "Apparel";
  brand: string;
  price: number;
  rating: number;
  imageUrl: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Meal {
  name: string;
  description: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface DietPlan {
  meals: Meal[];
  snacks: Meal[];
  summary: Macros;
}
