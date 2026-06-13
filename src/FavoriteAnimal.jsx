import { useState } from "react";
import { Dog, Cat } from "lucide-react";




export default function FavoriteAnimal() {


  const [animal, setAnimal] = useState("dog");






  const data = {
    dog: {
      image:
        "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500&q=80",
      text: "Dogs are loyal, friendly, and love spending time with humans.",
    },
    cat: {
      image:
        "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=600",
      text: "Cats are independent, playful, and enjoy relaxing in cozy places.",
    },
  };




  return (
    
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg border">
      
      <h2 className="text-2xl font-bold text-center mb-6">
        Choose your favorite animal
      </h2>

      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setAnimal("dog")}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          <Dog size={20} />
          Dog
        </button>

        <button
          onClick={() => setAnimal("cat")}
          className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
        >
          <Cat size={20} />
          Cat
        </button>
      </div>

      <img
        src={data[animal].image}
        alt={animal}
        className="w-full h-64 object-cover rounded-xl mb-4"
      />

      <p className="text-gray-700 text-center">
        {data[animal].text}
      </p>
    </div>
  );
}