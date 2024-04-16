import React, { useEffect, useState } from "react";
import HomeLoader from "./HomeLoader/HomeLoader";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);


 return(
  <>
    {isLoading ? <HomeLoader/> : (
      <section>
        Home
      </section>
    ) }
  </>
 )
};

export default Home;

