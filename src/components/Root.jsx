import { Outlet, useLoaderData } from "react-router-dom"
import Sidebar from "./Sidebar"
import { categoryLoader } from "../loader/blogLoader"


export default function Root() {
    
    const categories = useLoaderData();

    // const categories =  [
    //     {
    //         "id": "1",
    //         "title":"bed"
    //     },
    //     {
    //         "id": "2",
    //         "title":"light"
    //     },
    //     {
    //         "id": "3",
    //         "title":"wall clock"
    //     },
    //     {
    //         "id": "4",
    //         "title":"mirror"
    //     },
    //     {
    //         "id": "5",
    //         "title":"dining table"
    //     }
    // ]

  return (
    <div className=" max-w-screen-2xl mx-auto my-3 p-6 bg-slate-100 grid grid-cols-12 gap-4">
        <Sidebar categories={categories} />
        <Outlet/>
      </div>
  )
}
