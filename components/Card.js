import Link from 'next/link';
export default function Card({ item }) {
  return (
    <Link href="/myeditor">
      <div className="bg-white py-4 p-5 m-5 rounded hover:bg-gray-100 ">
        <div className="flex w-full flex-row justify-between">
          {item.type == 'medium' ? (
            <div className="rounded-sm bg-gradient-to-r from-yellow-700 to-yellow-500 text-white px-2 py-0.5 text-sm mb-2">
              Medium
            </div>
          ) : null}
          {item.type == 'easy' ? (
            <div className="rounded-sm bg-gradient-to-r from-green-700 to-green-500 text-white px-2 py-0.5 text-sm mb-2">
              Easy
            </div>
          ) : null}
          {item.type == 'hard' ? (
            <div className="rounded-sm bg-gradient-to-r from-red-700 to-red-500 text-white px-2 py-0.5 text-sm mb-2">
              Hard
            </div>
          ) : null}

          <div className="flex flex-row items-center space-x-2 text-xs text-[#06b6d4]">
            30 minutes
          </div>
        </div>
        <div className="text-sm font-medium text-gray-900">{item.title}</div>
        <div className="text-sm text-gray-500">{item.description}</div>
      </div>
    </Link>
  );
}
