import reactDom from "react-dom";
import './SearchModal.css'

const SearchModal = ({ show, children, w, mh }) => {
    return reactDom.createPortal(
        <>
         {
         show ?
         
          <div className={`modalContainer ${show ? "show" : ""}`}>

            <div className="search-modal" onClick={(e) => e.stopPropagation()}
             style={{width: `${w}px`, height: `${mh}px`}} >

              <main className="modal_content"> {children} </main>

            </div>

          </div>
          : null
         }
        </>,
        document.getElementById("modal")
      );
  };
export default SearchModal;