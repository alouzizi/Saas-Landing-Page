import Image from "next/image"
import Logo from '../../public/assets/Logo.svg'
import Facebook from '../../public/assets/Facebook.svg'
import X from '../../public/assets/X.svg'
import Feed from '../../public/assets/Feed.svg'
import Chevrondown from '../../public/assets/Chevron-down.svg'

export default function Footer() {
	return (
		<div className="pt-[80px] pb-[40px]">
			<div className="flex flex-col lg:flex-row lg:items-start justify-between ">
				<div className="flex items-center gap-x-3 mr-4">
					<Image src={Logo} alt="logo" />
					<p className="text-[#36485C] text-[17px] font-bold ">Your Site</p>
				</div>

				<div className="flex flex-col lg:flex-row lg:gap-x-40 lg:mr-6 gap-y-[32px] pt-[56px] lg:pt-0">
					<ul className="text-[#36485C] lg:space-y-8 font-medium">
						<li className="font-normal flex items-center justify-between">
							Features
							<span className="pr-1 lg:hidden"><Image src={Chevrondown} alt="Chevrondown"></Image></span>
						</li>
						<li className="lg:block hidden">Growth</li>
						<li className="lg:block hidden">Sales</li>
						<li className="lg:block hidden">Chat</li>

					</ul>
					<ul className="text-[#36485C] space-y-8 font-medium">
						<li className="font-normal flex items-center justify-between">
							Pricing
							<span className="pr-1 lg:hidden"><Image src={Chevrondown} alt="Chevrondown"></Image></span>
						</li>
						<li className="lg:block hidden">Free Trial</li>
						<li className="lg:block hidden">Standard</li>
						<li className="lg:block hidden">Business</li>

					</ul>
					<ul className="text-[#36485C] space-y-8 font-medium">
						<li className="font-normal flex items-center justify-between">
							Enterprise
							<span className="pr-1 lg:hidden"><Image src={Chevrondown} alt="Chevrondown"></Image></span>
						</li>
						<li className="lg:block hidden">Personalize</li>
						<li className="lg:block hidden">Automation</li>
						<li className="lg:block hidden">Invoicing</li>
						<li className="lg:block hidden">24/7 Support</li>

					</ul>
					<ul className="text-[#36485C] space-y-8 font-medium">
						<li className="font-normal flex items-center justify-between">
							Careers
							<span className="pr-1 lg:hidden"><Image src={Chevrondown} alt="Chevrondown"></Image></span>
						</li>
						<li className="lg:block hidden">Open Positions</li>
						<li className="lg:block hidden">Part-Time</li>
						<li className="lg:block hidden">Contractual</li>
						<li className="lg:block hidden">Contact Us</li>

					</ul>
				</div>
			</div>
			<p className="text-[#5F7896] font-medium pt-[56px] text-center text-[14px]" >
				© Copyright 2024. Your Site. All rights reserved.
			</p>
			<div className="flex items-center justify-center gap-x-14 pt-10">
				<Image src={Facebook} alt="Facebook"></Image>
				<Image src={X} alt="X"></Image>
				<Image src={Feed} alt="Feed"></Image>
			</div>
		</div>
	)
}
