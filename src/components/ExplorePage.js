import React from 'react';
import ListItem from './ListItem';

const ExplorePage = ({ regionalFungi }) => {
  const fungi = regionalFungi.map(fungus => {
    return (
      <ListItem
        key={fungus.id}
        id={fungus.id}
        name={fungus.name}
        scientificName={fungus.scientificName}
        regions={fungus.regions}
        description={fungus.description}
        characteristics={fungus.characteristics}
        imageUrl={fungus.imageUrl} />
    )
  })

  return (
    <section>
      {fungi}
    </section>
  )
}

export default ExplorePage;