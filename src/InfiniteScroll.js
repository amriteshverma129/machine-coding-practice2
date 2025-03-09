import { useState, useEffect } from "react";

export const InfiniteScroll = () => {
  const [data, setDate] = useState(new Array(5).fill(0));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAPI = () => {
      return new Promise((resolve) => {
        setLoading(true);
        setTimeout(() => {
          data.push(...new Array(5).fill(0));
          setLoading(false);
        }, 2000);
      });
    };
    const handleScroll = () => {
      //window.scrollTo(0, 0); Scroll to top
      if (
        window.scrollY + window.innerHeight >=
        document.body.scrollHeight - 10
      ) {
        fetchAPI();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {data &&
        data.map((_, index) => {
          return (
            <div key={index} className="card">
              Hello{index}
            </div>
          );
        })}
      {loading && <span>Loading...</span>}
    </div>
  );
};
