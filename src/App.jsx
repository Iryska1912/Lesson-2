import "./App.css";
import bd from "../bd.json";

function App() {
const komp=3, a=1, b=100;
let  x, y, z, sum, w1,w2,w3,w4,w5,w6,w7,w8,w9;
x=2, y=4;
z=x+y;
sum=2*x+3*y;
console.log(a,z, sum);
w1=komp*1;
w2=komp*2;
w3=komp*3;
w4=komp*4;
w5=komp*5;
w6=komp*6;
w7=komp*7;
w8=komp*8;
w9=komp*9;








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
  // console.log(man);

  return (
    <><div className="tratata">
      <p className="ppp">moj komputer ma numer - {komp}</p></div>
    
<p>{komp}*1={w1}</p>
<p>{komp}*2={w2}</p>
<p>{komp}*3={w3}</p>
<p>{komp}*4={w4}</p>
<p>{komp}*5={w5}</p>
<p>{komp}*6={w6}</p>
<p>{komp}*7={w7}</p>
<p>{komp}*8={w8}</p>
<p>{komp}*9={w9}</p>

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
