import React from "react";
import propTypes from "prop-types";

import { Container, Repository } from "./styles";

const CompareList = ({ repositories }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <header>
          <img src={repository.owner.avatar_url} alt={repository.name} />
          <strong>{repository.owner.login}</strong>
          <small>{repository.name}</small>
        </header>
        <ul>
          <li>
            {repository.stargazers_count} <small>stars</small>
          </li>
          <li>
            {repository.forks_count} <small>forks</small>
          </li>
          <li>
            {repository.open_issues_count} <small>issues</small>
          </li>
          <li>
            {repository.last_commit} <small>last commit</small>
          </li>
        </ul>
      </Repository>
    ))}
  </Container>
);

CompareList.propTypes = {
  repositories: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      name: propTypes.string,
      owner: propTypes.shape({
        avatar_url: propTypes.string,
        login: propTypes.string
      }),
      stargazers_count: propTypes.number,
      open_issues_count: propTypes.number,
      forks_count: propTypes.number,
      last_commit: propTypes.string
    })
  )
};

export default CompareList;
