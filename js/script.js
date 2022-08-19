//function
//Clock
var showCurrentTime = function () {
  var clock = document.getElementById("clock");
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var serconds = currentTime.getSeconds();

  //format time <0
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (serconds < 10) {
    serconds = "0" + serconds;
  }

  var time = hours + ":" + minutes + ":" + serconds + " ";
  clock.innerText = time;
};
//Backround-firstpage
var updatebackground = function () {
  imagebackground = document.getElementById("background-firstpage");

  let img = imageramdom(i);
  imagebackground.style.backgroundImage = "url('" + img + "')";
  imagebackground.style.backgroundRepeat = "no-repeat";
  imagebackground.style.backgroundSize = "cover";
};
let i = 0;
var imageramdom = function () {
  if (i == 3) i = 0;
  image1 =
    "https://phongnhaexplorer.com/wp-content/uploads/2021/08/du-lich-an-giang-b.jpg";
  image2 =
    "https://thamhiemmekong.com/wp-content/uploads/2019/11/chualau01.jpg";
  image3 =
    "https://thamhiemmekong.com/wp-content/uploads/2019/09/chua-hang-chau-doc-an-giang.jpg";
  let arrayName = [image1, image2, image3];

  let image = arrayName[i];
  i++;
  return image;
};

//calucator -----------------------------------------------------------------------
var add = function () {
  let a = parseInt(document.getElementById("soa").value);
  let b = parseInt(document.getElementById("sob").value);
  document.getElementById("kqcalculate").value = a + b;
};
var sub = function () {
  let a = parseInt(document.getElementById("soa").value);
  let b = parseInt(document.getElementById("sob").value);
  document.getElementById("kqcalculate").value = a - b;
};
var mul = function () {
  let a = parseInt(document.getElementById("soa").value);
  let b = parseInt(document.getElementById("sob").value);
  document.getElementById("kqcalculate").value = a * b;
};
var div = function () {
  let a = parseInt(document.getElementById("soa").value);
  let b = parseInt(document.getElementById("sob").value);
  let result = a / b;
  document.getElementById("kqcalculate").value = result.toFixed(2);
};
var tipcalculator = function () {
  var billamt = document.getElementById("billamt").value;
  var inputGroupSelect01 = document.getElementById("inputGroupSelect01").value;
  var peopleamt = document.getElementById("peopleamt").value;
  if (billamt <= 0 || billamt === "") {
    toastmessage("Please enter value billamt");
    return;
  }
  if (peopleamt === "" || peopleamt <= 1) {
    peopleamt = 1;
  }
  var result = (billamt * inputGroupSelect01) / peopleamt;
  console.log(result);
  result.toFixed(2);
  document.getElementById("kqtip").innerText = result + "$";
};
//end calucator-----------------------------------------------------------------------

//work today-----------------------------------------------------------------------
//var todos=[{work:'Thức dậy'},{work:'Ăn sáng'}];
var //todos=[];
  todos = JSON.parse(localStorage.getItem("todos")) || [];
var addnote = function () {
  let input = document.getElementById("inputtodo").value;
  //console.log(input);
  todos.push({ work: input });
  //console.log(todos);
  _commit(todos);
  displaytable();
  document.getElementById("inputtodo").value = "";
  document.getElementById("inputtodo").focus();
};
function _commit(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}
function displaytable() {
  if (todos.length <= 0) {
    document.getElementById("tabledata").innerHTML =
      "<h2 style='color:red'>Please enter value!</h2>";
  } else {
    //document.getElementById('tabledata').innerHTML=`<div>Length: ${todos.length}<div>`;
    let html = `<table class="table table-dark" style="width:100%">
    <tr>
        
        <th style="width:80%"></th>
        <th style="width:10%;text-align: center;">Edit</th>  
        <th style="width:10%;text-align: center;">Delete</th>
    </tr>`;

    // for(const x of car)
    // {
    //     html+=`<tr><td></td><td>${x['value']}</td><td>${x['value2']}</td><td onclick="edit(${x['value']})">Edit</td><td>X</td></tr>`
    // }
    for (let i = 0; i < todos.length; i++) {
      html += `<tr id='row${i}'>    
                <td>${todos[i]["work"]}</td>
                <td onclick="edit(${i})" style="width:10%;text-align: center;"><i class="fa fa-pencil-square fa-2x" aria-hidden="true"></i></td>
                <td onclick="Delete(${i})" style="width:10%;text-align: center;"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></td>
            </tr>`;
    }
    html += `</table>`;
    document.getElementById("tabledata").innerHTML = html;

    //console.log(car[0]['value']);
  }
}
function edit(i) {
  let html = `<tr id='row${i}'>
    
    <td style="width:80%"><input style="width:80%" id='ipvalue1${i}' value='${todos[i]["work"]}'></td>
    
    <td onclick="Complete(${i})" style="width:10%;text-align: center;"><i class="fa fa-check" aria-hidden="true"></i></td><td onclick="Delete(${i})" style="width:10%;text-align: center;"><i class="fa fa-trash fa-2x" aria-hidden="true"></td>
    </tr>`;
  document.getElementById(`row${i}`).innerHTML = html;
  _commit(todos);
}
function Complete(i) {
  let value1 = document.getElementById(`ipvalue1${i}`).value;

  todos[i]["work"] = value1;

  let html = `<tr id='row${i}'>
    
    <td>${todos[i]["work"]}</td>
    
    <td onclick="edit(${i})" style="width:10%;text-align: center;"><i class="fa fa-pencil-square fa-2x" aria-hidden="true"></i></td>
    <td onclick="Delete(${i})" style="width:10%;text-align: center;"><i class="fa fa-trash fa-2x" aria-hidden="true"></i></td>
</tr>`;
  document.getElementById(`row${i}`).innerHTML = html;
  _commit(todos);
}
function Delete(i) {
  //delete car[i];
  todos.splice(i, 1);
  _commit(todos);
  //car.pop(i);
  displaytable();
}
//end work today-----------------------------------------------------------------------

//Blog -----------------------------------------------------------------------

var //todos=[];
  blog = JSON.parse(localStorage.getItem("blog1")) || [
    {
      //blog =  [{
      id: 0,
      nameblog: "An Giang Food",
      source: "https://thamhiemmekong.com/",
      img: "https://dulichtoday.vn/wp-content/uploads/2019/05/mon-ngon-dac-san-an-giang.jpg",
      date: "August 1, 2022",
      content:
        "Nước thốt nốt, thạch thốt nốt, bánh bò thốt nốt, " +
        "bia chua thốt nốt…</b> là những đặc sản vùng Bảy Núi bạn không nên bỏ qua." +
        " Bánh bò thốt nốt có thể được xem là đặc sản của An Giang. Bánh bò được làm từ đường của cây thốt nốt nên có vị ngọt không gắt và có màu vàng ươm đẹp mắt.",
      islike: true,
      comment: [
        {
          cmt: "day la cmt",
          islikecmt: true,
        },
        {
          cmt: "day la cmt2",
          islikecmt: false,
        },
      ],
    },
    {
      id: 1,
      nameblog: "Travelling To An Giang",
      source: "https://www.originvietnam.com/destinations/vietnam/an-giang",
      img: "https://megatravel.vn/wp-content/uploads/2020/10/tour-an-giang-megatravel.vn-2-scaled.jpg?v=1603078317",
      date: "August 1, 2022",
      content:
        "An Giang has a geographical location near the equator, so the climate here has similar features to the equatorial climate. Rainy season in An Giang lasts from May to November. So if you travel at this time, don’t forget to bring a raincoat." +
        "The temperature here is quite stable, ranging from 26-28 ºC. Although any season of An Giang also possesses its own beauty. However, if you come here in April or August of the lunar month, you will be immersed in the two biggest festivals, which is the festival of Lady Princess of Sam Mountain ( April 23 – April 27 and cow racing festival (end of August).",
      islike: true,
    },
  ];
