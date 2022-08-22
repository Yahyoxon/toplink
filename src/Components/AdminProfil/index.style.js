import styled from "styled-components";

export const MainBlok = styled.div`
    margin-left: 30px;

   .main-name{
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 38px;
        height: 39px;
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: ${(props) => (props.text.length > 0 ? props.text : "#01384D")};
    }
    div{
        display: flex;
        border: 1px solid #512DA8;
        border-radius: 30px;
        padding: 8px 5px;
        padding-left: 15px;
        width: 200px;
        margin: 8px 0;
    }
    .main-text{

        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        margin-left: 10px;

        height: 25px;
        width: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: ${(props) => (props.text.length > 0 ? props.text : "#01384D")} 
   
    }
    .main-subname{
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: ${(props) => (props.text.length > 0 ? props.text : "#01384D")} ;
    height: 20px;
    width: 320px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    }
    .main-map{
        display: flex;
       border: 1px solid ${(props) =>
         props.text.length > 0 ? props.text : "#512DA8"};
       border-radius: 30px;
       padding: 8px 5px;
       padding-left: 15px;
       width: 100%;
       margin: 15px 0; 
   }
   .main-map-blue, .main-map-dark,.main-map-dusk,.main-map-purple , .main-map-warm  {
    border: 1px solid white;
}
.main-subname-blue, .main-subname-dark,.main-subname-dusk,.main-subname-purple , .main-subname-warm,.main-subname-neon, .main-subname-pastel, .main-subname-luxury,.main-subname-stitched,.main-subname-sunset,.main-subname-friendly {
    color: white;
}
.main-map-neon {
    box-shadow: 0.5px 0.5px 4px #EA33F7;
    border: 2px solid #EA33F7;
}
.main-map-pastel {
    border: 2px solid white;
}
.main-map-luxury {
    background: linear-gradient(90.12deg, #C7AD5C 0.6%, #D8C78D 58.18%, #877335 99.9%);
    border: none;
}
.main-map-stitched,.main-map-sunset, .main-map-friendly  {
    background: transparent;
    border: 1px solid white;
}


 .main-name-blue,.main-name-dark,.main-name-dusk,.main-name-purple
 ,.main-name-warm, .main-name-neon, .main-name-pastel, .main-name-luxury  
 ,.main-name-stitched, .main-name-sunset, .main-name-friendly  {
    color: #FFFFFF;
}

 .main-text-blue, .main-text-dark,  .main-text-dusk,
   .main-text-purple, .main-text-warm, .main-text-pastel,  .main-text-stitched, .main-text-sunset, .main-text-friendly {
    color: white;
}

.main-text-neon {
    color:#FFFF54;
}

 .main-text-luxury,
 .main-text-luxury {
    color: black;
}
 
.main-icon {
    fill: ${(props) => (props.text.length > 0 ? props.text : "black")} ;
    width: 15px;
    height: 18px;
    margin-top: 4px;

}
.main-icon-blue,.main-icon-dark,.main-icon-dusk, .main-icon-purple, .main-icon-warm, .main-icon-pastel,, .main-icon-sunset,.main-icon-friendly ,.main-icon-stitched {
    fill: white;
}

.main-icon-neon {
    fill: #FFFF54;
}
    
.main-icon-luxury{
    fill:black;
}


@media(max-width:720px){
    .container{
        width:600px;
    }
    .main-map{
    width: 100%;

    }
}
@media(max-width:420px){
    .container{
        width:300px;
    }
    .main-name{
        font-size: 22px;
        line-height: 35px;
        height: 33px;
        margin: 0 auto;
    }
    .main-map {
        width: 80%;
        margin: 10px auto;
}
`;
export const AdminSocialList = styled.ul`
  margin: 17px 0;

  .adminSocial-link {
    display: flex;
    align-items: center;
    width: 649px;
    height: 54px;
    padding: 0px 16px;
    background: ${(props) =>
      props.color1.length > 0 ? props.color1 : "#84B0EC"};
    border-radius: 12px;
  }
  .adminSocial-name {
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 54px;
    border-left: 0.1px solid rgb(229, 229, 229);
    padding-left: 16px;
    color: ${(props) =>
      props.buttonTextColor.length > 0 ? props.buttonTextColor : "white"};
    height: 54px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .adminSocial-item {
    margin: 15px 0;
  }
  .adminSocial-boxes {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    margin: 0px 15px;
    margin-left: 0;
    margin-right: 16px;
    align-items: center;

    border-radius: 8px;
  }

  .adminSocial-link-blue {
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0.5px 0.5px 4px rgba(0, 0, 0, 0.15);
  }
  .adminSocial-link-dark {
    background: #2253ef;
    box-shadow: 0.5px 0.5px 4px rgba(0, 0, 0, 0.15);
  }

  .adminSocial-link-dusk,
  .adminSocial-link-pastel,
  .adminSocial-link-sunset {
    background: rgba(0, 0, 0, 0.15);
    box-shadow: 0.5px 0.5px 4px rgba(0, 0, 0, 0.15);
  }
  .adminSocial-link-purple {
    background: transparent;
    box-shadow: 0.5px 0.5px 4px rgba(0, 0, 0, 0.15);
    border: 1px solid #ffffff;
  }
  .adminSocial-link-warm {
    background: transparent;
    box-shadow: 0.5px 0.5px 4px rgba(0, 0, 0, 0.15);
    border: 1px solid transparent;
  }
  .adminSocial-link-neon {
    background: transparent;
    box-shadow: 0.5px 0.5px 4px #ffff54;
    border: 2px solid #ffff00;
  }
  .adminSocial-link-luxury {
    background: transparent;
    border: 2px solid #c7ad5c;
  }
  .adminSocial-link-stitched {
    background: transparent;
    border: 2px dashed rgba(0, 0, 0, 0.2);
  }
  .adminSocial-link-friendly {
    background: white;
    color: black;
    box-shadow: 0.5px 0.5px 4px rgba(0, 0, 0, 0.15);
  }

  .adminSocial-name-blue,
  .adminSocial-name-dark,
  .adminSocial-name-dusk,
  .adminSocial-name-purple,
  .adminSocial-name-warm,
  .adminSocial-name-neon,
  .adminSocial-name-pastel,
  .adminSocial-name-luxury {
    color: white;
  }
  .adminSocial-name-stitched {
    border-left: none;
    color: white;
  }

  .adminSocial-name-sunset {
    color: white;
    border-left: 0.5px solid #abbac3;
  }
  .adminSocial-name-friendly {
    color: black;
    border-left: 0.5px solid #abbac3;
  }
  .adminSocial-boxes-stitched {
    // background: #FFFF54;
  }
  .adminSocial-item-stitched {
    padding: 2.5px;
    border-radius: 12px;
    background: #2253ef;
  }

  .adminSocial-boxes-stitched,
  .adminSocial-boxes-sunset,
  .adminSocial-boxes-friendly {
    background-color: transparent;
  }
  .fa-brands {
    color: ${(props) =>
      props.buttonTextColor.length > 0 ? props.buttonTextColor : "white"};
    font-size: 26px;
    font-weight: 100;
    width: 26px;
    height: 26px;
  }

  .map-svg-blue,
  .map-svg-dark,
  .map-svg-dusk,
  .map-svg-purple,
  .map-svg-warm,
  .map-svg-pastel,
  .map-svg-stitched,
  .map-svg-sunset {
    color: white;
  }
  .map-svg-neon {
    color: yellow;
  }
  .map-svg-luxury {
    color: #c7ad5c;
  }
  .map-svg-friendly {
    color: black;
  }
  @media (max-width: 920px) {
    .container {
      width: 800px;
    }
    .adminSocial-link {
      width: 405px;
    }
  }
  @media (max-width: 420px) {
    .container {
      width: 300px;
    }
    .adminSocial-link {
      width: 294px;
    }

    .adminSocial-name {
      width: 215px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  .social-icon {
    width: 38px !important;
    height: 38px !important;
    background: transparent;
    color: white;
    fill: white;
  }
  .social-svg {
    width: 76% !important;
    height: 76% !important;
    top: 4px !important;
    left: 4px !important;
    fill: white;
    background: white;
  }
`;
