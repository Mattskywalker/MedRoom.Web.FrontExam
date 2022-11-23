import { useQueries } from "@tanstack/react-query";
import { Octokit } from "octokit";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";

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
	search: string;
	setSearch: Dispatch<SetStateAction<string>>;
	handleSubmit: (event: FormEvent) => void;
};

const octokit = new Octokit({
	auth: "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",
});

const useUser = (): UserPropsReturn => {
	const [search, setSearch] = useState("");

	const [user, repos] = useQueries({
		queries: [
			{
				queryKey: ["user"],
				queryFn: async () => {
					const response = await octokit.request(`GET /users/${search}`);
					return response.data;
				},
			},
			{
				queryKey: ["repos"],
				queryFn: async () => {
					const response = await octokit.request(
						`GET /users/${search}/repos?sort=created`
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

	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		refetch();
	};

	const isFetching = user.isFetching || repos.isFetching;

	return {
		userData: user.data,
		reposData: repos.data,
		refetch,
		isFetching,
		search,
		setSearch,
		handleSubmit,
	};
};

export default useUser;
