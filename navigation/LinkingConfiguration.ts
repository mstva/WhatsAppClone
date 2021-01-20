import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Camera: {
            screens: {
              CameraScreen: 'camera',
            },
          },
          Chats: {
            screens: {
              ChatsScreen: 'chats',
            },
          },
          Status: {
            screens: {
              StatusScreen: 'status',
            },
          },
          Calls: {
            screens: {
              CallsScreen: 'calls',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
