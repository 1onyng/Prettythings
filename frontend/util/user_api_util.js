export const fetchUsers = () => {
  return $.ajax({
    method: "GET",
    url: `api/users`
  });
};

export const fetchUser = userId => {
  return $.ajax({
    method: "GET",
    url: `api/users/${userId}`
  });
};

export const updateUser = (formData, userId) => {
  return $.ajax({
    method: "PATCH",
    url: `api/users/${userId}`,
    data: formData,
    contentType: false,
    processData: false
  });
};

export const deleteUser = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/users/${id}`
  });
};

// render() {
//   return (
//     <form className="new-post-form" onSubmit={this.handleSubmit}>
//       <div className="upload-form-div">
//         <div className="preview-div">
//           <div className="preview-outline">
//             <img className="scanner-icon" src={this.state.photoUrl} />
//           </div>
//         </div>
//       </div>
//       <div className="post-form-right">
//         <div className="post-right-top">
//         </div>
//         <div className="post-right-mid">
//           <label className="upload-photo">
//             <div>
//               <input
//                 className="photo-input-field"
//                 id="file-selector"
//                 type="file"
//                 onChange={this.handleFile}
//               />
//             </div>
//           </label>
//           <label className="upload-content">
//             <input
//               className="title-input-field"
//               onChange={this.handleUpdate("title")}
//               type="text"
//               placeholder="Give your post a title"
//               value={this.state.title}
//             ></input>
//           </label>

//         </div>
//         <div className="post-right-bottom">
//           <div className="post-form-buttons">
//             <button
//               className="post-button-cancel"
//               onClick={this.handleCancel}
//             >
//               Cancel
//               </button>
//             <input
//               className="post-button-upload"
//               type="submit"
//               value="Upload Post"
//             />
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// }
