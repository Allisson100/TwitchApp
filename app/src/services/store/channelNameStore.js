import create from 'zustand';

const useChannelName = create((set) => ({
  channelName: '',
  setChannelName: (value) => set(() => ({ channelName: value })),
}));

export default useChannelName;