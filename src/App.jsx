import { useState } from "react";

function App() {
  let [color, setColor] = useState("red");

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => setColor('red')} className="px-3 py-1 rounded-3xl text-white" style={{backgroundColor: 'red'}}>Red</button>
            <button onClick={() => setColor('blue')} className="px-3 py-1 rounded-3xl text-white" style={{backgroundColor: 'blue'}}>Blue</button>
            <button onClick={() => setColor('green')} className="px-3 py-1 rounded-3xl text-white" style={{backgroundColor: 'green'}}>Green</button>
            <button onClick={() => setColor('yellow')} className="px-3 py-1 rounded-3xl text-black" style={{backgroundColor: 'yellow'}}>Yellow</button>
            <button onClick={() => setColor('orange')} className="px-3 py-1 rounded-3xl text-black" style={{backgroundColor: 'orange'}}>orange</button>
            <button onClick={() => setColor('purple')} className="px-3 py-1 rounded-3xl text-white" style={{backgroundColor: 'purple'}}>purple</button>
            <button onClick={() => setColor('lavender')} className="px-3 py-1 rounded-3xl text-black" style={{backgroundColor: 'lavender'}}>lavender</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
