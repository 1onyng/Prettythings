import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.userPosts = this.props.userPosts;
    this.currentUser = this.props.currentUser;
    this.logout = this.props.logout;
    this.handleNewPostForm = this.handleNewPostForm.bind(this);
    this.handleEditUser = this.handleEditUser.bind(this);
  }

  componentDidMount() {
    this.props.fetchProfilePosts(this.props.currentUser.id);
    this.props.fetchUser(this.props.currentUser.id);
    window.addEventListener("scroll", this.myScrollFunc);
    this.props.closeModal();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.props.closeModal();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.myScrollFunc);
  }

  handleNewPostForm(e) {
    e.preventDefault();
    let path = `/newpost`;
    this.props.history.push(path);
  }

  handleEditUser(e) {
    e.preventDefault();
    let path = `/edit-profile`;
    this.props.history.push(path);
  }

  render() {
    if (!this.props.profileUser) {
      return <h2>Loading...</h2>;
    }
    const { username, photo_url, followerIds, followingIds } = this.props.profileUser;
    
    let userPhotos = this.props.userPosts.reverse().map(post => {
      return (
        <li key={post.id}>
          <div className="image-container">
            <div onClick={() => this.props.openModal({ postId: post.id })}>
              <img className="user-page-photos" src={post.photoUrl} />
              <div className="image-overlay">
                <p className="image-overlay-text">
                  <i className="fas fa-heart"></i >       
                  {post.likers ? post.likers.length : 0}
                  <i className="fas fa-comment" aria-hidden="true">
                  </i>
                  {post.commentIds ? post.commentIds.length : 0}
                </p>
              </div>
            </div>
          </div>
        </li>
      );
    });
    return (
      <div>
        <div className="profile-wrap">
          <div className="profile-left"></div>
          <div className="profile-container">
            <div className="profile-top">
              <div className="profile-display-pic">
                <img className="profile-display-pic" src={photo_url}/>
              </div>
              <div className="profile-top-right">
                <div className="profile-top-up">
                  <h1>{username}</h1>
                  <div className="profile-top-buttons">
                    <button className="profile-button" onClick={this.logout}>
                      Log Out
                    </button>
                    <button
                      className="profile-button"
                      onClick={this.handleEditUser}
                    >
                      Edit Profile
                    </button>
                    <button
                      className="profile-button"
                      onClick={this.handleNewPostForm}
                    >
                      Add Photo
                    </button>
                  </div>
                </div>
                <div className="profile-top-down">
                  <span>{this.props.userPosts.length} posts</span>
                  <span className="">{followerIds.length} followers</span>
                  <span className="">{followingIds.length} following</span>
                </div>
              </div>
            </div>
            <div className="profile-photo-index-container">
              <ul className="profile-photo-index">{userPhotos}</ul>
            </div>
          </div>
          <div className="profile-right"></div>
        </div>
      </div>
    );
  }
}

export default Profile;




