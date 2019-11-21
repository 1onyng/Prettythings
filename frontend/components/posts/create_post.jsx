import React from "react";

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      photo: "",
      photoFile: null,
      photoUrl: "https://pretty-things-seeds.s3-us-west-1.amazonaws.com/upload-photo.jpg"
    };
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.currentUser.id);
  }

  handleFile(e) {
    const fileReader = new FileReader();
    const file = e.currentTarget.files[0];
    fileReader.onloadend = () =>
      this.setState({ photoFile: file, photoUrl: fileReader.result });

    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({ photoUrl: "", photoFile: null });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("post[title]", this.state.title);
    if (this.state.photoFile) {
      formData.append("post[photo]", this.state.photoFile);
      formData.append("post[title]", this.state.title);
      formData.append("post[user_id]", this.props.currentUser.id);
    }

    $.ajax({
      url: "/api/posts",
      method: "POST",
      data: formData,
      contentType: false,
      processData: false
    }).then(() => {
      this.props.history.push(`/users/my-profile`);
    });
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.history.push(`/users/my-profile`);
  }

  handleUpdate(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (
      <form className="new-post-form" onSubmit={this.handleSubmit}>
        <div className="upload-form-div">
          <div className="preview-div">
            <div className="preview-outline">
              <img className="scanner-icon" src={this.state.photoUrl} />
            </div>
          </div>
        </div>
        <div className="post-form-right">
          <div className="post-right-top">
          </div>
          <div className="post-right-mid">
            <label className="upload-photo">
              <div>
                <input
                  className="photo-input-field"
                  id="file-selector"
                  type="file"
                  onChange={this.handleFile}
                />
              </div>
            </label>
            <label className="upload-content">
              <input
                className="title-input-field"
                onChange={this.handleUpdate("title")}
                type="text"
                placeholder="Write a caption..."
                value={this.state.title}
              ></input>
            </label>
          </div>
          <div className="post-right-bottom">
            <div className="post-form-buttons">
              <button
                className="post-button-cancel"
                onClick={this.handleCancel}
              >
                Cancel
              </button>
              <input
                className="post-button-upload"
                type="submit"
                value="Upload Post"
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default CreatePost;
