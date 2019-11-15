import React from "react";
import PostIndexItemContainer from "./post_index_item_container";

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAllPosts();
    this.props.closeModal();
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <section className="feed-container">
          <div className="feed-left"></div>
          <div className="feed-mid">
            <ul className="feed-images">
              {posts.map((post, i) => {
                return (
                  <div key={i}>
                    <PostIndexItemContainer
                      key={post.id} 
                      post={post} 
                    />
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="feed-right"></div>
        </section>
      </div>
    );
  }
}

export default PostIndex;
