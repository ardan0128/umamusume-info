import axios from 'axios';

const localhost = process.env.REACT_APP_LOCAL_HOST;

export const getAllUmamusume = () => {
  return axios.get(`${localhost}/umamusume`).then(res => res.data);
};

export const getDetailUmamusume = id => {
  return axios.get(`${localhost}/umamusume/${id}`).then(res => res.data);
};
