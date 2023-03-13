import Link from "next/link"


export default function BlogPost() {
    return <div>
        <h1>Contact landing page</h1>
        <Link href="/">Home</Link>
        <Link href={`/blog/whateverVariable`}>Blog</Link>
        </div>
}