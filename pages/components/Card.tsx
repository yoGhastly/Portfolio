import { Card as NextCard, Grid, Text, Link } from '@nextui-org/react';

interface CardProps {
	label: string;
	title: string;
	desc: string;
}

export const Card: React.FC<CardProps> = ({ label, title, desc }) => (
	<NextCard css={{ p: '$6', mw: '400px' }} isHoverable isPressable>
		<NextCard.Header>
			<img
				alt="nextui logo"
				src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
				width="34px"
				height="34px"
			/>
			<Grid.Container css={{ pl: '$6' }}>
				<Grid xs={12}>
					<Text h4 css={{ lineHeight: '$xs' }}>
						{title}
					</Text>
				</Grid>
				<Grid xs={12}>
					<Text css={{ color: '$accents8' }}>{label}</Text>
				</Grid>
			</Grid.Container>
		</NextCard.Header>
		<NextCard.Body css={{ py: '$2' }}>
			<Text>{desc} </Text>
		</NextCard.Body>
		<NextCard.Footer>
			<Link
				icon
				color="secondary"
				target="_blank"
				href="https://github.com/nextui-org/nextui"
			>
				Visit source code on GitHub.
			</Link>
		</NextCard.Footer>
	</NextCard>
);
