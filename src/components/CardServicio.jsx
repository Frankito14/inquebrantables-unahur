export default function CardServicio(props) {
  return (
    <div class="bg-white w-72 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <div class="p-8">
        <h2 class="text-xl font-semibold text-gray-500 mb-4">{props.dia}</h2>
        <p class="text-xl font-bold text-gray-500 mb-6">{props.titulo}</p>
        <p class="text-gray-500 mb-6 h-16">{props.descripcion}</p>
      </div>
      <div class="p-4">
        <button class="w-full bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
          Select Plan
        </button>
      </div>
    </div>
  );
}
