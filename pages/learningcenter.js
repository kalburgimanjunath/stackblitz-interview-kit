import VideoBlub from '../components/VideoBlub';

export default function LearningCenter() {
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
      <h1>----- make a look around the Learning Center</h1>
      <p>
        We believe that you can shine best when the stress of the unknown is
        removed from the equation. Here you will find materials that can prepare
        you better for recruitment processes.
      </p>
      <p>Don’t forget to check regularly for updates and new content!</p>
      <VideoBlub
        items={videos}
        title="First steps into recruitment process"
        subtitle="Are you about to jump into your first round of job interviews? Find out what our experts share below."
      />
      <VideoBlub
        items={videos}
        title="Useful at any stage of job search"
        subtitle="Looking for a new job? Take a look at the materials below and get ready for the next recruitment process."
      />
      <VideoBlub
        items={videos}
        title="Case interview tips & tricks"
        subtitle="Getting ready for a case interview? Find out how to deliver the best presentation!"
      />
    </div>
  );
}
