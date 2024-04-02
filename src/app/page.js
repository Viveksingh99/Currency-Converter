import CurrencyConverter from "@/components/CurrencyConverter";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
    <div className="container">
      <CurrencyConverter />
    </div>
  </div>
  );
}
