import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

export default function privatePage({}: InferGetServerSidePropsType<
	typeof getServerSideProps
>) {
	return <main>private</main>;
}

privatePage.private = true;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
	return {
		props: {},
	};
}
