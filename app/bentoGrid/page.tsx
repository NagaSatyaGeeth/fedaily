import Image from "next/image";
import { dmSans } from "@/app/fonts";

export default function BentoGridPage() {
	return (
		<main
			className={`min-h-[100vh] bg-[rgb(245,245,245)] py-8 px-4 md:px-8 grid place-items-center text-[18px] text-bento-black ${dmSans.className}`}
		>
			<div className="max-w-[1050px] w-full grid grid-cols-1 md:grid-cols-4 md:grid-rows-[repeat(6,minmax(0,110px))] gap-6 overflow-hidden">
				{/*Social Media 10x */}
				<section className="bg-bento-purple-500 rounded-2xl p-8 flex flex-col items-center justify-center text-center text-bento-white md:col-start-2 md:col-span-2 md:row-start-1 md:row-span-2 gap-3 h-full">
					<h1 className="text-4xl md:text-5xl font-medium leading-[0.9] md:px-8">
						Social Media 10x <span className="italic font-medium">Faster</span> with AI
					</h1>
					<div className="flex flex-col items-center gap-1">
						<Image
							src="/images/bentoGrid/illustration-five-stars.webp"
							alt="Five 5-star reviews"
							width={140}
							height={30}
							className="object-contain w-36"
						/>
						<p className="text-bento-purple-100 text-xs">Over 4,000 5-star reviews</p>
					</div>
				</section>

				{/*Manage multiple accounts */}
				<section className="bg-bento-white rounded-2xl p-6 md:p-8 flex flex-col justify-start md:col-start-2 md:col-span-1 md:row-start-3 md:row-span-2 h-full overflow-hidden">
					<Image
						src="/images/bentoGrid/illustration-multiple-platforms.webp"
						alt="Instagram and X (Twitter) profile icons"
						width={300}
						height={150}
						className="h-12 w-auto object-contain object-left mb-6"
					/>
					<h2 className="text-2xl leading-[0.9] font-medium tracking-tight">
						Manage multiple accounts and platforms.
					</h2>
				</section>

				{/*Maintain a consistent posting schedule */}
				<section className="bg-bento-yellow-500 rounded-2xl p-6 pb-0 md:p-8 md:pb-0 flex flex-col justify-start items-start md:col-start-3 md:col-span-1 md:row-start-3 md:row-span-2 overflow-hidden h-full">
					<h2 className="text-2xl leading-[0.9] font-medium tracking-tight mb-4">
						Maintain a consistent posting schedule.
					</h2>
					<Image
						src="/images/bentoGrid/illustration-consistent-schedule.webp"
						alt="Calendar with checkmarks"
						width={200}
						height={120}
						className="w-full max-w-[180px] object-contain self-center md:-mb-2 relative top-2"
					/>
				</section>

				{/*Schedule to social media */}
				<section className="bg-bento-purple-100 rounded-2xl p-6 pb-8 flex flex-col justify-between items-center md:col-start-4 md:col-span-1 md:row-start-1 md:row-span-4 overflow-hidden gap-4 h-full">
					<h2 className="text-[1.5rem] leading-[0.9] font-medium tracking-tight text-center md:text-left md:self-start md:pr-4">
						Schedule to social media.
					</h2>
					<Image
						src="/images/bentoGrid/illustration-schedule-posts.webp"
						alt="Chart showing best time to post"
						width={300}
						height={300}
						className="w-full max-w-[280px] md:max-w-none md:w-[130%] md:scale-105 md:translate-x-4 object-contain"
					/>
					<p className="text-[1rem] leading-tight text-center md:text-left px-2 md:px-0">
						Optimize post timings to publish content at the perfect time for your audience.
					</p>
				</section>

				{/*Grow followers */}
				<section className="bg-bento-purple-500 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center justify-between text-bento-white md:col-start-3 md:col-span-2 md:row-start-5 md:row-span-2 h-full">
					<div className="w-[80%] md:flex-1 max-w-[200px]">
						<Image
							src="/images/bentoGrid/illustration-grow-followers.webp"
							alt="Chart showing follower growth"
							width={250}
							height={250}
							className="w-full object-contain"
						/>
					</div>
					<h2 className="text-2xl md:text-3xl font-medium leading-[0.9] w-full md:w-[60%] text-center md:text-left">
						Grow followers with non-stop content.
					</h2>
				</section>

				{/*>56% faster audience growth */}
				<section className="bg-bento-white rounded-2xl p-6 md:p-8 flex flex-col justify-center items-start md:col-start-2 md:col-span-1 md:row-start-5 md:row-span-2 gap-3 h-full">
					<h2 className="text-5xl md:text-6xl font-medium tracking-tight">
						{">"}56<span className="text-4xl md:text-5xl">%</span>
					</h2>
					<p className="text-lg leading-tight mb-2">faster audience growth</p>
					<div className="h-8">
						<Image
							src="/images/bentoGrid/illustration-audience-growth.webp"
							alt="Avatars of followers"
							width={160}
							height={80}
							className="h-[50px] md:h-full w-auto object-contain"
						/>
					</div>
				</section>

				{/*Create and schedule */}
				<section className="bg-bento-yellow-100 rounded-2xl p-8 flex flex-col justify-center items-start md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-3 overflow-hidden gap-6 h-full">
					<h2 className="text-[1.75rem] md:text-[2.25rem] leading-[0.9] font-medium tracking-tight mt-4">
						Create and schedule content <span className="text-bento-purple-500 italic">quicker.</span>
					</h2>
					<Image
						src="/images/bentoGrid/illustration-create-post.webp"
						alt="Create Post button"
						width={200}
						height={100}
						className="w-[160px] md:w-[70%] max-w-[160px] object-contain mb-4"
					/>
				</section>

				{/*Write your content */}
				<section className="bg-bento-yellow-500 rounded-2xl p-6 pb-0 md:p-8 md:pb-0 flex flex-col justify-start md:col-start-1 md:col-span-1 md:row-start-4 md:row-span-3 overflow-hidden h-full">
					<h2 className="text-[1.75rem] leading-[0.9] font-medium tracking-tight mb-4 mt-2">
						Write your content using AI.
					</h2>
					<Image
						src="/images/bentoGrid/illustration-ai-content.webp"
						alt="AI Chat interface"
						width={250}
						height={200}
						className="w-[90%] md:w-full max-w-[220px] object-contain origin-left md:-mb-4 mt-auto"
					/>
				</section>
			</div>
		</main>
	);
}
