import { useState } from 'react';

function Content() {
  
     const [name,setName]=useState();
     const [email,setEmail]=useState();
     const [password,setPassword]=useState();
     const [city,setCity]=useState();
     const [mobile,setMobile]=useState();
     const [address,setAddress]=useState();
     const [gender,setGender]=useState();


     function formdata(){
        let formobj={"name":name,"mail":email,"password":password,"city":city,"mobile":mobile,
                     "address":address,"gender":gender}
                     console.log(formobj);
                     setAddress("");
                     setCity("");
                     setEmail("");
                     setGender("");
                     setMobile("");
                     setName("");
                     setPassword("")
     }

    return (
        <div className="container-fluid  overflow-hidden my-5 px-lg-0">
            <div className="container about px-lg-0">
                <div className="row g-0 mx-lg-0">
                    <div className="col-lg-6 ps-lg-0" style={{ minHeight: "80vh" }}>
                        <div className="position-relative h-100">
                            {/* <form>
                            <div className="form-group">
                                    <label for="password">Name</label>
                                    <input type="text" class="form-control" id="name" placeholder="Your Name" onChange={e=>setName(e.target.value)} value={name} />
                                </div>
                                <div class="form-group">
                                    <label for="email">Email address</label>
                                    <input type="email" class="form-control" id="email1" aria-describedby="emailHelp" placeholder="Enter email" onChange={e=>setEmail(e.target.value)} value={email} />
                                    <small id="emaiHelp" class="form-text text-muted">We'll never share your email with anyone else. </small>
                                </div>
                                <div class="form-group">
                                    <label for="password">Mobile</label>
                                    <input type="number" class="form-control" id="password" placeholder="+91 333 333 8888" onChange={e=>setMobile(e.target.value)} value={mobile} />
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" class="form-control" id="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} value={password}/>
                                </div>
                                <div class="form-group">
                                    <label for="city">City</label>
                                    <select  class="form-control" id="city" onChange={e=>setCity(e.target.value)} value={city}>
                                    <option value={""}> Select Your City</option>
                                    <option value="indore"> Indore</option>
                                    <option value="bhopal"> Bhopal</option>
                                    <option value="Jabalpur"> Jabalpur</option>
                                    <option value="Pune"> Pune</option>
                                    </select>
                                </div>
                                <br/>
                                <div className='form-group'> 
                                    <label for="address"> Address</label>
                                     <textarea  class="form-control" rows={4} onChange={e=>setAddress(e.target.value)} value={address}>

                                     </textarea>
                                </div>
                                <div class="form-check">
                                    <label for="gender">Gender</label> <br/>
                                    <input type="radio"  id="male" name='gender' onChange={e=>setGender(e.target.value)} value="male"/>
                                    <label for="male" > Male </label> &nbsp;
                                    <input type='radio' id='female' name='gender' onChange={e=>setGender(e.target.value)} value="female" />
                                    <label for="female" > Female</label>
                                </div>
                                <button type="button" onClick={formdata} class="btn btn-primary">Submit</button>
                            </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Content;