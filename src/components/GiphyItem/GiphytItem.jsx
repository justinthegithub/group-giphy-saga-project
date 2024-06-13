import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function GiphyItem({item}){

    const dispatch = useDispatch();

    const  displayGiphy= useSelector(store => store.)

    return(
        <>
        <div key ={item.id} >
            <img src={item.url}/>
            {displayGiphy} 
        </div>
        </>
    )
}

export default GiphyItem