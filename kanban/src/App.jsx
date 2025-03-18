
import './App.css';
import Column from './column/Column';
function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Column columnName = "To Do" />
         <Column columnName = "Doing" />
         <Column columnName = "Done" />
      </header>
    </div>
  );
}

export default App;
