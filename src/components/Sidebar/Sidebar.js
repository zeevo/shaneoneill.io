/** @jsx jsx */
import { jsx, useThemeUI } from 'theme-ui';
import React from 'react';
import Author from './Author';
import Contacts from './Contacts';
import styles from './Sidebar.module.scss';
import { useSiteMetadata } from '../../hooks';

const Sidebar = ({ isIndex }) => {
  const { author } = useSiteMetadata();
  const { theme } = useThemeUI();

  return (
    <div className={styles.sidebar}>
      <div
        className={styles.sidebar__inner}
        sx={{
          '&:after': {
            backgroundColor: theme.colors.text,
            position: 'absolute',
            content: '',
            width: '1px',
            height: '540px',
            top: '30px',
            right: '-10px',
            bottom: 0,
          },
        }}
      >
        <Author author={author} isIndex={isIndex} />
        <Contacts contacts={author.contacts} />
        {/* <Copyright copyright={copyright} /> */}
      </div>
    </div>
  );
};

export default Sidebar;
