import React from "react";
import img1 from "./image/Rectangle 76.png"
import img2 from"./image/CreditCard.png"
import img3 from"./image/Klarna.png"
import img4 from"./image/Radio Button.png"
import img5 from "./image/card-vector.png"
import img6 from"./image/Vector.png"
import img7 from"./image/Ticks.png"
import img8 from"./image/message.png"
import img9 from"./image/calenders.png"
import img10 from"./image/arrow.png"
import img11 from"./image/•.png"
import img12 from "./image/Ticket.png"
import img13 from"./image/cal.png"
import img14 from"./image/Clock.png"
import img15 from"./image/Tag.png"
import img16 from"./image/INSTAGRAM.png"
import img17 from"./image/FacebookLogo.png"
import img18 from "./image/twitter.png"
import According from './According';

export class Home extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                 <nav className="navbar navbar">
    <h2 className="tickete">tickete</h2>
</nav>
      
      <div className="row">
        <div className="col-8">
      <div className="confirm">
        <p class="confirm">Confirm and Pay</p>
    
      </div>
      <div class="enter-detail">
        <p className="enter">Enter your details</p>
        <p className="next-enter">We'll be sending your tickets to the details below. Booking for a friend? Add their details.</p>

        <div class="row">
          <div class="col-lg-4 col-md-6 form-group"id="text-form">
            <input type="text" name="name" class="form-control" id="name" placeholder="Ticket Inc" data-msg="Please enter at least 4 chars"/>
            <div className="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
          <input type="text" name="name" class="form-control" id="names" placeholder="Your Email" data-msg="Please enter at least 4 chars"/>
          <div class="validate"></div>
          
        </div>
        <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
          <input type="text" name="name" class="form-control" id="mail" placeholder="hr@ticket" data-msg="Please enter at least 4 chars"/>
          <div class="validate"></div>
          
        </div>
        <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
          <input type="text" name="name" class="form-control" id="mail" placeholder="hr@ticket.com" data-msg="Please enter at least 4 chars"/>
          <div class="validate"></div>
          
        </div>
        </div>
        <div className="add">
        <p className="Additional">Additional Information</p>
        <p className="Additional-information">We need a few more details to complete your reservation.</p>
        <div class="row">
        <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
          <input type="text" name="name" class="form-control" id="custom" placeholder="<custom input>" data-msg="Please enter at least 4 chars"/>
          <div class="validate"></div>
          
          
          
        </div>
        <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
          <input type="text" name="name" class="form-control" id="custom" placeholder="Your phone" data-msg="Please enter at least 4 chars"/>
          <div class="validate"></div>
        </div>
        </div>
        
        </div>
        <div className="select-your-payment">
        <p className="Additional">Select your mode of payment</p>
        <p className="Additional-information">Payments with Tickete are secure and encrypted.</p>
<div className="credit-card">
<img src={img2} className="credit-card-logo"></img>
<span className="debit">Credit & debit card</span>
<div className="row">
    

        
        <div class="row">
          <div class="col-lg-4 col-md-6 form-group"id="text-form">
            <input type="text" name="name" class="form-control" id="name" placeholder="Ticket Inc" data-msg="Please enter at least 4 chars"/>
            <div className="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
          <input type="text" name="name" class="form-control" id="names" placeholder="Your Email" data-msg="Please enter at least 4 chars"/>
          <div class="validate"></div>
          
        </div>
        <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
          <input type="text" name="name" class="form-control" id="mail" placeholder="Your Email" data-msg="Please enter at least 4 chars"/>
          <div class="validate"></div>
          
        </div>
        <div class="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
          <input type="text" name="name" class="form-control" id="mail" placeholder="hr@ticket.com" data-msg="Please enter at least 4 chars"/>
          <div class="validate"></div>
          
        </div>
        <div className="horizontal">
        <hr></hr>
<div className="klarna">
    <span className="klarna">
        <img src={img3} className="klarna-img"></img>
        <span className="klarna">Klarna</span>
    </span>
    <hr className="last-horizontal"></hr>


</div>
<div class="Total">
<p className="Additional">Total:price</p>
<p className="Additional-information">You will pay in currency.</p>

    
</div>
<div className="Recive">
    <span className="radio">
        <img src={img4}className="Radio Button">

        </img>
        <span className="klarna">Receive travel tips, suggestions and offers in city by email</span>
      

        {/* <img src={img4}className="" */}
    </span>
