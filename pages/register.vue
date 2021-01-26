<template>
  <div class="login-root">
    <div class="login-box">
      <h1 class="login-text">Kayıt ol</h1>
      <div class="fields">
        <label for="f1" class="one-field">
          <i class="fas fa-user"></i>
          <input id="f1" placeholder="İsminiz" type="text">
        </label>

        <label for="f2" class="one-field">
          <i class="fas fa-lock"></i>
          <input id="f2" placeholder="Parolanız" type="password">
        </label>

        <label for="f3" class="one-field">
          <i class="fas fa-lock"></i>
          <input id="f3" placeholder="Parolanız(tekrar)" type="password">
        </label>


          <button class="register-btn primary-button">Kayıt ol</button>

        <h3 style="margin-top: 20px">Hesabınız varmı? <nuxt-link to="/login">Giriş yapın!</nuxt-link></h3>

      </div>
    </div>

    <img class="login-illstr" src="../static/illustrations/register.png" alt="login illustration">
  </div>
</template>

<script>
export default {}
</script>

<style scoped>

.login-root{
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
}
.login-illstr{
  width: 50%;
  height: 70%;
}

.login-box{
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.fields{
  width: 100%;
  height: 54%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.one-field{
  width: 50%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--primary-color);
  margin: 15px 0px;
  padding: 10px;
  border-radius: 5px;
}

.login-box input{
  width: 90%;
  height: 100%;
  font-size: 18px;
  padding: 0px 20px;
  border: 0px;
}

.login-box i{
  font-size: 25px;
  color: var(--primary-color);
  margin-left: 5px;
}

.login-text{
  font-size: 35px;
  margin-bottom: 20px;
}

.register-btn{
  width: 50%;
  height: 60px;
  font-size: 21px;
  border-radius: 5px;
  padding: 15px;
  margin: 10px 0px;
}


@media only screen and (max-width: 885px) {
  .one-field{
    width: 70%;
  }
  .register-btn{
    width: 70%;
  }
}


@media only screen and (max-width: 543px) {
  .login-root{
    flex-direction: column;
    margin-top: 50px;
  }
  .login-box{
    width: 100%;
  }
  .login-text{
    margin-bottom: 50px;
  }
  .login-illstr{
    width: 100%;
  }
}

</style>
