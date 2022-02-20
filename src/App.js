import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./component/Search";
import Home from './page/Home';
import ShowProfile from "./page/ShowProfile";
import axios from "axios";
import Footer from "./component/Footer";


function App() {
  const [photos, setPhotos] = useState([]);

  const getPhotosRandom = async () => {
    const response = await axios.get("https://api.unsplash.com/photos/random", {
      headers: {
        Authorization: "Client-ID 9A-BDtzKJRhfT_YYh7EdwTPE4zyE1mKDKdttphhyoZA",
      },
      params: {
        count: 11,
        orientation: "squarish",
      },
    });
    setPhotos(response.data);
  };

  const getPhotosSearch = async (search) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID 9A-BDtzKJRhfT_YYh7EdwTPE4zyE1mKDKdttphhyoZA",
      },
      params: {
        query: search,
      },
    });
    setPhotos(response.data.results);
  };

  const getProfile = async (username) => {
    console.log(username);
    const response = await axios.get(
      `https://api.unsplash.com/users/${username}/photos`,
      {
        headers: {
          Authorization:
            "Client-ID 9A-BDtzKJRhfT_YYh7EdwTPE4zyE1mKDKdttphhyoZA",
        },
      }
    );
    setPhotos(response.data);
    console.log(response.data);
  };
  return (
    <Router>
      <Search getPhotosSearch={getPhotosSearch} />
      <Routes>
        <Route path="/" element={<Home handledOnLoad={getPhotosRandom} photos={photos} />} />
        <Route path="/Profile/:username" element={<ShowProfile getProfile={getProfile} photos={photos} />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
