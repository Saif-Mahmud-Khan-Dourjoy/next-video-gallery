"use client"
import { useParams } from "next/navigation"
export default function NotFound() {
  const params = useParams()
  return (
    <div>
      <p>This video with {params?.id} id was not found!</p>
    </div>
  )
}
