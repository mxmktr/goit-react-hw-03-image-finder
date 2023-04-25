import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, pageNumber) {
  const response = await axios.get(`?q=${query} `, {
    params: {
      key: '7900432-26a61502dc2db9573bbff3077',
      page: pageNumber,
      per_page: 12,
    },
  });
  return refactorImagesList(response.data.hits);
}

function refactorImagesList(images) {
  return images.map(({ id, webformatURL, largeImageURL }) => {
    return { id, webformatURL, largeImageURL };
  });
}
