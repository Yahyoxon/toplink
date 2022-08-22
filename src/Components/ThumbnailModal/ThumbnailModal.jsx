import reactDom from "react-dom";
import './ThumbnailModal.css'

const ThumbnailModal = ({ show, children, w, mh }) => {
    return reactDom.createPortal(
        <>
         {
         show ?
         
          <div className={`modalContainer ${show ? "show" : ""}`}>

            <div className="thumbnail-modal" onClick={(e) => e.stopPropagation()}
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
export default ThumbnailModal;