import { Videos } from 'mynewslds-library';
export default function Tutorials() {
  const videos = [
    {
      title: 'title1',
      url: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/examples/captions-example.mp4',
    },
    {
      title: 'title1',
      url: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/examples/captions-example.mp4',
    },
  ];
  return (
    <div>
      <Videos items={videos} />
    </div>
  );
}
