import { Videos, Button } from 'mynewslds-library';
export default function Tutorials() {
  const videos = [
    {
      title: 'abc',
      url: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/examples/captions-example.mp4',
    },
    {
      title: 'title1',
      url: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/examples/captions-example.mp4',
    },
    {
      title: 'title1',
      url: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/examples/captions-example.mp4',
    },
    {
      title: 'title1',
      url: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/examples/captions-example.mp4',
    },
    {
      title: 'title1',
      url: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/examples/captions-example.mp4',
    },
    {
      title: 'title1',
      url: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/examples/captions-example.mp4',
    },
    {
      title: 'title1',
      url: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/examples/captions-example.mp4',
    },
    {
      title: 'title1',
      url: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/examples/captions-example.mp4',
    },
    {
      title: 'title1',
      url: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/examples/captions-example.mp4',
    },
    {
      title: 'title1',
      url: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/examples/captions-example.mp4',
    },
    {
      title: 'title1',
      url: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/examples/captions-example.mp4',
    },
    {
      title: 'title1',
      url: 'https://shotstack-assets.s3-ap-southeast-2.amazonaws.com/examples/captions-example.mp4',
    },
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
      <div className="m-2">
        <Button
          label="Create Tutorial"
          href="/createtutorial"
          className="bg-green-600 border-2 border-zinc-800 p-2"
          primary
        ></Button>
      </div>
      <Videos items={videos} />
    </div>
  );
}
