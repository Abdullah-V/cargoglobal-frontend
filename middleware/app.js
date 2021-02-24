export default function (context) {
  context.store.state.sideMenu = false
  if(process.client){
    window.scrollTo({
      top: 0,
      left: 0,
    })
    var isOnline = navigator.onLine
    if(!isOnline && context.route.fullPath !== "/disconnected") {
      context.redirect("/disconnected")
    }
    if(isOnline && context.route.fullPath === "/disconnected") {
      context.redirect("/")
    }
  }














  console.clear()
  // console.log("API_URL from process.env: ")
  // console.log(process.env.API_URL)
  // console.log("API_KEY from process.env: ")
  // console.log(process.env.API_KEY)

  // console.log(process.env)
  console.log(`

  email:"abdullahveliyev2005@gmail.com",
  telegram:"https://t.me/Abdullah_V_2005",
  twitter:"https://twitter.com/Abdullah_V_2005",
  github:"https://github.com/Abdullah-V"

    `)

  console.log
  (`

★░░░░░░░░░░░████░░░░░░░░░░░░░░░░░░░░★
★░░░░░░░░░███░██░░░░░░░░░░░░░░░░░░░░★
★░░░░░░░░░██░░░█░░░░░░░░░░░░░░░░░░░░★
★░░░░░░░░░██░░░██░░░░░░░░░░░░░░░░░░░★
★░░░░░░░░░░██░░░███░░░░░░░░░░░░░░░░░★
★░░░░░░░░░░░██░░░░██░░░░░░░░░░░░░░░░★
★░░░░░░░░░░░██░░░░░███░░░░░░░░░░░░░░★
★░░░░░░░░░░░░██░░░░░░██░░░░░░░░░░░░░★
★░░░░░░░███████░░░░░░░██░░░░░░░░░░░░★
★░░░░█████░░░░░░░░░░░░░░███░██░░░░░░★
★░░░██░░░░░████░░░░░░░░░░██████░░░░░★
★░░░██░░████░░███░░░░░░░░░░░░░██░░░░★
★░░░██░░░░░░░░███░░░░░░░░░░░░░██░░░░★
★░░░░██████████░███░░░░░░░░░░░██░░░░★
★░░░░██░░░░░░░░████░░░░░░░░░░░██░░░░★
★░░░░███████████░░██░░░░░░░░░░██░░░░★
★░░░░░░██░░░░░░░████░░░░░██████░░░░░★
★░░░░░░██████████░██░░░░███░██░░░░░░★
★░░░░░░░░░██░░░░░████░███░░░░░░░░░░░★
★░░░░░░░░░█████████████░░░░░░░░░░░░░★
★░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░★

  `)












}
