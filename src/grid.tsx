import { FC } from 'react'
import stars from '../public/images/illustration-five-stars.webp'
import platforms from '../public/images/illustration-multiple-platforms.webp'
import calender from '../public/images/illustration-consistent-schedule.webp'
import table from '../public/images/illustration-schedule-posts.webp'
import followers from '../public/images/illustration-grow-followers.webp'
import avatars from '../public/images/illustration-audience-growth.webp'
import post from '../public/images/illustration-create-post.webp'
import aiContent from '../public/images/illustration-ai-content.webp'

export const Grid: FC = () => {
	return (
		<main
			className="flex flex-col gap-8 lg:gap-6 py-6 px-4 lg:px-40 lg:pt-20 lg:pb-24 lg:grid lg:h-full"
			style={{
				gridTemplateColumns: 'repeat(4, 1fr)',
				gridTemplateRows: 'repeat(3, auto)',
			}}
		>
			<section className="bg-purple-500 px-6 py-10 rounded-md tracking-tighter text-white col-start-2 col-span-2 row-start-1 row-span-1">
				<div className="flex flex-col gap-4 justify-center items-center">
					<h1 className="text-[48px] text-center leading-[2.75rem]">
						Social Media <span className="text-yellow-500">10x</span>{' '}
						<span className="italic">Faster</span> with AI
					</h1>
					<div className="w-48">
						<img src={stars} alt="stars" className="w-full" />
					</div>
					<div className="text-p tracking-wider -mt-2 text-center">
						Over 4,000 5-star reviews
					</div>
				</div>
			</section>
			<section className="bg-white p-4 rounded-md col-start-2 col-span-1 row-start-2 row-span-1">
				<div className="mb-2">
					<img src={platforms} alt="platforms" />
				</div>
				<h2 className="text-[24px] tracking-tight leading-7">
					Manage multiple accounts and platforms.
				</h2>
			</section>
			<section className="bg-yellow-500 p-4 pb-0 pr-10 rounded-md overflow-hidden col-start-3 col-span-1 row-start-2 row-span-1">
				<h2 className="text-[24px] tracking-tight leading-7">
					Maintain a consistent posting schedule.
				</h2>
				<div className="mt-2 w-52 h-[137px]">
					<img src={calender} alt="calender" className="w-full" />
				</div>
			</section>
			<section className="flex flex-col gap-5 bg-purple-100 p-6 pb-8 rounded-md items-center col-start-4 col-span-1 row-start-1 row-span-2">
				<h2 className="text-[24px] font-medium tracking-tight leading-7">
					Schedule to social media.
				</h2>
				<div>
					<img src={table} alt="table" />
				</div>
				<div className="mt-3">
					<p className="text-center text-p leading-5">
						Optimize post timings to publish content at the perfect time for
						your audience.
					</p>
				</div>
			</section>
			<section className="flex flex-col gap-3 bg-purple-500 p-6 rounded-md row-start-3 row-span-1 col-start-3 col-span-2 lg:flex-row lg:items-center">
				<div className="scale-75 -mt-7">
					<img src={followers} alt="grow folloers" />
				</div>
				<div className="">
					<p className="text-[32px] leading-[1.75rem] font-medium text-center text-white">
						Grow followers with non-stop content.
					</p>
				</div>
			</section>
			<section className="bg-white rounded-md px-6 py-7 flex flex-col items-start col-start-2 col-span-1 row-start-3 row-span-1">
				<h2 className="text-[48px] font-medium tracking-tight leading-7">
					&gt;56%
				</h2>
				<p className="mt-5 text-p">faster audience growth</p>
				<div className="w-44 mt-5">
					<img src={avatars} alt="avatars" />
				</div>
			</section>
			<div className="lg:row-span-full flex flex-col gap-8 ">
				<section className="bg-yellow-100 py-7 px-7 rounded-md col-start-1 col-span-1 lg:h-[392px] lg:flex lg:flex-col lg:justify-center">
					<h2 className="text-[28px] lg:text-[32px] lg:semi-bold font-medium leading-7">
						Create and schedule content{' '}
						<span className="text-purple-500 italic">quicker.</span>
					</h2>
					<div className="w-48 mt-5">
						<img src={post} alt="post" />
					</div>
				</section>
				<section className="bg-yellow-500 py-5 px-6 rounded-md">
					<h2 className="text-[28px] font-medium leading-7">
						Write your content using AI.
					</h2>
					<div className="w-56 mt-6">
						<img src={aiContent} alt="ai content" />
					</div>
				</section>
			</div>
		</main>
	)
}
