export default function VideoBlub({ items, title }) {
  return (
    <div className="">
      <div className="font-bold m-2">{title}</div>
      <div className="grid grid-cols-6 gap-4">
        {items &&
          items.map((item) => {
            return (
              <div className="p-2 shadow-lg hover:bg-gray-300 cursor-pointer">
                <video controls>
                  <source src={item.url} />
                </video>
                <div className="font-bold">{item.title}</div>
                <div>manjunath k</div>
                <div>***** (4.5) 199</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
