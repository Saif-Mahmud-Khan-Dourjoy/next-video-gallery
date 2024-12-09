import Link from "next/link"
import { getDictionary } from "./dictionaries/dictionaries"
import Image from "next/image"

import videos from "../data/videos"

export default async function Homepage({ params: { lang } }) {
  const dict = await getDictionary(lang)

  return (
    <>
      <main className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center">
        <div className="lg:col-span-2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            PLAY, COMPETE,
            <br />
            FOLLOW POPULAR
            <br />
            STREAMERS
          </h1>
          <p className="text-gray-400 mb-8">{dict?.title}</p>
        </div>
        <div className="lg:col-span-2">
          <div className="relative rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/0VtVPk7Zv9c"
              title="YouTube video player"
              frameBorder="0"
              className="w-full aspect-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>

            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4">
              <div className="text-right">
                <span className="bg-color-purple text-white px-2 py-1 rounded text-sm">
                  {dict?.cs}
                </span>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">04:03</div>
                <p className="text-sm">Broadcast starts in</p>
              </div>
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-400">
            Battle for the castle with Franck Jourdan and Eva703
          </p>
        </div>
      </main>

      <section className="mt-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Streams of the day</h2>
          <Link
            href="#"
            className="bg-color-gray hover:bg-opacity-80 text-sm px-4 py-2 rounded-full"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {videos?.map((video) => (
            <Link
              className="rounded-lg overflow-hidden bg-color-gray"
              href={`videos/${video?.videoId}`}
              key={video?.videoId}
            >
              <div className="">
                <div className="h-40 relative">
                  <Image
                    src={video?.thumbnail}
                    alt="Stream 1"
                    className="w-full  object-cover"
                    fill
                  />
                </div>

                <div className="p-2">
                  <p className="font-semibold">{video?.title}</p>
                  <p className="text-sm text-gray-400">{video?.channelTitle}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
