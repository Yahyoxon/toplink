import "./SpecialDomen.css"
import settingsIcon1 from "../../Assets/Img/pro0.png"
import settingsIcon2 from "../../Assets/Img/pro1.png"
import settingsIcon3 from "../../Assets/Img/pro2.png"
import settingsIcon4 from "../../Assets/Img/pro3.png"
import specialDomen from "../../Assets/Img/specialDomen.png"
import sp1 from "../../Assets/Img/r1.png"
import sp2 from "../../Assets/Img/r2.png"
import sp3 from "../../Assets/Img/r3.png"
import sp4 from "../../Assets/Img/r4.png"
import sp5 from "../../Assets/Img/r5.png"
import sp6 from "../../Assets/Img/r6.png"
import sp7 from "../../Assets/Img/r7.png"
import sp8 from "../../Assets/Img/r8.png"
import sp9 from "../../Assets/Img/r9.png"
import sp10 from "../../Assets/Img/r10.png"
import InputColor from 'react-input-color';
import searchIcon from "../../Assets/Img/search.png"

import ZinaCodeMirror from "./ZinaCodeMirror"
import { Link, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import SearchModal from "../SearchModal/SearchModal"
import { Context } from "../../Context/ThemeContext"
import { ButtonTextContext } from "../../Context/ButtonTextContext"
import { ColorContext } from "../../Context/ColorContext"
import { MatnContext } from "../../Context/TextContext"
import { BorderContext } from "../../Context/BorderContext"
import { FontContext } from "../../Context/FontContext"
import { themeList } from "../Settings/theme-list"


const SpecialDomen=()=>{
  
    const [theme,setTheme] = useContext(Context);
    
    const [color1, setColor1]= useContext(ColorContext);
    
    const [text,setText]=useContext(MatnContext);
    const [initial, setInitial] = useState('#000000');
    const [state, setState] = useState("");
    
    const [fonTheme, setFonTheme] = useState('#000000');
    const handleChange = (event) => {
        setFonTheme(event.target.value);
    };

    const [buttonTheme, setButtonTheme] = useState('#ffffff');
    const ButtonChange = (event) => {
        setButtonTheme(event.target.value);
        setColor1(event.target.value);
        localStorage.setItem("color1",event.target.value)  
        // console.log(event.target.value,"buttonrangi")
    };
    const [buttonTextColor,setButtonTextColor]=useContext(ButtonTextContext);
    const [buttonText, setButtonText] = useState('#ffffff');
    const ButtonTextChange = (event) => {        
        setButtonText(event.target.value);
        setButtonTextColor(event.target.value);
        localStorage.setItem("buttonTextColor",
        event.target.value);
        // console.log(event.target.value,"buttontext")
    };

    
    const [textColor, setTextColor] = useState('#ffffff');
    const TextChange = (event) => {
        setTextColor(event.target.value);
        setText(event.target.value);
        localStorage.setItem("text",event.target.value)
    };


    const [opacity, setOpacity] = useState('100');
    const opacityChange = (event) => {
        setOpacity(event.target.value/100);
    };

    const [blur, setBlur] = useState('0');
    const BlurChange = (event) => {
        setBlur(event.target.value/10);
        // console.log(event.target.value/10)
    };

    const [uploadImg, setUploadImg] = useState('');
    const ImgChange = (event) => {
        setUploadImg(event.target.value);
        // console.log(event.target.value)
    };

    useEffect(() => {
        setTimeout(() => {
        setState("Matn kiriting");
        }, 4000);
    }, []);

    const [searchModalOpen, setSearchModalOpen] = useState(false);

    function openSearchModal() {
    setSearchModalOpen(!searchModalOpen);
    }

    const setThema1 = (e) => {
        setTheme(e.target.alt)
        localStorage.setItem("theme",e.target.alt)    
    }


    const setBorderFunction=(e)=>{
        // console.log(e.target.attributes[1].value)
        // setBorder(e.target.attributes[1].value);
        localStorage.setItem("border",e.target.attributes[1].value);
        
    }


    const [font,setFont]=useContext(FontContext);
    const [selectFont,setSelectFont]=useState("Alegreya");

    const selectFontChange=(e)=>{
        setSelectFont(e.target.value);
        setFont(e.target.value);
        localStorage.setItem("font", e.target.value);
        console.log(e.target.value);
    }
    const {username} = useParams()


return(
<div className="special">
    <section className="settings">
        <h2 className="settings-title">
            Ilovalar
        </h2>
        <ul className="settings-list">
        {themeList.map((item) => (
          <li className="settings-item">
            <Link to={`/${username}`} onClick={setThema1} className="settings-btn">
              <img src={item?.img} alt={item?.alt} className="settings-img" />
            </Link>
          </li>
        ))}
            <li className="settings-item">
                <Link to="#" className="settings-btn">
                <img src={specialDomen}   onClick={() =>
                            window.scrollTo({ top: 300 })
                        }  alt="" className="settings-img" />
                {/* <div className="settings-box">
                    Pro
                </div> */}
                </Link>
            </li>

        </ul>
    </section>
    <form className="special-form">
        <div className="special-color">
            <div className="special-top">
                Ranglar & Font
            </div>

            <ul className="color-list">
                <li className="color-item">
                    <label className="color-label">Fon rangi</label>
                    <div>
                        <input type="color" 
                    value={fonTheme}
                    onChange={handleChange}
                         className="color-input" />
                        <p>{fonTheme}</p>
                    </div>
                </li>
                <li className="color-item">
                    <label className="color-label">Button rangi</label>
                    <div>
                        <input type="color"         
                          value={buttonTheme}
                    onChange={ButtonChange} className="color-input" />
                        <p>{buttonTheme}</p>
                    </div>
                </li>
                <li className="color-item">
                    <label className="color-label">Button matni rangi</label>
                    <div><input type="color"
                              value={buttonText}
                              onChange={ButtonTextChange}
                    className="color-input" />
                        <p>{buttonText}</p>
                    </div>
                </li>
                <li className="color-item">
                    <label className="color-label">Matn rangi</label>
                    <div><input type="color"    
                          value={textColor}
                    onChange={TextChange}
                     className="color-input" />
                        <p>{textColor}</p>
                    </div>
                </li>
            </ul>
            <div className="special-font">
                <label className="color-label">Font</label>
                <select className="special-select" onChange={selectFontChange}>
                    <option value="Fontni tanlang" disabled className="special-option">Fontni tanlang</option>
                    <option value="Alegreya" className="special-option">Alegreya</option>
                    <option value="Alfa-Slab-One" className="special-option">Alfa Slab One</option>
                    <option value="Boogaloo" className="special-option">Boogaloo</option>
                    <option value="Caveat" className="special-option">Caveat</option>
                    <option value="Cookie" className="special-option">Cookie</option>
                    <option value="Courgette" className="special-option">Courgette</option>
                    <option value="FiraSans" className="special-option">Fira Sans</option>
                    <option value="GochiHand" className="special-option">Gochi Hand</option>
                    <option value="Kalam" className="special-option">Kalam</option>
                    <option value="KaushanScript" className="special-option">Kaushan Script</option>
                    <option value="Lalezar" className="special-option">Lalezar</option>
                    <option value="Lato" className="special-option">Lato</option>
                    <option value="LobsterTwo" className="special-option">Lobster Two</option>
                    <option value="LuckiestGuy" className="special-option">Luckiest Guy</option>
                    <option value="MarckScript" className="special-option">Marck Script</option>
                    <option value="MerriWeather" className="special-option">Merriweather</option>
                    <option value="Monoton" className="special-option">Monoton</option>
                    <option value="Neucha" className="special-option">Neucha</option>
                    <option value="Neuton" className="special-option">Neuton</option>
                    <option value="Orbitron" className="special-option">Orbitron</option>
                    <option value="Oswald" className="special-option">Oswald</option>
                    <option value="PlayfairDisplay" className="special-option">Playfair Display</option>
                    <option value="PtSerif" className="special-option">PT Serif</option>
                    <option value="Raleway" className="special-option">Raleway</option>
                    <option value="Roboto" className="special-option">Roboto</option>
                    <option value="RobotoCondensed" className="special-option">Roboto Condensed</option>
                    <option value="RobotoMono" className="special-option">Roboto Mono</option>
                    <option value="RobotoSlab" className="special-option">Roboto Slab</option>
                    <option value="TitilliumWeb" className="special-option">Titillium Web</option>
                    <option value="Ubuntu" className="special-option">Ubuntu</option>
                </select>
            </div>
        </div>
        <div className="special-blok special-bloks">
            <div className="special-box">
                <div className="special-fon">
                    Orqa fon
                </div>
                <div className="special-card">
                  <div className="special-find"
                    style={
                        // C:\fakepath\
                        {backgroundImage: `url(${uploadImg})`,
                        backgroundColor:`${fonTheme}`,
                        filter:`blur(${blur}px)`,
                        opacity: `${opacity}`
                
                     }}
                    >
                        <button type="button"
                         onClick={()=>openSearchModal()} 
                         className="special-search">
                            Fonni qidiring</button>
                        <span>
                            <label className="special-upload" for="upload-photo">Kompyuterdan yuklash</label>
                            <input type="file" onChange={ImgChange}  name="photo" id="upload-photo"
                                accept="image/png, image/gif, image/jpeg" />
                        </span>

                    </div>
                    <div className="special-range">
                        <div className="special-blur">
                            <p>Blur</p>
                            <input type="range"    
                            // value={blur}  
                              onChange={BlurChange}
                            // onChange={(e)=>{
                            //     console.log(e.target.value/10)
                            // }} 
                              className="input-range" />
                        </div>
                        <div className="special-blur special-blurs">
                            <p>Opacity</p>
                            <input type="range" 
                            // value={opacity}
                             onChange={opacityChange} 
                            className="input-range " />
                        </div>
                    </div>
                </div>
            </div>
            <div className="special-box special-box1">
                <div className="special-fon">
                    Buttonlar
                </div>
                <div className="special-card">
                    <ul className="button-list">
                        <li className="button-item" >
                            <button type="button"onClick={setBorderFunction}  
                             alt="border1">
                                Link matni
                            </button>
                        </li>
                        <li className="button-item" >
                            <button type="button"  onClick={setBorderFunction} alt="border2">
                                Link matni
                            </button>
                        </li>
                        <li className="button-item" >
                            <button type="button"  onClick={setBorderFunction} alt="border3">
                                Link matni
                            </button>
                        </li>
                        <li className="button-item" >
                            <button type="button"  onClick={setBorderFunction} alt="border4">
                                Link matni
                            </button>
                        </li>
                        <li className="button-item" >
                            <button type="button"  onClick={setBorderFunction} alt="border5">
                                Link matni
                            </button>
                        </li>
                        <li className="button-item" >
                            <button type="button"  onClick={setBorderFunction} alt="border6">
                                Link matni
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
        <div className="custom-style">
            <div className="custom-top">
                Maxsus uslub
            </div>
            <div className="custom-bottom">
                <ZinaCodeMirror className="custom-zina" name="formula" onChange={setState} value={state} />
            </div>
            <button className="custom-button" type="button">
                Saqlash
            </button>
        </div>

    </form>

    <SearchModal show={searchModalOpen} className="search-modals" contentLabel="Example Modal">

        <div className="search-top">
            <form className="search-form">

                <img src={searchIcon} alt="" className="search-icon" />

                <input type="text" placeholder="type something to search" className="search-input" />
                <button onClick={()=>setSearchModalOpen()}
                    className="search-close">
                    &times;
                </button> </form>


        </div>
        <div className="search-main">
            <ul className="search-list">
                <li className="search-item">
                    <img src="https://picsum.photos/seed/picsum/200/300" alt="search-img" className="search-img" />
                    <p className="search-title">
                        Ivan Bandura Jack
                    </p>
                </li>
                <li className="search-item">
                    <img src="https://picsum.photos/seed/picsum/200/300" alt="search-img" className="search-img" />
                    <p className="search-title">
                        Ivan Bandura Jack
                    </p>
                </li>
                <li className="search-item">
                    <img src="https://picsum.photos/seed/picsum/200/300" alt="search-img" className="search-img" />
                    <p className="search-title">
                        Ivan Bandura Jack
                    </p>
                </li>

                <li className="search-item">
                    <img src="https://picsum.photos/seed/picsum/200/300" alt="search-img" className="search-img" />
                    <p className="search-title">
                        Ivan Bandura Jack
                    </p>
                </li>
                <li className="search-item">
                    <img src="https://picsum.photos/seed/picsum/200/300" alt="search-img" className="search-img" />
                    <p className="search-title">
                        Ivan Bandura Jack
                    </p>
                </li>
                <li className="search-item">
                    <img src="https://picsum.photos/seed/picsum/200/300" alt="search-img" className="search-img" />
                    <p className="search-title">
                        Ivan Bandura Jack
                    </p>
                </li>
                <li className="search-item">
                    <img src="https://picsum.photos/seed/picsum/200/300" alt="search-img" className="search-img" />
                    <p className="search-title">
                        Ivan Bandura Jack
                    </p>
                </li>
                <li className="search-item">
                    <img src="https://picsum.photos/seed/picsum/200/300" alt="search-img" className="search-img" />
                    <p className="search-title">
                        Ivan Bandura Jack
                    </p>
                </li>
                <li className="search-item">
                    <img src="https://picsum.photos/seed/picsum/200/300" alt="search-img" className="search-img" />
                    <p className="search-title">
                        Ivan Bandura Jack
                    </p>
                </li>
                <li className="search-item">
                    <img src="https://picsum.photos/seed/picsum/200/300" alt="search-img" className="search-img" />
                    <p className="search-title">
                        Ivan Bandura Jack
                    </p>
                </li>
                <li className="search-item">
                    <img src="https://picsum.photos/seed/picsum/200/300" alt="search-img" className="search-img" />
                    <p className="search-title">
                        Ivan Bandura Jack
                    </p>
                </li>
                <li className="search-item">
                    <img src="https://picsum.photos/seed/picsum/200/300" alt="search-img" className="search-img" />
                    <p className="search-title">
                        Ivan Bandura Jack
                    </p>
                </li>

            </ul>
        </div>




    </SearchModal>

</div>

)
}

export default SpecialDomen;