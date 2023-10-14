import React from 'react';

// Notification component displays a message when a letter is entered more than once
const Notification = ({ showNotification }) => {
  return (
    // Apply styles based on the showNotification prop
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      <p>You have already entered this letter</p>
    </div>
  );
}

export default Notification;
