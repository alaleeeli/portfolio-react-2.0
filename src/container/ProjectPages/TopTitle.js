import Calender from "../../icons/Calender";
import Tag from "../../icons/Tag";

export default function TopTitle({ title, date, category }) {
    return (
        <div className="px-4 font-custom">
            <p className="text-left text-3xl font-bold mt-10 mb-5">
                {title}
            </p>
            <div className="flex">
                <div className="flex items-center mr-10">
                    {Calender}
                    <span className="ml-2 leading-none">{date}</span>
                </div>
                <div className="flex items-center">
                    {Tag}
                    <span className="ml-2 leading-none">{category}</span>
                </div>
            </div>
        </div>
    );
}
