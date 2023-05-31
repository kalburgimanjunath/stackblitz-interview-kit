export default function Card({ item }) {
  return (
    <div className="bg-white py-4 p-5 m-5 rounded hover:bg-gray-100 ">
      <div className="flex w-full flex-row justify-between">
        <div className="rounded-sm bg-gradient-to-r from-yellow-700 to-yellow-500 text-white px-2 py-0.5 text-sm mb-2">
          Medium
        </div>
        <div className="flex flex-row items-center space-x-2 text-xs text-[#06b6d4]">
          30 minutes
        </div>
      </div>
      <div className="text-sm font-medium text-gray-900">{item.title}</div>
      <div className="text-sm text-gray-500">{item.description}</div>
    </div>
  );
}
