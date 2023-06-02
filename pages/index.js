import Header from '../components/Header';
import BackgroundSlideshow from 'react-background-slideshow';

import image1 from 'https://picsum.photos/200/300';
import image2 from 'https://picsum.photos/200/300';
import image3 from 'https://picsum.photos/200/300';
export default function Home() {
  return (
    <div className="container mx-auto bg-gray-100">
      <BackgroundSlideshow images={[image1, image2, image3]} />
    </div>
  );
}
