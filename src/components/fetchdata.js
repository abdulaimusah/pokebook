import { useEffect, useState } from "react";

const FetchData = ({ apiurl }) => {
  
  
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData =  () => {
      fetch(apiurl)
      .then( res => res.json())
      .then( res => setData(res))
      .catch(err => console.log(err))
    };

    fetchData();
    
  }, [apiurl]);

  return [data];
};

export default FetchData;
