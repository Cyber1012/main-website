function arrowFlash(){for(arrowCounter=0;arrowCounter<5;)$(".arrow-down").fadeToggle(1e3).fadeToggle(1e3),arrowCounter++}alert("Only the home page is responsive and ready, the rest has not been properly styled."),arrowFlash(),$(window).hover(arrowFlash),$(window).click(arrowFlash),$(window).scroll(arrowFlash),$(window).scroll((function(){let o=window.scrollY,r=$(window).width();r>992?o>629?$(".navbar").css("position","fixed").css("top","0.5rem"):$(".navbar").css("position","static"):r<992&&r>767?o>810?$(".navbar").css("position","fixed").css("top","0.5rem"):$(".navbar").css("position","static"):r<768&&(o>560?$(".navbar").css("position","fixed").css("top","0.5rem"):$(".navbar").css("position","static"))})),$(".footer-icon-copy-url").click((function(){prompt("Copy Me","https://www.eaganfarlin.com")}));