import classes from './styles.module.scss'

interface Props{
    handleChange: (event: {target: HTMLInputElement}) => void,
}

export const Toggle = ({handleChange}: Props) => {
    return (
        <label className={classes.switch}>
            <input 
                type="checkbox"
                value= "isDiscount"
                onChange={handleChange}
                />
            <span className={classes.slider}></span>
        </label>
    )
}