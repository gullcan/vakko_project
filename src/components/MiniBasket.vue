<template>
    

<pz-mini-basket hidden="" class="pz-mini-basket js-mini-basket -type-popup -loaded">
    <div class="pz-mini-basket-content js-mini-basket-content">
      <ul class="pz-mini-basket__list js-mini-basket-list"></ul>
    </div>
    <div class="pz-mini-basket__footer">
      <div class="pz-mini-basket__total">
        <span class="text">Genel toplam:</span>
        <span class="amount js-mini-basket-subtotal">
          ₺ 0,00
        </span>
      </div>
      <div class="pz-mini-basket__view-bag-btn">
        <pz-button w-full="" size="xl" link="/baskets/basket/"
          class="-w-full -link pz-button -appearance-filled -size-xl">
          <a class="pz-button__link" href="/baskets/basket/" target="_self">

            <span class="pz-button__text">SEPETİ GÖRÜNTÜLE</span>

          </a>
        </pz-button>
      </div>
    </div>
  </pz-mini-basket>
</template>