function krediHesapla()
{
   var cekilecekTutar,vadeSayisi,aylikTaksit,odenecekToplamTutar;
   

   cekilecekTutar=document.querySelector("#kredi").value;

   var vade= document.querySelector("#inputGroupSelect02");
   vadeSayisi=vade.options[vade.selectedIndex].value;

   if(vadeSayisi==12)
   {
       odenecekToplamTutar=cekilecekTutar*2.93;
   }
   else if(vadeSayisi==24)
   {
       odenecekToplamTutar=cekilecekTutar*2.34;
   }
   else if(vadeSayisi==36)
   {
       odenecekToplamTutar=cekilecekTutar*1.89;
   }
   else if(vadeSayisi==48)
   {
       odenecekToplamTutar=cekilecekTutar*1.77;
   }
   aylikTaksit=odenecekToplamTutar/vadeSayisi;


   document.querySelector("#btn").addEventListener("click",credi);

   function credi()
   {


    Swal.fire({
        title: 'KREDİ BİLGİLERİNİZ',
        // text: 'Aylık Taksit Tutarınız:'+aylikTaksit.toFixed(2)+'Toplam Ödeme:'+odenecekToplamTutar,
        html: 'Aylık Taksit Tutarınız: ' + aylikTaksit.toFixed(2)+'₺' + '<br>Toplam Ödeme: ' + odenecekToplamTutar+'₺' ,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'KREDİ KULLAN',
        cancelButtonText: 'VAZGEÇ'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'KREDİ KULLANILDI!',
            'Tebrikler, Kredinizi Başarıyla Kullandınız.',
            'success',
           
            
          )
        }
      })
   }

   
}
document.querySelector("#btn").addEventListener("click", krediHesapla);
