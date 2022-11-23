import { Container, Spinner, Row } from "react-bootstrap";

import useUser from "hooks/user/useUser";
import FormComponent from "components/Form";
import Repository from "components/Repository";
import User from "components/User";

const Home = () => {
	const { userData, reposData, isFetching } = useUser();

	return (
		<Container>
			<>
				<FormComponent />

				{isFetching && (
					<Row className="justify-content-center">
						<Spinner animation="border" variant="primary" />
					</Row>
				)}

				{userData && !isFetching && <User />}

				{reposData?.map((repo) => (
					<Row className="mb-5">
						<Repository repo={repo} />
					</Row>
				))}
			</>
		</Container>
	);
};

export default Home;
