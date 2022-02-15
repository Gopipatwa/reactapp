// import React from 'react'
import { Link } from 'react-router-dom'
import {FaUserGraduate} from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Loginpage = (authorized) => {
    const [Password, setPassword] = useState("");
    const [Username, setUsername] = useState("");
    const navigate = useNavigate();
    // history.push('/home');
    const clickHandler = (e) => {
        e.preventDefault()
        let payload = { "username": Username,"password": Password };
        const fetchData = async () => {
            const response = await fetch("http://192.168.12.60:8888/login/", {
                method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
            });
            const data = await response.json();
            if (data.message==="success"){
                console.log(data.message);
                alert("Registered Successfully!");
                navigate("/home");
            }
            else{
                alert(JSON.stringify(data.message));
            }
            return console.log(data);
        }
        fetchData()
    }
    return (
        <div>
            <div className='container shadow-lg p-6 mt-60 max-w-sm ml-30 px-4 content-around'>
                <h2 className='font-bold uppercase text-center content-center'><FaUserGraduate/>LoginPage</h2>
                <form>
                    <div className="form-group mb-6">
                        <label forhtml="exampleInputEmail1" className="form-label inline-block mb-2 text-gray-700">Username</label>
                        <input type="text" onChange={(e)=>setUsername(e.target.value)} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" />
                        <small id="emailHelp" className="block mt-1 text-xs text-gray-600">We'll never share your username with anyone else.</small>
                    </div>
                    <div className="form-group mb-6">
                        <label forhtml="exampleInputPassword1" className="form-label inline-block mb-2 text-gray-700">Password</label>
                        <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <button type="submit" onClick={clickHandler} className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                        Submit
                    </button>
                    <div>
                    <Link to="/signup">SignUp?</Link>
                    
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Loginpage