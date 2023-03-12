// import React, { useEffect, useState } from 'react';
// import { socket } from './socket';

// export const kidsroom = "Melis' Play Cloud";
// export const hallway = "Main Hallway";
// export const bathroom = "Diego's Delight";
// export const parentsroom = "Parent's Chambers";
// export const garage = "Boxes and Barels";
// export const livingroom = "Dad's Dungeon";
// export const kitchen = "COOKIE HEAVEN";

// export const MAP = {
//   [kidsroom]: [hallway, bathroom],
//   [bathroom]: [hallway, kidsroom, parentsroom],
//   [parentsroom]: [hallway, bathroom],
//   [hallway]: [parentsroom, bathroom, kidsroom, garage, livingroom, kitchen],
//   [garage]: [hallway],
//   [livingroom]: [hallway, kitchen],
//   [kitchen]: [livingroom, hallway],
// };

// export const OBJECTS = {
//   [kidsroom]: ["Backpack"],
//   [bathroom]: ["Stepstool"],
//   [parentsroom]: ["Slippers"],
//   [hallway]: ["Umbrella"],
//   [garage]: ["Baseball Mit"],
//   [livingroom]: ["Remote"],
//   [kitchen]: ["Cookie Jar"],
// };

// const GameEffects = () => {
//   const [location, setLocation] = useState("")
//   const [item, setItem] = useState("")

//   useEffect(() => {
//   // this fxn runs when GameEffects is called, and runs when location updates

//     console.log("player is currently in ", location)
//   }, [location])

// }


// export default GameEffects;