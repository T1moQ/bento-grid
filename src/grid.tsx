import { FC } from 'react'
import stars from '../public/images/illustration-five-stars.webp'
import platforms from '../public/images/illustration-multiple-platforms.webp'

export const Grid: FC = () => {
	return (
		<main className="flex flex-col gap-8 py-6 px-4">
			<section className="bg-purple-500 px-6 py-10 rounded-md tracking-tighter text-white">
				<div className="flex flex-col gap-4 justify-center items-center">
					<h1 className="text-[48px] text-center leading-[2.75rem]">
						Social Media <span className="text-yellow-500">10x</span>{' '}
						<span className="italic">Faster</span> with AI
					</h1>
					<div className="w-48">
						<img src={stars} alt="stars" className="w-full" />
					</div>
					<div className="text-p tracking-wider -mt-2">
						Over 4,000 5-star reviews
					</div>
				</div>
			</section>
			<section className="bg-white p-4 rounded-md">
				<div className="mb-2">
					<img src={platforms} alt="platforms" />
				</div>
				<h2 className="text-[24px] tracking-tight leading-7">
					Manage multiple accounts and platforms.
				</h2>
			</section>
		</main>
	)
}
