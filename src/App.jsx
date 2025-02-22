import "./App.css";

function App() {
  // prymityw w masywach

  // const arr = [1, 2, 3];
  // console.log(arr);
  // arr.push(4, 5);
  // console.log(arr);
  // arr.unshift(0);
  // console.log(arr);
  // arr.pop();
  // console.log(arr);
  // arr.splice(3, 1);
  // console.log(arr);

  //
  //

  const arr = [56, 10, 3, -4, 8];
  console.log(arr);
  arr.sort((a, b) => a - b);
  console.log(arr);

  const arrNumb = [56, 10, 3, -4, 8];
  console.log(arrNumb);
  arrNumb.sort((a, b) => b - a);
  console.log(arrNumb);

  const arrLit = ["s", "n", "a"];
  console.log(arrLit);
  arrLit.sort();
  console.log(arrLit);

  return (
    <>
      <p>Hello</p>
    </>
  );
}

export default App;
