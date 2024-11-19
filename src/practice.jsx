
function Practice({isOpen, isClose}) {
   
  return (
    <div>
      {isOpen && <h1 className="w-64 h-36 bg-black rounded-full">
         
         
          <button onClick={() => isClose()} className="bg-lime-500 text-white p-2">Close</button></h1> }
    </div>
  )
}

export default Practice