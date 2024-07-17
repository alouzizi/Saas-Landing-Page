import Image from "next/image";
import Check from '../../public/assets/check.svg'
import Whitecheck from '../../public/assets/white-check.svg'

export default function Pricing() {
	return (
		<div className="py-[48px] lg:py-[60px]">
			<h1 className="text-[#172026 font-medium text-2xl text-center lg:text-[42px]" >Flexible plans for you</h1>
			<p className="text-[#36485C] text-center pt-[16px] pb-[40px] lg:text-[18px]" >No hidden fees!</p>
			<div className="flex flex-col gap-y-6 gap-x-[24px] lg:flex-row ">
				<div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
					<div>
						<h3 className="text-[#4328EB] font-medium text-[18px] lg:text-xl" >Free Trial</h3>
						<p className="text-[#36485C] pt-3 lg:pt-4 lg:text-[18px]" >Perfect for testing the waters</p>
						<h2 className="text-[#172026] font-medium text-2xl pt-4 lg:pt-8 lg:text-[32px]">0$
							<span className="text-[#5F7896]">/mo</span>
						</h2>
						<ul className="pt-4 flex flex-col gap-y-2 text-[#36485C] lg:pt-8 lg:gap-y-4" >
							<li className="flex items-center gap-x-2">
								<span>
									<Image src={Check} alt="Checkmark" />
								</span>
								Lorem ipsum dolor sit amet
							</li>
							<li className="flex items-center gap-x-2">
								<span>
									<Image src={Check} alt="Checkmark" />
								</span>
								Sed do eiusmod tempor incididunt
							</li>
							<li className="flex items-center gap-x-2">
								<span>
									<Image src={Check} alt="Checkmark" />
								</span>
								Consectetur adipiscing elit
							</li>
						</ul>
					</div>
					<button className="mt-4 rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
						Start Trial
					</button>
				</div>





				<div className="w-full rounded-[8px] bg-[#4328EB] p-6 flex flex-col lg:justify-between">
					<div>
						<h3 className="text-white font-medium text-[18px] lg:text-xl" >Business</h3>
						<p className="text-[#F4F8FA] pt-3 lg:pt-4 lg:text-[18px]" >Perfect for small businesses</p>
						<h2 className="text-white font-medium text-2xl pt-4 lg:text-[32px] lg:pt-8">500$
							<span className="text-[#F4F8FA]">/mo</span>
						</h2>
						<ul className="pt-4 flex flex-col gap-y-2 lg:gap-y-4 text-[#F4F8FA] lg:pt-8" >
							<li className="flex items-center gap-x-2">
								<span>
									<Image src={Whitecheck} alt="Checkmark" />
								</span>
								Lorem ipsum dolor sit amet
							</li>
							<li className="flex items-center gap-x-2">
								<span>
									<Image src={Whitecheck} alt="Checkmark" />
								</span>
								Sed do eiusmod tempor incididunt
							</li>
							<li className="flex items-center gap-x-2">
								<span>
									<Image src={Whitecheck} alt="Checkmark" />
								</span>
								Consectetur adipiscing elit
							</li>
							<li className="flex items-center gap-x-2">
								<span>
									<Image src={Whitecheck} alt="Checkmark" />
								</span>
								Sed do eiusmod tempor incididunt
							</li>
							<li className="flex items-center gap-x-2">
								<span>
									<Image src={Whitecheck} alt="Checkmark" />
								</span>
								Consectetur adipiscing elit
							</li>
						</ul>
					</div>
					<button className="mt-4 rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
						Start Trial
					</button>
				</div>



				<div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
					<div>
						<h3 className="text-[#4328EB] font-medium text-[18px] lg:text-xl" >Enterprise</h3>
						<p className="text-[#36485C] pt-3 lg:pt-4 lg:text-[18px]" >Perfect for big companies</p>
						<h2 className="text-[#172026] font-medium text-2xl pt-4 lg:text-[32px] lg:pt-8">Custom
							{/* <span className="text-[#5F7896]">/mo</span> */}
						</h2>
						<p className="pt-4 text-[#36485C] lg:pt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
						<p className="pt-3 text-[#36485C]">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
					<button className="mt-4 rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
						Contact Us
					</button>
				</div>

			</div>
		</div>
	)
}