import createStore from "redux-zero";
const BOARDS = [
    {
    name: "tes board",
    cards:[ {
            name: "lp",            
            todo:'todo'
        }]
  },
  {
    name: "1tes board",
    cards:[ {
            name: "tes board",            
            todo:'todo'
        }]
  },{
    name: "2tes board",
    cards:[ {
            name: "tes board",            
            todo:'todo'
        }]
  }
];

const initialState = {
  boards: BOARDS,
  selectItem : -1,
  selectCard: -1,
};

const store = createStore(initialState);
export default store;
