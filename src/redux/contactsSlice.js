import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: []
};

const contactSlice = createSlice({

    name: "contact",
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.items.push(action.payload);
        },
        deleteContact: (state, action) => {
            state.items = state.items.filter(contact => contact.id !== action.payload);
        }
    }
});



export const { addContact, deleteContact } = contactSlice.actions;
export const selectContacts = state => state.contacts.items;

export default contactSlice.reducers;



















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