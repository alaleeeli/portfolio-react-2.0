import { Link } from 'react-router-dom';

export default function Logo({className}) {
  return (
    <Link to="/" className={`flex items-center group ${className}`} >
      <svg className="h-12 mr-3 " xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 212 270" >
        <path fill="#E5E5E5"  stroke="none" className='group-hover:fill-gray-true-300'
          d="
          M155.735748,57.220032 
          C182.800400,76.696877 183.938690,117.758072 152.794998,137.942596 
          C158.302780,147.554749 163.820602,157.196014 169.349808,166.830719 
          C174.791489,176.312897 180.244705,185.788452 186.101761,195.978302 
          C139.960953,195.978302 94.630875,195.978302 48.978264,195.978302 
          C48.978264,146.941147 48.978264,97.886772 48.978264,48.416332 
          C50.453327,48.331371 51.902576,48.175995 53.351917,48.175121 
          C77.508095,48.160542 101.664284,48.157230 125.820457,48.169441 
          C136.567093,48.174877 146.596695,50.622231 155.735748,57.220032 
        z"/>
      </svg>
      <span className="self-center text-xl font-semibold font-custom text-gray-true-100 group-hover:text-gray-true-300">Rashed Alaleeli</span>
    </Link>
  );
}
