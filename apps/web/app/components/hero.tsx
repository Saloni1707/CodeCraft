"use client"

import Link from "next/link"

export function Hero(){
    return(
        <div className="w-full text-center">
            <div className="inline-block rounded-2xl bg-secondary/60 px-4 py-2 text-sm font-medium text-muted-foreground shadow-soft border-1px">
                Coding Challenges
            </div>
            <h1 className="mt-6 text-pretty text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
                Ship web dev Challenges
                <br className="hidden md:block"/>
                that feel real, not boilerplate
            </h1>
            <div className="mt-8 flex items-center justify-center">
            <Link
                href="/signup"
                className="
                    px-10 py-5 text-xl font-semibold rounded-full
                    bg-black text-white
                    shadow-[0_8px_20px_rgba(0,0,0,0.4)]
                    transition-all duration-300 ease-out
                    hover:bg-gray-800 hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)]
                    active:scale-95
                "
                >
                GET STARTED
                </Link>
            </div>
            <div className="mx-auto mt-8 max-w-2xl rounded-xl border-2 border-dotted border-muted-foreground/50 bg-card/70 p-6 shadow-soft">
                <p className="text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
                    A curated series of hands-on tasks with clear specs and edge cases so you practice like
                    you ship.
                </p>
            </div>
            <p className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground">
                Join the community of web developers 
            </p>
        </div>
    )
}