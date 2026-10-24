
import React, { useState, useEffect, useCallback } from 'react';
import type { UserProfile, CartItem, Product } from './types';
import { defaultUserProfile } from './data';
import { OnboardingWizard } from './components/OnboardingWizard';
import { Dashboard } from './components/Dashboard';
import { Button } from './components/UI';
import { SunIcon, MoonIcon, ShoppingCartIcon } from './components/Icons';


// --- App Context for global state ---
interface AppContextType {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    cart: CartItem[];
    addToCart: (product: Product) => void;
    userProfile: UserProfile;
    updateProfile: (profile: UserProfile) => void;
}

// In a real app, this would be in its own file (e.g., contexts/AppContext.tsx)
// But for simplicity, we define it here.
const AppContext = React.createContext<AppContextType | null>(null);
const useAppContext = () => {
    const context = React.useContext(AppContext);
    if (!context) throw new Error("useAppContext must be used within an AppProvider");
    return context;
};

// --- Landing Page Component ---
const LandingPage = ({ onLogin }: { onLogin: () => void }) => (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background dark:bg-dark-background text-center p-4">
        <div className="absolute top-4 right-4">
            <ThemeToggle />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-primary">FitForge AI</h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground dark:text-dark-muted-foreground max-w-2xl">
            Your personalized fitness journey starts here. AI-powered workouts, diet plans, and the best gear, all in one place.
        </p>
        <div className="mt-8">
            <Button onClick={onLogin} className="px-8 py-6 text-lg">Get Started</Button>
        </div>
    </div>
);

// --- Theme Toggle Component ---
const ThemeToggle = () => {
    const { theme, toggleTheme } = useAppContext();
    return (
        <button onClick={toggleTheme} className="p-2 rounded-full bg-secondary dark:bg-dark-secondary hover:bg-muted dark:hover:bg-dark-muted transition-colors">
            {theme === 'light' ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
        </button>
    );
}

// --- Main App Component ---
function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userProfile, setUserProfile] = useState<UserProfile>(defaultUserProfile);
    const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [cart, setCart] = useState<CartItem[]>([]);
    
    // --- Theme Management ---
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(theme === 'light' ? 'dark' : 'light');
        root.classList.add(theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    
    // --- Auth & Onboarding Logic ---
    const handleLogin = () => {
        setIsAuthenticated(true);
        // In a real app, you'd fetch user data. Here we check if the default name is present.
        if (userProfile.name === "") {
            setIsOnboardingOpen(true);
        }
    };

    const handleOnboardingSubmit = (profile: UserProfile) => {
        setUserProfile(profile);
        setIsOnboardingOpen(false);
    };
    
    // --- Cart Logic ---
    const addToCart = useCallback((product: Product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
        // Simple feedback
        alert(`${product.name} added to cart!`);
    }, []);

    const contextValue: AppContextType = {
        theme,
        toggleTheme,
        cart,
        addToCart,
        userProfile,
        updateProfile: setUserProfile,
    };
    
    return (
        <AppContext.Provider value={contextValue}>
            <div className={`theme-${theme}`}>
                {!isAuthenticated ? (
                    <LandingPage onLogin={handleLogin} />
                ) : (
                    <>
                        <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
                            <div className="relative">
                                <ShoppingCartIcon className="h-8 w-8 text-foreground dark:text-dark-foreground" />
                                {cart.length > 0 && 
                                    <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                        {cart.reduce((sum, item) => sum + item.quantity, 0)}
                                    </span>
                                }
                            </div>
                            <ThemeToggle />
                        </div>
                        <Dashboard 
                            userProfile={userProfile} 
                            cart={cart}
                            addToCart={addToCart}
                            updateProfile={setUserProfile} 
                        />
                        <OnboardingWizard
                            isOpen={isOnboardingOpen}
                            onSubmit={handleOnboardingSubmit}
                            onClose={() => setIsOnboardingOpen(false)}
                        />
                    </>
                )}
            </div>
        </AppContext.Provider>
    );
}

export default App;
