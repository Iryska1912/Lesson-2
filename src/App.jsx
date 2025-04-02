import "./App.css";
import bd from "../bd.json";

function App() {
const aa=5, bb=3, m_komp=140, fhghj_hvhdrjh=7;
let cc,dd=8,ee;
cc=aa*bb;
ee=dd+aa-cc*17+2*aa*aa;
console.log(cc,ee,'hej');
let wyn1=m_komp*1;
let wyn2=m_komp*2;
let wyn3=m_komp*3;
let wyn4=m_komp*4;
let wyn5=m_komp*5;
let wyn6=m_komp*6;
let wyn7=m_komp*7;
let wyn8=m_komp*8;
let wyn9=m_komp*9;
let wyn10=m_komp*10;


 




  const a1=32, g=5, n_k=5;
let a2,a3=1, s1,s2,s3, sum2;
sum2=a1+g;

s1=n_k*1;
s2=n_k*2;
s3=n_k*3;

const komp=3, a=1, b=100;
let  x, y, z, sum, w1,w2,w3,w4,w5,w6,w7,w8,w9;
x=2, y=4;
z=x+y;
sum=2*x+3*y;

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
    <>
    <div className="ddddd">
    <p className="ppppp">mój komp numer {m_komp}</p>
    </div>
    <br />
    <div className="ddddd2">
<p>Tablica mnożenia</p>
<p>{m_komp}*1={wyn1}</p>
<p>{m_komp}*2={wyn2}</p>
<p>{m_komp}*3={wyn3}</p>
<p>{m_komp}*4={wyn4}</p>
<p>{m_komp}*5={wyn5}</p>
<p>{m_komp}*6={wyn6}</p>
<p>{m_komp}*7={wyn7}</p>
<p>{m_komp}*8={wyn8}</p>
<p>{m_komp}*9={wyn9}</p>
<p>{m_komp}*10={wyn10}</p>
    </div>









    <p className="ppp3">moj komp - {n_k}</p>
    <p>{n_k}*1={s1}</p>
    <p>{n_k}*2={s2}</p>
    <p>{n_k}*3={s3}</p>

    <div className="tratata">
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
