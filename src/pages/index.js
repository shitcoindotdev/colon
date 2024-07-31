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
import pumppill from '/public/logo.webp'
import Typewriter from '@/components/Typewriter'

const nunito = Nunito({ subsets: ['latin'] })
const contractAddress = 'dummyaddress'
const pumpLink = 'https://pump.fun/board'

export default function Home() {
	return (
		<main
			className={`gradient-bg relative flex min-h-screen w-full flex-col items-center gap-10 overflow-hidden py-6 text-[20px] font-semibold sm:px-8 ${nunito.className}`}
		>
			<div className="relative w-full max-w-[900px] items-center justify-center">
				<Image className="z-0 h-auto w-full" src={banner} />
				<div className="absolute top-1/4 w-full">
					<h1 className="text-center text-[40px] font-extrabold md:text-[80px]">$COLON</h1>
					<Typewriter
						className={'-mt-3 text-center text-[16px] font-bold italic md:-mt-4 md:text-[25px]'}
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
					Meet <span className="font-bold italic">Colon</span>, the father of the world famous shiba-inu{' '}
					<span className="font-bold italic">Kabosu</span>, also known as{' '}
					<span className="font-bold italic">Doge</span>, the mascot of DogeCoin 🪙🐕
				</p>
			</div>
			<Copyaddress contractAddress={contractAddress} />
			<a
				target="_blank"
				href={pumpLink}
				className="flex items-center justify-center gap-2 rounded-xl bg-[#A56E3A]/50 px-8 py-3 text-[20px] font-semibold tracking-tight text-white shadow-lg backdrop-blur-sm"
			>
				Buy $colon{' '}
				<span>
					<Image className="w-6" src={pumppill} />
				</span>
			</a>

			<a
				target="_blank"
				href="https://kabosu112.exblog.jp/9330818/"
				className="pointer-cursor flex flex-col items-center justify-center rounded-xl bg-white/20 p-4"
			>
				<h3 className="text-center italic">
					"Hello everyone. My name is Colon.
					<br />
					Today, I'm here to teach my daughter, Kabosu, how to walk properly."
				</h3>
				<Image className="mt-4 w-[400px] max-w-[69%] rounded-lg shadow-lg" src={colon4} />
			</a>
			<p className="pb-20 text-[16px] font-semibold sm:text-[20px]">Stay up to date with $COLON 🐕</p>
			<Links
				xLink={'#'}
				DexsLink={'#'}
				DextLink={'#'}
				TgLink={'#'}
				className={'fixed bottom-4 z-20 rounded-full bg-white/50 px-4 py-2 backdrop-blur-sm md:mx-auto'}
			/>
		</main>
	)
}
