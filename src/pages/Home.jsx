import Header from "../components/Header";
import HFourthSec from "../components/HFourthSec";
import HomeHero from "../components/HomeHero";
import HThirdSec from "../components/HThirdSec";
import Partner from "../components/Partner";

const Home = () => {
    return (
        <>
           <Header/> 
           <HomeHero/>
           <Partner/>
           <HThirdSec/>
           <HFourthSec/>
        </>
    );
};

export default Home;