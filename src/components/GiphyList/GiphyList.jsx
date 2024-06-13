import { useEffect } from "react";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GiphyItem from "../GiphyItem/GiphytItem";




const GiphyList = ()=> {

    const dispatch = useDispatch();

    const  displayGiphy= useSelector(store => store.)

    //** CHECK NAMES */

    useEffect(() => {
        dispatch({type:'FETCH_GIPHY'})
    }, []);

    return(
        <>
        <h2>Giphy</h2>
        <section>
        {displayGiphy.map((item) => {
           <img
            key={item.id}
            src={item.images.fixed_height.url}
            alt={item.title} />
            return(
                <GiphyItem
                    key ={item.id} item={item}
                />
            )
        })}
        </section>
        </>
    )

}

export default GiphyList