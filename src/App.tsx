import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/SidebarLayout";
import QuizPage from "./pages/QuizPage";
import Learn from "./pages/Learn";
import ProductInfo from "./pages/ProductInfo";
import QRCodePage from "./pages/QRCodePage";

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<QuizPage />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/product-info" element={<ProductInfo />} />
          <Route path="/qr-code" element={<QRCodePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
