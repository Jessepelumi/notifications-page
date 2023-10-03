
fetch("assets/notifications.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Couldn't fetch data");
        }
        return response.json();
    })
    .then(data => {

        const notifications = data.map(notification => {
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
            const time = document.createElement("div");
            const name = document.createElement("span");
            const message = document.createElement("span");
            const post = document.createElement("span");
            const group = document.createElement("span");
            name.innerText = notification.name;
            name.classList.add("name");
            message.innerText = notification.message;
            message.classList.add("message");
            post.innerText = notification.post;
            post.classList.add("post");
            group.innerText = notification.group;
            group.classList.add("group");
            time.innerText = notification.time;
            notifyEl.classList.add("notify-element");
            notify.append(name, message, post, group);
            notifyEl.append(notify, time);

            notificationBox.append(pictureEl, notifyEl);

            container.append(notificationBox);
        })

    })
    .catch(error => console.log("Error loading JSON: ", error.message));