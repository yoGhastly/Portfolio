import type { NextPage } from 'next';
import { Layout } from './components/Layout';
import { Navbar } from './components/Navbar';

const Home: NextPage = () => {
	return (
		<>
			<Layout title="Diego Espinosa - Developer">
				<Navbar />
			</Layout>
		</>
	);
};

export default Home;
