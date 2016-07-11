import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
  render(){
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.props.createPost)}>
        <h3>Create A new Form</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title}></input>
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}></input>
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content}></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }

}

export default reduxForm({
  form: 'PostsNew',
  fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);
