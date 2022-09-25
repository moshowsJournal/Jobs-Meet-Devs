import BuildSection from "../components/BuildSection";
import HomeHero from "../components/HomeHero";
import Partner from "../components/Partner";
import WorksSection from "../components/WorksSection";

const Home = () => {
    return (
        <> 
           <HomeHero/>
           <Partner/>
           <BuildSection/>
           <WorksSection/>
        </>
    );
};

export default Home;