export default function Createtutorial() {
  const sidelinks = [
    { title: 'Create New', link: '#create', current: false },
    { title: 'Create New', link: '#create', current: false },
  ];

  return (
    <div className="m-4">
      <h3 className="font-bold text-medium">Create Tutorial</h3>
      <div className="flex m-2">
        <div className="">Sidebar</div>
        <div>content</div>
      </div>
    </div>
  );
}
