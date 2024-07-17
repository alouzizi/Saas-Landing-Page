import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import Features from "./components/Features";

import Pricing from "./components/Pricing";

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<div className="px-[20px] lg:container lg:px-2- mx-auto" >
				<Features />
				<Pricing />
			</div>
		</>
	);
}
