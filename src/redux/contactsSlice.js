import { createSlice } from "@reduxjs/toolkit";

const initialContactsState = {
    items: [
        { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
        { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
        { id: "id-3", name: "Eden Clements", number: "645-17-79" },
        { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ]
};



const contactSlice = createSlice({
  name: "contact",
  initialState:initialContactsState,
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});



export const { addContact, deleteContact } = contactSlice.actions;
export const selectContacts = state => state.contacts.items;

export default contactSlice.reducer;



















// import { createAction, createReducer, createSlice,  } from "@reduxjs/toolkit";



// const newReduser = createReducer({ value: 5 }, (builder) => {
//     builder
//       .addCase("balance/deposit", (state, action) => {})
//         .addCase("balance2/deposit2", (state, action) => {
//             state.value += action.payload; //this immer//
//       })
// })


// const slice = createSlice({ //this makes automaticaly actions//
//     name: "balance",
//     initialState: {
//         value:5,
//     },
//     reducers: {
//         deposite (state, action) {},
//         withdraw(state, action) {state.value += action.payload; },
//         a() { },
//     }
// })

// export const action = createAction("balance/deposit");
// export const action2 = createAction("balance2/deposit2");