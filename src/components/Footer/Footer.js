import React from 'react';
import { Flex } from 'theme-ui';
import { getContactHref, getIcon } from '../../utils';
import ColorModeToggle from '../ColorModeToggle';
import Icon from '../Icon';
import styles from './Footer.module.scss';

const Footer = ({ contacts }) => (
  <div className={styles['contacts']}>
    <ul className={styles['contacts__list']}>
      {Object.keys(contacts).map((name) =>
        !contacts[name] ? null : (
          <li className={styles['contacts__list-item']} key={name}>
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
    <Flex sx={{ justifyContent: 'center' }}>
      <ColorModeToggle />
    </Flex>
  </div>
);

export default Footer;
