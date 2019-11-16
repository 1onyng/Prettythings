import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.currentUser = this.props.currentUser;
    this.Logout = this.Logout.bind(this);
    this.handleNewPostForm = this.handleNewPostForm.bind(this);
  }

  Logout() {
    this.props.logout();
  }

  handleNewPostForm(e) {
    e.preventDefault();
    let path = "/newpost";
    this.props.history.push(path);
  }

  render() {
    return (
      <div className="page">
        <section className="nav-bar-container">
          <div className="nav-left">
            <Link className="nav-icon" to={"/"}>
              <img
                className="camera"
                src="https://pretty-things-seeds.s3-us-west-1.amazonaws.com/camera.png"
              />
              <div className="nav-link-logo">Pretty Things</div>
            </Link>
          </div>
          {/* <SearchBarContainer /> */}
          <div className="nav-right">
            {/* <Link className="nav-icon" to={`/users/my-profile`}>
              <img
                className="box-icon"
                src="https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/fotobox_icon.png"
              />
            </Link> */}
            {/* <Link className="nav-icon" to={`/newpost`}>
              <img
                className="post-form-icon"
                src="https://fotobox-seeds.s3-us-west-1.amazonaws.com/image_assets/rolleiflex.jpg"
              />
            </Link> */}
            <button
              className="nav-sign-out"
              onClick={this.handleNewPostForm}>
              Add Photo
            </button>
            <button 
              className="nav-sign-out" 
              onClick={this.Logout}>
              Log Out
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default NavBar;
