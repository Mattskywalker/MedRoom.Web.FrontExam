import useUser from "hooks/user/useUser";
import { Figure, Nav } from "react-bootstrap";

const User = () => {
	const { userData } = useUser();

	return (
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
	);
};

export default User;
