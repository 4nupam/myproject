import React, { useState, createContext, useEffect, useContext } from "react";

const MyContext = createContext();

export default function ContextApi({ children }) {
  const [data, setData] = useState(null);
  const url = "https://api.api-ninjas.com/v1/quotes";
  const apiKey = "S7qK0qGeNfCRM24DxT1T9g==uMeVfsKkBxCpbCRf";

  async function fetching() {
    try {
      const res = await fetch(url, {
        headers: { "X-Api-Key": apiKey },
      });
      if (!res.ok) {
        console.log("error in fetching");
        return;
      }
      const ans = await res.json();
      setData(ans[0]); // assuming it's an array
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetching();
  }, []);

  return (
    <MyContext.Provider value={{ quote: data }}>
      {children}
    </MyContext.Provider>
  );
}

// 👇 use this inside a component, not outside
export const useMyContext = () => useContext(MyContext);
