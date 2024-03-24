import MemberPaneLarge from "@/app/_components/member_panes/MemberPaneLarge"
import MemberPaneSmall from "@/app/_components/member_panes/MemberPaneSmall"
import NavBar from "@/app/_components/navbar/NavBar"
import Layout from "@/app/layout"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  const pageList = ["About", "Team", "Contact us"]
  const navList = ["#about", "#team", "#contact"]
  return (
    <Layout>
      <NavBar pages={pageList} links={navList} />
      {/* <div className="flex flex-col w-full h-full overflow-y-auto bg-slate-900 text-slate-50" id="top"> */}
      <div className="flex flex-col w-full h-full overflow-y-auto bg-gradient-to-b from-slate-950 to-slate-700 text-slate-50" id="top">
        {/* Introduction */}
        <div
          className="flex flex-col lg:flex-row items-center justify-evenly p-2 md:p-4
          uppercase text-center text-2xl font-light md:text-4xl"
        >
          <div className="flex flex-col">
            <span className="text-xl md:text-3xl mb-2 md:mb-4">Official Page for</span>
            <span className="text-pretty">Team&nbsp;Wanderlust, IIIT&nbsp;Hyderabad</span>
          </div>
          <Image src="/logo_white.svg" alt="Logo" width={500} height={500} priority />
        </div>
        {/* Brief */}
        <div
          className="flex flex-col items-center justify-evenly
          p-2 md:p-4 bg-sky-300/20 h-full
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
          p-2 md:p-4 h-full
          text-center uppercase text-3xl md:text-4xl font-extrabold text-slate-100"
          id="team"
        >
          The Team
        </div>
        <div>
          {/* Team Leads */}
          <div
            className="flex flex-col flex-grow items-center justify-evenly
            p-2 md:p-4 transition-colors min-h-max bg-white/5
            text-center text-lg md:text-xl"
          >
            {/* <span className="text-center uppercase text-2xl md:text-3xl font-extrabold text-slate-100">The Team</span> */}
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
            w-full p-2 md:p-4 min-h-max
            text-center text-lg md:text-xl"
          >
            <div className="flex flex-col md:flex-row w-full bg-gray-500/20 rounded-2xl">
              <div className="flex flex-col justify-center items-center w-full xl:w-2/3 p-2 md:p-4">
                <span className="uppercase text-2xl md:text-3xl font-bold p-1 md:p-2">
                  Structural Systems Team
                </span>
                <div className="flex flex-col flex-grow">
                  Hello, what do you do?
                </div>
              </div>
              <div className="flex flex-col justify-center items-start w-full xl:w-1/3 p-2 md:p-4">
                <MemberPaneSmall src="/members/shreyas_s.jpg" name="Shreyas Kumar Sinha" title="Lead" />
                <MemberPaneSmall src="/members/aniketh_p.jpg" name="Aniketh Parkala" title="Member" />
                <MemberPaneSmall src="/members/harsh_k.jpg" name="Harsh Kapoor" title="Member" />
                <MemberPaneSmall src="/members/madhan_c.png" name="Madhan Sai Krishna Chamarthy" title="Member" />
              </div>
            </div>
          </div>
          {/* Electronics Team */}
          <div
            className="flex flex-col flex-grow items-center justify-evenly
            w-full p-2 md:p-4 min-h-max
            text-center text-lg md:text-xl"
          >
            <div className="flex flex-col md:flex-row w-full bg-gray-500/20 rounded-2xl">
              <div className="flex flex-col justify-center items-center w-full xl:w-2/3 p-2 md:p-4">
                <span className="uppercase text-2xl md:text-3xl font-bold p-1 md:p-2">
                  Electronic Systems Team
                </span>
                <div className="flex flex-col flex-grow">
                  Hello, what do you do?
                </div>
              </div>
              <div className="flex flex-col justify-center items-start w-full xl:w-1/3 p-2 md:p-4">
                <MemberPaneSmall src="/members/aditya_p.jpg" name="Aditya Ranjan Padhi" title="Lead" />
                <MemberPaneSmall src="/members/shreya_b.jpg" name="Shreya Bollimuntha" title="Member" />
                <MemberPaneSmall src="/members/gnaneswar_k.jpg" name="Gnaneswar Kulindala" title="Member" />
              </div>
            </div>
          </div>
          {/* Communications Team */}
          <div
            className="flex flex-col flex-grow items-center justify-evenly
            w-full p-2 md:p-4 min-h-max
            text-center text-lg md:text-xl"
          >
            <div className="flex flex-col md:flex-row w-full bg-gray-500/20 rounded-2xl">
              <div className="flex flex-col justify-center items-center w-full xl:w-2/3 p-2 md:p-4">
                <span className="uppercase text-2xl md:text-3xl font-bold p-1 md:p-2">
                  Communication Systems Team
                </span>
                <div className="flex flex-col flex-grow">
                  Hello, what do you do?
                </div>
              </div>
              <div className="flex flex-col justify-center items-start w-full xl:w-1/3 p-2 md:p-4">
                <MemberPaneSmall src="/members/gnaneswar_k.jpg" name="Gnaneswar Kulindala" title="Lead" />
                <MemberPaneSmall src="/members/sreyas_s.jpg" name="Sreyas Saminathan" title="Member" />
                <MemberPaneSmall src="/members/mayank_g.jpg" name="Mayank Goel" title="Member" />
              </div>
            </div>
          </div>
          {/* Management Team */}
          <div
            className="flex flex-col flex-grow items-center justify-evenly
            w-full p-2 md:p-4 min-h-max
            text-center text-lg md:text-xl"
          >
            <div className="flex flex-col md:flex-row w-full bg-gray-500/20 rounded-2xl">
              <div className="flex flex-col justify-center items-center w-full xl:w-2/3 p-2 md:p-4">
                <span className="uppercase text-2xl md:text-3xl font-bold p-1 md:p-2">
                  Management Team
                </span>
                <div className="flex flex-col flex-grow">
                  Hello, what do you do?
                </div>
              </div>
              <div className="flex flex-col justify-center items-start w-full xl:w-1/3 p-2 md:p-4">
                <MemberPaneSmall src="/members/shreya_b.jpg" name="Shreya Bollimuntha" title="Lead" />
                <MemberPaneSmall src="/members/shreyas_s.jpg" name="Shreyas Kumar Sinha" title="Correspondence and Communication" />
                <MemberPaneSmall src="/members/aditya_p.jpg" name="Aditya Ranjan Padhi" title="Corporate Relations" />
                <MemberPaneSmall src="/members/gnaneswar_k.jpg" name="Gnaneswar Kulindala" title="Logistics and Documentation" />
              </div>
            </div>
          </div>
        </div>
        {/* Contact Us */}
        <div
          className="flex flex-col
          justify-evenly items-center p-2 md:p-4 space-y-2
          text-md lg:text-lg bg-white text-black text-center md:text-left"
          id="contact"
        >
          <span className="uppercase text-2xl md:text-3xl font-bold">Contact Us</span>
          <div className="flex flex-col md:flex-row justify-around items-center w-full">
            <div className="flex flex-col space-y-2">
              <p>
                Team Wanderlust<br />
                IIIT Hyderabad<br />
                Gachibowli, Hyderabad<br />
                Telangana, India - 500032
              </p>
              <Link className="flex flex-col underline" href="mailto:teamwanderlust.iiith@gmail.com">teamwanderlust.iiith@gmail.com</Link>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="font-semibold text-lg lg:text-xl">Point of Contact</span>
              <span>Shreya Bollimuntha:<br /><Link className="underline" href="mailto:shreya.bollimuntha@research.iiit.ac.in">shreya.bollimuntha@research.iiit.ac.in</Link></span>
              <span>Aditya Ranjan Padhi:<br /><Link className="underline" href="mailto:aditya.padhi@research.iiit.ac.in">aditya.padhi@research.iiit.ac.in</Link></span>
              <span>Shreyas Kumar Sinha:<br /><Link className="underline" href="mailto:shreyas.sinha@research.iiit.ac.in">shreyas.sinha@research.iiit.ac.in</Link></span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
