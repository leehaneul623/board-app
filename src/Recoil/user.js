import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const userState = atom({
  key: 'useState',
  default: null,
  effects_UNSTABLE: [persistAtom],
})