</div>
<div className="with-pay">
<p>With payment, you agree to the general <span className="with-payment">terms and conditions of Tickete</span> & the activity provider.</p>
</div>
<button type="button" class="btn btn" id="button">Confirm and pay
<img src={img5} class="images"></img>


</button>
<hr></hr>


        </div>
        </div>
        
        

</div>


</div>

        
        </div>
      </div>
      </div>
      <div className="col-4" id="last-col">
        <img src={img1} className="second-col-image"></img>
        <p className="Amsterdam">Amsterdam opeg boat canal cruise - Live Ggide - from Anne Frgnk House</p>
        <span className="varient-name">
        <img src={img12}></img>
<span className="variant"> variant name</span>
        </span>
        <div>
        <span className="varient-name">
        <img src={img13}></img>
<span className="Date"> Date</span>
        </span>
        </div>
        <div>
        <span className="varient-name">
        <img src={img14}></img>
<span className="time">time</span>
        </span>
        </div>
<hr></hr>
<div className="Ticket-overview">

<p>Tickets overview</p>


</div>
<span> pax type</span>
<span className="price"> price</span>
<div>

<span> pax type</span>
<span className="price"> price</span>
            </div>
            <div>
            <span> Fee</span>
<span className="prices"> price</span>
            </div>
            <div className="discount-applied">

<span> discount applied</span>
<span className="discount-prices"> price</span>
            </div>
            <hr></hr>
            <img src={img15}></img>
            <span className="privacy">
            Have a promo code?
            </span>

            <hr></hr>
            <div>

<span className="Totals">Total</span>
<span className="Total-discount-prices"> price</span>
            </div>
            <span className="you-will-pay">You will pay in currency</span>

            <div className="Free-cancel">
                <p className="Free">Free cancellation</p>
                <p className="cancel">Cancel before date for a full refund</p>
            </div>
            </div>
      </div>

    
      <hr className="line"></hr>
      <div className="row">
        <div className="col-8">
      <div className="Frequently">
        <div className="freq">
        <p className="Addi">Frequently asked questions</p>
        <According/>


        </div>

      </div>
      {/* <div className="freq">
        <div className="freq-ask">
            <p>Are my tickets transferable?
            <img src={img6}className="drop-button">

            </img>
            </p>
        </div>
        <p className="para">No. The tickets can only be used by the person(s) whose details are indicated on the voucher. If you’re booking for friends and family, make sure to key in their details.</p>
      </div> */}




      
</div>
</div>
<div className="Ticket-promise">
<p className="Addi">The Tickete promise</p>

</div>
<div className="row">
    <div className="col-3">
<div class="card " id="cards">
  <div class="card-body">
    <img src={img7}className="tick"></img>
    <h6 class="card-subtitle mb-2 text-muted" id="card-subtitle">Official tickets</h6>
    <p class="card-text">Authorised reseller to top attraction</p>
  
  </div>
</div>

</div>
<div className="col-3"id="cards-side">
<div className="card"id="cards">
  <div class="card-body">

  <img src={img8}className="tick"></img>

    <h6 class="card-subtitle mb-2 text-muted" id="card-subtitle">24/7 dedicated support</h6>
    <p class="card-text">We're here to help, talk to an expert</p>
   
  </div>
  </div>
</div>
<div className="col-3"id="cards-side">
<div class="card"id="cards">
  <div class="card-body">
  <img src={img9}className="tick"></img>
  <h6 class="card-subtitle mb-2 text-muted" id="card-subtitle">24/7 dedicated support</h6>
    <p class="card-text">Book stress-free with easy cancellation.</p>
   </div>
  </div>
</div>
<div className="col-3"id="cards-side">
<div class="card" id="cards">
  <div class="card-body">
  <img src={img10}className="tick"></img>
  <h6 class="card-subtitle mb-2 text-muted" id="card-subtitle">100% secure payments</h6>
  <p class="card-text">Internationally recognized encrypted payment process</p>
   
  </div>
</div>
</div>
</div>
<div className="footer">
    <div className="tic">
    <p className="ticc">tickete</p>
    <hr className="last-vertical-line"></hr>

        
    </div>
   <span>© Tickete Inc.</span>
   <img src={img11}className="point"></img>
   <span className="privacy">

 
    
    Privacy</span>
    <img src={img11}className="point"></img>
   <span className="privacy">

 
    
    Terms</span>
    <img src={img11}className="point"></img>
   <span className="privacy">

 
    
   Cancellation policy</span>

   <img src={img16} className="instagram"></img>
   <img src={img17} className="facebook"></img>
   <img src={img18} className="facebook"></img>

</div>

</div>
        );
    }
}
export default Home;