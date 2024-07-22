import React from 'react'

const HeroVideo = () => {
    return (

        <div className='w-full h-[51.9rem]'>
            <video autoPlay={true} className='w-full h-full object-cover' muted loop preload="none" aria-label="Video player">
                <source src="https://onlinemart-bucket.s3.ap-south-1.amazonaws.com/extra/Untitled+video+-+Made+with+Clipchamp.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default HeroVideo