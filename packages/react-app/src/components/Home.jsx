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
      <section className="home">
        <div className="all">
          <div className="homeCon">
            <h1>Let Get Started</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, velit!</p>
          </div>
          <div className="btnCon">
            <button className="btnBlue">Submit here</button>
            <button className="btnWhite">Go Catch</button>
          </div>
        </div>
       
      </section>
    ) }
  </>
 )
};

export default Home;

