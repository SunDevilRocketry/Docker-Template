import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://backend:4000/") // IMPORTANT: since this fetch requet is calling on the backend container, you must
    // use the backend service name, as opposed to local host
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="flex items-center justify-center">
      <p className="text-white">{message}</p>
    </div>
  );
}