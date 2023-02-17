import Head from "next/head";

function MetaHead({
	page,
	description,
}: { page: string; description: string }) {
	return (
		<Head>
			<title>{page} | Hacker News Clone - NextJs</title>
			<meta
				name="description"
				content={description}
			/>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
}

export default MetaHead;
