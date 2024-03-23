import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectVisibleContacts } from "../../redux/contactsSlice";

import styles from "./contact-list.module.css";

const ContactsList = () => {
  /*const contacts = useSelector(selectContacts);
  const filter = useSelector((state) => state.filters.name);
  //фільтрація контактів за значенням фільтру
  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(({ name }) => {
      const normalizedName = name.toLowerCase();
      return normalizedName.includes(normalizedFilter);
    });
    return filteredContacts;
  };
  const items = getFilteredContacts();*/

  //переробили фільтрацію за допомогою мемоїзованої функції (складного селектору, яка оголошена в contactsSlice-jsx)
  const items = useSelector(selectVisibleContacts);

  // відмальовуємо масив відфільтрованих контактів
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.id}>
          <Contact item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
