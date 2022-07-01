import React from 'react';
import type { NextPage } from 'next';
import { Hero, Layout } from '../components';
import { Text } from '@nextui-org/react';

const dashboard: NextPage = () => {
	return (
		<Layout title="Dashboard | Diego Espinosa">
			<Hero>
				<div className="flex flex-col-reverse sm:flex-row items-start">
					<div className="flex flex-col pr-8">
						<h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-5">
							Dashboard
						</h1>
						<Text className="mb-16" color="$gray800">
							This is my personal dashboard, built with Next.js API routes
							deployed as serverless functions.
						</Text>
						<h2 className="font-bold text-2xl md:text-3xl tracking-tight mb-5">
							Top tracks
						</h2>
						<Text className="mb-16" color="$gray800">
							Curious what I'm currently jamming to? Here's my top tracks on
							Spotify updated daily.
						</Text>
					</div>
				</div>
			</Hero>
		</Layout>
	);
};

export default dashboard;
