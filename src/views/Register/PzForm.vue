<template>
    <form>
        <input type="hidden" name="csrfmiddlewaretoken"
            value="6Hczyc2MfkVM6de74CQUYxLLQi0sZFIoS4qjsXUplcIoQeWtrF4cX9B3dqimnpWn">
        <input type="hidden" name="next" value="/">

        <div class="usr-inner">
            <div class="usr-tabs">
                <div class="flex nav nav-tabs fit scrollable-h" role="tablist"><a class="nav-link"
                        href="/users/login/">Giriş Yap</a><a class="nav-link active" href="/users/register/">Kayıt Ol</a>
                </div>
            </div>
            <div class="usr-block">
                <div class="usr-form form usr-register">
                    <div class="flex flex-wrap -mr-1 -ml-1 flex flex-wrap mt-[20px] ">
                        <div class="col-6 w-1/2">
                            <div class="input textbox">
                                <label for="usr_firstname">Ad</label><span class="wrp">
                                    <pz-input size="xl" name="first_name" v-minlength="2" maxlength="25"
                                        autocomplete="new-name" validate-samecharacter="Lütfen Geçerli Bir Ad Giriniz"
                                        validate-onlyusercharacter="[^a-zA-ZığüişçöÖÇŞİÜĞ\s]"
                                        validate-vowel="Lütfen Geçerli Bir Ad Giriniz"
                                        validate-invalidwords="Lütfen Geçerli Bir Ad Giriniz"
                                        validate-invalidcharacter="Geçersiz karakterler Mevcut" set-uppercase=""
                                        validate-alpha="" validate-doublespace="" w-full=""
                                        class="pz-input -w-full -size-xl">
                                        <input type="text" autocomplete="new-name" maxlength="25"
                                            class="input pz-form-input" id="pz-form-input-4b6" name="first_name">

                                    </pz-input>
                                </span>
                            </div>
                        </div>

                        <div class="col-6 w-1/2">
                            <div class="input textbox">
                                <label for="usr_lastname">Soyad</label><span class="wrp">
                                    <pz-input size="xl" name="last_name" v-minlength="2" maxlength="25"
                                        autocomplete="new-surname" validate-samecharacter="Lütfen Geçerli Bir Soyad Giriniz"
                                        validate-vowel="Lütfen Geçerli Bir Soyad Giriniz"
                                        validate-invalidwords="Lütfen Geçerli Bir Soyad Giriniz"
                                        validate-invalidcharacter="Geçersiz karakterler Mevcut" set-uppercase=""
                                        validate-onlyusercharacter="[^a-zA-ZığüişçöÖÇŞİÜĞ\s]" validate-doublespace=""
                                        w-full="" class="pz-input -w-full -size-xl">
                                        <input type="text" autocomplete="new-surname" maxlength="25"
                                            class="input pz-form-input" id="pz-form-input-a9d8" name="last_name">

                                    </pz-input>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mr-1 -ml-1 flex flex-wrap mt-[20px] ">
                        <div class="w-full">
                            <div class="input textbox">
                                <label for="usr_email">E-posta Adresi</label><span class="wrp">
                                    <pz-input size="xl" name="email" w-full="" autocomplete="new-email"
                                        validate-useenglishcharacter="Lütfen geçerli e-posta adresi giriniz"
                                        class="pz-input -w-full -size-xl">
                                        <input type="text" autocomplete="new-email" class="input pz-form-input"
                                            id="pz-form-input-754a" name="email">

                                    </pz-input>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mr-1 -ml-1 flex flex-wrap mt-[20px] ">
                        <div class="w-full">
                            <div class="input textbox">
                                <label for="usr_mobile">Telefon Numarası</label><span class="wrp">
                                    <pz-input class="js-phone-input -masked pz-input -w-full -size-xl" size="xl"
                                        name="phone" type="tel" w-full="" autocomplete="new-phone"
                                        validate-phone="Lütfen Geçerli Bir Telefon Numarası Giriniz"
                                        mask="0 (599) 999 99 99" mask-prefix="05" v-minlength="11">
                                        <input type="tel" autocomplete="new-phone" class="input pz-form-input"
                                            id="pz-form-input-db7f" name="phone" inputmode="text">

                                    </pz-input>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mr-1 -ml-1 flex flex-wrap mt-[20px] ">
                        <div class="w-full">
                            <div class="input textbox input-datepick">
                                <label for="usr_birthday">Doğum Tarihi</label><span class="wrp input-icon input-icon-r">
                                    <i>
                                        <svg class="icon icon-calendar">
                                            <use xlink:href="#calendar"></use>
                                        </svg>
                                    </i>
                                    <pz-input size="xl" name="date_of_birth" class="js-birth-day pz-input -w-full -size-xl"
                                        autocomplete="new-birthday" data-datepick="birthday">
                                        <input type="text" autocomplete="new-birthday" class="input pz-form-input"
                                            id="pz-form-input-e68f" name="date_of_birth">

                                    </pz-input>

                                    <div class="pika-single is-hidden is-bound"
                                        style="position: static; left: auto; top: auto;">
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mr-1 -ml-1 flex flex-wrap mt-[20px]  password">
                        <div class="w-full">
                            <div class="input textbox">
                                <label for="usr_password">Şifre</label><span class="wrp input-icon input-icon-r"><i
                                        class="z-[2] svg svg-eye-off "></i>
                                    <pz-input size="xl" name="password"
                                        class="login-form__password pz-input -w-full -size-xl" type="password" w-full=""
                                        autocomplete="new-password">
                                        <input type="password" autocomplete="new-password" class="input pz-form-input"
                                            id="pz-form-input-2119" name="password">

                                    </pz-input>
                                    <div class="frv">
                                        <pz-input-constraints class="js-input-constraints pz-input-constraints"
                                            for="password" hidden="">
                                            <ul class="input-constraints pz-input-constraints">

                                                <li class="pz-constraint-item frv-line" rule=".{6,}">
                                                    En az 6 karakter uzunluğunda
                                                    olmalıdır
                                                </li>

                                                <li class="pz-constraint-item frv-line" rule="[a-z]">
                                                    En az bir küçük harf içermelidir
                                                </li>

                                                <li class="pz-constraint-item frv-line" rule="(?=.*[0-9])">
                                                    En az bir sayısal numerik
                                                    içermelidir
                                                </li>

                                                <li class="pz-constraint-item frv-line" rule="[A-Z]">
                                                    En az bir büyük harf içermelidir
                                                </li>

                                                <li class="pz-constraint-item frv-line" rule="[^a-zA-Z0-9\s]">
                                                    En az bir özel karakter içermelidir
                                                </li>

                                            </ul>
                                        </pz-input-constraints>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mr-1 -ml-1 flex flex-wrap mt-[20px] ">
                        <div class="w-full gender"><span class="lbl">Cinsiyet</span>


                            <div class="input radio">
                                <pz-label class="pz-label"><pz-radio name="gender" value="female"
                                        class="js-register-gender -labeled">
                                        <input type="radio" class="radio pz-form-input" value="female"
                                            id="pz-form-input-c597" name="gender">
                                             KADIN
                                        <label for="pz-form-input-c597" class="label">
                                            KADIN
                                        </label></pz-radio></pz-label>
                            </div>
                            <div class="input radio">
                                <pz-label class="pz-label"><pz-radio name="gender" value="male"
                                        class="js-register-gender -labeled">
                                        <input type="radio" class="radio pz-form-input" value="male" id="pz-form-input-cb7"
                                            name="gender">
                                        <label for="pz-form-input-cb7" class="label">
                                            ERKEK

                                        </label></pz-radio></pz-label>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-wrap -mr-1 -ml-1 flex flex-wrap mt-[20px] ">
                        <div class="w-full flex flex-col">
                            <div class="input checkbox">
                                <pz-label class="pz-label"><pz-checkbox name="email_allowed" value="1"
                                        class="pz-checkbox -labeled">
                                        <input type="checkbox" class="checkbox pz-form-input" value="1"
                                            id="pz-form-input-88a8" name="email_allowed">
                                        <label for="pz-form-input-88a8" class="label">
                                            Vakko Tekstil ve Hazır Giyim San. İşl A.Ş.
                                            tarafından kampanya ve ürünler hakkında
                                            <b>E-Posta</b> ile tarafımla iletişim
                                            kurulmasına izin veriyorum. <br>

                                        </label></pz-checkbox></pz-label>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mr-1 -ml-1 flex flex-wrap mt-[20px] ">
                        <div class="w-full flex flex-col">
                            <div class="input checkbox">
                                <pz-label class="pz-label"><pz-checkbox name="sms_allowed" value="1"
                                        class="pz-checkbox -labeled">
                                        <input type="checkbox" class="checkbox pz-form-input" value="1"
                                            id="pz-form-input-5937" name="sms_allowed">
                                        <label for="pz-form-input-5937" class="label">
                                            Vakko Tekstil ve Hazır Giyim San. İşl A.Ş.
                                            tarafından kampanya ve ürünler hakkında
                                            <b>SMS</b> ile tarafımla iletişim
                                            kurulmasına izin veriyorum. <br>

                                        </label></pz-checkbox></pz-label>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mr-1 -ml-1 flex flex-wrap mt-[20px] ">
                        <div class="w-full flex flex-col">
                            <div class="input checkbox">
                                <pz-label class="pz-label"><pz-checkbox name="call_allowed" value="1"
                                        class="pz-checkbox -labeled">
                                        <input type="checkbox" class="checkbox pz-form-input" value="1"
                                            id="pz-form-input-36a1" name="call_allowed">
                                        <label for="pz-form-input-36a1" class="label">
                                            Vakko Tekstil ve Hazır Giyim San. İşl A.Ş.
                                            tarafından kampanya ve ürünler hakkında
                                            <b>Arama</b> ile tarafımla iletişim
                                            kurulmasına izin veriyorum. <br>

                                        </label></pz-checkbox></pz-label>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-wrap -mr-1 -ml-1 flex flex-wrap mt-[20px] ">
                        <div class="w-full flex flex-col">
                            <div class="input checkbox">
                                <pz-label class="pz-label"><pz-checkbox name="confirm" value="true"
                                        class="pz-checkbox -labeled">
                                        <input type="checkbox" class="checkbox pz-form-input" value="true"
                                            id="pz-form-input-8f4" name="confirm">
                                        <label for="pz-form-input-8f4" class="label">
                                            <button type="button" class="link-inline mnp-trigger" data-mnp-body="mnp-ready"
                                                data-mnp-target="#mnp-membership-agreement-text">Üyelik
                                                Sözleşmesini</button>'ni Okudum ve
                                            Onaylıyorum.* <br>

                                        </label></pz-checkbox></pz-label>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-wrap -mr-1 -ml-1 flex flex-wrap mt-[20px] ">
                        <div class="w-full flex flex-col">
                            <div class="input checkbox">
                                <pz-label class="pz-label"><pz-checkbox name="kvkk_confirm" value="true"
                                        class="pz-checkbox -labeled">
                                        <input type="checkbox" class="checkbox pz-form-input" value="true"
                                            id="pz-form-input-c619" name="kvkk_confirm">
                                        <label for="pz-form-input-c619" class="label">
                                            <button type="button" class="link-inline mnp-trigger" data-mnp-body="mnp-ready"
                                                data-mnp-target="#mnp-kvkk-text">Açık
                                                Rıza Metni</button>'ni Okudum ve
                                            Onaylıyorum.* <br>

                                        </label></pz-checkbox></pz-label>
                            </div>
                        </div>
                    </div>



                    <div class="form-button">
                        <label class="form-error hidden register-form__error-hidden"></label>

                        <pz-button disabled="" type="submit"
                            class="register-form__submit js-register-submit -w-full -disabled pz-button -appearance-filled -size-xl"
                            size="xl" w-full="">

                            <span class="pz-button__text">Kayıt Ol</span>
                        </pz-button>
                    </div>
                    <div class="form-info">
                        Üye olmadan önce lütfen Aydınlatma Metni’ni okuyunuz.
                        <button class="link-inline mnp-trigger" type="button" data-mnp-body="mnp-ready"
                            data-mnp-target="#mnp-legal-text">
                            Aydınlatma</button> metnine her zaman sitedeki <a class="link-inline"
                            href="/aydinlatma-metni/">bu linkten</a>
                        veya mobil uygulama üzerinden ulaşabilirsiniz.

                    </div>
                </div>
            </div>
        </div>
    </form>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
  