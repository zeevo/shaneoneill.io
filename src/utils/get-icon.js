import { ICONS } from '../constants';

const getIcon = (name) => {
  let icon;

  switch (name) {
    case 'twitter':
      icon = ICONS.TWITTER;
      break;
    case 'github':
      icon = ICONS.GITHUB;
      break;
    case 'telegram':
      icon = ICONS.TELEGRAM;
      break;
    case 'email':
      icon = ICONS.EMAIL;
      break;
    case 'rss':
      icon = ICONS.RSS;
      break;
    case 'linkedin':
      icon = ICONS.LINKEDIN;
      break;
    case 'instagram':
      icon = ICONS.INSTAGRAM;
      break;
    case 'facebook':
      icon = ICONS.FACEBOOK;
      break;
    case 'gitlab':
      icon = ICONS.GITLAB;
      break;
    case 'codepen':
      icon = ICONS.CODEPEN;
      break;
    case 'youtube':
      icon = ICONS.YOUTUBE;
      break;
    case 'medium':
      icon = ICONS.MEDIUM;
      break;
    case 'website':
      icon = ICONS.WEBSITE;
      break;
    case 'discord':
      icon = ICONS.DISCORD;
      break;
    default:
      icon = {};
      break;
  }

  return icon;
};

export default getIcon;
