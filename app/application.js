$item_list = document.querySelector('.item-x-group');
$getUictx = '1'
$item = [
  {
    img: 'app/assest/images/banner/html_quiz.png',
    text: 'Pengenalan HTML',
    text: 'Soal HTML'
    },
  {
    img: 'app/assest/images/banner/learn_html.png',
    text: 'Pengenalan HTML'
    },
  {
    img: 'app/assest/images/banner/css_quiz.png',
    text: 'Soal CSS'
    },
  {
    img: 'app/assest/images/banner/css.and.html.png',
    text: 'Html dan CSS'
    },
  {
    img: 'app/assest/images/banner/js_quiz.png',
    text: 'Soal JavaScript'
    },
  {
    img: 'app/assest/images/banner/fontawesome.png',
    text: 'Font Awesome'
    },
  {
    img: 'app/assest/images/banner/learn.js.png',
    text: 'Belajar JavaScript'
    },
  {
    img: 'app/assest/images/banner/color.png',
    text: 'Palet Warna'
    },
  {
    img: 'app/assest/images/banner/editor.png',
    text: 'Mulai Coding'
    },
  {
    img: 'app/assest/images/banner/simple_web.png',
    text: 'Membuat Website Sederhana'
    },
  {
    img: 'app/assest/images/banner/purchase.png',
    text: 'Tips Mendapatkan Penghasilan Melalui Web buatan sendiri'
    }
];
$item.forEach((data, index) => {
  $item = document.createElement('div');
  $ctx_img = document.createElement('img');
  $ctx_text = document.createElement('p');

  $ctx_img.src = data.img;
  $ctx_text.textContent = data.text;
  $item.append(
    $ctx_img,
    $ctx_text,
  )
  $item_list.appendChild($item);

  $item.addEventListener('click', function() {
    if (index == '0') {
      window.location.href = 'app/pages/task/html.html'
    } else if (index == '1') {
      fetch('app/pages/ctx-learn-vid.html')
        .then(response => response.text())

        .then((value) => {
          document.getElementById('load--data-ctx').innerHTML = value;
        });

      window.scrollBy({
        top: 1000,
        behavior: 'smooth'
      });
    } else if (index == '2') {
      window.location.href = '/app/pages/task/css.html'
    } else if (index == '3') {
      fetch('app/pages/ctx-learn-vid.html')
        .then(response => response.text())
        .then((value) => {
          document.getElementById('load--data-ctx').innerHTML = value;
        });

      window.scrollBy({
        top: 1000,
        behavior: 'smooth'
      });
    } else if (index == '4') {
      window.location.href = '/app/pages/task/js.html'
    } else if (index == '5') {
      window.location.href = 'https://fontawesome.com/'
    } else if (index == '6') {
      fetch('app/pages/ctx-learn-vid.html')
        .then(response => response.text())
        .then((value) => {
          document.getElementById('load--data-ctx').innerHTML = value;
        });
      window.scrollBy({
        top: 1000,
        behavior: 'smooth'
      });
    } else if (index == '7') {
      window.location.href = 'https://colorhunt.co/'
    } else if (index == '8') {
      $setRendering = '1'
      getButton()
    } else if (index == '9') {
      window.location.href = '/app/pages/content/learn/make_web.html'
    } else if (index == '10') {
      fetch('app/pages/ctx-tips.html')
        .then(response => response.text())
        .then((value) => {
          document.getElementById('load--data-ctx').innerHTML = value;
        });

      window.scrollBy({
        top: 1000,
        behavior: 'smooth'
      })
    }
  })
});

document.querySelector('.x-mark').addEventListener('click', function() {
  document.querySelector('.x-mark').classList.toggle('active');
  document.querySelector('.side--bar').classList.toggle('active');
  document.querySelector('.screen-lock').classList.toggle('show')
  document.body.classList.toggle('lock')
});

$ui_group = document.querySelector('.ui-flex');
$ui_group.style.margin = '10px 0'
$ui = [
  {
    ctx_button: 'Contoh Kode'
    },
  {
    ctx_button: 'Tips'
    },
  {
    ctx_button: 'Belajar'
    }
];
$ui.forEach((button, index) => {
  $getUi = document.createElement('button');
  $getUi.id = 'x--button'
  $getUi.textContent = button.ctx_button;

  $ui_group.appendChild($getUi);
  $getUi.addEventListener('click', function() {
    if (index == '0') {
      $getUictx = '1'
    }
    else if (index == '1') {
      $getUictx = '2'
    }
    else if (index == '2') {
      $getUictx = '3'
    }
    getMore()
  })
});
$ui_side_bar = [
  {
    s_ui: 'Tentang'
    },
  {
    s_ui: 'Bagikan'
    },
  {
    s_ui: 'Dukungan'
    },
  {
    s_ui: 'Ikuti Saya'
    },
  {
    s_ui: 'Semua Aplikasi'
  }
];
$side_bar = document.querySelector('.side--bar')
$ui_side_bar.forEach((sui, index) => {
  $ui_x = document.createElement('button')
  $ui_x.textContent = sui.s_ui;
  $side_bar.append($ui_x)

  $ui_x.addEventListener('click', function() {
    if (index == '0') {
      document.querySelector('.credit--ctx').style.display = 'grid'

      document.querySelector('.credit--ctx').addEventListener('click', function() {
        hide_ctx()
      })
    }
    else if (index == '1') {
      $msg = 'Unduh aplikasi belajar coding kami sekarang dan kuasai keterampilan coding dengan mudah! hanya di https://farprojectstudio.blogspot.com'
      window.location.href = 'https://api.whatsapp.com/send?text=' + $msg;
    }
    else if (index == '2') {
      window.location.href = 'https://www.saweria.co/FarelAlfareza'
    }
    else if (index == '3') {
      window.location.href = 'https://www.instagram.com/farel.project_5?igsh=MTduanM5dTczeTYwMQ=='
    }
    else if (index == "4") {
      window.location.href = "https://farprojectstudio.blogspot.com"
    }
  })
});

