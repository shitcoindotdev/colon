import Image from 'next/image'
import { Nunito } from 'next/font/google'
import Links from '@/components/Links'
import TweetEmbed from '@/components/TweetEmbed'
import Copyaddress from '@/components/Copyaddress'
import banner from '/public/banner.png'
import colon from '/public/colon.jpg'
import colon2 from '/public/colon2.jpg'
import colonface from '/public/colonface.jpg'
import colon3 from '/public/kabosumouth.jpg'
import colon4 from '/public/kabosusfather.jpg'
import colon5 from '/public/colondog.jpg'
import dogefather from '/public/dogefather.webp'
import dogefathermobile from '/public/mobiledogefather.webp'
import pumppill from '/public/logo.webp'
import Typewriter from '@/components/Typewriter'
import AudioPlayer from '@/components/AudioPlayer'
import memesound from '/public/memesound.mp3'
import InfoCard from '@/components/InfoCard'
import { ExternalLink } from 'lucide-react'

const nunito = Nunito({ subsets: ['latin'] })
const contractAddress = 'CKSvUasQjnUfuNYVzTs3u34JmMgyoQ7SACjRBscQpump'
const pumpLink = 'https://pump.fun/CKSvUasQjnUfuNYVzTs3u34JmMgyoQ7SACjRBscQpump'
const xLink = 'https://x.com/ColonDogeFather'
const dexsLink = 'https://dexscreener.com/solana/CKSvUasQjnUfuNYVzTs3u34JmMgyoQ7SACjRBscQpump'
const dextLink =
	'https://www.dextools.io/app/en/solana/pair-explorer/https://dexscreener.com/solana/CKSvUasQjnUfuNYVzTs3u34JmMgyoQ7SACjRBscQpump'
const tgLink = 'https://t.me/ColonSol'

