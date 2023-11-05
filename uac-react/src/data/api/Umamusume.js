import axios from 'axios';

const localhost = process.env.REACT_APP_LOCAL_HOST;

export const getAllUmamusume = () => {
  return axios.get(`${localhost}/umamusume`).then(res => res.data);
};
