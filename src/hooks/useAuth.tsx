
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'student' | 'company' | 'admin';
  phone?: string;
  address?: string;
  birthDate?: string;
  profilePicture?: string;
  // Student specific fields
  establishment?: string;
  studyLevel?: string;
  studyField?: string;
  graduationYear?: string;
  // Company specific fields
  companyName?: string;
  sector?: string;
  companyAddress?: string;
  siret?: string;
  companyDescription?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (userData: any) => Promise<boolean>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in (localStorage simulation)
    const savedUser = localStorage.getItem('stagefacile_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user data:', error);
        localStorage.removeItem('stagefacile_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    // Simulate login API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock user data based on email
    let mockUser: User;
    
    if (email === 'admin@stagefacile.com') {
      mockUser = {
        id: '1',
        email,
        firstName: 'Admin',
        lastName: 'StageFacile',
        role: 'admin'
      };
    } else if (email.includes('company') || email.includes('entreprise')) {
      mockUser = {
        id: '2',
        email,
        firstName: 'Jean',
        lastName: 'Entreprise',
        role: 'company',
        companyName: 'TechCorp',
        sector: 'Informatique'
      };
    } else {
      mockUser = {
        id: '3',
        email,
        firstName: 'Marie',
        lastName: 'Étudiant',
        role: 'student',
        establishment: 'Université de Paris',
        studyLevel: 'Master'
      };
    }
    
    setUser(mockUser);
    localStorage.setItem('stagefacile_user', JSON.stringify(mockUser));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('stagefacile_user');
  };

  const register = async (userData: any): Promise<boolean> => {
    setIsLoading(true);
    // Simulate registration API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const newUser: User = {
      id: Date.now().toString(),
      ...userData
    };
    
    setUser(newUser);
    localStorage.setItem('stagefacile_user', JSON.stringify(newUser));
    setIsLoading(false);
    return true;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
