import React, { useEffect, useState } from "react";
import HomeLoader from "./HomeLoader/HomeLoader";
import Layout from "./Layout";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {isLoading ? (
        <HomeLoader />
      ) : (
        <Layout>
          <section>Home</section>
        </Layout>
      )}
    </>
  );
};

export default Home;

