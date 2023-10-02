
// notification panel
const notifications = [
    {
        picture: "",
        name: "Mark Webber",
        message: "reacted to your recent post",
        post: "My first tournament today!",
        time: "1m ago",
        content: " "
    },
    {
        picture: "",
        name: "Angela Gray",
        message: "followed you",
        post: " ",
        time: "5m ago",
        content: " "
    },
    {
        picture: "",
        name: "Jacob Thompson",
        message: "has joined your group",
        post: "Chess Club",
        time: "1 day ago",
        content: " "
    },
    {
        picture: "",
        name: "Rizky Hasanuddin",
        message: "sent you a private message",
        post: "My first tournament today!",
        time: "5 days ago",
        content: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
    },
    {
        picture: "",
        name: "Kimberly Smith",
        message: "commented on your picture",
        post: "My first tournament today!",
        time: "1 week ago",
        content: " "
    },
    {
        picture: "",
        name: "Nathan Peterson",
        message: "reacted to your recent post",
        post: "5 end-game strategies to increase your win rate",
        time: "2 weeks ago",
        content: " "
    },
    {
        picture: "",
        name: "Anna Kim",
        message: "left the group",
        post: "Chess Club",
        time: "2 weeks ago",
        content: " "
    }
];

const container = document.getElementById("container");

for (let notification of notifications) {
    const notificationBox = document.createElement("div");
    notificationBox.classList.add("notification-box");

    const pictureEl = document.createElement("div");
    const picture = document.createElement("img");
    picture.src = notification.picture;
    picture.alt = notification.name;
    pictureEl.classList.add("picture-element");
    picture.classList.add("picture");
    pictureEl.appendChild(picture);

    const notifyEl = document.createElement("div");
    const notify = document.createElement("div");
    const time = document.createElement("div");
    const name = document.createElement("span");
    const message = document.createElement("span");
    const post = document.createElement("span");
    name.innerText = notification.name;
    message.innerText = notification.message;
    post.innerText = notification.post;
    time.innerText = notification.time;
    notifyEl.classList.add("notify-element");
    notify.appendChild(name, message, post);
    notifyEl.appendChild(notify, time);

    notificationBox.appendChild(pictureEl, notifyEl);

    container.appendChild(notificationBox);

};