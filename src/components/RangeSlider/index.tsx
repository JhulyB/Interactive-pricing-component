import { ChangeEvent, useState } from 'react';
import classes from './styles.module.scss'

interface Props{
    value: string,
    handleChange: (event: {target: HTMLInputElement}) => void,
}

export const RangeSlider = ({value, handleChange}:Props) => {
    
    return(
        <div className={classes.slidecontainer}>
            <input 
                type="range" 
                min="10" 
                max="1000" 
                value={value}
                className={classes.slider} 
                id="myRange" 
                onChange={handleChange}
            />
        </div>
    )
}