/*	-WHAT IS THIS?-
	The script featured here is made as an optional addition to "MPMB's Character Record Sheet" found at http://flapkan.com/mpmb/dmsguild
	You can add the content to the Character Sheet's functionality by adding the script below in the "Add Custom Script" dialogue.

	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, but you have to add the code in at once (i.e. copy all the code into a single, long file and copy that into the sheet).
	It is recommended to enter the code in a fresh sheet before adding any other information.
*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This script modifies the "Warlock" class to assist with spell casting abilities. This also makes the
				level 20 (full warlock) more attractive for players.

				Increases spell slots at level 5, and level 20 in addition to the normal spell slot increases.

				Increases # of invocations at level 3, and level 20 in addition to the normal # of invocation increases.

				Modifies the "Mystic Arcanum" feature to start at level 1, and a spell is gained every other level one
				for each spell level.

	Code by:	TheKrush
	Date:		2017-06-22 (sheet v12.994)
*/

// Warlock

ClassList["warlock"]["spellcastingTable"] = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 0, 0, 0, 0, 0, 0, 0, 0],
	[2, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 2, 0, 0, 0, 0, 0, 0, 0],
	[0, 2, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 3, 0, 0, 0, 0, 0, 0],
	[0, 0, 3, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 3, 0, 0, 0, 0, 0],
	[0, 0, 0, 3, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 3, 0, 0, 0, 0],
	[0, 0, 0, 0, 3, 0, 0, 0, 0],
	[0, 0, 0, 0, 4, 0, 0, 0, 0],
	[0, 0, 0, 0, 4, 0, 0, 0, 0],
	[0, 0, 0, 0, 4, 0, 0, 0, 0],
	[0, 0, 0, 0, 4, 0, 0, 0, 0],
	[0, 0, 0, 0, 4, 0, 0, 0, 0],
	[0, 0, 0, 0, 4, 0, 0, 0, 0],
	[0, 0, 0, 0, 5, 0, 0, 0, 0],
	[0, 0, 0, 0, 5, 0, 0, 0, 0],
	[0, 0, 0, 0, 5, 0, 0, 0, 0],
	[0, 0, 0, 0, 6, 0, 0, 0, 0],
]

ClassList["warlock"]["features"]["eldritch invocations"]["additional"] = [
	"",
	"2 invocations known",
	"3 invocations known", "3 invocations known",
	"4 invocations known", "4 invocations known",
	"5 invocations known", "5 invocations known",
	"6 invocations known", "6 invocations known", "6 invocations known",
	"7 invocations known", "7 invocations known", "7 invocations known",
	"8 invocations known", "8 invocations known", "8 invocations known",
	"9 invocations known", "9 invocations known",
	"10 invocations known"];

