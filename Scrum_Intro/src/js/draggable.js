const shrimp = document.querySelector(".candidate");
const backlog = document.querySelector(".productBacklog");
//綁定 HTML 元素
let dragging = null;
shrimp.addEventListener("dragstart", (event) => {
    //對 draggables 增加 dragstart 的監聽事件
    console.log("drag start");
    dragging = event.target;
    console.log(dragging);
    //透過 event.target 來偵測當前拖曳目標，且儲存在 dragging 中
});
shrimp.addEventListener("dragend", (event) => {
    //對 draggables 增加 dragend 的監聽事件
    dragging.style.backgroundImage = "url('src/images/left_" + dragging.dataset.id + ".svg')";
    console.log("drag end");
    // console.log(dragging + '_1');
});
backlog.addEventListener("dragend", (event) => {
    //對 draggables 增加 dragend 的監聽事件
    dragging.style.backgroundImage = "url('src/images/right_" + dragging.dataset.id + ".svg')";
    console.log("b_drag end");
    // console.log(dragging + '_2');
});
// shrimp.addEventListener("dragover", (event) => {
//     //對 draggables 增加 dragover 的事件監聽
//     console.log("s_dragover container");
//     shrimp.appendChild(dragging);
// });
// backlog.addEventListener("dragover", (event) => {
//     //對 draggables 增加 dragover 的事件監聽
//     console.log("dragover container");
//     backlog.appendChild(dragging);
// });

const candidateDOM = document.querySelector(".candidate");
const productBacklogDOM = document.querySelector(".productBacklog");

var candidate = Sortable.create(candidateDOM, {
    group: "shart",
    animation: 150,
    onChange: (e) => {
        order = productBacklog.toArray();
        console.log(order);
        button(order.length);
    }
});

var productBacklog = Sortable.create(productBacklogDOM, {
    group: "shart",
    onChange: (e) => {
        order = productBacklog.toArray();
        console.log(order);
        button(order.length);
    }
});


function button(len) {
    yet = document.getElementById('yet');
    done = document.getElementById('done');
    if (len == 4) {
        yet.style.display = "none";
        done.style.display = "block";
    } else {
        done.style.display = "none";
        yet.style.display = "block";
    }
}

window.onload = function() {
    done = document.getElementById('done');
    done.addEventListener("mouseover", (event) => {
        done.src = "src/images/done_hover.svg";
    })
    done.addEventListener("mouseout", (event) => {
        done.src = "src/images/done.svg";
    })
    done.addEventListener("click", (event) => {
        arr = productBacklog.toArray();
        correct = ["1", "4", "2", "3"];
        console.log(correct)
        ans = 0;
        for (let i = 0; i < 4; i++) {
            if (arr[i] == correct[i]) {
                ans += 1;
            }
        }
        if (ans == 4) {
            alert("成功了");
            location.href = "Sprint_Intro.html";
        } else {
            alert("排序錯誤，再試一次");
        }
    })
}