import { useState } from 'react'
import SectionWrapper from './SectionWrapper'

const VIDEO_ID = '22SmxolU0Uk'

const Video = () => {
  const [playing, setPlaying] = useState(false)

  return (
    <SectionWrapper id='showcase'>

      <div className='relative group'>

        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-white/[0.05] blur-[120px] rounded-full z-0 pointer-events-none group-hover:bg-orange-500/[0.05] transition-colors duration-1000"></div>

        <div className='relative z-10 aspect-video w-full rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900 transition-transform duration-700 group-hover:scale-[1.01]'>

          {playing ? (
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`}
              title="MyNode Model Two Showcase"
              style={{ border: 'none' }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              className="relative w-full h-full cursor-pointer"
              onClick={() => setPlaying(true)}
              aria-label="Play MyNode Model Two Showcase"
            >
              {/* Thumbnail */}
              <img
                src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                alt="MyNode Model Two Showcase"
                className="w-full h-full object-cover"
              />

              {/* Subtle dark overlay */}
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />

              {/* YouTube play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="transition-transform duration-200 hover:scale-110">
                  <svg height="48" viewBox="0 0 68 48" width="68" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
                      fill="#ff0000"
                    />
                    <path d="M45 24 27 14v20" fill="#fff" />
                  </svg>
                </div>
              </div>
            </button>
          )}

        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em]">
          Product Showcase
        </p>
      </div>

    </SectionWrapper>
  )
}

export default Video
