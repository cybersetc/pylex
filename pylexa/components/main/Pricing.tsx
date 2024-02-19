import React from 'react'
import pricing from '../../styles/pricing.module.css'
const Pricing = () => {
  return (
    <>
        <h1 className="text-4xl font-bold text-center py-8">
        <b className="text-white">Choose a plan</b>
    </h1>

    {/* <div className="flex justify-center items-center text-xl gap-4 mb-8">
        <div className="text-gray-400">Billed monthly</div>
        <div className="relative inline-block w-12 h-6">
            <input type="checkbox" id="bill-toggle" checked
                className="absolute block w-8 h-8 rounded-full appearance-none cursor-pointer bg-blue-500"/>
            <label for="bill-toggle"
                className="block overflow-hidden h-6 rounded-full bg-gray-600 cursor-pointer"></label>
        </div>
        <div className="text-gray-400">Billed annually</div>
    </div> */}

    <div className="max-w-screen-md mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className={pricing.cards}>
        <div className="plan starter bg-gray-800 p-8 rounded-lg flex flex-col items-center transition duration-300 transform hover:shadow-blue-500 max-w-xl">
            <h2 className="text-2xl font-semibold text-center mb-4 text-white">Starter</h2>
            <div className="text-white text-5xl font-bold mb-6">$19</div>
            <ul className="text-left mb-6">
                <li className="text-white">500MAUs</li>
                <li className="text-white">3 projects</li>
                <li className="text-white">Unlimited guides</li>
                <li className="text-white">Unlimited flows</li>
                <li className="text-white">Unlimited branded themes</li>
                <li className="text-white">Email support</li>
            </ul>
            <button className="choose-btn bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
                Choose Plan
            </button>
        </div>
        </div>
        <div className={pricing.cards}>

        <div className="plan pro bg-gray-800 p-8 rounded-lg flex flex-col items-center transition duration-300 transform hover:shadow-blue-500 max-w-xl">
            <h2 className="text-2xl font-semibold text-center mb-4 text-white">Pro</h2>
            <div className="text-white text-5xl font-bold mb-6">$99 <sub className="text-base">/ month</sub></div>
            <div className="maus-options mb-6">
                {/* <select className="bg-gray-700 text-white w-full py-2 px-4 rounded-lg mb-2"> */}
                    {/* <option value="">2500 MAUs</option> */}
                    {/* <option value="">5000 MAUs</option> */}
                    {/* <option value="">10000 MAUs</option> */}
                {/* </select> */}
                <span className="text-blue-500">Monthly active users</span>
            </div>
            <ul className="text-left mb-6">
                <li className="text-white">All starter features, plus:</li>
                <li className="text-white">Unlimited projects</li>
                <li className="text-white">Unlimited fully customizable themes</li>
                <li className="text-white">A dedicated customer success manager</li>
            </ul>
            <button className="choose-btn bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
                Choose Plan
            </button>
        </div>
        </div>
        <div className={pricing.cards}>
        <div className="plan enterprise bg-gray-800 p-8 rounded-lg flex flex-col items-center transition duration-300 transform hover:shadow-blue-500 max-w-xl">
            <h2 className="text-2xl font-semibold text-center mb-4 text-white">Enterprise</h2>
            <div className="text-white text-5xl font-bold mb-6">Let's talk!</div>
            <ul className="text-left mb-6">
                <li className="text-white">All Pro features</li>
                <li className="text-white">Unlimited MAUs</li>
                <li className="text-white">Dedicated environment</li>
                <li className="text-white">Premium support and services</li>
            </ul>
            <button className="choose-btn bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
                Contact Us  
            </button>
        </div>
        </div>

    </div></>
  )
}

export default Pricing