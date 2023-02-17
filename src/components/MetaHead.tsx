import Head from "next/head";

type MetaHeadProps = Record<"title" | "description", string>;

function MetaHead({ title, description }: MetaHeadProps) {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
	);
}

export default MetaHead;
