import {  useState } from "react";
import axios from "axios"
function Form (){
        const [name,setName]=useState();
         const [email,setEmail]=useState();
         const [password,setPassword]=useState();
         const [city,setCity]=useState();
         const [mobile,setMobile]=useState();
         const [address,setAddress]=useState();
         const [gender,setGender]=useState();
         const [message,setMessage]=useState();
    
    let __Api_Url="http://localhost:3001/user/save"
         function SubmitData(){
            let formobj={"name":name,"email":email,"password":password,"city":city,"mobile":mobile,
                         "address":address,"gender":gender};
                        //  console.log(formobj);
                         axios.post(__Api_Url,formobj).then(()=>{
                            setMessage("Ragistration successfully !!!")
                            setAddress("");
                            setCity("");
                            setEmail("");
                            setGender("");
                            setMobile("");
                            setName("");
                            setPassword("")
                         })
                        .catch((error)=>{
                        console.log("Error:"+error);
                         })
         }
    return(
        <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div className="container quote px-lg-0">
            <div className="row g-0 mx-lg-0">
                <div className="col-lg-6 ps-lg-0" style={{minHeight:" 400px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="./support/img/quote.jpg" alt='support' style={{objectFit: "cover" }}/>
                    </div>
                </div>
                <div className="col-lg-6 quote-text py-5 wow fadeIn" data-wow-delay="0.5s">
                    <div className="p-lg-5 pe-lg-0">
                        <div className="section-title text-start">
                            <h1 className="display-5 mb-4">Register Here</h1>
                        </div>
                        <p className="mb-4 pb-2">"Register here to gain access to upcoming e-auctions, bid on exclusive items, receive alerts, and participate in live bidding events for rare collectibles and products."t</p>
                        <h4> {message}</h4>
                        <form>
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control border-0" placeholder="Your Name" value={name} onChange={e=>setName(e.target.value)} style={{height: "55px"}} />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="email" className="form-control border-0" placeholder="Your Email" style={{height: "55px"}} onChange={e=>setEmail(e.target.value)} value={email} />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control border-0" placeholder="Your Mobile" style={{height: "55px" }} onChange={e=>setMobile(e.target.value)} value={mobile}/>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control border-0" placeholder="Password" style={{height: "55px" }} onChange={e=>setPassword(e.target.value)} value={password}/>
                                </div>
                                <div className="col-12 col-sm-6 " style={{height: "55px", backgroundColor:"white"}}>
                                   <label> Gender</label> <br/>
                                    <label for="male" > Male</label> &nbsp;
                                    <input type="radio" name="gender" id="male" onChange={e=>setGender(e.target.value)} value="male" /> &nbsp;
                                    <label for="female" > Female</label> &nbsp;
                                    <input type="radio" name="gender" id="female" onChange={e=>setGender(e.target.value)} value="female" />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <select className="form-select border-0" onChange={e=>setCity(e.target.value)} style={{height: "55px"}} defaultValue="0">
                                        <option value="" disabled>Select A City</option>
                                        <option value="indore">Indore</option>
                                        <option value="banglore">Banglore</option>
                                        <option value="noida">Noida</option>
                                        <option value="delhi"> Delhi</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control border-0" placeholder="Address" onChange={e=>setAddress(e.target.value)} value={address}></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="button" onClick={SubmitData}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}
export default Form;