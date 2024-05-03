import "./Certificate.css";
import Logo from './Logo.png';
import Signature from './Signature.jpg';
const Certificate = () => {
 
    const fulldate = new Date(); 
    const year = fulldate.getFullYear();
    const month = fulldate.getMonth();
    const day = fulldate.getDay();
    
   
    // Generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Example usage
  const minNumber = 100000;
  const maxNumber = 10000000;
  const randomNumber = getRandomNumber(minNumber, maxNumber);
  console.log("Random Number:", randomNumber);
  
    return (<>
        <body>
            <div class="certificate">
                <img class="logo" src={Logo} alt="Logo" />;
                <h1 class="heading">Certificate of Achievement</h1>
                <div class="content">
                    <p class="name">John Doe</p>
                    <p class="details">This is to certify that</p>
                    <p class="description">has successfully completed the course on Web Development with excellence and dedication.</p>
                </div>
                <div class="signature">
                    <img class="logsignature" src={Signature} alt="Logo" />
                    <p class="manager">Manager's Signature:</p>
                    <p class="date">{day+"/"+month+"/"+year}</p>
                </div>
                <label for="certificate-id">Certificate ID: {randomNumber}</label>

            </div>
        </body>


    </>)
}

export default Certificate;
