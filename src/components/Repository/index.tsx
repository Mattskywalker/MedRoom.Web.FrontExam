import { Card } from "react-bootstrap";
import formatDate from "utils/formatDate";
import { Star } from "phosphor-react";
import { RepoProps } from "hooks/user/useUser";

type RepositoryProps = {
	repo: RepoProps;
};

const Repository = ({ repo }: RepositoryProps) => {
	return (
		<Card>
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
	);
};

export default Repository;
