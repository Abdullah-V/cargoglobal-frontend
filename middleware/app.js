export default function (context) {
  context.store.state.sideMenu = false
  if(process.client){
    window.scrollTo({
      top: 0,
      left: 0,
    })
  }
}
