import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import WidgetWrapper from '../components/WidgetWrapper';
import FlexBetween from '../components/FlexBetween';
import UserImage from '../components/UserImage';

const UserWidget = ({ userId }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);

  const getUser = async () => {
    try {
      const response = await axios.get(`/api/users/find/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <WidgetWrapper>
    {/* FIRST ROW */}
    <div class="flex justify-between items-center pb-1.1 cursor-pointer" onClick={() => navigate(`/profile/${userId}`)}>
      <div class="flex gap-1">
        <UserImage  />
        <div>
          <h4 class="font-medium text-gray-800 hover:text-primary-light">
            {user?.firstName} {user?.lastName}
          </h4>
          <p class="text-gray-500">{user?.friends.length} friends</p>
        </div>
      </div>
      
    </div>
  
    <div class="border-b"></div>
  
    {/* SECOND ROW
    <div class="py-4">
      <div class="flex items-center gap-1 mb-2">
        <LocationOnOutlined class="text-primary-main text-lg" />
        <p class="text-gray-500">{location}</p>
      </div>
      <div class="flex items-center gap-1">
        <WorkOutlineOutlined class="text-primary-main text-lg" />
        <p class="text-gray-500">{occupation}</p>
      </div>
    </div> */}
  
    <div class="border-b"></div>
  
    {/* THIRD ROW
    <div class="py-4">
      <div class="flex justify-between items-center mb-2">
        <p class="text-gray-500">Who's viewed your profile</p>
        <p class="font-medium text-primary-main">{viewedProfile}</p>
      </div>
      <div class="flex justify-between items-center">
        <p class="text-gray-500">Impressions of your post</p>
        <p class="font-medium text-primary-main">{impressions}</p>
      </div>
    </div> */}
  
    <div class="border-b"></div>
  
    {/* FOURTH ROW */}
    {/* <div class="py-4">
      <h2 class="text-primary-main font-medium mb-4">Social Profiles</h2>
  
      <div class="flex justify-between items-center mb-2">
        <div class="flex gap-1">
          <img src="../assets/twitter.png" alt="twitter" />
          <div>
            <p class="font-medium text-primary-main">Twitter</p>
            <p class="text-gray-500">Social Network</p>
          </div>
        </div>
        <EditOutlined class="text-primary-main" />
      </div> */}
  
      {/* <div class="flex justify-between items-center">
        <div class="flex gap-1">
          <img src="../assets/linkedin.png" alt="linkedin" />
          <div>
            <p class="font-medium text-primary-main">Linkedin</p>
            <p class="text-gray-500">Network Platform</p>
          </div>
        </div>
        <EditOutlined class="text-primary-main" />
      </div> */}
    {/* </div> */}
  </WidgetWrapper>
  
  );
};

export default UserWidget;
