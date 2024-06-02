import React, { useState } from 'react';
import Section1 from '../../../assets/photo/section1.png';
import Section2 from '../../../assets/photo/section2.png';
import Section3 from '../../../assets/photo/section3.png';
import Section4 from '../../../assets/photo/section4.png';
import Section from './components/section/section';

function ListeningSection() {
  const [answers, setAnswers] = useState<any>({});
  const [results, setResults] = useState<any>(null);
  const [correctCount, setCorrectCount] = useState(0);

  const answersArray = [
    "Ardleigh", "newspaper", "theme", "tent", "castle",
    "beach/beaches", "2020", "flight", "429", "dinner",
    // Section 2
    "health problems", "safety rules", "plan", "joining", "free entry",
    "peak", "guests", "photo card / photo cards", "C", "presentation",
    // Section 3
    "gene", "roads", "A", "model", "power / powers",
    "fishing", "strangers", "material / materials", "grant", "erosion",
    // Section 4
    "gene", "power", "strangers", "erosion", "method / methods",
    "roads","fishing","reproduction","methods","expansion",
  ];

  const handleAnswerChange = (section:any, index:any, value:any) => {
    setAnswers((prevAnswers: any) => ({
      ...prevAnswers,
      [`${section}-${index}`]: value
    }));
  };

  const handleSubmit = () => {
    const userAnswers = Object.values(answers);
    const results = userAnswers.map((answer:any, index) => answer.trim().toLowerCase() === answersArray[index].trim().toLowerCase());
    const correctCount = results.filter(result => result).length;
    setResults(results);
    setCorrectCount(correctCount);
  };

  return (
    <div className="app">
      <h1>IELTS Questions</h1>
      <audio controls>
        <source src="path/to/your/audiofile.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
        </audio>
      <Section
        sectionNumber={1}
        image={Section1}
        onAnswerChange={handleAnswerChange}
      />
      <Section
        sectionNumber={2}
        image={Section2}
        onAnswerChange={handleAnswerChange}
      />
      <Section
        sectionNumber={3}
        image={Section3}
        onAnswerChange={handleAnswerChange}
      />
      <Section
        sectionNumber={4}
        image={Section4}
        onAnswerChange={handleAnswerChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      {results && (
        <div className="results">
          <h2>Results</h2>
          <p>Correct Answers: {correctCount} / {answersArray.length}</p>
          
        </div>
      )}
    </div>
  );
}

export default ListeningSection;
