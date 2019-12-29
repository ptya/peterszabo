import React from 'react'
import PropTypes from 'prop-types'

const Repositories = ({ className, repos }) => (
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

Repositories.propTypes = {
  repos: PropTypes.array.isRequired,
  className: PropTypes.string,
}

Repositories.defaultProps = {
  className: '',
}

export default Repositories
