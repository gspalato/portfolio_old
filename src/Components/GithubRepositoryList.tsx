import React, { useEffect, useState } from "react";
import { Octokit } from "../Octokit";
const { request } = require("@octokit/request");

import { Button } from "./Button";
import { Card } from "./Card";
import { CardView } from "./CardView";

import Selfie from "../Assets/img/selfie.png";
import { OctokitResponse } from "@octokit/types";


// Component
interface IGithubRepositoryListProps {
	className?: string;
}

export const GithubRepositoryList: React.FC<IGithubRepositoryListProps> = (props) => {
	const [repositories, setRepositories] = useState<any>([]);

	useEffect(() => {
			request('GET /users/{owner}/repos', {
				headers: {
					"user-agent": "gspalato.portfolio/1.0.0",
				},
				owner: 'gspalato',
			}).then((data: any) => setRepositories(data));

		console.log(repositories);
	})

	/*
		[
			{
				id, node_id, name, full_name, owner, 
				private, description, url, fork, topics
			}
		]
	*/

  return (
		<CardView className={props.className}>
			{repositories?.map((v: any, _: any) => {
				return (
					<Card image={Selfie} title="Test" description="Lorem ipsum yamete">
						<Button text="Check Out">
							<i className="fa-solid fa-up-right-from-square text-scheme-offwhite pl-[0.5rem]"></i>
						</Button>
					</Card>
				);
			})}
		</CardView>
  );
}