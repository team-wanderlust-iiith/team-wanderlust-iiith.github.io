import Image from "next/image"

export default function MemberPaneLarge({
  src,
  name,
  title
}: {
  src: string,
  name: string,
  title?: string
}) {
  return (
    <div className="flex flex-col flex-grow justify-center items-center space-y-1 p-1">
      <Image
        src={src} alt={name} width={150} height={150}
        className="rounded-full border-2 border-solid border-blue-100 bg-white shadow-lg"
      />
      <span className="uppercase text-xl md:text-2xl font-bold">{name}</span>
      <span className="capitalize">{title ? title.replace(/\n/g, '<br />') : undefined}</span>
    </div>
  )
}
