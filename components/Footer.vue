<template>
  <div class="footer-root">
    <div class="footer-section1">
      <h1
        style="
        background: linear-gradient(to right, var(--secondary-color), var(--primary-color));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        cursor: pointer;
        "
      >CARGOGLOBAL
      </h1>
      <p>
        Cargoglobal lojistik ilanlarının paylaşılması için sitedir.
        Kargo firmaları veya kargo taşıyan bireysel kişiler
        kargoyu taşıyacakları şehri,zamanı ve telefon numaralarını yazarak
        ücretsiz,kayıt gerekmeden ve hiç bir sınır olmadan <nuxt-link class="link" to="/new">ilan paylaşa bilirler</nuxt-link>.
        Kullanıcılar kendilerine uygun firmayı veya kişiyi bularak onlarla rahatlıkla
        iletişime geçe bilir. İlanlar,varış tarihlerinden bir gün sonra otomatik olarak silinecektir.
        Cargoglobal açık kaynaklı bir projedir ve
        <a target="_blank" class="link" href="https://github.com/Abdullah-V/cargoglobal-frontend">
          kodlarına github üzerinden erişilip katkı sağlana bilir
        </a>.
        Cargoglobal <a target="_blank" class="link" href="https://github.com/Abdullah-V/cargoglobal-frontend/blob/master/LICENSE">MIT lisansıyla</a> korunmaktadır.
        Görüş ve önerileriniz için iletişime geçe bilirsiniz. <br><br> <b>Abdullah Veliyev</b>
      </p>
    </div>



    <!--        İlan paylaşan kişilerin cargoglobal ile hiç bir ilişkisi yoktur.-->


    <div class="footer-section2">
      <h1 style="font-size: 35px">Sosyal</h1>
      <div class="social-menu">

      <a target="_blank" href="https://github.com/Abdullah-V">
          <div class="menu-item">
            <i class="fab fa-github"></i> Github
          </div>
      </a>

        <a target="_blank" href="https://t.me/Abdullah_V_2005">
          <div class="menu-item">
            <i class="fab fa-telegram"></i> Telegram
          </div>
        </a>

        <a target="_blank" href="https://twitter.com/Abdullah_V_2005">
          <div class="menu-item">
            <i class="fab fa-twitter-square"></i> Twitter
          </div>
        </a>

        <a target="_blank" href="mailto:abdullahveliyev2005@gmail.com">
          <div class="menu-item">
            <i class="fas fa-envelope"></i> Email
          </div>
        </a>

      </div>

    </div>





<!--    <div class="footer-section2">-->
<!--      <h1 style="font-size: 35px">Menu</h1>-->

<!--      <div class="social-menu">-->
<!--        <div class="menu-item">-->
<!--          <i class="fas fa-stream"></i> Tüm İlanlar-->
<!--        </div>-->

<!--        <div class="menu-item">-->
<!--          <i class="fas fa-user-alt"></i>-->
<!--          Benim İlanlarım-->
<!--        </div>-->

<!--        <div class="menu-item">-->
<!--          <i class="fas fa-heart"></i>-->
<!--          Favori ilanlar-->
<!--        </div>-->

<!--        <div class="menu-item">-->
<!--          <i class="fas fa-plus"></i>-->
<!--          İlan ekle-->
<!--        </div>-->
<!--      </div>-->

<!--    </div>-->


  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>

.footer-root {
  width: 100%;
  height: 500px;
  background: white;
  border-radius: 18px 18px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 40px;

  -webkit-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
}

[class*="footer-section"] {
  width: 40%;
  height: 100%;
}

.footer-section1 {
  /*background: gray;*/
  padding: 40px;
}

.footer-section1 p {
  line-height: 27px;
  font-size: 18px;
  margin: 15px 0;
  /*white-space: pre-wrap;*/
  /*white-space: -moz-pre-wrap;*/
}

.footer-section2 {
  /*background: gold;*/
  padding: 30px 0 0 80px;
}

.footer-section3 {
  /*background: #27AE60;*/
}

.social-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 20px;
}

.menu-item {
  width: 220px;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 0 0 10px;
  cursor: pointer;
  margin: 10px 0;
  font-size: 22px;
  border-radius: 4px;
  background: #eeeeee;
  transition: 100ms all;
  color: black;
}

.menu-item:hover {
  background: #e2e2e2;
}

.menu-item i {
  margin: 0 15px;
  font-size: 26px;
}

.footer-section2:nth-child(3) .menu-item {
  width: 280px;
}

@media only screen and (max-width: 1230px) {
  .footer-root {
    flex-direction: column;
    height: 980px;
    align-items: center;
  }
  [class*="footer-section"] {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
  .footer-section1 {
    padding: 0 20px;
  }
  .menu-item {
    width: 280px;
  }
}

</style>
