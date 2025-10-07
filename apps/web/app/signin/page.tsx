"use client"

import React,{useState} from "react"
import {useRouter} from "next/navigation"
import Link from "next/link"

export default function SigninPage(){
    const [email,setEmail] = useState('')
    const [password,setPassword]=useState('')
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)
    const router = useRouter()

    const handleSignin = async (e:React.FormEvent)=>{
        e.preventDefault()
        setError('')
        setLoading(true)

        try{
            const response = await fetch('/api/user/signin',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({email,password})
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
        <div className="auth-container">
            <div className="auth-card">
                <h1>Signin</h1>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSignin}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            required
                            placeholder="your@email.com"
                        />
                    </div>
                    <div className="form-group">
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
                    <button type="submit" disabled={loading} className="submit-btn">
                        {loading ? 'Signing in...' : 'Signin'}
                    </button>
                </form>
                <p className="auth-link">
                    Don't have an account? <Link href="/signup">Signup here</Link>
                </p>
            </div>
        </div>
    )
}