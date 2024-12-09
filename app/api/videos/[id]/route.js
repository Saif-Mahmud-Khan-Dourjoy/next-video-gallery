import videos from "@/app/data/videos"

export async function GET(_request, { params }) {
  const videoId = params.id

  const videoIndex = videos.findIndex((video) => video.videoId === videoId)

  if (videoIndex === -1) {
    return Response.json({ error: "Video not found" }, { status: 404 })
  }

  const video = videos.find((video) => video.videoId === videoId)

  return Response.json(video)
}

export async function PATCH(request, { params }) {
  try {
    const video = await request.json()
    const videoId = params.id
    const videoIndex = videos.findIndex((v) => v.videoId === videoId)

    if (videoIndex === -1) {
      return Response.json({ error: "Video not found" }, { status: 404 })
    }

    const allowedFields = ["title", "description"]
    const invalidFields = Object.keys(video).filter(
      (field) => !allowedFields.includes(field)
    )

    if (invalidFields.length > 0) {
      return Response.json(
        {
          error: `Invalid fields: ${invalidFields.join(
            ", "
          )}. Only 'title' or 'description' can be updated.`,
        },
        { status: 400 }
      )
    }
    videos[videoIndex] = {
      ...videos[videoIndex],
      ...video,
    }

    return Response.json(videos[videoIndex], { status: 200 })
  } catch (error) {
    return Response.json(
      { error: "An error occurred", details: error.message },
      { status: 500 }
    )
  }
}

export async function DELETE(request, { params }) {
  const videoId = params.id

  const videoIndex = videos.findIndex((video) => video.videoId === videoId)
  if (videoIndex === -1) {
    return Response.json({ error: "Video not found" }, { status: 404 })
  }
  const videoToDelete = videos[videoIndex]
  videos.splice(videoIndex, 1)

  return Response.json(videoToDelete)
}
