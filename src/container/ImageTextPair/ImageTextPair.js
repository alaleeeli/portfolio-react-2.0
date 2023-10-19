import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';

export default function ImageTextPair({ title, text, image, reverse }) {
  return (
      <div className='flex items-center justify-center'>
        {reverse ? (
          <>
            <Text title={title} text={text}/>
            <Image image={image}/>
          </>
        ) : (
          <>
            <Image image={image}/>
            <Text title={title} text={text}/>
          </>
        )}
      </div>
    );
  }
  

function Image({image}) {
  return (
    <div className="w-1/2">
      < img src={image} alt="side" className="w-4/5" />
    </div>
  )
}
function Text({title, text}) {
  return (
  <div className="w-1/2 text-center px-4">
    <p className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl font-semibold font-sans">
      {title}
    </p>
    <p className="text-md sm:text-xl md:text-xl lg:text-xl xl:text-xl font-medium text-gray-true-500 ">
      {text}
    </p>

  </div>
  )
}

