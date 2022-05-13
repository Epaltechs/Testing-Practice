const capitalizeFirstLetter = (string) => {
  return string.slice(0, 1).toUpperCase().concat(string.slice(1, string.length));
};
export default capitalizeFirstLetter;

// if (capitalize({
//     properties: [
//       { name: 'candy', sex: 'male', hobby: 'hockey' }
//     ]
//   }) !== capital) {
//     throw new Error('Check fail: Capital')
//   }

//   function capitalize(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }
  