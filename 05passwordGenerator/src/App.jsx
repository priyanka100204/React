import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);
  // kisi bhi cheeze ka refrence lena ho tb useRef() hook use hota h
  
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*(){}+=-_";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  //useCallback(fn, dependencies) me dependencies ka use optimisation ke liye kiya jata h



  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 3);
    passwordRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();     //passwordGenerator() ko call krne ke liye iska use hua, ek button bnake bhi passwordGenerator() ko call kiya ja skta but hame ek dusra mathod chahiye tha isliye
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

    // jb page render/update hota h tb bhi useEffect call hota h
  //useEffect(fn, dependencies) me dependencies ka use fn ko baar baar call krane ke liye hota h
  // ye project bina useCallback() ke bhi bn jata
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>
      </div>
      <div className="w-full flex max-w-md gap-x-5 mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-800">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className="text-orange-600"> Length:{length} </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput" className="text-orange-700">
            Numbers
          </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput" className="text-orange-700">
            Characters
          </label>
        </div>
      </div>
    </>
  );
}

export default App;
