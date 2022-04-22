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

export { formatRegions };