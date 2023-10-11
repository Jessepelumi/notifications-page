
const container = document.getElementById("container");
const notificationCount = document.getElementById("notification-count");
const markAsRead = document.getElementById("mark-as-read");

const renderPosts = async () => {
    let uri = "http://localhost:3000/notifications";

    const response = await fetch(uri);
    const notifications = await response.json();
    console.log(notifications);

    notifications.forEach(notification => {

        const notificationBox = document.createElement("div");
        notificationBox.classList.add("notification-box");

        const pictureEl = document.createElement("div");
        const picture = document.createElement("img");
        picture.src = notification.picture;
        picture.alt = notification.name;
        pictureEl.classList.add("picture-element");
        picture.classList.add("picture");
        pictureEl.append(picture);

        const notifyEl = document.createElement("div");
        const notify = document.createElement("div");
        const notifyBox = document.createElement("div");
        const time = document.createElement("div");
        const name = document.createElement("span");
        const message = document.createElement("span");
        const post = document.createElement("span");
        const group = document.createElement("span");
        const image = document.createElement("span");
        const content = document.createElement("div");
        name.innerText = notification.name;
        name.classList.add("name");
        message.innerText = notification.message;
        message.classList.add("message");
        post.innerText = notification.post;
        post.classList.add("post");
        group.innerText = notification.group;
        group.classList.add("group");
        time.innerText = notification.time;
        time.classList.add("time");
        content.innerText = notification.content;
        content.classList.add("content");
        image.innerHTML = notification.image;
        image.classList.add("image");
        notifyEl.classList.add("notify-element");
        notify.classList.add("notify");
        notifyBox.append(name, message, post, group)
        notify.append(notifyBox, image);
        notifyEl.append(notify, time, content);

        notificationBox.append(pictureEl, notifyEl);

        container.append(notificationBox);


        if(content.innerText === "") {
            content.classList.remove("content");
        };
    });

    

};


window.addEventListener("DOMContentLoaded", () => renderPosts());