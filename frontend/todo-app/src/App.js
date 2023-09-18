import './App.css';
import LearningComponent from './components/learning-examples/LearningComponent';
import LearningJavascript from './components/learning-examples/LearningJavascript';
function App() {
  return (
    <div className="App">
      My ToDo Application
      <LearningComponent></LearningComponent>
      <LearningJavascript></LearningJavascript>
    </div>
  );
}

export default App;
