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
