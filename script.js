
var arr_kategori ={
    "sosial" : {
        "abodemen" : 10000,
        "tarif" : 300,
        "pajak" : 0
    },
    "rumah" : {
        "abodemen" : 30000,
        "tarif" : 500,
        "pajak" : 0.1
    },
    "apartemen" : {
        "abodemen" : 50000,
        "tarif" : 750,
        "pajak" : 0.15
    },
    "industri" : {
        "abodemen" : 75000,
        "tarif" : 1000,
        "pajak" : 0.2
    },
    "villa" : {
        "abodemen" : 100000,
        "tarif" : 1250,
        "pajak" : 0.25
    }
}

function hitungTagihan(){
    var nama = document.getElementById("name").value;
    var kategori = document.getElementById("kategori").value;
    var jumlah = document.getElementById("jumlah").value;

    if (nama == ""){
        alert("Nama belum diisi !")
    }
    else if (jumlah == ""){
        alert("Masukkan jumlah hari!")
    }
    else{
        let content = document.getElementById("content")
        let tagihan = arr_kategori[kategori]
        let abodemen = tagihan.abodemen
        for (let i = 1; i <= jumlah; i++) {
            let tarif = tagihan.tarif*i
            let subtotal = tarif + abodemen
            console.log(tagihan,tarif,abodemen,subtotal)
            
            content.innerHTML += `
            <tr>
                <td>${i}</td>
                <td>${tarif}</td>
                <td>${abodemen}</td>
                <td>${subtotal}</td>
            </tr>`
        }
        let subtotal_text = document.getElementById('subtotal')
        let pajak_text = document.getElementById('pajak')
        let bayar_text = document.getElementById('bayar')
        subtotal_text.innerText = `Subtotal : ${tagihan.tarif*jumlah + abodemen}`
        pajak_text.innerText = `Pajak : ${tagihan.pajak*(tagihan.tarif*jumlah + abodemen)}`
        bayar_text.innerText = `Total Bayar : ${(tagihan.tarif*jumlah + abodemen) + (tagihan.pajak*(tagihan.tarif*jumlah + abodemen))}`
    }
}