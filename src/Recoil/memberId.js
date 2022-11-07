import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist()

export const memberIdState = atom({
  key: 'memberId',
  default: null,
  effects_UNSTABLE: [persistAtom],
})