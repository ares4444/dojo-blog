import './App.css';

function App() {
  const title = 'Welcome to te New Blog'
  const likes = 50;

  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>
        <p>Likes { likes } times</p>
        <p>{ 10 }</p>
        <p>{ "Hello World" }</p>
        <p>{ [1,2,3,4,5] }</p>
        <p>{ Math.random() * 20 }</p>

      </div>
    </div>
  );
}

export default App;
