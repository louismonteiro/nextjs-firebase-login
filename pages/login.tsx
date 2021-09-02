import Link from 'next/link';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@utils/firebase/firebase';
import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';

const inputStyle = {
	display: 'block',
	border: '1px solid black',
};

const firebaseAuthErrors = {
	'auth/app-deleted': "You can't login in this app anymore",
	'auth/app-not-authorized': "It's not possible to login right now",
	'auth/argument-error': 'Incorrect arguments',
	'auth/invalid-api-key': 'Invalid API key',
	'auth/invalid-user-token':
		'Your session is not valid anymore. You need to sign in again',
	'auth/invalid-tenant-id': 'Tenant ID is invalid',
	'auth/network-request-failed':
		'Network error. Verify is you have internet connection.',
	'auth/operation-not-allowed': "This app don't have a login feature",
	'auth/requires-recent-login': 'You have to sign in again',
	'auth/too-many-requests':
		'You tried to sign in too many times. Wait a few minutes before you try again',
	'auth/unauthorized-domain':
		'This app is not authorized to run under this domain',
	'auth/user-disabled': 'This account is disabled. Please contact the support',
	'auth/user-token-expired': 'You need to sign in again',
	'auth/web-storage-unsupported':
		"This browser doesn't support storage. We recommend use Firefox or Google Chrome",
};

const LoginPage = ({}: InferGetServerSidePropsType<
	typeof getServerSideProps
>) => {
	const { push } = useRouter();
	const [error, setError] = useState<string | null>(null);
	const handleLogin = (e) => {
		e.preventDefault();

		const elements = e.nativeEvent.target.elements;

		signInWithEmailAndPassword(
			auth,
			elements.email.value,
			elements.password.value
		)
			.then((userCredential) => {
				// Signed in
				push('/');
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setError(errorCode);
				// ..
			});
	};

	return (
		<main>
			<div>Login</div>
			<div>
				<Link href="/">
					<a>index</a>
				</Link>
			</div>
			<div>
				<form onSubmit={handleLogin}>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="E-mail"
						style={inputStyle}
					/>
					<input
						type="password"
						name="password"
						id="password"
						placeholder="Password"
						style={inputStyle}
					/>
					{error && <p style={{ color: 'red' }}>{error}</p>}
					<button type="submit">Login</button>
				</form>
			</div>
		</main>
	);
};

export default LoginPage;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
	return {
		props: {},
	};
}
