document.getElementById("loginBtn").addEventListener("click", function() {
    // Mock login functionality
    var ID=prompt('Enter your ID:');
    console.log('\n');
    var pass=prompt('Enter your password:');
    if(ID=='123' && pass=='123'){
        alert("Mock login: User authenticated!");
        fetchFeeds();
    }
    else{
        alert('Sorry,User Not authenticated.We unable to fetch feeds.');
    }
    
});

function fetchFeeds() {
    // Mock API call to fetch feeds
    const fakeData = [
        { platform: "Twitter", content: "This is a tweet!" },
        { platform: "Facebook", content: "This is a Facebook post!" },
        { platform: "Instagram", content: "This is an Instagram post!" }
    ];

    // displayFeeds(fakeData);
}

function displayFeeds(feeds) {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = ""; // Clear previous content

    feeds.forEach(feed => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");
        postDiv.innerHTML = `<strong>${feed.platform}:</strong> ${feed.content}`;
        contentDiv.appendChild(postDiv);
    });
}
