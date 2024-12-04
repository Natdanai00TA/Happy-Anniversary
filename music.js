const playButton = document.getElementById('playButton');
const audioPlayer = document.getElementById('audioPlayer');
const displayArea = document.getElementById('displayArea');
const buttonIcon = document.getElementById('buttonIcon');
const buttonText = document.getElementById('buttonText');

// ข้อมูลของรูปภาพและข้อความที่จะแสดง
const slides = [
  { img: 'รูป/1.jpg', text: 'แปปเดียวเองเนาะอยู่ด้วยกันมาหนึ่งปีแล้ว' },
  { img: 'รูป/2.jpeg', text: 'ตั้งแต่วันแรกจนถึงวันนี้' },
  { img: 'รูป/3.jpg', text: 'เค้าไม่เคยรักเธอน้อยลงเลยนะะ' },
  { img: 'รูป/4.jpg', text: 'ถึงจะมีทะเลาะไม่เข้าใจกันบ้าง' },
  { img: 'รูป/5.jpg', text: 'แต่เค้ายังคงรักเธอเหมือนวันแรกเลยนะ' },
  { img: 'รูป/6.jpg', text: 'ตั้งแต่มีเธอ' },
  { img: 'รูป/7.jpg', text: 'เค้ามีความสุขมากๆเลย' },
  { img: 'รูป/8.jpg', text: 'เค้ารู้สึกโชคดีมากๆเลย' },
  { img: 'รูป/9.jpg', text: 'เธอคอยมอบความรัก' },
  { img: 'รูป/10.jpg', text: 'มอบความอบอุ่นให้เค้ามาตลอด' },
  { img: 'รูป/11.jpg', text: 'เธอทำให้เค้าเข้าใจว่าความรักเป็นอย่างไร' },
  { img: 'รูป/12.jpg', text: 'เธอเป็นคนที่เคียงข้างเค้ามาตลอด' },
  { img: 'รูป/13.jpg', text: 'ในระยะเวลา 1 ปี' },
  { img: 'รูป/14.jpg', text: 'เค้าขอบคุณเธอมากๆเลยนะ' },
  { img: 'รูป/15.jpg', text: 'เค้าอยู่คนเดียวไม่ได้อีกแล้ว' },
  { img: 'รูป/16.jpg', text: 'มีเธอมันดีกว่าจริงๆ' },
  { img: 'รูป/17.jpg', text: 'ขอบคุณเธอที่คอยเคียงข้างเค้า' },
  { img: 'รูป/18.jpg', text: 'คอยให้กำลังใจเค้า' },
  { img: 'รูป/19.jpg', text: 'คอยปลอบเค้า' },
  { img: 'รูป/20.jpg', text: 'คอยโอ๋เค้าเวลาที่เค้าเหนื่อย' },
  { img: 'รูป/21.jpg', text: 'ขอบคุณเธอที่ใส่ใจเค้ามาโดยตลอด' },
  { img: 'รูป/22.jpg', text: 'ขอบคุณเธอที่ให้อภัยเค้าเสมอมา' },
  { img: 'รูป/23.jpg', text: 'เธอเป็นคนที่เค้ารักจริงๆนะ' },
  { img: 'รูป/24.jpg', text: 'และเค้าจะรักเธอตลอดไป' },
  { img: 'รูป/25.jpg', text: 'โลกเค้าคงจะไม่สดใสขนาดนี้' },
  { img: 'รูป/26.jpg', text: 'เค้าคงจะไม่ได้เป็นต้าที่สดใสในทุกวัน' },
  { img: 'รูป/27.jpg', text: 'ถ้าเค้าไม่ได้เจอเธอ' },
  { img: 'รูป/28.jpg', text: 'เค้าเป็นคนที่โชคดีที่สุดในโลก' },
  { img: 'รูป/29.jpg', text: 'เค้าดีใจมากๆเลยนะ' },
  { img: 'รูป/30.jpg', text: 'ที่ได้เจอเธอ' },
  { img: 'รูป/31.jpg', text: 'ดีใจตั้งแต่วันแรกจนถึงวันนี้' },
  { img: 'รูป/32.jpg', text: 'เค้าคิดอยู่เสมอ คิดมาตลอด' },
  { img: 'รูป/33.jpg', text: 'ว่าเค้าโชคดีขนาดไหน' },
  { img: 'รูป/34.jpg', text: 'เธอทำให้วันธรรมดาๆของเค้า' },
  { img: 'รูป/35.jpg', text: 'กลายเป็นวันที่สดใสมากๆเลยนะ' },
  { img: 'รูป/36.jpg', text: 'ไม่ว่าจะอีกกี่ปี' },
  { img: 'รูป/37.jpg', text: 'เค้าอยากมีเธอไปตลอดเลยนะ' },
  { img: 'รูป/38.jpg', text: 'ในอนาคต' },
  { img: 'รูป/39.jpg', text: 'ขอให้เค้ามีเธอตลอดเลยนะ' },
  { img: 'รูป/40.jpg', text: 'เค้าจะเคียงข้างเธอ' },
  { img: 'รูป/41.jpg', text: 'เหมือนที่เธอเคียงข้างเค้ามาตลอด' },
  { img: 'รูป/42.jpg', text: 'เค้าจะทำให้เธอภูมิใจนะ' },
  { img: 'รูป/43.jpg', text: 'ไม่ว่าจะเป็นวันที่น่าเบื่อ' },
  { img: 'รูป/44.jpg', text: 'วันที่เธอเหนื่อย' },
  { img: 'รูป/45.jpg', text: 'วันที่เธอเศร้า' },
  { img: 'รูป/46.jpg', text: 'เค้าก็จะคอยอยู่กับเธอนะะ' },
  { img: 'รูป/47.jpg', text: 'เค้าจะผ่านทุกปัญหาไปกับเธอ' },
  { img: 'รูป/48.jpeg', text: 'เค้าจะเติบโตไปพร้อมเธอ' },
  { img: 'รูป/49.jpg', text: 'ถ้าเธอดูมาถึงตอนนี้' },
  { img: 'รูป/50.jpg', text: 'เหมือนน้ำตาเค้ากำลังจะไหลล' },
  { img: 'รูป/52.jpg', text: 'การที่มีเธอ' },
  { img: 'รูป/53.jpg', text: 'ทำให้โลกของเค้ามีชีวิตชีวาขึ้นมากเลย' },
  { img: 'รูป/54.jpg', text: 'ขอบคุณเธออีกครั้งนะ' },
  { img: 'รูป/55.jpg', text: 'ที่อยู่กับเค้ามา 1 ปีแล้ว' },
  { img: 'รูป/56.jpg', text: 'ผ่านเรื่องมากมายมาด้วยกัน' },
  { img: 'รูป/57.jpg', text: 'ตอนนี้เพลงก็น่าจะใกล้จบแล้ว' },
  { img: 'รูป/58.jpg', text: 'สิ่งเล็กๆอันนี้ที่เค้าทำให้เธอ' },
  { img: 'รูป/59.jpg', text: 'ถึงจะไม่เลิศเลอเท่าไหร่' },
  { img: 'รูป/60.jpg', text: 'แต่เค้าทำด้วยใจจริงๆนะ' },
  { img: 'รูป/61.jpg', text: 'เค้าหวังว่าเธอจาชอบบน้าาา' },
  { img: 'รูป/62.jpg', text: 'สุดท้ายแล้ว' },
  { img: 'รูป/63.jpg', text: 'อยู่กับเค้าไปนานๆเลยนะะ' },
  { img: 'รูป/64.jpg', text: 'อยู่มอบความรักให้เค้าไปตลอดเลยย' },
  { img: 'รูป/65.jpg', text: 'เค้ารักเธอนะะ' },
];

