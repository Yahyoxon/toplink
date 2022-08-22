import reactDom from "react-dom";
import './ExitModal.css'

const ExitModal = ({ show, children, w, mh }) => {
    return reactDom.createPortal(
        <>
         {
         show ?
         
          <div className={`modalContainer ${show ? "show" : ""}`}>

            <div className="exit-modal" onClick={(e) => e.stopPropagation()} style={{width: `${w}px`, height: `${mh}px`}} >

              <main className="modal_content"> {children} </main>

            </div>

          </div>
          : null
         }
        </>,
        document.getElementById("modal")
      );
  };
export default ExitModal;