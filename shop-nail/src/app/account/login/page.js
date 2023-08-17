import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import login_image from './../../../../public/images/login_image.webp'
const login = () => {
	return (
		<>
			<div className='w-[90%] mx-auto'>
				<p className='text-xs mt-5'>
					<span className='text-[#c0c0c0]'>HOME /</span> ACCOUNT LOG IN
				</p>
				<div className='w-[85%] flex mx-auto mt-16'>
					<div>
						<h1 className='text-[32px] font-semibold'>Welcome back! Log in.</h1>
						<form action='' className='w-[85%]'>
							<p className='text-xs font-light mt-2'>
								Enter your email and password to log into your account.
							</p>

							<input
								type='text'
								placeholder='Email Address'
								className='mt-5  border border-[#a8a8a8]   placeholder:text-sm placeholder:text-[#6c6c6c] placeholder:font-light w-full p-3 '
							/>
							<input
								type='text'
								placeholder='Password'
								className=' mt-5 border border-[#a8a8a8]   placeholder:text-sm placeholder:text-[#6c6c6c] placeholder:font-light  w-full p-3 '
							/>

							<div className='flex mt-3 justify-between '>
								<div class='flex items-center mb-4 '>
									<input
										id='default-checkbox'
										type='checkbox'
										value=''
										className='w-5 h-5 '
									/>
									<label
										htmlFor='default-checkbox'
										className='ml-2 text-sm font-light text-gray-900 '
									>
										Remember Me
									</label>
								</div>
								<div>
									<Link href={''}>
										<p className='underline text-sm'>FORGOT PASSWORD?</p>
									</Link>
								</div>
							</div>

							<div className='flex mt-4'>
								<button
									type='submit'
									className=' bg-black rounded-[30px] px-6 py-[10px] text-sm text-white   '
								>
									LOG IN
								</button>
								<p className=' py-3 px-3 text-sm font-light'>
									Not a member?
									<Link href={'/account/create'} legacyBehavior>
										<a className='underline font-normal px-2'>SIGN UP</a>
									</Link>
								</p>
							</div>
						</form>
					</div>
					<div>
						<Image
							src={login_image}
							width={500}
							height={500}
							className='w-[90%] mx-auto h-full'
							alt='logo'
						></Image>
					</div>
				</div>
			</div>
		</>
	)
}

export default login
