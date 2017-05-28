//See if a string is the name of a magic item and return the MagicItemList attribute
function ParseMagicItem(input) {
	MagicItemList
	
};

function FindMagicItems(ArrayNmbr) {
	CurrentMagicItems.improvements = [];
	CurrentMagicItems.skills = [];

	for (var i = 0; i < FieldNumbers.magicitems; i++) {
		if (i !== ArrayNmbr) {
			var MitemFld = What("Extra.Magic Item " + (i + 1));
			CurrentMagicItems.known[i] = MitemFld ? ParseMagicItem(MitemFld) : "";
		};
	};

	for (i = 0; i < CurrentMagicItems.known.length; i++) {
		if (CurrentMagicItems.known[i]) {
			var theMI = MagicItemList[CurrentMagicItems.known[i]];
			//only add the armor proficiencies to global variables if feats are not set to manual
			if (theMI.armor && What("Manual Feat Remember") !== "Yes") {
				CurrentArmour.proficiencies[theMI.name + " (magic item)"] = theMI.armor;
			};
			if (theMI.weapons && What("Manual Feat Remember") !== "Yes") {
				CurrentWeapons.proficiencies[theMI.name + " (magic item)"] = theMI.weapons;
			};
			if (theMI.improvements) {
				CurrentMagicItems.improvements.push(theMI.improvements);
			};
			if (theMI.skills) {
				CurrentMagicItems.skills.push(theMI.skills);
			};
		};
	};
};

function ApplyMagicItem() {
	
};

/* TO DO:
	- Magic Item improvements text in scores dialogue
	- Magic Item skills bonuses in skills tooltip
	- Change AddMagicItem and RemoveMagicItem functions
	- Add option to disable magic item automation
	- Make MagicItemList syntax file
*/