import React from "react";
import ContactCard from "../ContactCard/ContactCard";
import profile1 from "../../assets/profile1.jpg"

const ContactTab = () => {
    const contact = [
        {
            id: 1,
            name: "Tayyab Sajjad",
            email: "tayyabsajjad4679@gmail.com",
            profilePic: profile1

        },
        {
            id: 2,
            name: "Fazal Abbas",
            email: "tayyabsajjad4679@gmail.com",
            profilePic: profile1
        },
        {
            id: 3,
            name: "Kamil",
            email: "tayyabsajjad4679@gmail.com",
            profilePic: profile1
        },
        {
            id: 4,
            name: "Irfan",
            email: "tayyabsajjad4679@gmail.com",
            profilePic: profile1
        },
        {
            id: 5,
            name: "Shehryar",
            email: "tayyabsajjad4679@gmail.com",
            profilePic: profile1
        }
    ]
  return (
    <>
      {
        contact.map(contact =>(
            <ContactCard 
            name={contact.name}
            email={contact.email}
            profilePic={contact.profilePic}
            />
        ))
      }
    </>
  );
};

export default ContactTab;
