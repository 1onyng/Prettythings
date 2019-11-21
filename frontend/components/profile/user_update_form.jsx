import React from "react";

class UserUpdateForm extends React.Component {
  constructor(props) {
    super(props);
    let { currentUser } = this.props;
    this.state = {
      username: currentUser.username,
      profilePic: currentUser.photo_url,
      photoFile: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.update = this.update.bind(this);
  }

  handleFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({
        profilePic: reader.result,
        photoFile: file
      });
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.props.currentUser.username === "demo_user") {
      window.alert(
        "Unable to modify the demo user account. Create an account to user this feature"
      );
    } else {
      const formData = new FormData();
      formData.append("user[id]", this.props.currentUser.id);
      formData.append("user[username]", this.state.username);
      if (this.state.photoFile) {
        formData.append("user[profile_photo]", this.state.photoFile);
      }
      this.props.updateUser(formData, this.props.userId).then(() => {
        this.props.history.push(`/users/my-profile`);
      });
    }
  }
  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }
  handleCancel(e) {
    e.preventDefault();
    let path = `/users/${this.props.currentUser.id}`;
    this.props.history.push(path);
  }
  render() {
    let postPreview = (
      <div className="preview-div update-preview">
        <div className="update-left-top">Profile Picture</div>
        <div className="profile-pic-main">
          <img className="post-pic-preview" src={this.state.profilePic} />
        </div>
      </div>
    );

    return (
      <div>
        <div className="post-form-container">
          <ul className="login-errors">{/* {this.errors()} */}</ul>
          <div className="upload-form-div">{postPreview}</div>

          <form className="post-form" onSubmit={this.handleSubmit}>
            <div className="update-form-right">
              <div className="update-right-top">
                <div>{this.props.currentUser.username}</div>
              </div>
              <div className="update-right-mid">
                <div className="update-profile-pic">
                  <label className="upload-photo" htmlFor="file-selector">
                    <div className="update-profile-text">
                      Update Profile Picture:
                    </div>
                    <input
                      className="photo-input-field int"
                      id="file-selector"
                      type="file"
                      onChange={this.handleFile}
                    />
                  </label>
                </div>
                <label className="update-username">
                  <div className="update-profile-text">Update Username:</div>
                  <input
                    type="text"
                    className="update-text-input int"
                    placeholder={this.state.username}
                    onChange={this.update("username")}
                  />
                </label>
              </div>
              <div className="update-right-bottom">
                <div className="post-form-buttons">
                  <button
                    className="post-button-cancel update-cancel"
                    onClick={this.handleCancel}
                  >
                    Cancel
                  </button>
                  <button
                    className="post-button-upload update-submit"
                    type="submit"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UserUpdateForm;


























