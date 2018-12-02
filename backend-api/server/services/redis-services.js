import Redis from 'redis';

const client = Redis.createClient(process.env.REDIS_URL);

client.on('error', err => console.log('Error ' + err));

/*
 * options
 * EX seconds -- Set the specified expire time, in seconds.
 * PX milliseconds -- Set the specified expire time, in milliseconds.
 * NX -- Only set the key if it does not already exist.
 * XX -- Only set the key if it already exist.
 */
export const set = ({key, value, option=null, time=null}) =>
  new Promise((resolve, reject) => {
    if (time) {
      return client.set(key, value, option, time, (err, data) => err ? reject(err) : resolve(data));
    } else {
      return client.set(key, value, option, (err, data) => err ? reject(err) : resolve(data));
    }
  });


export const mGet = (redisKeyList) => 
  new Promise((resolve, reject) =>
    client.mget(redisKeyList, (err, data) => 
      err ? reject(err) : resolve(data)));

      
export const mSet = keys =>
  new Promise((resolve, reject) => 
    client.mset(keys, (err, data) => 
      err ? reject(err) : resolve(data)));


export const get = key =>
  new Promise((resolve, reject) =>
    client.get(key, (err, data) =>
      err ? reject(err) : resolve(data)));


export const del = key =>
  new Promise((resolve, reject) =>
    client.del(key, (err, data) =>
      err ? reject(err) : resolve(data)));


export const lPush = (key, ...args) =>
  new Promise((resolve, reject) =>
    client.lpush(key, args, (err, data) =>
      err ? reject(err) : resolve(data)));


export const lRange = (key, num) =>
  new Promise((resolve, reject) =>
    client.lrange(key, 0, (num - 1), (err, data) =>
      err ? reject(err) : resolve(data)));


export const lLen = (key) =>
  new Promise((resolve, reject) =>
    client.llen(key, (err, data) =>
      err ? reject(err) : resolve(data)));


export const lTrim = (key, max) =>
  new Promise((resolve, reject) =>
    client.ltrim(key, 0, (max -1), (err, data) =>
      err ? reject(err) : resolve(data)));


export const lIndex = (key, index) =>
  new Promise((resolve, reject) =>
    client.lindex(key, index, (err, data) =>
      err ? reject(err) : resolve(data)));


export const flushDb = () =>
  new Promise((resolve, reject) =>
    client.flushdb((err, data) =>
      err ? reject(err) : resolve(data)));

