import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./component/Search";
import Home from './page/Home';
import ShowProfile from "./page/ShowProfile";
import axios from "axios";
import Footer from "./component/Footer";
// มีการเรียกใช้ component และ page ต่างๆ
// มีการเรียกใช้ router axios
function App() {
  // กำหนด state photo
  const [photos, setPhotos] = useState([]);
  // กำหนด getPhotosRandom ใช้ async
  const getPhotosRandom = async () => {
    // กำหนด response โดยให้ axios.get ตามด้วย url
    const response = await axios.get("https://api.unsplash.com/photos/random", {
      // กำหนด Authorization เพื่อเข้าถึง API unsplash
      headers: {
        Authorization: "Client-ID 9A-BDtzKJRhfT_YYh7EdwTPE4zyE1mKDKdttphhyoZA",
      },
      // กำหนด พารามิเตอร์ต่างๆ
      params: {
        count: 11,
        orientation: "squarish",
      },
    });
    // เรัยกใช้ setPhotos ส่งค่าที่ได้กลับมาจาก API
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
  // กำหนด getProfile ใช้ async
  const getProfile = async (username) => {
    const response = await axios.get(
      // เมื่อทำการแทรก username ลงไปเพื่อค้นหาข้อมูล 
      `https://api.unsplash.com/users/${username}/photos`,
      {
        headers: {
          Authorization:
            "Client-ID 9A-BDtzKJRhfT_YYh7EdwTPE4zyE1mKDKdttphhyoZA",
        },
      }
    );
     // เรัยกใช้ setPhotos ส่งค่าที่ได้กลับมาจาก API
    setPhotos(response.data);
  };
  return (
    <Router>
      {/* เรียกใช้ component search แล้วกำหนด props และส่งค่า getPhotosSearch ไปด้วย */}
      <Search getPhotosSearch={getPhotosSearch} />
      <Routes>
        {/* กำหนด path ให้เรียกใช้ page home แล้วส่ง props handledOnLoad = ค่าที่ได้จาก get photo random และส่งค่าของ state ไปด้วย*/}
        <Route path="/" element={<Home handledOnLoad={getPhotosRandom} photos={photos} />} />
        {/* กำหนด path เรียกใช้ page ShowProfile และส่งค่า props getProfile และส่งค่าของ state ไปด้วย */}
        <Route path="/Profile/:username" element={<ShowProfile getProfile={getProfile} photos={photos} />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
