
fetch("assets/notifications.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Couldn't fetch data");
        }
        return response.json();
    })
    .then(data => {

        

        const notifications = data.map(notification => {
            
            const keyToCount = "unread";
            const valueToCount = true;

            let count = 0;

            for (const obj of data) {
                if (obj[keyToCount] === valueToCount) {
                    count++;
                }
            };
            console.log(count);

            const keyToExtract = "unread";
            const valuesArray = [];

            for (const item of data) {
                if (item.hasOwnProperty(keyToExtract)) {
                    valuesArray.push(item[keyToExtract]);
                }
            };
            console.log(valuesArray);

            const filterCondition = (value) => value === true;
            const trueValuesArray = valuesArray.filter(filterCondition);
            console.log(trueValuesArray.length);

            const unreadValue = notification.unread;
            console.log(unreadValue);

            

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

            const notificationCount = document.getElementById("notification-count");
            notificationCount.innerText = count;

            const markAsRead = document.getElementById("mark-as-read");
            markAsRead.addEventListener("click", () => {

            });

        });



    })
    .catch(error => console.log("Error loading JSON: ", error.message));