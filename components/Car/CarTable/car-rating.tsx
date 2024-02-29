import Rating from "@/components/rating"

export function CarRating({ rating }: { rating: number }) {
  return (
    <td className="p-4">
      <Rating rating={rating} />
    </td>
  )
}
