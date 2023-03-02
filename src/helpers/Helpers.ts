import { Platform } from 'react-native';
import { hasNotch as hasTopOffset } from 'react-native-device-info';

export const touchableConfig = {
  delayPressIn: 0,
  delayPressOut: 0,
  activeOpacity: 0.8,
};

export type AnyType = any;

export interface InputHintConfig {
  type: 'error' | 'info';
  text: string;
}

export const hasNotch = hasTopOffset();

export const isIOS = Platform.OS === 'ios';

export const noop = () => {};

export const uuid = () => {
  const chars = '0123456789abcdef'.split('');

  const uuids = [];
  const rnd = Math.random;

  let r;

  uuids[8] = uuids[13] = uuids[18] = uuids[23] = '-';
  uuids[14] = '4';

  for (let i = 0; i < 36; i++) {
    if (!uuids[i]) {
      r = 0 | (rnd() * 16);

      uuids[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r & 0xf];
    }
  }

  return uuids.join('');
};

export const withDelay = (ms: number) =>
  new Promise((resolve) => setTimeout(() => resolve(noop), ms));
