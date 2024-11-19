import { Link } from "react-router-dom";

function Sidebar({categories}) {
  console.log(categories);
  

    
    
  return (
    <div className='col-span-3 bg-white p-3' >
        <h2 className='text-2xl mb-5 font-bold'>Product Categories</h2>
        <ul className="sticky top-3">
            {categories.map(category => (
          <li key={category.id}>
            <a className="block p-2 bg-green-200 hover:bg-green-600 hover:text-white rounded mb-2 uppercase" href="#">{category.title}</a>
          </li>

            ))}
        </ul>
        <div className="mt-12 ">
          <Link to = 'create' className="bg-indigo-800 text-white rounded p-2 mx-6">Create Products</Link>
          <Link to = '/' className="bg-violet-900 text-white rounded p-2 px-4">Home</Link>
        </div>
      </div>
  )
}

export default Sidebar