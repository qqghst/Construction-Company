import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Button = ({ children, href }) => {
	return (
        <button className="px-[32px] py-[16px] bg-[#030E4A] text-white rounded-md text-[13.33px]" href={href}>
            {children}
        </button>
    )
}

export default Button
