import React from 'react';
import type { NextPage } from 'next';
import { Hero, Layout } from '../components';
import { Text } from '@nextui-org/react';

const snippets: NextPage = () => {
	return (
		<Layout title="Code Snippets | Diego Espinosa">
			<Hero>
				<div className="flex flex-col-reverse sm:flex-row items-start">
					<div className="flex flex-col pr-8">
						<h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-5">
							Code Snippets
						</h1>
						<Text className="mb-16" color="$gray800">
							These are a collection of code snippets I've used in the past and
							saved. Some are Serverless Functions, which include set up
							instructions. Others are anything from random CSS snippets to
							Node.js scripts.
						</Text>
					</div>
				</div>
			</Hero>
		</Layout>
	);
};

export default snippets;
