import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import "./styles.scss"
import EssayService from '../../../services/EssayService';

function WritingSection() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState<any>();
  const essay = new EssayService();

  const handleQuestionChange = (event:any) => {
    setQuestion(event.target.value);
  };

  const handleAnswerChange = (event:any) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (event:any) => {
    event.preventDefault(); 
    essay
      .checkEssay({ question: question, essayText: answer})
      .then((data) => setFeedback(data.feedback))
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  console.log(feedback);
  
  return (
    <div className='writing'>
        <div className='essay-input'>
            <Container maxWidth="xl" sx={{display:"flex", alignItems: "center"}}>
                <h2 className='heading'>
                    IELTS WRITING ESSAY
                </h2>
            </Container>
        </div>
        <Container maxWidth="xl">
        <div className="essay-form">
            <h3>Essay Question</h3>
            <textarea 
                className='question' 
                id="question" 
                name="question" 
                value={question} 
                onChange={handleQuestionChange} 
                placeholder='Write your essay question here...'
            />
            <h3>Your Answer</h3>
            <textarea 
                className='answer' 
                id="answer" 
                name="answer" 
                value={answer} 
                onChange={handleAnswerChange}
                placeholder='Write your essay answer here...' 
                />
            <button className='btn' type="submit" onClick={handleSubmit}>Submit</button>
        </div>
        {feedback && (
        <div className='feedback'>
            
            <h3 className='heading'>Feedback Section</h3>
              <div className='card'>
                <div className='box'>
                    <h3>Overall Score:</h3>
                    <p>{feedback.OverallScore}</p>
                </div>
                <div className='box'>
                    <h3>Grammar Assessment:</h3>
                    <p>{feedback.GrammarAssessment}</p>
                </div>
                <div className='box'>
                    <h3>Vocabulary Usage:</h3>
                    <p>{feedback.VocabularyUsage}</p>
                </div>
                <div className='box'>
                    <h3>Coherenceand Cohesion Evaluation:</h3>
                    <p>{feedback.CoherenceandCohesionEvaluation}</p>
                </div>
                <div className='box'>
                    <h3>Task Achievement Feedback:</h3>
                    <p>{feedback.TaskAchievementFeedback}</p>
                </div>
                <div className='box'>
                    <h3>General Comment:</h3>
                    <p>{feedback.GeneralComment}</p>
                </div>
              </div>
        </div>
            )}

        </Container>
    </div>
  )
}

export default WritingSection
