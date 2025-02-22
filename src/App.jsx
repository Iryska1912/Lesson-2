import "./App.css";
import bd from "../bd.json";

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
  //sortuwanie

  // const arr = [56, 10, 3, -4, 8];
  // console.log(arr);
  // arr.sort((a, b) => a - b);
  // console.log(arr);

  // const arrNumb = [56, 10, 3, -4, 8];
  // console.log(arrNumb);
  // arrNumb.sort((a, b) => b - a);
  // console.log(arrNumb);

  // const arrLit = ["s", "n", "a"];
  // console.log(arrLit);
  // arrLit.sort();
  // console.log(arrLit);

  // praca z plikiem

  // console.log(bd);

  let sum = bd.reduce((kalkul, elem) => kalkul + elem, 0);
  console.log(sum);

  return (
    <>
      <p>Hello</p>
    </>
  );
}

export default App;
