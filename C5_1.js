function bingchilling(){
    let a = document.getElementById("vn").checked ? 1 : 0;
    let b = document.getElementById("en").checked ? 1 : 0;
    let c = document.getElementById("cn").checked ? 1 : 0;
    let noti = document.getElementById("noti");
    let image = document.getElementById("image");
    if(c == 1){
        noti.innerHTML = "Chúc mừng bạn đã chọn câu trả lời đúng!";
        image.innerHTML = "<img src=\'https://a.pinatafarm.com/974x545/637f157a24/social-credit.jpg\' width=\'800px\' height=\'450px\'>";
        alert("Chúc mừng bạn đã trả lời đúng! Phần quà của bạn là nhận được 1 bingchilling và nhận được thêm rất nhiều thêm Social Credits! UwU");
    }
    else if(a ==1 || b==1){
        noti.innerHTML = "Bạn đã trả lời sai và đây là hình phạt của bạn!";
        image.innerHTML = "<img src=\'https://pbs.twimg.com/media/FOX0CdfXoAE_q8J.png\' width=\'800px\' height=\'450px\'>";
        alert("Bạn đã chọn sai đáp án! Bạn đã bị trừ Social Credits! >:(");
    }
    else{
        noti.innerHTML = "Chọn nhanh cái câu trả lời của bạn nào!";
        alert("Bạn chưa chọn đáp án!")
    }
}