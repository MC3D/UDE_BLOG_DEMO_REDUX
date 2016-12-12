import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
  render() {
    // const handleSubmit = this.props.handleSubmit;
    // const title = this.props.fields.title;
    const { fields: { title, categories, content }, handleSubmit } =  this.props;
    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create A New Post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={`form-group ${title.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label htmlFor="categories">Categories</label>
          <input type="text" className="form-control" id="categories"  {...categories}/>
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${title.touched && content.invalid ? 'has-danger' : ''}`}>
          <label htmlFor="content">Content</label>
          <textarea type="text" className="form-control" id="content" {...content}/>
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};
  if(!values.title) {
    errors.title = 'Enter a username';
  }
  if(!values.categories) {
    errors.categories = 'Enter categories';
  }
  if(!values.content) {
    errors.content = 'Enter some content';
  }
  return errors;
}

// connect: 1st arg is mapStateToProps, 2nd arg is mapDispatchToProps
// reduxForm: 1st arg is form config, 2nd arg is mapStateToProps, 3rd arg is mapDispatchToProps

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);
