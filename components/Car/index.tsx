import { CarMobile } from "./CarMobile/car-mobile"
import { CarContent } from "./CarTable/car-content"
import { CarNextReservation } from "./CarTable/car-next-reservation"
import { CarStatus } from "./CarTable/car-status"
import { CarRating } from "./CarTable/car-rating"
import { CarActions } from "./CarTable/car-actions"

export const CarBase = {
  Mobile: CarMobile,
  Table: {
    Content: CarContent,
    NextReservation: CarNextReservation,
    Status: CarStatus,
    Rating: CarRating,
    Actions: CarActions,
  },
}
