import Image from "next/image";

export default function NavBar({
  pages
}: {
  pages: string[]
}) {
  return (
    <div className="flex items-center justify-between p-2" id="nav-bar">
      {/* Logo and Title */}
      <div className="flex m-2 items-center" id="logo-title">
        {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/vercel.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
        <span className="p-2 font-semibold text-2xl uppercase">Team Wanderlust</span>
      </div>
      {/* Pages / Menu Items */}
      <div className="flex justify-items-end items-center" id="nav-menu">
        {pages.map((value, index) => {
          return (
            <span
              className="transition ease-in
              font-semibold text-lg text-center capitalize
              p-2 m-1 border-solid border-2 border-transparent rounded-lg
              hover:border-black hover:shadow-md md:rounded-full"
              key={`nav-item-${index}`}
            >
              {value}
            </span>
          )
        })}
      </div>
    </div>
  )
}