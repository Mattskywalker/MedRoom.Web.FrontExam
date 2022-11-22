import { Button, Card, Container, Figure, Form, Nav } from "react-bootstrap";

import { Star } from "phosphor-react";
import formatDate from "utils/formatDate";
import useUser from "hooks/user/useUser";
import { FormEvent, useState } from "react";

const Home = () => {
	const [search, setSearch] = useState("");

	const { userData, reposData, refetch, isFetching } = useUser(search);

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		refetch();
	};

	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3">
					<Form.Label>Digite o nome do usuário</Form.Label>
					<Form.Control
						type="text"
						placeholder="Usuário"
						onChange={(e) => setSearch(e.target.value)}
						value={search}
					/>
				</Form.Group>
				<Button>Buscar</Button>
			</Form>

			<Nav className="justify-content-center">
				<Nav.Item className="d-flex">
					<Figure>
						<Figure.Image
							alt={`Imagem de ${userData?.login}`}
							src={userData?.avatar_url}
							roundedCircle
						/>
					</Figure>
					<Nav.Link href={userData?.html_url} target="_blank">
						{userData?.login}
					</Nav.Link>
				</Nav.Item>

				<Nav.Item>
					<Nav.Link>{userData?.location}</Nav.Link>
				</Nav.Item>
			</Nav>

			{reposData?.map((repo) => (
				<Card key={repo.name}>
					<Card.Body>
						<Card.Title>{repo?.name}</Card.Title>
						<Card.Subtitle className="mb-2 d-flex align-items-end gap-2">
							<Star size={20} />
							{repo?.stargazers_count}
						</Card.Subtitle>
						<Card.Link href={repo?.html_url} target="_blank">
							Ver projeto
						</Card.Link>
						<Card.Text>Criado em: {formatDate(repo?.created_at)}</Card.Text>
					</Card.Body>
				</Card>
			))}
		</Container>
	);
};

export default Home;
