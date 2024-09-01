import CryptoJS from 'crypto-js';

const SECRET_KEY: string = "fdrdr656dtdfd" ; 

export const encryptData = (data: any): string => {
  const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
  return ciphertext;
};

export const decryptData = (ciphertext: string): any => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return JSON.parse(originalText);
};
