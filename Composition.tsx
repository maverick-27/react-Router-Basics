function getProfilePic(username) {
  return "https://www.github.com" + username + ".png?size";
}
function getProfileLink(username) {
  return "https://www.github.com" + username;
}
function getProfileData(username) {
  return {
    pic: getProfilePic(username),
    link: getProfileLink(username)
  };
}
getProfileData("Akhil");

// Convert to Components

function getProfilePic(username) {
  return <img alt={username} src={"https://www.facebook.com"} />;
}
function getProfileData(username) {
  return <a href={"www.github.com" + username}>{username}</a>;
}

function getProfileData(username) {
  return (
    <div className="profile">
      <getProfilePic username="username" />
      <getProfileLink username="username" />
    </div>
  );
}


getProfileData('Akhil');
