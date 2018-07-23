
function turnon() { 
  var x = document.getElementById('myImage');
  if (x.src == 'https://www.w3schools.com/js/pic_bulbon.gif' ) {
    x.src ='https://www.w3schools.com/js/pic_bulboff.gif';
  }
  else {
    x.src = 'https://www.w3schools.com/js/pic_bulbon.gif';
  }
}

function turnoff() { document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulboff.gif'; }

//console.log(document.getElementById("demo"));

setInterval(hienthi, 100);
var str = "Từ năm 2014, Hệ thống đào tạo lập trình viên quốc tế Softech Aptech cam kết bằng văn bản tạo việc làm cho học viên tốt nghiệp với lương khởi điểm 4 triệu / tháng. Đây là cách tạo nguồn nhân lực có tay nghề đáp ứng nhu cầu của cộng đồng các nhà tuyển dụng Việt Nam và quốc tế.";
var n = str.length;
var i=0;
  
function hienthi() {
  i++;
  document.getElementById("demo").innerHTML = str.substring(0, i);
} 
