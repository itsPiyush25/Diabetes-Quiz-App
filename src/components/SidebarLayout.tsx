import { Link, Outlet, useLocation } from "react-router-dom";
import { PlayCircle, Video, QrCode, ShoppingBag } from "lucide-react";

export default function SidebarLayout() {
  const location = useLocation();
  const navItems = [
    { name: "Quiz", path: "/", icon: PlayCircle },
    { name: "Learn", path: "/learn", icon: Video },
    { name: "Product Info", path: "/product", icon: ShoppingBag },
    { name: "QR Guide", path: "/qr", icon: QrCode },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 bg-blue-700 text-white p-6 flex flex-col">
        <h1 className="text-2xl font-bold mb-6">OneTouch Lifescience</h1>
        <nav className="flex flex-col gap-3">
          {navItems.map(({ name, path, icon: Icon }) => (
            <Link
              key={name}
              to={path}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                location.pathname === path
                  ? "bg-blue-500"
                  : "hover:bg-blue-600"
              }`}
            >
              <Icon className="w-5 h-5" />
              {name}
            </Link>
          ))}
        </nav>
        <div className="mt-auto text-sm opacity-75">
          Sponsored by <br />
          <span className="font-semibold">ABC Pharma – MetCare Division</span>
        </div>
      </aside>

      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