let currentSlide = 0;
let slideInterval;
let isSlideshowEnded = false; // ตัวแปรเช็คว่า slideshow จบหรือยัง

playButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    buttonIcon.textContent = '⏸️'; // เปลี่ยนเป็นไอคอนหยุด
    buttonText.textContent = 'หยุดเพลง';
    isSlideshowEnded = false; // รีเซ็ตสถานะเมื่อเริ่มเล่นใหม่

    // เริ่มแสดงรูปภาพและข้อความ
    startSlideshow();
  } else {
    audioPlayer.pause();
    buttonIcon.textContent = '🎶'; // เปลี่ยนกลับเป็นไอคอนเล่น
    buttonText.textContent = 'เล่นเพลง';

    // หยุดการแสดงรูปภาพและข้อความ
    stopSlideshow();
  }
});

audioPlayer.addEventListener('ended', () => {
  stopSlideshow();
  showNextPageButton(); // เรียกปุ่มเมื่อเพลงจบ
});

function startSlideshow() {
  displayArea.innerHTML = ''; // ล้างพื้นที่แสดงก่อน
  currentSlide = 0;
  showSlide();

  // ตั้งค่าเวลาสลับรูปภาพให้จบพอดีกับเพลง
  const slideDuration = audioPlayer.duration / slides.length;
  slideInterval = setInterval(() => {
    if (!isSlideshowEnded) {
      fadeOut(() => {
        currentSlide++;
        if (currentSlide >= slides.length) {
          clearInterval(slideInterval);
          isSlideshowEnded = true; // ตั้งสถานะว่าจบ
          showNextPageButton(); // แสดงปุ่มเมื่อ slideshow จบ
        } else {
          showSlide();
        }
      });
    }
  }, slideDuration * 1000);
}

function stopSlideshow() {
  clearInterval(slideInterval);
}

function showSlide() {
  const slide = slides[currentSlide];
  displayArea.innerHTML = `
    <img src="${slide.img}" alt="Cute Image">
    <p>${slide.text}</p>
  `;
  fadeIn();
}

function fadeIn() {
  displayArea.classList.add('visible');
}

function fadeOut(callback) {
  displayArea.classList.remove('visible');
  setTimeout(() => {
    if (callback) callback();
  }, 1000); // ระยะเวลา 1 วินาทีสำหรับการจางหาย
}

function showNextPageButton() {
  displayArea.innerHTML = `
   <div>
     <p>เพลงจบแล้ว! 😊</p>
      <button id="nextPageButton" class="next-button">
        ไปหน้าต่อไป 🐾
      </button>
    </div>
  `;
  
  const nextPageButton = document.getElementById('nextPageButton');
  nextPageButton.addEventListener('click', () => {
    window.location.href = 'password.html'; // เปลี่ยนลิงก์ไปหน้าถัดไป
  });

  // ลบการ fadeOut เพื่อไม่ให้ปุ่มหาย
  displayArea.classList.add('visible'); // ทำให้ปุ่มค้างไว้
}
  


