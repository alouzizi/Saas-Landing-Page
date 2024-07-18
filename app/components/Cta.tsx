import Image from "next/image";
import Arrow from '../../public/assets/arrow.png'

export default function Cta() {
	return (
		<div className="w-full rounded-3xl bg-gradient-to-tr from-[#8d6aec] via-[#f80698]
		 to-[#ff3d38] py-[56px] px-[32px] text-center lg:my-[60px] lg:px-[324px] lg:py-[89px] leading-[64px]" >
			<h1 className="text-white font-medium text-[32px] lg:text-[56px]">Monitor your website like a pro</h1>
			<p className="mt-6 text-white lg:pt-12 lg:text-[18px]" >Join over 800+ happy site owners boosting productivity and efficiency!</p>
			<div className="mt-[40px] flex flex-col w-full items-center lg:mt-[56px] lg:flex-row lg:justify-center gap-x-[40px]">
				<button className=" px-[32px] bg-white text-[#EB2891] rounded-[4px] w-fit font-medium">
					Try for free
				</button>
				<button className="flex w-full items-center justify-center gap-x-3 text-white mt-[32px] lg:w-fit lg:mt-0 font-medium">
					Contact Sales
					<span>
						<Image src={Arrow} alt="Learn more" />
					</span>
				</button>
			</div>
		</div>
	)
}