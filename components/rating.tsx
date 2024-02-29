import { cn } from "@/lib/utils"
import { Star } from "lucide-react"

export default function Rating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={cn(
            "w-4 h-4",
            index < rating ? "text-gray-900 fill-gray-900" : ""
          )}
        />
      ))}
    </div>
  )
}
