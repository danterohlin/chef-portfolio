import React from 'react'
import { Link } from 'react-router-dom'

export default function Thanks() {
    return (
        <div className="min-h-full bg-gray-100 h-screen flex justify-center">
            <section className="mt-64 text-center">
            <h2 className="">Email successfully sent!</h2>
            <Link to="/">
            <button className="bg-yellow-400 h-12 w-32 my-5 text-white poppins tracking-widest border-2 border-yellow-400 hover:bg-gray-50 hover:text-yellow-400 transform transition duration-500" >Go back</button>
            </Link>
            </section>
        </div>
    )
}
