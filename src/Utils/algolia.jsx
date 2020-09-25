import React, { useEffect, useState } from 'react';
import places from 'places.js';

const AlgoliaSearch = ( {render, input}  ) => {
    const [ results, setResults ] = useState([])

  const handleChange = (e) => {
    //   const { currentTarget: {value} } = e;
      console.log('SEARCHING FOR .....' + ' ' + input);
      fetch('https://places-dsn.algolia.net/1/places/query', {
          method: 'POST',
          'X-Algolia-Application-Id': 'plX599H8JSHS',
          'X-Algolia-API-Key': '530099727c2199d8f2ce4eb1bdd8b6b2',
          body: JSON.stringify({
              'query': input,
              'type': 'address'
          })
          
        })
        .then( (res) => res.json())
        .then( data => setResults(data) )
  }

  useEffect(() => {
    handleChange();
  }, [input])

  return (
        render(results)
  );
}


export default AlgoliaSearch;