var user = JSON.parse(localStorage.getItem("user")) || [
  {
    id: 0,
    username: "user1",
    name: "Phan Ngọc Tuấn",
    pass: "1",
    img: "https://toigingiuvedep.vn/wp-content/uploads/2021/05/hinh-chibi-buon-dep-nhat.jpg",
    level: "0",
  },
  {
    id: 1,
    username: "user2",
    name: "Phan Tuấn",
    pass: "2",
    img: "https://haycafe.vn/wp-content/uploads/2022/03/Hinh-ve-chibi-don-gian.jpeg",
    level: "1",
  },
];
var displayblog = function () {
  if (blog.length <= 0) {
    document.getElementById("mainblog").innerHTML =
      "<h2 style='color:red'>There are no blogs yet!</h2>";
  } else {
    let html = "";
    for (let i = 0; i < blog.length; i++) {
      var mainblog = document.getElementById("mainblog");

      html += `
            <div class="blog-post" style="background-color:rgb(239, 237, 237);padding:15px;border-radius: 5%; box-shadow: rgb(190, 190, 189) 5px 5px 5px;">
            <div class="row">
              <div class="col-12">
                <h2 class="blog-post-title">${blog[i]["nameblog"]}</h2>
                <p class="blog-post-meta">${blog[i]["date"]} by <a href="${blog[i]["source"]}">${blog[i]["source"]}</a></p>
              </div>
              <div class="col-12" style="text-align: center;">
                <img style="width:80%;height:100%;" src="${blog[i]["img"]}" alt="">
              </div>
              
            </div>
            
        
            <p>${blog[i]["content"]}</p>`;
      if (blog[i]["islike"] == true) {
        html += `<span id="theheart${blog[i]["id"]}"><i onclick="eventLike(${i})" id="btnlike" style="color:red;" class="fa fa-heart fa-2x" aria-hidden="true"></i></span>`;
      } else {
        html += `<span id="theheart${blog[i]["id"]}"><i onclick="eventLike(${i})" id="btnlike" class="fa fa-heart-o fa-2x" aria-hidden="true" style="color:red;"></i></span>`;
      }
      html += `
            <i class="fa fa-commenting-o fa-2x" aria-hidden="true" onclick="eventCmt(${i})"></i>
            <a style="float: right; color:deepskyblue; "><i class="fa fa-share-alt fa-2x" aria-hidden="true"></i></i></a>
            <div id="comment${i}"></div>
          </div>`;
    }
    mainblog.innerHTML = html;
  }
};
function eventCmt(index) {
  //console.log(blog[0]['comment']);
  let html = "";
  var vitri = index;
  let id = "comment" + index + "";
  if (blog[index]["comment"]) {
    for (let i = 0; i < blog[index]["comment"].length; i++) {
      html += `<div class="row" ><div style="margin-left:5%;margin-bottom:5px;margin-top:5px;" class="col-11" >${blog[index]["comment"][i]["cmt"]}</div>`;
      if (blog[index]["comment"][i]["islikecmt"] == true) {
        html += `<span  id="theheart"><i onclick="eventLikecmt('${vitri}','${i}')" id="btnlikecmt" style="color:red;" class="fa fa-heart " aria-hidden="true"></i></span>`;
      } else {
        html += `<span id="theheart"><i onclick="eventLikecmt('${vitri}','${i}')" id="btnlikecmt" class="fa fa-heart-o " aria-hidden="true" style="color:red;"></i></span>`;
      }
      html += `</div>`;
    }
    html += `<div class="input-group mb-3 ml-4">
        
        <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-default" id="valueCmt">
        <div class="input-group-prepend mr-3">
            <span class="input-group-text" id="inputGroup-sizing-default" onclick="eventaddCmt(${index});"><i class="fa fa-paper-plane" aria-hidden="true"></i></span>  
        </div>
      </div>`;
  } else {
    html += `<div class="input-group mb-3 ml-4">
        
        <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-default" id="valueCmt">
        <div class="input-group-prepend mr-3">
            <span class="input-group-text" id="inputGroup-sizing-default" onclick="eventaddCmt(${index});"><i class="fa fa-paper-plane" aria-hidden="true"></i></span>  
        </div>
      </div>`;
  }
  document.getElementById(id).innerHTML = html;
}
function eventLikecmt(index, i) {
  console.log(index + "------------------" + i);
  console.table(blog[1]["comment"]);
  if (blog[index]["comment"][i]["islikecmt"] === true) {
    blog[index]["comment"][i]["islikecmt"] = false;

    localStorage.setItem("blog1", JSON.stringify(blog));
    eventCmt(index);
  } else {
    blog[index]["comment"][i]["islikecmt"] = true;
    localStorage.setItem("blog1", JSON.stringify(blog));
    eventCmt(index);
  }
}
function eventaddCmt(index) {
  console.log("-------------");
  let id = "valueCmt";
  let valueCmt = document.getElementById("valueCmt").value;
  if (!blog[index]["comment"]) {
    blog[index]["comment"] = [];
  }
  blog[index]["comment"].push({ cmt: valueCmt, islikecmt: false });
  eventCmt(index);
  localStorage.setItem("blog1", JSON.stringify(blog));
}
function _commitblog(blog) {
  displayblog();
  localStorage.setItem("blog1", JSON.stringify(blog));
}
var eventLike = function (index) {
  //var like =document.getElementById(`theheart${blog[i]['id']}`);
  try {
    if (blog[index]["islike"] === true) {
      blog[index]["islike"] = false;
      _commitblog(blog);
    } else {
      blog[index]["islike"] = true;
      _commitblog(blog);
    }
  } catch (e) {}
};
// end Blog -----------------------------------------------------------------------
//API
//var token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjMiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJwYXRyaWNrLnBoYW1AcGFwLXRlY2guY29tIiwiQXNwTmV0LklkZW50aXR5LlNlY3VyaXR5U3RhbXAiOiJZWkFLWVhVRkJUTlA1VjdFTUQ3RTVGVklON0s2QVVKTyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiaHR0cDovL3d3dy5hc3BuZXRib2lsZXJwbGF0ZS5jb20vaWRlbnRpdHkvY2xhaW1zL3RlbmFudElkIjoiMiIsInN1YiI6IjMiLCJqdGkiOiIzMTcyZDVlYS02MjFjLTQ3ZWMtOWViOS04NDgxYTFiN2Y0NGIiLCJpYXQiOjE2NjA1NTkyNjMsIm5iZiI6MTY2MDU1OTI2MywiZXhwIjoxNjYwNjQ1NjYzLCJpc3MiOiJTMlJldGFpbCIsImF1ZCI6IlMyUmV0YWlsIn0.bCUfqUj1zL3fIBO6EYPbzOwmmtov3a5eWw0bV1zNXGY';
var url =
  "https://api.s2retail.xyz/api/services/app/UnitOfMeasure/GetUOMListForComboBox";
var urltoken = "https://api.s2retail.xyz/api/TokenAuth/Authenticate";
function post_api(url, para, token) {
  return new Promise(function (resolve, reject) {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        resolve(this.response);
      }
    };
    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xmlhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    xmlhttp.send(JSON.stringify(para));
  });
}
var body = {
  userNameOrEmailAddress: "admin",
  password: "123qwE",
  tenantName: "s2r",
  rememberClient: true,
};

async function getdatacombobox() {
  var tokenaccess = await post_api(urltoken, body, "").then((response) => {
    //const list = JSON.parse(response);
    var rp = JSON.parse(response);

    return rp["result"]["accessToken"];
  });
  await get_api(url, tokenaccess).then((response) => {
    //const list = JSON.parse(response);
    //console.table(JSON.parse(response)['result']);
    tableapi = document.getElementById(`tableapiget`);
    data = JSON.parse(response)["result"];
    /*let html=`<table class="table table-dark" style="width:100%">
        <tr>
            
            <th >x</th>
            <th >id</th>  
            <th >name</th>
            <th >code</th>
        </tr>`;
        for(let i=0;i<data.length;i++)
        {
            html+=`<tr id='row${i}'>   
                    <td>${i}</td>
                    <td>${data[i]['id']}</td>
                    <td>${data[i]['name']}</td>
                    <td >${data[i]['code']}</td>
                </tr>`;
        }
        html+=`</table>`*/
    let html = `<select id="combobox" style="width:100%" onchange="selectItemCombobox();">`;
    for (let i = 0; i < data.length; i++) {
      html += `<option value="${data[i]["id"]}">ID:${data[i]["id"]} Name: ${data[i]["name"]} Code: ${data[i]["code"]}</option>`;
    }
    html += `</select>`;
    tableapi.innerHTML = html;
  });
}
// function gettoken(){

//     var xhr = new XMLHttpRequest();

//     xhr.open("POST", urltoken, true);
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             var json = JSON.parse(xhr.responseText);
//             //console.log(json.email + ", " + json.password);
//         }
//     };
//     var data = JSON.stringify({"userNameOrEmailAddress": "admin",
//     "password": "123qwE",
//     "tenantName": "s2r",
//     "rememberClient": true});
//     xhr.send(data);

// }
// gettoken().then((response)=>{
//     //const list = JSON.parse(response);
//     console.table(JSON.parse(response)['result']);

