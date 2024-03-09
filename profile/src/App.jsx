import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState('');
  const refContainer = useRef(null)



  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchData = async () => {
      try {
        const url = `https://api.github.com/users/${search}`;
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    };

    fetchData();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://api.github.com/users/sachimugu";
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    };

    fetchData();
    // refContainer.current.focus();

  }, []);

  console.log(data);
  if (loading) {
    return (
      <div className="max-w-5xl m-auto">
        <p1>loading</p1>
      </div>
    );
  }
  if (error) {
    return (
      <div className="max-w-5xl m-auto text-red-300">
        <p1 className="text-center"> Error Finding User</p1>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-3xl m-auto mt-16 ">
        <div>
          <form onSubmit={handleSubmit} className="flex items-center justify-center mb-4">
            <input
              ref={refContainer}
              className="p-1 border-2 border-blue-500 rounded-l-md w-2/3 text-center"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter a Github Username"
            />
            <button
              className="py-1 px-4 border-2 border-blue-600 bg-blue-600 text-white rounded-r-md "
              type="submit"
            >
              search
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center  drop-shadow-md gap-4 bg-slate-200">
          <img
            className="rounded-full"
            src={data.avatar_url}
            alt={data.login}
            width={300}
            height={300}
          />
          <div className=" text-center">
            <h1 className="font-bold">{data.name}</h1>
            <h2>{data.bio}</h2>
            <div className="flex justify-center gap-4 items-center">
              <h3>{`Repos: ${data?.public_repos}`} </h3>
              <h3>{`Followers: ${data?.followers}`} </h3>
            </div>
          </div>
          ;
        </div>
      </div>
    </>
  );
};

export default App;
