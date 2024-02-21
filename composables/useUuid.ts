// 产生一个随机的uuid
// export const uuid = () => {
//   return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
//     // eslint-disable-next-line no-mixed-operators
//     var r = (Math.random() * 16) | 0,
//       // eslint-disable-next-line no-mixed-operators
//       v = c == "x" ? r : (r & 0x3) | 0x8
//     return v.toString(16)
//   })
// }

export const useUUID = () => {
  const uuid = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        // eslint-disable-next-line no-mixed-operators
        var r = (Math.random() * 16) | 0,
          // eslint-disable-next-line no-mixed-operators
          v = c == "x" ? r : (r & 0x3) | 0x8
        return v.toString(16)
      }
    )
  }
  return { uuid }
}
