import Card from '../components/Card';

export default function Algorithm() {
  const alogos = [
    {
      id: 1,
      title: 'Levenshtein Distance',
      problemDifficulty: 'medium',
      problemStatement:
        'Given 2 strings, find the minimum number of operations required to change one string to the other. An operation is defined as either replacement of a',
      solution: 'solution',
      date: 'date',
      sampleCode: 'sample code',
      tags: ['algo'],
      language: '',
      likeCounter: '',
      companies: ['honeywell', 'ABB'],
      slug: ['algo'],
    },
    {
      id: 1,
      title: 'Levenshtein Distance',
      problemDifficulty: 'medium',
      problemStatement:
        'Given 2 strings, find the minimum number of operations required to change one string to the other. An operation is defined as either replacement of a',
      solution: 'solution',
      date: 'date',
      sampleCode: 'sample code',
      tags: ['algo'],
      language: '',
      likeCounter: '',
      companies: ['honeywell', 'ABB'],
      slug: ['algo'],
    },
    {
      id: 1,
      title: 'Levenshtein Distance',
      problemDifficulty: 'medium',
      problemStatement:
        'Given 2 strings, find the minimum number of operations required to change one string to the other. An operation is defined as either replacement of a',
      solution: 'solution',
      date: 'date',
      sampleCode: 'sample code',
      tags: ['algo'],
      language: '',
      likeCounter: '',
      companies: ['honeywell', 'ABB'],
      slug: ['algo'],
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
