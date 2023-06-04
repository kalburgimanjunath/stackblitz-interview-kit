// import 'video.js/dist/video-js.min.css';
// import videojs from 'video.js';
// import RecordRTC from 'recordrtc';
// import 'videojs-record/dist/css/videojs.record.css';
// import Record from 'videojs-record/dist/videojs.record.js';
export default function Createtutorial() {
  const sidelinks = [
    { title: 'Create New', link: '#create', current: false },
    { title: 'Create New', link: '#create', current: false },
  ];
  return (
    <div className="m-2 ">
      <h3 className="font-bold text-medium">Create Tutorial</h3>
      <div className="flex m-2">
        <div className="">Sidebar</div>
        <div>
          {/* <video
            id="myVideo"
            playsinline
            class="video-js vjs-default-skin"
          ></video> */}
        </div>
      </div>
    </div>
  );
}
