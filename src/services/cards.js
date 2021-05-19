import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v4';

const getOne = async (id) => {
  const res = await axios.get(`${baseUrl}/${id}`);
  return res.data;
};

export default {
  getOne,
};
