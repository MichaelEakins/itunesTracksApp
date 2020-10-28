const itunesUri = 'https://itunes.apple.com/search?term=';

export const searchAppleServicesByArtist = async (
  artistFirstName: string,
  artistLastName: string,
) => {
  const uri = `${itunesUri}${artistFirstName}+${artistLastName}`;
  return fetch(uri)
    .then((response) => response.json())
    .then((json) => {
      return json.results;
    })
    .catch((error) => {
      console.error(error);
    });
};
