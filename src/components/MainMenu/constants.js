// import {useMessageStore} from 'src/nostr/store/MessageStore'
// import {useAppStore} from 'stores/App'

export const MENU_ITEMS = [
  {
    name: 'Messages',
    path: '/messages',
    icon: 'explore',
    // signInRequired: true,
    // indicator: () => useMessageStore().getNumUnread(useAppStore().myPubkey) > 0
  },
  {
    name: 'Garden',
    icon: 'topics',
    path: '/garden',
  },
  {
    name: 'Community',
    icon: 'bookmarks',
    path: '/community',
  },
  // {
  //   name: 'Explore',
  //   path: '/explore',
  // },
  // {
  //   name: 'Notifications',
  //   path: '/notifications',
  //   signInRequired: true,
  // },

  // {
  //   name: 'Settings',
  //   path: '/settings',
  //   req: true,
  // },
  // {
  //   name: 'Bookmarks',
  //   path: '/bookmarks'
  // },
]

export const MORE_MENU_ITEMS = [
  {
    name: 'Topics',
    icon: 'topics'
  },
  {
    name: 'Moments',
    icon: 'moments'
  },
  {
    name: 'Help Center',
    icon: 'help'
  },
  {
    name: 'Settings & privacy',
    icon: 'settings'
  },
]
