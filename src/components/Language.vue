<template>
    
<div class="ftr-lang">
    <form class="utils__language-item -selected" method="POST" action="/setlang/">
        <input type="hidden" name="csrfmiddlewaretoken"
            value="G22mRVXFHxx7Q9YJLNEUqbD8pJz20JvWT7vyPZVYLvs9MWmcr5beqRI5DIYHlRGZ">
        <input type="hidden" name="next" value="/">
        <input type="hidden" name="language" value="tr-tr">
        <button type="submit" class="utils__language-button">
            TR
        </button>
    </form>

    <form class="utils__language-item " method="POST" action="/setlang/">
        <input type="hidden" name="csrfmiddlewaretoken"
            value="G22mRVXFHxx7Q9YJLNEUqbD8pJz20JvWT7vyPZVYLvs9MWmcr5beqRI5DIYHlRGZ">
        <input type="hidden" name="next" value="/">
        <input type="hidden" name="language" value="en-us">
        <button type="submit" class="utils__language-button">
            EN
        </button>
    </form>

</div></template>

<script>

export default {
   name: 'LanguageSelector' 
}
</script>