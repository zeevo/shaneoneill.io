import React from 'react';
import get from 'lodash/get';
import { Link } from 'gatsby';
import Menu from './Menu';
import './style/sidebar.scss';

class Sidebar extends React.Component {
  render() {
    const { location } = this.props;
    const { author, subtitle, menu } = this.props.data.site.siteMetadata;
    const isHomePage = get(location, 'pathname', '/') === '/';

    const authorBlock = (
      <div>
        <Link to="/">
          <img src="/photo.png" className="sidebar__author-photo" width="140" height="140" alt={author.name} />
        </Link>
        {isHomePage ? (
          <h1 className="sidebar__author-title">
            <Link className="sidebar__author-title-link" to="/">
              {author.name}
            </Link>
          </h1>
        ) : (
          <h2 className="sidebar__author-title">
            <Link className="sidebar__author-title-link" to="/">
              {author.name}
            </Link>
          </h2>
        )}
        <p className="sidebar__author-subtitle">{subtitle}</p>
      </div>
    );

    return (
      <div className="sidebar">
        <div className="sidebar__inner">
          <div className="sidebar__author">{authorBlock}</div>
          <div>
            <Menu data={menu} />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
