import NavBar from "@/app/_components/navbar/Navbar"

export default function Home() {
  const pageList = [
    "About",
    "Contact us"
  ]
  return(
    <div>
      <NavBar pages={pageList}/>
    </div>
  )
}