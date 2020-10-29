$(document).ready(function () {
	let checkMap = document.querySelector(".maps");
	if (checkMap) {
		var myPlacemark;
		var myMap;

		function createMaps(element, coords, center, zoom) {
			if (!element) {
				return false;
			}
			ymaps.ready(function () {
				myPlacemark;
				myMap = new ymaps.Map(element, {
					center: [parseFloat(center[0]), parseFloat(center[1])],
					zoom: zoom
				}, {
					searchControlProvider: "yandex#search"
				});
				myMap.controls.remove("searchControl");
				myMap.behaviors.disable("scrollZoom");
				for (var i = 0, l = coords.length; i < l; i += 1) {
					myPlacemark = new ymaps.Placemark([parseFloat(coords[i].x), parseFloat(coords[i].y)], {
						// iconCaption: coords[i].c,
						balloonContent: `
						<div class="map-popup__title">
						${coords[i].c}
						</div>
						<div class = "map-popup__text">
						${coords[i].t}
						</div>
						<div class = "map-popup__text">
						<span>${coords[i].a}</span>
						<span>${coords[i].b}</span>
						</div>
						`,
					}, {
						preset: "islands#redIcon",
					});
					myMap.geoObjects.add(myPlacemark);
				}
			});
		}
		// contact map
		(function () {
			var items = document.querySelectorAll(".js-warranty__map-point");
			var map = document.getElementById("js-warranty__map");
			var center = (map.getAttribute("data-center")).split(",");
			if (!map) {
				return false;
			}
			var coords = [];
			$(items).each(function (index) {
				var tmp = (this.getAttribute("data-coords")).split("||");
				coords[index] = {
					x: tmp[0],
					y: tmp[1],
					c: tmp[2],
					t: tmp[3],
					a: tmp[4],
					b: tmp[5]
				};
			});
			console.log(center);
			createMaps(map, coords, center, 9);
			// createMaps(map, coords, tmp, 14);
		})();
	}
});
