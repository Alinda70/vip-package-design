"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface User {
  id: string
  email: string
  username: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  signUp: (email: string, password: string, username: string) => Promise<{ success: boolean; error?: string }>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const storedUser = localStorage.getItem("clevva_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Get stored users
    const users = JSON.parse(localStorage.getItem("clevva_users") || "[]")
    const foundUser = users.find((u: { email: string; password: string }) => 
      u.email === email && u.password === password
    )
    
    if (foundUser) {
      const userData = { id: foundUser.id, email: foundUser.email, username: foundUser.username }
      setUser(userData)
      localStorage.setItem("clevva_user", JSON.stringify(userData))
      return { success: true }
    }
    
    return { success: false, error: "Invalid email or password" }
  }

  const signUp = async (email: string, password: string, username: string): Promise<{ success: boolean; error?: string }> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Get stored users
    const users = JSON.parse(localStorage.getItem("clevva_users") || "[]")
    
    // Check if email already exists
    if (users.some((u: { email: string }) => u.email === email)) {
      return { success: false, error: "Email already registered" }
    }
    
    // Create new user
    const newUser = {
      id: crypto.randomUUID(),
      email,
      password,
      username
    }
    
    users.push(newUser)
    localStorage.setItem("clevva_users", JSON.stringify(users))
    
    // Auto login after signup
    const userData = { id: newUser.id, email: newUser.email, username: newUser.username }
    setUser(userData)
    localStorage.setItem("clevva_user", JSON.stringify(userData))
    
    return { success: true }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("clevva_user")
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
