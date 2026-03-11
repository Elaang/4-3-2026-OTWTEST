// Ambil elemen form dan tombol reset
var form     = document.getElementById('courseForm');
var resetBtn = document.getElementById('resetBtn');

// Dengarkan event submit pada form
form.addEventListener('submit', function(e) {

    // Cegah halaman reloadz
    e.preventDefault();

    // 1. AMBIL NILAI INPUT
    var name     = document.getElementById('studentName').value;
    var dob      = document.getElementById('dob').value;
    var gender   = document.querySelector('input[name="gender"]:checked');
    var religion = document.getElementById('religion').value;
    var hobbies  = document.querySelectorAll('.hobby:checked');

    // 2. RESET PESAN LAMA
    document.getElementById('outputname').innerText     = '';
    document.getElementById('outputname').className     = '';
    document.getElementById('outputdob').innerText      = '';
    document.getElementById('outputdob').className      = '';
    document.getElementById('outputgender').innerText   = '';
    document.getElementById('outputgender').className   = '';
    document.getElementById('outputreligion').innerText = '';
    document.getElementById('outputreligion').className = '';
    document.getElementById('outputhobbies').innerText  = '';
    document.getElementById('outputhobbies').className  = '';
    document.getElementById('output').style.display     = 'none';
    document.getElementById('output').innerText         = '';

    // 3. VALIDASI
    var ada_error = false;

    // Cek nama
    if (name == '') {
        document.getElementById('outputname').innerText   = 'Full Name cannot be empty!';
        document.getElementById('outputname').className   = 'error';
        ada_error = true;
    } else {
        document.getElementById('outputname').innerText   = 'Full Name looks good!';
        document.getElementById('outputname').className   = 'success';
    }

    // Cek tanggal lahir
    if (dob == '') {
        document.getElementById('outputdob').innerText  = 'Date of Birth must be selected!';
        document.getElementById('outputdob').className  = 'error';
        ada_error = true;
    } else {
        document.getElementById('outputdob').innerText  = 'Date of Birth looks good!';
        document.getElementById('outputdob').className  = 'success';
    }

    // Cek gender
    if (gender == null) {
        document.getElementById('outputgender').innerText  = 'Gender must be selected!';
        document.getElementById('outputgender').className  = 'error';
        ada_error = true;
    } else {
        document.getElementById('outputgender').innerText  = 'Gender looks good!';
        document.getElementById('outputgender').className  = 'success';
    }

    // Cek agama
    if (religion == '') {
        document.getElementById('outputreligion').innerText  = 'Religion must be selected!';
        document.getElementById('outputreligion').className  = 'error';
        ada_error = true;
    } else {
        document.getElementById('outputreligion').innerText  = 'Religion looks good!';
        document.getElementById('outputreligion').className  = 'success';
    }

    // Cek checkbox
    if (hobbies.length == 0) {
        document.getElementById('outputhobbies').innerText  = 'At least one checkbox must be selected!';
        document.getElementById('outputhobbies').className  = 'error';
        ada_error = true;
    } else {
        document.getElementById('outputhobbies').innerText  = 'Information source looks good!';
        document.getElementById('outputhobbies').className  = 'success';
    }

    // 4. TAMPILKAN RINGKASAN

    // Kalau ada error, berhenti di sini
    if (ada_error == true) {
        return;
    }

    // Kumpulkan semua checkbox yang dicentang
    var daftar_hobby = '';
    hobbies.forEach(function(hobby) {
        daftar_hobby += '\n- ' + hobby.value;
    });

    // Tulis ringkasan sesuai format yang diminta
    var ringkasan = '=== REGISTRATION DATA ===' + '\n' +
                    'Full Name    : ' + name           + '\n' +
                    'Date of Birth: ' + dob            + '\n' +
                    'Gender       : ' + gender.value   + '\n' +
                    'Religion     : ' + religion       + '\n' +
                    'Info Source  : ' + daftar_hobby;

    // Tampilkan ringkasan
    document.getElementById('output').innerText      = ringkasan;
    document.getElementById('output').style.display  = 'block';

    setTimeout(function() {
    resetBtn.click();
}, 7500);

});



// reset
resetBtn.addEventListener('click', function() {

    // reset isinya form
    document.getElementById('courseForm').reset();

    // menghilangkan pesan error/success
    document.getElementById('outputname').innerText     = '';
    document.getElementById('outputname').className     = '';
    document.getElementById('outputdob').innerText      = '';
    document.getElementById('outputdob').className      = '';
    document.getElementById('outputgender').innerText   = '';
    document.getElementById('outputgender').className   = '';
    document.getElementById('outputreligion').innerText = '';
    document.getElementById('outputreligion').className = '';
    document.getElementById('outputhobbies').innerText  = '';
    document.getElementById('outputhobbies').className  = '';

    // Sembunyikan ringkasan
    document.getElementById('output').style.display = 'none';
    document.getElementById('output').innerText     = '';

});