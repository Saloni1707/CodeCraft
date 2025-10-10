"use client"
import styles from "./signin.module.css"
import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function SigninPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })
      const data = await response.json()
      if (!response.ok) {
        setError(data.message || "Signin failed")
        return
      }

      localStorage.setItem("authToken", data.token)
      router.push("/dashboard")
    } catch (err) {
      setError("An error occured during signin")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles["auth-container"]}>
      <div className={styles["auth-card"]}>
        <h1>Sign in</h1>
        {error && <div className={styles["error-message"]}>{error}</div>}
        <form onSubmit={handleSignin}>
          <div className={styles["form-group"]}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Username"
            />
          </div>
          <div className={styles["form-group"]}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" disabled={loading} className={styles["submit-btn"]}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
        <p className={styles["auth-link"]}>
          Don't have an account? <Link href="/signup">Sign up here</Link>
        </p>
      </div>
    </div>
  )
}
