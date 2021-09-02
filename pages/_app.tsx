import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';
import { AuthContext, AuthProvider } from '@utils/app-provider';
import { useRouter } from 'next/dist/client/router';

function MyApp({ Component, pageProps }: AppProps) {
	const { push } = useRouter();

	return (
		<AuthProvider>
			<AuthContext.Consumer>
				{({ user }) => {
					if (Component.private) {
						if (user) {
							return <Component {...pageProps} user={user} />;
						} else {
							push('/login');
							return <div>Redirection...</div>;
						}
					} else {
						return <Component {...pageProps} user={user} />;
					}
				}}
			</AuthContext.Consumer>
		</AuthProvider>
	);
}
export default MyApp;
