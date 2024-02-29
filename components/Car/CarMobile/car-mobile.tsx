import { Check, MoreVertical } from "lucide-react"
import Image from "next/image"
import Rating from "../../rating"
import { CarReservation } from "../car-displayer"
import { formatDate } from "@/lib/utils"

export function CarMobile(props: CarReservation) {
  return (
    <div className="flex gap-5 w-full py-2 border-b border-b-gray-200">
      <div className="relative">
        <Image
          src={props.image}
          alt={props.name}
          width={85}
          height={85}
          className="min-h-[85px] min-w-[85px] object-cover"
        />
        <div className="absolute rounded-full bg-green-600 left-0.5 top-0.5 p-1">
          <Check size={16} className="text-white" />
        </div>
      </div>
      <div className="flex w-full">
        <div className="flex flex-col h-full justify-between w-full">
          <div className="flex flex-col gap-2">
            <h3 className="text-base font-semibold">{props.name}</h3>
            <p className="text-xs text-gray-500">
              Next reservation: {formatDate(props.nextReservation)}
            </p>
          </div>
          <Rating rating={props.rating} />
        </div>
        <MoreVertical size={24} className="text-gray-800" />
      </div>
    </div>
  )
}
