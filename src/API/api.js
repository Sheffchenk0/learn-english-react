import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000/db/',
});

export const getTheoryById = (id) => {
  return instance.get(`/Theory/${id}/index.json`).then(
    (res) => res.data,
    (er) => {
      throw er;
    },
  );
};
