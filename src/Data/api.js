const BASE_URL = `https://api.jsonbin.io/v3`;
const xAccessKey = `$2b$10$u7OmnRXQeWLIrFHGmPj5kuZ7XB0D5ku038oYNTv9GxD6daZmE.2o6`;
const header = { "X-Access-Key": xAccessKey };

const fetchData = async (url) => {
  const res = await fetch(url, {
    headers: header,
  });

  if (!res.ok) throw new Error("There was and error getting data from API");
  return await res.json();
};
export const getAllTabs = async () => {
  const BIN_ID = `64d136ce8e4aa6225ecc4337`;
  const data = await fetchData(`${BASE_URL}/b/${BIN_ID}`);
  return data;
};
