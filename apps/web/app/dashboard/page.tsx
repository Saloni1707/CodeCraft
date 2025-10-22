"use cliet";

import { ChallengeCard } from "../components/challengeCard";

type Challenge = {
    id:string
    name:string
    description:string
}

const challenge:Challenge[]=[
    {
        id:"Layout 101",
        name:"Layout 101",
        description:"Learn the basics of layout design"
        
    },
    {
        id:"Layout 102",
        name:"Layout 102",
        description:"Learn the basics of layout design"
    },
    {
        id:"Layout 103",
        name:"Layout 103",
        description:"Learn the basics of layout design"
    }
]

export default function DashboardPage(){
    return(
        <main className="mx-auto w-full max-w-6xl px-4 py-10 md:py-12" aria-label="dashboard-title">
            <header className="mb-8 md:mb-10">
                <h1 id="dashboard-title" className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                    Welcome 
                </h1>
                <p className="mt-2 text-muted-foreground">
                    Pick a challenge below to get started.
                </p>
            </header>
            <section aria-label="Challenges">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {challenge.map((c)=>(
                        <ChallengeCard key={c.id} 
                        name={c.name} 
                        description={c.description}/>
                    ))}
                </div>
            </section>
            
        </main>
    )
}