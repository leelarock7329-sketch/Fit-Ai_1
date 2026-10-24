import type { Workout, Product, UserProfile } from './types';
import { Gender, ActivityLevel, Goal } from './types';

export const mockWorkouts: Workout[] = [
  {
    id: 'w1',
    name: "Full Body Foundation",
    category: "Beginner",
    goal: "Strength",
    duration: 45,
    equipment: ["Dumbbells", "Bench"],
    imageUrl: "https://cdn.muscleandstrength.com/sites/default/files/ms_full_body_routine_-_1200x630.jpg",
    exercises: [
      { name: "Goblet Squat", sets: "3", reps: "8-12", description: "Hold a dumbbell vertically against your chest. Squat down until your hips are parallel to the floor." },
      { name: "Dumbbell Bench Press", sets: "3", reps: "8-12", description: "Lie on a bench with a dumbbell in each hand. Press the weights up until your arms are fully extended." },
      { name: "Bent-Over Dumbbell Row", sets: "3", reps: "8-12", description: "Hinge at your hips with a flat back, holding dumbbells. Row the weights up to your chest." },
      { name: "Overhead Press", sets: "3", reps: "8-12", description: "Stand with dumbbells at your shoulders. Press them overhead until your arms are straight." },
    ],
  },
  {
    id: 'w2',
    name: "Upper Body Builder",
    category: "Intermediate",
    goal: "Hypertrophy",
    duration: 60,
    equipment: ["Barbell", "Dumbbells", "Pull-up Bar", "Bench"],
    imageUrl: "https://gym-pin.co.uk/cdn/shop/articles/upper-body-gym-exercises-stack-machines-gympin.jpg?v=1716985805",
    exercises: [
       { name: "Barbell Bench Press", sets: "4", reps: "6-10", description: "Lie on a bench and press a barbell from your chest to full extension." },
       { name: "Pull-ups", sets: "4", reps: "As many as possible", description: "Hang from a bar and pull your chin over it." },
       { name: "Seated Dumbbell Shoulder Press", sets: "3", reps: "10-15", description: "Sit on a bench and press dumbbells overhead." },
       { name: "Barbell Curls", sets: "3", reps: "10-12", description: "Curl a barbell towards your chest, keeping elbows tight." },
    ]
  },
  {
    id: 'w3',
    name: "Lower Body Power",
    category: "Advanced",
    goal: "Strength",
    duration: 75,
    equipment: ["Barbell", "Squat Rack", "Leg Press Machine"],
    imageUrl: "https://picsum.photos/seed/workout3/600/400",
    exercises: [
      { name: "Barbell Back Squat", sets: "5", reps: "3-5", description: "With a barbell on your upper back, squat down until your thighs are parallel to the floor." },
      { name: "Deadlift", sets: "3", reps: "3-5", description: "Lift a loaded barbell off the floor until you are standing upright." },
      { name: "Leg Press", sets: "4", reps: "8-10", description: "Push a weighted platform away from you with your feet." },
      { name: "Calf Raises", sets: "4", reps: "15-20", description: "Stand on a ledge and raise your heels." },
    ]
  },
  {
    id: 'w4',
    name: "HIIT Cardio Blast",
    category: "Intermediate",
    goal: "Fat Loss",
    duration: 20,
    equipment: ["Bodyweight"],
    imageUrl: "https://picsum.photos/seed/workout4/600/400",
    exercises: [
      { name: "Burpees", sets: "5 rounds", reps: "45s on, 15s off", description: "A full body exercise used in strength training and as an aerobic exercise." },
      { name: "High Knees", sets: "5 rounds", reps: "45s on, 15s off", description: "Run in place, bringing your knees up as high as possible." },
      { name: "Jumping Jacks", sets: "5 rounds", reps: "45s on, 15s off", description: "A physical jumping exercise performed by jumping to a position with the legs spread wide." },
      { name: "Mountain Climbers", sets: "5 rounds", reps: "45s on, 15s off", description: "From a plank position, alternate bringing your knees to your chest." },
    ]
  },
];

export const mockProducts: Product[] = [
  {
    id: 'p1',
    name: "Pro Whey Protein",
    category: "Supplements",
    brand: "FitFuel",
    price: 49.99,
    rating: 4.8,
    imageUrl: "https://picsum.photos/seed/product1/400/400",
    description: "High-quality whey protein for muscle recovery and growth. 25g of protein per serving."
  },
  {
    id: 'p2',
    name: "Adjustable Dumbbell Set",
    category: "Equipment",
    brand: "IronGrip",
    price: 299.99,
    rating: 4.9,
    imageUrl: "https://picsum.photos/seed/product2/400/400",
    description: "A versatile set of adjustable dumbbells, ranging from 5 to 50 lbs. Perfect for home gyms."
  },
  {
    id: 'p3',
    name: "Performance T-Shirt",
    category: "Apparel",
    brand: "AeroFit",
    price: 24.99,
    rating: 4.5,
    imageUrl: "https://picsum.photos/seed/product3/400/400",
    description: "A lightweight, breathable t-shirt designed for maximum comfort during intense workouts."
  },
  {
    id: 'p4',
    name: "Pre-Workout Igniter",
    category: "Supplements",
    brand: "FitFuel",
    price: 39.99,
    rating: 4.7,
    imageUrl: "https://picsum.photos/seed/product4/400/400",
    description: "Explosive energy and focus to power through your toughest workouts. Great taste and mixability."
  },
  {
    id: 'p5',
    name: "Classic Shaker Bottle",
    category: "Apparel",
    brand: "AeroFit",
    price: 9.99,
    rating: 4.9,
    imageUrl: "https://picsum.photos/seed/product5/400/400",
    description: "28oz shaker bottle with a leak-proof lid and blender ball for smooth, lump-free shakes."
  },
  {
    id: 'p6',
    name: "Yoga Mat",
    category: "Equipment",
    brand: "ZenFlex",
    price: 34.99,
    rating: 4.6,
    imageUrl: "https://picsum.photos/seed/product6/400/400",
    description: "Extra-thick, non-slip yoga mat for comfort and stability during your practice."
  },
];

export const defaultUserProfile: UserProfile = {
  name: "",
  age: 30,
  gender: Gender.Male,
  height: 180,
  weight: 80,
  activityLevel: ActivityLevel.ModeratelyActive,
  goal: Goal.MaintainWeight,
  dietaryPreferences: "None",
};