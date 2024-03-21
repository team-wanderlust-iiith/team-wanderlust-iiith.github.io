import MemberPaneLarge from "@/app/_components/member_panes/MemberPaneLarge"
import MemberPaneSmall from "@/app/_components/member_panes/MemberPaneSmall"
import NavBar from "@/app/_components/navbar/NavBar"
import Layout from "@/app/layout"
import Image from "next/image"

export default function Home() {
  const pageList = ["About", "Team", "Contact us"]
  const navList = ["#about", "#team", "#contact"]
  return (
    <Layout>
      <NavBar pages={pageList} links={navList} />
      <div className="flex flex-col w-full h-full overflow-y-auto" id="top">
        {/* Introduction */}
        <div
          className="flex flex-col lg:flex-row items-center justify-evenly p-2 md:p-4
          uppercase text-center text-2xl font-light md:text-4xl"
        >
          <div className="flex flex-col">
            <span className="text-xl md:text-3xl mb-2 md:mb-4">Official Page for</span>
            <span className="text-pretty">Team&nbsp;Wanderlust, IIIT&nbsp;Hyderabad</span>
          </div>
          <Image src="/logo.svg" alt="Logo" width={500} height={500} priority />
        </div>
        {/* Brief */}
        <div
          className="flex flex-col items-center justify-evenly
          p-2 md:p-4 bg-blue-200 h-full
          text-center text-lg md:text-xl"
          id="about"
        >
          <span className="p-1 text-2xl md:text-3xl font-bold uppercase text-center w-full items-center">About Us</span>
          <span className="p-2">
            Team Wanderlust is a team of seven third-year and two first-year
            undergraduate students from diverse streams in IIIT Hyderabad, a
            premiere Indian educational institution engaged in inter-disciplinary
            research in fields including Computer Science, Electronics, Communications,
            Natural Sciences, Linguistics, Humanities, etc. to name a few.
          </span>
        </div>
        {/* The Team */}
        <div
          className="flex flex-col items-center justify-evenly
          p-2 md:p-4 bg-slate-900 h-full shadow-lg
          text-center uppercase text-2xl md:text-3xl font-extrabold text-slate-100"
          id="team"
        >
          The Team
        </div>
        {/* Team Leads */}
        <div
          className="flex flex-col flex-grow items-center justify-evenly
          p-2 md:p-4 bg-yellow-500 min-h-max
          text-center text-lg md:text-xl text-yellow-50"
        >
          <span className="uppercase text-2xl md:text-3xl font-bold">Team Leads</span>
          <div
            className="grid grid-cols-1 grid-rows-4 justify-evenly items-start w-full p-2
            lg:grid-cols-4 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-2 md:p-4"
          >
            <MemberPaneLarge src="/members/shreyas_s.jpg" name="Shreyas Kumar Sinha" title="Overall Lead, Structural Systems Lead" />
            <MemberPaneLarge src="/members/shreya_b.jpg" name="Shreya Bollimuntha" title="Management Lead" />
            <MemberPaneLarge src="/members/aditya_p.jpg" name="Aditya Ranjan Padhi" title="Electronic Systems Lead" />
            <MemberPaneLarge src="/members/gnaneswar_k.jpg" name="Gnaneswar Kulindala" title="Communication Systems Lead" />
          </div>
        </div>
        {/* Structural Team */}
        <div
          className="flex flex-col flex-grow items-center justify-evenly
          w-full p-2 md:p-4 bg-orange-500 min-h-max
          text-left text-lg md:text-xl text-orange-50"
        >
          <span className="uppercase text-2xl md:text-3xl font-bold">Structural Systems Team</span>
          <div className="flex flex-col md:flex-row w-full">
            <div
              className="flex flex-col justify-center items-center w-full lg:w-2/3 p-2 md:p-4"
            >
              Hello, what do you do?
            </div>
            <div
              className="flex flex-col justify-center items-start w-full lg:w-1/3 p-2 rounded-2xl shadow-lg md:p-4"
            >
              <MemberPaneSmall src="/members/shreyas_s.jpg" name="Shreyas Kumar Sinha" title="Lead" />
              <MemberPaneSmall src="/members/aditya_p.jpg" name="Aditya Ranjan Padhi" title="Member" />
              <MemberPaneSmall src="/members/shreya_b.jpg" name="Shreya Bollimuntha" title="Member" />
              <MemberPaneSmall src="/members/gnaneswar_k.jpg" name="Gnaneswar Kulindala" title="Member" />
            </div>
          </div>
        </div>
        {/* Electronics Team */}
        <div
          className="flex flex-col flex-grow items-center justify-evenly
          w-full p-2 md:p-4 bg-emerald-400 min-h-max
          text-left text-lg md:text-xl text-emerald-50"
        >
          <span className="uppercase text-2xl md:text-3xl font-bold">Electronic Systems Team</span>
          <div className="flex flex-col md:flex-row w-full">
            <div
              className="flex flex-col justify-center items-center w-full lg:w-2/3 p-2 md:p-4"
            >
              Hello, what do you do?
            </div>
            <div
              className="flex flex-col justify-center items-start w-full lg:w-1/3 p-2 rounded-2xl shadow-lg md:p-4"
            >
              <MemberPaneSmall src="/members/aditya_p.jpg" name="Aditya Ranjan Padhi" title="Lead" />
              <MemberPaneSmall src="/members/shreya_b.jpg" name="Shreya Bollimuntha" title="Member" />
              <MemberPaneSmall src="/members/gnaneswar_k.jpg" name="Gnaneswar Kulindala" title="Member" />
            </div>
          </div>
        </div>
        {/* Communications Team */}
        <div
          className="flex flex-col flex-grow items-center justify-evenly
          w-full p-2 md:p-4 bg-cyan-500 min-h-max
          text-left text-lg md:text-xl text-cyan-50"
        >
          <span className="uppercase text-2xl md:text-3xl font-bold">Communication Systems Team</span>
          <div className="flex flex-col md:flex-row w-full">
            <div
              className="flex flex-col justify-center items-center w-full lg:w-2/3 p-2 md:p-4"
            >
              Hello, what do you do?
            </div>
            <div
              className="flex flex-col justify-center items-start w-full lg:w-1/3 p-2 rounded-2xl shadow-lg md:p-4"
            >
              <MemberPaneSmall src="/members/gnaneswar_k.jpg" name="Gnaneswar Kulindala" title="Lead" />
              <MemberPaneSmall src="/members/aditya_p.jpg" name="Aditya Ranjan Padhi" title="Member" />
              <MemberPaneSmall src="/members/shreya_b.jpg" name="Shreya Bollimuntha" title="Member" />
            </div>
          </div>
        </div>
        {/* Management Team */}
        <div
          className="flex flex-col flex-grow items-center justify-evenly
          w-full p-2 md:p-4 bg-indigo-500 min-h-max
          text-left text-lg md:text-xl text-indigo-50"
        >
          <span className="uppercase text-2xl md:text-3xl font-bold">Management Team</span>
          <div className="flex flex-col md:flex-row w-full">
            <div
              className="flex flex-col justify-center items-center w-full lg:w-2/3 p-2 md:p-4"
            >
              Hello, what do you do?
            </div>
            <div
              className="flex flex-col justify-center items-start w-full lg:w-1/3 p-2 rounded-2xl shadow-lg md:p-4"
            >
              <MemberPaneSmall src="/members/shreya_b.jpg" name="Shreya Bollimuntha" title="Lead" />
              <MemberPaneSmall src="/members/shreyas_s.jpg" name="Shreyas Kumar Sinha" title="Member" />
              <MemberPaneSmall src="/members/aditya_p.jpg" name="Aditya Ranjan Padhi" title="Member" />
              <MemberPaneSmall src="/members/gnaneswar_k.jpg" name="Gnaneswar Kulindala" title="Member" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
