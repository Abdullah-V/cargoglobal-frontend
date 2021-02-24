export default () => {
  window.$crisp = [];
  window.CRISP_WEBSITE_ID = "dec0a35e-a4e4-4e46-ae73-28152febc5db";

  (function() {
    var d = document;
    var s = d.createElement("script");

    s.src = "https://client.crisp.chat/l.js";
    s.async = 1;
    d.getElementsByTagName("head")[0].appendChild(s);
  })();
};
