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

const nunito = Nunito({ subsets: ['latin'] })

export default function Home() {
	return (
		<main
			className={`gradient-bg relative flex min-h-screen w-full flex-col items-center gap-10 overflow-hidden py-6 text-[20px] font-semibold sm:px-8 ${nunito.className}`}
		>
			<div className="relative w-full max-w-[900px] items-center justify-center">
				<Image className="z-0 h-auto w-full" src={banner} />
				<div className="absolute top-1/4 w-full">
					<h1 className="text-center text-[40px] font-extrabold md:text-[80px]">$COLON</h1>
					<h2 className="-mt-3 text-center text-[16px] font-bold md:-mt-4 md:text-[25px]">Kabosu's Father</h2>
				</div>
			</div>

			<div className="relative z-10 flex w-full justify-evenly sm:justify-center sm:gap-6">
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
				<p>Colon is the dogefather of the world famous shiba-inu Kabosu, also known as Doge</p>
			</div>
			<Copyaddress contractAddress={'0x7A55d2222d9138018FfDAd69FFc3eBdB1c22dbAb'} />
			<a
				target="_blank"
				href="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x7A55d2222d9138018FfDAd69FFc3eBdB1c22dbAb"
				className="rounded-xl bg-[#A56E3A] px-8 py-3 text-[20px] font-semibold tracking-tight text-white shadow-lg"
			>
				Buy $colon some treats! 🦴
			</a>

			<a
				target="_blank"
				href="https://kabosu112.exblog.jp/9330818/"
				className="pointer-cursor flex flex-col items-center justify-center rounded-xl bg-white/20 p-4"
			>
				<h3 className="text-center">
					"Hello everyone. My name is Colon.
					<br />
					Today, I'm here to teach my daughter, Kabosu, how to walk properly.""
				</h3>
				<Image className="mt-4 w-[400px] max-w-[69%] rounded-lg shadow-lg" src={colon4} />
			</a>
			<p className="text-[16px] font-semibold sm:text-[20px]">Stay up to date with $COLON 🐕</p>
			<Links />
			{/* <div className="flex flex-col items-center gap-2">
				<p className="text-2xl font-bold text-white">onigiri.sol</p>
				<p className="text-xs text-white">CawA7rHFU1RarXiNpVr3TXLn5dYsjLLL9oFSeaNkjLHU</p>
			</div> */}
		</main>
	)
}
