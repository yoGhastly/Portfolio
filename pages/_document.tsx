import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from 'next/document';
import { CssBaseline } from '@nextui-org/react';
import { Children } from 'react';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return {
			...initialProps,
			styles: Children.toArray([initialProps.styles]),
		};
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta property="og:image" content="/banner.png" />
					<meta
						property="og:title"
						content="Diego Espinosa | Frontend Developer"
					/>
					<meta content="Frontend Developer" name="description" />
					<meta property="og:description" content="Frontend Developer" />
					<meta property="og:type" content="website" />
					<meta property="og:site_name" content="Diego Espinosa" />
					<meta property="og:url" content="https://diegoes.vercel.app" />
					<meta property="twitter:card" content="summary_large_image" />
					<meta property="twitter:site" content="@diego03825" />
					<meta
						property="twitter:title"
						content="Diego Espinosa | Frontend Developer"
					/>
					{CssBaseline.flush()}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
