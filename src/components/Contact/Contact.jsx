import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

import styles from "./contact.module.css";

const Contact = ({ item }) => {
  const dispatch = useDispatch();

  //відмальовуємо картку 1 контакту
  return (
    <div className={styles.li}>
      {item.name}: {item.number}
      <button
        className={styles.liButton}
        //видадення контакту (dispatch відправляє результат операції deleteContact для обробки в extraRedusers в файлі contactsSlice.js)
        onClick={() => {
          dispatch(deleteContact(item.id));
        }}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};
export default Contact;
