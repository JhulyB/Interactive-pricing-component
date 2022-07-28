import { useEffect, useState } from "react"
import classes from "./styles.module.scss"

import { BsCheck } from "react-icons/bs"
import { Toggle } from "../Toggle"
import { RangeSlider } from "../RangeSlider"

export const Card = () => {
  const [ pageviews, setPageviews] = useState("50");
  const [ monthlyPrice, setMonthlyPrice ] = useState(8);

  const [ hasDiscount, setHasDiscount ] = useState(false);


  function handleChangePageViews(event: { target: HTMLInputElement; }){
    setPageviews(event.target.value)
  }

  function handleChangeIsDiscount(event: {target: HTMLInputElement}){
    console.log('discounting pageviews price... ', event.target.checked);
    setHasDiscount(event.target.checked)
  }

  function calcDiscount(price: number){
    const calc = (75*price)/100
    
    return calc;
  }
    
  useEffect(() => {
    const numberPageviews = Number(pageviews);
    console.log(monthlyPrice);
    
    
    if (numberPageviews > 10 && numberPageviews < 50){
      hasDiscount ? setMonthlyPrice(calcDiscount(8)) : setMonthlyPrice(8)
    };
    if (numberPageviews > 50 && numberPageviews < 100){
      hasDiscount ? setMonthlyPrice(calcDiscount(12)) : setMonthlyPrice(12)
    };
    if (numberPageviews > 100 && numberPageviews < 500) {
      hasDiscount ? setMonthlyPrice(calcDiscount(16)) : setMonthlyPrice(16)
    };
    if (numberPageviews > 500 && numberPageviews < 1000) {
      hasDiscount ? setMonthlyPrice(calcDiscount(24)) : setMonthlyPrice(24)
      
    };
    if (numberPageviews === 1000){
      hasDiscount ? setMonthlyPrice(calcDiscount(36)) : setMonthlyPrice(36)
    };
    
  }, [pageviews])

    return(
      <div className={classes.card}>
        <div  className={classes.rangeContent}>
          <p className={classes.tagPageView}>
            
            {pageviews === "1000" ? '1M ' : `${pageviews}K `}
            PAGEVIEWS
          </p>
          <RangeSlider
            value={pageviews}
            handleChange={handleChangePageViews}
            />

          <div className={classes.tagPrice}>
            <h1>${monthlyPrice}.00</h1>
            <p>/ month</p>
          </div>
        </div>

        <div  className={classes.toggleContent}>
          <div className={classes.toggleInput}>
            <p>Monthly Billing</p>
            <Toggle
              handleChange={handleChangeIsDiscount}
              />
          </div>
          <div className={classes.labelDiscount}>
            Yearly Billing
            <p>-25%</p>
          </div>
        </div>

        <div className={classes.footer}>
          <div className={classes.list}>
            <ul>
              <li><BsCheck color="#10D5C2"/>Unlimited websites</li>
              <li><BsCheck color="#10D5C2"/>100% data ownership</li>
              <li><BsCheck color="#10D5C2"/>Email reports</li>
            </ul>
          </div>

          <div  className={classes.btn}>
            <button>Start my trial</button>
          </div>
        </div>
      </div>
    )
}