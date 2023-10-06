

const renderPosts = async () => {
    let uri = "http://localhost:3000/notifications";

    const response = await fetch(uri);
    const notifications = await response.json();
    console.log(notifications);
};

window.addEventListener("DOMContentLoaded", () => renderPosts());