import React from 'react';

/**
 * A page component that contains information about group members and a brief overview of the application
 */
const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8">
      <div className="text-4xl font-bold">About Us</div>
      <p className="text-lg text-center px-8">
        Our initiative aspires to create a dynamic and engaging platform that links individuals from all walks of life, revolutionizing social networking. We&apos;re developing a client-server application that promises frictionless sharing and communication, with a heavy emphasis on user experience and interactivity. Our goal is to create a community where people feel free to express who they are, share their hobbies, and build deep relationships. Come along on this thrilling adventure with us as we collectively reinvent social media!
      </p>
      <div className="text-xl font-bold">Our Team</div>
      <ul className="text-lg">
        <li>Humaiyun Uddin</li>
        <li>Mridul Sharma</li>
        <li>Eisha Rizvi</li>
        <li>Sadhna Drall</li>
      </ul>
      <div className="text-xl font-bold">Contact Us</div>
      <p>Email: mesh@gmail.com</p>
      <p>Phone: 905-256-xxxx</p>
    </div>
  );
};

export default About;
