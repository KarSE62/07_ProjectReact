import React, { useEffect } from 'react';
import Posts from '../component/Posts';

// function Home รับ props
function Home(props) {
  // กำหนด handledOnLoad
  const handledOnLoad = () => {
    // กำหนด props.handledOnLoad
    props.handledOnLoad();
  };
  // เรียกใช้ useEffect
  useEffect(() => {
    // เรียกใช้ handledOnLoad
    handledOnLoad();
  }, []);
  // function renderPosts
  function renderPosts() {
    // รีเทิน props.photos ใช้ฟังชัน .map เพื่อลูปข้อมูลออกมาก
    return props.photos.map(function (photo) {
      return (
        // เรียกใช้ component post ที่ได้สร้างไว้ แล้วส่งค่า props ไปด้วย
        <Posts
          profile_image={photo.user.profile_image.medium}
          username={photo.user.username}
          img={photo.urls.regular}
          likes={photo.likes}
          views={photo.views}
          description={photo.description}
          key={photo.id}
        />
      );
    });
  }
  // เรียกใช้ renderPosts
  return <div>{renderPosts()}</div>;
}

export default Home;
