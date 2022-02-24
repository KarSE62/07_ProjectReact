import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import Profile from '../component/Profile';
import Photo from '../component/Photo';

// ฟังชั่น ShowProfile
function ShowProfile(props) {
  // กำหนด พารามิเตอร์ useParams
  const params = useParams();
  // ใช้  useEffect 
  useEffect(() => {
    // กำหนด props โดยเรียกใช้ getProfile รับ username
    props.getProfile(params.username);
  }, []);
  function renderPhoto() {
    // รีเทิน props.photos ใช้ฟังชัน .map เพื่อลูปข้อมูลออกมาก
    return props.photos.map(function (photo) {
      return (
        // เรียกใช้ component Photo
        <Photo
          img={photo.urls.full}
        />
      );
    });
  }
  // สร้าง renderProfile
  function renderProfile() {
    // check props.photos
    if (props.photos)
      return (
        // ถ้ามี รีเทิน ให้เรียกใช้ component profile and กำหนด props ไปด้วย
        <div>
          <Profile
            profile_image={props.photos[0].user.profile_image.large}
            username={props.photos[0].user.username}
            name={props.photos[0].user.name}
            total_photos={props.photos[0].user.total_photos}
            total_likes={props.photos[0].user.total_likes}
            total_collections={props.photos[0].user.total_collections}
            location={props.photos[0].user.location}
            instagram={props.photos[0].user.instagram_username}
          />
          {/* ให้เรียกใช้ฟังชั่น renderPhoto ต่อท้าย */}
          <div className="grid grid-cols-3 gap-8 mb-8 h-150 container mx-auto">{renderPhoto()}</div>
        </div>
      );
  }
  // รีเทิน renderProfile
  return <div>{renderProfile()}</div>;
}
export default ShowProfile;
