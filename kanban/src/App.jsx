
import './App.css';
import Column from './column/column';
function App() {
  return (
    <div className="App">
      <div className="App-header">
         <Column columnName = "To Do" />
         <Column columnName = "Doing" />
         <Column columnName = "Done" />
         
         
      </div>
    </div>
  );
}

export default App;
