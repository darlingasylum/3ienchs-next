export const APICall = async (url, corps) => {
  const response = await fetch(url, corps);
  const body = await response.json();
  if (response.status !== 201) throw Error(body.message);
  return body;
};
