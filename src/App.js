import './App.css';

function App() {

  const arr = []
  for (let i = 1; i < 49; i++) {
    arr.push("./img" + i + ".png")
  }
  console.log(arr)
  return (
    <div className="App">
      <img src="./img00.png" className="App-logo" alt="logo" />
      <img src="./img0.png" />

      <div className="container1">
        {arr.map((item, key) => <img src={item} id={key} />)}
      </div>

    </div>
  );
}

export default App;
