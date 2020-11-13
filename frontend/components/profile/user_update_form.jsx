import React, { useState } from "react";

function UserUpdateForm(props) {
  const { currentUser } = props;
  const [username, setUsername] = useState(currentUser.username);
  const [profilePic, setProfilePic] = useState(currentUser.photo_url);
  const [photoFile, setPhotoFile] = useState(null);
  let postPreview = (
    <div className="preview-div update-preview">
      <div className="update-left-top">Profile Picture</div>
      <div className="profile-pic-main">
        <img className="post-pic-preview" src={profilePic} />
      </div>
    </div>
  );

  function handleFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      setProfilePic(reader.result);
      setPhotoFile(file);
    };
    if (file) reader.readAsDataURL(file);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (currentUser.username === "demo_user") {
      window.alert(
        "Unable to modify the demo user account. Create an account to use this feature"
      );
    } else {
      const formData = new FormData();
      formData.append("user[id]", currentUser.id);
      formData.append("user[username]", username);
      debugger;
      if (photoFile) {
        formData.append("user[profile_photo]", photoFile);
      }
      props.updateUser(formData, props.userId).then(() => {
        props.history.push(`/users/my-profile`);
      });
    }
  }

  function update(field) {
    if (field === 'username') return e => setUsername(e.target.value);
  }

  function handleCancel(e) {
    e.preventDefault();
    let path = `/users/${props.currentUser.id}`;
    props.history.push(path);
  }

  return (
    <div>
      <div className="post-form-container">
        {/* <ul className="login-errors"></ul> */}
        <div className="upload-form-div">{postPreview}</div>
        <form className="post-form" onSubmit={handleSubmit}>
          <div className="update-form-right">
            <div className="update-right-top">
              <div>{currentUser.username}</div>
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
                    onChange={handleFile}
                  />
                </label>
              </div>
              <label className="update-username">
                <div className="update-profile-text">Update Username:</div>
                <input
                  type="text"
                  className="update-text-input int"
                  placeholder={username}
                  onChange={update("username")}
                />
              </label>
            </div>
            <div className="update-right-bottom">
              <div className="post-form-buttons">
                <button
                  className="post-button-cancel update-cancel"
                  onClick={handleCancel}
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

export default UserUpdateForm;
