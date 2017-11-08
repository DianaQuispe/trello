
 import store from './store'

 export const selectBoard = (index) => {
    console.log(index);
    const selectBoard = index;
    store.setState({
        selectedItem:selectBoard
    })
 }
 export const selectCard = (index) => {
     console.log(index);
     const selectCard = index;
     store.setState({
    
     })
 }
// export const playAction = () => {
//    let selectedSong = store.getState().selectedSong
//    if (selectedSong == -1 )
//       selectedSong = 0

//    store.setState({
//       selectedSong : selectedSong
//    })
// }

// export const nextAction = () => {

//    let selectedSong = store.getState().selectedSong + 1
//    if (selectedSong == store.getState().songs.length )
//       selectedSong = 0

//    store.setState({
//       selectedSong : selectedSong
//    })
// }

// export const stopAction = () => {
//    store.setState({
//       selectedSong : -1
//    })
// }