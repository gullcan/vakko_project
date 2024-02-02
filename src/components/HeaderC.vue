
<script setup lang="ts">


defineProps<{
  msg: string
}>()
</script>


<template>



  <header class="" id="site-header">

    <div class="header se-item se-ready" data-se-anim="header">
      <div class="hdr-menu">
        <button class="btn-menu" aria-label="Menu">
          
          <font-awesome-icon class="icon" :icon="['fas', 'bars']" />
        
        </button>
      </div>
      <div class="hdr-logo"><a class="logo" href="/"><img style="opacity: 1;" class="logo-dark"
            src="https://fbfad05d.cdn.akinoncloud.com/static_omnishop/shopi-28/img/logo2.svg" alt="Vakko"><img
            class="logo-light" src="https://fbfad05d.cdn.akinoncloud.com/static_omnishop/shopi-28/img/logo-w.svg"
            alt="Vakko"></a></div>
      <div class="hdr-links">
        <button class="hdr-link btn-search" aria-label="Ara">

          <font-awesome-icon  class="icon" :icon="['fas', 'magnifying-glass']" />

        </button>
        <a class="hdr-link btn-account d" href="/users/login/" aria-label="Hesabim" rel="nofollow" title="hesabim">
         <font-awesome-icon class="icon" :icon="['fas', 'user']" />
        </a>
        <a class="hdr-link btn-cart js-menu-basket" title="sepet" href="/baskets/basket/" aria-label="Sepet"
          rel="nofollow">
          <font-awesome-icon class="icon"  :icon="['fas', 'basket-shopping']" />
          <span class="basket-total-quantity">0</span>
        </a>
      </div>
    </div>
    <div id="main-menu" class="">
      <div class="mmc-header">
        <button class="mmc-back" type="button" aria-label="geri">
          <font-awesome-icon class="icon"  :icon="['fas', 'arrow-left']" />
        </button>
        <div class="mmc-user">
          <a class="mmc-login" type="button" href="/account/" rel="nofollow">
            <font-awesome-icon class="icon" :icon="['fas', 'user']" />

            <span>GİRİŞ YAP</span>

          </a>
        </div>
        <button class="mmc-close" type="button" aria-label="kapat">
          <font-awesome-icon class="icon" :icon="['fas', 'xmark']" />
        </button>
      </div>
      <div class="mmc-menu">
        <div class="mmc-categories">
          <div class="mmc-lv1">
            <a class="mmc-lv1-link inline-flex sm:hidden" title="KADIN"><span>KADIN</span></a>
            <a href="/kadin/" class="hidden mmc-lv1-link sm:block" title="KADIN"><span>KADIN</span></a>
            <div class="mmc-lv1-blocks ">
              <div class="block-wrapper">
                <div class="mmc-lv1-block1 mmc-lv1-column mmc-lv1-block1-e171b181-28ff-491c-944d-c6815c549d60"
                  data-type="connected">
                  <div class="mmc-lv2 block sm:hidden">
                    <a class=" clickable-mmc-lv2" href="/kadin/" title="TÜMÜ"><span>TÜMÜ</span></a>
                  </div>
                  <div class="left-section">
                    <div class="mmc-lv2  ">
                      <a class="mmc-lv2-link inline-flex sm:hidden " title="GİYİM"><span>GİYİM</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="GİYİM" href="#"><span>GİYİM</span></a>
                      <div class="mmc-lv2-sub">
                        <div style="margin-bottom:10px" class="mmc-lv3 inline-flex sm:hidden">
                          <a href="#" class="mmc-lv3-link" title="TÜMÜ"><span>TÜMÜ</span></a>
                        </div>
                        <ul class="ul-clear">
                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kadin/dis-giyim/" title="Mont &amp; Kaban">Mont &amp; Kaban</a></li>
                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;" href="/kadin/ceket/"
                              title="Ceket">Ceket</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kadin/elbise-tulum/" title="Elbise &amp; Tulum">Elbise &amp; Tulum</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;" href="/kadin/triko/"
                              title="Triko">Triko</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kadin/gomlek-bluz/" title="Gömlek &amp; Bluz">Gömlek &amp; Bluz</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kadin/pantolon/" title="Pantolon">Pantolon</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;" href="/kadin/etek/"
                              title="Etek">Etek</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kadin/t-shirt-sweatshirt/" title="T-Shirt &amp; Sweatshirt">T-Shirt &amp;
                              Sweatshirt</a></li>


                        </ul>
                      </div>

                    </div>

                    <div class="mmc-lv2  ">
                      <a class="mmc-lv2-link inline-flex sm:hidden " title="AKSESUAR"><span>AKSESUAR</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="AKSESUAR"
                        href="/kadin/aksesuar/"><span>AKSESUAR</span></a>


                      <div class="mmc-lv2-sub">

                        <div style="margin-bottom:10px" class="mmc-lv3 inline-flex sm:hidden">
                          <a href="/kadin/aksesuar/" class="mmc-lv3-link" title="TÜMÜ"><span>TÜMÜ</span></a>
                        </div>

                        <ul class="ul-clear">


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;" href="/kadin/taki/"
                              title="Takı">Takı</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;" href="/kadin/sapka/"
                              title="Şapka">Şapka</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;" href="/kadin/kemer/"
                              title="Kemer">Kemer</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kadin/atki-bere/" title="Atkı &amp; Bere">Atkı &amp; Bere</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kadin/eldiven/" title="Eldiven">Eldiven</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kadin/aksesuar-sal/" title="Şal">Şal</a></li>


                        </ul>
                      </div>

                    </div>

                    <div class="mmc-lv2  ">
                      <a class="mmc-lv2-link inline-flex sm:hidden " title="EŞARP &amp; ŞAL KOLEKSİYONU"><span>EŞARP &amp;
                          ŞAL KOLEKSİYONU</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="EŞARP &amp; ŞAL KOLEKSİYONU"
                        href="/kadin/esarp-sal-koleksiyonu/"><span>EŞARP &amp; ŞAL KOLEKSİYONU</span></a>


                      <div class="mmc-lv2-sub">

                        <div style="margin-bottom:10px" class="mmc-lv3 inline-flex sm:hidden">
                          <a href="/kadin/esarp-sal-koleksiyonu/" class="mmc-lv3-link" title="TÜMÜ"><span>TÜMÜ</span></a>
                        </div>

                        <ul class="ul-clear">


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;" href="/kadin/esarp/"
                              title="Eşarp">Eşarp</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;" href="/kadin/sal/"
                              title="Şal">Şal</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kadin/fular-gavros-bandana/" title="Fular &amp; Gavroş &amp; Bandana">Fular &amp;
                              Gavroş &amp; Bandana</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/esarp/90x90-twill-p868139096165/" title="Kendi Eşarbını Tasarla">Kendi Eşarbını
                              Tasarla</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/isme-ozel-esarp/" title="İsme Özel Eşarp">İsme Özel Eşarp</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/cagdas-turk-sanatcilari-koleksiyonu/"
                              title="Çağdaş Türk Sanatçıları Koleksiyonu">Çağdaş Türk Sanatçıları Koleksiyonu</a></li>


                        </ul>
                      </div>

                    </div>

                  </div>
                  <div class="right-section">

                    <div class="mmc-lv2  right-block">
                      <a class="mmc-lv2-link inline-flex sm:hidden only-one-item" title="VAKKO KADIN  23-24 FW"
                        href="/kadin/lookbook/"><span>VAKKO KADIN 23-24 FW</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="VAKKO KADIN  23-24 FW"
                        href="/kadin/lookbook/"><span>VAKKO KADIN 23-24 FW</span></a>


                    </div>

                  </div>






                </div>
                <div class="bottom-block">


                  <div class="mmc-lv2">
                    <a class="mmc-lv2-link inline-flex sm:hidden only-one-item"
                      title="Sonbahar Kış Ürünlerinde %40'a Varan İndirim"
                      href="/sonbahar-kis-indirimi/?attributes_integration_sap_ZZGNDR=K&amp;attributes_integration_sap_BRAND=1105&amp;attributes_integration_sap_BRAND=1243&amp;attributes_integration_sap_BRAND=1386&amp;attributes_integration_sap_BRAND=1428&amp;attributes_integration_sap_BRAND=1409&amp;attributes_integration_sap_BRAND=1715&amp;attributes_integration_sap_BRAND=1957&amp;attributes_integration_sap_BRAND=2036&amp;attributes_integration_sap_BRAND=2134&amp;attributes_integration_sap_BRAND=2196&amp;attributes_integration_sap_BRAND=1001"><span>Sonbahar
                        Kış Ürünlerinde %40'a Varan İndirim</span></a>
                    <a class="mmc-lv2-link-desktop sm:inline-flex hidden"
                      title="Sonbahar Kış Ürünlerinde %40'a Varan İndirim"
                      href="/sonbahar-kis-indirimi/?attributes_integration_sap_ZZGNDR=K&amp;attributes_integration_sap_BRAND=1105&amp;attributes_integration_sap_BRAND=1243&amp;attributes_integration_sap_BRAND=1386&amp;attributes_integration_sap_BRAND=1428&amp;attributes_integration_sap_BRAND=1409&amp;attributes_integration_sap_BRAND=1715&amp;attributes_integration_sap_BRAND=1957&amp;attributes_integration_sap_BRAND=2036&amp;attributes_integration_sap_BRAND=2134&amp;attributes_integration_sap_BRAND=2196&amp;attributes_integration_sap_BRAND=1001"><span>Sonbahar
                        Kış Ürünlerinde %40'a Varan İndirim</span></a>


                  </div>

                </div>
              </div>





              <div class="mmc-lv1-block2">
                <a href="/kadin/giyim/">
                  <figure class="lazy entered loaded bg-loaded exited"
                    data-bg="https://vakko.akinoncdn.com/cms/2023/11/30/0935a372-120a-43b1-b130-a41a4643d806_size540x960_cropCenter.jpg"
                    data-ll-status="entered"
                    style="background-image: url(&quot;https://vakko.akinoncdn.com/cms/2023/11/30/0935a372-120a-43b1-b130-a41a4643d806_size540x960_cropCenter.jpg&quot;);">
                  </figure>
                </a>

              </div>


            </div>

          </div>































          <div class="mmc-lv1">


            <a class="mmc-lv1-link inline-flex sm:hidden" title="ERKEK"><span>ERKEK</span></a>
            <a href="/erkek/" class="hidden mmc-lv1-link sm:block" title="ERKEK"><span>ERKEK</span></a>



            <div class="mmc-lv1-blocks ">


              <div class="block-wrapper">
                <div class="mmc-lv1-block1 mmc-lv1-column mmc-lv1-block1-1ab42ab4-886f-4626-a5de-bd7d6852a34f"
                  data-type="connected">

                  <div class="mmc-lv2 block sm:hidden">
                    <a class=" clickable-mmc-lv2" href="/erkek/" title="TÜMÜ"><span>TÜMÜ</span></a>
                  </div>

                  <div class="left-section">

                    <div class="mmc-lv2  ">
                      <a class="mmc-lv2-link inline-flex sm:hidden " title="GİYİM"><span>GİYİM</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="GİYİM" href="#"><span>GİYİM</span></a>


                      <div class="mmc-lv2-sub">

                        <div style="margin-bottom:10px" class="mmc-lv3 inline-flex sm:hidden">
                          <a href="#" class="mmc-lv3-link" title="TÜMÜ"><span>TÜMÜ</span></a>
                        </div>

                        <ul class="ul-clear">


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/erkek/dis-giyim/" title="Mont &amp; Kaban">Mont &amp; Kaban</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;" href="/erkek/ceket/"
                              title="Ceket">Ceket</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/erkek/takim-elbise/" title="Takım Elbise">Takım Elbise</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;" href="/erkek/smokin/"
                              title="Smokin">Smokin</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;" href="/erkek/gomlek/"
                              title="Gömlek">Gömlek</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;" href="/erkek/triko/"
                              title="Triko">Triko</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/erkek/pantolon/" title="Pantolon">Pantolon</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/erkek/t-shirt-sweatshirt/" title="T-shirt &amp; Sweatshirt">T-shirt &amp;
                              Sweatshirt</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/erkek/ic-giyim/" title="İç Giyim">İç Giyim</a></li>


                        </ul>
                      </div>

                    </div>

                    <div class="mmc-lv2  ">
                      <a class="mmc-lv2-link inline-flex sm:hidden only-one-item" title="AKSESUAR"
                        href="/erkek/aksesuar/"><span>AKSESUAR</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="AKSESUAR"
                        href="/erkek/aksesuar/"><span>AKSESUAR</span></a>


                    </div>

                  </div>
                  <div class="right-section">

                    <div class="mmc-lv2  right-block">
                      <a class="mmc-lv2-link inline-flex sm:hidden only-one-item" title="VAKKO ERKEK 23-24 FW"
                        href="/erkek/lookbook/"><span>VAKKO ERKEK 23-24 FW</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="VAKKO ERKEK 23-24 FW"
                        href="/erkek/lookbook/"><span>VAKKO ERKEK 23-24 FW</span></a>


                    </div>

                  </div>






                </div>
                <div class="bottom-block">


                  <div class="mmc-lv2">
                    <a class="mmc-lv2-link inline-flex sm:hidden only-one-item"
                      title="Sonbahar Kış Ürünlerinde %40'a Varan İndirim"
                      href="/sonbahar-kis-indirimi/?attributes_integration_sap_ZZGNDR=E"><span>Sonbahar Kış Ürünlerinde
                        %40'a Varan İndirim</span></a>
                    <a class="mmc-lv2-link-desktop sm:inline-flex hidden"
                      title="Sonbahar Kış Ürünlerinde %40'a Varan İndirim"
                      href="/sonbahar-kis-indirimi/?attributes_integration_sap_ZZGNDR=E"><span>Sonbahar Kış Ürünlerinde
                        %40'a Varan İndirim</span></a>


                  </div>

                </div>
              </div>





              <div class="mmc-lv1-block2">
                <a href="/erkek/giyim/">
                  <figure class="lazy entered loaded bg-loaded"
                    data-bg="https://vakko.akinoncdn.com/cms/2023/08/27/a7748104-d78d-4518-b95c-eb1107d5dd0c_size540x960_cropCenter.jpg"
                    data-ll-status="loaded"
                    style="background-image: url(&quot;https://vakko.akinoncdn.com/cms/2023/08/27/a7748104-d78d-4518-b95c-eb1107d5dd0c_size540x960_cropCenter.jpg&quot;);">
                  </figure>
                </a>

              </div>


            </div>

          </div>

























          <div class="mmc-lv1">


            <a class="mmc-lv1-link inline-flex sm:hidden" title="SHOES&amp;BAGS"><span>SHOES&amp;BAGS</span></a>
            <a class="hidden mmc-lv1-link sm:block" title="SHOES&amp;BAGS"><span>SHOES&amp;BAGS</span></a>



            <div class="mmc-lv1-blocks ">


              <div class="block-wrapper">
                <div class="mmc-lv1-block1 mmc-lv1-column mmc-lv1-block1-fe7cb67f-a7e6-491e-88fb-e6387fdc6be6"
                  data-type="connected">

                  <div class="mmc-lv2 block sm:hidden">
                    <a class=" clickable-mmc-lv2" href="#" title="TÜMÜ"><span>TÜMÜ</span></a>
                  </div>

                  <div class="left-section">

                    <div class="mmc-lv2  ">
                      <a class="mmc-lv2-link inline-flex sm:hidden " title="KADIN"><span>KADIN</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="KADIN"
                        href="/ayakkabi-canta/kadin/"><span>KADIN</span></a>


                      <div class="mmc-lv2-sub">

                        <div style="margin-bottom:10px" class="mmc-lv3 inline-flex sm:hidden">
                          <a href="/ayakkabi-canta/kadin/" class="mmc-lv3-link" title="TÜMÜ"><span>TÜMÜ</span></a>
                        </div>

                        <ul class="ul-clear">


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/ayakkabi-canta/kadin-ayakkabi/" title="Ayakkabı">Ayakkabı</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/ayakkabi-canta/kadin-canta/" title="Çanta">Çanta</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/ayakkabi-canta/kadin-cuzdan/" title="Cüzdan">Cüzdan</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/v2k-designers/kadin-ayakkabi-canta/" title="V2K Designers Ayakkabı &amp; Çanta">V2K
                              Designers Ayakkabı &amp; Çanta</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/ayakkabi-canta/kadin-monogram/" title="Monogram">Monogram</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/ayakkabi-canta/kadin-monogram-initials-koleksiyonu/"
                              title="Monogram Initials Koleksiyonu">Monogram Initials Koleksiyonu</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/monogram-online-ozel-koleksiyonu/" title="Monogram Online Özel">Monogram Online
                              Özel</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/monogram-monogram-exclusive/" title="Monogram Exclusive">Monogram Exclusive</a></li>


                        </ul>
                      </div>

                    </div>

                  </div>
                  <div class="right-section">

                    <div class="mmc-lv2  right-block">
                      <a class="mmc-lv2-link inline-flex sm:hidden " title="ERKEK"><span>ERKEK</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="ERKEK"
                        href="/ayakkabi-canta/erkek/"><span>ERKEK</span></a>


                      <div class="mmc-lv2-sub">

                        <div style="margin-bottom:10px" class="mmc-lv3 inline-flex sm:hidden">
                          <a href="/ayakkabi-canta/erkek/" class="mmc-lv3-link" title="TÜMÜ"><span>TÜMÜ</span></a>
                        </div>

                        <ul class="ul-clear">


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/ayakkabi-canta/erkek-ayakkabi/" title="Ayakkabı">Ayakkabı</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/ayakkabi-canta/erkek-canta/" title="Çanta">Çanta</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/ayakkabi-canta/erkek-monogram/" title="Monogram">Monogram</a></li>


                        </ul>
                      </div>

                    </div>

                  </div>






                </div>
                <div class="bottom-block">


                  <div class="mmc-lv2">
                    <a class="mmc-lv2-link inline-flex sm:hidden only-one-item"
                      title="Sonbahar Kış Ürünlerinde %40'a Varan İndirim"
                      href="/sonbahar-kis-indirimi/?attributes_integration_sap_MATKL9D=044&amp;attributes_integration_sap_MATKL9D=147&amp;attributes_integration_sap_MATKL9D=150&amp;attributes_integration_sap_MATKL9D=047&amp;attributes_integration_sap_MATKL9D=148&amp;attributes_integration_sap_MATKL9D=046"><span>Sonbahar
                        Kış Ürünlerinde %40'a Varan İndirim</span></a>
                    <a class="mmc-lv2-link-desktop sm:inline-flex hidden"
                      title="Sonbahar Kış Ürünlerinde %40'a Varan İndirim"
                      href="/sonbahar-kis-indirimi/?attributes_integration_sap_MATKL9D=044&amp;attributes_integration_sap_MATKL9D=147&amp;attributes_integration_sap_MATKL9D=150&amp;attributes_integration_sap_MATKL9D=047&amp;attributes_integration_sap_MATKL9D=148&amp;attributes_integration_sap_MATKL9D=046"><span>Sonbahar
                        Kış Ürünlerinde %40'a Varan İndirim</span></a>


                  </div>

                </div>
              </div>





              <div class="mmc-lv1-block2">
                <a href="/ayakkabi-canta/kadin/">
                  <figure class="lazy entered loaded bg-loaded"
                    data-bg="https://vakko.akinoncdn.com/cms/2023/08/27/ad743234-4f79-409e-9d54-399e9943d280_size540x960_cropCenter.jpg"
                    data-ll-status="loaded"
                    style="background-image: url(&quot;https://vakko.akinoncdn.com/cms/2023/08/27/ad743234-4f79-409e-9d54-399e9943d280_size540x960_cropCenter.jpg&quot;);">
                  </figure>
                </a>

              </div>


            </div>

          </div>













          <div class="mmc-lv1">


            <a class="mmc-lv1-link inline-flex sm:hidden" title="COUTURE"><span>COUTURE</span></a>
            <a href="/couture/" class="hidden mmc-lv1-link sm:block" title="COUTURE"><span>COUTURE</span></a>



            <div class="mmc-lv1-blocks ">


              <div class="block-wrapper">
                <div class="mmc-lv1-block1 mmc-lv1-column mmc-lv1-block1-c2085d6f-c6d1-4593-93e8-42362357b575"
                  data-type="connected">

                  <div class="mmc-lv2 block sm:hidden">
                    <a class=" clickable-mmc-lv2" href="/couture/" title="TÜMÜ"><span>TÜMÜ</span></a>
                  </div>


                  <div class="mmc-lv2 ">
                    <a class="mmc-lv2-link inline-flex sm:hidden " title="GİYİM"><span>GİYİM</span></a>
                    <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="GİYİM"
                      href="/couture/couture-koleksiyonu/"><span>GİYİM</span></a>


                    <div class="mmc-lv2-sub">

                      <div style="margin-bottom:10px" class="mmc-lv3 inline-flex sm:hidden">
                        <a href="/couture/couture-koleksiyonu/" class="mmc-lv3-link" title="TÜMÜ"><span>TÜMÜ</span></a>
                      </div>

                      <ul class="ul-clear">


                        <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                            href="/couture/couture-koleksiyonu/" title="Elbise">Elbise</a></li>


                        <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;" href="/kokteyl-elbise/"
                            title="Kokteyl Elbise">Kokteyl Elbise</a></li>


                      </ul>
                    </div>

                  </div>







                </div>
                <div class="bottom-block">


                </div>
              </div>





              <div class="mmc-lv1-block2">
                <a href="/couture/couture-koleksiyonu/">
                  <figure class="lazy entered loaded bg-loaded"
                    data-bg="https://vakko.akinoncdn.com/cms/2023/09/19/d6cb2f2e-682e-48f8-8b63-fdf68458c56a_size540x960_cropCenter.jpg"
                    data-ll-status="loaded"
                    style="background-image: url(&quot;https://vakko.akinoncdn.com/cms/2023/09/19/d6cb2f2e-682e-48f8-8b63-fdf68458c56a_size540x960_cropCenter.jpg&quot;);">
                  </figure>
                </a>

              </div>


            </div>

          </div>







          <div class="mmc-lv1">


            <a class="hidden mmc-lv1-link sm:block" href="/wedding/" title="WEDDING"><span>WEDDING</span></a>
            <a class="mmc-lv1-direct-link inline-flex sm:hidden" href="/wedding/" title="WEDDING"><span>WEDDING</span></a>


            <div class="mmc-lv1-blocks nosub">




              <div class="mmc-lv1-block2">
                <a href="/wedding/">
                  <figure class="lazy entered loaded bg-loaded"
                    data-bg="https://vakko.akinoncdn.com/cms/2023/08/27/58ee4a8e-bb9b-4b64-adec-9edf773854d1_size540x960_cropCenter.jpg"
                    data-ll-status="loaded"
                    style="background-image: url(&quot;https://vakko.akinoncdn.com/cms/2023/08/27/58ee4a8e-bb9b-4b64-adec-9edf773854d1_size540x960_cropCenter.jpg&quot;);">
                  </figure>
                </a>

              </div>


            </div>

          </div>

























          <div class="mmc-lv1">


            <a class="mmc-lv1-link inline-flex sm:hidden" title="V2K DESIGNERS"><span>V2K DESIGNERS</span></a>
            <a href="/v2k-designers/" class="hidden mmc-lv1-link sm:block" title="V2K DESIGNERS"><span>V2K
                DESIGNERS</span></a>



            <div class="mmc-lv1-blocks ">


              <div class="block-wrapper">
                <div class="mmc-lv1-block1 mmc-lv1-column mmc-lv1-block1-9eb8b899-3e65-4188-92e4-a21195544918"
                  data-type="connected">

                  <div class="mmc-lv2 block sm:hidden">
                    <a class=" clickable-mmc-lv2" href="/v2k-designers/" title="TÜMÜ"><span>TÜMÜ</span></a>
                  </div>

                  <div class="left-section">

                    <div class="mmc-lv2  ">
                      <a class="mmc-lv2-link inline-flex sm:hidden " title="KADIN"><span>KADIN</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="KADIN"
                        href="/v2k-designers/kadin/"><span>KADIN</span></a>


                      <div class="mmc-lv2-sub">

                        <div style="margin-bottom:10px" class="mmc-lv3 inline-flex sm:hidden">
                          <a href="/v2k-designers/kadin/" class="mmc-lv3-link" title="TÜMÜ"><span>TÜMÜ</span></a>
                        </div>

                        <ul class="ul-clear">


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/v2k-designers/kadin-giyim/" title="Giyim">Giyim</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/v2k-designers/kadin-ayakkabi-canta/" title="Ayakkabı &amp; Çanta">Ayakkabı &amp;
                              Çanta</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/v2k-designers/kadin-aksesuar/" title="Aksesuar">Aksesuar</a></li>


                        </ul>
                      </div>

                    </div>

                  </div>
                  <div class="right-section">

                    <div class="mmc-lv2  right-block">
                      <a class="mmc-lv2-link inline-flex sm:hidden only-one-item" title="V2K 23-24 FW"
                        href="/v2k-designers/kadin-lookbook/"><span>V2K 23-24 FW</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="V2K 23-24 FW"
                        href="/v2k-designers/kadin-lookbook/"><span>V2K 23-24 FW</span></a>


                    </div>

                  </div>






                </div>
                <div class="bottom-block">


                  <div class="mmc-lv2">
                    <a class="mmc-lv2-link inline-flex sm:hidden only-one-item"
                      title="Sonbahar Kış Ürünlerinde %40'a Varan İndirim"
                      href="/sonbahar-kis-indirimi/?attributes_integration_sap_BRAND=1005&amp;attributes_integration_sap_BRAND=1030&amp;attributes_integration_sap_BRAND=2682&amp;attributes_integration_sap_BRAND=1056&amp;attributes_integration_sap_BRAND=3057&amp;attributes_integration_sap_BRAND=1483&amp;attributes_integration_sap_BRAND=2821&amp;attributes_integration_sap_BRAND=1967&amp;attributes_integration_sap_BRAND=2711&amp;attributes_integration_sap_BRAND=2382"><span>Sonbahar
                        Kış Ürünlerinde %40'a Varan İndirim</span></a>
                    <a class="mmc-lv2-link-desktop sm:inline-flex hidden"
                      title="Sonbahar Kış Ürünlerinde %40'a Varan İndirim"
                      href="/sonbahar-kis-indirimi/?attributes_integration_sap_BRAND=1005&amp;attributes_integration_sap_BRAND=1030&amp;attributes_integration_sap_BRAND=2682&amp;attributes_integration_sap_BRAND=1056&amp;attributes_integration_sap_BRAND=3057&amp;attributes_integration_sap_BRAND=1483&amp;attributes_integration_sap_BRAND=2821&amp;attributes_integration_sap_BRAND=1967&amp;attributes_integration_sap_BRAND=2711&amp;attributes_integration_sap_BRAND=2382"><span>Sonbahar
                        Kış Ürünlerinde %40'a Varan İndirim</span></a>


                  </div>

                </div>
              </div>





              <div class="mmc-lv1-block2">
                <a href="/v2k-designers/">
                  <figure class="lazy entered loaded bg-loaded"
                    data-bg="https://vakko.akinoncdn.com/cms/2023/09/27/be725a28-571c-41b0-9c48-897df6598478_size540x960_cropCenter.jpg"
                    data-ll-status="loaded"
                    style="background-image: url(&quot;https://vakko.akinoncdn.com/cms/2023/09/27/be725a28-571c-41b0-9c48-897df6598478_size540x960_cropCenter.jpg&quot;);">
                  </figure>
                </a>

              </div>


            </div>

          </div>





























































          <div class="mmc-lv1">


            <a class="mmc-lv1-link inline-flex sm:hidden" title="HOME"><span>HOME</span></a>
            <a href="/home/" class="hidden mmc-lv1-link sm:block" title="HOME"><span>HOME</span></a>



            <div class="mmc-lv1-blocks ">


              <div class="block-wrapper">
                <div class="mmc-lv1-block1 mmc-lv1-column mmc-lv1-block1-a367e233-b033-48e6-90c4-b1608ba0f293"
                  data-type="connected">

                  <div class="mmc-lv2 block sm:hidden">
                    <a class=" clickable-mmc-lv2" href="/home/" title="TÜMÜ"><span>TÜMÜ</span></a>
                  </div>

                  <div class="left-section">

                    <div class="mmc-lv2  ">
                      <a class="mmc-lv2-link inline-flex sm:hidden " title="EV DEKORASYONU"><span>EV
                          DEKORASYONU</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="EV DEKORASYONU"
                        href="/home/ev-dekorasyonu/"><span>EV DEKORASYONU</span></a>


                      <div class="mmc-lv2-sub">

                        <div style="margin-bottom:10px" class="mmc-lv3 inline-flex sm:hidden">
                          <a href="/home/ev-dekorasyonu/" class="mmc-lv3-link" title="TÜMÜ"><span>TÜMÜ</span></a>
                        </div>

                        <ul class="ul-clear">


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;" href="/home/mobilya/"
                              title="Mobilya">Mobilya</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/home/ofis-aksesuarlari/" title="Ofis Aksesuarları">Ofis Aksesuarları</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/home/dekoratif-ev-aksesuarlari/" title="Dekoratif Ev Aksesuarları">Dekoratif Ev
                              Aksesuarları</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/home/hobi-aksesuarlari/" title="Hobi Aksesuarları">Hobi Aksesuarları</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/home/sofra-takimlari/" title="Sofra Takımları">Sofra Takımları</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/home/sofra-aksesuarlari/" title="Sofra Aksesuarları">Sofra Aksesuarları</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/home/samdan-mumluk-fener/" title="Şamdan &amp; Mumluk &amp; Fener">Şamdan &amp;
                              Mumluk &amp; Fener</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/home/mum-oda-kokusu/" title="Mum &amp; Oda Kokusu">Mum &amp; Oda Kokusu</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/home/banyo-aksesuarlari/" title="Banyo Aksesuarları">Banyo Aksesuarları</a></li>


                        </ul>
                      </div>

                    </div>

                    <div class="mmc-lv2  ">
                      <a class="mmc-lv2-link inline-flex sm:hidden " title="YILBAŞI"><span>YILBAŞI</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="YILBAŞI"
                        href="/home/yilbasi-susleri/"><span>YILBAŞI</span></a>


                      <div class="mmc-lv2-sub">

                        <div style="margin-bottom:10px" class="mmc-lv3 inline-flex sm:hidden">
                          <a href="/home/yilbasi-susleri/" class="mmc-lv3-link" title="TÜMÜ"><span>TÜMÜ</span></a>
                        </div>

                        <ul class="ul-clear">


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/yilbasi-agaci/" title="Yılbaşı Ağacı">Yılbaşı Ağacı</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;" href="/yilbasi-susu/"
                              title="Yılbaşı Süsü">Yılbaşı Süsü</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/yilbasi-dekorasyon/" title="Dekorasyon">Dekorasyon</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/yilbasi-servis-aksesuarlari/" title="Servis Aksesuarı">Servis Aksesuarı</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/yilbasi-battaniye-yastik/" title="Yastık &amp; Throw">Yastık &amp; Throw</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/ozel-gunler/hediye-secenekleri/" title="Hediye Seçenekleri">Hediye Seçenekleri</a>
                          </li>


                        </ul>
                      </div>

                    </div>

                    <div class="mmc-lv2  ">
                      <a class="mmc-lv2-link inline-flex sm:hidden " title="EV TEKSTİLİ"><span>EV TEKSTİLİ</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="EV TEKSTİLİ"
                        href="/home/ev-tekstili/"><span>EV TEKSTİLİ</span></a>


                      <div class="mmc-lv2-sub">

                        <div style="margin-bottom:10px" class="mmc-lv3 inline-flex sm:hidden">
                          <a href="/home/ev-tekstili/" class="mmc-lv3-link" title="TÜMÜ"><span>TÜMÜ</span></a>
                        </div>

                        <ul class="ul-clear">


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/home/exclusive-line/" title="Exclusive Line">Exclusive Line</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/home/yatak-tekstili/" title="Yatak Tekstili">Yatak Tekstili</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/home/masa-tekstili/" title="Masa Tekstili">Masa Tekstili</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/home/banyo-tekstili/" title="Banyo Tekstili">Banyo Tekstili</a></li>


                        </ul>
                      </div>

                    </div>

                  </div>
                  <div class="right-section">

                    <div class="mmc-lv2  right-block">
                      <a class="mmc-lv2-link inline-flex sm:hidden " title="CRUISE"><span>CRUISE</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="CRUISE"
                        href="/cruise-koleksiyonu/"><span>CRUISE</span></a>


                      <div class="mmc-lv2-sub">

                        <div style="margin-bottom:10px" class="mmc-lv3 inline-flex sm:hidden">
                          <a href="/cruise-koleksiyonu/" class="mmc-lv3-link" title="TÜMÜ"><span>TÜMÜ</span></a>
                        </div>

                        <ul class="ul-clear">


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/home/tekne-aksesuarlari/" title="Tekne Aksesuarları">Tekne Aksesuarları</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/home/dis-mekan-yastiklari/" title="Dış Mekan Yastıkları">Dış Mekan Yastıkları</a>
                          </li>


                        </ul>
                      </div>

                    </div>

                    <div class="mmc-lv2  right-block">
                      <a class="mmc-lv2-link inline-flex sm:hidden " title="DEKORATİF YASTIKLAR"><span>DEKORATİF
                          YASTIKLAR</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="DEKORATİF YASTIKLAR"
                        href="/home/dekoratif-yastiklar/"><span>DEKORATİF YASTIKLAR</span></a>


                      <div class="mmc-lv2-sub">

                        <div style="margin-bottom:10px" class="mmc-lv3 inline-flex sm:hidden">
                          <a href="/home/dekoratif-yastiklar/" class="mmc-lv3-link" title="TÜMÜ"><span>TÜMÜ</span></a>
                        </div>

                        <ul class="ul-clear">


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/home/klasik-dekor-yastiklari/" title="Klasik Dekor Yastıkları">Klasik Dekor
                              Yastıkları</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/home/sezon-yastiklari/" title="Sezon Yastıkları">Sezon Yastıkları</a></li>


                        </ul>
                      </div>

                    </div>

                    <div class="mmc-lv2  right-block">
                      <a class="mmc-lv2-link inline-flex sm:hidden only-one-item" title="EL VE VÜCUT BAKIMI"
                        href="/home/el-vucut-bakimi/"><span>EL VE VÜCUT BAKIMI</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="EL VE VÜCUT BAKIMI"
                        href="/home/el-vucut-bakimi/"><span>EL VE VÜCUT BAKIMI</span></a>


                    </div>

                    <div class="mmc-lv2  right-block">
                      <a class="mmc-lv2-link inline-flex sm:hidden " title="CHRISTOFLE"><span>CHRISTOFLE</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="CHRISTOFLE"
                        href="/home/christofle/"><span>CHRISTOFLE</span></a>


                      <div class="mmc-lv2-sub">

                        <div style="margin-bottom:10px" class="mmc-lv3 inline-flex sm:hidden">
                          <a href="/home/christofle/" class="mmc-lv3-link" title="TÜMÜ"><span>TÜMÜ</span></a>
                        </div>

                        <ul class="ul-clear">


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/home/christofle-mum-samdan/" title="Mum &amp; Şamdan">Mum &amp; Şamdan</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/home/christofle-dekoratif-obje/" title="Dekoratif Obje">Dekoratif Obje</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/home/christofle-catal-bicak-seti/" title="Çatal &amp; Bıçak Seti">Çatal &amp; Bıçak
                              Seti</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/home/christofle-sofra-aksesuari/" title="Sofra Aksesuarları">Sofra Aksesuarları</a>
                          </li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/home/christofle-temizleme-urunleri/" title="Temizleme Ürünleri">Temizleme
                              Ürünleri</a></li>


                        </ul>
                      </div>

                    </div>

                    <div class="mmc-lv2  right-block">
                      <a class="mmc-lv2-link inline-flex sm:hidden only-one-item" title="EVLİLİK LİSTESİ KATALOĞU"
                        href="https://d1vjkusqbz63b7.cloudfront.net/vakko-liste-de-mariage-catalog/index.html"><span>EVLİLİK
                          LİSTESİ KATALOĞU</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="EVLİLİK LİSTESİ KATALOĞU"
                        href="https://d1vjkusqbz63b7.cloudfront.net/vakko-liste-de-mariage-catalog/index.html"><span>EVLİLİK
                          LİSTESİ KATALOĞU</span></a>


                    </div>

                  </div>






                </div>
                <div class="bottom-block">


                  <div class="mmc-lv2">
                    <a class="mmc-lv2-link inline-flex sm:hidden only-one-item"
                      title="Sonbahar Kış Ürünlerinde %40'a Varan İndirim"
                      href="/sonbahar-kis-indirimi/?attributes_integration_sap_ZZGNDR=U"><span>Sonbahar Kış Ürünlerinde
                        %40'a Varan İndirim</span></a>
                    <a class="mmc-lv2-link-desktop sm:inline-flex hidden"
                      title="Sonbahar Kış Ürünlerinde %40'a Varan İndirim"
                      href="/sonbahar-kis-indirimi/?attributes_integration_sap_ZZGNDR=U"><span>Sonbahar Kış Ürünlerinde
                        %40'a Varan İndirim</span></a>


                  </div>

                </div>
              </div>





              <div class="mmc-lv1-block2">
                <a href="/home/dekoratif-ev-aksesuarlari/">
                  <figure class="lazy entered loaded bg-loaded"
                    data-bg="https://vakko.akinoncdn.com/cms/2023/09/22/5ce1708c-4cb2-4161-a97a-e86e79e9fa68_size540x960_cropCenter.jpg"
                    data-ll-status="loaded"
                    style="background-image: url(&quot;https://vakko.akinoncdn.com/cms/2023/09/22/5ce1708c-4cb2-4161-a97a-e86e79e9fa68_size540x960_cropCenter.jpg&quot;);">
                  </figure>
                </a>

              </div>


            </div>

          </div>























































          <div class="mmc-lv1">


            <a class="mmc-lv1-link inline-flex sm:hidden" title="KOZMETİK"><span>KOZMETİK</span></a>
            <a href="/kozmetik/" class="hidden mmc-lv1-link sm:block" title="KOZMETİK"><span>KOZMETİK</span></a>



            <div class="mmc-lv1-blocks ">


              <div class="block-wrapper">
                <div class="mmc-lv1-block1 mmc-lv1-column mmc-lv1-block1-edc3c82b-04c7-4115-b28d-182fbf3551d7"
                  data-type="connected">

                  <div class="mmc-lv2 block sm:hidden">
                    <a class=" clickable-mmc-lv2" href="/kozmetik/" title="TÜMÜ"><span>TÜMÜ</span></a>
                  </div>

                  <div class="left-section">

                    <div class="mmc-lv2  ">
                      <a class="mmc-lv2-link inline-flex sm:hidden " title="ERKEK PARFÜM"><span>ERKEK PARFÜM</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="ERKEK PARFÜM"
                        href="/kozmetik/erkek-parfum/"><span>ERKEK PARFÜM</span></a>


                      <div class="mmc-lv2-sub">

                        <div style="margin-bottom:10px" class="mmc-lv3 inline-flex sm:hidden">
                          <a href="/kozmetik/erkek-parfum/" class="mmc-lv3-link" title="TÜMÜ"><span>TÜMÜ</span></a>
                        </div>

                        <ul class="ul-clear">


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kozmetik/erkek-infiniti/" title="Infiniti For Him">Infiniti For Him</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/infiniti-for-him-koleksiyonu/" title="Infiniti For Him 2'li Set">Infiniti For Him
                              2'li Set</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/erkek-hediye-setleri/infiniti-for-him-edp-3-lu-set-pm868072073574/"
                              title="Infiniti For Him 3'lü Set">Infiniti For Him 3'lü Set</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/v-de-vakko-edt/" title="V De Vakko">V De Vakko</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kozmetik/v-de-vakko-2li-set/" title="V De Vakko 2'li Set">V De Vakko 2'li Set</a>
                          </li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/erkek-hediye-setleri/3lu-set-edt-deo-dus-jeli-pm868238523729-0001/"
                              title="V De Vakko 3'lü Set">V De Vakko 3'lü Set</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kozmetik/unisex-parfum/" title="Infiniti For Us">Infiniti For Us</a></li>


                        </ul>
                      </div>

                    </div>

                    <div class="mmc-lv2  ">
                      <a class="mmc-lv2-link inline-flex sm:hidden " title="KADIN PARFÜM"><span>KADIN PARFÜM</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="KADIN PARFÜM"
                        href="/kozmetik/kadin-parfum/"><span>KADIN PARFÜM</span></a>


                      <div class="mmc-lv2-sub">

                        <div style="margin-bottom:10px" class="mmc-lv3 inline-flex sm:hidden">
                          <a href="/kozmetik/kadin-parfum/" class="mmc-lv3-link" title="TÜMÜ"><span>TÜMÜ</span></a>
                        </div>

                        <ul class="ul-clear">


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kozmetik/kadin-infiniti/" title="Infiniti For Her">Infiniti For Her</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/infiniti-for-her-koleksiyonu/" title="Infiniti For Her 2'li Set">Infiniti For Her
                              2'li Set</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kozmetik/infiniti-for-her-3lu-set/" title="Infiniti For Her 3'lü Set">Infiniti For
                              Her 3'lü Set</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kozmetik/unisex-parfum/" title="Infiniti For Us">Infiniti For Us</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kozmetik/infiniti-for-her-body-mist/" title="Infiniti For Her Body Mist">Infiniti For
                              Her Body Mist</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/infiniti-for-her-glam/" title="Infiniti For Her Glam">Infiniti For Her Glam</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/infiniti-for-her-grey/" title="Infiniti For Her  Grey">Infiniti For Her Grey</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kozmetik/katia/" title="Katia">Katia</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kadin-hediye-setleri/katia-2-li-hediye-seti-pm400240919-0001/"
                              title="Katia 2'li Set">Katia 2'li Set</a></li>


                        </ul>
                      </div>

                    </div>

                    <div class="mmc-lv2  ">
                      <a class="mmc-lv2-link inline-flex sm:hidden " title="UNISEX PARFÜM"><span>UNISEX PARFÜM</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="UNISEX PARFÜM"
                        href="/kozmetik/unisex-parfum/"><span>UNISEX PARFÜM</span></a>


                      <div class="mmc-lv2-sub">

                        <div style="margin-bottom:10px" class="mmc-lv3 inline-flex sm:hidden">
                          <a href="/kozmetik/unisex-parfum/" class="mmc-lv3-link" title="TÜMÜ"><span>TÜMÜ</span></a>
                        </div>

                        <ul class="ul-clear">


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kozmetik/unisex-parfum/" title="Infiniti For Us">Infiniti For Us</a></li>


                        </ul>
                      </div>

                    </div>

                  </div>
                  <div class="right-section">

                    <div class="mmc-lv2  right-block">
                      <a class="mmc-lv2-link inline-flex sm:hidden " title="HEDİYE SETLERİ"><span>HEDİYE
                          SETLERİ</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="HEDİYE SETLERİ"
                        href="/kozmetik/hediye-setleri/"><span>HEDİYE SETLERİ</span></a>


                      <div class="mmc-lv2-sub">

                        <div style="margin-bottom:10px" class="mmc-lv3 inline-flex sm:hidden">
                          <a href="/kozmetik/hediye-setleri/" class="mmc-lv3-link" title="TÜMÜ"><span>TÜMÜ</span></a>
                        </div>

                        <ul class="ul-clear">


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kozmetik/kadin-hediye-setleri/" title="Kadın Hediye Setleri">Kadın Hediye Setleri</a>
                          </li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kozmetik/erkek-hediye-setleri/" title="Erkek Hediye Setleri">Erkek Hediye Setleri</a>
                          </li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kozmetik/kolonya-hediye-seti/" title="Kolonya Hediye Setleri">Kolonya Hediye
                              Setleri</a></li>


                        </ul>
                      </div>

                    </div>

                    <div class="mmc-lv2  right-block">
                      <a class="mmc-lv2-link inline-flex sm:hidden " title="KOLONYA"><span>KOLONYA</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="KOLONYA"
                        href="/kozmetik/kolonya/"><span>KOLONYA</span></a>


                      <div class="mmc-lv2-sub">

                        <div style="margin-bottom:10px" class="mmc-lv3 inline-flex sm:hidden">
                          <a href="/kozmetik/kolonya/" class="mmc-lv3-link" title="TÜMÜ"><span>TÜMÜ</span></a>
                        </div>

                        <ul class="ul-clear">


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kozmetik/riga-amber/" title="Riga Amber">Riga Amber</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kozmetik/bois-de-cedre-atlas/" title="Bois De Cedre Atlas">Bois De Cedre Atlas</a>
                          </li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kozmetik/marine-imperial/" title="Marine Imperial">Marine Imperial</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kozmetik/citrus/" title="Citrus">Citrus</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kozmetik/leather/" title="Leather">Leather</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kozmetik/blue-suede/" title="Blue Suede">Blue Suede</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kozmetik/tangerine-mandarine/" title="Tangerine &amp; Manderine">Tangerine &amp;
                              Manderine</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kozmetik/atmosphere/" title="Atmosphere">Atmosphere</a></li>


                        </ul>
                      </div>

                    </div>

                    <div class="mmc-lv2  right-block">
                      <a class="mmc-lv2-link inline-flex sm:hidden only-one-item" title="OJE"
                        href="/kozmetik/oje/"><span>OJE</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="OJE"
                        href="/kozmetik/oje/"><span>OJE</span></a>


                    </div>

                    <div class="mmc-lv2  right-block">
                      <a class="mmc-lv2-link inline-flex sm:hidden " title="EL VE VÜCUT BAKIMI"><span>EL VE VÜCUT
                          BAKIMI</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="EL VE VÜCUT BAKIMI"
                        href="/kozmetik/el-ve-vucut-bakimi/"><span>EL VE VÜCUT BAKIMI</span></a>


                      <div class="mmc-lv2-sub">

                        <div style="margin-bottom:10px" class="mmc-lv3 inline-flex sm:hidden">
                          <a href="/kozmetik/el-ve-vucut-bakimi/" class="mmc-lv3-link" title="TÜMÜ"><span>TÜMÜ</span></a>
                        </div>

                        <ul class="ul-clear">


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kozmetik/sivi-sabunlar/" title="Sıvı Sabunlar">Sıvı Sabunlar</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kozmetik/sabunlar/" title="Sabunlar">Sabunlar</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/kozmetik/body-mist/" title="Body Mist">Body Mist</a></li>


                        </ul>
                      </div>

                    </div>

                  </div>






                </div>
                <div class="bottom-block">


                  <div class="mmc-lv2">
                    <a class="mmc-lv2-link inline-flex sm:hidden only-one-item"
                      title="Sonbahar Kış Ürünlerinde %40'a Varan İndirim"
                      href="/sonbahar-kis-indirimi/?attributes_integration_sap_MATKL9D=154&amp;attributes_integration_sap_MATKL9D=157&amp;attributes_integration_sap_MATKL9D=398&amp;attributes_integration_sap_MATKL9D=159&amp;attributes_integration_sap_MATKL9D=162"><span>Sonbahar
                        Kış Ürünlerinde %40'a Varan İndirim</span></a>
                    <a class="mmc-lv2-link-desktop sm:inline-flex hidden"
                      title="Sonbahar Kış Ürünlerinde %40'a Varan İndirim"
                      href="/sonbahar-kis-indirimi/?attributes_integration_sap_MATKL9D=154&amp;attributes_integration_sap_MATKL9D=157&amp;attributes_integration_sap_MATKL9D=398&amp;attributes_integration_sap_MATKL9D=159&amp;attributes_integration_sap_MATKL9D=162"><span>Sonbahar
                        Kış Ürünlerinde %40'a Varan İndirim</span></a>


                  </div>

                </div>
              </div>





              <div class="mmc-lv1-block2">
                <a href="/kozmetik/erkek-parfum/">
                  <figure class="lazy entered loaded bg-loaded"
                    data-bg="https://vakko.akinoncdn.com/cms/2023/09/28/77c1f07d-6b24-471c-8f6d-44e5de5f7c07_size540x960_cropCenter.jpg"
                    data-ll-status="loaded"
                    style="background-image: url(&quot;https://vakko.akinoncdn.com/cms/2023/09/28/77c1f07d-6b24-471c-8f6d-44e5de5f7c07_size540x960_cropCenter.jpg&quot;);">
                  </figure>
                </a>

              </div>


            </div>

          </div>







          <div class="mmc-lv1">


            <a target="_blank" class="hidden mmc-lv1-link sm:block" href="https://www.vakkorama.com.tr/"
              title="VAKKORAMA"><span>VAKKORAMA</span></a>
            <a target="_blank" class="mmc-lv1-direct-link inline-flex sm:hidden" href="https://www.vakkorama.com.tr/"
              title="VAKKORAMA"><span>VAKKORAMA</span></a>


            <div class="mmc-lv1-blocks nosub">




              <div class="mmc-lv1-block2">
                <a target="_blank" href="https://www.vakkorama.com.tr/">
                  <figure class="lazy entered loaded bg-loaded"
                    data-bg="https://vakko.akinoncdn.com/cms/2023/09/01/16e5ee92-7b57-417f-9220-730f8599cfce_size540x960_cropCenter.jpg"
                    data-ll-status="loaded"
                    style="background-image: url(&quot;https://vakko.akinoncdn.com/cms/2023/09/01/16e5ee92-7b57-417f-9220-730f8599cfce_size540x960_cropCenter.jpg&quot;);">
                  </figure>
                </a>

              </div>


            </div>

          </div>







          <div class="mmc-lv1">


            <a target="_blank" class="hidden mmc-lv1-link sm:block" href="https://www.vakkohotel.com/"
              title="VAKKO HOTEL &amp; RESIDENCE"><span>VAKKO HOTEL &amp; RESIDENCE</span></a>
            <a target="_blank" class="mmc-lv1-direct-link inline-flex sm:hidden" href="https://www.vakkohotel.com/"
              title="VAKKO HOTEL &amp; RESIDENCE"><span>VAKKO HOTEL &amp; RESIDENCE</span></a>


            <div class="mmc-lv1-blocks nosub">




              <div class="mmc-lv1-block2">
                <a target="_blank" href="https://www.vakkohotel.com/">
                  <figure class="lazy entered loaded bg-loaded"
                    data-bg="https://vakko.akinoncdn.com/cms/2023/08/27/bdcacad4-9066-4520-91fc-6bb4e0e198a1_size540x960_cropCenter.jpg"
                    data-ll-status="loaded"
                    style="background-image: url(&quot;https://vakko.akinoncdn.com/cms/2023/08/27/bdcacad4-9066-4520-91fc-6bb4e0e198a1_size540x960_cropCenter.jpg&quot;);">
                  </figure>
                </a>

              </div>


            </div>

          </div>





































          <div class="mmc-lv1">


            <a class="mmc-lv1-link inline-flex sm:hidden" title="L'ATELIER"><span>L'ATELIER</span></a>
            <a href="/l-atelier/" class="hidden mmc-lv1-link sm:block" title="L'ATELIER"><span>L'ATELIER</span></a>



            <div class="mmc-lv1-blocks ">


              <div class="block-wrapper">
                <div class="mmc-lv1-block1 mmc-lv1-column mmc-lv1-block1-f6386676-b4fa-494b-adb6-c0a73f81d95c"
                  data-type="connected">

                  <div class="mmc-lv2 block sm:hidden">
                    <a class=" clickable-mmc-lv2" href="/l-atelier/" title="TÜMÜ"><span>TÜMÜ</span></a>
                  </div>

                  <div class="left-section">

                    <div class="mmc-lv2  ">
                      <a class="mmc-lv2-link inline-flex sm:hidden " title="ÇİKOLATALAR"><span>ÇİKOLATALAR</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="ÇİKOLATALAR"
                        href="/l-atelier/cikolatalar/"><span>ÇİKOLATALAR</span></a>


                      <div class="mmc-lv2-sub">

                        <div style="margin-bottom:10px" class="mmc-lv3 inline-flex sm:hidden">
                          <a href="/l-atelier/cikolatalar/" class="mmc-lv3-link" title="TÜMÜ"><span>TÜMÜ</span></a>
                        </div>

                        <ul class="ul-clear">


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/l-atelier/klasik-cikolatalar/" title="Klasik Çikolatalar">Klasik Çikolatalar</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/l-atelier/el-yapimi-cikolatalar/" title="El Yapımı Çikolatalar">El Yapımı
                              Çikolatalar</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/l-atelier/atistirmalik-cikolatalar/" title="Atıştırmalık Çikolatalar">Atıştırmalık
                              Çikolatalar</a></li>


                        </ul>
                      </div>

                    </div>

                  </div>
                  <div class="right-section">

                    <div class="mmc-lv2  right-block">
                      <a class="mmc-lv2-link inline-flex sm:hidden only-one-item" title="Patisserie"
                        href="https://www.vakkolatelier.com/patisserie"><span>Patisserie</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="Patisserie"
                        href="https://www.vakkolatelier.com/patisserie"><span>Patisserie</span></a>


                    </div>

                    <div class="mmc-lv2  right-block">
                      <a class="mmc-lv2-link inline-flex sm:hidden only-one-item" title="Delight"
                        href="https://www.vakkolatelier.com/delight"><span>Delight</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="Delight"
                        href="https://www.vakkolatelier.com/delight"><span>Delight</span></a>


                    </div>

                    <div class="mmc-lv2  right-block">
                      <a class="mmc-lv2-link inline-flex sm:hidden only-one-item" title="Ice Cream"
                        href="https://www.vakkolatelier.com/ice-cream"><span>Ice Cream</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="Ice Cream"
                        href="https://www.vakkolatelier.com/ice-cream"><span>Ice Cream</span></a>


                    </div>

                    <div class="mmc-lv2  right-block">
                      <a class="mmc-lv2-link inline-flex sm:hidden only-one-item" title="Bistrot"
                        href="https://www.vakkolatelier.com/bistrot"><span>Bistrot</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="Bistrot"
                        href="https://www.vakkolatelier.com/bistrot"><span>Bistrot</span></a>


                    </div>

                  </div>






                </div>
                <div class="bottom-block">


                </div>
              </div>





              <div class="mmc-lv1-block2">
                <a href="/l-atelier/">
                  <figure class="lazy entered loaded bg-loaded"
                    data-bg="https://vakko.akinoncdn.com/cms/2023/09/01/1b476313-c008-4790-91cd-e27aac026087_size540x960_cropCenter.jpg"
                    data-ll-status="loaded"
                    style="background-image: url(&quot;https://vakko.akinoncdn.com/cms/2023/09/01/1b476313-c008-4790-91cd-e27aac026087_size540x960_cropCenter.jpg&quot;);">
                  </figure>
                </a>

              </div>


            </div>

          </div>





























































          <div class="mmc-lv1">


            <a class="mmc-lv1-link inline-flex sm:hidden" title="OUTLET"><span>OUTLET</span></a>
            <a href="/outlet-alisveris/" class="hidden mmc-lv1-link sm:block" title="OUTLET"><span>OUTLET</span></a>



            <div class="mmc-lv1-blocks ">


              <div class="block-wrapper">
                <div class="mmc-lv1-block1 mmc-lv1-column mmc-lv1-block1-2ca6bc81-bc0e-423e-bca0-bbedc165ef14"
                  data-type="connected">

                  <div class="mmc-lv2 block sm:hidden">
                    <a class=" clickable-mmc-lv2" href="/outlet-alisveris/" title="TÜMÜ"><span>TÜMÜ</span></a>
                  </div>

                  <div class="left-section">

                    <div class="mmc-lv2  ">
                      <a class="mmc-lv2-link inline-flex sm:hidden " title="KADIN"><span>KADIN</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="KADIN"
                        href="/outlet/kadin/"><span>KADIN</span></a>


                      <div class="mmc-lv2-sub">

                        <div style="margin-bottom:10px" class="mmc-lv3 inline-flex sm:hidden">
                          <a href="/outlet/kadin/" class="mmc-lv3-link" title="TÜMÜ"><span>TÜMÜ</span></a>
                        </div>

                        <ul class="ul-clear">


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/outlet/kadin-giyim/" title="Giyim">Giyim</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/outlet/kadin-aksesuar/" title="Aksesuar">Aksesuar</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/outlet/kadin-esarp-sal-koleksiyonu/" title="Eşarp &amp; Şal Koleksiyonu">Eşarp &amp;
                              Şal Koleksiyonu</a></li>


                        </ul>
                      </div>

                    </div>

                    <div class="mmc-lv2  ">
                      <a class="mmc-lv2-link inline-flex sm:hidden " title="ERKEK"><span>ERKEK</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="ERKEK"
                        href="/outlet/erkek/"><span>ERKEK</span></a>


                      <div class="mmc-lv2-sub">

                        <div style="margin-bottom:10px" class="mmc-lv3 inline-flex sm:hidden">
                          <a href="/outlet/erkek/" class="mmc-lv3-link" title="TÜMÜ"><span>TÜMÜ</span></a>
                        </div>

                        <ul class="ul-clear">


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/outlet/erkek-giyim/" title="Giyim">Giyim</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/outlet/erkek-aksesuar/" title="Aksesuar">Aksesuar</a></li>


                        </ul>
                      </div>

                    </div>

                    <div class="mmc-lv2  ">
                      <a class="mmc-lv2-link inline-flex sm:hidden " title="SHOES &amp; BAGS"><span>SHOES &amp;
                          BAGS</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="SHOES &amp; BAGS"
                        href="/outlet/ayakkabi-canta/"><span>SHOES &amp; BAGS</span></a>


                      <div class="mmc-lv2-sub">

                        <div style="margin-bottom:10px" class="mmc-lv3 inline-flex sm:hidden">
                          <a href="/outlet/ayakkabi-canta/" class="mmc-lv3-link" title="TÜMÜ"><span>TÜMÜ</span></a>
                        </div>

                        <ul class="ul-clear">


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/outlet/kadin-ayakkabi-canta/" title="Kadın">Kadın</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/outlet/erkek-ayakkabi/" title="Erkek">Erkek</a></li>


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/outlet/monogram/" title="Monogram">Monogram</a></li>


                        </ul>
                      </div>

                    </div>

                    <div class="mmc-lv2  ">
                      <a class="mmc-lv2-link inline-flex sm:hidden " title="COUTURE"><span>COUTURE</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="COUTURE"
                        href="/outlet/couture/"><span>COUTURE</span></a>


                      <div class="mmc-lv2-sub">

                        <div style="margin-bottom:10px" class="mmc-lv3 inline-flex sm:hidden">
                          <a href="/outlet/couture/" class="mmc-lv3-link" title="TÜMÜ"><span>TÜMÜ</span></a>
                        </div>

                        <ul class="ul-clear">


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/outlet/couture-kadin-elbise/" title="Elbise">Elbise</a></li>


                        </ul>
                      </div>

                    </div>

                  </div>
                  <div class="right-section">

                    <div class="mmc-lv2  right-block">
                      <a class="mmc-lv2-link inline-flex sm:hidden " title="MARE"><span>MARE</span></a>
                      <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="MARE"
                        href="/outlet/mare/"><span>MARE</span></a>


                      <div class="mmc-lv2-sub">

                        <div style="margin-bottom:10px" class="mmc-lv3 inline-flex sm:hidden">
                          <a href="/outlet/mare/" class="mmc-lv3-link" title="TÜMÜ"><span>TÜMÜ</span></a>
                        </div>

                        <ul class="ul-clear">


                          <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                              href="/outlet/mare-kadin-plaj-giyim/" title="Plaj Giyim">Plaj Giyim</a></li>


                        <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                            href="/outlet/kadin-mayo-bikini/" title="Mayo &amp; Bikini">Mayo &amp; Bikini</a></li>


                        <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                            href="/outlet/mare-kadin-sandalet-terlik/" title="Sandalet &amp; Terlik">Sandalet &amp;
                            Terlik</a></li>


                        <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                            href="/outlet/mare-kadin-aksesuar/" title="Aksesuar">Aksesuar</a></li>


                      </ul>
                    </div>

                  </div>

                  <div class="mmc-lv2  right-block">
                    <a class="mmc-lv2-link inline-flex sm:hidden " title="V2K DESIGNERS"><span>V2K DESIGNERS</span></a>
                    <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="V2K DESIGNERS"
                      href="/outlet/v2k-designers/"><span>V2K DESIGNERS</span></a>


                    <div class="mmc-lv2-sub">

                      <div style="margin-bottom:10px" class="mmc-lv3 inline-flex sm:hidden">
                        <a href="/outlet/v2k-designers/" class="mmc-lv3-link" title="TÜMÜ"><span>TÜMÜ</span></a>
                      </div>

                      <ul class="ul-clear">


                        <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                            href="/outlet/v2k-designers-kadin/" title="Kadın">Kadın</a></li>


                        <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                            href="/outlet/v2k-designers-erkek/" title="Erkek">Erkek</a></li>


                      </ul>
                    </div>

                  </div>

                  <div class="mmc-lv2  right-block">
                    <a class="mmc-lv2-link inline-flex sm:hidden " title="HOME"><span>HOME</span></a>
                    <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="HOME"
                      href="/outlet/home/"><span>HOME</span></a>


                    <div class="mmc-lv2-sub">

                      <div style="margin-bottom:10px" class="mmc-lv3 inline-flex sm:hidden">
                        <a href="/outlet/home/" class="mmc-lv3-link" title="TÜMÜ"><span>TÜMÜ</span></a>
                      </div>

                      <ul class="ul-clear">


                        <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                            href="/outlet/ev-dekorasyonu/" title="Ev Dekorasyonu">Ev Dekorasyonu</a></li>


                        <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                            href="/outlet/ev-tekstili/" title="Ev Tekstili">Ev Tekstili</a></li>


                        <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                            href="/outlet/dekoratif-yastiklar/" title="Dekoratif Yastıklar">Dekoratif Yastıklar</a></li>


                      </ul>
                    </div>

                  </div>

                </div>






              </div>
              <div class="bottom-block">


                <div class="mmc-lv2">
                  <a class="mmc-lv2-link inline-flex sm:hidden only-one-item" title="4000 TL VE ÜZERİNE ÖZEL İNDİRİM"
                    href="/vakko-secili-urunlerde-indirim/"><span>4000 TL VE ÜZERİNE ÖZEL İNDİRİM</span></a>
                  <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="4000 TL VE ÜZERİNE ÖZEL İNDİRİM"
                    href="/vakko-secili-urunlerde-indirim/"><span>4000 TL VE ÜZERİNE ÖZEL İNDİRİM</span></a>


                </div>

                <div class="mmc-lv2">
                  <a class="mmc-lv2-link inline-flex sm:hidden only-one-item"
                    title="SEÇİLİ DIŞ GİYİM ÜRÜNLERİNDE %25 İNDİRİM" href="/dis-giyim-kampanyasi/"><span>SEÇİLİ DIŞ
                      GİYİM ÜRÜNLERİNDE %25 İNDİRİM</span></a>
                  <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="SEÇİLİ DIŞ GİYİM ÜRÜNLERİNDE %25 İNDİRİM"
                    href="/dis-giyim-kampanyasi/"><span>SEÇİLİ DIŞ GİYİM ÜRÜNLERİNDE %25 İNDİRİM</span></a>


                </div>

              </div>
            </div>





            <div class="mmc-lv1-block2">
              <a href="/outlet-alisveris/">
                <figure class="lazy entered loaded bg-loaded"
                  data-bg="https://vakko.akinoncdn.com/cms/2023/08/27/a17b66d7-6469-48cc-8fff-afc30df75fe9_size540x960_cropCenter.jpg"
                  data-ll-status="loaded"
                  style="background-image: url(&quot;https://vakko.akinoncdn.com/cms/2023/08/27/a17b66d7-6469-48cc-8fff-afc30df75fe9_size540x960_cropCenter.jpg&quot;);">
                </figure>
              </a>

            </div>


          </div>

        </div>













        <div class="mmc-lv1 seperate">


          <a class="mmc-lv1-link inline-flex sm:hidden" title="VAKKO HAKKINDA"><span>VAKKO HAKKINDA</span></a>
          <a href="/vakko-hakkinda-kurucu/" class="hidden mmc-lv1-link sm:block" title="VAKKO HAKKINDA"><span>VAKKO
              HAKKINDA</span></a>



          <div class="mmc-lv1-blocks ">


            <div class="block-wrapper">
              <div class="mmc-lv1-block1 mmc-lv1-column mmc-lv1-block1-ae4144f1-33d2-4852-8fa5-c931d9c80fd2"
                data-type="connected">

                <div class="mmc-lv2 block sm:hidden">
                  <a class=" clickable-mmc-lv2" href="/vakko-hakkinda-kurucu/" title="TÜMÜ"><span>TÜMÜ</span></a>
                </div>


                <div class="mmc-lv2 ">
                  <a class="mmc-lv2-link inline-flex sm:hidden " title="VAKKO HAKKINDA"><span>VAKKO HAKKINDA</span></a>
                  <a class="mmc-lv2-link-desktop sm:inline-flex hidden" title="VAKKO HAKKINDA"
                    href="/vakko-hakkinda-kurucu/"><span>VAKKO HAKKINDA</span></a>


                  <div class="mmc-lv2-sub">

                    <div style="margin-bottom:10px" class="mmc-lv3 inline-flex sm:hidden">
                      <a href="/vakko-hakkinda-kurucu/" class="mmc-lv3-link" title="TÜMÜ"><span>TÜMÜ</span></a>
                    </div>

                    <ul class="ul-clear">


                      <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                          href="/vakko-hakkinda-kurucu/" title="KURUCU">KURUCU</a></li>


                      <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                          href="/vakko-hakkinda-tarihce/" title="KRONOLOJİ">KRONOLOJİ</a></li>


                      <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                          href="https://katalog.vakko.com/vakko-kurumsal-kitap/" title="KURUMSAL KİTAP">KURUMSAL
                          KİTAP</a></li>


                      <li class="mmc-lv3"><a class="mmc-lv3-link" style="--sub-color: #111111 ;"
                          href="https://katalog.vakko.com/vakko-group/" title="MAISON VAKKO">MAISON VAKKO</a></li>


                    </ul>
                  </div>

                </div>







              </div>
              <div class="bottom-block">


              </div>
            </div>





            <div class="mmc-lv1-block2">
              <a href="/vakko-hakkinda-kurucu/">
                <figure class="lazy entered loaded bg-loaded exited"
                  data-bg="https://vakko.akinoncdn.com/cms/2023/05/05/70e73e88-7eaa-44b7-adef-ffe9d1696f17_size540x960_cropCenter.jpg"
                  data-ll-status="entered"
                  style="background-image: url(&quot;https://vakko.akinoncdn.com/cms/2023/05/05/70e73e88-7eaa-44b7-adef-ffe9d1696f17_size540x960_cropCenter.jpg&quot;);">
                </figure>
              </a>

            </div>


          </div>

        </div>


        <!-- <div class="mmc-extra">
         <ul class="ul-clear">
           <li><a class="mmc-extra-link" href="#">VAKKO HAKKINDA</a></li>
         </ul>
       </div> -->
      </div>
    </div>
    <div class="hamburger-lang">
      <font-awesome-icon :icon="['fas', 'globe']" style="width: 24px; height: 24px;" />
     
      <form class="utils__language-item -selected" method="POST" action="/setlang/">
        <input type="hidden" name="csrfmiddlewaretoken"
          value="w5UL3fqVYddNopMhWxxss6rrSadTmcTQMTQM39Y9xqWTjZ131KFkRQAueP1HvDse">
        <input type="hidden" name="next" value="/">
        <input type="hidden" name="language" value="tr-tr">
        <button type="submit" class="utils__language-button">
          TR
        </button>
      </form>
      /
      <form class="utils__language-item " method="POST" action="/setlang/">
        <input type="hidden" name="csrfmiddlewaretoken"
          value="w5UL3fqVYddNopMhWxxss6rrSadTmcTQMTQM39Y9xqWTjZ131KFkRQAueP1HvDse">
        <input type="hidden" name="next" value="/">
        <input type="hidden" name="language" value="en-us">
        <button type="submit" class="utils__language-button">
          EN
        </button>
      </form>
    </div>
  </div>
<SearchBox></SearchBox>
<MiniBasket></MiniBasket>

</header></template>

<style scoped></style>
