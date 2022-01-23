 import React from 'react'
 import logo6 from '../Images/logo.png'


function SignUp() { 
return(
    <div>
        <div className="container">
            <div className="row">
                {/*<div className="col-6">
                    <img id="imgSignup" src={}/>
</div>*/}
                <div className="">
                    {/*<div className="text-end">
                        <img src={logo6} width={'40px'}/>
</div>*/}
                    <h2 className="fx-bold text center py-5">Welcome</h2>
                    <form action="#">
                        <div className="mb-4">
                            <label for="name" className="form-label">Name</label>
                            <input className="form-control" name="name"></input>
                        </div>
                        <div className="mb-4">
                        <label for="lastname" className="form-label">Last Name</label>
                            <input className="form-control" name="lastname"></input>
                        </div>
                        <div className="mb-4">
                        <label for="email" className="form-label">Email</label>
                            <input className="form-control" name="email"></input>
                        </div>
                        <div className="d-grid">
                        <button className="btn btn-primary"> Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
)
}
export default SignUp