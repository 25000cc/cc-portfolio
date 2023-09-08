import Link from "next/link"
import About from "./about/page"

export default function Home() {
  return (
    <>
    <h1>Home</h1>
    <p><Link href="/about">About</Link></p>
    </>
  )
}
