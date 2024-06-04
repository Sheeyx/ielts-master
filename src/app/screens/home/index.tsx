import { Container } from "@mui/material";
import { HeroSection } from "./components/HeroSection";
import { LearningTips } from "./components/learningTips";
import { Community } from "./components/community";
import { BestEssays } from "./components/bestEssays";
import { PracticeMaterials } from "./components/materials";
// import { Essays } from "./essays";

export function HomePage(props :any){
    return (
      <div className="home-page">
        <HeroSection setSignupOpen={props.setSignupOpen}/>
        <LearningTips/>
        <Community/>
        <BestEssays/>
        <PracticeMaterials/>
      </div>
    )
    
  }