// });
function get_api(url, keytoken) {
  return new Promise(function (resolve, reject) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        resolve(this.response);
      }
    };
    request.open("GET", url, true);
    if (keytoken != "") {
      request.setRequestHeader("Authorization", "Bearer " + keytoken);
    }
    request.setRequestHeader("Access-Control-Allow-Origin", "*");
    request.send();
  });
}
//end API -----------------------------------------------------------------------\
// foodpage -----------------------------------------------------------------------\
var foodlist = JSON.parse(localStorage.getItem("foodlist")) || [
  {
    id: 0,
    namefood: "Bánh bía1",
    img: "https://product.hstatic.net/1000288770/product/hue_vien_sau_rieng_dau_xanh_goi_540_g_4cafb9858a0944218f167af857288d8f_b7c1b69f9c524f6d80ad7f3894f1e119_master.jpg",
    cost: 100000,
    danhgia: [
      { noidung: "ngon", start: 5, iddg: 0 },
      { noidung: "Ăn rồi biết", start: 5, iddg: 1 },
      { noidung: "Không thích", start: 3, iddg: 1 },
      { noidung: "Đánh giá cho vui", start: 4, iddg: 1 },
      { noidung: "khong biet", start: 3, iddg: 1 },
    ],
  },
  {
    id: 1,
    namefood: "Chả lụa2",
    img: "https://chaluacosa.com/wp-content/uploads/2017/07/lam-cha-lua-ngon-don-gian-tai-nha.jpg",
    cost: 180000,
    danhgia: [{ noidung: "ngon", start: 1, iddg: 1 }],
  },
  {
    id: 2,
    namefood: "Bánh ú3",
    img: "https://cf.shopee.vn/file/cb1b6207ca857b561c4d8a139331451f",
    cost: 20000,
    danhgia: [{ noidung: "ai biết", start: 3, iddg: 1 }],
  },
];
async function displayfood() {
  var html = "";
  if (foodlist.length <= 0) {
    document.getElementById("mainblog").innerHTML =
      "<h2 style='color:red'>There are no blogs yet!</h2>";
  } else {
    var htmlpage = "";
    var itemOnRow = 3;
    var itemOnPage = 6;
    var indexpage = 0;
    var length = foodlist.length;

    await foodpage(0, 6);

    var page = Math.ceil(foodlist.length / itemOnPage);
    //document.getElementById('mainblog').innerHTML=html;

    htmlpage += `<div class="col-12" style="background-color:while;float:right;"><nav>
            <ul class="pagination" ><li class="page-item"><a class="page-link"onclick="foodpage(0,${itemOnPage})">First</a></li>`;

    for (let i = 1; i <= page; i++) {
      htmlpage += `
                <li class="page-item"><a class="page-link" onclick="foodpage(${
                  i - 1
                },${itemOnPage})">${i}</a></li>`;
    }
    htmlpage += `<li class="page-item"><a class="page-link" onclick="foodpage(${
      page - 1
    },${itemOnPage})">End</a></li></ul>
          </nav></div>`;
    //}
    document.getElementById("foodlist").innerHTML = htmlpage;
  }
}
function foodpage(idpage, itemOnPage) {
  let htmlsssss = `<div class="spinner-border text-primary text-center" role="status" style="margin-left:300px;font-size:50px;width:6rem;height:6rem;margin-top:100px">
            <span class="sr-only">Loading...</span>
        </div>`;
  document.getElementById("mainblog").innerHTML = htmlsssss;

  setTimeout(function () {
    var html = `<div class="row" >`;
    var i = 0 + itemOnPage * idpage;

    for (i; i < (idpage + 1) * itemOnPage; i++) {
      if (i == foodlist.length) {
        break;
      }
      html += `
      <div class="col-4">
          <div onclick="selectfood(foodlist[${i}],${i})" class="card" style="width: 15rem;height: 22rem; border-radius: 5%; box-shadow: rgb(176, 234, 244) 5px 5px 5px; padding:10px;background-color:rgb(239, 237, 237)">
          <h5 class="card-title" style="text-align:center;">${foodlist[i]["namefood"]}</h5>    
          <img src="${foodlist[i]["img"]}" class="card-img-top" alt="..." style="border-radius: 5%;padding-top: 10px;">
              <div class="card-body" style="float:left;">
                  <b>Đánh giá: </b>`;
      let s = sosaoSP(i);
      for (let j = 0; j < s; j++) {
        html += `<i class="fa fa-star" aria-hidden="true"></i>`;
      }

      html += `<div class="row" style="text-align:right;float:right;">
                  <p class="card-text" style="color: red;"><b >Giá: <i style="font-size:1.2rem;">${foodlist[i]["cost"]} vnđ</i></b></p>
                  </div>
              </div>
          </div>
      </div>`;
    }
    html += `</div>`;
    document.getElementById("mainblog").innerHTML = html;
  }, 500);
}
function sosaoSP(index) {
  var sosao = 0;
  let count = 0;
  //console.log("so sao" + foodlist[index]["danhgia"][0]["start"]);
  for (let i = 0; i < foodlist[index]["danhgia"].length; i++) {
    sosao += Number(foodlist[index]["danhgia"][i]["start"]);
    count++;
  }
  //console.log("so sao" + sosao);
  return Math.round(sosao / count);
}
function statusbar(event) {
  if (JSON.parse(localStorage.getItem("userlogin")) == null) {
    document.getElementById("foodlist").innerHTML = "";
    document.getElementById("menu").innerHTML = "";
    dangnhap();
    return;
  }
  u = JSON.parse(localStorage.getItem("userlogin"));
  if (u["level"] == "0") {
    document.getElementById("firstpageuser").style.display = "none";
    document.getElementById("bodypageuser").style.display = "none";
    document.getElementById("pageadmin").style.display = "block";
    eventClickTrangChu();
    return;
  }
  document.getElementById("foodlist").innerHTML = "";
  document.getElementById("menu").innerHTML = "";
  let htmlsssss = `<div class="spinner-border text-primary text-center" role="status" style="margin-left:300px;font-size:50px;width:6rem;height:6rem;margin-top:100px">
            <span class="sr-only">Loading...</span>
        </div>`;
  document.getElementById("mainblog").innerHTML = htmlsssss;
  setTimeout(function () {
    switch (event) {
      case "blog":
        if (!u["username"]) {
          document.getElementById("foodlist").innerHTML = "";
          document.getElementById("menu").innerHTML = "";
          dangnhap();
          toastmessage("Vui lòng đăng nhập để sử dụng chức năng!");
          break;
        }
        document.getElementById("foodlist").innerHTML = "";
        document.getElementById("menu").innerHTML = "";
        displayblog();
        document.getElementById("btnlike").addEventListener("click", eventLike);
        break;
      case "food":
        if (!u["username"]) {
          document.getElementById("foodlist").innerHTML = "";
          document.getElementById("menu").innerHTML = "";
          toastmessage("Vui lòng đăng nhập để sử dụng chức năng!");
          dangnhap();
          break;
        }
        foodlist;
        document.getElementById("menu").innerHTML = "";
        displayfood();

        break;
      default:
        if (u["username"]) {
          displayblog();
          document.getElementById("foodlist").innerHTML = "";
          document.getElementById("menu").innerHTML = "";
          document
            .getElementById("btnlike")
            .addEventListener("click", eventLike);
        } else {
          document.getElementById("foodlist").innerHTML = "";
          document.getElementById("menu").innerHTML = "";
          dangnhap();
        }

        break;
    }
  }, 100);
}
function toastmessage(message) {
  document.getElementById("toastmess").innerText = message;
  $("#liveToast2").toast("show");
}

