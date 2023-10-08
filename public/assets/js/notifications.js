
const container = document.getElementById("container");
const notificationCount = document.getElementById("notification-count");
const markAsRead = document.getElementById("mark-as-read");

const renderPosts = async () => {
    let uri = "http://localhost:3000/notifications";

    const response = await fetch(uri);
    const notifications = await response.json();
    console.log(notifications);

    let template = "";
    notifications.forEach(notification => {
        template += `
            <div class="notification-box">
            
                <div class="picture-element">
                    <img src="${notification.picture}" alt="${notification.name}" class="picture" >
                </div>

                <div class="notify-element">
                    <div class="notify">
                        <div>
                            <div>
                                <span class="name">
                                    ${notification.name}
                                </span>
                                <span class="message">
                                    ${notification.message}
                                </span>
                                <span class="post">
                                    ${notification.post}
                                </span>
                                <span class="group">
                                    ${notification.group}
                                </span>
                            </div>
                        </div>
                        <span class="image">
                            ${notification.image}
                        </span>
                        
                    </div>
                    <div class="time">
                        ${notification.time}
                    </div>
                    <div class="content-container ">
                        ${notification.content}
                        
                    </div>
                </div>
            
            </div>

        `


    });

    container.innerHTML = template;

    // const contentDiv = container.getElementsByClassName("content");
    // console.log(contentDiv);
    // console.log(contentDiv.textContent);

    

};

console.log(container);
const contentContainer = container.querySelectorAll(".content-container");
console.log(contentContainer);
    
for (const child of container.children) {
    if (child.classList.contains("content-container")) {
        if (child.innerText !== "") {
            child.classList.add("content");
        }
    }
}

window.addEventListener("DOMContentLoaded", () => renderPosts());