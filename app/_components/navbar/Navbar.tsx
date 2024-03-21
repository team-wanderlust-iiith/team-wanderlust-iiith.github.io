import Image from "next/image";
import NavItem from "./NavItem";
import Link from "next/link";

/**
 * Navigation Bar.
 * @param pages String Array for list of pages.
 * @param links String Array for list of page links.
 * @returns HTML element for the Navigation Bar.
 */
export default function NavBar({
  pages,
  links
}: {
  pages: string[],
  links: string[]
}) {
  const logoWidth = 200, lRatio = 12, wRatio = 3
  return (
    <div className="flex items-center justify-between p-2 px-4 shadow-md" id="nav-bar">
      {/* Logo and Title */}
      <div className="flex items-center" id="logo-title">
        <Link href={"/home"} replace>
          <Image
            // className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/wide.svg"
            alt="Team Wanderlust Logo"
            width={logoWidth}
            height={(logoWidth / lRatio) * wRatio}
            priority
          />
        </Link>
        {/* <Link className="p-2 font-bold text-xl md:text-2xl uppercase" href={"/"}>Team Wanderlust</Link> */}
      </div>
      {/* Pages / Menu Items */}
      <div className="flex justify-items-end items-center" id="nav-menu">
        {pages.map((value, index) => {
          return (
            <NavItem name={value} link={links[index]} key={`nav-item-${index}`} />
          )
        })}
      </div>
    </div>
  )
}