export default function Home() {
	return (
		<main
			className={`relative flex min-h-screen w-full flex-col items-center overflow-y-auto overflow-x-hidden text-[20px] font-semibold text-white sm:px-8 md:gap-20 ${nunito.className}`}
		>
			<Image className="fixed z-[-2] h-screen md:hidden" src={dogefathermobile} />
			<Image className="fixed z-[-2] hidden h-auto w-full md:block" src={dogefather} />
			<div className="gradient-bg fixed z-[-1] h-full w-full opacity-60"></div>
			<section className="relative flex min-h-screen flex-col items-center gap-10">
				<div className="relative w-full max-w-[900px] items-center justify-center">
					<Image className="z-0 h-auto w-full" src={banner} />
					<div className="absolute top-1/4 w-full">
						<h1 className="gradient-text text-center text-[40px] font-extrabold md:text-[80px]">$COLON</h1>
						<Typewriter
							className={
								'gradient-text -mt-3 text-center text-[16px] font-bold italic md:-mt-4 md:text-[25px]'
							}
							text={'The DogeFather'}
							speed={69}
							delay={1}
						/>
					</div>
				</div>

				<div className="relative z-10 flex w-full justify-evenly sm:justify-center sm:gap-6">
					<div className="fadeIn w-[120px] rounded-xl sm:w-[150px] md:w-[300px]">
						<Image className="rotating-element h-full rounded-xl shadow-xl" src={colon5} />
					</div>
					<div className="fadeIn w-[120px] rounded-xl sm:w-[150px] md:w-[300px]">
						<Image className="rotating-element h-full rounded-xl shadow-xl" src={colon2} />
					</div>
					<div className="fadeIn w-[120px] rounded-xl sm:w-[150px] md:w-[300px]">
						<Image className="rotating-element h-full rounded-xl shadow-xl" src={colonface} />
					</div>
				</div>
				<div className="mx-8 flex max-w-[600px] flex-col gap-6 text-center text-[16px] sm:text-[20px]">
					<p className="fadeIn">
						Meet <span className="font-bold italic">Colon</span>, he is the father of the worlds most famous
						shiba-inu:&nbsp;<span className="font-bold italic">Kabosu</span>, also known as{' '}
						<span className="font-bold italic">Doge</span>, the mascot of DogeCoin 🪙🐕
					</p>
				</div>
				<div className="fadeIn relative flex w-full justify-center py-4">
					<Copyaddress contractAddress={contractAddress} />
					<Typewriter
						speed={50}
						delay={1500}
						className={
							'opacity-8 absolute -bottom-2 text-[12px] font-bold md:-bottom-4 md:text-[14px] md:text-[16px]'
						}
						text={'click to copy CA'}
					/>
				</div>
				<div className="fadeIn">
					<a
						target="_blank"
						href={pumpLink}
						className="shaking-element flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-2 text-[12px] font-semibold tracking-tight shadow-lg backdrop-blur-sm sm:text-[20px]"
					>
						<span className="gradient-text">Buy $colon</span>{' '}
						<span>
							<Image className="w-4 md:w-6" src={pumppill} />
						</span>
					</a>
				</div>
			</section>
			<section className="relative flex min-h-screen flex-col items-center gap-10">
				<h2 className="gradient-text text-[36px] md:text-[60px]">The Dogefather</h2>
				<a
					target="_blank"
					href="https://kabosu112.exblog.jp/9330818/"
					className="pointer-cursor peer relative mx-8 flex flex-col items-center justify-center rounded-xl bg-black/50 p-4 backdrop-blur-sm md:flex-row-reverse"
				>
					<div className="peer absolute h-full w-full"></div>
					<ExternalLink className="absolute right-2 top-2 opacity-80 transition duration-200 ease-in-out hover:opacity-100 peer-hover:opacity-100" />
					<h3 className="text-center italic md:max-w-[400px]">
						"Hello everyone. My name is Colon.
						<br />
						Today, I'm here to teach my daughter, Kabosu, how to walk properly."
					</h3>
					<Image className="mt-4 w-full rounded-lg shadow-lg md:max-w-[400px]" src={colon4} />
				</a>
				<div className="flex flex-col gap-4">
					<InfoCard
						title={'Narrative?'}
						content={
							'Colon is the DogeFather of Solana. As the biological father of the "Doge" dog, Kabosu, he claims his rightful name as the Dogefather.'
						}
						className={'bg-black/80 text-white/80 backdrop-blur-sm'}
					/>
					<InfoCard
						title={'Who is Colon? 🐕'}
						content={
							'Colon is a Shiba-Inu dog and the father of the internet star Kabosu, bettern known as Doge from the dogecoin logo'
						}
						className={'bg-black/80 text-white/80 backdrop-blur-sm'}
					/>
					<InfoCard
						title={'How to buy?'}
						content={
							'$COLON is a solana token. To buy $colon you need a solana wallet like phantom wallet and some solana.'
						}
						className={'bg-black/80 text-white/80 backdrop-blur-sm'}
					/>
					<InfoCard
						title={'What is the total supply?'}
						content={'There are initially 1,000,000,000 tokens, as is standard with Pump.fun launches'}
						className={'bg-black/80 text-white/80 backdrop-blur-sm'}
					/>
					<InfoCard
						title={'Target?'}
						content={'The DogeFather demands Millions. Billions. WOOF WOOF'}
						className={'bg-black/80 text-white/80 backdrop-blur-sm'}
					/>
				</div>
				<p className="mt-auto max-w-[90vw] text-wrap pb-20 text-center text-[12px] font-bold md:text-[14px] lg:pb-28">
					© 2024 $COLON. All rights reserved. $COLON is a trademark of its owner. This project is for
					entertainment purposes only and is not financial advice. 🐕
				</p>
			</section>
			<Links
				xLink={xLink}
				DexsLink={dexsLink}
				DextLink={dextLink}
				TgLink={tgLink}
				className={
					'shiba-inu-gradient fadeInUp fixed bottom-4 z-20 rounded-full px-4 py-2 shadow-md backdrop-blur-sm md:mx-auto'
				}
			/>
			<AudioPlayer src={memesound} />
		</main>
	)
}
