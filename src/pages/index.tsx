import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Hacker News - NextJs</title>
				<meta
					name="description"
					content="This is a Hacker News clone - NextJs version"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<h2>homepage</h2>
			</main>
		</>
	);
}