function selectItemCombobox() {
  var value = document.getElementById("combobox").value;

  document.getElementById(
    "kqget"
  ).innerHTML = `<strong style="color:red;font-size:30px;">KQ: ${value}</strong>`;
}
function selectfood(list, index) {
  console.log(index);
  let html = "";
  html += `<div class="container" style="padding-bottom: 100px; border-bottom-left-radius: 5%;border-bottom-right-radius: 5%;">
                <div class="row">
                    <span class="badge badge-info" style="width:100%;"> </span>
                </div>
                <div class="row">
                <div class="col-md-12">
                    <div style="font-size: 30px;color: rgb(234, 80, 80);"><b>${list["namefood"]}</b></div>

                    <div style="color:red;font-size:2rem;float:right;"><b>Giá tiền:</b><b style="font-style:italic;"> ${list["cost"]}vnd</b> </div>
                    <span class="badge badge-info" style="width:90%;"> </span>
                </div>
                <div class="col-md-6">
                
                    <img src="${list["img"]}" style="width:80%;height:auto;margin-top:5%; margin-left: 5%;float:right;">
                </div>
                <div class="col-md-6">
            
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;Chả lụa hay còn gọi là giò lụa là một trong những món ăn ngon truyền thống của người dân Việt được làm từ thịt heo xay nhuyễn sau đó được nêm nếm với gia vị sao cho phù hợp với từng vùng miền rồi được gói với lá chuối và đem đi luộc chín. Chả lụa là một trong những món ăn phổ biến và không thể thiếu trong những dịp lễ Tết của người dân Việt từ xưa đến nay.</div>
                    <div>Số sao:`;
  let sosao = sosaoSP(index);
  for (let i = 0; i < sosao; i++) {
    html += `<i class="fa fa-star fa-2x" aria-hidden="true" style="color:yellow;"></i>`;
  }
  if (sosao < 5) {
    for (let i = 0; i < 5 - sosao; i++) {
      html += `<i class="fa fa-star-o fa-2x" aria-hidden="true" style="color:yellow;"></i>`;
    }
  }
  html += `</div>
                    <div class="row ml-3">
                        <i class="fa fa-cc-visa fa-2x" aria-hidden="true"></i>&nbsp
                        <i class="fa fa-paypal fa-2x" aria-hidden="true"></i>&nbsp
                        <i class="fa fa-credit-card-alt fa-2x" aria-hidden="true"></i>&nbsp
                        <i class="fa fa-cc-mastercard fa-2x" aria-hidden="true"></i>&nbsp
                        <p>Or</p>&nbsp
        
                    </div>
                    <div class="row ml-2">
                        <div style="margin-right:20px;"><i onclick="themgiohang(${index});" class="fa fa-shopping-basket fa-2x" aria-hidden="true"></i>Thêm giỏ hàng</div> 
                        <!--<div data-toggle="modal" data-target="#staticBackdrop" style="color:red;"><i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>Mua Ngay</div>-->
                        

                        
                    </div>`;

  html += `<div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3 class="modal-title" id="staticBackdropLabel" style="color:red;">Xác nhận thông tin mua hàng</h3>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body" style="height:700px;">
                            <div class="container">
                                <div class="row"><b>
                                    <div style="font-size:1.2rem;">Thông tin sản phẩm</div>
                                    <div>Tên mặt hàng: ${list["namefood"]}</div>
                                    <div>Giá trị: ${list["cost"]}vnđ/món</div>
                                </b>
                                </div>
                                <div class="row">
                                    <div class="col-3"></div>
                                    <div class="col-6"><img src="${list["img"]}" style="width:200px;height:auto;margin-top:5%; margin-left: 5%;float:right;"></div>
                                    <div class="col-3"></div>
                                </div>
                                    
                               
                            </div>  
                            <form action="#" method="post">
                                <div class="form-group">
                                <label>Họ Tên</label>
                                <input type="text" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label>SĐT</label>
                                    <input type="number" class="form-control" required>
                                </div>
                                <div class="form-group">
                                    <label>Địa chỉ</label>
                                    <input type="text" class="form-control" required>
                                </div> 
                                <div class="form-group">
                                    <label>Số lượng</label>
                                    <input type="number" class="form-control" value="1" min="1" required>
                                </div>
                                <button onclick="muahang(${list})" type="submit"  class="btn btn-primary" style="width:100%;">Mua hàng</button>
                            </form>
                        
                        </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
        `;

  html += `</div>
    <div style="width:100%;text-align:left;" class="container-fluid">
        <div class="row" style="font-size: 1.5rem;">
            <strong>Đánh giá(${list["danhgia"].length}):</strong>
        </div>`;
  const us = user;
  soluonghienthi = 3;
  // for (
  //   let i =
  //     (list["danhgia"].length > soluonghienthi
  //       ? soluonghienthi
  //       : list["danhgia"].length) - 1;
  //   i >= 0;
  //   i--
  // ) {
  let i =
    (list["danhgia"].length > soluonghienthi
      ? list["danhgia"].length - soluonghienthi
      : 0) - 1;
  let length = list["danhgia"].length - 1;
  do {
    html += `<div class="row" style="padding-top: 10px; background-color:#FFF7EE; ">
          <div class="col-md-1">
            <img
              style="width:45px;height:45px;"
              src="${user[list["danhgia"][length]["iddg"]]["img"]}"
            />
          </div>
          <div
            class="col-md-11"
            style="font-size: 1.1rem;font-style: italic; font-weight: bold;"
          >
            <div class="row" style="box-shadow: 1px 1px;">
              <div class="col-11">
                <div>`;
    let sosao = list["danhgia"][length]["start"];
    for (let j = 0; j < sosao; j++) {
      html += `<i class="fa fa-star" aria-hidden="true" ></i>`;
    }
    html += `</div>
                <div>${
                  list["danhgia"][length]["noidung"] == ""
                    ? "Không có nội dung"
                    : list["danhgia"][length]["noidung"]
                }</div>
              </div>
              <div class="col-1">
                <div></div>
                <div><i class="fa fa-thumbs-o-up" aria-hidden="true"></i></div>
              </div>
            </div>
          </div>
        </div>`;
    //}
    length = length - 1;
  } while (length > i);
  html += `</div>
    </div>
</div>`;
  document.getElementById("mainblog").style.height = "350px";
  document.getElementById("mainblog").innerHTML = html;
  let html2 = `<div> <b >Sản phẩm tương tự:<b><div>`;
  html2 += `<div class="row" style="width:100%;">
               `;
  for (let i = 0; i < 3; i++) {
    html2 += `
        <div class="col-4">
            <div onclick="selectfood(foodlist[${i}])" class="card" style="width: 15rem;height: 22rem; border-radius: 5%; box-shadow: rgb(176, 234, 244) 5px 5px 5px; padding:10px;background-color:rgb(239, 237, 237)">
            <h5 class="card-title" style="text-align:center;">${foodlist[i]["namefood"]}</h5>    
            <img src="${foodlist[i]["img"]}" class="card-img-top" alt="..." style="border-radius: 5%;padding-top: 10px;">
                <div class="card-body" style="float:left;">
                    <b>Đánh giá: </b>`;
    for (let i = 0; i < 5; i++) {
      html += `<i class="fa fa-star" aria-hidden="true"></i>`;
    }

    html2 += `<div class="row" style="text-align:right;float:right;">
                        <p class="card-text" style="color: red;"><b >Giá: <i style="font-size:1.2rem;">${foodlist[i]["cost"]} vnđ</i></b></p>
                    </div>
                </div>
            </div>
        </div>`;
  }
  html2 += `</div>`;
  document.getElementById("foodlist").innerHTML = "";
  document.getElementById("menu").innerHTML = html2;

  console.log(foodlist);
}
function muahang(foodlist) {
  html = `<div class="form-group">
    <label>Họ Tên</label>
    <input type="text" class="form-control" required>
</div>
<div class="form-group">
    <label>SĐT</label>localStorage
    <input type="number" class="form-control" required>
    </div>
<div class="form-group">
    <label>Địa chỉ</label>
    <input type="text" class="form-control" required>
</div>
<div class="form-group">
    <label>Số lượng</label>
    <input type="number" class="form-control" value="1" required>
</div>   

<button onclick="submitmuahang(foodlist[${i}])" class="btn btn-primary">Submit</button>`;
  document.getElementById("btnMua").style.display = "none";
  document.getElementById("hienthiform").innerHTML = html;
  console.log(foodlist);
}
function submitmuahang(foodlist) {
  console.log(foodlist);
}
var giohang = JSON.parse(localStorage.getItem("giohang")) || [];
function themgiohang(index) {
  var giohangtam = JSON.parse(localStorage.getItem("giohangtam")) || [];
  giohangtam = [];
  localStorage.setItem("giohangtam", JSON.stringify(giohangtam));
  giohangtam = foodlist[index];
  giohangtam.count = 1;
  giohang = JSON.parse(localStorage.getItem("giohang")) || [];
  var flag = false;
  //console.log(giohangtam['id']+"----"+giohang[i]['id']);
  if (giohang.length > 0) {
    for (let i = 0; i < giohang.length; i++) {
      if (giohangtam["id"] == giohang[i]["id"]) {
        giohang[i].count++;
        console.log(
          giohang[i].count +
            "+1" +
            "-------" +
            giohang[i]["id"] +
            "=" +
            giohangtam["id"]
        );
        flag = true;
        localStorage.setItem("giohang", JSON.stringify(giohang));
      }
      if (flag == true) break;
    }
  }
  if (flag == false) {
    giohang.push(giohangtam);
  }

  console.table(giohang);
  // giohang=[];
  localStorage.setItem("giohang", JSON.stringify(giohang));
  toastmessage(`Thêm ${giohangtam["namefood"]} vào giỏ hàng thành công!`);
  giohangtam = [];
  hienthisoluong();
}

function xemgiohang() {
  u = JSON.parse(localStorage.getItem("userlogin"));
  if (u["username"]) {
    let html = `<table class="table table-striped" >
        <thead>
        <tr>
            <th scope="col" style="text-align:left;">#</th>
            <th scope="col" style="text-align:left;">Tên</th>
            <th scope="col" style="text-align:right;">Giá</th>
            <th scope="col" style="text-align:right;">Số lượng</th>
            <th scope="col" style="text-align:right;">Thành tiền</th>
        </tr>
        </thead>`;
    var tong = 0;
    for (let i = 0; i < giohang.length; i++) {
      html += `<tbody>
            <tr>
                <th scope="row" >${i}</i></th>
                <td>${giohang[i]["namefood"]}</td>
                <td style="float:right;">${giohang[i]["cost"]}</td>
                <td style="text-align:right;" onclick="suagiohang(${i},${
        giohang[i]["count"]
      })" id="countInputGioHang">${giohang[i]["count"]}</td>
                <td style="float:right;">${
                  giohang[i]["count"] * giohang[i]["cost"]
                }</td>
            </tr>
        `;
      tong += parseInt(giohang[i]["count"] * giohang[i]["cost"]);
    }
    html += `
        </tbody>
        </table>
        <div style="float:right;margin-right:10px;color:red;">Tổng tiền: ${tong}</div>`;
    document.getElementById("giohang").innerHTML = html;
    hienthisoluong();
  } else {
    document.getElementById(
      "giohang"
    ).innerHTML = `<h3>Vui lòng đăng nhập để sử dụng chức năng!</h3>`;
  }
}
function suagiohang(index, gio) {
  document.getElementById(
    "countInputGioHang"
  ).innerHTML = `<input type="number" id="countInputGioHang" value="${gio}">`;
}
var MuaHangGioHang = function () {
  let gio = JSON.parse(localStorage.getItem("giohang"));
  let ul = JSON.parse(localStorage.getItem("userlogin"));
  let html = `<div class="form-group">
    <label>Họ Tên</label>
    <input type="text" class="form-control" value="${ul["name"]}" required>
    </div>
    <div class="form-group">
        <label>SĐT</label>
        <input type="number" class="form-control" id="ipsdtmuahang1" required>
    </div>
    <div class="form-group">
        <label>Địa chỉ</label>
        <input type="text" class="form-control" id="ipdiachimuahang1" required>
    </div>
    <div class="form-group">
        <label>Thông tin đơn hàng</label>
        
    <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Tên</th>
            <th scope="col">Số lượng</th>
            <th scope="col">Giá</th>
            <th scope="col">Thành tiền</th>
            </tr>
        </thead>
        <tbody>`;
  let tong = 0;

  for (let i = 0; i < gio.length; i++) {
    html += `
          <tr>
            <th scope="row">${i + 1}</th>
            <td>${gio[i]["namefood"]}</td>
            <td>${gio[i]["count"]}</td>
            <td>${gio[i]["cost"]}</td>
            <td style="text-align:right;">${
              gio[i]["cost"] * gio[i]["count"]
            }</td>
          </tr>`;
    tong += gio[i]["cost"] * gio[i]["count"];
  }
  html += `</tbody>
    </table>
    <div>
    <b style="color:red;text-align:right;float:right;margin-right:5px;">Tổng thanh toán: ${tong}</b>
    
    </div>
    </div>`;
  document.getElementById("hienthithanhtoan").innerHTML = html;
};

