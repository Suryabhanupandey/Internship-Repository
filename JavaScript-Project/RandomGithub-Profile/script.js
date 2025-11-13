let profileImage = document.getElementById('image');
let profileName = document.getElementById('profileName');
let bio = document.getElementById('bio');
let login = document.getElementById('login');
let follower = document.getElementById('follower');
let following = document.getElementById('following');
let public_repo = document.getElementById('repo');
let refreshBtn = document.getElementById('refresh');


async function githubProfile(url) {
    url = `https://randomuser.me/api/`
    let Respons = await fetch(url);
    let data = await Respons.json();
    console.log(data);

    //  Data access 
    let user = data.results[0];

    //  Display data
    profileImage.src = user.picture.large;
    profileName.textContent = `${user.name.first} ${user.name.last}`;
    bio.textContent = `Gender: ${user.gender}, Age: ${user.dob.age}`;
    login.textContent = user.login.username;
    follower.textContent = Math.floor(Math.random() * 1000);
    following.textContent = Math.floor(Math.random() * 500);
    public_repo.textContent = Math.floor(Math.random() * 50);

}
refreshBtn.addEventListener('click', githubProfile);
