
var height1 = document.getElementById('height')
var weight1 = document.getElementById('weight')
var btn = document.getElementById('btn')
function calculate(height, weight){
    if(height <=0 || weight <=0 || isNaN(height) || isNaN(weight)){ 
    alert('Vui lòng nhập lại');
}else{
    height = height/100;  
    let bmi = weight/Math.pow(height,2);
    console.log(bmi)
    return bmi;
    }
}
btn.onclick = function result(){
    var height = height1.value;
    var weight = weight1.value;
    var bmi = calculate(height,weight);
    if(bmi < 18.5){
        alert('Gầy, nguy cơ phát bệnh thấp');
    }else if(bmi >= 18.5 && bmi < 25){
        alert('Bình thường, nguy cơ phát triển bệnh trung bình');
    }
    else if(bmi >= 25.0 && bmi < 30){
        alert('Hơi béo, nguy cơ phát triển bệnh cao');
    }else if(bmi >= 30 && bmi < 35){
        alert('Béo phì cấp độ 1, nguy cơ phát triển bệnh cao');
    }else if(bmi >= 35 && bmi < 40){
        alert('Béo phì cấp độ 2, nguy cơ phát triển bệnh rất cao');
    }else if(bmi > 40){
        alert('Béo phì cấp độ 3, nguy cơ phát triển bệnh nguy hiểm');
    }
}
