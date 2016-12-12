import React, { Component } from 'react';
import { reduxForm} from 'redux-form';

class PostsNew extends Component {
  render() {
    return (
      <form>
      <h3>Create A New Post</h3>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" className="form-control" id="title" />
        <label htmlFor="categories">Categories</label>
        <input type="text" className="form-control" id="categories">
        <label htmlFor="content">Content</label>
        <textarea type="text" className="form-control" id="content">
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm',
  field: ['title', 'categories', 'content']
})(PostsNew);
