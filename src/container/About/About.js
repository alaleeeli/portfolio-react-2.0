import DownloadButton from '../../components/Button';
import ProfileCard from '../../components/Card/ProfileCard';

export default function About() {
  return (
    <div className="px-2 w-full flex flex-col md:flex-row justify-center items-center">
      <div className="md:w-1/2 flex justify-center mb-5">
        <ProfileCard />
      </div>
      <div className="w-full md:w-1/2 ml-6 mr-2">
        <div className='flex flex-col items-center'>
          <span className="text-3xl font-semibold text-gray-700">My Background</span>
          <p className="mt-5 text-gray-600 text-[20px] leading-relaxed px-2 text-center md:text-left">
            A graduate student from the University of Nottingham, pursued a bachelor's in Computer Science with Artificial intelligence.
            During my academic journey, I had the chance to experience different areas of computer science, and found myself more into
            web development, machine learning, and data analysis.
          </p>
          <DownloadButton path="public/assets/PDFs/Rashed Alaleeli Resume.pdf" title="Download CV" />
        </div>
      </div>
    </div>
  );
}
