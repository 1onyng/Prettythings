import React from "react";
import PostIndexItem from "./post_index_item";

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAllPosts();
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
                    <PostIndexItem
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
