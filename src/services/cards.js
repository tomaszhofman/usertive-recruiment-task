import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v4/crew';

const getAll = async () => {
  const res = await axios.get(baseUrl);
  console.log(res.data);
  return res.data;
};

getAll();
