import Image from "next/image"

export default function MemberPaneSmall({
  src,
  name,
  title
} : {
  src: string,
  name: string,
  title?: string
}) {
  return (
    <div className="flex flex-row p-2 md:p-4 rounded-2xl shadow-lg w-full bg-white/10 m-1">
      <Image
        src={src} alt={name} width={100} height={100}
        className="rounded-full border-2 border-solid border-blue-100 bg-white shadow-lg object-contain"
      />
      <div className="flex flex-col w-full justify-center items-centers space-y-1 p-2 lg:p-1 text-center">
        <span className="uppercase font-bold">{name}</span>
        <span className="capitalize">{title}</span>
      </div>
    </div>
  )
}
