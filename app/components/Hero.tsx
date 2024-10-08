import Image from "next/image";
import BlurArrow from "../../public/assets/blue-button.svg";
import Gradient from "../../public/assets/Gradient.webp";
import HeroImage from "../../public/assets/Image-2.webp";
import Google from "../../public/assets/Google.svg";
import Slack from "../../public/assets/Slack.svg";
import Trustpilot from "../../public/assets/Trustpilot.svg";
import Cnn from "../../public/assets/CNN.svg";
import Cluth from "../../public/assets/Clutch.svg";

export function Hero() {
	return (
		<div className="pt-4 lg:pt-10">
			<div className="px-[20px] lg:px-[280px]">
				<h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">
					Start monitoring your website like a pro
				</h1>
				<p className="text-center pt-6 text-[#36485C] lg:text[18px] lg:leading-7">
					Get a birds eye view with our customizable dashboard. Stay on top of
					things! Revamp your work process with our game-changing feature. Boost
					productivity and efficiency!
				</p>

				<div className="flex w-full pt-8 justify-center gap-x-6">
					<button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit">
						Try for free
					</button>
					<button className=" w-1/2 text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-fit">
						View Pricing
						<span>
							<Image src={BlurArrow} alt="Learn more" />
						</span>
					</button>
				</div>
			</div>

			<div className="relative flex h-full w-full justify-center">
				<Image
					className="min-h-[500px] w-full object-cover lg:h-auto lg:mt-5"
					src={Gradient}
					alt="Gradient"
				/>

				<div className="absolute bottom-5 flex w-full flex-col items-center">
					<Image
						className="w-auto -ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:h-[640px] xl:h-auto xl:w-[70%]"
						src={HeroImage}
						alt="HeroImage"
					/>

					<div className="flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between lg:px-20">
						<p className="text-[#FFFFFF] text-center lg:text-[18px]">
							Trusted by these companies
						</p>
						<div className="flex flex-wrap justify-center gap-4 px-4">
							<div className="flex items-center justify-center">
								<Image src={Google} alt="Google" />
							</div>
							<div className="flex items-center justify-center">
								<Image src={Slack} alt="Slack" />
							</div>
							<div className="flex items-center justify-center">
								<Image src={Trustpilot} alt="Trustpilot" />
							</div>
							<div className="flex items-center justify-center">
								<Image src={Cnn} alt="Cnn" />
							</div>
							{/* <div className="flex items-center justify-center">
								<Image src={Cluth} alt="Cluth" />
							</div> */}
						</div>

					</div>
				</div>
			</div>
		</div>
	);
}
