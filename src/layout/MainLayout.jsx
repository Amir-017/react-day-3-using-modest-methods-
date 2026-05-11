import { Outlet, NavLink } from "react-router-dom";

export default function MainLayout() {
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
           <NavLink to="/login" className="hover:text-yellow-400">
            Login
          </NavLink>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="p-4 text-center bg-gray-900 text-white">
        © 2026 My Shop
      </footer>

    </div>
  );
}