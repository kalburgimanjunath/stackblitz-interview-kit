export default function Createtutorial() {
  const sidelinks = [
    { title: 'Create New', link: '#create', current: false },
    { title: 'Draft', link: '#draft', current: false },
    { title: 'Audio', link: '#draft', current: false },
  ];
  const Sidebar = () => {
    return sidelinks.map((item) => {
      return (
        <div>
          <a href={item.link}>{item.title}</a>
        </div>
      );
    });
  };

  return (
    <div className="m-4">
      <h3 className="font-bold text-medium">Create Tutorial</h3>
      <div className="flex m-2 grid grid-cols-4 gap-4">
        <div className="m-2 p-2 border-2 border-color-pink">
          <Sidebar />
        </div>
        <div>
          <div id="create" className="flex w-full">
            <div>
              <div>
                <div>Title</div>
                <div>
                  <input type="text" name="title" />
                </div>
              </div>
              <div>
                <div>Transcription</div>
                <div>
                  <textarea rows="10" cols="30" name="transcription" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>Preview</div>
          <div className="border-2 w-full border-color-black-600 h-50">
            <video width="320" height="240" controls>
              <source
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
