const number  = document.querySelector(".number");
const all = document.querySelector(".mark-all");
const notifications = document.querySelectorAll(".content");
const notifUnread = document.getElementsByClassName("unread");

notifications.forEach(notification => {
    notification.addEventListener("click", function() {
        this.classList.toggle("unread");
        number.innerText = notifUnread.length;
    });
})

all.addEventListener("click", () => {
    if(all.innerText === "Mark all as read") {
        all.innerText = "Mark all as unread"
        notifications.forEach(ele => {
            ele.classList.remove("unread")
        });
    }else {
        all.innerText = "Mark all as read";
        notifications.forEach(ele => {
            ele.classList.add("unread")
        });
    }
    number.innerText = notifUnread.length;
});