import NavBar from "@/app/_components/navbar/NavBar"
import Layout from "@/app/layout"
import Image from "next/image"

export default function Home() {
  const pageList = ["About", "Contact us"]
  const navList = ["about", "contact-us"]
  return (
    <Layout>
      <NavBar pages={pageList} links={navList} />
      <div
        className="flex flex-col items-center justify-center h-full
        uppercase text-center text-2xl font-light md:text-4xl space-y-2 md:space-y-4"
      >
        <span className="text-xl md:text-3xl">Official Page for</span>
        <span>Team Wanderlust, IIIT Hyderabad</span>
        <Image src="/logo.png" alt="Logo" width={500} height={500} className="border-solid border-2 border-black rounded-full" />
      </div>
    </Layout>
  )
}