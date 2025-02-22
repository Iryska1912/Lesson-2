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

  // let sum = bd.reduce((kalkul, elem) => kalkul + elem, 0);
  // console.log(sum);

  // objekt

  const man = {
    name: "Adam",
    height: 182,
    friends: ["Piotr", "Michał", "Kuba", "Oskar", "Filip", "Mateusz"],
    readBooks: [
      { nazwa: "Słońce w niebie", rok: 2000, ilStron: 250 },
      { nazwa: "Gwiazdy w niebie", rok: 2015, ilStron: 105 },
      { nazwa: "Księżyc w niebie", rok: 2020, ilStron: 450 },
    ],
  };
  console.log(man);

  return (
    <>
      <p>Hello</p>
      <div className="ankieta">
        <p>Name: {man.name}</p>
        <p>Wzrost: {man.height}</p>
        <ul>
          {man.friends.map((friend, index) => {
            return <li key={index}>{friend}</li>;
          })}
        </ul>

        <ul>
          {man.readBooks.map((book, index) => {
            return (
              <li key={index}>
                <p>Nazwa książki: {book.nazwa}</p>
                <p>Rok wydania: {book.rok}</p>
                <p>Iłość stron: {book.ilStron}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
