// Loaded Popups
if (localStorage.getItem("acceptedCookies") === "yes") {

  if (sessionStorage.getItem("infoPopup") === "ok") {

  } else {

    Swal.fire({

      title: "<strong>In Beta!</strong>",
      icon: "info",
      html: "Only the home page is properly styled, the rest is in heavy development.",

    }).then((result) => {

      if (result.isConfirmed) {

        sessionStorage.setItem("infoPopup", "ok");

      }

    })

  }

} else {

  Swal.fire({

    html: "This site uses cookies and Google Analytics to improve your experience, if you continue you are agreeing to these terms.",
    showDenyButton: true,
    confirmButtonText: "I Agree",
    denyButtonText: "Decline",
    confirmButtonColor: "#5cb85c",
    denyButtonColor: "#d9534f"

  }).then((result) => {

    if (result.isConfirmed) {

      Swal.fire({

        title: "<strong>In Beta!</strong>",
        icon: "info",
        html: "Only the home page is properly styled, the rest is in heavy development.",

      }).then((result) => {

        if (result.isConfirmed) {

          sessionStorage.setItem("infoPopup", "ok");

        }

      })

      localStorage.setItem("acceptedCookies", "yes");

    } else if (result.isDenied) {

      location.replace("about:blank");

    }

  })

}

// Loading Screen - Fades Out
$("#loading-screen").fadeOut(1000);

// Footer - Copy URL's URL Copier Popout
$(".footer-icon-copy-url").click(function () {

  Swal.fire({

    title: "<img src=\"/Global/Images/Link-Transparent.png\" class=\"footer-icon-link-copy-me\"> Copy Me",
    html: "https://eaganfarlin.com",
    showConfirmButton: true,
    confirmButtonText: "Done"

  })

});