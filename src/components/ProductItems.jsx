import { getImage } from '../utils/getImage'


function ProductItems({Products}) {
    
  return (
    <div className="col-span-4 shadow border rounded overflow-hidden">
        <img src={getImage(`../assets/images/${Products.image}`)} alt="image" />
        <div className="p-3">
        <h4 className="text-2xl">{Products.title}</h4>
        <p className="text-slate-400">{Products.category}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-xl font-semibold">{Products.price}</span>
          <span className="text-yellow-300 font-semibold">{Products.ratting}</span>
        </div>
        </div>
        <a href="#" className="block bg-green-600 text-white text-center text-xl font-semibold p-2">Read More</a>
      </div>
  )
}

export default ProductItems