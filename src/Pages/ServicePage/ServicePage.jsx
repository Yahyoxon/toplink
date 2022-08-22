import { useState } from "react";
import "./ServicePage.css";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
import Drop from "./Drop";
 

const ServicePage=(props)=>{
    const [selected, setSelected] = useState(null);

    function toggler(i){
        if(selected === i){
          return setSelected(null)
        }
         setSelected(i)
       }
    
    return (
    <div className="service-page">
        <Nav />
        <div className="faq-details">
        <div className="container">
      <div className="details">
       <h2 className="details-title">
       Terms Of Service
       </h2>
        <ul className={`faq_list ${props.className ? props.className : "" }`}>
          {props.serviceFaqs.map( (element, i) => {
        return(
          <li key={i} className="faq_list__item" onClick={()=> toggler(i)}>
            <div className="text_wrap faq_list__item__question_wrapper">
              <h4 className="faq_header">
                {element.question}
              </h4>
              <span className={`icon ${selected===i ? 'closer' : 'opener' }`}>
              <Drop />
                {/* <img className="down-icon" src={DownIcon} alt="" /> */}
              </span>
            </div>
            <div className={`text_wrap ${selected===i ? 'faq_list__item__answer_wrapper show'
              : 'faq_list__item__answer_wrapper' }`}>

              <p className="faq_text">
                {element.answer}
              </p>
            </div>
          </li>
          )})}
        </ul>
      </div>
      </div>
      </div>
      <Footer />
    </div>
    )
}



 
  
export default ServicePage;


 