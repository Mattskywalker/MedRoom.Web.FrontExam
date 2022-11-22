import { Button, Card, Container, Figure, Form, Nav } from "react-bootstrap";

import { useQuery } from "@tanstack/react-query";
import api from "service/api";
import { useState } from "react";
import { Star } from "phosphor-react";
import formatDate from "utils/formatDate";

type UserProps = {
	login: string;
	avatar_url: string;
	location: string;
	html_url: string;
};

type RepoProps = {
	name: string;
	html_url: string;
	stargazers_count: number;
	created_at: string;
};

const Home = () => {
	const { data: user, isFetching: isFetchingUser } = useQuery<UserProps>(
		["user"],
		async () => {
			const response = await api.get("/users/CarolinePandolfe");

			return response.data;
		}
	);

	const { data, isFetching } = useQuery<RepoProps[]>(["repos"], async () => {
		const response = await api.get(
			"/users/CarolinePandolfe/repos?sort=created"
		);

		return response.data;
	});

	return (
		<Container>
			<Form>
				<Form.Group className="mb-3">
					<Form.Label>Digite o nome do usuário</Form.Label>
					<Form.Control type="text" placeholder="Usuário" />
				</Form.Group>
				<Button>Buscar</Button>
			</Form>

			<Nav className="justify-content-center">
				<Nav.Item className="d-flex">
					<Figure>
						<Figure.Image
							alt={`Imagem de ${user?.login}`}
							src={user?.avatar_url}
							roundedCircle
						/>
					</Figure>
					<Nav.Link href={user?.html_url} target="_blank">
						{user?.login}
					</Nav.Link>
				</Nav.Item>

				<Nav.Item>
					<Nav.Link>{user?.location}</Nav.Link>
				</Nav.Item>
			</Nav>

			{data?.map((repo) => (
				<Card>
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
