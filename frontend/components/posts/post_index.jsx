import React, { useEffect } from "react";
import PostIndexItemContainer from "./post_index_item_container";

function PostIndex(props) {

  useEffect(() => { 
    props.action();
    props.closeModal();
  }, [])

  const { posts } = props;
  return (
    <div>
      <section className="feed-container">
        <div className="feed-left"></div>
        <div className="feed-mid">
          <ul className="feed-images">
            {posts.reverse().map((post, i) => {
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

export default PostIndex;

