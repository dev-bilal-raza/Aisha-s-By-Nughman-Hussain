import React from 'react'
import { MemoizedStars } from '../animation/StarAnimation'
import { TextAnimation } from '../animation/TextGenerateAnimation'

const HeroHeading = ({ text }: { text: string }) => {
    return (
        <div className="[mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
            <div className="text-center text-5xl font-heading py-10 font-bold bg-clip-text text-transparent bg-[#62626e]">
                <TextAnimation words={text} />
            </div>
            <MemoizedStars />
        </div>
    )
}

export default HeroHeading