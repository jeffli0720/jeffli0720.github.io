import { useRouteError } from "react-router-dom";

function ErrorPage() {

	const error = useRouteError();
  	console.error(error);

	return (
		<>
			<i>{error.statusText || error.message}</i>
		</>
	)
}

export default ErrorPage;
