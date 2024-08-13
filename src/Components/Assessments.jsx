import Stars from "./Starss";

// eslint-disable-next-line react/prop-types
function Assessment({ children }) {
  return (
    <div className=" mt-4 pb-1 grid grid-cols-2 pl-px 5 space-x-1">
      <p className="font-semibold text-lg">{children}</p>
      <Stars />
    </div>
  );
}
export default Assessment;


