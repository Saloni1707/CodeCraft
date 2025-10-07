"use client"
import React,{useState} from 'react';
import {useRouter} from 'next/navigation'
import Link from 'next/link'

export default function SignupPage(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const [loading,setLoading]=useState(false);
    const router = useRouter();

    const handleSignup = async (e:React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true)
        try{
            const response = await fetch('/api/users/signup',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({email,password}),
            })
            const data = await response.json()
            if(!response.ok){
                setError(data.message || 'Signup failed')
                return
            }
        }catch(err){
            setError('An error occured during signup')
            console.error(err)
        }finally{
            setLoading(false)
        }

    }

    return(
        <div className="auth-container">
            <div className='auth-card'>
                <h1>Signup</h1>
                {error && <div className='error-message'>{error}</div>}
                <form onSubmit={handleSignup}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email} 
                            onChange={(e)=>setEmail(e.target.value)}
                            required
                            placeholder='your@email.com' 
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            required
                            placeholder='Enter your password'
                        />
                    </div>

                    <button type="submit" disabled={loading} className='submit-btn'>
                        {loading ? 'Signing up...' : 'Signup'}
                    </button>
                </form>
                <p className="auth-link">
                    Already have an account? <Link href="/signin">Signin here</Link>
                </p>
            </div>
        </div>
    )
}