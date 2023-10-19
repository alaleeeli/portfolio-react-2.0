import ResearchModal from "./ResearchModal";
import DownloadButton from "../../components/Button/Button";

export default function RightColumn({ modalTitle, modalBody, path, children }) {
    return (
        <div className="w-full md:w-2/3 text-left px-4 font-custom">
            <p className="text-2xl font-semibold"> About </p>
            <p className=" mb-5 text-lg"> {children} </p>

            <div className="flex gap-2 justify-center"> 
                { (modalTitle && modalBody) ? 
                    <>
                        <ResearchModal modalBody={modalBody} modalTitle={modalTitle} />
                        <DownloadButton title="Download Paper" path={path} /> 
                    </>
                    : '' }

            </div>
        </div>
    );
}