var xoagiohang = function () {
  // console.log("xóa giỏ hàng");
  giohang = [];
  localStorage.setItem("giohang", JSON.stringify(giohang));
  xemgiohang();
  hienthisoluong();
};

function hienthisoluong() {
  let sl = giohang.length;
  document.getElementById("soluong").innerText = sl;
}
// end foodpage -----------------------------------------------------------------------\
// User -----------------------------------------------------------------------\

var userlogin = JSON.parse(localStorage.getItem("userlogin")) || [];
function hienThiThongTinUser() {
  ttlogin = JSON.parse(localStorage.getItem("userlogin"));
  var img = ttlogin["img"];
  if (!ttlogin["img"]) {
    img =
      "https://4.bp.blogspot.com/-lvFMmL7dobM/WFyC8wdlh7I/AAAAAAAAAJI/JxjPoJs5CCkr9am9qIrshFdtMMipUJMQgCLcB/s1600/hinh-nen-chibi-tieu-cuong-thi-vui-nhon-37.jpg";
  }
  var html = `  <div class="row" >
                    <div class="col-4"></div>
                    <div class="col-4 rounded-circle" >
                        <img src="${img}" class="rounded-circle" alt="..." id="imgUser" style="width: 100px;height: 100px;">
                    </div>
                    <div class="col-4"></div>
                </div>
                <div class="row">
                    <i  class="fa fa-camera"  style="margin-left:53%;" aria-hidden="true"></i>
                    
                </div>
                
                
                <form id="tttk" enctype="multipart/from-data">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Họ và tên</label>
                        <input type="text" class="form-control" placeholder="Enter name" value="${ttlogin["name"]}">
                    
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="text" class="form-control" value="${ttlogin["username"]}" readonly>
                    
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value="${ttlogin["pass"]}" readonly> 
                    </div>
                    <div class="row" style="float:right;margin-right:5px;">
                    <a href="" data-toggle="modal" data-target="#staticBackdrop2" onclick="doimatkhau()">
                        Change password
                    </a>           </div>
                    <div class="row">
                    <div id="imgavt"></div>
                    </div>
                  <!--  <div class="row" >
                        <div class="col-4"></div>
                        <div class="col-4 rounded-circle" >
                            <img id="imgavtReader" class="rounded-circle" style="width: 100px;height: 100px;">
                        </div>
                        <div class="col-4"></div>
                    </div>-->
                    
                    <div class="row">
                        
                        <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" style="margin-left:15px;" onchange="select_file_upload(this)">
                        <b  onclick="doihinhnen()">Xác nhận đổi hình nền</b>
                    </div>
                </form>`;
  document.getElementById("hienthithongtin").innerHTML = html;
}

function select_file_upload(e) {
  var files = !!e.files ? e.files : [];

  if (/^image/.test(files[0].type)) {
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onloadend = function () {
      // $(id_img).attr('src', this.result);
      console.log(this.result.Move);
      document.getElementById("imgUser").src = this.result;
      //move(this.result,"./img")
      doihinhnen(this.result);
    };
  }
}

function doihinhnen(img) {
  var file = document.getElementById("tttk");
  //let formdata = new FormData(file);

  htmlavt = `<div class="rounded-circle" >
    <img src="${img}" class="rounded-circle" alt="..." id="imgUser" style="width: 100px;height: 100px;">
</div>`;

  console.log(file.value);
  //document.getElementById('imgavt').innerText=`${file.file}`;
}
function doimatkhau() {
  let htm = "";
  htm += `
    <div class="form-group">
        <label for="exampleInputPassword1">Re-enter old password</label>
        <input type="password" class="form-control" id="ipOldPass" placeholder="Password" value="" required> 
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">New password</label>
        <input type="password" class="form-control" id="ipNewPass" placeholder="Password" value="" required> 
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Re-enter new password</label>
        <input type="password" class="form-control" id="ipReNewPass" placeholder="Password" value="" required> 
    </div>
    
    <div class="form-group">
    
    </div>
    `;

  document.getElementById("khungthaydoimatkhau").innerHTML = htm;
}
function eventDoiMatKhau() {
  ttlogin = JSON.parse(localStorage.getItem("userlogin"));
  let oldpass = document.getElementById("ipOldPass").value;
  let ipNewPass = document.getElementById("ipNewPass").value;
  let ipReNewPass = document.getElementById("ipReNewPass").value;
  us = JSON.parse(localStorage.getItem("user"));
  if (oldpass != ttlogin["pass"]) {
    alert("Sai mật khẩu cũ");
  } else if (ipNewPass != ipReNewPass) {
    alert("Mật khẩu xác nhận không đúng");
  } else {
    ttlogin.pass = ipNewPass;
    localStorage.setItem("userlogin", JSON.stringify(ttlogin));
    var ul = JSON.parse(localStorage.getItem("userlogin"));
    for (let i = 0; i < us.length; i++) {
      if (us[i]["username"] == ul["username"]) {
        us[i]["pass"] = ul["pass"];
        console.log(`${us[i]["pass"]}`);
      }
    }
    localStorage.setItem("user", JSON.stringify(us));
    //window.location.reload(false);
  }
}

function avt() {
  u = JSON.parse(localStorage.getItem("userlogin"));
  var html = "";

  var img = u["img"];
  if (!u["img"]) {
    img =
      "https://4.bp.blogspot.com/-lvFMmL7dobM/WFyC8wdlh7I/AAAAAAAAAJI/JxjPoJs5CCkr9am9qIrshFdtMMipUJMQgCLcB/s1600/hinh-nen-chibi-tieu-cuong-thi-vui-nhon-37.jpg";
  }
  if (u["username"]) {
    console.table(u);
    html = ` 
        <img data-toggle="modal" data-target="#exampleModal2"  src="${img}" class="rounded-circle" alt="..."  style="width: 35px;height: 35px;" id="imgUser" onclick="hienThiThongTinUser()">
        `;

    console.log("---------------------------");
  } else {
    html = `          <a href="#maindisplay"><i style="margin-right:5px;" class="fa fa-user-circle-o fa-2x" aria-hidden="true"  onclick="dangnhap()"  style="width: 35px;height: 35px;"></i></a>
        `;
  }
  document.getElementById("imgUser").innerHTML = html;
}

