//ihtiyaç duyulan elementler
const not1Input=document.getElementById('not1');
const not2Input=document.getElementById('not2');
const not3Input=document.getElementById('not3');
const gecmeNotu=document.getElementById('gecmeNotu');
const hesaplaBtn=document.getElementById('hesapla');
const sifirlaBtn=document.getElementById('sifirla');
const sonucYaz=document.getElementById('sonuc');


//events
hesaplaBtn.addEventListener("click", function(){
    if(not1Input.value==='' || not2Input.value===''||not3Input.value===''||gecmeNotu.value===''){
        alert('Lütfen boş alanları doldurunuz.')
        return
    }else{
        var hesap=((parseInt(not1Input.value)+parseInt(not2Input.value)+parseInt(not3Input.value))/3);
        var hesapSon = hesap.toFixed();

        let paragraph = document.createElement('p');
        sonucYaz.appendChild(paragraph);
        if(hesap>=gecmeNotu.value){
        paragraph.innerText=`Ortalamanız ${hesapSon}. Dersten geçtiniz.`
        }else{
        paragraph.innerText=`Ortalamanız ${hesapSon}. Dersten kaldınız.`
        }
    }

    not1Input.value='';
    not2Input.value='';
    not3Input.value='';
    gecmeNotu.value='';
    
})

sifirlaBtn.addEventListener("click",function(){
    sonucYaz.innerText='';
    let baslik = document.createElement('h3');
    sonucYaz.appendChild(baslik);
    baslik.innerText='SONUÇ:';

})
