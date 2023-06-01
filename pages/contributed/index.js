import Card from '../../components/Card';
// import { frontendproblems } from '../api/frontendproblems';
import { useState, useEffect } from 'react';
export default function Index() {
  const [frontendproblems, setFrontendProblems] = useState([]);
  const fetchRecords = () => {
    fetch(
      'https://api.airtable.com/v0/appXy3Z9EQGEQveKp/Questions?api_key=keyeNXyxxuuYJY19w'
    )
      .then((res) => res.json())
      .then((result) => setFrontendProblems(result.records));
  };
  console.log(frontendproblems);
  useEffect(() => {
    fetchRecords();
  }, [frontendproblems]);
  return (
    <div className="container bg-gray-200 p-5">
      <div className="flex justify-between m-5">
        <div className="font-bold p-2">Frontend Problems</div>
        <div className="search">
          <input
            type="text"
            placeholder="Search problem"
            className="px-2 py-2"
          />
        </div>
      </div>
      <div className="bg-white-100 flex grid grid-cols-3 grid-cols-xs-2 divide-y divide-gray-200">
        {frontendproblems &&
          frontendproblems.map((item) => {
            return <Card item={item.fields} type="frontend" itemId={item.id} />;
          })}
      </div>
      <div className="bg-white-100 flex grid grid-cols-3 grid-cols-xs-2 divide-y divide-gray-200">
        {frontendproblems &&
          frontendproblems.map((item) => {
            return <Card item={item.fields} type="frontend" itemId={item.id} />;
          })}
      </div>
      <div className="bg-white-100 flex grid grid-cols-3 grid-cols-xs-2 divide-y divide-gray-200">
        {frontendproblems &&
          frontendproblems.map((item) => {
            return <Card item={item.fields} type="frontend" itemId={item.id} />;
          })}
      </div>
    </div>
  );
}
