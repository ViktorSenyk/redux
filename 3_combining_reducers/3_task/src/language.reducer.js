import { LANGUAGE_SET } from './language.actions';

const languageReducer = (state = 'en', action) => {
  switch (action.type) {
    case LANGUAGE_SET:
      return (state = action.payload.language);
    default:
      return state;
  }
};

export default languageReducer;
