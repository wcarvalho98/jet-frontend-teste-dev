import { CarBase } from "."

export type CarReservation = {
  name: string
  status: string
  rating: number
  nextReservation: Date
  image: string
}

export default function CarDisplayer(props: { cars: CarReservation[] }) {
  const thClassName = "text-start text-gray-500 text-xs font-semibold p-4"
  const thNames = ["car", "next reservation", "status", "rating", "actions"]

  return (
    <>
      <div className="hidden md:block">
        <table className="shadow rounded-lg overflow-hidden w-full">
          <thead className="p-4">
            <tr className="bg-gray-50 border-b border-b-gray-200">
              {thNames.map((name, index) => (
                <th key={index} className={thClassName}>
                  {name.toUpperCase()}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.cars.map((car, index) => (
              <tr
                key={index}
                className="border-b border-b-gray-200 last:border-0"
              >
                <CarBase.Table.Content image={car.image} name={car.name} />
                <CarBase.Table.NextReservation
                  nextReservation={car.nextReservation}
                />
                <CarBase.Table.Status status={car.status} />
                <CarBase.Table.Rating rating={car.rating} />
                <CarBase.Table.Actions />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="md:hidden flex flex-col">
        {props.cars.slice(0, 3).map((car, index) => (
          <CarBase.Mobile key={index} {...car} />
        ))}
      </div>
    </>
  )
}
