// Example service for notifications (could be used for sending push notifications or other types)
const sendNotification = (user, message) => {
    console.log(`Sending notification to ${user}: ${message}`);
  };
  
  module.exports = { sendNotification };
  