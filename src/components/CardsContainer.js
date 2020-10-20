import React from 'react';
import { Card } from 'semantic-ui-react'
import './CardsContainer.css';

const CardsContainer = ( props ) => {
  const searchResults = props.searchResults;
  return (
    <div className="cards-container">
      {searchResults.length > 0 && searchResults.map((result) =>
        <Card>
          <Card.Content>
            <Card.Header content={result.title} />
            <Card.Meta content={result.director} />
            <Card.Description content={result.description} />
          </Card.Content>
        </Card>
      )}
    </div>
  )
};

export default CardsContainer;
