export function CarStatus({ status }: { status: string }) {
  return (
    <td className="p-4">
      <div className="rounded-md px-2.5 py-0.5 bg-green-100 w-fit">
        <p className="text-green-800 text-xs font-medium">{status}</p>
      </div>
    </td>
  )
}
