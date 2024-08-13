import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

let AppContext = createContext();

function Context({ children }) {

// states
  let [apidata, setApiData] = useState([]);
  let [loading, setLoading] = useState(true);
  let [currentPage, setCurrentPage] = useState(1);



// data from api
  let fetchData = async () => {
    try {
      let url = `https://jsonplaceholder.typicode.com/posts`;
      let response = await axios.get(url);
      setApiData(response.data);
      setTimeout(() => setLoading(false), 5000);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


// normal variables
  let totalPages = 3;
  let postsPerPage = 6;



// functions to get posts per page

  let getCurrentPosts = () => {
    let startIndex = (currentPage - 1) * postsPerPage;
    return apidata.slice(startIndex, startIndex + postsPerPage);
  };


//  function for remove card from slider
  let removeCard = (id) => {
    let updatedPosts = getCurrentPosts().filter((post) => post.id !== id);
    let nextPostIndex = (currentPage - 1) * postsPerPage + updatedPosts.length;
    if (nextPostIndex < apidata.length) {
      updatedPosts.push(apidata[nextPostIndex]);
    }

    setApiData((prevData) =>
      prevData.filter((post) => post.id !== id).concat(updatedPosts)
    );
  };

  return (
    <AppContext.Provider
      value={{
        apidata,
        loading,
        currentPage,
        setCurrentPage,
        getCurrentPosts,
        removeCard,
        totalPages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default Context;
export { AppContext };
