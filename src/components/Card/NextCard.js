import {Card, CardHeader, CardFooter, Image, Button} from "@nextui-org/react";
import { Link } from 'react-router-dom';
import RightArrow from "../../icons/RightArrow";

export default function NextCard({title, subtitle, number, image, page}) {
    
    return (
        <Card >  
            { page ? 
                projectCard(page, subtitle, title, image) : 
                skillCard(image, number, title)
            }
        </Card>
    )
}

function projectCard(page, subtitle, title, image) {
    return (
    <Link to={page} className="group">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">{subtitle}</p>
            <h4 className="text-white font-medium text-large">{title}</h4>
        </CardHeader>
        <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover brightness-50 group-hover:brightness-40"
            src={image} />
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80 group-hover:text-white/50 transition ease-in-out group-">Read More</p>
            <Button isIconOnly className="bg-transparent text-white/80 group-hover:text-white/50 transition ease-in-out group-hover:translate-x-12 ">
                {RightArrow}
            </Button>
        </CardFooter>
    </Link> );
}

function skillCard(image, number, title) {
    return (
    <>
        <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover brightness-50"
            src={image} />

        <CardFooter className="absolute z-10 bottom-0 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">{number}</p>
            <h4 className="text-white font-medium text-large">{title}</h4>
        </CardFooter>
    </> )
    ;
}


