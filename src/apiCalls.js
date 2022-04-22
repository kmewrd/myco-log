const url = 'https://unidentified-fungus-outdoors.herokuapp.com/api/v1';

export const fetchUser = username => {
  const userId = username.split('mycophile').join('');

  return fetch(`${url}/users/${userId}`).then(response => response.json())
}

export const fetchSightings = () => {
  return fetch('https://unidentified-fungus-outdoors.herokuapp.com/api/v1/sightings').then(response => response.json())
}

export const fetchRegionalFungi = region => {
  return fetch(`${url}/fungi/${region}`).then(response => response.json())
}

export const fetchFungus = id => {
  return fetch(`${url}/fungus/${id}`).then(response => response.json())
}

export const postSighting = sighting => {
  return fetch('https://unidentified-fungus-outdoors.herokuapp.com/api/v1/sightings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(sighting)
  }).then(response => response.json())
}

export const deleteSighting = id => {
  return fetch(`${url}/sightings/${id}`, { method: 'DELETE' }).then(response => response.json())
}