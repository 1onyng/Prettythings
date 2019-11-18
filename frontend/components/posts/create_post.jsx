import React from "react";

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      photo: "",
      photoFile: null,
      photoUrl: null
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
      this.props.history.push("/");
    });
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.history.push("/");
  }

  handleUpdate(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (
      <form className="new-post-form" onSubmit={this.handleSubmit}>      
        <img src={this.state.photoUrl} />
      
        <label>
          <input
            className="photo-input-field"
            id="file-selector"
            type="file"
            onChange={this.handleFile}
          />
        </label>

        <label>
          <input
            className="title-input-field"
            onChange={this.handleUpdate("title")}
            type="text"
            placeholder="Give your post a title"
            value={this.state.title}
          ></input>
        </label>


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
      </form>
    );
  }
}

export default CreatePost;
