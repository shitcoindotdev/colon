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
import colon6 from '/public/webscreen.png'
import dogefather from '/public/dogefather.webp'
import dogefathermobile from '/public/dogefathermobile.webp'
import pumppill from '/public/logo.webp'
import Typewriter from '@/components/Typewriter'

const nunito = Nunito({ subsets: ['latin'] })
const contractAddress = 'EvilEmpire, laughing all the way to the bank'
const pumpLink = 'https://pump.fun/board'

export default function Home() {
	return (
		<main
			className={`relative flex min-h-screen w-full flex-col items-center gap-10 overflow-y-auto overflow-x-hidden text-[20px] font-semibold text-white sm:px-8 ${nunito.className}`}
		>
			<Image className="fixed z-[-2] h-auto w-full" src={dogefathermobile} />
			<div className="gradient-bg fixed z-[-1] h-full w-full opacity-60"></div>
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
					/>
				</div>
			</div>

			<div className="fadeInUp relative z-10 flex w-full justify-evenly sm:justify-center sm:gap-6">
				<div className="w-[120px] rounded-xl sm:w-[150px] md:w-[300px]">
					<Image className="rotating-element h-full rounded-xl shadow-xl" src={colon5} />
				</div>
				<div className="w-[120px] rounded-xl sm:w-[150px] md:w-[300px]">
					<Image className="rotating-element h-full rounded-xl shadow-xl" src={colon2} />
				</div>
				<div className="w-[120px] rounded-xl sm:w-[150px] md:w-[300px]">
					<Image className="rotating-element h-full rounded-xl shadow-xl" src={colonface} />
				</div>
			</div>
			<div className="mx-8 flex max-w-[600px] flex-col gap-6 text-center text-[16px] sm:text-[20px]">
				<p>
					Meet <span className="font-bold italic">Colon</span>, he is a shiba-inu and the father of the world
					famous <span className="font-bold italic">Kabosu</span>, also known as{' '}
					<span className="font-bold italic">Doge</span>, the mascot of DogeCoin 🪙🐕
				</p>
			</div>
			<Copyaddress contractAddress={contractAddress} />
			<a
				target="_blank"
				href={pumpLink}
				className="flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-2 text-[12px] font-semibold tracking-tight text-black shadow-lg backdrop-blur-sm sm:text-[20px]"
			>
				Buy $colon{' '}
				<span>
					<Image className="w-4 md:w-6" src={pumppill} />
				</span>
			</a>

			<a
				target="_blank"
				href="https://kabosu112.exblog.jp/9330818/"
				className="pointer-cursor relative mx-8 flex flex-col items-center justify-center rounded-xl bg-black/50 p-4 backdrop-blur-sm"
			>
				<h3 className="text-center italic">
					"Hello everyone. My name is Colon.
					<br />
					Today, I'm here to teach my daughter, Kabosu, how to walk properly."
				</h3>
				<Image className="mt-4 w-[400px] max-w-[69%] rounded-lg shadow-lg" src={colon4} />
				<p className="absolute -bottom-1 text-[16px]">source</p>
			</a>
			<p className="max-w-[90vw] text-wrap pb-20 text-center text-[12px] font-bold md:text-[14px] lg:pb-28">
				© 2024 $COLON. All rights reserved. $COLON is a trademark of its owner. This project is for
				entertainment purposes only and is not financial advice. 🐕
			</p>
			<Links
				xLink={'#'}
				DexsLink={'#'}
				DextLink={'#'}
				TgLink={'#'}
				className={
					'shiba-inu-gradient fixed bottom-4 z-20 rounded-full px-4 py-2 shadow-md backdrop-blur-sm md:mx-auto'
				}
			/>
		</main>
	)
}
