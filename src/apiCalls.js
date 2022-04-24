const url = 'https://unidentified-fungus-outdoors.herokuapp.com/api/v1';

const fetchData = username => {
  if (username) {
    const userId = username.split('mycophile').join('');
    return fetch(`${url}/users/${userId}`).then(response => response.json())
  } else {
    return fetch(`${url}/sightings`).then(response => response.json())
  }
}

const fetchRegionalFungi = region => {
  return fetch(`${url}/fungi/${region}`).then(response => response.json())
}

const fetchFungus = id => {
  return fetch(`${url}/fungus/${id}`).then(response => response.json())
}

const postSighting = sighting => {
  return fetch(`${url}/sightings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(sighting)
  }).then(response => response.json())
}

const deleteSighting = id => {
  return fetch(`${url}/sightings/${id}`, { method: 'DELETE' }).then(response => response.json())
}

export { fetchData, fetchRegionalFungi, fetchFungus, postSighting, deleteSighting };