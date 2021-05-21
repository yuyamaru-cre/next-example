import { atom } from 'recoil';
import { CityId } from '@/constants/_index'

export const cityIdState = atom<CityId | undefined>({
    key: "CityId",
    default: undefined,
});