const ContactCollectionModule = require("./ContactCollection")
const ContactListModule = require("./ContactList")

const deleteContact = () => {
  console.log("delete button clicked", event.currentTarget.parentNode.id)
  const contactId = event.currentTarget.parentNode.id
  ContactCollectionModule.deleteContact(contactId)
  .then(() => {
    ContactListModule.buildContactList()
  })
}

const editContact = () => {
  const contactId = event.currentTarget.parentNode.id
}

const contact = Object.create({}, {
  "createContactComponent": {
    value: function(contact) {

      const contactSection = document.createElement("section")
      contactSection.id = `${contact.id}`

      for(key in contact){
        if(key === "id") {
          const deleteButton = document.createElement("button")
          deleteButton.textContent = "Delete"
          deleteButton.addEventListener("click", deleteContact)
          contactSection.appendChild(deleteButton)

          const editButton = document.createElement("button")
          editButton.textContent = "Delete"
          editButton.addEventListener("click", editContact)
          contactSection.appendChild(editButton)

        } else {
          const paraElement = document.createElement("p")
          paraElement.textContent = `${key}: ${contact[key]}`
          contactSection.appendChild(paraElement)
        }
      }

      return contactSection
    }
  }
})

module.exports = contact
