import { CardProps } from './Card';
import React from 'react';
import { Card } from '../components/Card';
import { Grid, Link } from '@nextui-org/react';

interface Project extends CardProps {}
interface Props {
	projects: Project[];
}

export const SelectedProjects: React.FC<Props> = ({ projects }) => {
	return (
		<>
			<h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6">
				Selected projects
			</h3>
			<div className="flex gap-6 flex-col md:flex-row">
				{projects.map(({ label, title, desc }) => (
					<Grid.Container gap={4} key={label} justify="center">
						<Card label={label} title={title} desc={desc} />
					</Grid.Container>
				))}
			</div>
			<Link
				href="https://github.com/yoGhastly"
				color="text"
				block
				className="flex justify-center items-center mt-8 leading-7 rounded-lg  transition-all h-6"
			>
				See all projects
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					className="h-6 w-6 ml-1"
				>
					<path
						stroke="currentColor"
						strokeWidth="2"
						d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</Link>
		</>
	);
};
