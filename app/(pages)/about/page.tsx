import NavBar from "@/app/_components/navbar/NavBar"
import Layout from "@/app/layout"

export default function About() {
  const pageList = ["About", "Contact us"]
  const navList = ["about", "contact-us"]
  return (
    <Layout>
        <NavBar pages={pageList} links={navList} />
        <span className="p-2 m-2 text-4xl font-extrabold text-center w-full items-center">About Us</span>
    </Layout>
  )
}