function hide_ctx() {
  document.querySelector('.credit--ctx').style.display = 'none'
}

function getMore() {
  if ($getUictx == '1') {
    fetch('app/pages/ctx-samples.html')
      .then(response => response.text())
      .then((value) => {
        document.getElementById('load--data-ctx').innerHTML = value;
      })
  } else if ($getUictx == '2') {
    fetch('app/pages/ctx-tips.html')
      .then(response => response.text())
      .then((value) => {
        document.getElementById('load--data-ctx').innerHTML = value;
      })
  } else if ($getUictx == '3') {
    fetch('app/pages/ctx-learn-vid.html')
      .then(response => response.text())
      .then((value) => {
        document.getElementById('load--data-ctx').innerHTML = value;
      })
  }
};

$setRendering = '1'

document.getElementById('button-nav1').addEventListener('click', function() {
  $setRendering = '1'
  getButton()
});
document.getElementById('button-nav2').addEventListener('click', function() {
  $setRendering = '2'
  getButton()
});
document.getElementById('button-nav3').addEventListener('click', function() {
  $setRendering = '3'
  getButton()
});
document.getElementById('button-nav4').addEventListener('click', function() {
  $setRendering = '4'
  getButton()
});

function getButton() {
  if ($setRendering == '1') {
    document.getElementById('button-nav1').style.transform = 'scale(110%)'
    document.getElementById('button-nav1').style.color = 'orangered'
    document.getElementById('ima1').src = 'app/assest/ui/code.active.svg'
    document.getElementById('button-nav1').style.borderBottom = '2px solid orangered'
    fetch('app/pages/content/editor-dashboard.html')
      .then(response => response.text())
      .then((data) => {
        document.getElementById('ctx--nav').innerHTML = data
      })
    document.getElementById('ctx--nav').style.display = 'block'
    document.querySelector('header').style.top = '-50%'
    document.querySelector('.loading').style.display = 'grid'
    load()
  } else {
    document.getElementById('button-nav1').style.transform = 'scale(100%)'
    document.getElementById('button-nav1').style.color = 'white'
    document.getElementById('ima1').src = 'app/assest/ui/draw.code.svg'
    document.getElementById('button-nav1').style.borderBottom = '0px solid orangered'
    document.getElementById('ctx--nav').style.display = 'none'
    document.querySelector('.loading').style.display = 'none'
    window.scrollTo(0, 0)
    document.querySelector('header').style.top = '0'
  }
  if ($setRendering == '2') {
    document.getElementById('button-nav2').style.transform = 'scale(110%)'
    document.getElementById('button-nav2').style.color = 'orangered'
    document.getElementById('ima2').src = 'app/assest/ui/home.active.svg'
    document.getElementById('button-nav2').style.borderBottom = '2px solid orangered'
  } else {
    document.getElementById('button-nav2').style.transform = 'scale(100%)'

    document.getElementById('button-nav2').style.color = 'white'

    document.getElementById('ima2').src = 'app/assest/ui/draw.home.svg'
    document.getElementById('button-nav2').style.borderBottom = '0px solid orangered'
  }
  if ($setRendering == '3') {
    document.getElementById('button-nav3').style.transform = 'scale(110%)'
    document.getElementById('button-nav3').style.width = '50%'
    document.getElementById('button-nav3').style.color = 'orangered'
    document.getElementById('ima3').src = 'app/assest/ui/user.active.svg'
    document.getElementById('button-nav3').style.borderBottom = '2px solid orangered'
    document.getElementById('ctx--account').style.display = 'block'
  } else {

    document.getElementById('button-nav3').style.transform = 'scale(100%) '

    document.getElementById('button-nav3').style.width = '50%'
    document.getElementById('button-nav3').style.color = 'white'
    document.getElementById('ima3').src = 'app/assest/ui/draw.user.svg'
    document.getElementById('button-nav3').style.border = '1px solid transparent'
    document.getElementById('ctx--account').style.display = 'none'
  }
  if ($setRendering == '4') {
    document.getElementById('button-nav4').style.transform = 'scale(110%)'
    document.getElementById('button-nav4').style.width = '50%'
    document.getElementById('button-nav4').style.color = 'orangered'
    document.getElementById('ima4').src = 'app/assest/ui/email.active.svg'
    document.getElementById('button-nav4').style.borderBottom = '2px solid orangered'
    document.querySelector('.feedback--ctx').style.display = 'grid'
  } else {
    document.getElementById('button-nav4').style.transform = 'scale(100%) '

    document.getElementById('button-nav4').style.width = '50%'
    document.getElementById('button-nav4').style.color = 'white'
    document.getElementById('ima4').src = 'app/assest/ui/draw.email.svg'
    document.getElementById('button-nav4').style.border = '1px solid transparent'
    document.querySelector('.feedback--ctx').style.display = 'none'
  }
}

function massage() {
  alert('Pesan Berhasil Terkirim, developer Akan Segera Menanggapi Pesan anda!')
  location.reload(true)
}

function newAccount() {
  document.querySelector('.login--ctx-page').style.display = 'grid'
}

function loaded_app() {
  document.body.style.overflow = 'hidden'
  setTimeout(clear_loading_app, 1000)
}

function clear_loading_app() {
  document.body.style.overflow = 'auto'
  document.querySelector('.loading--app').style.display = 'none'
}

loaded_app()