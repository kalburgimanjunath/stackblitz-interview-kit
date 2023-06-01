import Card from '../../components/Card';
import { algorithmproblems } from '../api/algorithmproblems';
export default function Index() {
  return (
    <div className="container bg-gray-200 p-5">
      <div className="flex justify-between m-5">
        <div className="font-bold p-2">Algorithm Problems</div>
        <div className="search">
          <input
            type="text"
            placeholder="Search problem"
            className="px-2 py-2"
          />
        </div>
      </div>
      <div className="bg-white-100 flex grid grid-cols-3 grid-cols-xs-2 divide-y divide-gray-200">
        {algorithmproblems &&
          algorithmproblems.map((item) => {
            return <Card item={item} type="algorithm" />;
          })}
      </div>
      <div className="bg-white-100 flex grid grid-cols-3 grid-cols-xs-2 divide-y divide-gray-200">
        {algorithmproblems &&
          algorithmproblems.map((item) => {
            return <Card item={item} type="algorithm" />;
          })}
      </div>
      <div className="bg-white-100 flex grid grid-cols-3 grid-cols-xs-2 divide-y divide-gray-200">
        {algorithmproblems &&
          algorithmproblems.map((item) => {
            return <Card item={item} type="algorithm" />;
          })}
      </div>
    </div>
  );
}
