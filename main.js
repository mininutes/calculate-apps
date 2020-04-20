$(document).ready(function () {
  
    // =============== FUNGSI PENJUMLAHAN ================
    document.getElementById("addnum1").oninput = function () { add() };
    document.getElementById("addnum2").oninput = function () { add() };
    document.getElementById("addresult").style.backgroundColor = "white";

    function add() {
       var a =  document.getElementById("addnum1").value;
       var b = document.getElementById("addnum2").value;
        a = parseInt(a);
        b = parseInt(b);
        
        if(isNaN(a) == true) a = 0;

        if(isNaN(b) == true) b = 0;

        var c = a + b;

        // if(c == 0)    c = "";

        if( c > 9999){
            alert("Hasil penjumlahan tidak boleh melebihi ribuan");
            document.getElementById("addresult").value = ""; 
            document.getElementById("addresult").style.backgroundColor = "white";
            document.getElementById("addwords").value = "";
        } else {
            if (c % 2 == 0 && c != 0){

                document.getElementById("addresult").style.backgroundColor = "green";
                document.getElementById("addresult").style.color = "white";

            } else if(c % 2 != 0){


                document.getElementById("addresult").style.backgroundColor = "yellow";
                document.getElementById("addresult").style.color = "black";

            } else if (c == 0){

                document.getElementById("addresult").style.backgroundColor = "white";
                document.getElementById("addresult").style.color = "black";

            }
            
            document.getElementById("addresult").value = c; 

            document.getElementById("addwords").value = terbilang(c).replace(/  +/g, ' ')
        }

    }


    // ========= FUNGSI PENGURANGAN =============

    document.getElementById("subsnum1").oninput = function () { substraction() };
    document.getElementById("subsnum2").oninput = function () { substraction() };
    document.getElementById("subsresult").style.backgroundColor = "white";

    function substraction() {
        var a = document.getElementById("subsnum1").value;
        var b = document.getElementById("subsnum2").value;
        a = parseInt(a);
        b = parseInt(b);
        if (isNaN(a) == true) a = 0;

        if (isNaN(b) == true) b = 0;

        var c = a - b;

        // if (c == 0) c = "";

        if (c > 9999) {
            alert("Hasil pengurangan tidak boleh melebihi ribuan");
            document.getElementById("subsresult").value = "";
            document.getElementById("subsresult").style.backgroundColor = "white";
            document.getElementById("subswords").value = "";
        } else {
            if (c % 2 == 0 && c != 0) {

                document.getElementById("subsresult").style.backgroundColor = "green";
                document.getElementById("subsresult").style.color = "white";
            } else if (c % 2 != 0) {


                document.getElementById("subsresult").style.backgroundColor = "yellow";
                document.getElementById("subsresult").style.color = "black";

            } else if (c == 0) {

                document.getElementById("subsresult").style.backgroundColor = "white";
                document.getElementById("subsresult").style.color = "black";

            }

            document.getElementById("subsresult").value = c;

            document.getElementById("subswords").value = terbilang(c).replace(/  +/g, ' ')
        }

    }

    // ========= FUNGSI PEMBAGIAN =============

    document.getElementById("divnum1").oninput = function () { division() };
    document.getElementById("divnum2").oninput = function () { division() };
    document.getElementById("divresult").style.backgroundColor = "white";

    function division() {
        var a = document.getElementById("divnum1").value;
        var b = document.getElementById("divnum2").value;
        a = parseInt(a);
        b = parseInt(b);
        if (isNaN(a) == true) a = 0;

        if (isNaN(b) == true) b = 0;

        var c = a / b;

        // if (c == 0) c = "";

        if (c > 9999) {
            alert("Hasil pembagian tidak boleh melebihi ribuan");
            document.getElementById("divresult").value = "";
            document.getElementById("divresult").style.backgroundColor = "white";
            document.getElementById("divwords").value = "";
        } else {
            if (c % 2 == 0 && c != 0) {

                document.getElementById("divresult").style.backgroundColor = "green";
                document.getElementById("divresult").style.color = "white";

            } else if (c % 2 != 0) {
                c= c.toFixed(2)

                document.getElementById("divresult").style.backgroundColor = "yellow";
                document.getElementById("divresult").style.color = "black";

            } else if (c == 0) {

                document.getElementById("divresult").style.backgroundColor = "white";
                document.getElementById("divresult").style.color = "black";

            }

            document.getElementById("divresult").value = c;

            document.getElementById("divwords").value = terbilang(c).replace(/  +/g, ' ')
        }

    }

    // ========= FUNGSI PERKALIAN =============

    document.getElementById("multinum1").oninput = function () { multiplication() };
    document.getElementById("multinum2").oninput = function () { multiplication() };
    document.getElementById("multiresult").style.backgroundColor = "white";

    function multiplication() {
        var a = document.getElementById("multinum1").value;
        var b = document.getElementById("multinum2").value;
        a = parseInt(a);
        b = parseInt(b);
        if (isNaN(a) == true) a = 0;

        if (isNaN(b) == true) b = 0;

        var c = a * b;

        // if (c == 0) c = "";

        if (c > 9999) {
            alert("Hasil perkalian tidak boleh melebihi ribuan");
            document.getElementById("multiresult").value = "";
            document.getElementById("multiresult").style.backgroundColor = "white";
            document.getElementById("multiwords").value = "";
        } else {
            if (c % 2 == 0 && c != 0) {

                document.getElementById("multiresult").style.backgroundColor = "green";
                document.getElementById("multiresult").style.color = "white";

            } else if (c % 2 != 0) {


                document.getElementById("multiresult").style.backgroundColor = "yellow";
                document.getElementById("multiresult").style.color = "black";

            } else if (c == 0) {

                document.getElementById("multiresult").style.backgroundColor = "white";
                document.getElementById("multiresult").style.color = "black";

            }

            document.getElementById("multiresult").value = c;

            document.getElementById("multiwords").value = terbilang(c).replace(/  +/g, ' ')
        }

    }




    $("#menu-1").on('click', function (event) {
        var a = document.getElementById("card-1").querySelectorAll("input, textarea");
        a.forEach(itema => {
            itema.style.backgroundColor = "white";
            // itema.readOnly = false;
        });

            
        var menu =["card-2", "card-3", "card-4"];
        menu.forEach(elemmenu => {
            var x = document.getElementById(elemmenu).querySelectorAll("input, textarea");
            x.forEach(item => {
                item.style.backgroundColor = "#BDB76B";
                // item.readOnly = true;
            });
        });
       

    });

    $("#menu-2").on('click', function (event) {
        var a = document.getElementById("card-2").querySelectorAll("input, textarea");
        a.forEach(itema => {
            itema.style.backgroundColor = "white";
            // itema.readOnly = false;
        });

        var menu =["card-1", "card-3", "card-4"];
        menu.forEach(elemmenu => {
            var x = document.getElementById(elemmenu).querySelectorAll("input, textarea");
            x.forEach(item => {
                item.style.backgroundColor = "#BDB76B";
                // item.readOnly = true;
            });
        });
    });


    $("#menu-3").on('click', function (event) {
        var a = document.getElementById("card-3").querySelectorAll("input, textarea");
        a.forEach(itema => {
            itema.style.backgroundColor = "white";
            // itema.readOnly = false;
        });

        var menu =["card-1", "card-2", "card-4"];
        menu.forEach(elemmenu => {
            var x = document.getElementById(elemmenu).querySelectorAll("input, textarea");
            x.forEach(item => {
                item.style.backgroundColor = "#BDB76B";
                // item.readOnly = true;
            });
        });
    });

    $("#menu-4").on('click', function (event) {
        var a = document.getElementById("card-4").querySelectorAll("input, textarea");
        a.forEach(itema => {
            itema.style.backgroundColor = "white";
            // itema.readOnly = false;
        });

        var menu = ["card-1", "card-2", "card-3"];
        menu.forEach(elemmenu => {
            var x = document.getElementById(elemmenu).querySelectorAll("input, textarea");
            x.forEach(item => {
                item.style.backgroundColor = "#BDB76B";
                // item.readOnly = true;
            });
        });
    });

    $("#addnum1").focus(function () {
        var a = document.getElementById("addnum1").nodeValue;

    }); 

    function terbilang(bilangan) {

        bilangan = String(bilangan);
        var angka = new Array('0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0');
        var kata = new Array('', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan');
        var tingkat = new Array('', 'Ribu');

        var panjang_bilangan = bilangan.length;

        /* pengujian panjang bilangan */
        if (panjang_bilangan > 15) {
            kaLimat = "-";
            return kaLimat;
        }

        /* mengambil angka-angka yang ada dalam bilangan, dimasukkan ke dalam array */
        for (i = 1; i <= panjang_bilangan; i++) {
            angka[i] = bilangan.substr(-(i), 1);
        }

        i = 1;
        j = 0;
        kaLimat = "";


        /* mulai proses iterasi terhadap array angka */
        while (i <= panjang_bilangan) {

            subkaLimat = "";
            kata1 = "";
            kata2 = "";
            kata3 = "";

            /* untuk Ratusan */
            if (angka[i + 2] != "0") {
                if (angka[i + 2] == "1") {
                    kata1 = "Seratus";
                } else {
                    kata1 = kata[angka[i + 2]] + " Ratus";
                }
            }

            /* untuk Puluhan atau Belasan */
            if (angka[i + 1] != "0") {
                if (angka[i + 1] == "1") {
                    if (angka[i] == "0") {
                        kata2 = "Sepuluh";
                    } else if (angka[i] == "1") {
                        kata2 = "Sebelas";
                    } else {
                        kata2 = kata[angka[i]] + " Belas";
                    }
                } else {
                    kata2 = kata[angka[i + 1]] + " Puluh";
                }
            }

            /* untuk Satuan */
            if (angka[i] != "0") {
                if (angka[i + 1] != "1") {
                    kata3 = kata[angka[i]];
                }
            }

            /* pengujian angka apakah tidak nol semua, lalu ditambahkan tingkat */
            if ((angka[i] != "0") || (angka[i + 1] != "0") || (angka[i + 2] != "0")) {
                subkaLimat = kata1 + " " + kata2 + " " + kata3 + " " + tingkat[j] + " ";
            }

            /* gabungkan variabe sub kaLimat (untuk Satu blok 3 angka) ke variabel kaLimat */
            kaLimat = subkaLimat + kaLimat;
            i = i + 3;
            j = j + 1;

        }

        /* mengganti Satu Ribu jadi Seribu jika diperlukan */
        if ((angka[5] == "0") && (angka[6] == "0")) {
            kaLimat = kaLimat.replace("Satu Ribu", "Seribu");
        }

        kaLimat = kaLimat.replace("undefined Puluh", "Negatif ");

        return kaLimat;
    }

});