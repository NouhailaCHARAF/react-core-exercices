import { useState } from "react";

export default function ColorChanger() {
  const [color, setColor] = useState("text-gray-600");
  const [selectedColor,setSelectedColor]=useState("Gray");


  const colors = [
    { name: "Red", class: "text-red-600", bg: "bg-red-500" },
    { name: "Yellow", class: "text-yellow-600", bg: "bg-yellow-500" },
    { name: "Blue", class: "text-blue-600", bg: "bg-blue-500" },
    { name: "Violet", class: "text-violet-600", bg: "bg-violet-500" }
  ];

  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
        <h2 className="text-xl font-bold text-center mb-4">
        Color Changer
        </h2>
      <div className="flex justify-center gap-3 mb-4">
        {colors.map((item) => (
          <button
            key={item.name}
            onClick={() => {setColor(item.class);setSelectedColor(item.name)}}
            className={`px-4 py-2 text-white rounded ${item.bg}`}
          >
            {item.name}
          </button>
        ))}
      </div>

      <p className={`text-center font-semibold ${color}`}>
        Selected Color: {selectedColor}
      </p>
    </div>
  );
}