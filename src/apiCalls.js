export const fetchUser = username => {
  const userId = username.split('mycophile').join('');

  return fetch(`https://unidentified-fungus-outdoors.herokuapp.com/api/v1/users/${userId}`).then(response => response.json())
}