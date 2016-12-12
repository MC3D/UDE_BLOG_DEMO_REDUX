import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
  render() {
    // const handleSubmit = this.props.handleSubmit;
    // const title = this.props.fields.title;
    const { fields: { title, categories, content }, handleSubmit } =  this.props;
    return (
      <form onSubmit={handleSubmit}>
      <h3>Create A New Post</h3>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" className="form-control" id="title" {...title} />
      </div>

      <div className="form-group">
        <label htmlFor="categories">Categories</label>
        <input type="text" className="form-control" id="categories"  {...categories}/>
      </div>

      <div className="form-group">
        <label htmlFor="content">Content</label>
        <textarea type="text" className="form-control" id="content" {...content}/>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
})(PostsNew);
