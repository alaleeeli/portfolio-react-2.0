export default function LeftColumn({ module, objective, tools }) {
    return (
    <>
        <div className="mb-7 font-custom">
            <p className="text-2xl font-semibold"> Module </p>
            <p> {module} </p>
        </div>
        <div className="mb-7 font-custom">
            <p className="text-2xl font-semibold"> Objective </p>
            <p> {objective} </p>
        </div>
        <div className="mb-7 font-custom">
            <p className="text-2xl font-semibold"> Tools & Technologies </p>
            <p> {tools} </p>
        </div>
    </>
    );
}
