import { Link, Outlet, useLocation } from "react-router-dom";
import { PlayCircle, Video, QrCode, ShoppingBag } from "lucide-react";

export default function SidebarLayout() {
  const location = useLocation();
  const navItems = [
    { name: "Quiz", path: "/", icon: PlayCircle },
    { name: "Learn", path: "/learn", icon: Video },
    { name: "Product Info", path: "/product-info", icon: ShoppingBag },
    { name: "QR Guide", path: "/qr", icon: QrCode },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Improved Sidebar */}
      <aside className="w-72 bg-gradient-to-b from-blue-600 to-blue-800 text-white p-6 flex flex-col shadow-2xl">
        {/* Better Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 tracking-tight">OneTouch</h1>
          <p className="text-blue-200 text-sm">Lifescience</p>
        </div>
        
        {/* Improved Navigation */}
        <nav className="flex flex-col gap-2 flex-1">
          {navItems.map(({ name, path, icon: Icon }) => (
            <Link
              key={name}
              to={path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                location.pathname === path
                  ? "bg-white text-blue-700 shadow-lg transform scale-105"
                  : "hover:bg-blue-700 hover:translate-x-1"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{name}</span>
            </Link>
          ))}
        </nav>

        {/* Better Footer */}
        <div className="mt-auto pt-6 border-t border-blue-500">
          <p className="text-xs text-blue-200 mb-1">Sponsored by</p>
          <p className="font-semibold text-sm">ABC Pharma</p>
          <p className="text-xs text-blue-200">MetCare Division</p>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}