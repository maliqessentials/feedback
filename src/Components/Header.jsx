import logo from "../images/logo.png";

function Header() {
  return (
    <div className="mx-auto m-auto">
      <img src={logo} width={200} alt="image" className="m-10" />
      <h2 className="text-4xl text-center font-semibold mt-8">Feedback Form</h2>
      <p className="text-center mt-2 text-base">
        Please take a moment to fill out this survey
      </p>
    </div>
  );
}

export default Header;
