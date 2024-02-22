import httpClient from './httpClient';

export const getCards = async () => {
  try {
    const { data } = await httpClient.get(
      '/content/spaces/animals/types/game/entries?per_page=20'
    );
    return data.entries;
  } catch (error) {
    console.error(error);
  }
};
