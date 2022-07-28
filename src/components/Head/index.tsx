import classes from "./styles.module.scss"

interface Props {
    title: string
}

export const Head = ({title}:Props) => {
    return(
        <div 
            className={classes.head}
            >
            {/* <img alt="" src="../../assets/pattern-circles.svg" /> */}
            
            <h2>{title}</h2>
            <div>
                <h4>Sign-up for our 30-day trial.</h4>
                <h4>No credit card required</h4>
            </div>
        </div>
    )
}