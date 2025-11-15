import QRCode from "react-qr-code";

export default function QRPage() {
  const qrUrl = "https://onetouch.in/products/verio-flex"; // Example link
  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl font-bold mb-4">Scan to Learn More</h2>
      <QRCode value={qrUrl} size={200} />
      <p className="mt-2 text-gray-600 text-sm">
        Scan this code to learn how to use your OneTouch Verio Flex Meter.
      </p>
    </div>
  );
}
