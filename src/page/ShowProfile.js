import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import Profile from '../component/Profile';
import Photo from '../component/Photo';



function ShowProfile(props) {
  const params = useParams();
  useEffect(() => {
    console.log(params.username);
    props.getProfile(params.username);
  }, []);
  function renderPhoto() {
    return props.photos.map(function (photo) {
      return (
        <Photo
          img={photo.urls.full}
        />
      );
    });
  }
  function renderProfile() {
    if (props.photos)
      return (
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
          
          <div className="grid grid-cols-3 gap-8 mb-8 h-150 container mx-auto">{renderPhoto()}</div>
        </div>
      );
  
  }

  return <div>{renderProfile()}</div>;
}

export default ShowProfile;
