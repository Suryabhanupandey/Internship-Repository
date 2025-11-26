let name = document.getElementById('name');
let repo = document.getElementById('repo');
let follower = document.getElementById('follower');
let following = document.getElementById('following');
let username = document.getElementById('username');
let loadBtn = document.getElementById("searchBtn");


async function getRespons(url) {
    url = `https://api.github.com/users/${username.value}`
    let Response = await fetch(url)
    let data =await Response.json();
    console.log(data);

    // display data
     name.innerHTML = data.name;
    repo.innerHTML = data.public_repos;
    follower.innerHTML = data.followers;
    following.innerHTML = data.following;
}
loadBtn.addEventListener('click' ,getRespons);



   



 