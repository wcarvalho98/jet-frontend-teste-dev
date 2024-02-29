import { formatDate } from "@/lib/utils"

export function CarNextReservation({
  nextReservation,
}: {
  nextReservation: Date
}) {
  return (
    <td className="p-4">
      <p className="text-gray-500 text-sm">{formatDate(nextReservation)}</p>
    </td>
  )
}
