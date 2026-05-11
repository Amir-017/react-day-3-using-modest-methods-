import { Outlet, NavLink, useLocation } from "react-router-dom";

export default function MainLayout() {
  const { state } = useLocation();
  // console.log(state.name)
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
        <h1 className="font-bold text-xl">My Shop</h1>

        <div className="flex gap-4">
          <NavLink to="/" className="hover:text-yellow-400" end>
            Home
          </NavLink>
          <NavLink to="/cart" className="hover:text-yellow-400">
            Cart
          </NavLink>
          {state?.name ? (
            <div className="flex items-center gap-4">
                <h1  className="hover:text-yellow-400">
            { `(${state?.name})` }
          </h1>
          <NavLink to="/login" className="text-red-400">
            {state?.name && `Logout`}
          </NavLink>
            </div>
         
          ) :    <NavLink to="/login" className="hover:text-yellow-400">
            { "Login"}
          </NavLink> }
          
        </div>
      </nav>

      
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>

      
      <footer className="p-4 text-center bg-gray-900 text-white">
        © 2026 My Shop
      </footer>
    </div>
  );
}