function dangnhap() {
  let html = `
    <div class="container" style="width:600px">
        <div class="row">
            <h3 for="">Đăng nhập</h3>
        </div>
        <div class="row">
            <label for="" style="font-weight: bold;width: 40%;">Username</label>
        </div>
        <div class="row">
            <input style="width: 40%;" id="ipusername" required>
        </div>
        <div class="row">
            <label for="" style="font-weight: bold;width: 40%;">Password</label>
        </div>
        <div class="row">
            <input type="password" style="width: 40%;" id="ippass" required>
        </div>
        <div class="row mt-1">
            <input type="checkbox"> <label class="form-check-label" for="exampleCheck1">Ghi nhớ đăng nhập</label>
        </div>
        <div class="row">
            <button style="width: 40%;margin-left: 0px; margin-top: 5px;" type="button" class="btn btn-outline-info" onclick="login()">Đăng nhập</button>
        </div>
        <div class="row" style="text-align: center;">
        <a  onclick="dangky()">Chưa có tài khoản - Đăng ký</a>
    </div>
        
    </div>
    `;
  document.getElementById("mainblog").innerHTML = html;
}
function login() {
  let username = document.getElementById("ipusername").value;
  let pass = document.getElementById("ippass").value;
  flag = false;
  for (let i = 0; i < user.length; i++) {
    if (username == user[i]["username"]) {
      if (pass == user[i]["pass"]) {
        flag = true;
        //document.getElementById('sign').remove();
        iduser = [
          {
            id: user[i]["id"],
            name: user[i]["name"],
            username: user[i]["username"],
            img: user[i]["img"],
            level: user[i]["level"],
          },
        ];
        localStorage.setItem("userlogin", JSON.stringify(user[i]));
        if (user[i]["level"] == 1) {
          document.getElementById("firstpageuser").style.display = "block";
          document.getElementById("bodypageuser").style.display = "block";
          document.getElementById("pageadmin").style.display = "none";
          document.getElementById("foodlist").innerHTML = "";
          document.getElementById("menu").innerHTML = "";
          displayblog();
        } else {
          document.getElementById("firstpageuser").style.display = "none";
          document.getElementById("bodypageuser").style.display = "none";
          eventClickTrangChu();
          document.getElementById("pageadmin").style.display = "block";
        }

        avt();
        toastmessage(`Xin chào ${user[i]["name"]}!`);
        break;
      }
    }
  }
  if (flag == false) {
    //statusbar('login');
    document.getElementById("ipusername").focus();
    toastmessage("Sai thông tin đăng nhập!");
  }
}
function dangky() {
  let html = `
        <div class="container" style="width:600px">
        <div class="row">
            <h3 for="">Đăng ký thông tin tài khoản</h3>
        </div>
        <div class="row">
            <label for="" style="font-weight: bold;width: 40%;">Full Name</label>
        </div>
        <div class="row">
            <input style="width: 40%;" id="ipfullname" required>
        </div>
        <div class="row">
            <label for="" style="font-weight: bold;width: 40%;">Username</label>
        </div>
        <div class="row">
            <input style="width: 40%;" id="ipusername" required>
        </div>
        
        <div class="row">
            <label for="" style="font-weight: bold;width: 40%;">Password</label>
        </div>
        <div class="row">
            <input type="password" style="width: 40%;" id="ippass" required>
        </div>
        <div class="row">
            <label for="" style="font-weight: bold;width: 40%;">Enter the password</label>
        </div>
        <div class="row">
            <input type="password" style="width: 40%;" id="ippass2" required>
        </div>
        <div class="row">
            <button style="width: 40%;margin-left: 0px; margin-top: 5px;" type="button" class="btn btn-outline-info" onclick="eventDangky()">Đăng ký</button>
        </div>
        <a  onclick="dangnhap()">Đã có tài khoản - Đăng nhập</a>
    </div>
    `;
  document.getElementById("mainblog").innerHTML = html;
}
function eventDangky() {
  let n = document.getElementById("ipfullname").value;
  let usern = document.getElementById("ipusername").value;
  let pas1 = document.getElementById("ippass").value;
  let pas2 = document.getElementById("ippass2").value;
  var flag = true;
  if (n == "") {
    toastmessage("Fullname is Null");
    document.getElementById("ipfullname").focus();
  } else if (usern == "") {
    toastmessage("Username is Null");
    document.getElementById("ipusername").focus();
  } else if (pas1 == "") {
    toastmessage("Password is Null");
    document.getElementById("ippass").focus();
  } else if (pas2 == "") {
    toastmessage("Re-enter password is Null");
    document.getElementById("ippass2").focus();
  } else if (pas1 !== pas2) {
    toastmessage(
      "Đăng ký không thành công.\nNhập lại mật khẩu không chính xác"
    );
  } else {
    for (let i = 0; i < user.length; i++) {
      if (usern == user[i]["username"]) {
        flag = false;
        toastmessage("Username trùng.");
        document.getElementById("usern").focus();
        break;
      }
    }
    if (flag == true) {
      var arrayTTUser = {
        username: usern,
        name: n,
        pass: pas1,
        img: "",
        id: user.length,
        level: "1",
      };
      user.push(arrayTTUser);
      localStorage.setItem("user", JSON.stringify(user));
      toastmessage("Đăng ký thành công!");
      dangnhap();
    }
  }
}
function dangxuat() {
  dangxuat = [];
  localStorage.setItem("userlogin", JSON.stringify(dangxuat));
  dangnhap();
  // user=[];
  // localStorage.setItem('user', JSON.stringify(user));
  document.getElementById("foodlist").innerHTML = "";
  document.getElementById("menu").innerHTML = "";
  window.location.reload(false);
}
function trangthaiuserlogin() {
  if (!userlogin["username"]) {
    dangnhap();
  }
  return false;
}
// end User-----------------------------------------------------------------------\

document.getElementById("firstpageuser").style.display = "block";
document.getElementById("bodypageuser").style.display = "block";
document.getElementById("pageadmin").style.display = "none";

//adminpage----------------------------------------------------------------------------------------------------------------------------------------
var donhang = JSON.parse(localStorage.getItem("donhang")) || [
  {
    id: 0,
    iduser: 1,
    tongtien: 200000,
    sdt: "0976636511",
    diachi: "AnGiang",
    thongtindonhang: [
      {
        id: 0,
        namefood: "Bánh bía1",
        img: "https://product.hstatic.net/1000288770/product/hue_vien_sau_rieng_dau_xanh_goi_540_g_4cafb9858a0944218f167af857288d8f_b7c1b69f9c524f6d80ad7f3894f1e119_master.jpg",
        cost: 100000,
        count: 1,
      },
      {
        id: 1,
        namefood: "Bánh ú13",
        img: "https://cf.shopee.vn/file/cb1b6207ca857b561c4d8a139331451f",
        cost: 20000,
        count: 5,
      },
    ],
    xacnhan: true,
    giaohang: "giaohang",
  },
  {
    id: 1,
    iduser: 1,
    tongtien: 200000,
    sdt: "0976636522",
    diachi: "AnGiang",
    thongtindonhang: [
      {
        id: 0,
        namefood: "Bánh bía1",
        img: "https://product.hstatic.net/1000288770/product/hue_vien_sau_rieng_dau_xanh_goi_540_g_4cafb9858a0944218f167af857288d8f_b7c1b69f9c524f6d80ad7f3894f1e119_master.jpg",
        cost: 100000,
        count: 1,
      },
      {
        id: 1,
        namefood: "Bánh ú13",
        img: "https://cf.shopee.vn/file/cb1b6207ca857b561c4d8a139331451f",
        cost: 20000,
        count: 5,
      },
    ],
    xacnhan: false,
    giaohang: "giaohang",
  },
  {
    id: 2,
    iduser: 1,
    tongtien: 200000,
    sdt: "0976636522",
    diachi: "AnGiang",
    thongtindonhang: [
      {
        id: 0,
        namefood: "Bánh bía1",
        img: "https://product.hstatic.net/1000288770/product/hue_vien_sau_rieng_dau_xanh_goi_540_g_4cafb9858a0944218f167af857288d8f_b7c1b69f9c524f6d80ad7f3894f1e119_master.jpg",
        cost: 100000,
        count: 1,
      },
      {
        id: 2,
        namefood: "Bánh ú13",
        img: "https://cf.shopee.vn/file/cb1b6207ca857b561c4d8a139331451f",
        cost: 20000,
        count: 5,
      },
    ],
    xacnhan: true,
    giaohang: "giaohang",
  },
];
function resetDonhang() {
  var donhangtam = [
    {
      id: 0,
      iduser: 1,
      tongtien: 200000,
      sdt: "0976636511",
      diachi: "AnGiang",
      thongtindonhang: [
        {
          id: 0,
          namefood: "Bánh bía1",
          img: "https://product.hstatic.net/1000288770/product/hue_vien_sau_rieng_dau_xanh_goi_540_g_4cafb9858a0944218f167af857288d8f_b7c1b69f9c524f6d80ad7f3894f1e119_master.jpg",
          cost: 100000,
          count: 1,
        },
        {
          id: 1,
          namefood: "Bánh ú13",
          img: "https://cf.shopee.vn/file/cb1b6207ca857b561c4d8a139331451f",
          cost: 20000,
          count: 5,
        },
      ],
      xacnhan: true,
      giaohang: "giaohang",
    },
    {
      id: 1,
      iduser: 1,
      tongtien: 200000,
      sdt: "0976636522",
      diachi: "AnGiang",
      thongtindonhang: [
        {
          id: 0,
          namefood: "Bánh bía1",
          img: "https://product.hstatic.net/1000288770/product/hue_vien_sau_rieng_dau_xanh_goi_540_g_4cafb9858a0944218f167af857288d8f_b7c1b69f9c524f6d80ad7f3894f1e119_master.jpg",
          cost: 100000,
          count: 1,
        },
        {
          id: 1,
          namefood: "Bánh ú13",
          img: "https://cf.shopee.vn/file/cb1b6207ca857b561c4d8a139331451f",
          cost: 20000,
          count: 5,
        },
      ],
      xacnhan: false,
      giaohang: "giaohang",
    },
    {
      id: 2,
      iduser: 1,
      tongtien: 200000,
      sdt: "0976636522",
      diachi: "AnGiang",
      thongtindonhang: [
        {
          id: 0,
          namefood: "Bánh bía1",
          img: "https://product.hstatic.net/1000288770/product/hue_vien_sau_rieng_dau_xanh_goi_540_g_4cafb9858a0944218f167af857288d8f_b7c1b69f9c524f6d80ad7f3894f1e119_master.jpg",
          cost: 100000,
          count: 1,
        },
        {
          id: 2,
          namefood: "Bánh ú13",
          img: "https://cf.shopee.vn/file/cb1b6207ca857b561c4d8a139331451f",
          cost: 20000,
          count: 5,
        },
      ],
      xacnhan: true,
      giaohang: "giaohang",
    },
  ];
  var foodlisttam = [
    {
      id: 0,
      namefood: "Bánh bía1",
      img: "https://product.hstatic.net/1000288770/product/hue_vien_sau_rieng_dau_xanh_goi_540_g_4cafb9858a0944218f167af857288d8f_b7c1b69f9c524f6d80ad7f3894f1e119_master.jpg",
      cost: 100000,
      danhgia: [
        { noidung: "ngon", start: 5, iddg: 0 },
        { noidung: "", start: 5, iddg: 1 },
        { noidung: "Ngọt quá", start: 3, iddg: 1 },
        { noidung: "Bình luận cho vui", start: 4, iddg: 1 },
        { noidung: "Ăn rồi biết", start: 5, iddg: 1 },
      ],
    },
    {
      id: 1,
      namefood: "Chả lụa2",
      img: "https://chaluacosa.com/wp-content/uploads/2017/07/lam-cha-lua-ngon-don-gian-tai-nha.jpg",
      cost: 180000,
      danhgia: [{ noidung: "ngon", start: 1, iddg: 1 }],
    },
    {
      id: 2,
      namefood: "Bánh ú3",
      img: "https://cf.shopee.vn/file/cb1b6207ca857b561c4d8a139331451f",
      cost: 20000,
      danhgia: [{ noidung: "ai biết", start: 3, iddg: 1 }],
    },
  ];
  localStorage.setItem("foodlist", JSON.stringify(foodlisttam));
  localStorage.setItem("donhang", JSON.stringify(donhangtam));
}
function donhanglist() {
  let dhl = donhang;
  let nd = JSON.parse(localStorage.getItem("user"));
  let html = `<table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Tên người dùng</th>
        <th scope="col">SĐT</th>
        <th scope="col">Địa chỉ</th>
        <th scope="col">Thông tin</th>
        <th scope="col">Tổng thanh toán</th>
        <th scope="col"></th>
        
      </tr>
    </thead>
    <tbody>`;
  for (let i = 0; i < dhl.length; i++) {
    html += `<tr>
        <th scope="row">${dhl[i]["id"]}</th>
        <td>${dhl[i]["iduser"]}</td>
        <td>${dhl[i]["sdt"]}</td>
        <td>${dhl[i]["diachi"]}</td><td>`;
    for (let j = 0; j < dhl[i]["thongtindonhang"].length; j++) {
      html += `<div>${dhl[i]["thongtindonhang"][j]["namefood"]}  ${
        dhl[i]["thongtindonhang"][j]["cost"]
      } x ${dhl[i]["thongtindonhang"][j]["count"]} = ${
        dhl[i]["thongtindonhang"][j]["cost"] *
        dhl[i]["thongtindonhang"][j]["count"]
      }</div>`;
    }

    html += `</td><td>${dhl[i]["tongtien"]}</td>
        <td>@mdo</td>
      </tr>`;
  }

  html += `</tbody>
  </table>`;
  document.getElementById("displayadminpage").innerHTML = html;
}
function thanhtoangiohang() {
  var gh = JSON.parse(localStorage.getItem("giohang"));
  var tttk = JSON.parse(localStorage.getItem("userlogin"));
  var dh = donhang; //JSON.parse(localStorage.getItem('donhang'));
  var tongthanhtoan = 0;
  for (let i = 0; i < gh.length; i++) {
    tongthanhtoan += gh[i]["cost"] * gh[i]["count"];
  }
  console.log(tongthanhtoan);
  var tttt = {
    id: gh.length,
    iduser: tttk["id"],
    tongtien: tongthanhtoan,
    sdt: document.getElementById("ipsdtmuahang1").value,
    diachi: document.getElementById("ipdiachimuahang1").value,
    thongtindonhang: gh,
    xacnhan: true,
    giaohang: "choxacnhan",
  };
  dh.push(tttt);
  //var donhangnew= JSON.parse(localStorage.getItem('donhang'));
  localStorage.setItem("donhang", JSON.stringify(dh));
  giohangtam = [];
  localStorage.setItem("giohang", JSON.stringify(giohangtam));
  hienthisoluong();
  window.location.reload(true);
}

