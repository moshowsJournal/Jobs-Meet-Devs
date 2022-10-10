import BuildSection from "../components/BuildSection";
import HomeHero from "../components/HomeHero";
import RecruitmentTime from "../components/RecruitmentTime";
import WorksSection from "../components/WorksSection";

const Home = () => {
    return (
        <> 
           <HomeHero/>
           <RecruitmentTime/>
           <BuildSection/>
           <WorksSection/>
        </>
    );
};

export default Home;