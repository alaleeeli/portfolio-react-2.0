import RightArrow from '../../icons/RightArrow';
import { Link } from 'react-router-dom';
import { Button } from "@nextui-org/react";

export default function ProjectCard({ image, title, text, page }) {
  return (
    <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl md:mx-0 mx-auto">

      <img className="h-40 object-cover rounded-lg" src={image} alt="" />

      <div className="p-2">
        <h2 className="font-bold text-lg mb-2 ">{title}</h2>
        <p className="text-sm text-gray-600">{text}</p>
      </div>

      <div className="m-2">
        <Link to={page}>
          <Button className="bg-gray-true-300" size='sm' endContent={RightArrow}>
            Read More
          </Button>
        </Link>
      </div>
    </div>

  );
}