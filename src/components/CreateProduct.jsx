import { useState } from "react"
import useInput from "../hooks/useInput";

export default function CreateProduct() {

    const titleProps = useInput("l")
    const otherProps = useInput("")


    const [title, setTitle] = useState()
    
    const handleChange = (e) => {
        setTitle(e.target.value)
    };
    return (
        <div className='col-span-9 bg-white p-3'>
            <h2 className='text-3xl font-bold mb-5 '>Creact Products</h2>

            <div className="mb-5">
                <label
                    htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Your title</label>
                <input
                value={title}
                onChange={handleChange}
                    type="text"
                    id="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required />
            </div>

            <div className="mb-5">
                <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"

                >
                    Select an option
                </label>
                <select
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >

                    <option >Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                </select>
            </div>
            <div className="mb-5">

                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

            </div>

            <div className="mb-5">
                <label
                    htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Your image</label>
                <input
                    type="text"
                    id="image"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required />
            </div>
            <div className="mb-5">
                <label
                    htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Your price</label>
                <input
                    type="number"
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required />
            </div>
            <div className="mb-5">
                <label
                    htmlFor="ratting" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Your ratting</label>
                <input
                    type="number"
                    min="0"
                    max="5"
                    id="ratting"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required />
            </div>
            <div className="mb-5">

                <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-100 bg-blue-600 focus:outline-none rounded-lg border border-gray-200 hover:bg-blue-300 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Save Post</button>
            </div>


        </div>
    )
}
