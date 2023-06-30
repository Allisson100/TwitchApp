import create from 'zustand';

const useChannelName = create((set) => ({
  channelName: '',
  setChannelName: (value) => set(() => ({ channelName: value })),
}));

const useGetDoubleName = create((set) => ({
  getDoubleName: 0,
  setGetDoubleName: (value) => set(() => ({getDoubleName: value})),
}))

export {useChannelName , useGetDoubleName};