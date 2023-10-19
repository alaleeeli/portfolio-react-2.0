import Download from "../../icons/Download";
import { Button } from "@nextui-org/react";

export default function DownloadButton({ title, path }) {
  return (
    <div className="flex justify-center mt-5 mb-5">
      <a href={path} download>
        <Button className="bg-gray-true-300" endContent={Download} variant='shadow'>
          {title}
        </Button>
      </a>
    </div>
  );
}
