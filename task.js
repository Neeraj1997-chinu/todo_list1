var n = 0;
function data() {
  try {
    //get form data
    var form = document.getElementById("add_task");
    var textnode = form.value;
    var node = document.createTextNode(textnode);
    console.log(node);

    //create attribute div
    var task = document.createElement("div");
    var clas = document.createAttribute("class");
    clas.value = "incomplete_tasks";
    task.setAttributeNode(clas);
    var id = document.createAttribute("id");
    id.value = "task" + n;
    task.setAttributeNode(id);

    //create input attribute
    var input = document.createElement("input");
    var checkbox = document.createAttribute("type");
    checkbox.value = "checkbox";
    input.setAttributeNode(checkbox);
    var onclick = document.createAttribute("onclick");
    onclick.value = "update_tasklist()";
    input.setAttributeNode(onclick);
    var value = document.createAttribute("value");
    value.value = textnode;
    input.setAttributeNode(value);
    //create label attribute
    var label = document.createElement("label");
    label.appendChild(node);

    //   task.appendChild(node);
    //append input and label in div
    task.appendChild(input);
    task.appendChild(label);

    //append task in task list
    document.getElementById("incompleted_task").appendChild(task);
    n++;

    update_no();

    var completed_tasks = document.getElementsByClassName("incomplete_tasks");

    // console.log(completed_tasks[0].childNodes[0].checked);
  } catch (error) {
    console.log(error);
  }
}

function update_tasklist() {
  var no_of_incomlete = document.getElementsByClassName("incomplete_tasks")
    .length;
  var i;
  for (i = 0; i < no_of_incomlete; i++) {
    var completed_tas = document.getElementsByClassName("incomplete_tasks");
    console.log(completed_tas[i]);
    // console.log(completed_tas[i].childNodes[0].checked);
    if (completed_tas[i].childNodes[0].checked) {
      var ik = completed_tas[i].id;
      var item = document.getElementById(ik);
      var cln = item.cloneNode(item);
      var clast = document.createAttribute("class");
      clast.value = "completed_tasks";
      cln.setAttributeNode(clast);
      var onclick = document.createAttribute("onclick");
      onclick.value = "update_tasklist1()";
      console.log(cln.childNodes[0]);
      cln.childNodes[0].setAttributeNode(onclick);
      console.log(cln);
      document.getElementById(ik).remove();
      document.getElementById("completed_task").appendChild(cln);
      update_no();
      return;
    }
  }
}
function update_tasklist1() {
  var no_of_complete = document.getElementsByClassName("completed_tasks")
    .length;
  console.log(
    no_of_complete,
    document.getElementsByClassName("completed_tasks")
  );
  var i;
  for (i = 0; i < no_of_complete; i++) {
    var completed_tas = document.getElementsByClassName("completed_tasks");
    //  console.log(completed_tas[i].childNodes[0].checked);
    if (!completed_tas[i].childNodes[0].checked) {
      var ik = completed_tas[i].id;
      var item = document.getElementById(ik);
      var cln = item.cloneNode(item);
      var clast = document.createAttribute("class");
      clast.value = "incomplete_tasks";
      cln.setAttributeNode(clast);
      var onclick = document.createAttribute("onclick");
      onclick.value = "update_tasklist()";
      console.log(cln.childNodes[0]);
      cln.childNodes[0].setAttributeNode(onclick);
      console.log(cln);
      document.getElementById(ik).remove();
      document.getElementById("incompleted_task").appendChild(cln);
      update_no();
      return;
    }
  }
}

function update_no() {
  var no_of_incomlete = document.getElementsByClassName("incomplete_tasks")
    .length;
  document.getElementById(
    "no_of_incomlete"
  ).innerHTML = `${no_of_incomlete} tasks left`;
  var no_of_comlete = document.getElementsByClassName("completed_tasks").length;
  document.getElementById(
    "no_of_comlete"
  ).innerHTML = `${no_of_comlete} tasks completed `;

  console.log("updated");
}

function remove() {
  var elements = document.querySelectorAll(".completed_tasks");
  elements.forEach((element) => {
    element.remove();
  });
  update_no();
  console.log("launcged");
}
