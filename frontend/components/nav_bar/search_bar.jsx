// import React from "react";
// import { Link, withRouter } from "react-router-dom";

// class SearchBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchField: "",
//       matches: []
//     };
//   }

//   componentDidMount() {
//     this.props.fetchUsers();
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.location.pathname !== this.props.location.pathname) {
//       this.setState({
//         searchField: "",
//         matches: []
//       });
//     }
//   }

//   update() {
//     return e => {
//       let userMatches = this.props.users.filter(user =>
//         user.username.toUpperCase().includes(e.target.value.toUpperCase())
//       );
//       if (!e.target.value) userMatches = [];
//       this.setState({
//         matches: userMatches,
//         searchField: e.target.value
//       });
//     };
//   }

//   render() {
//     return (
//       <div className="user-search-results">
//         <input
//           className="user-search"
//           type="text"
//           placeholder="Search Users"
//           onChange={this.update()}
//           value={this.state.searchField}
//         />
//         <div className="outer-results">
//           {this.state.matches.length ? (
//             <div className="search-results-container">
//               <div id="arrow"></div>
//               <ul className="search-results-list">
//                 {this.state.matches.map(user => {
//                   return (
//                     <li className="search-results-li" key={user.id}>
//                       <Link
//                         className="search-result-user"
//                         to={`/users/${user.id}`}
//                       >
//                         <img
//                           className="search-result-image"
//                           src={user.photo_url}
//                         />
//                         <div className="search-result-username">
//                           {user.username}
//                         </div>
//                       </Link>
//                     </li>
//                   );
//                 })}
//               </ul>
//             </div>
//           ) : (
//               <div></div>
//             )}
//         </div>
//       </div>
//     );
//   }
// }

// export default withRouter(SearchBar);

import React, { useState, useEffect, useRef } from "react";
import { Link, withRouter } from "react-router-dom";

function SearchBar(props) {
  const [searchField, setSearchField] = useState('');
  const [matches, setMatches] = useState([]);
  const mounted = useRef();

  useEffect((prevProps) => {
    if (!mounted.current) {
      props.fetchUsers();
      mounted.current = true;
    } else {
      if (prevProps.location.pathname !== props.location.pathname) {
        setSearchField('');
        setMathces([]);
      }
    }
  });

  // useEffect(() => {
  //   props.fetchUsers();
  // }, [])

  // useEffect((prevProps) => {
  //   if (prevProps.location.pathname !== props.location.pathname) {
  //     setSearchField('');
  //     setMathces([]);
  //   }
  // }, [])

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
