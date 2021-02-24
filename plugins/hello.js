export default (context) => {
  window.onNuxtReady(() => {
    // console.clear()


    if(process.client) {
      var isOnline = navigator.onLine
      if(!isOnline && context.route.fullPath !== "/disconnected") {
        context.redirect("/disconnected")
      }
      if(isOnline && context.route.fullPath === "/disconnected") {
        context.redirect("/")
      }
      window.ononline = () => {
        if(context.route.fullPath === "/disconnected"){
          context.redirect("/")
        }
      }
      window.onoffline = () => {
        context.redirect("/disconnected")
      }
    }

































//
//     console.log(`
//
//   email:"abdullahveliyev2005@gmail.com",
//   telegram:"https://t.me/Abdullah_V_2005",
//   twitter:"https://twitter.com/Abdullah_V_2005",
//   github:"https://github.com/Abdullah-V"
//
//     `)
//
//     console.log
//     (`
//
// ★░░░░░░░░░░░████░░░░░░░░░░░░░░░░░░░░★
// ★░░░░░░░░░███░██░░░░░░░░░░░░░░░░░░░░★
// ★░░░░░░░░░██░░░█░░░░░░░░░░░░░░░░░░░░★
// ★░░░░░░░░░██░░░██░░░░░░░░░░░░░░░░░░░★
// ★░░░░░░░░░░██░░░███░░░░░░░░░░░░░░░░░★
// ★░░░░░░░░░░░██░░░░██░░░░░░░░░░░░░░░░★
// ★░░░░░░░░░░░██░░░░░███░░░░░░░░░░░░░░★
// ★░░░░░░░░░░░░██░░░░░░██░░░░░░░░░░░░░★
// ★░░░░░░░███████░░░░░░░██░░░░░░░░░░░░★
// ★░░░░█████░░░░░░░░░░░░░░███░██░░░░░░★
// ★░░░██░░░░░████░░░░░░░░░░██████░░░░░★
// ★░░░██░░████░░███░░░░░░░░░░░░░██░░░░★
// ★░░░██░░░░░░░░███░░░░░░░░░░░░░██░░░░★
// ★░░░░██████████░███░░░░░░░░░░░██░░░░★
// ★░░░░██░░░░░░░░████░░░░░░░░░░░██░░░░★
// ★░░░░███████████░░██░░░░░░░░░░██░░░░★
// ★░░░░░░██░░░░░░░████░░░░░██████░░░░░★
// ★░░░░░░██████████░██░░░░███░██░░░░░░★
// ★░░░░░░░░░██░░░░░████░███░░░░░░░░░░░★
// ★░░░░░░░░░█████████████░░░░░░░░░░░░░★
// ★░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░★
//
//   `)
  })
}
