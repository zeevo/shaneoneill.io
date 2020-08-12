import React, { Component } from 'react';
import Post from './Post';
import './style/feed.scss';
import Author from './Author';
import Avatar from './Avatar';

const FilterButton = props => {
  const className = `post-single__tags-list-item-link filterbtn${props.first ? ' ml-0' : ''}`;
  return (
    <button type="button" onClick={props.onClick} className={className}>
      {props.tag}
    </button>
  );
};

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: this.props.posts,
    };
    const category = this.props.posts.map(post => post.node.frontmatter.category);
    this.state.category = category.filter((v, i) => category.indexOf(v) === i);
  }

  filterByCategory(category) {
    this.setState({
      filtered: this.props.posts.filter(post => post.node.frontmatter.category === category),
    });
  }

  render() {
    const { author, subtitle } = this.props;
    return (
      <div className="content__inner">
        {this.state.filtered.map(post => (
          <Post data={post} key={post.node.fields.slug} />
        ))}
      </div>
    );
  }
}

export default Feed;
