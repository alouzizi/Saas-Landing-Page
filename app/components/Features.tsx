import Image from 'next/image'
import Feature1 from '../../public/assets/feature-1.webp'
import Feature2 from '../../public/assets/feature-2.svg'
import Feature3 from '../../public/assets/feature-3.svg'
import Check from '../../public/assets/check.svg'
import Bluebutton from '../../public/assets/blue-button.svg'
import Greenbutton from '../../public/assets/green-button.svg'
import Pinkbutton from '../../public/assets/pink-button.svg'

export default function Features() {
	return (
		<div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]">
			<div className="flex flex-col gap-x-6 sm:flex-row-reverse">
				<Image src={Feature1} alt="feature 1 image" className='hidden w-1/2 sm:block' />
				<div className='sm:w-1/2 lg:py-[56px] lg:pr-[56px]'>
					<h1 className="font-medium text-[#0085FF] lg:text-[18px]">Sales Monitoring</h1>
					<h2 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
						Simplify your sales monitoring
					</h2>
					<Image src={Feature1} alt="feature 1 image" className='pt-[24px] sm:hidden' />
					<p className='py-[24px] text-[#36485c] lg:text-[18px]'>
						Stay on top of things and revamp your work process with our game-changing
						feature. Get a birds eye view with our customizable dashbord.
					</p>
					<ul className='flex flex-col gap-y-3 lg:text-[18px]'>
						<li className="flex items-center gap-x-2 text-[#36485C]">
							<span>
								<Image src={Check} alt="Checkmark" />
							</span>
							Monitor sales metrics in real-time
						</li>
						<li className='flex items-center gap-x-2 text-[#36485C]'>
							<span>
								<Image src={Check} alt="Checkmark" />
							</span>
							Generate detailed sales reports easily
						</li>
						<li className='flex items-center gap-x-2 text-[#36485C]'>
							<span>
								<Image src={Check} alt="Checkmark" />
							</span>
							Improve decision-making with predictive analytics
						</li>
					</ul>
					<p className='flex items-center gap-x-2 pt-[24px] font-medium text-[#0085FF] lg:text-[18px]'>
						Learn More <span><Image src={Bluebutton} alt="Arrow" /> </span>
					</p>
				</div>
			</div>




			<div className="flex flex-col gap-x-6 sm:flex-row">
				<Image src={Feature2} alt="feature 2 image" className='hidden w-1/2 sm:block' />
				<div className='sm:w-1/2 lg:py-[56px] lg:pl-[56px]'>
					<h1 className="font-medium text-[#00A424] lg:text-[18px]">Customer Support</h1>
					<h2 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
						Get in touch with your customers
					</h2>
					<Image src={Feature2} alt="feature 2 image" className='pt-[24px] sm:hidden' />
					<p className='py-[24px] text-[#36485c] lg:text-[18px]'>
						Elevate your customer service with our advanced support system.
						Maintain strong connections and quickly resolve customer issues.
					</p>
					<ul className='flex flex-col gap-y-3 lg:text-[18px]'>
						<li className='flex items-center gap-x-2 text-[#36485C]'>
							<span>
								<Image src={Check} alt="Checkmark" />
							</span>
							Use AI-powered tools for faster response times
						</li>
						<li className='flex items-center gap-x-2 text-[#36485C]'>
							<span>
								<Image src={Check} alt="Checkmark" />
							</span>
							Automate responses to common queries
						</li>
						<li className='flex items-center gap-x-2 text-[#36485C]'>
							<span>
								<Image src={Check} alt="Checkmark" />
							</span>
							Gain insights from customer feedback analytics
						</li>
					</ul>
					<p className='flex items-center gap-x-2 pt-[24px] font-medium text-[#00A424] lg:text-[18px]'>
						Learn More <span><Image src={Greenbutton} alt="Arrow" /> </span>
					</p>
				</div>
			</div>






			<div className="flex flex-col gap-x-6 sm:flex-row-reverse">
				<Image src={Feature3} alt="feature 3 image" className='hidden w-1/2 sm:block' />
				<div className='sm:w-1/2 lg:py-[56px] lg:pr-[56px]'>
					<h1 className="font-medium text-[#EB2891] lg:text-[18px]">Growth Monitoring</h1>
					<h2 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
						Monitor your sites new subscribers
					</h2>
					<Image src={Feature3} alt="feature 3 image" className='pt-[24px] sm:hidden' />
					<p className='py-[24px] text-[#36485c] lg:text-[18px]'>
						Keep track of your sites growth and new subscriber metrics with our intuitive tools.
						Get insights to help you understand and enhance your audience engagement.
					</p>
					<div className='flex w-full gap-x-[24px]'>
						<div className='w-1/2 flex flex-col gap-y-3'>
							<h3 className='text-[20px] font-medium text-[#172026]'>100+</h3>
							<p className='text=[#36485C]'>Lorem, ipsum dolor sit.</p>
						</div>
						<div className='w-1/2 flex flex-col gap-y-3'>
							<h3 className='text-[20px] font-medium text-[#172026]' >800+</h3>
							<p className='text=[#36485C]'>Lorem, ipsum dolor sit.</p>
						</div>
					</div>
					<p className='flex items-center gap-x-2 pt-[24px] font-medium text-[#EB2891] lg:text-[18px]'>
						Learn More <span><Image src={Pinkbutton} alt="Arrow" /> </span>
					</p>
				</div>
			</div>
		</div>
	)
}