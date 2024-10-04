import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const PasswordReset = () => {
    const {resetPassword} =useAuth()
    const [email,setEmail] =useState('')

    const handleSubmit =()=>{
        resetPassword(email)
        .then(()=>{})
        
    }

  return (
    <div>
{/* Open the modal using document.getElementById('ID').showModal() method */}

<h3 onClick={()=>document.getElementById('my_modal_2').showModal()}>Forget Password </h3>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box flex flex-col">
    <input onChange={(e)=>setEmail(e.target.value)} className="border border-gray-400 rounded-md p-4 text-xl mb-3 outline-none" type="text" placeholder="Enter Your Valid Email"/>
    <button onClick={handleSubmit} className="btn btn-primary font-bold">Submit</button>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
    </div>
  );
};

export default PasswordReset;
