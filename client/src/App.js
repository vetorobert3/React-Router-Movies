import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route path='/movies' components={MovieList} />
      <Route path='/movies/:id' render={props => {
        const { id } = props.match.params;
      }} components={MovieList} />
    </div>
  );
};

export default App;
