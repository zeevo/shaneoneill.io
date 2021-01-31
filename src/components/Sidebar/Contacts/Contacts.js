/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { getContactHref, getIcon } from '../../../utils';
import ColorModeToggle from '../../ColorModeToggle';
import Icon from '../../Icon';
import styles from './Contacts.module.scss';

const Contacts = ({ contacts }) => (
  <div className={styles['contacts']}>
    <ul className={styles['contacts__list']}>
      {Object.keys(contacts).map((name) =>
        !contacts[name] ? null : (
          <li
            className={styles['contacts__list-item']}
            key={name}
            sx={{
              border: '1px solid black',
              borderColor: 'text',
            }}
          >
            <a
              className={styles['contacts__list-item-link']}
              href={getContactHref(name, contacts[name])}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon name={name} icon={getIcon(name)} />
            </a>
          </li>
        ),
      )}
    </ul>
    <ColorModeToggle />
  </div>
);

export default Contacts;
