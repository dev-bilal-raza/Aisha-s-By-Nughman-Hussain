import React from 'react'
import Image from 'next/image'
import BusinessWhiteLogo from "../../../public/website-logo-white.png"
import BusinessBlackLogo from "../../../public/website-logo-black.png"

const Logo = ({ isBlack }: { isBlack: boolean }) => {
    return (
        <div>

            <Image className='duration-[4000ms]' width={120} src={BusinessWhiteLogo} alt="Aisha's by Nughman Hussain." />

            {/* <Image className='duration-[4000ms]' width={120} src={BusinessBlackLogo} alt="Aisha's by Nughman Hussain." /> */}

        </div>
    )
}

export default Logo