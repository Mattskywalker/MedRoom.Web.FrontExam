import useUser from "hooks/user/useUser";
import { Button, Form } from "react-bootstrap";

const FormComponent = () => {
	const { search, setSearch, handleSubmit } = useUser();
	return (
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
	);
};

export default FormComponent;
