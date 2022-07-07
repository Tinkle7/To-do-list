document.querySelector("form").addEventListener("submit", getData);
let taskArr = [];
function getData(event) {
  event.preventDefault();
  var taskName = document.querySelector("#task").value;
  var priority = document.querySelector("#priority").value;
  // console.log(taskName,priority)
  let taskobj = {
    task: taskName,
    prior: priority,
  };
  //   console.log(taskobj)
  taskArr.push(taskobj);
  //   console.log(taskArr);
  displayTable(taskArr);
}

//   space complexity high

//   for (let i = taskArr.length - 1; i < taskArr.length; i++) {
//     let row = document.createElement("tr");
//     let col1 = document.createElement("td");
//     col1.innerText = taskArr[i].task;
//     let col2 = document.createElement("td");
//     col2.innerText = taskArr[i].prior;
//     let col3 = document.createElement("td");
//     col3.innerText = "Delete";
//     col3.style.color = "red";
//     row.append(col1, col2, col3);
//     document.querySelector("tbody").append(row);
//     i++;
//   }
// }

// with out forEach

// function displayTable(taskArr) {
//   document.querySelector("tbody").innerHTML = "";
//   for (let i = 0; i < taskArr.length; i++) {
//     let row = document.createElement("tr");
//     let col1 = document.createElement("td");
//     col1.innerText = taskArr[i].task;
//     let col2 = document.createElement("td");
//     col2.innerText = taskArr[i].prior;
//     let col3 = document.createElement("td");
//     col3.innerText = "Delete";
//     col3.style.color = "red";
//     row.append(col1, col2, col3);
//     document.querySelector("tbody").append(row);
//   }
// }

// with forEach

function displayTable(taskArr) {
  document.querySelector("tbody").innerHTML = "";
  taskArr.forEach(function (elem, i) {
    let row = document.createElement("tr");
    let col1 = document.createElement("td");
    col1.innerText = elem.task;
    let col2 = document.createElement("td");
    col2.innerText = elem.prior;
    if (elem.prior == "High") {
      col2.style.backgroundColor = "red";
    } else {
      col2.style.backgroundColor = "green";
    }
    let col3 = document.createElement("td");
    col3.innerText = "Delete";
    col3.addEventListener("click", function (event) {
      event.target.parentNode.remove();
      taskArr.splice(i, 1);
    });
    col3.style.color = "red";
    row.append(col1, col2, col3);
    document.querySelector("tbody").append(row);
  });
}
