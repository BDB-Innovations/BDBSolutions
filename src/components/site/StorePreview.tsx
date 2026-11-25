import { Camera, Headphones, ShoppingBag, Watch } from "lucide-react";

const products = [
  { name: "Audífonos", price: "$39", icon: Headphones, color: "bg-blue-100 text-blue-800" },
  { name: "Reloj", price: "$59", icon: Watch, color: "bg-cyan-100 text-cyan-900" },
  { name: "Cámara", price: "$89", icon: Camera, color: "bg-indigo-100 text-indigo-800" },
];

export default function StorePreview() {
  return (
    <div
      role="img"
      aria-label="Demo conceptual de una tienda en línea con catálogo de productos, precios y carrito"
      className="rounded-2xl border border-slate-200 bg-white text-slate-900 shadow-lg"
    >
      <div aria-hidden="true">
        <div className="flex items-center justify-between gap-2 border-b border-slate-200 px-3 py-2.5 sm:px-4">
          <span className="text-sm font-semibold">Tienda en línea</span>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-800">
            <ShoppingBag size={13} /> Carrito
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 p-3 sm:p-4">
          {products.map(({ name, price, icon: Icon, color }) => (
            <div key={name} className="min-w-0 rounded-lg border border-slate-200 p-1.5">
              <div className={`grid h-12 place-items-center rounded-md sm:h-16 ${color}`}>
                <Icon size={26} strokeWidth={1.5} />
              </div>
              <div className="mt-1.5 text-[11px] font-semibold">{name}</div>
              <div className="text-xs text-slate-600">{price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
