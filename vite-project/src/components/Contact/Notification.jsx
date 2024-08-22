import React from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './Notification.css'

const Notification = ({ onClose, message }) => (
  <Popup open={true} modal nested onClose={onClose}>
    {
      close => (
        <div className='modal'>
          <div className='content'>
            <p>{message}</p>
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