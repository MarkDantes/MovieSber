const ProfilePage = () => {
    const exit = () => {
      localStorage.removeItem('user');
    };
    return (
        <div>
        <span className = "pageTitle">Profile: Amir Kapkaev</span>
    </div>
    );
  };
  
  export default ProfilePage;