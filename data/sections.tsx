export interface Section {
  /** Section name */
  name: string;
  /** Short description of section */
  description?: string;
  /** The URL to this section */
  url: string;
  /** Optional Image URL */
  imageUrl?: string;
  /** Disable the section */
  disabled?: boolean;
}

const sections: Section[] = [
  {
    name: 'Bandit Zone',
    description: 'Learn about Bandit Zones',
    url: '/bandit-zone',
    imageUrl: '/images/bandits.png'
  },
  {
    name: 'Mining',
    description: 'You may find various ores and gems around the map',
    url: '/mining'
  },
  {
    name: 'Raid Tools',
    description: 'Learn more about available raid tools',
    url: '/raid-tools'
  },
  {
    name: 'Punched Card',
    description: 'This section is in active development, please check again later',
    url: '/',
    disabled: true
  },
  {
    name: 'Key Rooms',
    description: 'Learn more about locked key rooms',
    url: '/key-rooms',
    imageUrl: '/images/gib.png'
  },
];

export default sections;