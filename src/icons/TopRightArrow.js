const TopRightArrow = ({ color }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color} // Use the color prop for stroke
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="round"
    >
      <path d="M7 17l9.2-9.2M17 17V7H7" />
    </svg>
  );

export default TopRightArrow;