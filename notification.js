async function requestNotiPermission() {
    try {
        if (Notification.permission === "default") {
            await Notification.requestPermission();
            return isNotiGranted();
        }
        if (Notification.permission === "denied") {
            alert("Notifications blocked. Please enable them in your browser.");
        }
        return isNotiGranted();
    } catch (e) {
        return false;
    }
}


async function isNotiGranted() {
    return Notification.permission === "granted";
}