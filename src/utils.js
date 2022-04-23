const formatRegions = regions => {
  const formattedRegions = regions.map(region => {
    if (region.includes('-')) {
      let halves = region.split('-');
      let formatted = halves.map(half => {
        let split = half.split('');
        let capital = split[0].toUpperCase();
        split.splice(0, 1, capital);

        return split.join('');
      })

      return formatted.join(' ');
    } else {
      let split = region.split('');
      let capital = split[0].toUpperCase();
      split.splice(0, 1, capital);

      return split.join('');
    }
  })

  return formattedRegions;
}

const formatDate = date => {
  let formattedDate = new Date(date);
  formattedDate = formattedDate.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return formattedDate;
}

const getSightingsThisMonth = sightings => {
  let month = new Date();
  month = month.getMonth();

  let monthlySightings = sightings.filter(sighting => {
    let date = new Date(sighting.date);
    let sightingMonth = date.getMonth();

    return sightingMonth === month;
  });

  return monthlySightings;
}

export { formatRegions, formatDate, getSightingsThisMonth };