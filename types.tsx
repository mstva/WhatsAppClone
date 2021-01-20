export type RootStackParamList = {
  Root: undefined;
  ChatRoom: undefined;
  NotFound: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type CameraParamList = {
  CameraScreen: undefined;
};

export type ChatsParamList = {
  ChatsScreen: undefined;
};

export type StatusParamList = {
  StatusScreen: undefined;
};

export type CallsParamList = {
  CallsScreen: undefined;
};

export type Message = {
  id: string,
  content: string,
  createdAt: string,
  user: User
}

export type User = {
  id: string,
  name: string,
  imageUri: string
}

export type ChatRoom = {
  id: string,
  users: User[],
  lastMessage: Message
}
