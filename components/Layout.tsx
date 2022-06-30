import Head from 'next/head';
import React from 'react';

interface Props {
	title: string;
	children: JSX.Element | JSX.Element[];
}

export const Layout: React.FC<Props> = ({ title, children }) => {
	return (<>
		<Head>
			<title>{title}</title>
				<meta
					name="description"
					content="A web platform to find your digital unique rarity"
				/>
				<link rel="icon" href="favicon.ico" />
		</Head>
		<main>{children}</main>
	</>);
};
