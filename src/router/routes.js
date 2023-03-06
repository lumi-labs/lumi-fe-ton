const routes = [
  {
    path: '/',
    redirect: '/messages',
  },
  {
    path: '/garden',
    component: () => import('pages/Feed.vue'),
    name: 'garden',
  },
  {
    path: '/community',
    component: () => import('pages/community/community.vue'),
    name: 'community',
  },
  {
    path: '/profile/:pubkey(npub[a-z0-9A-Z]{59})/:tab(posts|replies|reactions|relays)?',
    component: () => import('pages/profile/Profile.vue'),
    name: 'profile',
  },
  {
    path: '/profile/:pubkey(npub[a-z0-9A-Z]{59})/:tab(following|followers)',
    component: () => import('pages/profile/Followers.vue'),
    name: 'followers',
  },
  {
    path: '/thread/:id(note[a-z0-9A-Z]{59})',
    component: () => import('pages/Thread.vue'),
    name: 'thread',
  },
  {
    path: '/notifications',
    component: () => import('pages/Notifications.vue'),
    name: 'notifications',
  },
  {
    path: '/messages',
    component: () => import('pages/Feed.vue'),

    name: 'messages',
  },
  {
    path: '/messages/:pubkey(npub[a-z0-9A-Z]{59})',
    component: () => import('pages/messages/Conversation.vue'),
    name: 'conversation',
  },
  {
    path: '/settings',
    component: () => import('pages/Settings.vue'),
    name: 'settings',
  },
  // {
  //   path: '/messages/inbox',
  //   component: () => import('pages/Inbox.vue'),
  //   name: 'inbox',
  // },
  // {
  //   path: '/messages/:pubkey([a-f0-9A-F]{64})',
  //   component: () => import('pages/Messages.vue'),
  //   name: 'messages',
  // },
  // {
  //   path: '/event/:eventId([a-f0-9A-F]{64})',
  //   component: () => import('pages/Event.vue'),
  //   name: 'event',
  // },
  // {
  //   path: '/thread/:eventId([a-f0-9A-F]{64})',
  //   component: () => import('pages/Thread.vue'),
  //   name: 'thread',
  // },

  // {
  //   path: '/hashtag/:hashtagId([a-zA-Z0-9_]{1,63})',
  //   component: () => import('pages/Hashtag.vue'),
  //   name: 'hashtag',
  // },
  // {
  //   path: '/devTools',
  //   component: () => import('pages/DevTools.vue'),
  //   name: 'devTools',
  // },
  // {
  //   path: '/:catchAll(.*)*',
  //   component: () => import('pages/ErrorNotFound.vue'),
  // },
]

export default routes
