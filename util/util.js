var anonList = "alligator, anteater, armadillo, auroch, axolotl, badger, bat, beaver, buffalo, camel, chameleon, cheetah, chipmunk, chinchilla, chupacabra, cormorant, coyote, crow, dingo, dinosaur, dolphin, duck, elephant, ferret, fox, frog, giraffe, gopher, grizzly, hedgehog, hippo, hyena, jackal, ibex, ifrit, iguana, koala, kraken, lemur, leopard, liger, llama, manatee, mink, monkey, narwhal, nyan cat, orangutan, otter, panda, penguin, platypus, python, pumpkin, quagga, rabbit, raccoon, rhino, sheep, shrew, skunk, slow loris, squirrel, turtle, walrus, wolf, wolverine, wombat";
anonList = anonList.split(", ");

var colorList = "AntiqueWhite, Aqua, Aquamarine, Azure, Bisque, Black, BlanchedAlmond, Blue, BlueViolet, Brown, BurlyWood, CadetBlue, Chartreuse, Chocolate, Coral, CornflowerBlue, Crimson, Cyan, DarkBlue, DarkCyan, DarkGoldenRod, DarkGray, DarkGrey, DarkGreen, DarkKhaki, DarkMagenta, DarkOliveGreen, DarkOrange, DarkOrchid, DarkRed, DarkSalmon, DarkSeaGreen, DarkSlateBlue, DarkSlateGray, DarkSlateGrey, DarkTurquoise, DarkViolet, DeepPink, DeepSkyBlue, DimGray, DimGrey, DodgerBlue, FireBrick, FloralWhite, ForestGreen, Fuchsia, Gainsboro, Gold, GoldenRod, Gray, Grey, Green, GreenYellow, HotPink, IndianRed , Indigo , Ivory, Khaki, Lavender, LavenderBlush, LawnGreen, LightBlue, LightCoral, LightGray, LightGrey, LightGreen, LightPink, LightSalmon, LightSeaGreen, LightSkyBlue, LightSlateGray, LightSlateGrey, LightSteelBlue, LightYellow, Lime, LimeGreen, Magenta, Maroon, MediumAquaMarine, MediumBlue, MediumOrchid, MediumPurple, MediumSeaGreen, MediumSlateBlue, MediumSpringGreen, MediumTurquoise, MediumVioletRed, MidnightBlue, MistyRose, Moccasin, NavajoWhite, Navy, Olive, OliveDrab, Orange, OrangeRed, Orchid, PaleGoldenRod, PaleGreen, PaleTurquoise, PaleVioletRed, PeachPuff, Peru, Pink, Plum, PowderBlue, Purple, RebeccaPurple, Red, RosyBrown, RoyalBlue, SaddleBrown, Salmon, SandyBrown, SeaGreen, SeaShell, Sienna, Silver, SkyBlue, SlateBlue, SlateGray, SlateGrey, SpringGreen, SteelBlue, Tan, Teal, Thistle, Tomato, Turquoise, Violet, Wheat, Yellow, YellowGreen";
colorList = colorList.split(", ");

var userList = [
	"grey.png",
	"orange.png",
	"tabby.png"
];

var getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = {
	getRandomUserImg: function(){ return '/images/user/' + userList[getRandomInt(0, userList.length - 1)]; },
	generateAnonUser: function() {
		var id = getRandomInt(100, 1000),
			imgNum = getRandomInt(0, userList.length),
			backgroundColor = colorList[getRandomInt(0, colorList.length - 1)],
			animal = anonList[imgNum];

		var anonUser = {
			displayName: 'anonymous-' + animal + id,
			profilePic: '/images/anonymous/' + animal + '_lg.png',
			backgroundColor: backgroundColor.toLowerCase()
		};
		return anonUser;
	},
	getRandomInt: getRandomInt
}