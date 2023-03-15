import { createSlice } from "@reduxjs/toolkit";

const contactsInitialState = [
  { id: "0", name: 'Test contact 1', number: '8988-9999' },
  { id: "1", name: 'Test contact 2', number: '8542-9999' },
  { id: "2", name: 'Test contact 3', number: '5568-9999' },
  { id: "3", name: 'Test contact 4', number: '5567-9999' },
];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.unshift(action.payload);
      },
      prepare: (contact) => {
        return {
          payload: {
            id: String(+(new Date())) + Math.round(Math.random() * 100),
            ...contact
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(e => e.id !== action.payload);
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
