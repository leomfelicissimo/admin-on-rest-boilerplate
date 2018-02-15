export const AdminError = (status) => ({
  status,
});

export const BASE_ADDRESS = `${process.env.REACT_APP_BASE_ADDRESS}`;

export const doFetch = async (url, requestInfo) => {
  console.log('Calling: ', url);
  let response;
  let responseData;

  try {
    response = await fetch(url, requestInfo);
    responseData = await response.json();
  } catch (ex) {
    throw new Error(`Ocorreu um erro não identificado. ${ex.message}`);
  }

  if (response && (response.status !== 200 && response.status !== 201)) {
    console.error(`Error:  ${JSON.stringify(responseData)}`);
    throw new AdminError(response.status);
  } else {
    return { data: responseData, total: responseData.length };
  }
};
