import Image from "next/image"
import Link from "next/link"
import React from "react"
import { getDictionary } from "../[lang]/dictionaries/dictionaries"

export default async function RelatedVideos({ videos, lang }) {
  const dict = await getDictionary(lang)
  return (
    <>
      <div className="lg:w-1/4">
        <h2 className="text-xl font-semibold mb-4">{dict?.yml}</h2>
        <div className="space-y-4">
          {videos?.map((video) => (
            <Link
              className="flex items-start space-x-4"
              href={`/videos/${video?.videoId}`}
              key={video?.videoId}
            >
              <div className="">
                <Image
                  src={video?.thumbnail}
                  alt="Open World Games Thumbnail"
                  className="rounded object-cover"
                  height={80}
                  width={120}
                />

                <div>
                  <h3 className="font-semibold">{video?.title}</h3>
                  <p className="text-sm text-gray-400">{video?.channelTitle}</p>
                  <p className="text-sm text-gray-400">7,694M View now</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
