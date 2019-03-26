import React, { Component } from 'react';

const destinations = [
    {
      city: 'Sydney',
      country: 'Australie',
      image: 'https://www.datocms-assets.com/6737/1533670221-sydney-harbour-bridge-depositphotos.jpg?auto=compress&crop=faces&fit=crop&fm=jpg&h=800&w=2000',
      distance : '15 506 km de Bidart'
    },
    {
        city: 'Turrialba',
        country: 'Costa Rica',
        image: 'http://southamericatravelcentre.com.au/wp-content/uploads/2016/09/Costa-Rica.jpg',
        distance : '8 609 km de Bidart'
    },
    {
        city: 'La Havane',
        country: 'Cuba',
        image: 'http://www.cubaparticular.eu/images/imp/foto_home_epocar.jpg',
        distance : '7 540 km de Bidart'
    },
    {
        city: 'Papeete',
        country: 'Tahiti',
        image: 'https://yourperfectdestinationwedding.com/wp-content/uploads/2016/03/moorea-honeymoon.jpg',
        distance : '15 845 km de Bidart'
    },
    {
        city: 'Malabe',
        country: 'Sri Lanka',
        image: 'https://thomasausrilanka.files.wordpress.com/2017/09/cropped-sri-lanka-1.jpg',
        distance : '8 794 km de Bidart'
    }
  ];

const Travels = () => (
            <div>
                {destinations.map(element=>
                    <p>
                        <h2>{element.city}</h2>
                        <h3>{element.country}</h3>
                        <img src={element.image}></img>
                        <h4>{element.distance}</h4>
                    </p>
                )}</div>
);
        
export default Travels; 