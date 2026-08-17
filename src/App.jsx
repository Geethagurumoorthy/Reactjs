import { useState } from "react";
import{useEffect} from "react";

function App() {
  const [age, setCount ]= useState("");
  useEffect(()=>{
    if(age!==''){
      if(Number(age)>=18){
      alert("you are eligible to vote")
    }else{
      alert ("youre not eligible to vote")
    }
  }
 },[]);
  

 
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-96 rounded-2xl bg-white p-8 text-center shadow-lg">

        <h1 className="mb-5 text-3xl font-bold text-blue-600">
          Age Counter 
        </h1>

        <input
          type="Number"
          placeholder="Enter your Age"
          value={age}
          onChange={(e) => setCount(e.target.value)}
          className="mb-4 w-full rounded-lg border p-3"
        />

        <button
          //onClick={addAge}
          className="rounded-lg bg-blue-500 px-6 py-2 text-white"
        >
          Value
        </button>
        { age===''?(
          <p>please Enter your age</p>
        ):Number(age)>=18?(
          <p>you are eligible to vote</p>
        ):(
          <p>you are not eligible to vote</p>
        )}
        

        <h2 className="mt-6 text-xl font-bold">
          {name && `${count}. ${name}`}
        </h2>

      </div>
    </div>
  );
}

export default App;