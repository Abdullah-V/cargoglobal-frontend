import Vue from 'vue'

Vue.config.errorHandler = function(err, vm, info) {
  console.log(`
  Bir hata oldu.
  Lütfen iletişime geçin:

  email:"abdullahveliyev2005@gmail.com",
  telegram:"https://t.me/Abdullah_V_2005",
  twitter:"https://twitter.com/Abdullah_V_2005",
  github:"https://github.com/Abdullah-V"

  `)
}

Vue.config.warnHandler = function(msg, vm, trace) {
  console.log("Vue bir uyarı verdi")
}
