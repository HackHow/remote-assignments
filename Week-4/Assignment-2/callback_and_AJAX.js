function ajax(src, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", src);
  xhr.onload = () => {
    if (xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      console.log(data);
      return callback(data);
    }
  };
  xhr.send();
}

function render(data) {
  productList = document.getElementById("demo");

  for (let i = 0; i < data.length; i++) {
    const section = document.createElement("section");
    productList.appendChild(section);
    section.innerHTML = `
    <p>產品: ${data[i].name}</p>
    <p>價格: ${data[i].price}</p>
    <p>描述: ${data[i].description}</p>
    <br/>
    `;
  }
}

// ajax(
//   "https://appworks-school.github.io/Remote-Aassigiment-Data/products",
//   function (response) {
//     render(response);
//   }
// );

const btn = document.querySelector("button");
url = "https://appworks-school.github.io/Remote-Aassigiment-Data/products";

btn.addEventListener("click", (event) => {
  ajax(url, (response) => {
    render(response);
  });
  event.target.remove();
});
