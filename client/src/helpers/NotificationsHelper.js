import { NotificationManager } from "react-notifications";

export const createNotification = (type, message) => {
    NotificationManager[type](message);
};