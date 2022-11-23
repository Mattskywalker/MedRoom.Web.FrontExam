import { Card, Container, Figure, Nav, Spinner, Row } from "react-bootstrap";

import { Star } from "phosphor-react";
import formatDate from "utils/formatDate";
import useUser from "hooks/user/useUser";
import FormComponent from "components/Form";

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

				{userData && !isFetching && (
					<Nav className="justify-content-center align-items-center">
						<Nav.Item>
							<Figure>
								<Figure.Image
									alt={`Imagem de ${userData?.login}`}
									src={userData?.avatar_url}
									roundedCircle
									width={100}
								/>
							</Figure>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href={userData?.html_url} target="_blank">
								{userData?.login}
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>{userData?.location}</Nav.Item>
					</Nav>
				)}

				{reposData?.map((repo) => (
					<Row className="mb-5">
						<Card key={repo.name}>
							<Card.Body>
								<Card.Title>{repo.name}</Card.Title>
								<Card.Subtitle className="mb-2 d-flex align-items-end gap-2">
									<Star size={20} />
									{repo.stargazers_count}
								</Card.Subtitle>
								<Card.Link href={repo.html_url} target="_blank">
									Ver projeto
								</Card.Link>
								<Card.Text>Criado em: {formatDate(repo.created_at)}</Card.Text>
							</Card.Body>
						</Card>
					</Row>
				))}
			</>
		</Container>
	);
};

export default Home;
