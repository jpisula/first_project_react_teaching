import classNames from 'classnames';
import styles from './SearchForm.module.scss';
import { useState } from 'react';
import { getCard } from '../../fetches/getCard';
import Select from 'react-select';

const SearchForm = (props) => {
  const { setCard } = props;
  const [formData, setFormData] = useState({ searchType: 'fuzzy' });

  const selectOptions = [
    { value: 'fuzzy', label: 'fuzzy' },
    { value: 'exact', label: 'exact' },
    { value: 'RANDOM_CARD', label: 'random card' }
  ];

  const submitForm = async (e) => {
    e.preventDefault();
    // const responseBody = {};

    // const formData = new FormData(e.currentTarget);
    // formData.forEach((value, property) => (responseBody[property] = value));
    // console.log(responseBody);

    const card = await getCard(formData.searchType, formData.cardName);
    setCard(card);
  };

  return (
    <form
      onSubmit={submitForm}
      className={classNames('container', styles.form)}
    >
      <div className={styles.inputs}>
        <label htmlFor='cardName'>
          Card name:
          <input
            className={styles.input}
            id='cardName'
            name='cardName'
            type='text'
            onChange={(e) => {
              setFormData({ ...formData, cardName: e.currentTarget.value });
            }}
          />
        </label>

        <label htmlFor='searchType'>
          Search type:
          <Select
            id='searchType'
            className={styles.select}
            defaultValue={formData.searchType}
            onChange={(e) => {
              setFormData({ ...formData, searchType: e.value });
            }}
            options={selectOptions}
            styles={{
              control: (base) => ({
                ...base,
                height: 50,
                minHeight: 50
              })
            }}
          />
        </label>
      </div>
      <button type='submit' className={styles.button}>
        search card
      </button>
    </form>
  );
};

export default SearchForm;
