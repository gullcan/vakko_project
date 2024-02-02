<template>
    <form >
                                             <input type="hidden" name="csrfmiddlewaretoken"
                                                 value="mGFu3jksw2fa2gFTtD4uTRd080OguVrn83TeX4c5CU2MMhnfQGiMSt3iv86aSFFm">
                                             <input type="hidden" name="next" value="/users/login/">
 
                                             <div class="usr-inner">
                                                 <div class="usr-tabs">
                                                     <div class="flex nav nav-tabs fit scrollable-h" role="tablist"><a
                                                             class="nav-link active" href="/users/login/">Giriş Yap</a>
                                                     </div>
                                                 </div>
                                                 <div class="usr-block">
                                                     <div class="usr-form form usr-login">
                                                         <div class="flex flex-wrap -mr-1 -ml-1 flex flex-wrap mt-[20px] ">
                                                             <div class="w-full">
                                                                 <div class="input textbox">
                                                                     <label for="usr_email">E-posta Adresi</label><span
                                                                         class="wrp">
                                                                         <pz-input size="xl" name="email"
                                                                             class="login-form__email pz-input -w-full -size-xl"
                                                                             validate-useenglishcharacter="Lütfen geçerli e-posta adresi giriniz"
                                                                             w-full="">
                                                                             <input type="text" class="input pz-form-input"
                                                                                 id="pz-form-input-69cd" name="email">
 
                                                                         </pz-input>
                                                                     </span>
                                                                 </div>
                                                                 <div class="form-row-error hidden">Bu alan zorunludur</div>
                                                             </div>
                                                         </div>
                                                         <div
                                                             class="flex flex-wrap -mr-1 -ml-1 flex flex-wrap mt-[20px]  password">
                                                             <div class="w-full">
                                                                 <div class="input textbox">
                                                                     <label for="usr_password">Şifre</label><span
                                                                         class="wrp input-icon input-icon-r"><i
                                                                             class="z-[2] svg svg-eye-off "></i>
                                                                         <pz-input size="xl" name="password"
                                                                             class="login-form__password pz-input -w-full -size-xl"
                                                                             type="password" w-full="">
                                                                             <input type="password"
                                                                                 class="input pz-form-input"
                                                                                 id="pz-form-input-d281" name="password">
 
                                                                         </pz-input>
                                                                     </span>
                                                                 </div>
                                                                 <div class="form-row-error hidden">Bu alan zorunludur</div>
                                                             </div>
                                                         </div>
                                                         <div class="flex flex-wrap -mr-1 -ml-1 flex flex-wrap mt-[20px] ">
                                                             <div class="w-1/2">
                                                                 <div class="input checkbox">
                                                                     <input type="checkbox" id="usr_remember">
                                                                     <label for="usr_remember"> Beni Hatırla
                                                                     </label>
                                                                 </div>
                                                             </div>
                                                             <div class="w-1/2 fp"><a class="link-inline"
                                                                     href="/users/password/reset/">
                                                                     Şifremi Unuttum
                                                                 </a></div>
                                                         </div>
                                                         <div class="form-button">
                                                             <pz-button type="submit"
                                                                 class="login-form__sign-in -w-full pz-button -appearance-filled -size-xl"
                                                                 size="xl" w-full="">
 
                                                                 <span class="pz-button__text">Giriş Yap</span>
                                                             </pz-button>
                                                         </div>
                                                     </div>
                                                 </div>
                                             </div>
                                         </form>
 </template>




<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import HeaderC from './HeaderC.vue';

import { authStore } from "@/stores/index"




export default defineComponent({
    setup() {
        const state = reactive({
            userData: {
                email: "",
                password: ""
            }
        });
        return { ...toRefs(state) };
    },

    methods: {
        //@ts-ignore
        async login(userData) {

            this.setLogin(userData).then(() => {

if (this.getUser !== null) {
    //@ts-ignore
    this.$router.push({ path: '/' })
}

})


},

...mapActions(authStore, ["setLogin"])
},


computed:{
...mapState(authStore,["getUser"])
},

components: { HeaderC }
})
</script>
