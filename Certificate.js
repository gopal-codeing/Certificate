import "./Certificate.css";
import  Logo from './Logo.png'; 
import  Signature from './Signature.jpg'; 
const Certificate =() =>{
    return (<>
<body>
  <div class="certificate">
    {/* <img class="logo" src="your-logo.png" alt="Certificate Logo"> */}
    <img class="logo"  src={Logo} alt="Logo" />;
    <h1 class="heading">Certificate of Achievement</h1>
    <div class="content">
      <p class="name">John Doe</p>
      <p class="details">This is to certify that</p>
      <p class="description">has successfully completed the course on Web Development with excellence and dedication.</p>
    </div>
    <div class="signature">
    <img class="logsignature"  src={Signature} alt="Logo" />;
      <p class="manager">Manager's Signature:</p>
      <p class="date">Date: May 3, 2024</p>
    </div>
    <label for="certificate-id">Certificate ID: 98765567890</label>

  </div>
</body>


    </>)
}

export default Certificate;