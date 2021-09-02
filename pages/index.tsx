import { AuthContext } from '@utils/app-provider';
import type { NextPage } from 'next';
import Head from 'next/head';
import Home from '../src/pages/home';
import Link from 'next/link';

const HomePage: NextPage = (props) => {
	return (
		<div>
			<Head>
				<title>PT APP</title>
				<meta name="description" content="Your " />
				<link rel="icon" href="/favicon.png" />
			</Head>

			<main>
				<Home {...props} />
				<Link href="/private">
					<a>Private</a>
				</Link>
			</main>
		</div>
	);
};

export default HomePage;
