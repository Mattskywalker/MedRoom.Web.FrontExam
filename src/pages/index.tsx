import { Button, Card, Container, Figure, Form, Nav } from "react-bootstrap";

const Home = () => {
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
						<Figure.Image alt="171x180" src="https://picsum.photos/50" />
					</Figure>
					<Nav.Link href="/home" target="_blank">
						Nome do usuário
					</Nav.Link>
				</Nav.Item>

				<Nav.Item>
					<Nav.Link>Localização</Nav.Link>
				</Nav.Item>
			</Nav>

			<Card>
				<Card.Body>
					<Card.Title>Nome do repo</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">Estrelas</Card.Subtitle>
					<Card.Link href="#">Ver projeto</Card.Link>
					<Card.Text>Criado em</Card.Text>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default Home;
