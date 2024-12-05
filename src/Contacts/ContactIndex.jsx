import React from "react";
import AllContacts from "./Contacts";
import FavoriteContacts from "./FavoriteContacts";
import Contact from "./Contacts";

function ContactIndex() {
  let contactList = [
    {
      id: 1,
      name: "D A",
      phone: "123",
      email: "Test@gmail.com",
      isFavorite: true,
    },
    {
      id: 2,
      name: "A V",
      phone: "123",
      email: "Test@gmail.com",
      isFavorite: true,
    },
    {
      id: 3,
      name: "B A",
      phone: "123",
      email: "Test@gmail.com",
      isFavorite: true,
    },
  ];

  return (
    <div className="row py-2">
      <div className="col-8 offset-2 row">
      <div className="text-center text-white-50">Customer Portal Team</div>
        {contactList.map((contact, index) => (
          <Contact contact={contact} key={index}></Contact>
        ))}
      </div>
      {/* 
    <div className="col-8 offset-2 row">
      <FavoriteContacts
        contacts={contactList}
        
      />
    </div> */}
    </div>
  );
}

export default ContactIndex;
