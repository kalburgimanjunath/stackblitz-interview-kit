export default function Blog() {
  const blogs = [
    {
      date: '9th Oct 2022',
      title: 'Junior front end developer interview questions',
      description: `There are a lot of junior developer jobs out there. But what exactly do these positions entail? And what kind of questions should you expect if you're...`,
      tags: ['React', 'Javascript'],
    },
    {
      date: '10th Oct 2022',
      title: 'Junior front end developer interview questions',
      description: `There are a lot of junior developer jobs out there. But what exactly do these positions entail? And what kind of questions should you expect if you're...`,
      tags: ['React', 'Javascript'],
    },
    {
      date: '12th Oct 2022',
      title: 'Junior front end developer interview questions',
      description: `There are a lot of junior developer jobs out there. But what exactly do these positions entail? And what kind of questions should you expect if you're...`,
      tags: ['React', 'Javascript'],
    },
  ];
  const BlogCard = ({ item }) => {
    return (
      <div className="rounded bg-pink-100 m-2 p-5">
        <div className="font-bold">{item.title}</div>
        <div className="">{item.date}</div>
      </div>
    );
  };
  return (
    <div className="container bg-gray-200 p-24">
      <div className="text-center">
        <h3 className="font-bold">Blogs</h3>
        <p>
          Blogs Get the latest resources, news and article on Technical
          Interview Preparation. Level up your development career and ace your
          next technical interview round!
        </p>
      </div>
      <div className="grid grid-cols-3 mt-10">
        {blogs.map((item) => {
          return <BlogCard item={item} />;
        })}
      </div>
    </div>
  );
}
