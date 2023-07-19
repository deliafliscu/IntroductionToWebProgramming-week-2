import "./styles.css";

const submitData = document.getElementById("submit-data");

submitData.addEventListener("click", function () {
  const username = document.getElementById("input-username");
  const address = document.getElementById("input-address");
  const email = document.getElementById("input-email");
  const admin = document.getElementById("input-admin");

  let row = document.createElement("tr");

  let column1 = row.appendChild(document.createElement("td"));
  let column2 = row.appendChild(document.createElement("td"));
  let column3 = row.appendChild(document.createElement("td"));
  let column4 = row.appendChild(document.createElement("td"));

  column1.innerText = username.value;
  column2.innerText = address.value;
  column3.innerText = email.value;
  column4.innerHTML = admin.value;

  document.getElementById("table").appendChild(row);
});
