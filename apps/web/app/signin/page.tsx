"use client"
//import './signin.css'
import React,{useState} from "react"
import {useRouter} from "next/navigation"
import Link from "next/link"
import styles from "../signup/signup.module.css"

export default function SigninPage(){
    const [username,setUsername] = useState('')
    const [password,setPassword]=useState('')
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)
    const router = useRouter()

    const handleSignin = async (e:React.FormEvent)=>{
        e.preventDefault()
        setError('')
        setLoading(true)

        try{
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/signin`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({username,password})
            })
            const data = await response.json();
            if(!response.ok){
                setError(data.message || "Signin failed")
                return
            }

            localStorage.setItem('authToken',data.token)
            router.push('/dashboard')
        }catch(err){
            setError("An error occured during signin")
            console.error(err)
        }finally{
            setLoading(false)
        }
    }

    return(
        <div className={styles.authContainer}>
            <div className={styles.authCard}>
                <h1>Signin</h1>
                {error && <div className={styles.errorMessage}>{error}</div>}
                <form onSubmit={handleSignin}>
                    <div className={styles.formGroup}>
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                            required
                            placeholder="Username"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" disabled={loading} className={styles.submitBtn}>
                        {loading ? 'Signing in...' : 'Signin'}
                    </button>
                </form>
                <p className={styles.authLink}>
                    Don't have an account? <Link href="/signup">Signup here</Link>
                </p>
            </div>
        </div>
    )
}