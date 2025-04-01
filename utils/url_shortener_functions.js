import crypto from 'crypto'

export const urlEncoder=(value)=>{
    const randomHex=crypto.randomBytes(4).toString('hex');
    // console.log(value,randomHex);
    return randomHex;
}