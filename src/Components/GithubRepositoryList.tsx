import React, { useState } from "react";

interface IGithubRepositoryListProps { }

export const GithubRepositoryList: React.FC<IGithubRepositoryListProps> = props => {
	const [repositories, setRepositories] = useState<object[]>([]);

  return (
		<div className="">
			{repositories.map((v, i) => {
				return
			})}
		</div>
  );
}