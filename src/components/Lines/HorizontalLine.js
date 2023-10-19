export default function HorizontalLine({title, width}) {
  return (
    <div className="inline-flex items-center justify-center w-full">
      <hr className={`w-${width} h-px my-2 bg-gray-true-300 border-0`} />

      {/* If a title exists then it will put it in the middle, otherwise none. */}
      { title ?
        <span className="absolute px-3 font-semibold -translate-x-1/2 bg-gray-true-100 left-1/2">
          {title}
        </span> : ''
      }

    </div>
  );
}
