var tanya = true;
while ( tanya ) {
    // Menangkap Pilihan Player
    var p = prompt('Pilih : gajah, semut, orang');

    // Menangkap Pilihan Kompeter dan Membangkitkan Bilangan Random
    var comp = Math.random();

    if( comp < 0.34 ) {
        comp = 'gajah';
    } else if( comp >= 0.34 && comp < 0.67 ) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    var hasil = '';

    // Menentukan Rules
    if( p == comp ) {
        hasil = 'Eleh Seri, Cemen Ente';
    } else if( p == 'gajah' ) {
        // if(comp == 'orang') {
        //     hasil = 'Menang';
        // }else {
        //     hasil = 'Kalah';
        // }
        hasil = ( comp == 'orang' ) ? 'baru menang, paling menang-nya CURANG!!!' : 'HAHAHAHAHA ENTE KALAH ANE BAHAGIA...';
    } else if( p == 'gajah' ) {
        hasil = ( comp == 'semut' ) ? 'HAHAHAHAHA ENTE KALAH ANE BAHAGIA...' : 'baru menang, paling menang-nya CURANG!!!';
    } else if( p == 'orang' ) {
        hasil = ( comp == 'gajah' ) ? 'HAHAHAHAHA ENTE KALAH ANE BAHAGIA...' : 'baru menang, paling menang-nya CURANG!!!';
    } else if( p == 'orang' ) {
        hasil = ( comp == 'semut' ) ? 'baru menang, paling menang-nya CURANG!!!' : 'HAHAHAHAHA ENTE KALAH ANE BAHAGIA...';
    } else if( p == 'semut' ) {
        hasil = ( comp == 'gajah' ) ? 'baru menang, paling menang-nya CURANG!!!' : 'HAHAHAHAHA ENTE KALAH ANE BAHAGIA...';
    } else if( p == 'semut' ) {
        hasil = ( comp == 'orang' ) ? 'HAHAHAHAHA ENTE KALAH ANE BAHAGIA...' : 'baru menang, paling menang-nya CURANG!!!';
    } else {
        hasil = 'Etdah Ngadi-Ngadi Bae Milih nya';
    }

    // Menampilkan Hasil
    alert('Ente Milih : ' + p + ' dan Komputer ARAB GOKIL Milih : ' + comp + '\nMaka Hasil-nya : ' + hasil);

    tanya = confirm('Ente Berani Main lagi?');
}

alert('Jiah Segitu Doang Kemampuan nya');

