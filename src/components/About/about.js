import React from 'react';
import './about.css'

const log = () => {
  return (
    <div className="about">
      <div className="container">
          <div className="col-lg-7">
            <img
              className="img"
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="img"
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">About</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
      </div>
    </div>
  );
}

export default log;
