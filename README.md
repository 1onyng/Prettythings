# Pretty Things
---
[Live Link](https://pretty-things.herokuapp.com/#/)

Pretty Things is a social networking clone of Instagram. It allows users to upload pictures and communicate with each other by posting comments and likes where each picture is the focal point of the discussion.

The front end is developed using React.js and Redux, along with PostgreSQL and Rails to build the back end. Image hosting is supported by Amazon Web Services.

![Screen Shot 2019-11-22 at 9 48 50 AM](https://user-images.githubusercontent.com/52185954/69448418-55984580-0d0d-11ea-999e-65b82cbe20e1.png)

## User Authentication 

Users can create and log in to accounts. Passwords are managed using the BCrypt hashing function, avoiding the security risk of storing actual passwords. Protected routes are used to allow users to only comment and remove their own photos, while Auth routes permit specific pages to be viewed only when logged in.

![Screen Shot 2019-11-22 at 10 42 59 AM](https://user-images.githubusercontent.com/52185954/69451762-ff2f0500-0d14-11ea-9659-9c02b7b8dcb3.png)

## Post Photos, Likes, & Comments

Photos can be uploaded via your phone or desktop computer. Users can then comment and/or like directly below the photo.

```javascript
  handleUnlike(e) {
    e.preventDefault();

    this.props.deleteLike(this.props.post.id).then(() => {
      this.props.fetchPost(this.props.post.id);
    });
  }
  handleLike(e) {
    e.preventDefault();
    this.props.createLike({ post_id: this.props.post.id }).then(() => {
      this.props.fetchPost(this.props.post.id);
    });
  }
  ```

## Profile Stats

Users will have access to all photos that they have posted, as well as information on the the number of users that they are currently following and ones that are following them. On hover, each photo also displays its number of comments and likes. Members can also change their profile photo and username.   

## Personalized Image Feed

Photos that are only relevant to the user (followed users) are displayed through the feed. Clicking a single photo will open a modal for a more detailed view. Users can still get the full range of the latest photos from all users by clicking the explore icon (telescope).

![Screen Shot 2019-11-22 at 11 02 26 AM](https://user-images.githubusercontent.com/52185954/69452866-9ac17500-0d17-11ea-9476-721fbe5df4ef.png)

## User Search

Users are able to search for other users via the search bar. Selecting a user in the dropdown redirects the user to the searched user's profile page.

```javascript
let userMatches = this.props.users.filter(user =>
  user.username.toUpperCase().includes(e.target.value.toUpperCase())
);
if (!e.target.value) userMatches = [];
this.setState({
  matches: userMatches,
  searchField: e.target.value
});
 ```

## Technologies 
* Javascript
* Ruby on Rails
* PostgreSQL
* HTML
* SCSS/CSS

## Libraries
* React.js (incl. react-router-dom)
* Redux (incl. react-redux, redux-thunk middleware)
* jQuery for Ajax calls to my API
* Bcrypt for user authorization
* AWS S3 buckets to store user and listing photos

## Future Implementations
* Notify user when other users submit a like or comment on their post. 
* Allow users to upload video snippets.  