ClassList["warlock"]["features"]["mystic arcanum"] = {
	name : "Mystic Arcanum",
	source : ["P", 108],
	minlevel : 1,
	description : "\n   " + "I can choose one spell from the warlock spell list of each level mentioned above" + "\n   " + "I can cast these spells each once per long rest without needing to use a spell slot",
	additional : [
		"1st level", "1st level",
		"1st and 2nd levels", "1st and 2nd levels",
		"1st, 2nd, and 3rd levels", "1st, 2nd, and 3rd levels",
		"1st, 2nd, 3rd, and 4th levels", "1st, 2nd, 3rd, and 4th levels",
		"1st, 2nd, 3rd, 4th, and 5th levels", "1st, 2nd, 3rd, 4th, and 5th levels",
		"1st, 2nd, 3rd, 4th, 5th, and 6th levels", "1st, 2nd, 3rd, 4th, 5th, and 6th levels",
		"1st, 2nd, 3rd, 4th, 5th, 6th, and 7th levels", "1st, 2nd, 3rd, 4th, 5th, 6th, and 7th levels",
		"1st, 2nd, 3rd, 4th, 5th, 6th, 7th, and 8th levels", "1st, 2nd, 3rd, 4th, 5th, 6th, 7th, and 8th levels",
		"1st, 2nd, 3rd, 4th, 5th, 6th, 7th, 8th, and 9th levels", "1st, 2nd, 3rd, 4th, 5th, 6th, 7th, 8th, and 9th levels",
		"1st, 2nd, 3rd, 4th, 5th, 6th, 7th, 8th, and 9th levels", "1st, 2nd, 3rd, 4th, 5th, 6th, 7th, 8th, and 9th levels"],
	spellcastingBonus : {
		name : "Mystic Arcanum (1)",
		class : "warlock",
		level : [1, 1],
		oncelr : true
	},
	changeeval : "if (classes.known.warlock.level < 3) {delete CurrentSpells.warlock.bonus[\"mystic arcanum (2)\"]} else {if (!CurrentSpells.warlock.bonus[\"mystic arcanum (2)\"]) {CurrentSpells.warlock.bonus[\"mystic arcanum (2)\"] = {name : \"Mystic Arcanum (2)\", class : \"warlock\", level : [2, 2], oncelr : true}}};  if (classes.known.warlock.level < 5) {delete CurrentSpells.warlock.bonus[\"mystic arcanum (3)\"]} else {if (!CurrentSpells.warlock.bonus[\"mystic arcanum (3)\"]) {CurrentSpells.warlock.bonus[\"mystic arcanum (3)\"] = {name : \"Mystic Arcanum (3)\", class : \"warlock\", level : [3, 3], oncelr : true}}};  if (classes.known.warlock.level < 7) {delete CurrentSpells.warlock.bonus[\"mystic arcanum (4)\"]} else {if (!CurrentSpells.warlock.bonus[\"mystic arcanum (4)\"]) {CurrentSpells.warlock.bonus[\"mystic arcanum (4)\"] = {name : \"Mystic Arcanum (4)\", class : \"warlock\", level : [4, 4], oncelr : true}}};  if (classes.known.warlock.level < 9) {delete CurrentSpells.warlock.bonus[\"mystic arcanum (5)\"]} else {if (!CurrentSpells.warlock.bonus[\"mystic arcanum (5)\"]) {CurrentSpells.warlock.bonus[\"mystic arcanum (5)\"] = {name : \"Mystic Arcanum (5)\", class : \"warlock\", level : [5, 5], oncelr : true}}};  if (classes.known.warlock.level < 11) {delete CurrentSpells.warlock.bonus[\"mystic arcanum (6)\"]} else {if (!CurrentSpells.warlock.bonus[\"mystic arcanum (6)\"]) {CurrentSpells.warlock.bonus[\"mystic arcanum (6)\"] = {name : \"Mystic Arcanum (6)\", class : \"warlock\", level : [6, 6], oncelr : true}}};  if (classes.known.warlock.level < 13) {delete CurrentSpells.warlock.bonus[\"mystic arcanum (7)\"]} else {if (!CurrentSpells.warlock.bonus[\"mystic arcanum (7)\"]) {CurrentSpells.warlock.bonus[\"mystic arcanum (7)\"] = {name : \"Mystic Arcanum (7)\", class : \"warlock\", level : [7, 7], oncelr : true}}};  if (classes.known.warlock.level < 15) {delete CurrentSpells.warlock.bonus[\"mystic arcanum (8)\"]} else {if (!CurrentSpells.warlock.bonus[\"mystic arcanum (8)\"]) {CurrentSpells.warlock.bonus[\"mystic arcanum (8)\"] = {name : \"Mystic Arcanum (8)\", class : \"warlock\", level : [8, 8], oncelr : true}}};  if (classes.known.warlock.level < 17) {delete CurrentSpells.warlock.bonus[\"mystic arcanum (9)\"]} else {if (!CurrentSpells.warlock.bonus[\"mystic arcanum (9)\"]) {CurrentSpells.warlock.bonus[\"mystic arcanum (9)\"] = {name : \"Mystic Arcanum (9)\", class : \"warlock\", level : [9, 9], oncelr : true}}}"
};
