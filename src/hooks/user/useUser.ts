import { useQueries } from "@tanstack/react-query";
import { Octokit } from "octokit";

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

type UserPropsReturn = {
	userData: UserProps;
	reposData: RepoProps[];
	refetch: () => void;
	isFetching: boolean;
};

const octokit = new Octokit({
	auth: "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",
});

const useUser = (login: string): UserPropsReturn => {
	const [user, repos] = useQueries({
		queries: [
			{
				queryKey: ["user"],
				queryFn: async () => {
					const response = await octokit.request(`GET /users/${login}`);
					return response.data;
				},
			},
			{
				queryKey: ["repos"],
				queryFn: async () => {
					const response = await octokit.request(
						`GET /users/${login}/repos?sort=created`
					);
					return response.data;
				},
			},
		],
	});

	const refetch = () => {
		user.refetch();
		repos.refetch();
	};

	const isFetching = user.isFetching || repos.isFetching;

	return { userData: user.data, reposData: repos.data, refetch, isFetching };
};

export default useUser;
