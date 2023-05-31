import Link from 'next/link';
export default function Companies() {
  const companies = [
    'facebook',
    'honeywell',
    'naukri',
    'infosys',
    'TCS',
    'birla soft',
    'ABB',
    'Tatamotors',
    'Oracle',
    'Puresoftware',
    'Quess',
    'Bcforward',
  ];
  const Companies = ({ item }) => {
    return (
      <Link href="../companybase">
        <div className="bg-pink-200 text-black-100 p-2 m-2 align-center text-center w-full hover:bg-gray-100 rounded-md shadow-md">
          {item}
        </div>
      </Link>
    );
  };
  return (
    <div className="container bg-blue-200 p-5">
      <div className="font-bold">Companies</div>
      <div className="p-2 m-1 gap gap-1 grid grid-cols-3 md:grid-cols-2 xs:grid-cols-1">
        {companies.map((item) => {
          return <Companies item={item} />;
        })}
      </div>
    </div>
  );
}
