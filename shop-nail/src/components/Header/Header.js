import React from 'react'
import { BiMap } from 'react-icons/bi'
import { MdPhoneAndroid } from 'react-icons/md'
import { GiLipstick } from 'react-icons/gi'
import { BsSearch } from 'react-icons/bs'
import { LiaHeart } from 'react-icons/lia'
import { AiOutlineUser } from 'react-icons/ai'
import { PiHandbagSimple } from 'react-icons/pi'

import Link from 'next/link'
import Image from 'next/image'
import logo from './../../../public/images/logo.jpg'
const Header = () => {
	return (
		<div className=''>
			<section className=' bg-black text-white py-1'>
				<div className='flex w-[90%] mx-auto'>
					<div className='w-[33.3%]'></div>
					<div className='w-[33.3%]'>
						<span className='font-extralight text-sm'>
							NEW Big Zodiac Energy Collection
						</span>
					</div>
					<div className='w-[33.3%] flex justify-between text-sm font-normal'>
						<Link href={'/'}>
							<div className='flex py-1'>
								<BiMap className='w-4 h-4' />
								<span>SALON FINDER</span>
							</div>
						</Link>
						<Link href={'/'}>
							{' '}
							<div className='flex py-1 '>
								<MdPhoneAndroid className='w-4 h-4' />
								<span>1-800-935-5273</span>
							</div>
						</Link>
						<Link href={'/'}>
							<div className='flex py-1'>
								<GiLipstick className='w-4 h-4' />
								<span>PROFESSIONALS</span>
							</div>
						</Link>
					</div>
				</div>
			</section>

			<section>
				<div className='flex w-[90%]  py-4 mx-auto justify-between'>
					<Link href={'/'} className='max-lg:ml-3'>
						<Image
							src={logo}
							width={500}
							height={500}
							className='max-md:w-32 w-40'
							alt='logo'
						></Image>
					</Link>

					<ul className='flex gap-10 py-4 font-normal text-sm'>
						<li>PRODUCTS</li>
						<li>NEW</li>
						<li>BESTSELLERS</li>
						<li>PROFESSIONALS</li>
						<li>NAIL ART</li>
						<li>GIFTS</li>
						<li>BLOG</li>
					</ul>

					<div className='flex gap-6  py-4'>
						<div>
							<BsSearch className='w-5 h-5' />
						</div>
						<div>
							<LiaHeart className='w-5 h-5' />
						</div>
						<Link href={'/account/login'}>
							<div>
								<AiOutlineUser className='w-5 h-5' />
							</div>
						</Link>
						<div>
							<PiHandbagSimple className='w-5 h-5' />
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Header
