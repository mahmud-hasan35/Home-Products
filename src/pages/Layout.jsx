import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
         <header>
            <nav>
                <ul className="flex justify-center">
                    <li><Link className="mx-1 p-1 bg-green-400" to="/">Home</Link></li>
                    <li><Link className="mx-1 p-1 bg-green-400" to="/about">About</Link></li>
                    <li><Link className="mx-1 p-1 bg-green-400" to="/contact">contact</Link></li>
                    <li><Link className="mx-1 p-1 bg-green-400" to="/gallery">Gallery</Link></li>
                </ul>
            </nav>
        </header>
        <main className="h-64">
            <h1 className="text-2xl">page Content Below</h1>

            <Outlet/>
        </main>
        <footer className="text-center text-xl ">This is footer</footer>
    </div>
  )
}












     