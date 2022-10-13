import BuildSection from "../components/BuildSection";
import HomeHero from "../components/HomeHero";
import RecruitmentTime from "../components/RecruitmentTime";
import Why from "../components/Why";
import WorksSection from "../components/WorksSection";

const Home = () => {
    return (
        <> 
           <HomeHero/>
           <RecruitmentTime/>
           <Why/>
           <BuildSection/>
           <WorksSection/>
        </>
    );
};

export default Home;