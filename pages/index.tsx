import type { NextPage } from 'next';
import Image from 'next/image';
import { Text } from '@nextui-org/react';
import { Hero, Layout, SelectedProjects } from '../components';
import { projects } from '../utils/projects';

const Home: NextPage = () => {
	return (
		<Layout title="Diego Espinosa - Developer">
			<Hero>
				<div className="flex flex-col-reverse sm:flex-row items-start">
					<div className="flex flex-col pr-8">
						<h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1">
							Diego Espinosa
						</h1>
						<Text h2 className="mb-4">
							Frontend Developer
						</Text>
						<Text className="mb-16" color="$gray800">
							Helping others build faster web applications. Creating functional
							and beautiful user interfaces with the best user experience.
						</Text>
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
		</Layout>
	);
};

export default Home;
