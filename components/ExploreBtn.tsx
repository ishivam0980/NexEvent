'use client'

import Image from 'next/image'

const ExploreBtn = () => {
  return (
    <div>
      <button type="button" id="explore-btn" className="mt-7 mx-auto">
        <a href="#events" className="flex items-center gap-2">
          Explore Events
          <Image src="/icons/arrow-down.svg" width={24} height={24} alt="Arrow down icon" />
        </a>
      </button>
    </div>
  )
}

export default ExploreBtn
