import { Data } from "../data/data";
import Header from "../Components/Header";
import MainRating from "./MainRating";

const Layout = () => {
  return (
    <div className="mx-auto max-w-2/5 sm:w-4/5 pb-[200px]">
      <Header />
      {Data.map((item) => (
        <MainRating
          key={item.id}
          ratingTitle={item.title}
          assessment1={item.Assessment1}
          assessment2={item.Assessment2}
          assessment3={item.Assessment3}
          assessment4={item.Assessment4}
          assessment5={item.Assessment5}
          assessment6={item.Assessment6}
        />
      ))}
    </div>
  );
};

export default Layout;
