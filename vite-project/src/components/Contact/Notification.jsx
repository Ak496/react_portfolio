import React from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './Notification.css'

const Notification = ({ onClose }) => (
  <Popup open={true} modal nested onClose={onClose}>
    {
      close => (
        <div className='modal'>
          <div className='content'>
            <p>Message sent successfully.</p>
            <p>Thank you for contacting me :)</p>
          </div>
          <div>
            <button id='popup-button' onClick={() => { close(); onClose(); }}>OK</button>
          </div>
        </div>
      )
    }
  </Popup>
);
export default Notification;