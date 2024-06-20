// import React, { useState } from 'react';
// import axios from 'axios';
// import { ReactMic } from 'react-mic';
// import { serverAPI } from '../../lib/config';

// const AudioRecorder = () => {
//   const [isRecording, setIsRecording] = useState(false);
//   const [transcription, setTranscription] = useState('');

//   const startRecording = () => {
//     setIsRecording(true);
//   };

//   const stopRecording = () => {
//     setIsRecording(false);
//   };

//   const onData = () => {
//     // console.log('chunk of real-time data is: ', blob);
//   };

//   const onStop = async (recordedBlob) => {
//     const formData = new FormData();
//     formData.append('audio', recordedBlob.blob, 'audio.wav');

//     try {
//       // Send POST request to backend
//       const response = await axios.post(`${serverAPI}/speech`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       // Update transcription state with feedback
//       setTranscription(response.data.feedback);
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       setTranscription('Error processing file');
//     }
//   };

//   return (
//     <div>
//       <h2>Speech to Text Recorder</h2>
//       <ReactMic
//         record={isRecording}
//         className="sound-wave"
//         onStop={onStop}
//         onData={onData}
//         mimeType="audio/wav"
//       />
//       <div>
//         {!isRecording ? (
//           <button onClick={startRecording}>Start Recording</button>
//         ) : (
//           <button onClick={stopRecording}>Stop Recording</button>
//         )}
//       </div>
//       <div>
//         <h3>Transcription Feedback:</h3>
//         <p>{transcription}</p>
//       </div>
//     </div>
//   );
// };

// export default AudioRecorder;
