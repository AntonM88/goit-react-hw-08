import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsError, selectIsLoading } from "../../redux/contacts/selectors";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { SearchBox } from "../../components/SearchBox/SearchBox";
import { ContactList } from "../../components/ContactList/ContactList";

export const HomePage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      {isLoading && (
        <span className="loading loading-spinner text-primary absolute right-5 top-5"></span>
      )}
      {/* <h1 className="title">Phonebook</h1> */}
      <ContactForm />
      <SearchBox />
      <ContactList />
      {isError && <p>Something went wrong!</p>}
    </div>
  );
};
