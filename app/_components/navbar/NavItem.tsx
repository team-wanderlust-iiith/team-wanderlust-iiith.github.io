"use client"

import { useRouter } from "next/navigation"

/**
 * Navigation Bar Item.
 * @param name String of the page name.
 * @param index Index number of the page item.
 * @param link Optional string of the link to the page.
 * @returns HTML element for the Navigation Bar Item.
 */
export default function NavItem({
  name,
  link
}: {
  name: string,
  link?: string
}) {
  const router = useRouter()
  const handleRouter = (route: string) => {
    router.push(route)
  }

  return (
    <button
      type="button"
      className="transition ease-in
      font-semibold text-md md:text-lg text-center capitalize
      p-2 px-4 m-1 border-solid border-2 border-transparent rounded-lg
      hover:border-black hover:shadow-md md:rounded-full"
      onClick={link ? () => handleRouter(link) : undefined}
    >
      {name}
    </button>
  )
}