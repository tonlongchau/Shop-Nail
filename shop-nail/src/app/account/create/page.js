'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import sigup_image from './../../../../public/images/sigup_image.webp'

const CreateAccount = () => {
	const [ShowPass, SetShowPass] = useState(false)
	const [ShowCPass, SetShowCPass] = useState(false)

	const togglePass = () => {
		SetShowPass(!ShowPass)
	}

	const toggleCPass = () => {
		SetShowCPass(!ShowCPass)
	}
	return (
		<>
			<div className='w-[90%] mx-auto mb-24'>
				<p className='text-xs mt-3'>
					<span className='text-[#c0c0c0]'>HOME /</span> CREATE MY ACCOUNT
				</p>
				<div className='w-[85%] flex mx-auto mt-16'>
					<div className='w-[50%]'>
						<h1 className='text-[32px] font-semibold'>Create my Account</h1>
						<form action='' className='w-[75%]'>
							<p className='text-xs font-light mt-2'>
								Choose what applies to you:
							</p>

							<div className='flex gap-5 mt-3'>
								<div class='flex items-center '>
									<input
										checked
										type='radio'
										value=''
										name='default-radio'
										className='checkedRadio cursor-pointer w-4 h-4'
									/>
									<label
										htmlFor='default-radio-1'
										className='ml-2 text-xs font-light text-gray-900 '
									>
										Consumer
									</label>
								</div>
								<div class='flex items-center'>
									<input
										type='radio'
										value=''
										name='default-radio'
										className='checkedRadio cursor-pointer w-4 h-4  '
									/>
									<label
										htmlFor='default-radio-2'
										className='ml-2 text-xs font-light text-gray-900 '
									>
										Professional
									</label>
								</div>
							</div>

							<div className='flex gap-3 mt-3'>
								<input
									type='text'
									placeholder='First Name'
									className='mt-3  border border-[#a8a8a8]   placeholder:text-sm placeholder:text-[#6c6c6c] placeholder:font-light w-full p-3 '
								/>

								<input
									type='text'
									placeholder='Last Name'
									className='mt-3  border border-[#a8a8a8]   placeholder:text-sm placeholder:text-[#6c6c6c] placeholder:font-light w-full p-3 '
								/>
							</div>
							<input
								type='text'
								placeholder='Email Address'
								className='mt-3  border border-[#a8a8a8]   placeholder:text-sm placeholder:text-[#6c6c6c] placeholder:font-light w-full p-3 '
							/>
							<input
								type='text'
								placeholder='Confirm Email Address'
								className=' mt-3 border border-[#a8a8a8]   placeholder:text-sm placeholder:text-[#6c6c6c] placeholder:font-light  w-full p-3 '
							/>
							<div className='relative'>
								<input
									type={ShowPass === false ? 'password' : 'text'}
									placeholder='Password'
									className='relative mt-3 border border-[#a8a8a8]   placeholder:text-sm placeholder:text-[#6c6c6c] placeholder:font-light  w-full p-3 '
								/>
								<div className=' text-xs font-light cursor-pointer text-[#6a6870] absolute top-7 right-2 '>
									{ShowPass === false ? (
										<span onClick={togglePass}>show</span>
									) : (
										<span onClick={togglePass}>hide</span>
									)}
								</div>
							</div>

							<div className='relative'>
								<input
									type={ShowCPass === false ? 'password' : 'text'}
									placeholder='Confirm Password'
									className='relative mt-3 border border-[#a8a8a8]   placeholder:text-sm placeholder:text-[#6c6c6c] placeholder:font-light  w-full p-3 '
								/>
								<div className=' text-xs font-light cursor-pointer text-[#6a6870] absolute top-7 right-2 '>
									{ShowCPass === false ? (
										<span onClick={toggleCPass}>show</span>
									) : (
										<span onClick={toggleCPass}>hide</span>
									)}
								</div>
							</div>

							<input
								type='text'
								placeholder='Date of Birth (MM-DD-YYYY)'
								className=' mt-3 border border-[#a8a8a8]   placeholder:text-sm placeholder:text-[#6c6c6c] placeholder:font-light  w-full p-3 '
							/>

							<input
								type='text'
								placeholder='Country'
								className=' mt-3 border border-[#a8a8a8]   placeholder:text-sm placeholder:text-[#6c6c6c] placeholder:font-light  w-full p-3 '
							/>

							<input
								type='text'
								placeholder='Zip code / Post code'
								className=' mt-3 border border-[#a8a8a8]   placeholder:text-sm placeholder:text-[#6c6c6c] placeholder:font-light  w-full p-3 '
							/>
							<p className='font-light text-xs mt-4'>
								We would like to keep you informed by email, text messages and
								other digital communications (including via targeted adverts
								online and via social media) about the latest offers, styling
								tips, trends and products from Wella Brands. If you would like
								to hear from us, please select the box below:
							</p>

							<div class='flex items-center mb-4 mt-3 '>
								<input
									id='default-checkbox'
									type='checkbox'
									value=''
									className='w-5 h-5 cursor-pointer'
								/>
								<label
									htmlFor='default-checkbox'
									className='ml-2 text-sm font-light text-gray-900 '
								>
									I want to receive marketing from{' '}
									<span className='underline'> Wella Brands</span>
								</label>
							</div>

							<div class='flex items-center mb-4 '>
								<input
									id='default-checkbox'
									type='checkbox'
									value=''
									className='w-5 h-5 cursor-pointer'
								/>
								<label
									htmlFor='default-checkbox'
									className='ml-2 text-sm font-light text-gray-900 '
								>
									I have read and accept the
									<span className='underline'> Terms & Conditions</span>{' '}
									<span className='text-red-600'>*</span>
								</label>
							</div>

							<div class='flex items-center mb-4 '>
								<input
									id='default-checkbox'
									type='checkbox'
									value=''
									className='w-5 h-5 cursor-pointer'
								/>
								<label
									htmlFor='default-checkbox'
									className='ml-2 text-sm font-light text-gray-900 '
								>
									Remember Me
								</label>
							</div>

							<div className='flex mt-4'>
								<button
									type='submit'
									className=' bg-black rounded-[30px] px-6 py-[10px] text-sm text-white   '
								>
									CREATE MY ACCOUNT
								</button>
								<p className=' py-3 px-3 text-sm font-light'>
									Already a member?
									<Link href={'/account/login'} legacyBehavior>
										<a className='underline font-normal px-2'>LOG IN</a>
									</Link>
								</p>
							</div>
						</form>
					</div>
					<div className='w-[50%]'>
						<Image
							src={sigup_image}
							width={500}
							height={500}
							className='w-[90%] mx-auto h-[65%]'
							alt='logo'
						></Image>
					</div>
				</div>
			</div>
		</>
	)
}

export default CreateAccount
