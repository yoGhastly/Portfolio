import type { NextPage } from 'next';
import Image from 'next/image';
import { Hero, Layout, Navbar, SelectedProjects } from '../components';
import { Footer } from '../components/Footer';
import { projects } from '../utils/projects';

const Home: NextPage = () => {
	return (
		<main className="flex flex-col justify-center px-8">
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
					<SelectedProjects projects={projects} />
				</Hero>
				<Footer />
			</Layout>
		</main>
	);
};

export default Home;
