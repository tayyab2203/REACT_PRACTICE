import React from "react";

const ContactCard = ({ name, email, profilePic }) => {
  return (
    <>
      <div className="flex flex-wrap gap-4 justify-center p-4">
        <div className="contact-card border-2 m-3 border-gray-200 shadow-lg flex flex-col items-center gap-2 p-4 bg-white rounded-xl w-64 hover:scale-105 transition-transform">
          <img
            src={profilePic}
            alt="Profile pic of the user"
            className="w-24 h-24 rounded-full object-cover border-2 border-teal-500"
          />
          <h5 className="text-lg font-semibold text-gray-800">{name}</h5>
          <p className="text-sm text-gray-600">{email}</p>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
