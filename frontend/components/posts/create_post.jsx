import React, { useState, useEffect} from "react";

function CreatePost(props){
  const [title, setTitle] = useState('');
  const [photoFile, setPhotoFile] = useState(null);
  const [photoUrl, setPhotoUrl] = useState('https://pretty-things-seeds.s3-us-west-1.amazonaws.com/upload-photo.jpg');


  useEffect(() => {
    props.fetchUser(props.currentUser.id);
  }, [])

  function handleFile(e) {
    const fileReader = new FileReader();
    const file = e.currentTarget.files[0];
    fileReader.onloadend = () => {
      setPhotoFile(file);
      setPhotoUrl(fileReader.result);
    }

    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      setPhotoUrl('');
      setPhotoFile(null);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("post[title]", title);
    if (photoFile) {
      formData.append("post[photo]", photoFile);
      formData.append("post[title]", title);
      formData.append("post[user_id]", props.currentUser.id);
    }

    $.ajax({
      url: "/api/posts",
      method: "POST",
      data: formData,
      contentType: false,
      processData: false
    }).then(() => {
      props.history.push(`/users/my-profile`);
    });
  }

  function handleCancel(e) {
    e.preventDefault();
    props.history.push(`/users/my-profile`);
  }

  function handleUpdate(field) {
    if (field === "title") return e => setTitle(e.target.value);
  }

  return (
      <form className="new-post-form" onSubmit={handleSubmit}>
      <div className="upload-form-div">
        <div className="preview-div">
          <div className="preview-outline">
            <img className="scanner-icon" src={photoUrl} />
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
                onChange={handleFile}
              />
            </div>
          </label>
          <label className="upload-content">
            <input
              className="title-input-field"
              onChange={handleUpdate("title")}
              type="text"
              placeholder="Write a caption..."
              value={title}
            ></input>
          </label>
        </div>
        <div className="post-right-bottom">
          <div className="post-form-buttons">
            <button
              className="post-button-cancel"
              onClick={handleCancel}
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

export default CreatePost;

