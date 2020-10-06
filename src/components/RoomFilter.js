import React from 'react';
import {useContext} from "react";
import { RoomContext } from "../context";
import Title from "../components/Title"; 

//get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}
export default function RoomFilter({rooms}) {
    const context = useContext(RoomContext);
    //console.log(context);
    const {
        handleChange, 
        type, 
        capacity, 
        price, 
        minPrice, 
        maxPrice, 
        minSize, 
        maxSize, 
        breakfast, 
        pets
    } = context;

    //get Unique types
    let types = getUnique(rooms, 'type');

    // add all
    types = ['all', ...types];
  

    //map to jsx
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })
   

    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })
    return (
       <section>
        <Title title="search rooms" />
        <form className="filter-form">
            {/* select type*/}
            <div className="form-group">
                <label htmlFor="type">room type</label>
                <select name="type" 
                        id="type" 
                        value={type}
                        className="form-control" 
                        onChange={handleChange}>
                    {types}
                </select>
            </div>
            {/* end of select type*/}
             {/* guests*/}
             <div className="form-group">
             <label htmlFor="capacity">Guests</label>
             <select name="capacity" 
                     id="capacity" 
                     value={capacity}
                     className="form-control" 
                     onChange={handleChange}>
                 {people}
             </select>
         </div>
         {/* end of guests*/}
         {/*price range */}
         <div className="form-group">
         <label htmlFor="price">room price ${price}</label>
         <input type="range" 
                name="price" 
                min={minPrice} 
                max={maxPrice} 
                id={price} 
                value={price} 
                onChange={handleChange} 
                className="form-control" />
         </div>
         {/*end of price */}
         {/*extra */}
         <div className="form-group">
            <div className="single-extra">
                <input
                    type="checkbox"
                    name="breakfast"
                    id="breakfast"
                    checked={breakfast}
                    onChange={handleChange}
                />
                <label htmlFor="breakfast">Breakfast</label>
            </div>

            <div className="single-extra">
                <input
                    type="checkbox"
                    name="pets"
                    id="pets"
                    checked={pets}
                    onChange={handleChange}
                />
                <label htmlFor="pest">pets</label>
            </div>
         
         </div>


         {/*end of extra */}
        </form>

       </section>
    )
}
