pictures = ["images/Jose.png", "images/How to talk to a deer.jpg", "images/camp_fire.png", "images/holan.PNG", "images/curry.png", "images/Chapman.png"]
titles = ["十人訂閱慶祝影片", "How to talk to a deer", "José Antonio 的野外生存小教室", "呼蘭可汗又犯邊疆", "咖喱飯非飯", "What is this player?"]
links = [
    "https://www.youtube.com/watch?v=zEANP23PJLU",
    "https://www.youtube.com/watch?v=BQWG9R_0J6U",
    "https://www.youtube.com/watch?v=sleETvGygTQ",
    "https://www.youtube.com/watch?v=TbnExwck_3E",
    "https://www.youtube.com/watch?v=q8eY7aVUhzI&t=1s",
    "https://www.youtube.com/watch?v=AEkXJFfv9mE"
]

var i = 1;

back_buttom = document.getElementById("previous")
back_buttom.addEventListener(
    "click",
    function(){
        if (i>0){
            i-=1;
            next_buttom.className = "image-viewer__button";
            document.getElementById("display").src = "images/loading.gif"
        } else {
            i=i;
            back_buttom.className = "disabled";
            alert("Subscribe to my channel to see more videos.");
        }
        document.getElementById("display").src = pictures[i];
        document.getElementById("display").title = titles[i];
        document.getElementById("display").alt = titles[i];
        document.getElementById("display_link").href = links[i];
        document.getElementById("source").href = links[i];
        document.getElementById("source").innerHTML = links[i];
    }
);

next_buttom = document.getElementById("next")
next_buttom.addEventListener(
    "click",
    function(){
        if (i<pictures.length-1){
            i+=1;
            back_buttom.className = "image-viewer__button";
            document.getElementById("display").src = "images/loading.gif"
        } else {
            i=i;
            next_buttom.className = "disabled";
            alert("Subscribe to my channel to see more videos.");
        }
        document.getElementById("display").src = pictures[i];
        document.getElementById("display").title = titles[i];
        document.getElementById("display").alt = titles[i];
        document.getElementById("display_link").href = links[i];
        document.getElementById("source").href = links[i];
        document.getElementById("source").innerHTML = links[i];
    }
);

