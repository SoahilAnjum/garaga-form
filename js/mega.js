<script>
var abtBtn = document.querySelector('.abtBtn')
        var shopBtn = document.querySelector('.shopBtn')
        var abtMenu = document.querySelector('.abtMenu')
        var shopMenu = document.querySelector('.shopMenu')
        var cancelBtns = document.querySelectorAll('.closeButton')
        abtBtn.addEventListener('click', function(){
            abtMenu.classList.toggle('show')
            if(shopMenu.classList.contains('show')){
                shopMenu.classList.remove('show')
                shopMenu.classList.add('none')
            }
        })
        shopBtn.addEventListener('click', function(){
            shopMenu.classList.toggle('show')
            if(abtMenu.classList.contains('show')){
                abtMenu.classList.remove('show')
                abtMenu.classList.add('none')
            }
        })
        cancelBtns.forEach(cancel=>{
            cancel.addEventListener('click', function(){
                shopMenu.classList.add('none')
                shopMenu.classList.remove('show')
                abtMenu.classList.add('none')
                abtMenu.classList.remove('show')
             
        })
    })
</script>