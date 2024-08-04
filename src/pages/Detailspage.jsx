import { useLoaderData } from "react-router-dom";

const Detailspage = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <>
      <h1>This is Detailspage!</h1>
    </>
  );
};

export default Detailspage;
