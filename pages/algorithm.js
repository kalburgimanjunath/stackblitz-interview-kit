import Card from '../components/Card';

export default function Algorithm() {
  const alogos = [
    {
      id: 1,
      title: 'Levenshtein Distance',
      type: 'medium',
      description:
        'Given 2 strings, find the minimum number of operations required to change one string to the other. An operation is defined as either replacement of a',
    },
    {
      id: 2,
      title: 'Minimum Number Of Coins To Make Change',
      type: 'easy',
      description:
        'Given an array of coins or denominations and a target sum, calculate the minimum number of coins required to match the total. Note that the coins arra',
    },
    {
      id: 3,
      title: 'Number of Ways To Make Change',
      type: 'hard',
      description:
        'Given a target amount and a set of denominations (coins), find the total number of ways the given target amount can be expressed by using the denomina',
    },
  ];
  return (
    <div className="container bg-gray-200 p-5">
      <div className="font-bold p-2">Algorithm Problems</div>
      <div className="bg-white-100 flex grid grid-cols-3 grid-cols-xs-2 divide-y divide-gray-200">
        {alogos &&
          alogos.map((item) => {
            return <Card item={item} />;
          })}
      </div>
      <div className="bg-white-100 flex grid grid-cols-3 grid-cols-xs-2 divide-y divide-gray-200">
        {alogos &&
          alogos.map((item) => {
            return <Card item={item} />;
          })}
      </div>
      <div className="bg-white-100 flex grid grid-cols-3 grid-cols-xs-2 divide-y divide-gray-200">
        {alogos &&
          alogos.map((item) => {
            return <Card item={item} />;
          })}
      </div>
    </div>
  );
}
