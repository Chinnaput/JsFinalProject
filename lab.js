let calculator = {
  read() {
    this.a = prompt('Enter number 1:');
    this.b = prompt('Enter number 2:');
  },
  sum() {
    return Number(this.a) + Number(this.b);
  },
  mul() {
    return this.a * this.b;
  }
};

function calculate() {
  calculator.read();

  // คำนวณผลลัพธ์
  const sumResult = calculator.sum();
  const mulResult = calculator.mul();

  // แสดงผลลัพธ์ในหน้า HTML
  document.getElementById('sumResult').innerText = '      ผลบวก : ' + sumResult;
  document.getElementById('mulResult').innerText = '      ผลคูณ : ' + mulResult;
}

// เลือกปุ่มและเพิ่ม Event Listener เมื่อคลิก
document.addEventListener('DOMContentLoaded', function () {
  const calculateButton = document.getElementById('calculateButton');
  calculateButton.addEventListener('click', calculate);
});


function DestinyDice() {
  return Math.floor(Math.random() * 6 + 1);
}

// เลือกปุ่มและเพิ่ม Event Listener เมื่อคลิก
document.addEventListener('DOMContentLoaded', function () {
  const rollButton = document.getElementById('rollButton');
  const resultText = document.getElementById('resultText');

  rollButton.addEventListener('click', function () {
    const result = DestinyDice();
    resultText.innerText = 'ได้เลข : ' + result + ' :';
  });
});


function ucFirst(str) {
  firstChar = str.slice(0, 1);
  remainChar = str.slice(1);
  upperFirst = firstChar.toUpperCase();
  result = upperFirst + remainChar;
  return result;
}

function convertToUpperCase() {
  const inputText = document.getElementById('inputText').value;
  const output = document.getElementById('output');

  // เรียกใช้ฟังก์ชัน ucFirst() และแสดงผลลัพธ์
  const result = ucFirst(inputText);
  output.textContent = result;
}
function showAlert() {
  alert('ชินพัฒน์ ปทุมสูตร [KKTECH]');
}
function calculateHypotenuse() {
  var sideA = parseFloat(prompt("ป้อนความยาวด้าน a ของสามเหลี่ยมมุมฉาก:"));
  var sideB = parseFloat(prompt("ป้อนความยาวด้าน b ของสามเหลี่ยมมุมฉาก:"));

  var hypotenuse = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));

  var resultElement = document.getElementById("result2");
  resultElement.textContent = "ความยาวของเส้นทแยงมุม (c) คือ: " + hypotenuse.toFixed(2);
}

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: 'Chart',
      data: [13, 20, 4, 6, 3, 4],
      backgroundColor: [
        'red',
        'Blue',
        'Yellow',
        'Green',
        'Purple',
        'Orange'
    ],
      borderWidth: 5
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});

// // ข้อมูล JSON สำหรับกราฟ
// const jsonData = [
//   { label: 'A', value: 10 },
//   { label: 'B', value: 20 },
//   { label: 'C', value: 15 },
//   // ...ข้อมูลอื่น ๆ
// ];

// // ดึง canvas element ที่มี id เป็น 'myChart'
// const ctx2 = document.getElementById('myChart-2');

// // สร้าง arrays เพื่อเก็บข้อมูลสำหรับกราฟ
// const labels = jsonData.map(data => data.label);
// const values = jsonData.map(data => data.value);

// // สร้าง Chart โดยใช้ข้อมูลจาก JSON
// new Chart(ctx2, {
//   type: 'bar', // สร้างกราฟแบบ Bar Chart ในตัวอย่าง
//   data: {
//     labels: labels, // ใช้ labels จาก JSON
//     datasets: [{
//       label: 'Data',
//       data: values, // ใช้ values จาก JSON
//       backgroundColor: 'rgba(75, 192, 192, 0.2)', // สีพื้นหลังของแท่งกราฟ
//       borderColor: 'rgba(75, 192, 192, 1)', // สีเส้นขอบของแท่งกราฟ
//       borderWidth: 1
//     }]
//   },
//   options: {
//     // ตั้งค่าอื่น ๆ ของ Chart ตามต้องการ
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });

fetch('data.json')