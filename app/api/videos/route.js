import videos from "@/app/data/videos"

export async function GET() {
  return Response.json(videos)
}
