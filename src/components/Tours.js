import React from 'react'
import Card from './Card';

const Tours = (props) => {
    let toursData = props.toursData;

    // console.log(toursData)
  return (
    <div className='tours'>
        {
            toursData.map( (tour) => {
                return <Card key={tour.id} tour={tour} removeHandler={props.filterData} ></Card>
            })
        }
    </div>
  )
}

export default Tours
