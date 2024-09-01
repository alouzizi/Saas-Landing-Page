import Image from "next/image";
import Logo from '../../public/assets/Logo.svg';
import Facebook from '../../public/assets/Facebook.svg';
import X from '../../public/assets/X.svg';
import Feed from '../../public/assets/Feed.svg';
import Chevrondown from '../../public/assets/Chevron-down.svg';

export default function Footer() {
	return (
		<div className="pt-20 pb-10 px-4 lg:px-12 ">
			<div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:space-x-8 lg:gap-12 ">

				<div className="flex items-center gap-3">
					<Image src={Logo} alt="logo" />
					<p className="text-[#36485C] text-lg font-bold whitespace-nowrap">Your Site</p>
				</div>


				<div className="flex flex-col lg:flex-row lg:items-start gap-y-8 lg:gap-x-10 w-full justify-between ">

					<ul className="text-[#36485C] space-y-2 font-medium">
						<li className="font-normal flex items-center justify-between lg:justify-start">
							Features
							<span className="pr-1 lg:hidden">
								<Image src={Chevrondown} alt="Chevrondown" />
							</span>
						</li>
						<li className="hidden lg:block">Growth</li>
						<li className="hidden lg:block">Sales</li>
						<li className="hidden lg:block">Chat</li>
					</ul>

					<ul className="text-[#36485C] space-y-2 font-medium">
						<li className="font-normal flex items-center justify-between lg:justify-start">
							Pricing
							<span className="pr-1 lg:hidden">
								<Image src={Chevrondown} alt="Chevrondown" />
							</span>
						</li>
						<li className="hidden lg:block">Free Trial</li>
						<li className="hidden lg:block">Standard</li>
						<li className="hidden lg:block">Business</li>
					</ul>

					<ul className="text-[#36485C] space-y-2 font-medium">
						<li className="font-normal flex items-center justify-between lg:justify-start">
							Enterprise
							<span className="pr-1 lg:hidden">
								<Image src={Chevrondown} alt="Chevrondown" />
							</span>
						</li>
						<li className="hidden lg:block">Personalize</li>
						<li className="hidden lg:block">Automation</li>
						<li className="hidden lg:block">Invoicing</li>
						<li className="hidden lg:block">24/7 Support</li>
					</ul>

					<ul className="text-[#36485C] space-y-2 font-medium">
						<li className="font-normal flex items-center justify-between lg:justify-start">
							Careers
							<span className="pr-1 lg:hidden">
								<Image src={Chevrondown} alt="Chevrondown" />
							</span>
						</li>
						<li className="hidden lg:block">Open Positions</li>
						<li className="hidden lg:block">Part-Time</li>
						<li className="hidden lg:block">Contractual</li>
						<li className="hidden lg:block">Contact Us</li>
					</ul>
				</div>
			</div>

			<p className="text-[#5F7896] font-medium pt-14 text-center text-sm">
				© Copyright 2024. Your Site. All rights reserved.
			</p>

			<div className="flex items-center justify-center gap-8 pt-8">
				<Image src={Facebook} alt="Facebook" />
				<Image src={X} alt="X" />
				<Image src={Feed} alt="Feed" />
			</div>
		</div>
	);
}
