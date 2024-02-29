import Image from "next/image"

export function CarContent({ image, name }: { image: string; name: string }) {
  return (
    <td className="flex items-center px-4 py-1 gap-2">
      <Image
        src={image}
        alt={name}
        width={48}
        height={48}
        className="min-h-[48px] min-w-[48px] object-cover"
      />
      <p className="text-sm text-gray-900">{name}</p>
    </td>
  )
}