function eventClickTrangChu() {
  html = `<div class="container-fluid bg-light" id="pageindex">
  <div class="row">
    <div class="col-md-4">
      <div class="card text-white bg-primary mb-3" style="max-width: 100%;">
        <div class="card-header" style="font-size: 1.3rem;"></div>
        <div class="card-body">
          <div class="row">
            <div class="col-8">
              <h5 class="card-title">Tổng số đơn hàng </h5>
              <p class="card-text" style="font-size: 20px;">${donhang.length}</p>
            </div>
            <div class="col-4">
              <i class="fa fa-pie-chart fa-5x" aria-hidden="true"></i>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card text-white bg-primary mb-3" style="max-width: 100%;">
        <div class="card-header" style="font-size: 1.3rem;"></div>
        <div class="card-body">
          <div class="row">
            <div class="col-8">
              <h5 class="card-title">Đơn hàng chờ</h5>
              <p class="card-text" style="font-size: 20px;"><div id="hienthisoluongdonhang"></div></p>
            </div>
            <div class="col-4">
              <i class="fa fa-sticky-note-o fa-5x" aria-hidden="true"></i>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card text-white bg-primary mb-3" style="max-width: 100%;">
        <div class="card-header" style="font-size: 1.3rem;"></div>
        <div class="card-body">
          <div class="row">
            <div class="col-8">
              <h5 class="card-title">Tổng số đơn hàng </h5>
              <p class="card-text" style="font-size: 20px;"><div id="hienthisoluongdonhang"></div></p>
            </div>
            <div class="col-4">
              <i class="fa fa-pie-chart fa-5x" aria-hidden="true"></i>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-4">
      <div class="card text-white bg-danger mb-3" style="max-width: 100%;">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Danger card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="card text-white bg-warning mb-3" style="max-width: 100%;">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Secondary card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="card bg-light mb-3" style="max-width: 100%;">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h5 class="card-title">Success card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
  </div>
  
  
  
</div>`;

  document.getElementById("displayadminpage").innerHTML = html;
}
function eventClickDSDH() {
  var listDH = JSON.parse(localStorage.getItem("donhang"));
  console.table(listDH);
  let html = `<table class="table table-striped table-dark" id='tablehienthi'>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">IDUSER</th>
        <th scope="col">SDT</th>
        <th scope="col" style="width:20%;">Địa chỉ</th>
        <th scope="col" style="width:40%;">Thông tin đơn hàng</th>
        <th scope="col">Xác nhận</th>
        <th scope="col">Từ chối</th>
      </tr>
    </thead>
    <tbody>`;
  for (let i = 0; i < donhang.length; i++) {
    if (donhang[i]["xacnhan"] == true) {
      if (donhang[i]["giaohang"] == "choxacnhan") {
        html += `<tr>
              <th scope="row">${i}</th>
              <td>${donhang[i]["iduser"]}</td>
              <td>${donhang[i]["sdt"]}</td>
              <td>${donhang[i]["diachi"]}</td><td>
              `;
        for (let j = 0; j < donhang[i]["thongtindonhang"].length; j++) {
          html +=
            `${
              donhang[i]["thongtindonhang"][j]["namefood"] +
              " " +
              donhang[i]["thongtindonhang"][j]["cost"] +
              " SL:" +
              donhang[i]["thongtindonhang"][j]["count"]
            }` + " | ";
        }
        html += `</td>
              <td>`;
        if (donhang[i]["giaohang"]) {
          html += `<a onclick="xacnhandonhang(${i})"><i class="fa fa-check-circle fa-2x" aria-hidden="true" ></i></a>`;
        }
        html += `<td><a onclick="tuchoidonhang(${i})"><i class="fa fa-check-circle fa-2x" aria-hidden="true" ></i></a></td>`;
        html += `</td>
            </tr>`;
      }
    }
  }
  html += `</tbody>
  </table>`;

  document.getElementById("displayadminpage").innerHTML = html;
}
function eventClickDSXN() {
  var listDH = JSON.parse(localStorage.getItem("donhang"));
  console.table(listDH);
  let html = `<table class="table table-striped table-dark" id='tablehienthi'>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">IDUSER</th>
        <th scope="col">SDT</th>
        <th scope="col" style="width:20%;">Địa chỉ</th>
        <th scope="col" style="width:40%;">Thông tin đơn hàng</th>

        <th scope="col">Trạng thái</th>
        
      </tr>
    </thead>
    <tbody>`;
  for (let i = 0; i < donhang.length; i++) {
    if (donhang[i]["giaohang"] == "xacnhan" && donhang[i]["xacnhan"] == true) {
      html += `<tr>
        <th scope="row">${i}</th>
        <td>${donhang[i]["iduser"]}</td>
        <td>${donhang[i]["sdt"]}</td>
        <td>${donhang[i]["diachi"]}</td><td>
        `;
      for (let j = 0; j < donhang[i]["thongtindonhang"].length; j++) {
        html +=
          `${
            donhang[i]["thongtindonhang"][j]["namefood"] +
            " " +
            donhang[i]["thongtindonhang"][j]["cost"] +
            " SL:" +
            donhang[i]["thongtindonhang"][j]["count"]
          }` + " | ";
      }
      html += `</td>
        <td>`;
      if (donhang[i]["giaohang"]) {
        html += `<a onclick="xacnhanship(${i})"><i class="fa fa-check-circle fa-2x" aria-hidden="true" ></i></a>`;
      }
      html += `</td>
      </tr>`;
    }
  }
  html += `</tbody>
  </table>`;

  document.getElementById("displayadminpage").innerHTML = html;
}
function eventClickDSShip() {
  var listDH = JSON.parse(localStorage.getItem("donhang"));
  console.table(listDH);
  let html = `<table class="table table-striped table-dark" id='tablehienthi'>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">IDUSER</th>
        <th scope="col">SDT</th>
        <th scope="col" style="width:20%;">Địa chỉ</th>
        <th scope="col" style="width:40%;">Thông tin đơn hàng</th>
        <th scope="col">Xác nhận</th>
        <th scope="col">Trạng thái</th>
        
      </tr>
    </thead>
    <tbody>`;
  for (let i = 0; i < donhang.length; i++) {
    if (donhang[i]["giaohang"] == "giaohang") {
      html += `<tr>
        <th scope="row">${i}</th>
        <td>${donhang[i]["iduser"]}</td>
        <td>${donhang[i]["sdt"]}</td>
        <td>${donhang[i]["diachi"]}</td><td>
        `;
      for (let j = 0; j < donhang[i]["thongtindonhang"].length; j++) {
        html +=
          `${
            donhang[i]["thongtindonhang"][j]["namefood"] +
            " " +
            donhang[i]["thongtindonhang"][j]["cost"] +
            " SL:" +
            donhang[i]["thongtindonhang"][j]["count"]
          }` + " | ";
      }
      html += `</td><td>${donhang[i]["xacnhan"]}</td>
        <td>${donhang[i]["giaohang"]}</td>
      </tr>`;
    }
  }
  html += `</tbody>
  </table>`;

  document.getElementById("displayadminpage").innerHTML = html;
}
function xacnhandonhang(index) {
  donhang[index]["giaohang"] = "xacnhan";
  localStorage.setItem("donhang", JSON.stringify(donhang));
  eventClickDSDH();
}
function xacnhanship(index) {
  donhang[index]["giaohang"] = "giaohang";
  localStorage.setItem("donhang", JSON.stringify(donhang));
  eventClickDSXN();
}
function tuchoidonhang(index) {
  donhang[index]["xacnhan"] = false;
  localStorage.setItem("donhang", JSON.stringify(donhang));
  eventClickDSDH();
}
function tinhtranggiaohang() {
  var ul = JSON.parse(localStorage.getItem("userlogin"));
  var html = `
  <table class="table table-striped" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Thông tin đơn hàng</th>
      <th scope="col">Giá trị đơn hàng</th>
      <th scope="col">Tình trạng</th>
      <th scope="col">Đánh giá</th>
     
    </tr>
  </thead>
  <tbody>
    
    
`;
  for (let i = 0; i < donhang.length; i++) {
    if (donhang[i]["iduser"] == ul["id"]) {
      html += `<tr>
        <th scope="row"></th><td>
        `;
      for (let j = 0; j < donhang[i]["thongtindonhang"].length; j++) {
        html += `<div>${donhang[i]["thongtindonhang"][j]["namefood"]} - Số lượng ${donhang[i]["thongtindonhang"][j]["count"]}</div>`;
      }

      html += `</td><td>${donhang[i]["tongtien"]}</td>`;
      if (donhang[i]["xacnhan"] == true) {
        html += `<td style="color:blue;">${donhang[i]["giaohang"]}</td>`;
      } else {
        html += `<td style="color:red;">Đơn hàng bị từ chối</td>`;
      }
      if (
        donhang[i]["giaohang"] == "giaohang" &&
        donhang[i]["xacnhan"] == true
      ) {
        html += `<td onclick="danhgiaSP(${i})" style="text-align:center;"><i class="fa fa-comments-o fa-3x" aria-hidden="true" ></i></td>`;
      } else {
        html += `<td>Tính năng chưa khả dụng.</td>`;
      }
    }
  }
  html += `  </tr></tbody>
  </table>`;
  document.getElementById("mainblog").innerHTML = html;
}
function danhgiaSP(indexdonhang) {
  let html = "";
  var fl = foodlist;
  for (let i = 0; i < donhang[indexdonhang]["thongtindonhang"].length; i++) {
    let idimg = fl[donhang[indexdonhang]["thongtindonhang"][i]["id"]]["img"];
    html += `
  <div class="container-fluid" style="margin-top:20px;background-color: #FFF7EE;
  box-shadow: black 2px 2px;">
  <div class="row" style="padding-bottom:10px;">
    <div class="col-md-2">    
      <img style="width:100px;height:100px;" src="${idimg}"/>
    </div>
    <div class="col-md-10">
        <div class="container">
          <div class="row">
            <label><strong style="font-size:1.2rem;">${
              fl[donhang[indexdonhang]["thongtindonhang"][i]["id"]]["namefood"]
            }</strong>
            </label>
          </div>
          <div class="row"><label>`;
    for (let s = 1; s <= 5; s++) {
      html += `<i class="fa fa-star" aria-hidden="true" id="sao${s}${donhang[indexdonhang]["thongtindonhang"][i]["id"]}" onclick="clicksao(${s},${donhang[indexdonhang]["thongtindonhang"][i]["id"]})"></i>`;
    }
    html += `</label></div>
          </div>
          <div class="row">
              <input type="text" id="noidungdanhgia${donhang[indexdonhang]["thongtindonhang"][i]["id"]}" class="form-control" style="margin-right: 8px;">
    
          </div>
        </div>
    <div>
    <input type="hidden" id="custId${donhang[indexdonhang]["thongtindonhang"][i]["id"]}" name="custId" value="5" />
  </div>
  
  
  `;

    html += `
   
    
  </div>
 
  <button class="btn btn-primary" onclick="capnhatDanhGia(${donhang[indexdonhang]["thongtindonhang"][i]["id"]})" style="width:100%; padding-top:5px;">Đánh giá</button>
  </div>`;
  }

  document.getElementById("mainblog").innerHTML = html;
}
function capnhatDanhGia(id) {
  let ul = JSON.parse(localStorage.getItem("userlogin"));
  let idip = "custId" + id;
  let sosao = document.getElementById(idip).value;
  idid = "noidungdanhgia" + id;
  let noidung = document.getElementById(idid).value;

  //console.log(ul + "---" + sosao + "----" + noidung);
  for (let i = 0; i < foodlist.length; i++) {
    if (id == foodlist[i]["id"]) {
      foodlist[i]["danhgia"].push({
        noidung: noidung,
        start: sosao,
        iddg: ul["id"],
      });
      break;
    }
  }
  toastmessage("Đánh giá sản phẩm thành công với nội dung: " + noidung + ".");
  localStorage.setItem("foodlist", JSON.stringify(foodlist));
}
function clicksao(i, id) {
  for (let s = 1; s <= 5; s++) {
    let name = "sao" + s + "" + id;
    document.getElementById(name).style.color = "black";
  }
  for (let s = 1; s <= i; s++) {
    let name = "sao" + s + "" + id;
    document.getElementById(name).style.color = "yellow";
  }
  let idip = "custId" + id;
  document.getElementById(idip).value = i;
}
//end adminpage------------------------------------------------------------------------------------------------------------------------------------
//main----------------------------------------------------------------------------------
//show
statusbar();
avt();
hienthisoluong();
displaytable();
showCurrentTime();

var oneSecond1 = 1000;
var oneSecond2 = 2000;
setInterval(showCurrentTime, oneSecond1);
setInterval(updatebackground, oneSecond2);
getdatacombobox();
//event
partyButton = document.getElementById("changebackground");
partyButton.addEventListener("click", updatebackground);
btnadd = document.getElementById("btnadd");
btnadd.addEventListener("click", add);
btnsub = document.getElementById("btnsub");
btnsub.addEventListener("click", sub);
btnmul = document.getElementById("btnmul");
btnmul.addEventListener("click", mul);
btndiv = document.getElementById("btndiv");
btndiv.addEventListener("click", div);
btntip = document.getElementById("btntip");
btntip.addEventListener("click", tipcalculator);
btntodo = document.getElementById("btntodo");
btntodo.addEventListener("click", addnote);
btnxoagiohang = document.getElementById("btnxoagiohang");
btnxoagiohang.addEventListener("click", xoagiohang);

btnMuaHangGioHang = document.getElementById("btnMuaHangGioHang");
btnMuaHangGioHang.addEventListener("click", MuaHangGioHang);
