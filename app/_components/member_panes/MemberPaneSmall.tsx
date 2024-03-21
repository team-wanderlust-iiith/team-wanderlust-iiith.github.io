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
    <div className="flex flex-row p-2">
      <Image
        src={src} alt={name} width={100} height={100}
        className="rounded-full border-2 border-solid border-blue-100 bg-white shadow-lg object-contain"
      />
      <div className="flex flex-col justify-center items-start space-y-1 p-1">
        <span className="uppercase font-bold">{name}</span>
        <span className="capitalize">{title}</span>
      </div>
    </div>
  )
}
