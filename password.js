const form = document.getElementById('passwordForm');
const digits = document.querySelectorAll('.digit');
const errorMessage = document.getElementById('error-message');
const correctCode = ['0', '7', '2', '3']; // รหัสผ่านที่ตั้งไว้

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputCode = Array.from(digits).map(input => input.value);

  if (inputCode.join('') === correctCode.join('')) {
    window.location.href = 'success.html'; // เปลี่ยนไปหน้าถัดไป
  } else {
    errorMessage.classList.remove('hidden');
    setTimeout(() => errorMessage.classList.add('hidden'), 2000);

    digits.forEach(input => {
      input.classList.add('shake');
      input.value = ''; // ลบค่าทั้งหมด
      setTimeout(() => input.classList.remove('shake'), 300); // ลบคลาส shake หลังเอฟเฟกต์จบ
    });

    digits[0].focus(); // ให้ focus ที่ช่องแรก
  }
});

// ให้ focus อัตโนมัติไปช่องถัดไป
digits.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value && index < digits.length - 1) {
      digits[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace' && index > 0 && !input.value) {
      digits[index - 1].focus(); // ย้อนกลับไปที่ช่องก่อนหน้า
    }
  });
});
