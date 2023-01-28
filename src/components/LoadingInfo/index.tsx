import Loading from "./Loading";

function LoadingInfo({ status, error }: LoadingInfoProps) {
	return (
		<>
			{error && <h2>something is wrong</h2>}
			{status === "loading" && <Loading />}
		</>
	);
}

export default LoadingInfo;
