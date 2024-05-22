import { Container } from "@mui/material";
import { HeroSection } from "./components/HeroSection";
import { LearningTips } from "./components/learningTips";
import { Community } from "./components/community";
import { BestEssays } from "./components/bestEssays";
// import { Essays } from "./essays";

export function HomePage(){
    return (
      <div className="home-page">
        <HeroSection/>
        <LearningTips/>
        <Community/>
        <BestEssays/>
      </div>
    )
    
  }