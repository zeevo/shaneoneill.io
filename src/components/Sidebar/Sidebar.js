import React from 'react';
import Author from './Author';
import Contacts from './Contacts';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';

const Sidebar = ({ isIndex }) => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__inner}>
        <Author author={author} isIndex={isIndex} />
        <Contacts contacts={author.contacts} />
        {/* <Copyright copyright={copyright} /> */}
      </div>
    </div>
  );
};

export default Sidebar;
