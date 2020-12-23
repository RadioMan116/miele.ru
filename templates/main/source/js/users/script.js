//Доступный hamburger https://foxland.fi/simple-accessible-svg-menu-hamburger-animation
$(document).ready(function () {


	function hamburger(element, menu) {
		var button = document.getElementById(element),
			menu = document.getElementById(menu),
			menuList = document.querySelector(".menu"),
			menuBottom = document.getElementById("js-header__block_bottom"),
			menuParent = document.querySelector(".header__blocks");
		// menuBlock = document.getElementById('js-header__block_menu');
		button.onclick = function () {
			// Toggle class "opened". Set also aria-expanded to true or false.
			if (-1 !== button.className.indexOf("opened")) {
				button.parentNode.parentNode.classList.remove("active");
				button.className = button.className.replace(" opened", "");
				button.setAttribute("aria-expanded", "false");
				menuBottom.classList.remove("active");
				// menuBlock.classList.remove("active");
				menuParent.classList.remove("active");
				menuList.classList.remove("active");
				$("body").removeClass("fixed");
				$("html").removeClass("js-height");
				$(".header__overlay").hide();
			} else {
				button.parentNode.parentNode.classList.add("active");
				button.className += " opened";
				button.setAttribute("aria-expanded", "true");
				menuBottom.classList.add("active");
				// menuBlock.classList.add("active");
				menuParent.classList.add("active");
				menuList.classList.add("active");
				$("body").addClass("fixed");
				$("html").addClass("js-height");
			}
		};
	}

	(function () {
		let bgAttr = document.querySelectorAll(".dropdown-menu__item");
		if (bgAttr) {
			bgAttr.forEach(element => {
				let url = element.getAttribute("data-bg") ? element.getAttribute("data-bg") : element.getAttribute("data-bg-custom");

				element.querySelector(".dropdown-menu__link").style.background = `url('${url}')`;
			});
		}
	})();
	var windowWidth2 = $(window).width();
	// NEW SCRIPT

	// (function () {
	// })();
	function swiperLoad() {
		let mainCollection = document.querySelectorAll(".special-offers .container");
		let catalog = document.querySelector(".special-offers.catalog") ? document.querySelector(".special-offers.catalog") : document.querySelector(".js-favorite_list");
		let favorite = document.querySelector(".js-news");
		let article = document.querySelector(".articles-main");

		$(".special-offers .container").each(function (index, element) {
			var $this = $(this);
			$this.find(".swiper-pagination_2").addClass("instance-pagination-" + index);
		});
		if (catalog) {
			mainCollection.forEach(function (element, index) {
				let $this = $(this);
				element.querySelector(".swiper-container").classList.add("instance-" + index);
				element.querySelector(".swiper-button-next").classList.add("instance-next-" + index);
				element.querySelector(".swiper-button-prev").classList.add("instance-prev-" + index);
				var mySwiper33 = new Swiper(".instance-" + index, {
					slidesPerView: 3,
					spaceBetween: 25,
					slidesPerGroup: 1,
					allowTouchMove: false,
					// loop: true,
					// loopFillGroupWithBlank: true,
					pagination: {
						el: ".instance-pagination-" + index,
						// clickable: true
					},
					scrollbar: {
						el: ".swiper-scrollbar",
						hide: false,
						draggable: true
					},
					navigation: {
						nextEl: ".instance-next-" + index,
						prevEl: ".instance-prev-" + index
					},
					breakpoints: {
						// when window width is <= 320px
						767: {
							allowTouchMove: true,
							slidesPerGroup: 1,
							spaceBetween: 22,
							slidesPerView: 2
						},
						600: {
							allowTouchMove: true,
							slidesPerGroup: 1,
							slidesPerView: 1,
							spaceBetween: 10
						}
					}
				});
				if (windowWidth2 > 767) {
					if (element.querySelectorAll(".swiper-slide").length > 4) {
						element.querySelector(".swiper-button-next").style.display = "block";
						element.querySelector(".swiper-button-prev").style.display = "block";
						element.querySelector(".instance-pagination-" + index).style.display = "flex";
					} else {
						element.querySelector(".swiper-button-next").style.display = "none";
						element.querySelector(".swiper-button-prev").style.display = "none";
						element.querySelector(".instance-pagination-" + index).style.display = "none";
					}
				}
			});
			if (windowWidth2 <= 767) {
				(() => {
					let swiperHover = document.querySelectorAll("[data-swiper]");
					if (document.querySelector("[data-swiper]")) {
						swiperHover.forEach(function (el, index) {
							if (el.querySelector(".swiper-container").classList.contains("swiper-container-horizontal") || el.querySelector(".swiper-container").classList.contains("swiper-container-vertical")) {
								return;
							}
							$(el).find(".swiper-container ").addClass("swiperHover-" + index);
							$(el).find(".swiper-pagination").addClass("js-pagination-hover js-pagination-hover-" + index);
							var swiperHoverInit = new Swiper(".swiperHover-" + index, {
								spaceBetween: 20,
								slidesPerView: 1,
								effect: "fade",
								speed: 0,
								pagination: {
									el: ".js-pagination-hover-" + index,
									clickable: true,
								},
							});
							// $(el).mouseleave(function() {
							// 	let firstPagination = $(el).find('.swiper-pagination-bullet')
							// 	if (!$(firstPagination[0]).hasClass('active')) {
							// 		swiperHoverInit.slideTo($(this).index(0));
							// 	}
							// });
							$(el).find(".js-pagination-hover").on("click", function (e) {
								document.location.assign($(this).attr("href"));
							});
							// $(el).find('.swiper-pagination-bullet').hover(function() {
							// 	swiperHoverInit.slideTo($(this).index());
							// });
						});
					}
				})();
			}
		}
		else {
			mainCollection.forEach(function (element, index) {
				let $this = $(this);


				element.querySelector(".swiper-container").classList.add("instance-" + index);
				element.querySelector(".swiper-button-next").classList.add("instance-next-" + index);
				element.querySelector(".swiper-button-prev").classList.add("instance-prev-" + index);
				if (windowWidth2 > 767 && element.hasAttribute("data-swiper-mobile")) {

					return;
				}

				if ($(element).closest(".product-card").length) {

					let slidesPerGroupslide = 1;
					if (article) {
						slidesPerGroupslide = 4;
					}

					let mySwiper33 = new Swiper(".instance-" + index, {
						slidesPerView: 4,
						spaceBetween: 25,
						slidesPerGroup: slidesPerGroupslide,
						allowTouchMove: false,
						// loop: true,
						// loopFillGroupWithBlank: true,
						pagination: {
							el: ".instance-pagination-" + index,
							// clickable: true
						},
						// scrollbar: {
						// 	el: ".swiper-scrollbar",
						// 	hide: false,
						// 	draggable: true
						// },
						navigation: {
							nextEl: ".instance-next-" + index,
							prevEl: ".instance-prev-" + index
						},
						breakpoints: {
							// when window width is <= 320px
							767: {
								allowTouchMove: true,
								slidesPerGroup: 1,
								spaceBetween: 8,
								slidesPerView: "auto",
								pagination: {
									clickable: true
								},
							},
						}
					});
				}
				else {

					let mySwiper33 = new Swiper(".instance-" + index, {
						slidesPerView: 4,
						spaceBetween: 25,
						// slidesPerGroup: 4,
						allowTouchMove: false,
						// loop: true,
						// loopFillGroupWithBlank: true,
						pagination: {
							el: ".instance-pagination-" + index,
							// clickable: true
						},
						// scrollbar: {
						// 	el: ".swiper-scrollbar",
						// 	hide: false,
						// 	draggable: true
						// },
						navigation: {
							nextEl: ".instance-next-" + index,
							prevEl: ".instance-prev-" + index
						},
						breakpoints: {
							// when window width is <= 320px
							767: {
								allowTouchMove: true,
								slidesPerGroup: 1,
								spaceBetween: 22,
								slidesPerView: 2
							},
							600: {
								allowTouchMove: true,
								slidesPerGroup: 1,
								slidesPerView: 1,
								spaceBetween: 10
							}
						}
					});
				}
				if (windowWidth2 > 767) {
					if (element.querySelectorAll(".special-offers__slide").length > 4) {
						element.querySelector(".swiper-button-next").style.display = "block";
						element.querySelector(".swiper-button-prev").style.display = "block";
						element.querySelector(".instance-pagination-" + index).style.display = "flex";
					} else {
						element.querySelector(".swiper-button-next").style.display = "none";
						element.querySelector(".swiper-button-prev").style.display = "none";
						element.querySelector(".instance-pagination-" + index).style.display = "none";
					}
				}
			});
		}
		window.swiperLoad = swiperLoad;
	}
	swiperLoad();
	if ($(".js-recently-watched").length) {
		let productCard = document.querySelector(".product-card");
		let newCatalog = document.querySelector(".special-offers.catalog");
		if (productCard) {
			var mySwiper13 = new Swiper(".js-recently-watched .swiper-container", {
				slidesPerView: 5,
				slidesPerGroup: 1,
				spaceBetween: 31,
				touchRatio: 1,
				navigation: {
					nextEl: ".recently-watched__next",
					prevEl: ".recently-watched__prev"
				},
				breakpoints: {
					480: {
						slidesPerView: "auto",
						slidesPerGroup: 1,
						spaceBetween: 8,
					},
					767: {
						allowTouchMove: true,
						slidesPerView: "auto",
						slidesPerGroup: 1,
						spaceBetween: 24
					},
				},
				pagination: {
					el: ".swiper-pagination-recently-watched",
					clickable: true
				}
			});
			if ($(".js-recently-watched .swiper-slide").length > 5) {
				$(".recently-watched__prev").show();
				$(".recently-watched__next").show();
			} else {
				$(".recently-watched__prev").hide();
				$(".recently-watched__next").hide();
			}
		} else {
			var mySwiper13 = new Swiper(".js-recently-watched .swiper-container", {
				slidesPerView: 5,
				slidesPerGroup: 1,
				spaceBetween: 31,
				touchRatio: 1,
				navigation: {
					nextEl: ".recently-watched__next",
					prevEl: ".recently-watched__prev"
				},
				breakpoints: {
					480: {
						slidesPerView: "auto",
						slidesPerGroup: 1,
						spaceBetween: 8,
					},
					767: {
						slidesPerView: "auto",
						slidesPerGroup: 1,
						spaceBetween: 24
					},
				},
				pagination: {
					el: ".swiper-pagination-recently-watched",
					clickable: true
				}
			});
			if ($(".js-recently-watched .swiper-slide").length > 5) {
				$(".recently-watched__prev").show();
				$(".recently-watched__next").show();
			} else {
				$(".recently-watched__prev").hide();
				$(".recently-watched__next").hide();
			}
		}
	}
	var mySwiper9 = new Swiper(".js-product-card__rel", {
		slidesPerView: 2,
		slidesPerGroup: 1,
		spaceBetween: 30,
		touchRatio: 1,
		allowTouchMove: false,
		navigation: {
			nextEl: ".rel__next",
			prevEl: ".rel__prev"
		},
		pagination: {
			el: ".rel__pagination",
			clickable: true
		},
		breakpoints: {
			479: {
				allowTouchMove: true,
				slidesPerView: 1,
				// slidesPerGroup: 1,
			},
			600: {
				allowTouchMove: true,
				slidesPerView: 1.3,
				// slidesPerGroup: 1,
			},
			767: {
				allowTouchMove: true,
				slidesPerView: 2,
				// slidesPerGroup: 1,
				spaceBetween: 18
			},
		},
	});
	var mySwiper10 = new Swiper(".js-download-catalogs", {
		// Optional parameters
		// slidesPerGroup: 1,
		slidesPerView: 1,
		slidesPerColumn: 3,
		spaceBetween: 24,
		allowTouchMove: false,
		// direction: "horizontal",
		// loop: true,
		// If we need pagination
		navigation: {
			nextEl: ".download-catalogs__next",
			prevEl: ".download-catalogs__prev"
		},
		pagination: {
			el: ".swiper-pagination-download-catalogs",
			clickable: true
		},
		breakpoints: {
			// when window width is <= 320px
			767: {
				allowTouchMove: true,
			}
		}
		// Navigation arrows
		// navigation: {
		// 	nextEl: ".main_next",
		// 	prevEl: ".main_prev"
		// },
		// And if we need scrollbar
		// scrollbar: {
		// 	el: ".swiper-scrollbar"
		// }
	});
	var mySwiper34 = new Swiper(".js-reviews-main .swiper-container", {
		// Optional parameters
		// slidesPerGroup: 1,
		slidesPerView: 1,
		spaceBetween: 0,
		// direction: "horizontal",
		// loop: true,
		// If we need pagination
		navigation: {
			nextEl: ".reviews-main__next",
			prevEl: ".reviews-main__prev"
		},
		pagination: {
			el: ".swiper-pagination-reviews-main",
			clickable: true
		},
		breakpoints: {
			767: {
				spaceBetween: 16
			},
		},
	});
	// var mySwiper45 = new Swiper(".product-card .js-container-upsale", {
	// 	// Optional parameters
	// 	// slidesPerGroup: 1,
	// 	slidesPerView: 1,
	// 	slidesPerColumn: 2,
	// 	spaceBetween: 24,
	// 	allowTouchMove: false,
	// 	// direction: "horizontal",
	// 	// loop: true,
	// 	// If we need pagination
	// 	navigation: {
	// 		nextEl: ".upsale__next",
	// 		prevEl: ".upsale__prev"
	// 	},
	// 	pagination: {
	// 		el: ".swiper-pagination-upsale",
	// 		clickable: true
	// 	},
	// 	breakpoints: {
	// 		// when window width is <= 320px
	// 		767: {
	// 			allowTouchMove: true,
	// 			slidesPerView: 1,
	// 			slidesPerColumn: 2,
	// 			spaceBetween: 32,
	// 		}
	// 	}
	// });
	if ($(".product-card .js-diagram__slider").length) {
		var $slides = $(".product-card .js-diagram__slider").find(".swiper-slide");
		var $first = $slides.eq(0);
		var mySwiper12 = new Swiper(".product-card .js-diagram__slider .swiper-container", {
			slidesPerView: 4,
			slidesPerGroup: 1,
			spaceBetween: 12,
			touchRatio: 1,
			allowTouchMove: false,
			navigation: {
				nextEl: ".diagram__next",
				prevEl: ".diagram__prev"
			},
			breakpoints: {
				600: {
					allowTouchMove: true,
					slidesPerView: 2,
					slidesPerGroup: 1,
					spaceBetween: 16,
				},
				767: {
					allowTouchMove: true,
					slidesPerView: 2,
					slidesPerGroup: 1,
					spaceBetween: 24
				},
			},
			pagination: {
				el: ".diagram__pagination",
				clickable: true
			},
			// other parameters
			on: {
				init: function () {
					$first.clone().appendTo(".product-card .js-diagram__slider .swiper-container").addClass("swiper-transform");
				},
			},
		});
		if ($(".product-card .diagram .swiper-slide").length > 4) {
			$(".diagram__next").show();
			$(".diagram__prev").show();
		} else {
			$(".diagram__next").hide();
			$(".diagram__prev").hide();
		}
	}
	if ($(".catalog .js-advantages").length) {
		var mySwiper20 = new Swiper(".catalog .advantages__container", {
			slidesPerView: 3,
			slidesPerColumn: 2,
			spaceBetween: 9,
			touchRatio: 1,
			allowTouchMove: false,
			navigation: {
				nextEl: ".advantages__next",
				prevEl: ".advantages__prev"
			},
			pagination: {
				el: ".swiper-pagination-advantages",
				clickable: true
			},
			breakpoints: {
				767: {
					allowTouchMove: true,
					slidesPerView: 3,
					slidesPerColumn: 1,
					spaceBetween: 9,
				},
				450: {
					allowTouchMove: true,
					slidesPerView: 1,
					slidesPerColumn: 1,
				},
				660: {
					allowTouchMove: true,
					slidesPerView: 2,
					slidesPerGroup: 1,
					slidesPerColumn: 1,
				}
			}
		});
		if ($(".advantages .swiper-slide").length > 6) {
			$(".advantages__prev").show();
			$(".advantages__next").show();
		} else {
			$(".advantages__prev").hide();
			$(".advantages__next").hide();
		}
		$(this).on("click", "a.advantages__link", function (e) {
			console.log(window.location = $(this).attr("href"));
			window.location = $(this).attr("href");
			return true;
		});
	}
	$(".js-product-card__buy,.product-day__buy,.special-offers__buy").click(function () {
		$(document).ajaxSuccess(function () {
			if ($(".basket__item").length > 3) {
				$(".added-cart__items .basket__prev").show();
				$(".added-cart__items .basket__next").show();
				var mySwiper14 = new Swiper(".added-cart__items .swiper-container", {
					slidesPerView: 3,
					slidesPerGroup: 1,
					spaceBetween: 25,
					touchRatio: 1,
					navigation: {
						nextEl: ".added-cart__items .basket__next",
						prevEl: ".added-cart__items .basket__prev"
					},
					breakpoints: {
						550: {
							slidesPerView: 1,
							slidesPerGroup: 1,
							spaceBetween: 16,
						},
						767: {
							slidesPerView: 2,
						},
					}
				});
			}
		});
	});
	// $(".js-header__search").click(function () {
	// 	if ($("body").hasClass("header-search-show") == false) {
	// 		// $(".header .search__popup").addClass("search__popup-open");
	// 		// $(".header__search").addClass("header__search-open");
	// 		// $(".header__overlay").addClass("header__overlay-open");
	// 		// $("html").addClass("fixed");
	// 		$('body').addClass('header-search-show ')
	// 	} else {
	// 		// $(".header .search__popup").removeClass("search__popup-open");
	// 		// $(".header__search").removeClass("header__search-open");
	// 		// $(".header__overlay").removeClass("header__overlay-open");
	// 		// $("html").removeClass("fixed");
	// 		$('body').removeClass('header-search-show ')
	// 	}
	// });
	// header search
	(function () {
		var inputSearch = document.querySelector(".js-header-search__input");
		[].forEach.call(document.querySelectorAll(".js-form__hint"), function (item) {
			item.addEventListener("click", function () {
				inputSearch.value = this.innerHTML;
				inputSearch.parentNode.submit();
			});
		});
		[].forEach.call(document.querySelectorAll(".js-header__search"), function (element, index) {
			element.addEventListener("click", function () {
				document.body.classList.toggle("header-search-show");
				document.body.classList.remove("menu-open");
				inputSearch.focus();
			});
		});
		var $closeElement = document.querySelector(".js-header-search__close");
		if ($closeElement) {
			$closeElement.addEventListener("click", function () {
				document.body.classList.remove("header-search-show");
			});
		}
	})();
	$(".js-search-header__input").on("input", function () {
		if ($(this).val()) {
			$(".js-header__button,.js-header__submit").show();
		} else {
			$(".js-header__button,.js-header__submit").hide();
		}
	});
	$(".js-header__button").click(function () {
		$(".header__input").val("");
		$(this).hide();
		$(".js-header__submit").hide();
	});
	$(document).on("click", "[data-ajax]", function (e) {
		e.stopPropagation();
		e.preventDefault();
		$.get(this.getAttribute("data-url"), function (response) {
			globalPopup.append(response).show();
		});
		// $("html").addClass("fixed");
	});
	$(".js-dropdown-menu__title").click(function (event) {
		if ($(this).parent().hasClass("active") == false) {
			$(".dropdown-menu").removeClass("active");
			$(this).parent().addClass("active");
			$("#js-header__block_bottom").scrollTop(0);
		} else {
			$(this).parent().removeClass("active");
		}
		// $(".dropdown-menu.active ul.dropdown-menu__list").on("mouseover", function (event) {
		// 	// $('body').css('overflow','hidden');
		// 	$("body").addClass("fixed");
		// });
		// $(".dropdown-menu.active ul.dropdown-menu__list").on("mouseout", function (event) {
		// 	// $('body').css('overflow','visible');
		// 	$("body").removeClass("fixed");
		// });
		// document.querySelectorAll('.dropdown-menu__item').forEach(element => {
		// 	let url = element.getAttribute('data-bg');
		// 	element.style.background = `url('${url}')`;
		// })
	});
	$(".js-menu-footer__title").click(function (event) {
		if ($(this).parent().parent().hasClass("active") == false) {
			$(".menu-footer").removeClass("active");
			$(this).parent().parent().addClass("active");
		} else {
			$(this).parent().parent().removeClass("active");
		}
	});
	if (windowWidth2 <= 767) {
		$(".js-menu-footer__title").parent().parent().addClass("active");
	}
	$(".js-delete__table").click(function () {
		$(this).parent().remove();
	});
	// $(".js-filter__title").click(function (e) {
	// 	if ($(this).parent().hasClass("filter__close") == false) {
	// 		$(this).parent().addClass("filter__close");
	// 	} else {
	// 		$(this).parent().removeClass("filter__close");
	// 	}
	// });

	$(".js-item__close").click(function () {
		if ($(".filter__form").hasClass("closed") == false) {
			$(".filter__form").addClass("closed");
		} else {
			$(".filter__form").removeClass("closed");
		}
	});
	$(".js-share").click(function (e) {
		e.preventDefault();
		var buttonClose = document.createElement("div");
		buttonClose.className = ("button-close");
		if ($(".share__items").is(":visible")) {
			$(".share__items").hide();
		} else {
			$(".share__items").append(buttonClose);
			$(".share__items").css("display", "flex");
		}
		// $('.share__items').
	});
	$(".labels__sale").hover(function () {
		$(this).toggleClass("active");
	});
	$(".labels__item").hover(function () {
		$(this).toggleClass("active");
	});
	(function () {
		let point = document.querySelectorAll(".gallery__point");
		let buttonNext = document.querySelector(".gallery__next");
		let buttonPrev = document.querySelector(".gallery__prev");
		let firstAllParent = document.querySelectorAll(".new-gallery .swiper-slide");
		let gallery = document.querySelector(".new-gallery");
		let num = 0;
		let pagination = document.querySelector(".gallery__pagination");
		if (gallery) {
			firstAllParent.forEach(point => {
				let firstParent = point.querySelectorAll(".gallery__parent");
				firstParent[0].classList.add("active");

			});
			point.forEach((el) => {
				el.addEventListener("mouseover", function (e) {
					e.stopPropagation();
					// e.preventDefault();
					point.forEach((element) => {
						element.parentNode.classList.remove("active");
					});
					this.parentNode.classList.add("active");
				}, true);
				let div = document.createElement("div");
				div.classList.add("swiper-pagination-bullet");
				pagination.append(div);
			});
			let paginationDots = pagination.querySelectorAll(".swiper-pagination-bullet");
			let slideIndex = 1;
			showSlides(slideIndex);
			/* Функция увеличивает индекс на 1, показывает следующй слайд*/
			function plusSlide() {
				showSlides(slideIndex += 1);
			}
			/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
			function minusSlide() {
				showSlides(slideIndex -= 1);
			}
			/* Устанавливает текущий слайд */
			function currentSlide(n) {
				showSlides(slideIndex = n);
			}
			/* Основная функция слайдера */
			function showSlides(n) {
				let i;
				let slides = document.getElementsByClassName("gallery__parent");
				// let paginationDots = ;
				if (n > slides.length) {
					slideIndex = 1;
				}
				if (n < 1) {
					slideIndex = slides.length;
				}
				for (i = 0; i < slides.length; i++) {
					slides[i].classList.remove("active");
				}
				for (i = 0; i < paginationDots.length; i++) {
					paginationDots[i].className = paginationDots[i].className.replace(" swiper-pagination-bullet-active", "");
				}
				slides[slideIndex - 1].classList.add("active");
				paginationDots[slideIndex - 1].className += " swiper-pagination-bullet-active";
			}
			buttonNext.addEventListener("click", plusSlide);
			buttonPrev.addEventListener("click", minusSlide);
			if (windowWidth2 > 767) {
				paginationDots.forEach((el, index) => el.addEventListener("click", function () {
					currentSlide(index + 1);
				}));

			}
			if (windowWidth2 <= 767) {
				let galleryItem = gallery.querySelectorAll(".gallery__parent");

				galleryItem.forEach(el => {
					el.outerHTML = `<div class ='swiper-slide gallery-slide'>${el.outerHTML}</div>`;
				});
				$(".swiper-slide.gallery-slide").wrapAll("<div class=\"swiper-container new-gallery-slider\"><div class=\"swiper-wrapper\"></div></div>");
				var newGallery = new Swiper(".new-gallery-slider", {
					spaceBetween: 20,
					slidesPerView: 1,
					// effect: "fade",
					// speed: 0,
					pagination: {
						el: ".gallery__pagination",
						clickable: true,
					},
				});
			}
		}
	})();
	$(document).on("click", "a[href='#'].js-close", function (e) {
		e.preventDefault();
	});
	$(document).on("click", "a[href='#'].load-more", function (e) {
		e.preventDefault();
	});
	$(document).on("click", ".js-city-change", function (e) {
		$(this).toggleClass("active");
	});
	$(document).on("click", ".button-close", function (e) {
		// var shareItems = document.getElementsByClassName('share__items');
		if (this.parentElement.classList.contains("share__items")) {
			this.parentElement.style.display = ("none");
		}
		if (this.parentElement.classList.contains("popup-gloss")) {
			this.parentElement.parentElement.setAttribute("click", "false");
			this.parentElement.parentElement.removeClass = "active";
		}
		if (this.parentElement.classList.contains("popup-prop")) {
			this.parentElement.style.display = "none";
		}
		this.remove();
	});
	$(".js-filter-glossary").each(function (i, el) {
		tippy(el, {
			arrow: true,
			placement: "top", // top, right, bottom, left
			// trigger: 'click',
			// maxWidth: 300, //px or string
			interactive: true,
			// leave these as they are
			// followCursor: true,
			allowHTML: true,
			hideOnClick: true,
			theme: "light",
			appendTo: () => document.body,
			// ignoreAttributes: true,
			content: el.querySelector(".popup-gloss")
		});
	});
	$(".js-characteristic-glossary").each(function (i, el) {
		tippy(el, {
			arrow: true,
			placement: "auto", // top, right, bottom, left
			// trigger: 'click',
			// maxWidth: 300, //px or string
			interactive: true,
			// leave these as they are
			// followCursor: true,
			allowHTML: true,
			hideOnClick: true,
			theme: "light",
			appendTo: () => document.body,
			// ignoreAttributes: true,
			content: el.querySelector(".popup-gloss")
		});
	});
	$(".js-product-card__stock-info").each(function (i, el) {
		tippy(el, {
			arrow: true,
			placement: "top", // top, right, bottom, left
			// trigger: 'click',
			maxWidth: 420, //px or string
			interactive: true,
			// leave these as they are
			// followCursor: true,
			allowHTML: true,
			hideOnClick: true,
			theme: "light",
			appendTo: () => document.body,
			// ignoreAttributes: true,
			content: el.querySelector(".stock-popup")
		});
	});
	$(".js-link-pop-glossary").each(function (i, el) {
		tippy(el, {
			arrow: true,
			placement: "top", // top, right, bottom, left
			// trigger: 'click',
			// maxWidth: 300, //px or string
			interactive: true,
			// leave these as they are
			// followCursor: true,
			allowHTML: true,
			hideOnClick: true,
			theme: "light",
			appendTo: () => document.body,
			// ignoreAttributes: true,
			content: el.querySelector(".popup-prop")
		});
	});
	$(".product-card__payment-item").each(function (i, el) {
		tippy(el, {
			arrow: true,
			placement: "top", // top, right, bottom, left
			// trigger: 'click',
			maxWidth: 253, //px or string
			interactive: true,
			// leave these as they are
			// followCursor: true,
			allowHTML: true,
			hideOnClick: true,
			theme: "light",
			appendTo: () => document.body,
			// ignoreAttributes: true,
			content: el.querySelector(".popup-payment")
		});
	});
	(function () {
		let parentDesc = document.querySelector(".js-product-card__desc");
		if (parentDesc) {
			let paragraph = parentDesc.querySelectorAll(".js-desc-paragraph");
			let buttonMore = parentDesc.querySelector(".js-product-card__desc-more");
			let parentParagraph = parentDesc.querySelector(".js-product-card__desc-text");
			let heightParagraph = 0;
			let heightParagraphNext = 0;
			let arrParagraph = [];
			let paragraphFlag = true;

			if (paragraph.length > 3) {
				buttonMore.style.display = "flex";
				for (let prop of paragraph) {
					arrParagraph.push(prop);
				}
				for (let prop of arrParagraph.slice(0, 3)) {
					heightParagraph += prop.offsetHeight;
				}
				parentParagraph.style.height = heightParagraph + 42 + "px";
				for (let prop of arrParagraph) {
					heightParagraphNext += prop.offsetHeight;
				}
				buttonMore.addEventListener("click", () => {
					if (paragraphFlag) {
						parentParagraph.style.height = heightParagraphNext + (arrParagraph.length * 14) + "px";
						paragraphFlag = false;
						buttonMore.innerHTML = "Свернуть";
						buttonMore.classList.add("button-rotate");
					} else {
						parentParagraph.style.height = heightParagraph + 42 + "px";
						paragraphFlag = true;
						buttonMore.innerHTML = "Читать подробнее";
						buttonMore.classList.remove("button-rotate");
					}
				});
			}
		}

		if (windowWidth2 < 768) {
			(function () {
				let parentDesc = document.querySelector(".js-product-card__desc");
				if (parentDesc) {
					let paragraph = parentDesc.querySelectorAll(".js-desc-paragraph");
					let buttonMore = parentDesc.querySelector(".js-product-card__desc-more");
					let parentParagraph = parentDesc.querySelector(".js-product-card__desc-text");
					let heightParagraph = 0;
					let heightParagraphNext = 0;
					let arrParagraph = [];
					let paragraphFlag = true;

					if (windowWidth2 < 768) {

						if (paragraph.length > 1) {
							buttonMore.style.display = "flex";
							for (let prop of paragraph) {
								arrParagraph.push(prop);
							}
							for (let prop of arrParagraph.slice(0, 1)) {
								heightParagraph += prop.offsetHeight;
							}

							parentParagraph.style.height = heightParagraph + 14 + "px";

							for (let prop of arrParagraph) {
								heightParagraphNext += prop.offsetHeight;
							}

							buttonMore.addEventListener("click", () => {
								if (paragraphFlag) {
									parentParagraph.style.height = heightParagraphNext + (arrParagraph.length * 14) + "px";
									paragraphFlag = false;
									buttonMore.innerHTML = "Свернуть";
									buttonMore.classList.add("button-rotate");
								} else {
									parentParagraph.style.height = heightParagraph + 14 + "px";
									paragraphFlag = true;
									buttonMore.innerHTML = "Читать подробнее";
									buttonMore.classList.remove("button-rotate");
								}
							});
						}
					}
				}
			}());
		}
	}());


	$(".catalog__price.price__dashed").each(function (i, el) {

		tippy(el, {
			arrow: true,
			placement: "top", // top, right, bottom, left
			// trigger: 'click',
			// maxWidth: 300, //px or string
			interactive: true,
			// leave these as they are
			// followCursor: true,
			allowHTML: true,
			hideOnClick: true,
			theme: "light",
			appendTo: () => document.body,
			// ignoreAttributes: true,
			content: el.querySelector(".announcing__popup")
		});
	});
	function swiperHover() {
		if (windowWidth2 > 767) {

			let swiperHover = document.querySelectorAll("[data-swiper]");
			if (document.querySelector("[data-swiper]")) {
				swiperHover.forEach(function (el, index) {
					if (el.querySelector(".swiper-container").classList.contains("swiper-container-horizontal") || el.querySelector(".swiper-container").classList.contains("swiper-container-vertical")) {
						return;
					}
					$(el).find(".swiper-container ").addClass("swiperHover-" + index);
					$(el).find(".swiper-pagination").addClass("js-pagination-hover js-pagination-hover-" + index);
					var swiperHoverInit = new Swiper(".swiperHover-" + index, {
						spaceBetween: 20,
						slidesPerView: 1,
						effect: "fade",
						speed: 0,
						pagination: {
							el: ".js-pagination-hover-" + index,
							clickable: true,
						},
					});
					$(el).mouseleave(function () {
						let firstPagination = $(el).find(".swiper-pagination-bullet");
						if (!$(firstPagination[0]).hasClass("active")) {
							swiperHoverInit.slideTo($(this).index(0));
						}
					});
					$(el).find(".js-pagination-hover").on("click", function () {
						document.location.assign($(this).attr("href"));
					});
					$(el).find(".swiper-pagination-bullet").hover(function () {
						swiperHoverInit.slideTo($(this).index());
					});
				});
			}
		}
		window.swiperHover = swiperHover;
	}
	swiperHover();
	if (windowWidth2 > 767) {
		if ($("h1.title:contains(\"Корзина\")")) {
			$("h1.title:contains(\"Корзина\")").css("width", "100%");
		}
		// $(window).scroll(function () {
		// 	var scroll = $(window).scrollTop();
		// 	// var asideHeightSum = asideHeight + asideOffsetTop - 600;
		// 	if (scroll > 10) {
		// 		$(".dropdown-menu").removeClass("active");
		// 		$(".header__overlay").removeClass("header__overlay-open");
		// 		$(".header .search__popup").removeClass("search__popup-open");
		// 		$(".header__search").removeClass("header__search-open");
		// 		$(".header__overlay").removeClass("header__overlay-open");
		// 	}
		// });
		$(".articles .articles__text").matchHeight();
		$(".catalog__thumb .announcing").matchHeight();
		// $(".articles").not('.swiper-container').find('.articles__text').matchHeight();

		// (() => {
		// })();
		$(function () {

			$(".d-flex .articles__items .articles__text").matchHeight();
		});
		tippy("[data-announcing]", {
			// change these to your liking
			arrow: true,
			placement: "right", // top, right, bottom, left
			// trigger: 'click',
			maxWidth: 300, //px or string
			interactive: true,
			// leave these as they are
			// followCursor: true,
			allowHTML: true,
			theme: "light",
			ignoreAttributes: true,
			content(reference) {
				const title = reference.getAttribute("data-announcing");
				reference.removeAttribute("data-announcing");
				return title;
			},
		});
		new tippy(".tooltip", {
			placement: "top",
			// content: "Tooltip",
			arrow: true,
			theme: "light",
			// trigger: 'click'
			// dynamicTitle: true,
			onShow(instance) {
				instance.setContent(instance.reference.dataset.tippyContent);
			}
		});
		(() => {
			let check = document.querySelector(".catalog .js-recently-watched");
			if (check) {
				$(".col-md-3 .sidebar").css("padding-bottom", "400px");
			}
		})();
		$(".catalog__thumb .catalog__items .catalog__item .special-offers__text").matchHeight();
	}
	if (windowWidth2 <= 767) {
		(() => {
			let creditMini = document.querySelector(".credit-mini");
			let catalogSidebar = document.querySelector(".catalog .sidebar");
			if (catalogSidebar && creditMini) {
				catalogSidebar.appendChild(creditMini.cloneNode(true));

			}
		})();

		$(".catalog__thumb .catalog__items .catalog__item .special-offers__text").matchHeight();
		$(".catalog__thumb .catalog__items .catalog__item .special-offers__text p").matchHeight();
		$(".logo").appendTo(".header__block_top .container");
		// $(".catalog-view").appendTo(".bx-filter-section");
		$(".labels").appendTo(".product-card .product__header_top");
		$(".product-card__key").appendTo(".product-card .product__header_middle");
		$(".sidebar-right").appendTo(".product-card");
		$(".sidebar-right .gallery__items.swiper-container").appendTo(".hide-tabs");
		$(".reviews__main-link").appendTo(".product-card .reviews");
		$(".col-md-3 .js-container-upsale").remove();
		var mySwiper4 = new Swiper(".special-offers.catalog .js-container-upsale", {
			// Optional parameters
			// slidesPerGroup: 1,
			slidesPerView: 1,
			slidesPerColumn: 2,
			spaceBetween: 24,
			allowTouchMove: false,
			// direction: "horizontal",
			// loop: true,
			// If we need pagination
			navigation: {
				nextEl: ".upsale__next",
				prevEl: ".upsale__prev"
			},
			pagination: {
				el: ".swiper-pagination-upsale",
				clickable: true
			},
			breakpoints: {
				// when window width is <= 320px
				767: {
					allowTouchMove: true,
					slidesPerView: 1,
					slidesPerColumn: 2,
				}
			}
			// Navigation arrows
			// navigation: {
			// 	nextEl: ".main_next",
			// 	prevEl: ".main_prev"
			// },
			// And if we need scrollbar
			// scrollbar: {
			// 	el: ".swiper-scrollbar"
			// }
		});
		var mySwiper22 = new Swiper(".js-all-video", {
			// navigation: {
			// 	nextEl: ".practical-features__next",
			// 	prevEl: ".practical-features__prev"
			// },
			pagination: {
				el: ".swiper-pagination-all-video",
				clickable: true
			},
			breakpoints: {
				767: {
					slidesPerView: "auto",
					slidesPerGroup: 1,
					spaceBetween: 12,
				},
			}
		});

		var mySwiper237 = new Swiper(".articles .swiper-container", {
			// navigation: {
			// 	nextEl: ".practical-features__next",
			// 	prevEl: ".practical-features__prev"
			// },
			pagination: {
				el: ".articles__pagination",
				clickable: true
			},
			breakpoints: {
				600: {
					slidesPerView: 1,
					slidesPerGroup: 1,
					spaceBetween: 12,
				},
				700: {
					slidesPerView: 2,
					slidesPerGroup: 1,
					spaceBetween: 12,
				},
				767: {
					slidesPerView: 3,
					slidesPerGroup: 1,
					spaceBetween: 16
				},
			}
		});
		var mySwiper23 = new Swiper(".catalog .articles.swiper-container", {
			// navigation: {
			// 	nextEl: ".practical-features__next",
			// 	prevEl: ".practical-features__prev"
			// },
			pagination: {
				el: ".articles__pagination",
				clickable: true
			},
			slidesPerView: "auto",
			breakpoints: {

			}
		});

		var mySwiper233 = new Swiper(".gallery__items.swiper-container", {
			// navigation: {
			// 	nextEl: ".practical-features__next",
			// 	prevEl: ".practical-features__prev"
			// },
			pagination: {
				el: ".gallery__items-pagination",
				clickable: true
			},
			slidesPerView: 3,
			slidesPerGroup: 1,
			spaceBetween: 20,
			breakpoints: {
				600: {
					slidesPerView: 1,
				},
				700: {
					slidesPerView: 2,
				},
			}
		});

		if ($(".js-favorite_list[data-list=\"Избранное\"]").length) {
			var favorite = $(".js-favorite_list[data-list=\"Избранное\"]");
			favorite.addClass("favorite__items");
			$(".js-favorite_filter").prependTo($(".col-md-9"));
			$(".title").prependTo($(".col-md-9"));
			$(".breadcrumbs").prependTo($(".col-md-9"));


		}
		if ($(".filter-new").length) {
			$(".filter-new ").append("<div class=\"filter-new__button js-filter-new__button\"><span>фильтр</span></div>");
			$(".filter-new").addClass("active");
			$(".js-filter-new__button").click(function () {
				// $(this).parent().toggleClass('active')
				if ($(this).parent().hasClass("active")) {
					$(this).parent().removeClass("active");
					// $(".filter-new__button span").text("закрыть");
				} else {
					// $(".filter-new__button span").text("фильтр");
					$(this).parent().addClass("active");
				}
			});
		}
		$(function () {
			$(".hide-tabs .js-characteristic__title:eq(0)").addClass("active").nextUntil(".characteristic__title").addClass("active");
			$(".hide-tabs .js-characteristic__title").click(function (e) {
				$(this).toggleClass("active").nextUntil(".characteristic__title").toggleClass("active");
			});
		});
		if ($("h1.title:contains(\"Статьи и акции\")").length > 0) {
			$(".col-md-3").addClass("order");
		}
		(function () {
			var firstDropdownMenu = document.querySelector("nav.dropdown-menu");
			$(".header__block_top .menu").appendTo("#js-header__block_bottom .container");
			$(".js-city-change").appendTo("#js-header__block_bottom .menu");
			$(".header__telephones").appendTo("#js-header__block_bottom .menu");
			$(".header__mobile-tel").appendTo(".header .header__block_top .container");
			$(".header__icons").appendTo(".header .header__block_top .container");
			$("#js-menu").appendTo("#js-header__block_bottom .container");
			$(".time-work").appendTo(".header__telephones");
			// firstDropdownMenu.classList.add("active");
			let favComParent = $("<div/>", {
				"class": "dropdown-menu__fav-com"
			});
			let fav = $(".header__favorite");
			let com = $(".header__compare");
			favComParent.append(com);
			favComParent.append(fav);

			$(".header__dropdown-menu").append(favComParent);
			if (fav.hasClass("active") || com.hasClass("active")) { favComParent.addClass("active"); }
		})();
		(function () {
			let catalogList = document.querySelector(".catalog__list");
			if (catalogList) {
				catalogList.parentNode.classList.add("new-catalog");
			}
		})();
		(function () {
			let catalogThumb = document.querySelector(".catalog__thumb");
			if (catalogThumb) {
				catalogThumb.parentNode.classList.add("new-catalog");
			}
		})();
		(function () {
			let productCard = document.querySelector(".product-card");
			if (productCard) {

				let favorite = productCard.querySelector(".product-card__social");
				let productHeaderBottom = productCard.querySelector(".product__header_bottom");
				productHeaderBottom.append(favorite);

				let descriptionMini = productCard.querySelector(".product-card__description");
				let descriptionMax = productCard.querySelector(".product-card__desc-text");
				if (descriptionMax) {
					descriptionMax.before(descriptionMini);
				}

				let catalogProp = $(".catalog__prop-inner");
				if (!catalogProp.length) {
					$(".link-pop-glossary").wrapAll($("<div class=\"catalog__prop-inner\"></div>"));
				}

				let catalogPropParent = productCard.querySelector(".catalog__prop");
				let tabsLink = productCard.querySelector(".tabs__link");
				if (catalogPropParent) {
					tabsLink.before(catalogPropParent);
				}

			}
		})();
		tippy("[data-announcing]", {
			// change these to your liking
			// trigger: 'click',
			arrow: true,
			placement: "top", // top, right, bottom, left
			// delay: 5, //ms
			maxWidth: 240, //px or string
			// leave these as they are
			// followCursor: true,
			allowHTML: true,
			theme: "light",
			ignoreAttributes: true,
			content(reference) {
				const title = reference.getAttribute("data-announcing");
				reference.removeAttribute("data-announcing");
				return title;
			},
		});
		new tippy(".tooltip", {
			placement: "top",
			content: "Tooltip",
			arrow: true,
			theme: "light"
		});
	}
	if ($(".js-sidebar-articles").length > 0) {
		var mySwiper15 = new Swiper(".js-sidebar-articles", {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 12,
			navigation: {
				nextEl: ".articles__next",
				prevEl: ".articles__prev"
			},
			pagination: {
				el: ".articles__pagination",
				clickable: true
			},
			breakpoints: {
				600: {
					slidesPerView: 1,
					slidesPerGroup: 1,
					spaceBetween: 12,
				},
				767: {
					slidesPerView: 2,
					slidesPerGroup: 1,
					spaceBetween: 12,
				},
			}
		});
		let articleCurretSlide = [];
		(function () {
			let articleSlide = document.querySelectorAll(".js-sidebar-articles .articles__item");
			articleSlide.forEach(function (element) {
				articleCurretSlide.push(element);
			});
			if (articleCurretSlide.length < 2) {
				$(".swiper-pagination-articles").hide();
				$(".articles__next").hide();
				$(".articles__prev").hide();
			}
		})();
	}
	$(".js-comparison__select").click(function () {
		if ($(this).hasClass("active") == true) {
			$(".comparison__select ").removeClass("active");
			$(this).addClass("active");
		} else {
			$(".comparison__select ").removeClass("active");
			$(this).addClass("active");
		}
	});
	$(".js-help__row").click(function () {
		if ($(this).hasClass("help__row-open") == false) {
			$(".help__row").children(".help__info").hide();
			$(".help__row").removeClass("help__row-open");
			$(this).addClass("help__row-open");
			$(this).children(".help__info").show();
		} else {
			$(this).removeClass("help__row-open");
			$(this).children(".help__info").hide();
		}
	});
	$(".js-filter_reset").click(function () {
		document.location.href = "";
		return false;
	});
	window.globalPopup = new Popup();
	(function (footerSelector, wrapperSelector) {
		var footer = document.querySelector(footerSelector);
		var wrapper = document.querySelector(wrapperSelector);
		var height;
		var setSize;
		if (!wrapper || !footer) {
			return false;
		}
		setSize = function () {
			height = footer.offsetHeight;
			wrapper.style.paddingBottom = height + "px";
			footer.style.marginTop = height * -1 + "px";
		};
		setSize();
		window.addEventListener("resize", setSize, false);
	})("#js-footer", "#js-wrapper");
	$(".filter__form .checkbox-number").each(function () {
		if ($(this).text() === "0") {
			$(this).parent().addClass("disabled");
		}
	});
	if ($(".filter-tip").length > 0) {
		$(".filter-tip").parent().addClass("parent-tip");
	}
	$(".filter__slider").draggable();
	hamburger("js-hamburger", "js-menu");
	$(".filter__tags").click(function () {
		$(this).addClass("active");
	});
	$(".header__overlay").click(function () {
		$(".header .search__popup").removeClass("search__popup-open");
		$(".header__search").removeClass("header__search-open");
		$(".header__overlay").removeClass("header__overlay-open");
		$("html").removeClass("fixed");
	});
	$(function () {
		$.datepicker.regional["ru"] = {
			closeText: "Закрыть",
			prevText: "&#x3c;Пред",
			nextText: "След&#x3e;",
			currentText: "Сегодня",
			monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
			monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
			dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
			dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
			dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
			dateFormat: "dd.mm.yy",
			firstDay: 1,
			isRTL: false
		};
		$.datepicker.setDefaults($.datepicker.regional["ru"]);
		$(".js-datapicker").datepicker({
			minTime: 1,
			format: "d.m.Y",
			minDate: 1,
			// onSelectDate: function(ct, $i) {
			//   this.setOptions({
			// 	minTime: ct.getTime() > new Date ? false : 0
			//   })
			// }
		});
	});
	(function () {
		var mobileDetect = /Android|iPhone|iPad|iPod|BlackBerry|WPDesktop|IEMobile|Opera Mini/i.test(navigator.userAgent);
		var event = mobileDetect ? "touchend" : "mouseup";

		function Ratings(opts) {
			var opts = this.extend({
				element: "",
				countRate: 5,
				clickFn: function () { }
			}, opts);
			this.element = opts.element;
			if (!this.element) {
				return;
			}
			this.init(opts);
			this.events(opts);
		}
		Ratings.prototype = {
			init: function (opts) {
				var obj = this;
				this.tags = {};
				this.tags.default_state = this.element.querySelector(".ratings__disable");
				this.tags.hover = this.element.querySelector(".ratings__hover");
				this.tags.click = this.element.querySelector(".ratings__click");
				this.widthElement = this.element.offsetWidth / opts.countRate;
				this.width_votes = 0;
				this.votes = 0;
			},
			events: function (opts) {
				var obj = this;
				this.element.addEventListener("mouseover", function () {
					obj.tags.default_state.style.display = "block";
					obj.tags.hover.style.display = "block";
				}, false);
				this.element.addEventListener("mouseout", function () {
					obj.tags.default_state.style.display = "none";
					obj.tags.hover.style.display = "none";
				}, false);
				this.element.addEventListener("mousemove", function (e) {
					obj.width_votes = e.clientX - obj.element.getBoundingClientRect().left;
					obj.votes = Math.ceil(obj.width_votes / obj.widthElement);
					obj.tags.hover.style.width = obj.votes * obj.widthElement + "px";
				}, false);
				this.element.addEventListener(event, function () {
					obj.tags.click.style.width = obj.votes * obj.widthElement + "px";
					opts.clickFn.call(this, obj.votes);
				}, false);
			},
			extend: function (defaults, source) {
				for (var key in source) {
					if (source.hasOwnProperty(key)) {
						defaults[key] = source[key];
					}
				}
				return defaults;
			}
		};
		window.Ratings = Ratings;
	})();
	$(".js-viewForm").click(function () {
		//upon clicking of the button do an ajax post
		$(document).ajaxSuccess(function () {
			new Ratings({
				element: document.querySelector(".js-ratings__section"), // передаем элемент
				countRate: 5, // кол-во оценок
				clickFn: function (index) {
					$(".js-review_rating").val(index);
				}
			});
			$("[title=Телефон],.js-phone_mask").attr("type", "tel");
			$("[title=Телефон],.js-phone_mask").attr("placeholder", "Телефон");
			// $("[title=Телефон],.js-phone_mask,[title=Телефон]").prop("required", true);
			Inputmask.extendAliases({
				"customAlias": {
					mask: "+7 (999) 999-99-99",
					oncomplete: function () {
						$(this).removeClass("BadPols");
					},
					onincomplete: function () {
						$(this).addClass("BadPols");
						$(this).val("");
					},
				}
			});
			Inputmask("customAlias").mask("[type=tel]");
		});
	});
	$("#load-items").click(function () {
		//upon clicking of the button do an ajax post
		$(document).ajaxSuccess(function () {

			(() => {
				let swiperHover = document.querySelectorAll("[data-swiper]");
				if (document.querySelector("[data-swiper]")) {
					swiperHover.forEach(function (el, index) {
						if (el.querySelector(".swiper-container").classList.contains("swiper-container-horizontal") || el.querySelector(".swiper-container").classList.contains("swiper-container-vertical")) {
							return;
						}
						$(el).find(".swiper-container ").addClass("swiperHover-" + index);
						$(el).find(".swiper-pagination").addClass("js-pagination-hover js-pagination-hover-" + index);
						var swiperHoverInit = new Swiper(".swiperHover-" + index, {
							spaceBetween: 20,
							slidesPerView: 1,
							effect: "fade",
							speed: 0,
							pagination: {
								el: ".js-pagination-hover-" + index,
								clickable: true,
							},
						});
						$(el).mouseleave(function () {
							let firstPagination = $(el).find(".swiper-pagination-bullet");
							if (!$(firstPagination[0]).hasClass("active")) {
								swiperHoverInit.slideTo($(this).index(0));
							}
						});
						$(el).find(".js-pagination-hover").on("click", function (e) {
							document.location.assign($(this).attr("href"));
						});
						$(el).find(".swiper-pagination-bullet").hover(function () {
							swiperHoverInit.slideTo($(this).index());
						});
					});
				}
			})();
		});
	});
	$(".js-about-store__button").click(function () {
		if ($(this).hasClass("active") == false) {
			$(this).text("Свернуть");
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
			$(this).text("Читать подробнее");
		}
	});

	$(function () {
		if ($("#compare_table").length > 0) {
			$(function () {
				compareArray.init({
					table: document.getElementById("compare_table"),
					button: document.getElementById("compare_table_button").getElementsByTagName("a"),
					indexCols: 0,
					indexRows: 1,
					zebra: true,
					zebraClass: "gray_row",
					callback: function () { }
				});
				var butt = $("#compare_table_button"),
					ul = $(butt).next();
				butt.click(function (e) {
					e.stopPropagation();
					if ($(this).hasClass("down")) {
						// $(ul).slideUp(200);
						$(this).removeClass("down");
					} else {
						// $(ul).slideDown(200);
						$(this).addClass("down");
					}
					return false;
				});
				$(document).click(function () {
					$(butt).removeClass("down");
					// $(ul).slideUp(200);
				});
			});
			// $(".js-comparison__select").removeClass("active");
			// $(".js-comparison__select[compare='DIFF']").addClass("active");
			$(".js-comparison-height").parent().parent().addClass("thead__comparison");
			$(".js-comparison__link").click(function (e) {
				e.preventDefault();
			});
			window.onload = function () {
				// $('.comparison__main .characteristic__row').each(function (index, el) {
				// 	var height = $('.swiper-container-comparison .characteristic__row').eq(index).height();
				// 	$(el).height(height);
				// });
				if (windowWidth2 > 767) {
					$(".thead__comparison").css({
						"height": ($(".products-line").outerHeight() - 1 + "px")
					});
				} else {
					$(".thead__comparison").css({
						"marginBottom": ($(".products-line").innerHeight() + "px")
					});
					$(".js-swiper-comparison").css({
						"marginTop": ($(".thead__comparison").height() - 5 + "px")
					});
					$(".comparison .js-swiper-pagination").css({
						"top": ($(".thead__comparison").height() + 29 + "px")
					});
					$(".comparison .js-swiper-prev").css({
						"top": ($(".thead__comparison").height() + 48 + "px")
					});
					$(".comparison .js-swiper-next").css({
						"top": ($(".thead__comparison").height() + 48 + "px")
					});
					$(".comparison__main .characteristic__row").each(function (index, el) {
						if ($(this).text().length > 50) {
							$(this).addClass("level");
							$(".js-swiper-comparison .characteristic__row").eq(index).addClass("level");
						}
					});
				}
			}();
			var comparison_height = $(".thead__comparison").height();
			var if_max_width = false;
			$(window).scroll(function () {
				var scroll = $(window).scrollTop();
				if (scroll > comparison_height && !if_max_width) {
					if_max_width = true;
					$(".comparison").addClass("fixed");
				} else if (scroll < comparison_height && if_max_width) {
					if_max_width = false;
					$(".comparison").removeClass("fixed");
				}
			});
			$(".comparison .fixed-header").css({
				"width": ($(".comparison").width())
			});
			var mySwiper7 = new Swiper(".comparison__diagram .diagram__slider", {
				slidesPerView: 3,
				slidesPerGroup: 1,
				spaceBetween: 27,
				touchRatio: 1,
				allowTouchMove: false,
				navigation: {
					nextEl: ".special-offers_next",
					prevEl: ".special-offers_prev"
				},
				breakpoints: {
					767: {
						allowTouchMove: true,
						slidesPerView: 2,
						touchRatio: 1,
						spaceBetween: 16,
						slidesPerGroup: 1,
						// pagination: {
						// 	type: "fraction",
						// },
					},
				},
				pagination: {
					el: ".swiper-pagination",
					clickable: true
				},
				// thumbs: {
				// 	swiper: mySwiper8,
				// 	swiper: mySwiper5
				// }

			});
			var mySwiper8 = new Swiper(".fixed-header .swiper-container", {
				slidesPerView: 3,
				slidesPerGroup: 1,
				spaceBetween: 27,
				touchRatio: 1,
				allowTouchMove: false,
				navigation: {
					nextEl: ".special-offers_next",
					prevEl: ".special-offers_prev"
				},
				breakpoints: {
					767: {
						allowTouchMove: true,
						slidesPerView: 2,
						slidesPerGroup: 1,
						spaceBetween: 16,
					},
					// 600: {
					// 	slidesPerView: 2,
					// },
					// 768: {
					// 	slidesPerView: 2,
					// 	slidesPerGroup: 1,
					// 	spaceBetween: 24
					// },
				},
				pagination: {
					el: ".swiper-pagination",
					clickable: true
				},
				thumbs: {
					// swiper: mySwiper7,
					// swiper: mySwiper5
				}
			});
			var mySwiper5 = new Swiper(".js-swiper-comparison", {
				slidesPerView: 3,
				slidesPerGroup: 1,
				spaceBetween: 27,
				allowTouchMove: false,
				// loop: true,
				// loopFillGroupWithBlank: true,
				navigation: {
					nextEl: ".special-offers_next",
					prevEl: ".special-offers_prev"
				},
				// scrollbar: {
				// 	el: ".swiper-scrollbar",
				// 	hide: false,
				// 	draggable: true
				// },
				pagination: {
					el: ".swiper-pagination",
					clickable: true
				},
				breakpoints: {
					767: {
						allowTouchMove: true,
						slidesPerView: 2,
						touchRatio: 1,
						spaceBetween: 16,
						slidesPerGroup: 1,
						pagination: {
							type: "fraction",
						},
					},
					// 	600: {
					// 		slidesPerView: 1,
					// 	},
					// 	768: {
					// 		slidesPerView: 2,
					// 		slidesPerGroup: 1,
					// 	},
				},
				thumbs: {
					// swiper: mySwiper7,
					// swiper: mySwiper8
				}
			});
			// mySwiper8.controller.control = mySwiper5;
			// mySwiper5.controller.control = mySwiper8;
			// mySwiper7.controller.control = mySwiper8;
			let comparisonItem = document.querySelectorAll(".comparison__item");
			let comparisonList = document.querySelector(".comparison__list");
			if (comparisonItem.length > 1) {
				comparisonList.classList.add("triangle");
			}
		}
		if ($(".diagram").length) {
			var value = 0;
			var array = [];
			$(".diagram__items").each(function (index, el) {
				var arr = [];
				$(this).find(".diagram__pic").each(function (index, element) {
					arr.push($(element).data("param1"));
					array.push($(element).data("param1"));
				});
				var maxVal = Math.max.apply(null, arr);
				$(".diagram__maxvalue").text(maxVal);
				value = maxVal;
			});
			var zeroCheck = array.reduce(function (prev, next) {
				return prev + next;
			});
			if (zeroCheck == 0) {
				$(".diagram__items .swiper-slide").each(function (index, el) {
					var data1 = $(this).find(".diagram__pic").data("param1");
					$(this).find(".diagram__text").text(data1 + "  руб");
					$(this).find(".schedule").css({
						"height": ($(this).find(".diagram__pic").data("param1") / 100 + "%")
					});
				});
			} else {
				$(".diagram__items .swiper-slide").each(function (index, el) {
					var data1 = $(this).find(".diagram__pic").data("param1");
					$(this).find(".diagram__text").text(data1 + "  руб");
					$(this).find(".schedule").css({
						"height": ($(this).find(".diagram__pic").data("param1") / value * 100 + "%")
					});
				});
			}
			$(".js-diagram__param2").click(function () {
				var array = [];
				$(".diagram__tabs").removeClass("active");
				$(this).addClass("active");
				$(".diagram__items").each(function (index, el) {
					var arr = [];
					$(this).find(".diagram__pic").each(function (index, element) {
						arr.push($(element).data("param2"));
						array.push($(element).data("param2"));
					});
					var maxVal = Math.max.apply(null, arr);
					$(".diagram__maxvalue").text(maxVal);
					value = maxVal;
				});
				var zeroCheck = array.reduce(function (prev, next) {
					return prev + next;
				});
				if (zeroCheck == 0) {
					$(".diagram__items .swiper-slide").each(function (index, el) {
						var data1 = $(this).find(".diagram__pic").data("param2");
						$(this).find(".diagram__text").text(data1);
						$(this).find(".schedule").css({
							"height": ($(this).find(".diagram__pic").data("param2") / 100 + "%")
						});
					});
				} else {
					$(".diagram__items .swiper-slide").each(function (index, el) {
						var data1 = $(this).find(".diagram__pic").data("param2");
						$(this).find(".diagram__text").text(data1);
						$(this).find(".schedule").css({
							"height": ($(this).find(".diagram__pic").data("param2") / value * 100 + "%")
						});
					});
				}
			});
			$(".js-diagram__param1").click(function () {
				var array = [];
				$(".diagram__tabs").removeClass("active");
				$(this).addClass("active");
				$(".diagram__items").each(function (index, el) {
					var arr = [];
					$(this).find(".diagram__pic").each(function (index, element) {
						arr.push($(element).data("param1"));
						array.push($(element).data("param1"));
					});
					var maxVal = Math.max.apply(null, arr);
					$(".diagram__maxvalue").text(maxVal);
					value = maxVal;
				});
				var zeroCheck = array.reduce(function (prev, next) {
					return prev + next;
				});
				if (zeroCheck == 0) {
					$(".diagram__items .swiper-slide").each(function (index, el) {
						var data1 = $(this).find(".diagram__pic").data("param1");
						$(this).find(".diagram__text").text(data1 + "  руб");
						$(this).find(".schedule").css({
							"height": ($(this).find(".diagram__pic").data("param1") / 100 + "%")
						});
					});
				} else {
					$(".diagram__items .swiper-slide").each(function (index, el) {
						var data1 = $(this).find(".diagram__pic").data("param1");
						$(this).find(".diagram__text").text(data1 + "  руб");
						$(this).find(".schedule").css({
							"height": ($(this).find(".diagram__pic").data("param1") / value * 100 + "%")
						});
					});
				}
			});
			$(".js-diagram__param3").click(function () {
				var array = [];
				$(".diagram__tabs").removeClass("active");
				$(this).addClass("active");
				$(".diagram__items").each(function (index, el) {
					var arr = [];
					$(this).find(".diagram__pic").each(function (index, element) {
						arr.push($(element).data("param3"));
						array.push($(element).data("param3"));
					});
					var maxVal = Math.max.apply(null, arr);
					$(".diagram__maxvalue").text(maxVal);
					value = maxVal;
				});
				var zeroCheck = array.reduce(function (prev, next) {
					return prev + next;
				});
				if (zeroCheck == 0) {
					$(".diagram__items .swiper-slide").each(function (index, el) {
						var data1 = $(this).find(".diagram__pic").data("param3");
						$(this).find(".diagram__text").text(data1);
						$(this).find(".schedule").css({
							"height": ($(this).find(".diagram__pic").data("param3") / 100 + "%")
						});
					});
				} else {
					$(".diagram__items .swiper-slide").each(function (index, el) {
						var data1 = $(this).find(".diagram__pic").data("param3");
						$(this).find(".diagram__text").text(data1);
						$(this).find(".schedule").css({
							"height": ($(this).find(".diagram__pic").data("param3") / value * 100 + "%")
						});
					});
				}
			});
			$(".js-diagram__param4").click(function () {
				var array = [];
				$(".diagram__tabs").removeClass("active");
				$(this).addClass("active");
				$(".diagram__items").each(function (index, el) {
					var arr = [];
					$(this).find(".diagram__pic").each(function (index, element) {
						arr.push($(element).data("param4"));
						array.push($(element).data("param4"));
					});
					var maxVal = Math.max.apply(null, arr);
					$(".diagram__maxvalue").text(maxVal);
					value = maxVal;
				});
				var zeroCheck = array.reduce(function (prev, next) {
					return prev + next;
				});
				if (zeroCheck == 0) {
					$(".diagram__items .swiper-slide").each(function (index, el) {
						var data1 = $(this).find(".diagram__pic").data("param4");
						$(this).find(".diagram__text").text(data1);
						$(this).find(".schedule").css({
							"height": ($(this).find(".diagram__pic").data("param4") / 100 + "%")
						});
					});
				} else {
					$(".diagram__items .swiper-slide").each(function (index, el) {
						var data1 = $(this).find(".diagram__pic").data("param4");
						$(this).find(".diagram__text").text(data1);
						$(this).find(".schedule").css({
							"height": ($(this).find(".diagram__pic").data("param4") / value * 100 + "%")
						});
					});
				}
			});
			$(".js-diagram__param5").click(function () {
				var array = [];
				$(".diagram__tabs").removeClass("active");
				$(this).addClass("active");
				$(".diagram__items").each(function (index, el) {
					var arr = [];
					$(this).find(".diagram__pic").each(function (index, element) {
						arr.push($(element).data("param5"));
						array.push($(element).data("param5"));
					});
					var maxVal = Math.max.apply(null, arr);
					$(".diagram__maxvalue").text(maxVal);
					value = maxVal;
				});
				var zeroCheck = array.reduce(function (prev, next) {
					return prev + next;
				});
				if (zeroCheck == 0) {
					$(".diagram__items .swiper-slide").each(function (index, el) {
						var data1 = $(this).find(".diagram__pic").data("param5");
						$(this).find(".diagram__text").text(data1);
						$(this).find(".schedule").css({
							"height": ($(this).find(".diagram__pic").data("param5") / 100 + "%")
						});
					});
				} else {
					$(".diagram__items .swiper-slide").each(function (index, el) {
						var data1 = $(this).find(".diagram__pic").data("param5");
						$(this).find(".diagram__text").text(data1);
						$(this).find(".schedule").css({
							"height": ($(this).find(".diagram__pic").data("param5") / value * 100 + "%")
						});
					});
				}
			});
			$(".js-diagram__param6").click(function () {
				var array = [];
				$(".diagram__tabs").removeClass("active");
				$(this).addClass("active");
				$(".diagram__items").each(function (index, el) {
					var arr = [];
					$(this).find(".diagram__pic").each(function (index, element) {
						arr.push($(element).data("param6"));
						array.push($(element).data("param6"));
					});
					var maxVal = Math.max.apply(null, arr);
					$(".diagram__maxvalue").text(maxVal);
					value = maxVal;
				});
				var zeroCheck = array.reduce(function (prev, next) {
					return prev + next;
				});
				if (zeroCheck == 0) {
					$(".diagram__items .swiper-slide").each(function (index, el) {
						var data1 = $(this).find(".diagram__pic").data("param6");
						$(this).find(".diagram__text").text(data1);
						$(this).find(".schedule").css({
							"height": ($(this).find(".diagram__pic").data("param6") / 100 + "%")
						});
					});
				} else {
					$(".diagram__items .swiper-slide").each(function (index, el) {
						var data1 = $(this).find(".diagram__pic").data("param6");
						$(this).find(".diagram__text").text(data1);
						$(this).find(".schedule").css({
							"height": ($(this).find(".diagram__pic").data("param6") / value * 100 + "%")
						});
					});
				}
			});
			if (windowWidth2 < 768) {
				$(".diagram__sidebar").click(function () {
					$(this).toggleClass("active");
				});
				$(".comparison__list").click(function () {
					$(this).toggleClass("active");
				});
				// mySwiper7.controller.control = mySwiper8;
				// // mySwiper8.controller.control = mySwiper7;
				// mySwiper7.controller.control = mySwiper5;
			}
		}
	});
	$(function () {
		$(".js-glossary__title,.js-glossary__items").click(function () {
			$(this).parent().toggleClass("closed").removeClass("only-link").find(".js-glossary__li").removeClass("active");
			$(this).parent().find(".js-glossary__item").removeClass("test");
		});
		$(".js-glossary .js-glossary__li").click(function () {
			if ($(this).hasClass("active")) {
				$(this).removeClass("active");
				if ($(this).parent().parent().hasClass("only-link")) {
					$(".js-glossary").addClass("closed").removeClass("only-link");
				}
			} else {
				$(this).addClass("active");
			}
		});
		$(".js-glossary.only-link .js-glossary__li.active").click(function () {
			e.stopPropagation();
			e.preventDefault();
			$(".js-glossary").addClass("closed").removeClass("only-link");
		});
		$(".js-glossary a").click(function (e) {
			e.preventDefault();
		});
		var arrElem = document.querySelectorAll(".js-glossary__item");
		var arrLink = document.querySelectorAll(".js-glossary__li");
		var arrayElem = [];
		for (var i = 0; i < arrElem.length; i++) {
			arrayElem.push(arrElem[i]);
			arrElem[i].addEventListener("click", function (e) {
				e.preventDefault();
				e.stopPropagation();
				$(".js-glossary__li.active").removeClass("active");
				$(".js-glossary").addClass("closed");
				var test = arrayElem.indexOf(e.target);
				$(".js-glossary__item").removeClass("test");
				$(arrayElem[test]).addClass("test").parent().parent().removeClass("closed").addClass("only-link");
				var activeEl = $(arrLink[test]).addClass("active");
				$("html, body").animate({
					scrollTop: $(activeEl).offset().top
				}, 1000);
			});
		}
		let onlyLink = $(".only-link");
		if (onlyLink.length) {

			$("body,html").animate({
				scrollTop: onlyLink.offset().top
			}, 1500);
			return false;
		}
	});
	$(function () {
		$("[data-fancybox=\"gallery\"]").fancybox({});
		$("[data-fancybox=\"certificat\"]").fancybox({});


	});
	(() => {
		$("[data-scroll]").each(function () {
			var id = $(this).attr("href");

			if ($(id).length) {
				var top = $(id).offset().top;

				$(this).click(function (event) {
					event.preventDefault();

					$("body,html").animate({
						scrollTop: top
					}, 1500);
					return false;
				});
			}
			else (
				$(this).hide()
			);
		});

	})();
	if ($("[type=tel],[title=Телефон],.js-phone_mask").length) {
		setTimeout(function () {
			$("[title=Телефон],.js-phone_mask").attr("type", "tel");
			// $("[title=Телефон],.js-phone_mask,[title=Телефон]").prop("required", true);
			$("[title=Телефон],.js-phone_mask,[title=Телефон]").val("");
			Inputmask.extendAliases({
				"customAlias": {
					mask: "+7 (999) 999-99-99",
					oncomplete: function () {
						$(this).removeClass("BadPols");
					},
					onincomplete: function () {
						$(this).addClass("BadPols");
						$(this).val("");
					},
				}
			});
			Inputmask("customAlias").mask("[type=tel]");
		}, 300);
	}
	if ($(".page__title.content-top__title.content-top__title_top span").length > 0) {
		$(".content-top").addClass("content-top__tags");
	}
	$(function () {
		$("#tabs").tabs();

		// $(".benefits .swiper").each(function(index, element) {
		// 	var $this = $(this);
		// 	$this.find('[class ^=swiper-pagination]').addClass("benefits-pagination-" + index);
		// });
		let benefits = document.querySelector(".benefits");
		let benefitsCollection = document.querySelectorAll(".benefits .swiper");
		if (benefits) {
			benefitsCollection.forEach(function (element, index) {
				let $this = $(this);
				element.querySelector(".swiper-container").classList.add("benefits-" + index);
				element.querySelector(".swiper-button-next").classList.add("benefits-next-" + index);
				element.querySelector(".swiper-button-prev").classList.add("benefits-prev-" + index);
				element.querySelector(".swiper-pagination").classList.add("benefits-pagination-" + index);
				var benef = new Swiper(".benefits-" + index, {
					spaceBetween: 25,
					slidesPerGroup: 1,
					allowTouchMove: false,
					// loop: true,
					// loopFillGroupWithBlank: true,
					pagination: {
						el: ".benefits-pagination-" + index,
						// clickable: true
					},
					navigation: {
						nextEl: ".benefits-next-" + index,
						prevEl: ".benefits-prev-" + index
					},
					breakpoints: {
						767: {
							allowTouchMove: true,
						}
					},
				});
				if (windowWidth2 > 767) {
					if (element.querySelectorAll(".swiper-slide").length > 1) {
						element.querySelector(".benefits-next-" + index).style.display = "block";
						element.querySelector(".benefits-prev-" + index).style.display = "block";
						element.querySelector(".benefits-pagination-" + index).style.display = "flex";
					} else {
						element.querySelector(".benefits-next-" + index).style.display = "none";
						element.querySelector(".benefits-prev-" + index).style.display = "none";
						element.querySelector(".benefits-pagination-" + index).style.display = "none";
					}
				}
			});
		}
		if (windowWidth2 < 768) {
			$("#tabs ul").click(function () {
				$(this).toggleClass("active");
			});
			// $('#tabs ul li').click(function(e) {
			// 	e.stopPropagation();
			// 	$('.#tabs ul li').removeClass('active');
			// 	$(this).addClass('active');
			// 	// $(this).addClass('active')
			// 	// $(this).parent().removeClass('active')
			// })

			if ($(".product-card__collection .tags__item").length <= 1) {
				$(".product-card__collection .tags__item").addClass("tags__item-first");
				$(".product-card__collection .tags__list").addClass("tags__list-first");
			}
		}
	});
	$(function () {
		if (windowWidth2 < 768) {
			$(".benefits-slider-thumbs").click(function () {
				$(this).toggleClass("active");
			});
		}
	});
	setTimeout(function () {
		(function () {
			let collection = document.querySelector(".product-card__collection");
			let accessories = document.querySelector(".card-accessories");
			if (accessories) return;
			if (collection) {
				let tabsParent = collection.querySelector(".tags__list");
				let tabs = collection.querySelectorAll(".tags__list li");
				let collectionChild = collection.querySelectorAll(".swiper-tabs");
				let collectionNext = collection.querySelectorAll(".collection__next");
				let collectionPrev = collection.querySelectorAll(".collection__prev");
				let collectionPagination = collection.querySelectorAll(".swiper-pagination-collection");
				let collectionHeight = [];
				let maxHeight = [];
				collectionNext.forEach((element, index) => {
					element.classList.add("collection-button-" + index);
				});
				collectionPrev.forEach((element, index) => {
					element.classList.add("collection-button-" + index);
				});
				collectionPagination.forEach((element, index) => {
					element.classList.add("collection-pagination-" + index);
				});
				collectionChild.forEach((element, index) => {
					element.classList.add("collection-" + index);
					var mySwiper71 = new Swiper(".product-card__collection .swiper-tabs.collection-" + index, {
						// Optional parameters
						// slidesPerGroup: 1,
						slidesPerView: 4,
						spaceBetween: 24,
						allowTouchMove: false,
						// direction: "horizontal",
						// loop: true,
						// If we need pagination
						navigation: {
							nextEl: ".collection__next.collection-button-" + index,
							prevEl: ".collection__prev.collection-button-" + index
						},
						pagination: {
							el: ".swiper-pagination-collection.collection-pagination-" + index,
							// clickable: true
						},
						breakpoints: {
							// when window width is <= 320px
							// 500: {
							// 	allowTouchMove: true,
							// 	slidesPerView: 1,
							// },
							600: {
								allowTouchMove: true,
								slidesPerView: "auto",
								spaceBetween: 8,
							},
							767: {
								allowTouchMove: true,
								slidesPerView: "auto",
								spaceBetween: 8,
							}
						}
						// Navigation arrows
						// navigation: {
						// 	nextEl: ".main_next",
						// 	prevEl: ".main_prev"
						// },
						// And if we need scrollbar
						// scrollbar: {
						// 	el: ".swiper-scrollbar"
						// }
					});
				});
				if (windowWidth2 <= 767) {
					(() => {
						let tabsProduct = $("#tabs [aria-controls=\"tabs-2\"] a");
						if (tabsProduct.length) {
							tabsProduct.trigger("click").closest(".active").removeClass("active");

						}
					})();

				}
			}
			// if (windowWidth2 > 767) {
			// 	(() => {
			// 		let swiperHoverTwo = $(".product-card__collection .swiper");
			// 		if ($(".product-card__collection")) {
			// 			swiperHoverTwo.each(function(index, el) {
			// 				$(el).find(".swiper-container ").addClass("swiperHover-" + index);
			// 				$(el).find('.swiper-pagination').addClass("js-pagination-hover js-pagination-hover-" + index);
			// 				var swiperHoverInitTwo = new Swiper(".swiperHover-" + index, {
			// 					spaceBetween: 20,
			// 					slidesPerView: 1,
			// 					effect: 'fade',
			// 					speed: 0,
			// 					pagination: {
			// 						el: '.js-pagination-hover-' + index,
			// 						clickable: true,
			// 					},
			// 				});
			// 				$(el).mouseleave(function() {
			// 					let firstPagination = $(el).find('.swiper-pagination-bullet')
			// 					if (!$(firstPagination[0]).hasClass('active')) {
			// 						swiperHoverInitTwo.slideTo($(this).index(0));
			// 					}
			// 				});
			// 				$(el).find('.js-pagination-hover').on("click", function(e) {
			// 					window.open($(this).attr('href'));
			// 				})
			// 				$(el).find('.swiper-pagination-bullet').hover(function() {
			// 					swiperHoverInitTwo.slideTo($(this).index());
			// 				});
			// 			})
			// 		}
			// 	})();
			// }
		})();
	}, 100);

	//Карта аксессуаров
	setTimeout(function () {
		(function () {
			let collection = document.querySelector(".card-accessories");
			if (collection) {
				let tabsParent = collection.querySelector(".tags__list");
				let tabs = collection.querySelectorAll(".tags__list li");
				let collectionChild = collection.querySelectorAll(".swiper-tabs");
				let collectionNext = collection.querySelectorAll(".collection__next");
				let collectionPrev = collection.querySelectorAll(".collection__prev");
				let collectionPagination = collection.querySelectorAll(".swiper-pagination-collection");
				let collectionHeight = [];
				let maxHeight = [];
				collectionNext.forEach((element, index) => {
					element.classList.add("collection-button-" + index);
				});
				collectionPrev.forEach((element, index) => {
					element.classList.add("collection-button-" + index);
				});
				collectionPagination.forEach((element, index) => {
					element.classList.add("collection-pagination-" + index);
				});
				collectionChild.forEach((element, index) => {
					element.classList.add("collection-" + index);
					var mySwiper71 = new Swiper(".card-accessories .product-card__collection .swiper-tabs.collection-" + index, {
						// Optional parameters
						// slidesPerGroup: 1,
						slidesPerView: 3,
						spaceBetween: 24,
						allowTouchMove: false,
						// direction: "horizontal",
						// loop: true,
						// If we need pagination
						navigation: {
							nextEl: ".card-accessories__next",
							prevEl: ".card-accessories__prev"
						},
						pagination: {
							el: ".swiper-pagination-card-accessories",
							// clickable: true
						},
						breakpoints: {
							// when window width is <= 320px
							// 500: {
							// 	allowTouchMove: true,
							// 	slidesPerView: 1,
							// },
							767: {
								allowTouchMove: true,
								// slidesPerGroup: 1,
								slidesPerView: 1,
								spaceBetween: 12,
							}
						}
					});
				});
				if (windowWidth2 <= 767) {
					(() => {
						let tabsProduct = $("#tabs [aria-controls=\"tabs-2\"] a");
						if (tabsProduct.length) {
							tabsProduct.trigger("click").closest(".active").removeClass("active");

						}
					})();

				}
			}

		})();
	}, 200);
	// tippy(".link-pop-glossary .icons-prop-item", {
	// 	// change these to your liking
	// 	arrow: true,
	// 	placement: "top", // top, right, bottom, left
	// 	// trigger: 'click',
	// 	// maxWidth: 300, //px or string
	// 	interactive: true,
	// 	// leave these as they are
	// 	// followCursor: true,
	// 	allowHTML: true,
	// 	theme: "light",
	// 	appendTo: () => document.body,
	// 	// ignoreAttributes: true,
	// 	content(reference) {
	// 		const title = reference.getAttribute("title");
	// 		reference.removeAttribute("title");
	// 		return title;
	// 	},
	// });

	setTimeout(function () {
		(function () {
			let similarAccssories = document.querySelector(".swiper-container.similar-accessories-swiper");
			if (similarAccssories) {
				var swiperSimilar = new Swiper(similarAccssories, {
					slidesPerView: 3,
					spaceBetween: 28,
					navigation: {
						nextEl: ".swiper-button-next.similar-accessories__next",
						prevEl: ".swiper-button-prev.similar-accessories__prev"
					},
					pagination: {
						el: ".swiper-pagination.similar-accessories__pagination"
						// clickable: true
					},
					breakpoints: {
						600: {
							allowTouchMove: true,
							slidesPerView: "auto",
							spaceBetween: 8,
						},
						767: {
							allowTouchMove: true,
							slidesPerView: "auto",
							spaceBetween: 8,
						}
					}
				})
			}
		}());
	}, 100);

	(function () {
		let descriptionVideoMob = document.querySelector(".description__video.mob");
		if (descriptionVideoMob) {
			if (windowWidth2 < 768) {
				var swiperDescription = new Swiper(".swiper-container.description__inner", {
					slidesPerView: 1,
					spaceBetween: 12,
					pagination: {
						el: ".swiper-pagination.description__pagination"
						// clickable: true
					},
				})
			}
		}
	}());

	(function () {
		let catalogReverse = document.querySelector(".catalog-reverse");

		if (catalogReverse) {
			let tagsCatalog = catalogReverse.querySelector(".tags");
			let catalogSorting = catalogReverse.querySelector(".catalog__sorting");
			let filterDate = catalogReverse.querySelector(".filter__date");
			catalogReverse.prepend(catalogSorting);
			catalogReverse.prepend(tagsCatalog);
			catalogSorting.prepend(filterDate);

			if (windowWidth2 < 768) {
				catalogReverse.prepend(filterDate)
			}
		}


	}());

});
$(window).on("load", function () {
	var windowWidth2 = $(window).width();
	setTimeout(function () {
		var mySwiper = new Swiper(".js-swiper-main", {
			// Optional parameters
			direction: "horizontal",
			loop: true,
			autoplay: {
				delay: 4000,
				disableOnInteraction: false,
			},
			// If we need pagination
			pagination: {
				el: ".swiper-pagination",
				clickable: true
			},
			// Navigation arrows
			navigation: {
				nextEl: ".main_next",
				prevEl: ".main_prev"
			},
			// And if we need scrollbar
			scrollbar: {
				el: ".swiper-scrollbar",
				draggable: true
			},
			on: {
				init: function () {
					if (windowWidth2 <= 767) {

						setTimeout(function () {
							var offestpagination = $(".js-swiper-main").outerHeight() - $(".swiper__item").outerHeight() - 24;

							$(".js-swiper-main").find(".swiper-pagination").css("top", offestpagination + "px");
						}, 600);
					}
				},
				imagesReady: function () {
					if (windowWidth2 <= 767) {

						setTimeout(function () {
							var offestpagination = $(".js-swiper-main").outerHeight() - $(".swiper__item").outerHeight() - 24;

							$(".js-swiper-main").find(".swiper-pagination").css("top", offestpagination + "px");
						}, 600);
					}
				},
			},
		});
		var galleryThumbs = new Swiper(".js-gallery-thumbs", {
			spaceBetween: 6,
			slidesPerView: 6,
			freeMode: true,
			// direction: "vertical",
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			touchRatio: 0.2,
			slideToClickedSlide: true,
			breakpoints: {
				// when window width is <= 320px
				// 420: {
				//   slidesPerGroup: 1,
				//   slidesPerView: 1,
				//   spaceBetween: 0
				// },
				// // // when window width is <= 480px
				// // 480: {
				// 700: {
				//   slidesPerView: 2,
				//   slidesPerGroup: 2,
				//   spaceBetween: 20
				// },
				768: {
					spaceBetween: 14
				}
			},
			navigation: {
				nextEl: ".thumbs-next",
				prevEl: ".thumbs-prev"
			},
		});
		var galleryTop = new Swiper(".js-gallery-top", {
			spaceBetween: 0,
			// navigation: {
			// 	nextEl: '.swiper-button-next',
			// 	prevEl: '.swiper-button-prev',
			// },
			pagination: {
				el: ".gallery-top__pagination",
				clickable: true
			},
			navigation: {
				nextEl: ".top-next",
				prevEl: ".top-prev"
			},
			thumbs: {
				swiper: galleryThumbs
			}
		});
		var practicalThumbs = new Swiper(".practical-thumbs", {
			spaceBetween: 28,
			slidesPerView: 3,
			freeMode: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
		});
		var practicalTop = new Swiper(".practical-top", {
			spaceBetween: 0,
			navigation: {
				nextEl: ".practical-features__next",
				prevEl: ".practical-features__prev"
			},
			pagination: {
				el: ".swiper-pagination-practical-features",
				clickable: true
			},
			thumbs: {
				swiper: practicalThumbs
			},
		});
		var benefitsSliderThumbs = new Swiper(".benefits-slider-thumbs", {
			spaceBetween: 28,
			slidesPerView: "auto",
			freeMode: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
		});
		var benefitsSliderTop = new Swiper(".benefits-slider-top", {
			spaceBetween: 0,
			navigation: {
				nextEl: ".benefits-slider-next",
				prevEl: ".benefits-slider-prev"
			},
			pagination: {
				el: ".benefits-slider-pagination",
				clickable: true
			},
			thumbs: {
				swiper: benefitsSliderThumbs
			}
		});
	}, 100);
	if ($(".filter-new").length) {
		$(".filter-new .bx-filter-parameters-box-container").each(function () {
			if ($(this).find(".checkbox").length >= 4) {
				$(this).addClass("more");
				$(this).find(".checkbox").eq(3).addClass("js-autoHeight");
				$(this).find(".js-autoHeight").hide();
				$(this).find(".js-autoHeight").nextAll(".checkbox").hide();
				// $('.js-autoHeight').each(function () {
				// 	var elHeight = $(this).offset().top
				// 	var elHeightParent = $(this).parent().offset().top
				// 	var summ = elHeight - elHeightParent;
				// 	$(this).closest('.bx-filter-parameters-box-container').css('height', summ + 27);
				// })
			}
		});
		$("<span class=\"more-text js-more-text\">Показать еще</span>").prependTo($(".more .col-xs-12"));
		$(".js-more-text").click(function () {
			if ($(this).parent().parent().hasClass("more")) {
				$(this).parent().parent().removeClass("more");
				$(this).text("Свернуть");
				$(this).siblings(".js-autoHeight").show();
				$(this).siblings(".js-autoHeight").nextAll(".checkbox").show();
			} else {
				$(this).parent().parent().addClass("more");
				$(this).text("Показать еще");
				$(this).siblings(".js-autoHeight").hide();
				$(this).siblings(".js-autoHeight").nextAll(".checkbox").hide();
				// $(this).siblings('.js-autoHeight').each(function () {
				// 	var elHeight = $(this).offset().top
				// 	var elHeightParent = $(this).parent().offset().top
				// 	var summ = elHeight - elHeightParent;
				// 	$(this).closest('.bx-filter-parameters-box-container').css('height', summ + 27);
				// })
			}
		});
	}
	if ($(".filter__form.js-form").length) {
		$(".filter__form.js-form .filter__checkbox").each(function () {
			if ($(this).find("label").length > 4) {
				$(this).addClass("more");
				$(this).find("label").eq(3).addClass("js-autoHeight");
				$(this).find(".js-autoHeight").hide();
				$(this).find(".js-autoHeight").nextAll("label").hide();


			}
		});
		let number = $(".filter__checkbox label").not(":visible").length;
		$("<span class=\"more-text js-more-text\">Показать еще<b>" + number + "</b></span>").prependTo($(".more"));

		$(".js-more-text").click(function () {
			if ($(this).parent().hasClass("more")) {
				$(this).parent().removeClass("more");
				$(this).text("Свернуть");
				$(this).siblings(".js-autoHeight").show();
				$(this).siblings(".js-autoHeight").nextAll("label").show();
			} else {
				$(this).parent().addClass("more");
				$(this).text("Показать еще").append("<b>" + number + "</b");
				$(this).siblings(".js-autoHeight").hide();
				$(this).siblings(".js-autoHeight").nextAll("label").hide();
			}
		});
	}
	if ($(".comparison").length) {
		$(".js-compare_block-change.active").parent().addClass("order");
		if ($(".comparison__link")) {
			$(".comparison__list").each(function () {
				let category = $(this).find(".comparison__link");
				if (category.hasClass("active")) {
					$(this).parent().addClass("order");
				} else {
					$(".comparison__list .comparison__item:eq(0)").addClass("order");
				}
			});
			$(".comparison__list").height($(".comparison__item.order").innerHeight());
			// if (select.hasClass('active')) {
			// 	console.log('1')
			// }
		}
		if (windowWidth2 > 767) {
			$(".thead__comparison").css({
				"height": ($(".products-line").outerHeight() + "px")
			});
		} else {
			$(".thead__comparison").css({
				"marginBottom": ($(".products-line").innerHeight() + "px")
			});
			$(".js-swiper-comparison").css({
				"marginTop": ($(".thead__comparison").height() - 5 + "px")
			});
			$(".comparison .js-swiper-pagination").css({
				"top": ($(".thead__comparison").height() + 29 + "px")
			});
			$(".comparison .js-swiper-prev").css({
				"top": ($(".thead__comparison").height() + 48 + "px")
			});
			$(".comparison .js-swiper-next").css({
				"top": ($(".thead__comparison").height() + 48 + "px")
			});
			$(".comparison__main .characteristic__row").each(function (index, el) {
				if ($(this).text().length > 50) {
					$(this).addClass("level");
					$(".js-swiper-comparison .characteristic__row").eq(index).addClass("level");
				}
			});
		}
		$(".comparison__main .characteristic__row").each(function (index, el) {
			if ($(this).text().length > 50) {
				$(this).addClass("level");
				$(".js-swiper-comparison .characteristic__row").eq(index).addClass("level");
			}
			if ($(this).text().length > 110) {
				$(this).addClass("level-2");
				$(".js-swiper-comparison .characteristic__row").eq(index).addClass("level-2");
			}
		});
		$(".comparison__main .characteristic__row").each(function (index, el) {
			if (windowWidth2 >= 768) {
				setTimeout(() => {
					var height = $(".js-swiper-comparison .characteristic__row").eq(index).outerHeight();
					$(el).outerHeight(height);

				}, 100);

			} else {
				setTimeout(function () {
					var height = $(".js-swiper-comparison .characteristic__row").eq(index).outerHeight();
					$(el).outerHeight(height);
				}, 100);
				// setTimeout(function () {
				// 	var height = $(".js-swiper-comparison .characteristic__row").eq(index).outerHeight();
				// 	$(el).outerHeight(height);
				// }, 700);
				// setTimeout(function () {
				// 	var height = $(".js-swiper-comparison .characteristic__row").eq(index).outerHeight();
				// 	$(el).outerHeight(height);
				// }, 800);
			}

		});
		setTimeout(function () {
			let el = $(".products-line .swiper-slide");

			if (el.length <= 1) {
				$(".comparison__button").addClass("hidden");
				$(".js-comparison__select[compare='ALL']").trigger("click");
				return;
			}
			$(".js-comparison__select.active").trigger("click");

		}, 200);
		setTimeout(function () {
			$(function () {
				$(".comparison thead .js-characteristic__title,.comparison tbody .js-characteristic__title").addClass("hide-tab").nextUntil(".characteristic__title").addClass("hide-tab");

				$(".comparison thead .js-characteristic__title").each(function (index, el) {
					$(this).find("td").click(function () {

						$(this).parent().toggleClass("hide-tab shadow").nextUntil(".characteristic__title").toggleClass("hide-tab shadow");
						$(".comparison tbody .js-characteristic__title").eq(index).toggleClass("hide-tab shadow").nextUntil(".characteristic__title").toggleClass("hide-tab shadow");

						// if ($(this).hasClass('shadow') ) {
						// 	if(!$(this).closest('.wrap1')){}
						// 	$('thead .shadow').wrapAll('<tr class="wrap1"/>')
						// 	$('tbody .shadow').wrapAll('<tr class="wrap1"/>')
						// } else {
						// 	$('.wrap1 tr').unwrap()
						// 	// $('.wrap1').unwrap()
						// }
						// console.log($(this).closest('.wrap1'))
					});
				});
				$(".comparison tbody .js-characteristic__title").each(function (index, el) {
					$(this).find("td").click(function () {
						$(this).parent().toggleClass("hide-tab shadow").nextUntil(".characteristic__title").toggleClass("hide-tab shadow");
						$(".comparison thead .js-characteristic__title").eq(index).toggleClass("hide-tab shadow").nextUntil(".characteristic__title").toggleClass("hide-tab shadow");
					});
				});
				$(".js-open-all").click(function () {

					if ($(this).hasClass("active")) {
						$(".comparison thead .js-characteristic__title,.comparison tbody .js-characteristic__title").addClass("hide-tab").nextUntil(".characteristic__title").addClass("hide-tab");
						$(this).removeClass("active");
					}
					else {
						$(".comparison thead .js-characteristic__title,.comparison tbody .js-characteristic__title").removeClass("hide-tab shadow").nextUntil(".characteristic__title").removeClass("hide-tab shadow");
						$(this).addClass("active");
					}
				});
				$(".js-open-all").trigger("click");

			});
		}, 100);

	}
	if ($("a[data-fancybox=\"gallery\"] img").length) {
		// $('a[data-fancybox="gallery"] img').eq(0).each(function () {
		// 	var img = new Image($(this));
		// 	img.src = $(this).attr('src');
		// 	if (img.height > 0) {
		// 		$(this).height(img.height)
		// 	}
		// });
		// setInterval(function () {
		// 	$('a[data-fancybox="gallery"] img').each(function () {
		// 		var img = new Image($(this));
		// 		img.src = $(this).attr('src');
		// 		if (img.height > 0) {
		// 			$(this).height(img.height)
		// 		}
		// 	});
		// }, 100);
		// setInterval(function () {
		// 	$('a[data-fancybox="gallery"] img').eq(0).each(function () {
		// 		var img = new Image($(this));
		// 		img.src = $(this).attr('src');
		// 		if (img.height > 0) {
		// 			$(this).height(img.height)
		// 		}
		// 	});
		// }, 300);
	}
	if (windowWidth2 > 767) {
		var mySwiper4 = new Swiper(".col-md-3 .js-container-upsale", {
			// Optional parameters
			// slidesPerGroup: 1,
			slidesPerView: 1,
			slidesPerColumn: 2,
			spaceBetween: 24,
			allowTouchMove: false,
			// direction: "horizontal",
			// loop: true,
			// If we need pagination
			navigation: {
				nextEl: ".upsale__next",
				prevEl: ".upsale__prev"
			},
			pagination: {
				el: ".swiper-pagination-upsale",
				clickable: true
			},
			breakpoints: {
				// when window width is <= 320px
				767: {
					allowTouchMove: true,
					slidesPerView: 1,
					slidesPerColumn: 2,
				}
			}
			// Navigation arrows
			// navigation: {
			// 	nextEl: ".main_next",
			// 	prevEl: ".main_prev"
			// },
			// And if we need scrollbar
			// scrollbar: {
			// 	el: ".swiper-scrollbar"
			// }
		});
		$(".instructions-category__item").matchHeight(
			{
				byRow: false
			}
		);
		$(".instructions-main__list").matchHeight();
		$(".articles.articles-main .special-offers .announcing").matchHeight(
			{
				byRow: false
			}
		);
		setTimeout(() => {
			$(".catalog .instructions .catalog__item").matchHeight();

		}, 200);



	} else {
		var mySwiper444 = new Swiper(".category-container", {
			allowTouchMove: true,
			slidesPerView: "auto",
			slidesPerColumn: 1,
			spaceBetween: 8,
			pagination: {
				el: ".category-pagination",
				clickable: true
			},
			breakpoints: {
				// 560: {
				// 	slidesPerView: 1.11,
				// 	spaceBetween: 14,
				// }
			},
		});
		$(".catalog .instructions").each(function (indx, element) {
			var mySwiper22 = new Swiper(".instructions__items.swiper-container", {
				// navigation: {
				// 	nextEl: ".practical-features__next",
				// 	prevEl: ".practical-features__prev"
				// },
				slidesPerView: "auto",
				// slidesPerGroup: 1,
				spaceBetween: 7,
				pagination: {
					el: ".swiper-pagination-instructions",
					clickable: true
				},
				breakpoints: {
					// 550: {
					// 	slidesPerView: 1.5
					// },
				}
			});
		});
		// (function () {
		// 	let moreText = document.querySelector(".description.text-default");
		// 	if (moreText) {
		// 		let check = moreText.querySelectorAll("p").length > 1;

		// 		if (check) {
		// 			let button = document.createElement("div");
		// 			let openText = "Читать подробнее",
		// 				closeText = "Свернуть";
		// 			//moreText.append(button);
		// 			button.classList.add("js-switch", "description__switch");
		// 			button.innerHTML = openText;
		// 			button.onclick = function () {
		// 				this.parentElement.classList.toggle("active");
		// 				button.innerHTML == "Читать подробнее" ? button.innerHTML = closeText : button.innerHTML = openText;
		// 			};
		// 		}


		// 	}
		// })();
		// (function () {
		// 	let moreText = document.querySelector(".catalog__description.description");
		// 	if (moreText) {
		// 		let button = document.createElement("div");
		// 		let openText = "Читать подробнее",
		// 			closeText = "Свернуть";
		// 		moreText.prepend(button);
		// 		button.classList.add("js-switch", "description__switch");
		// 		button.innerHTML = openText;
		// 		button.onclick = function () {
		// 			this.classList.toggle("active");
		// 			button.innerHTML == "Читать подробнее" ? button.innerHTML = closeText : button.innerHTML = openText;
		// 		};
		// 	}
		// })();
		(() => {
			let select = $(".js-mob-sort");
			if (select.length) {
				select.selectric({
					disableOnMobile: false,
					nativeOnMobile: false,
					onInit: function () {
						$('.selectric-input').addClass("noCheck")
					},
				});
			}
		})();
	}
	if ($(".MultiFile-intercepted").length) {
		// Убрать прикрепленный файл после отправки рекламации
		$(document).ajaxSuccess(function () {
			let returnExchangeForm = document.querySelector(".return-exchange__form");
			returnExchangeForm.querySelectorAll(".MultiFile-remove").forEach(element => element.click());
		});
	}
	(() => {
		let returnSelect = $(".return-exchange__form select");
		if (returnSelect.length) {
			returnSelect.selectric({
				disableOnMobile: false,
				nativeOnMobile: false,
				onInit: function () {
					$('.selectric-input').addClass("noCheck")
				},
			});
		}
	})();
	$(".catalog .instructions .special-offers__text.catalog__text").matchHeight(

	);
	$(".articles.articles-main .announcing:not(.announcing-mobile)").matchHeight(

	);


	(function () {
		let moreText = document.querySelector(".js-button");
		let mainTags = document.querySelector(".tags__list");
		if (moreText) {
			moreText.classList.add("show");
			moreText.onclick = showTags;
			showTags();

			function showTags() {
				var num = 0;
				var lastItemIndex = 0;
				var tagsList = mainTags.querySelectorAll(".tags__item");
				tagsList.forEach((element, index) => {
					if (element.classList.contains("show") === false && num < 7) {
						element.classList.add("show");
						num++;
						lastItemIndex = index;
					}
					if (num <= 7) {
						return false;
					}
				});
				if (tagsList.length <= lastItemIndex + 1) {
					moreText.classList.remove("show");
				}
			}
		} else { }
	})();
	// $(function() {
	// 	let check = document.querySelectorAll(".about-store__button");
	// 	if (check.length > 0) {
	// 		$(check).each(function(i, e) {
	// 			$(e).on('click', function(e) {
	// 				e.preventDefault();
	// 				if (!$(check).parent().hasClass('active')) {
	// 					$('html,body').animate({
	// 						scrollTop: $(check).offset().top
	// 					}, 1000);
	// 				}
	// 			});
	// 		})
	// 	}
	// });

	$(".ordering__payment-label").click(function () {
		//upon clicking of the button do an ajax post
		$(document).ajaxSuccess(function () {
			(() => {
				swiperLoad();
				swiperHover();
			})();
		});
	});

	(() => {
		let dropMenu = document.querySelectorAll(".js-dropdown-menu__title");
		if (dropMenu.length > 0) {
			dropMenu.forEach(function (el, index) {
				if (windowWidth2 > 767) {
					$(el).siblings().find(".dropdown-menu__item").eq(0).addClass("active");
					$(el).siblings().find(".dropdown-menu__inner").eq(0).addClass("active");
					el.addEventListener("click", function () {
						el.closest("#js-menu").classList.toggle("active");
						el.classList.toggle("active");
						setTimeout(() => {
							document.body.classList.toggle("menu-show");
						}, 200);
						// $("ul.dropdown-menu__list").on("mouseover", "li:not(.active)", function () {
						// 	$(this).addClass("active").siblings().removeClass("active").closest(".dropdown-menu__parent").find(".dropdown-menu__inner").removeClass("active").eq($(this).index()).addClass("active");
						// });
						$("ul.dropdown-menu__list li").hoverIntent({
							sensitivity: 1, // number = sensitivity threshold (must be 1 or higher)
							interval: 100,  // number = milliseconds for onMouseOver polling interval
							// timeout: 800,   // number = milliseconds delay before onMouseOut
							over: function () {
								$(this).addClass("active").siblings().removeClass("active").closest(".dropdown-menu__parent").find(".dropdown-menu__inner").removeClass("active").eq($(this).index()).addClass("active");
							},
							// out: function(){
							// 	$(this)
							// 		.removeClass("hoverIn").toggleClass("hoverOut");
							// }
						});

					});
				}
			});
			if (windowWidth2 <= 767) {
				$(".dropdown-menu__item").each(function () {
					$(this).append($(this).closest(".dropdown-menu__parent").find(".sub-menu__list").eq($(this).index()));
				});
			}
			if (windowWidth2 > 767) {

				$(document).mouseup(function (e) { // событие клика по веб-документу
					let menu1 = $(".header__dropdown-menu.active"),
						menu2 = $(".dropdown-menu.active"),
						menu3 = $(".dropdown-menu__title.active"),
						body = $(".menu-show");
					var div = $("#js-header__block_menu"); // тут указываем ID элемента
					if (!div.is(e.target) // если клик был не по нашему блоку
						&& div.has(e.target).length === 0) { // и не по его дочерним элементам
						menu1.removeClass("active");
						menu2.removeClass("active");
						menu3.removeClass("active");
						body.removeClass("menu-show");
					}
				});

				$(".js-sub-menu__link").hover(function () {
					let el = $(this).data("bgSrc");
					let way = $(this).closest(".dropdown-menu__inner.active").find(".js-dropdown-menu__banner source");
					way.attr("srcset", el);
				}, function () {
					let orig = $(this).closest(".dropdown-menu__inner.active").find(".js-dropdown-menu__banner source").data("srcset");
					let way = $(this).closest(".dropdown-menu__inner.active").find(".js-dropdown-menu__banner source");
					way.attr("srcset", orig);
				});
			}
			$(".js-dropdown-menu__hide").click(() => {
				let menu1 = $(".header__dropdown-menu.active"),
					menu2 = $(".dropdown-menu.active"),
					menu3 = $(".dropdown-menu__title.active"),
					body = $(".menu-show");
				menu1.removeClass("active");
				menu2.removeClass("active");
				menu3.removeClass("active");
				body.removeClass("menu-show");
			});
		}
	})();



	function loadingAjax() {
		$.ajax({
			beforeSend: function () {
				$("body").addClass("loading-ajax");
			},
			success: function (msg) {
				$("body").removeClass("loading-ajax");
			}
		});
	}
	$("#load-items").click(loadingAjax);

	window.setTimeout(function () {

		document.body.classList.add("loaded");

	}, 500);
	if ($(".js-favorite_list").length) {
		$(".js-add2favorite").click(() => {

			$(document).ajaxSuccess(function () {
				setTimeout(() => {

					swiperHover();
				}, 100);
			});
		});
	}
});
