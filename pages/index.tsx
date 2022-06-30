import type { NextPage } from 'next';
import Image from 'next/image';
import { Card } from '../components/Card';
import { Hero } from '../components/Hero';
import { Layout } from '../components/Layout';
import { Navbar } from '../components/Navbar';

const Home: NextPage = () => {
	return (
		<>
			<Layout title="Diego Espinosa - Developer">
				<Navbar />
				<Hero>
					<div className="flex flex-col-reverse sm:flex-row items-start">
						<div className="flex flex-col pr-8">
							<h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1">
								Diego Espinosa
							</h1>
							<h2 className="mb-4">Frontend Developer</h2>
							<p className="mb-16">
								Helping others build faster web applications. Creating
								functional and beautiful user interfaces with the best user
								experience.
							</p>
						</div>
						<div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
							<Image
								src="/profile.jpg"
								width={176}
								height={176}
								alt="Diego Espinosa"
								className="rounded-full filter"
							/>
						</div>
					</div>
					<h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6">
						Selected projects
					</h3>
					<div className="flex gap-6 flex-col md:flex-row">
						<Card
							label="yoGhastly/NFTu"
							title="NFTu"
							desc="A web platfrom to find your digital unique rarity"
						/>
					</div>
				</Hero>
			</Layout>
		</>
	);
};

export default Home;
