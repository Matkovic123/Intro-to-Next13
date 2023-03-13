'use client'
// Next components are server side by default
import Link from "next/link"
import {useRouter } from 'next/navigation';


export default function BlogPost() {
    const router = useRouter();
    return <div>
        <h1>Contact landing page</h1>
        <Link href="/">Home</Link>
        <Link href={`/blog/whateverVariable`}>Blog</Link>
        <button onClick={() => router.push("/")}>home</button>
        </div>
}