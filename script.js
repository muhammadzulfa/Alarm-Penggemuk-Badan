$(document).ready(function () {
   responsiveVoice.speak("aplikasi alarm penggemuk badan dibuat oleh muhammad zulfa", "Indonesian Female");

   var jadwal = [
      '08:00', 'Menunjukkan jam 8 pagi, saatnya sarapan bersama keluarga.',
      '08:30', 'Menunjukkan jam 8 lewat 30 pagi, saatnya minum susu.',
      '10:30', 'Menunjukkan jam 10 lewat 30 pagi, saatnya makan kedua. sendiri dulu ya!',
      '13:30', 'Menunjukkan jam 1 lewat 30 siang, saatnya makan siang bersama keluarga.',
      '16:00', 'Menunjukkan jam 4 sore, saatnya makan keempat. sendiri lagi dulu ya!',
      '20:00', 'Menunjukkan jam 8 malam, saatnya makan malam bersama keluarga.',
      '21:00', 'Menunjukkan jam 9 malam, saatnya minum susu.'
   ];

   $("#jadwal").html(
      "<p id='jdwl1'>" + jadwal[0] + " - " + jadwal[1] + "</p><p id='jdwl2'>" + jadwal[
         2] + " - " +
      jadwal[3] +
      "</p><p id='jdwl3'>" + jadwal[4] + " - " + jadwal[5] + "</p><p id='jdwl4'>" + jadwal[6] + " - " +
      jadwal[7] +
      "</p><p id='jdwl5'>" + jadwal[8] + " - " + jadwal[9] + "</p><p id='jdwl6'>" + jadwal[10] + " - " +
      jadwal[11] +
      "</p><p id='jdwl7'>" + jadwal[12] + " - " + jadwal[13] + "</p>"
   );

   setInterval(function () {
      date = new Date();
      jam = date.getHours();
      menit = date.getMinutes();
      detik = date.getSeconds();

      if (jam < 10) {
         jam = "0" + jam;
      }
      if (menit < 10) {
         menit = "0" + menit;
      }
      if (detik < 10) {
         detik = "0" + detik;
      }
      $("#waktu").html(jam + ":" + menit + ":" + detik);
   }, 1000);

   setInterval(function () {
      date = new Date();
      jam = date.getHours();
      menit = date.getMinutes();

      if (jam < 10) {
         jam = "0" + jam;
      }

      if (menit < 10) {
         menit = "0" + menit;
      }

      var jdwl1 = jadwal[0].substring(3, 5);
      var resultJdwl1 = parseInt(jdwl1) + 2;
      if (resultJdwl1 < 10) {
         resultJdwl1 = "0" + resultJdwl2;
      }

      var jdwl2 = jadwal[2].substring(3, 5);
      var resultJdwl2 = parseInt(jdwl2) + 2;
      if (resultJdwl2 < 10) {
         resultJdwl2 = "0" + resultJdwl2;
      }

      var jdwl3 = jadwal[4].substring(3, 5);
      var resultJdwl3 = parseInt(jdwl3) + 2;
      if (resultJdwl3 < 10) {
         resultJdwl3 = "0" + resultJdwl3;
      }

      var jdwl4 = jadwal[6].substring(3, 5);
      var resultJdwl4 = parseInt(jdwl4) + 2;
      if (resultJdwl4 < 10) {
         resultJdwl4 = "0" + resultJdwl4;
      }

      var jdwl5 = jadwal[8].substring(3, 5);
      var resultJdwl5 = parseInt(jdwl5) + 2;
      if (resultJdwl5 < 10) {
         resultJdwl5 = "0" + resultJdwl5;
      }

      var jdwl6 = jadwal[10].substring(3, 5);
      var resultJdwl6 = parseInt(jdwl6) + 2;
      if (resultJdwl6 < 10) {
         resultJdwl6 = "0" + resultJdwl6;
      }

      var jdwl7 = jadwal[12].substring(3, 5);
      var resultJdwl7 = parseInt(jdwl7) + 2;
      if (resultJdwl7 < 10) {
         resultJdwl7 = "0" + resultJdwl7;
      }

      if (jam + ":" + menit >= jadwal[0] && jam + ":" + menit < jadwal[0].substring(0, 2) + ":" +
         resultJdwl1) {
         $("#jdwl1").toggleClass("active");
         responsiveVoice.speak(jadwal[1], "Indonesian Female");
      } else if (jam + ":" + menit >= jadwal[2] && jam + ":" + menit < jadwal[2].substring(0, 2) +
         ":" + resultJdwl2) {
         $("#jdwl2").toggleClass("active");
         responsiveVoice.speak(jadwal[3], "Indonesian Female");
      } else if (jam + ":" + menit >= jadwal[4] && jam + ":" + menit < jadwal[4].substring(0, 2) +
         ":" + resultJdwl3) {
         $("#jdwl3").toggleClass("active");
         responsiveVoice.speak(jadwal[5], "Indonesian Female");
      } else if (jam + ":" + menit >= jadwal[6] && jam + ":" + menit < jadwal[6].substring(0, 2) +
         ":" + resultJdwl4) {
         $("#jdwl4").toggleClass("active");
         responsiveVoice.speak(jadwal[7], "Indonesian Female");
      } else if (jam + ":" + menit >= jadwal[8] && jam + ":" + menit < jadwal[8].substring(0, 2) +
         ":" + resultJdwl5) {
         $("#jdwl5").toggleClass("active");
         responsiveVoice.speak(jadwal[9], "Indonesian Female");
      } else if (jam + ":" + menit >= jadwal[10] && jam + ":" + menit < jadwal[10].substring(0, 2) +
         ":" + resultJdwl6) {
         $("#jdwl6").toggleClass("active");
         responsiveVoice.speak(jadwal[11], "Indonesian Female");
      } else if (jam + ":" + menit >= jadwal[12] && jam + ":" + menit < jadwal[12].substring(0, 2) +
         ":" + resultJdwl7) {
         $("#jdwl7").toggleClass("active");
         responsiveVoice.speak(jadwal[13], "Indonesian Female");
      }
   }, 20000);
});