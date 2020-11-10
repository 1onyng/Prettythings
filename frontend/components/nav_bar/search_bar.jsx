import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

function SearchBar(props) {
  const [searchField, setSearchField] = useState('');
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    props.fetchUsers();
  }, [])

  useEffect(() => {
    setSearchField('');
    setMatches([]);
  }, [props.location.pathname])

  function update() {
    return e => {
      let userMatches = props.users.filter(user =>
        user.username.toUpperCase().includes(e.target.value.toUpperCase())
      );
      if (!e.target.value) userMatches = [];
      setMatches(userMatches);
      setSearchField(e.target.value);
    }
  }

  return (
    <div className="user-search-results">
      <input
        className="user-search"
        type="text"
        placeholder="Search Users"
        onChange={update()}
        value={searchField}
      />
      <div className="outer-results">
        {matches.length ? (
          <div className="search-results-container">
            <div id="arrow"></div>
            <ul className="search-results-list">
              {matches.map(user => {
                return (
                  <li className="search-results-li" key={user.id}>
                    <Link
                      className="search-result-user"
                      to={`/users/${user.id}`}
                    >
                      <img
                        className="search-result-image"
                        src={user.photo_url}
                      />
                      <div className="search-result-username">
                        {user.username}
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
            <div></div>
          )}
      </div>
    </div>
  );
}

export default withRouter(SearchBar);
