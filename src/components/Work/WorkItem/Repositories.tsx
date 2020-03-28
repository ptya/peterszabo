import React from 'react'

type Props = {
  repos: string[],
  className?: string,
}

const Repositories: React.FC<Props> = ({ className = '', repos }) => (
  <div className={className}>
    <h3>Related repositor{repos.length > 1 ? 'ies' : 'y'}:</h3>
    <ul>
      {repos.map((repo, i) => (
        <li key={i}>
          <a href={repo}>{repo.split(/[//]+/).pop()}</a>
        </li>
      ))}
    </ul>
  </div>
)

export default Repositories
