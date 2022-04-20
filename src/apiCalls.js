export const fetchUser = username => {
  const userId = username.split('mycophile').join('');

  return fetch(`https://unidentified-fungus-outdoors.herokuapp.com/api/v1/users/${userId}`).then(response => response.json())
}

export const fetchRegionalFungi = region => {
  return fetch(`https://unidentified-fungus-outdoors.herokuapp.com/api/v1/fungi/${region}`).then(response => response.json())
}

export const postSighting = sighting => {
  return fetch('https://unidentified-fungus-outdoors.herokuapp.com/api/v1/sightings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(sighting)
  }).then(response => response.json())
}

export const deleteSighting = id => {
  return fetch(`http://localhost:3001/api/v1/sightings/${id}`, { method: 'DELETE' }).then(response => response.json())
}