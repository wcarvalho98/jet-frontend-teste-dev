export function CarNextReservation({
  nextReservation,
}: {
  nextReservation: Date
}) {
  return (
    <td className="p-4">
      <p className="text-gray-500 text-sm">
        {nextReservation.toLocaleDateString("pt-BR", {
          month: "2-digit",
          day: "2-digit",
        })}
      </p>
    </td>
  )
}
