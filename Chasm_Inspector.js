// Chasm Inspector
	// The Inspector provides information for game elements that the user mouses over.
	// To add a new Inspector panel, do the following:
	//
	// 1. Add Inspector Id for this panel				[_INSPECTOR_ID]
	// 2. Register trigger event for this panel			[registerInspectorEvents]
	// 3. Add panel generation to inspector function	[showInspector]

class _INSPECTOR_ID {
	none 										= 0x0000;	// 0x0000 Clear inspector

	offset_currency								= 0x0100;	// 0x01xx Start currency section
	currency_particles							= cid.currency_particles					+ this.offset_currency;
	currency_strands							= cid.currency_strands						+ this.offset_currency;
	currency_spirit								= cid.currency_spirit						+ this.offset_currency;
	currency_soul								= cid.currency_soul							+ this.offset_currency;
	currency_capital							= cid.currency_capital						+ this.offset_currency;
	currency_goo								= cid.currency_goo							+ this.offset_currency;
	currency_core								= cid.currency_core							+ this.offset_currency;
	currency_bugs								= cid.currency_bugs							+ this.offset_currency;
	currency_singularity						= cid.currency_singularity					+ this.offset_currency;
	currency_challenge_1						= cid.currency_challenge_1					+ this.offset_currency;
	currency_challenge_2						= cid.currency_challenge_2					+ this.offset_currency;
	currency_challenge_3						= cid.currency_challenge_3					+ this.offset_currency;
	currency_challenge_4						= cid.currency_challenge_4					+ this.offset_currency;
	currency_challenge_5						= cid.currency_challenge_5					+ this.offset_currency;
	currency_challenge_6						= cid.currency_challenge_6					+ this.offset_currency;
	currency_challenge_7						= cid.currency_challenge_7					+ this.offset_currency;
	currency_challenge_8						= cid.currency_challenge_8					+ this.offset_currency;
	currency_challenge_9						= cid.currency_challenge_9					+ this.offset_currency;
	currency_mass								= cid.currency_mass							+ this.offset_currency;
	currency_workers							= cid.currency_workers						+ this.offset_currency;
	currency_machinery							= cid.currency_machinery					+ this.offset_currency;

	offset_elements								= 0x0600;	// 0x06xx Start elements section
	element_earth 								= eid.element_earth							+ this.offset_elements;
	element_stone 								= eid.element_stone							+ this.offset_elements;
	element_coal								= eid.element_coal							+ this.offset_elements;
	element_copper								= eid.element_copper						+ this.offset_elements;
	element_iron								= eid.element_iron							+ this.offset_elements;
	element_lead								= eid.element_lead							+ this.offset_elements;
	element_gold								= eid.element_gold							+ this.offset_elements;
	element_fossil								= eid.element_fossil						+ this.offset_elements;
	element_emerald								= eid.element_emerald						+ this.offset_elements;
	element_sapphire							= eid.element_sapphire						+ this.offset_elements;
	element_ruby								= eid.element_ruby							+ this.offset_elements;
	element_diamond								= eid.element_diamond						+ this.offset_elements;
	element_magma								= eid.element_magma							+ this.offset_elements;
	element_water 								= eid.element_water							+ this.offset_elements;
	element_slime 								= eid.element_slime							+ this.offset_elements;
	element_oil 								= eid.element_oil							+ this.offset_elements;
	element_helium 								= eid.element_helium						+ this.offset_elements;
	element_fish_1								= eid.element_fish_1						+ this.offset_elements;
	element_fish_2								= eid.element_fish_2						+ this.offset_elements;
	element_fish_3								= eid.element_fish_3						+ this.offset_elements;

	offset_upgrades								= 0xa100;	// 0xa1xx Start upgrade section
	upgrade_earth_density_1 					= uid.upgrade_earth_density_1				+ this.offset_upgrades;
	upgrade_earth_density_2						= uid.upgrade_earth_density_2				+ this.offset_upgrades;
	upgrade_earth_density_3						= uid.upgrade_earth_density_3				+ this.offset_upgrades;
	upgrade_earth_density_4						= uid.upgrade_earth_density_4				+ this.offset_upgrades;
	upgrade_earth_density_5						= uid.upgrade_earth_density_5				+ this.offset_upgrades;
	upgrade_earth_value_1						= uid.upgrade_earth_value_1					+ this.offset_upgrades;
	upgrade_earth_value_2						= uid.upgrade_earth_value_2					+ this.offset_upgrades;
	upgrade_earth_value_3						= uid.upgrade_earth_value_3					+ this.offset_upgrades;
	upgrade_earth_value_4						= uid.upgrade_earth_value_4					+ this.offset_upgrades;
	upgrade_earth_value_5						= uid.upgrade_earth_value_5					+ this.offset_upgrades;
	upgrade_earth_value_6						= uid.upgrade_earth_value_6					+ this.offset_upgrades;
	upgrade_earth_value_7						= uid.upgrade_earth_value_7					+ this.offset_upgrades;
	upgrade_earth_value_8						= uid.upgrade_earth_value_8					+ this.offset_upgrades;
	upgrade_earth_value_9						= uid.upgrade_earth_value_9					+ this.offset_upgrades;
	upgrade_earth_value_10						= uid.upgrade_earth_value_10				+ this.offset_upgrades;
	upgrade_earth_value_11						= uid.upgrade_earth_value_11				+ this.offset_upgrades;
	upgrade_earth_value_12						= uid.upgrade_earth_value_12				+ this.offset_upgrades;
	upgrade_earth_value_13						= uid.upgrade_earth_value_13				+ this.offset_upgrades;
	upgrade_earth_chance_1						= uid.upgrade_earth_chance_1				+ this.offset_upgrades;
	upgrade_earth_chance_2						= uid.upgrade_earth_chance_2				+ this.offset_upgrades;
	upgrade_earth_chance_3						= uid.upgrade_earth_chance_3				+ this.offset_upgrades;
	upgrade_earth_chance_4						= uid.upgrade_earth_chance_4				+ this.offset_upgrades;
	upgrade_earth_chance_5						= uid.upgrade_earth_chance_5				+ this.offset_upgrades;
	upgrade_earth_gather_speed_1				= uid.upgrade_earth_gather_speed_1			+ this.offset_upgrades;
	upgrade_earth_gather_speed_2				= uid.upgrade_earth_gather_speed_2			+ this.offset_upgrades;
	upgrade_earth_drop_speed_1					= uid.upgrade_earth_drop_speed_1			+ this.offset_upgrades;
	upgrade_earth_drop_speed_2					= uid.upgrade_earth_drop_speed_2			+ this.offset_upgrades;
	upgrade_earth_metals_1						= uid.upgrade_earth_metals_1				+ this.offset_upgrades;
	upgrade_earth_depth_1						= uid.upgrade_earth_depth_1					+ this.offset_upgrades;
	upgrade_earth_depth_2						= uid.upgrade_earth_depth_2					+ this.offset_upgrades;
	upgrade_earth_depth_3						= uid.upgrade_earth_depth_3					+ this.offset_upgrades;
	upgrade_earth_depth_4						= uid.upgrade_earth_depth_4					+ this.offset_upgrades;
	upgrade_earth_depth_5						= uid.upgrade_earth_depth_5					+ this.offset_upgrades;
	upgrade_earth_depth_6						= uid.upgrade_earth_depth_6					+ this.offset_upgrades;
	upgrade_earth_depth_7						= uid.upgrade_earth_depth_7					+ this.offset_upgrades;
	upgrade_mining_rig_1						= uid.upgrade_mining_rig_1					+ this.offset_upgrades;
	upgrade_mining_rig_2						= uid.upgrade_mining_rig_2					+ this.offset_upgrades;
	upgrade_mining_rig_3						= uid.upgrade_mining_rig_3					+ this.offset_upgrades;
	upgrade_mining_rig_4						= uid.upgrade_mining_rig_4					+ this.offset_upgrades;
	upgrade_mining_rig_5						= uid.upgrade_mining_rig_5					+ this.offset_upgrades;
	upgrade_water_storage						= uid.upgrade_water_storage					+ this.offset_upgrades;
	upgrade_water_bait_1						= uid.upgrade_water_bait_1					+ this.offset_upgrades;
	upgrade_water_survey_1						= uid.upgrade_water_survey_1				+ this.offset_upgrades;
	upgrade_water_value_1						= uid.upgrade_water_value_1					+ this.offset_upgrades;
	upgrade_water_value_2						= uid.upgrade_water_value_2					+ this.offset_upgrades;
	upgrade_water_value_3						= uid.upgrade_water_value_3					+ this.offset_upgrades;
	upgrade_water_value_4						= uid.upgrade_water_value_4					+ this.offset_upgrades;
	upgrade_water_value_5						= uid.upgrade_water_value_5					+ this.offset_upgrades;
	upgrade_water_value_6						= uid.upgrade_water_value_6					+ this.offset_upgrades;
	upgrade_water_value_7						= uid.upgrade_water_value_7					+ this.offset_upgrades;
	upgrade_water_value_8						= uid.upgrade_water_value_8					+ this.offset_upgrades;
	upgrade_water_gather_speed_1				= uid.upgrade_water_gather_speed_1			+ this.offset_upgrades;
	upgrade_water_depth_1						= uid.upgrade_water_depth_1					+ this.offset_upgrades;
	upgrade_water_depth_2						= uid.upgrade_water_depth_2					+ this.offset_upgrades;
	upgrade_water_depth_3						= uid.upgrade_water_depth_3					+ this.offset_upgrades;
	upgrade_water_depth_4						= uid.upgrade_water_depth_4					+ this.offset_upgrades;
	upgrade_water_depth_5						= uid.upgrade_water_depth_5					+ this.offset_upgrades;
	upgrade_water_depth_6						= uid.upgrade_water_depth_6					+ this.offset_upgrades;
	upgrade_water_depth_7						= uid.upgrade_water_depth_7					+ this.offset_upgrades;
	upgrade_workers_1							= uid.upgrade_workers_1						+ this.offset_upgrades;
	upgrade_workers_2							= uid.upgrade_workers_2						+ this.offset_upgrades;
	upgrade_workers_3							= uid.upgrade_workers_3						+ this.offset_upgrades;
	upgrade_workers_4							= uid.upgrade_workers_4						+ this.offset_upgrades;
	upgrade_workers_5							= uid.upgrade_workers_5						+ this.offset_upgrades;
	upgrade_workers_6							= uid.upgrade_workers_6						+ this.offset_upgrades;
	upgrade_workers_7							= uid.upgrade_workers_7						+ this.offset_upgrades;
	upgrade_workers_8							= uid.upgrade_workers_8						+ this.offset_upgrades;
	upgrade_workers_9							= uid.upgrade_workers_9						+ this.offset_upgrades;
	upgrade_workers_10							= uid.upgrade_workers_10					+ this.offset_upgrades;
	upgrade_workers_11							= uid.upgrade_workers_11					+ this.offset_upgrades;
	upgrade_workers_12							= uid.upgrade_workers_12					+ this.offset_upgrades;
	upgrade_challenge_ecocide					= uid.upgrade_challenge_ecocide				+ this.offset_upgrades;
	upgrade_singularity_workers_1				= uid.upgrade_singularity_workers_1			+ this.offset_upgrades;
	upgrade_singularity_workers_2				= uid.upgrade_singularity_workers_2			+ this.offset_upgrades;
	upgrade_singularity_workers_3				= uid.upgrade_singularity_workers_3			+ this.offset_upgrades;
	upgrade_singularity_workers_4				= uid.upgrade_singularity_workers_4			+ this.offset_upgrades;
	upgrade_singularity_workers_5				= uid.upgrade_singularity_workers_5			+ this.offset_upgrades;
	upgrade_singularity_workers_6				= uid.upgrade_singularity_workers_6			+ this.offset_upgrades;
	upgrade_singularity_workers_7				= uid.upgrade_singularity_workers_7			+ this.offset_upgrades;
	upgrade_singularity_workers_8				= uid.upgrade_singularity_workers_8			+ this.offset_upgrades;
	upgrade_singularity_earth_value_1			= uid.upgrade_singularity_earth_value_1		+ this.offset_upgrades;
	upgrade_singularity_earth_value_2			= uid.upgrade_singularity_earth_value_2		+ this.offset_upgrades;
	upgrade_singularity_survey_1				= uid.upgrade_singularity_survey_1			+ this.offset_upgrades;
	upgrade_singularity_survey_2				= uid.upgrade_singularity_survey_2			+ this.offset_upgrades;
	upgrade_singularity_mining_rig_1			= uid.upgrade_singularity_mining_rig_1		+ this.offset_upgrades;
	upgrade_singularity_mining_rig_2			= uid.upgrade_singularity_mining_rig_2		+ this.offset_upgrades;
	upgrade_singularity_mining_rig_3			= uid.upgrade_singularity_mining_rig_3		+ this.offset_upgrades;
	upgrade_singularity_ascend_1				= uid.upgrade_singularity_ascend_1			+ this.offset_upgrades;

	offset_achievements							= 0xd100;	// 0xd1xx Start achievement section
	achievement_babys_first_block 				= aid.achievement_babys_first_block 		+ this.offset_achievements;
	achievement_reality_sprang_a_leak 			= aid.achievement_reality_sprang_a_leak 	+ this.offset_achievements;
	achievement_nothing_to_worry_about			= aid.achievement_nothing_to_worry_about 	+ this.offset_achievements;
	achievement_minor_case_of_wormhole			= aid.achievement_minor_case_of_wormhole 	+ this.offset_achievements;
	achievement_eye_feel_extremely_unwell		= aid.achievement_eye_feel_extremely_unwell + this.offset_achievements;
	achievement_unknown			 				= aid.achievement_count 					+ this.offset_achievements;

} var iid = new _INSPECTOR_ID();

function registerInspectorEvents() {
	$(".currency_particles").each(function(){	$(this).mouseenter(function(){showInspector(iid.currency_particles);});});
	$(".currency_strands").each(function(){		$(this).mouseenter(function(){showInspector(iid.currency_strands);});});
	$(".currency_spirit").each(function(){		$(this).mouseenter(function(){showInspector(iid.currency_spirit);});});
	$(".currency_soul").each(function(){		$(this).mouseenter(function(){showInspector(iid.currency_soul);});});
	$(".currency_capital").each(function(){		$(this).mouseenter(function(){showInspector(iid.currency_capital);});});
	$(".currency_goo").each(function(){			$(this).mouseenter(function(){showInspector(iid.currency_goo);});});
	$(".currency_core").each(function(){		$(this).mouseenter(function(){showInspector(iid.currency_core);});});
	$(".currency_bugs").each(function(){		$(this).mouseenter(function(){showInspector(iid.currency_bugs);});});
	$(".currency_singularity").each(function(){	$(this).mouseenter(function(){showInspector(iid.currency_singularity);});});
	$(".currency_challenge_1").each(function(){	$(this).mouseenter(function(){showInspector(iid.currency_challenge_1);});});
	$(".currency_challenge_2").each(function(){	$(this).mouseenter(function(){showInspector(iid.currency_challenge_2);});});
	$(".currency_challenge_3").each(function(){	$(this).mouseenter(function(){showInspector(iid.currency_challenge_3);});});
	$(".currency_challenge_4").each(function(){	$(this).mouseenter(function(){showInspector(iid.currency_challenge_4);});});
	$(".currency_challenge_5").each(function(){	$(this).mouseenter(function(){showInspector(iid.currency_challenge_5);});});
	$(".currency_challenge_6").each(function(){	$(this).mouseenter(function(){showInspector(iid.currency_challenge_6);});});
	$(".currency_challenge_7").each(function(){	$(this).mouseenter(function(){showInspector(iid.currency_challenge_7);});});
	$(".currency_challenge_8").each(function(){	$(this).mouseenter(function(){showInspector(iid.currency_challenge_8);});});
	$(".currency_challenge_9").each(function(){	$(this).mouseenter(function(){showInspector(iid.currency_challenge_9);});});
	$(".currency_mass").each(function(){		$(this).mouseenter(function(){showInspector(iid.currency_mass);});});
	$(".currency_workers").each(function(){		$(this).mouseenter(function(){showInspector(iid.currency_workers);});});
	$(".currency_machinery").each(function(){	$(this).mouseenter(function(){showInspector(iid.currency_machinery);});});

	$(".element_earth_inspector").each(function(){		$(this).mouseenter(function(){showInspector(iid.element_earth);});});
	$(".element_stone_inspector").each(function(){		$(this).mouseenter(function(){showInspector(iid.element_stone);});});
	$(".element_coal_inspector").each(function(){		$(this).mouseenter(function(){showInspector(iid.element_coal);});});
	$(".element_copper_inspector").each(function(){		$(this).mouseenter(function(){showInspector(iid.element_copper);});});
	$(".element_iron_inspector").each(function(){		$(this).mouseenter(function(){showInspector(iid.element_iron);});});
	$(".element_lead_inspector").each(function(){		$(this).mouseenter(function(){showInspector(iid.element_lead);});});
	$(".element_gold_inspector").each(function(){		$(this).mouseenter(function(){showInspector(iid.element_gold);});});
	$(".element_fossil_inspector").each(function(){		$(this).mouseenter(function(){showInspector(iid.element_fossil);});});
	$(".element_emerald_inspector").each(function(){	$(this).mouseenter(function(){showInspector(iid.element_emerald);});});
	$(".element_sapphire_inspector").each(function(){	$(this).mouseenter(function(){showInspector(iid.element_sapphire);});});
	$(".element_ruby_inspector").each(function(){		$(this).mouseenter(function(){showInspector(iid.element_ruby);});});
	$(".element_diamond_inspector").each(function(){	$(this).mouseenter(function(){showInspector(iid.element_diamond);});});
	$(".element_magma_inspector").each(function(){		$(this).mouseenter(function(){showInspector(iid.element_magma);});});
	$(".element_water_inspector").each(function(){		$(this).mouseenter(function(){showInspector(iid.element_water);});});
	$(".element_slime_inspector").each(function(){		$(this).mouseenter(function(){showInspector(iid.element_slime);});});
	$(".element_oil_inspector").each(function(){		$(this).mouseenter(function(){showInspector(iid.element_oil);});});
	$(".element_helium_inspector").each(function(){		$(this).mouseenter(function(){showInspector(iid.element_helium);});});
	$(".element_fish_1_inspector").each(function(){		$(this).mouseenter(function(){showInspector(iid.element_fish_1);});});
	$(".element_fish_2_inspector").each(function(){		$(this).mouseenter(function(){showInspector(iid.element_fish_2);});});
	$(".element_fish_3_inspector").each(function(){		$(this).mouseenter(function(){showInspector(iid.element_fish_3);});});

	$("#achievement_babys_first_block")			.mouseenter(function(){showInspector(iid.achievement_babys_first_block);});
	$("#achievement_reality_sprang_a_leak")		.mouseenter(function(){showInspector(iid.achievement_reality_sprang_a_leak);});
	$("#achievement_nothing_to_worry_about")	.mouseenter(function(){showInspector(iid.achievement_nothing_to_worry_about);});
	$("#achievement_minor_case_of_wormhole")	.mouseenter(function(){showInspector(iid.achievement_minor_case_of_wormhole);});
	$("#achievement_eye_feel_extremely_unwell")	.mouseenter(function(){showInspector(iid.achievement_eye_feel_extremely_unwell);});
}

function setInspectorTitle(html, redraw) {
	if (redraw) {
		$("#inspector_title").html(html);
	}
}

function setInspectorCost(html, redraw) {
	if (redraw) {
		$("#inspector_cost").html(html);
		if (html == "") {
			$("#inspector_cost").css("display", "none");
		} else {
			$("#inspector_cost").css("display", "flex");
		}
	}
}

function setInspectorText(html, redraw) {
	if (redraw) {
		$("#inspector_text").html(html);
	}
}

function setInspectorDivider(display, redraw) {
	if (redraw) {
		if (display == true) {
			$("#inspector_divider").css("display", "block");
		} else {
			$("#inspector_divider").css("display", "none");
		}
	}
}

function setInspectorSubtext(html, redraw) {
	if (redraw) {
		$("#inspector_subtext").html(html);
	}
}

function strikethrough(text) {
	return "<span style = 'text-decoration: line-through; color: lightSlateGray;'>" + text + "</span>";
}

var flexbreak = "<div class='flexbreak'></div>";
var elementbuffer = "<div class='element_sample_right_buffer'></div>";

var current_inspector_id = iid.none; // Saved id of current inspector panel. Used to redraw inspector.

function showInspector(id) {
	var redraw_inspector = false;
	if (id != current_inspector_id) {
		let selector = $("#inspector_content");
		selector.stop().fadeTo(0, 0).fadeTo(300, 1);
		redraw_inspector = true;
	}
	switch(id) {
		// Currency
		case iid.currency_particles:
			setInspectorTitle(chasm_currency[cid.currency_particles].inspector_symbol + "Void Particles", redraw_inspector);
			setInspectorCost("", redraw_inspector);
			setInspectorText("When matter is dropped into the Chasm it releases small clouds of nothing. Not nothing... Something? Something that is nothing.", redraw_inspector);
			setInspectorDivider(false, redraw_inspector);
			setInspectorSubtext("", redraw_inspector);
			break;
		case iid.currency_strands:
			setInspectorTitle(chasm_currency[cid.currency_strands].inspector_symbol + "Gravity Strands", redraw_inspector);
			setInspectorCost("", redraw_inspector);
			setInspectorText("When dense matter is dropped into the Chasm it releases gossamer strands of gravity. Our researchers say gravity has no carrying particle, but here it is.", redraw_inspector);
			setInspectorDivider(false, redraw_inspector);
			setInspectorSubtext("", redraw_inspector);
			break;
		case iid.currency_spirit:
			setInspectorTitle(chasm_currency[cid.currency_spirit].inspector_symbol + "Spirit Sand", redraw_inspector);
			setInspectorCost("", redraw_inspector);
			setInspectorText("When living matter is dropped into the Chasm it sprays grains of silver-green sand. Our researchers are convinced this sand has something to do with a metaphysical 'life-force'.", redraw_inspector);
			setInspectorDivider(false, redraw_inspector);
			setInspectorSubtext("", redraw_inspector);
			break;
		case iid.currency_soul:
			setInspectorTitle(chasm_currency[cid.currency_soul].inspector_symbol + "Pitfire", redraw_inspector);
			setInspectorCost("", redraw_inspector);
			setInspectorText("When energy-rich matter is dropped into the Chasm it belches sulpherous clouds of pitfire. Our researchers are using this as a super-dense fuel, and our daredevils are jumping over it for sick motorcycle stunts.", redraw_inspector);
			setInspectorDivider(false, redraw_inspector);
			setInspectorSubtext("", redraw_inspector);
			break;
		case iid.currency_capital:
			setInspectorTitle(chasm_currency[cid.currency_capital].inspector_symbol + "Anticapital", redraw_inspector);
			setInspectorCost("", redraw_inspector);
			setInspectorText("\"We, who pay dearly for every breath of pure, fresh air, must guard against the tendency to fetter the future. If we succeed in clearing the soil from the rubbish of the past and present, we will leave to posterity the greatest and safest heritages of all ages.\"<br><br>Our researchers seem to be feeling a bit revolutionary. You should probably put this somewhere out of the way before they seize it and establish a democratic mode of production.", redraw_inspector);
			setInspectorDivider(false, redraw_inspector);
			setInspectorSubtext("", redraw_inspector);
			break;
		case iid.currency_goo:
			setInspectorTitle(chasm_currency[cid.currency_goo].inspector_symbol + "Nanocellular Goo", redraw_inspector);
			setInspectorCost("", redraw_inspector);
			setInspectorText("When mutant biomass is dropped into the Chasm it froths with a strange orange goo. This goo seems to behave like a biological nanomachine, and is capable of amazing feats when properly trained. Our researchers are giving the goo treats and teaching it how to play fetch.", redraw_inspector);
			setInspectorDivider(false, redraw_inspector);
			setInspectorSubtext("", redraw_inspector);
			break;
		case iid.currency_core:
			setInspectorTitle(chasm_currency[cid.currency_core].inspector_symbol + "Mythical Cores", redraw_inspector);
			setInspectorCost("", redraw_inspector);
			setInspectorText("When rare cryptids are dropped into the Chasm it bellows with a deep, resonant hum. Once the hum fades, you can find large, glassy orbs dotting the rim of the Chasm. According to our researchers, they seem to be made from embodied belief. It may be possible to use them to influence the world in strange ways.", redraw_inspector);
			setInspectorDivider(false, redraw_inspector);
			setInspectorSubtext("", redraw_inspector);
			break;
		case iid.currency_bugs:
			setInspectorTitle(chasm_currency[cid.currency_bugs].inspector_symbol + "Velocity Beetles", redraw_inspector);
			setInspectorCost("", redraw_inspector);
			setInspectorText("Okay, this one sucks. When you drop agile creatures into the Chasm tiny silver-blue beetles crawl out at a blinding speed. Your researchers have managed to catch a few, and say they can be ground into a paste and converted directly into physical momentum. They remind you of horrible, multi-legged video game hedgehogs.", redraw_inspector);
			setInspectorDivider(false, redraw_inspector);
			setInspectorSubtext("", redraw_inspector);
			break;
		case iid.currency_singularity:
			setInspectorTitle(chasm_currency[cid.currency_singularity].inspector_symbol + "Singularity Marbles", redraw_inspector);
			setInspectorCost("", redraw_inspector);
			setInspectorText("You found these at the bottom of the Chasm. Each marble contains a small, stabilized black hole. They will allow you to build permanent structures in the Chasm, in the space between worlds.<br><br>You feel compelled to <a href = 'https://youtu.be/RG6EOci0suI?si=K4i4A9m90IPuUOnC' target = '_blank'>put the marbles in your mouth</a>.", redraw_inspector);
			setInspectorDivider(false, redraw_inspector);
			setInspectorSubtext("", redraw_inspector);
			break;
		case iid.currency_challenge_1:
			setInspectorTitle(chasm_currency[cid.currency_challenge_1].inspector_symbol + "Ecocide Tokens", redraw_inspector);
			setInspectorCost("", redraw_inspector);
			setInspectorText("A token generated by the Chasm as a reward for not destroying the environment. Proof of your commitment to the planet.", redraw_inspector);
			setInspectorDivider(false, redraw_inspector);
			setInspectorSubtext("", redraw_inspector);
			break;
		case iid.currency_challenge_2:
			setInspectorTitle(chasm_currency[cid.currency_challenge_2].inspector_symbol + "Challenge Token 2", redraw_inspector);
			setInspectorCost("", redraw_inspector);
			setInspectorText("", redraw_inspector);
			setInspectorDivider(false, redraw_inspector);
			setInspectorSubtext("", redraw_inspector);
			break;
		case iid.currency_challenge_3:
			setInspectorTitle(chasm_currency[cid.currency_challenge_3].inspector_symbol + "Challenge Token 3", redraw_inspector);
			setInspectorCost("", redraw_inspector);
			setInspectorText("", redraw_inspector);
			setInspectorDivider(false, redraw_inspector);
			setInspectorSubtext("", redraw_inspector);
			break;
		case iid.currency_challenge_4:
			setInspectorTitle(chasm_currency[cid.currency_challenge_4].inspector_symbol + "Challenge Token 4", redraw_inspector);
			setInspectorCost("", redraw_inspector);
			setInspectorText("", redraw_inspector);
			setInspectorDivider(false, redraw_inspector);
			setInspectorSubtext("", redraw_inspector);
			break;
		case iid.currency_challenge_5:
			setInspectorTitle(chasm_currency[cid.currency_challenge_5].inspector_symbol + "Challenge Token 5", redraw_inspector);
			setInspectorCost("", redraw_inspector);
			setInspectorText("", redraw_inspector);
			setInspectorDivider(false, redraw_inspector);
			setInspectorSubtext("", redraw_inspector);
			break;
		case iid.currency_challenge_6:
			setInspectorTitle(chasm_currency[cid.currency_challenge_6].inspector_symbol + "Challenge Token 6", redraw_inspector);
			setInspectorCost("", redraw_inspector);
			setInspectorText("", redraw_inspector);
			setInspectorDivider(false, redraw_inspector);
			setInspectorSubtext("", redraw_inspector);
			break;
		case iid.currency_challenge_7:
			setInspectorTitle(chasm_currency[cid.currency_challenge_7].inspector_symbol + "Challenge Token 7", redraw_inspector);
			setInspectorCost("", redraw_inspector);
			setInspectorText("", redraw_inspector);
			setInspectorDivider(false, redraw_inspector);
			setInspectorSubtext("", redraw_inspector);
			break;
		case iid.currency_challenge_8:
			setInspectorTitle(chasm_currency[cid.currency_challenge_8].inspector_symbol + "Challenge Token 8", redraw_inspector);
			setInspectorCost("", redraw_inspector);
			setInspectorText("", redraw_inspector);
			setInspectorDivider(false, redraw_inspector);
			setInspectorSubtext("", redraw_inspector);
			break;
		case iid.currency_challenge_9:
			setInspectorTitle(chasm_currency[cid.currency_challenge_9].inspector_symbol + "Challenge Token 9", redraw_inspector);
			setInspectorCost("", redraw_inspector);
			setInspectorText("", redraw_inspector);
			setInspectorDivider(false, redraw_inspector);
			setInspectorSubtext("", redraw_inspector);
			break;
		case iid.currency_mass:
			setInspectorTitle(chasm_currency[cid.currency_mass].inspector_symbol + "Total Mass", redraw_inspector);
			setInspectorCost("", redraw_inspector);
			setInspectorText("You have kept a meticulous count of every bit of mass that has been dropped in the Chasm. How much more until it is satisfied?", redraw_inspector);
			setInspectorDivider(false, redraw_inspector);
			setInspectorSubtext("", redraw_inspector);
			break;
		case iid.currency_workers:
			setInspectorTitle(chasm_currency[cid.currency_workers].inspector_symbol + "Workers", redraw_inspector);
			setInspectorCost("", redraw_inspector);
			if (chasm_currency[cid.currency_workers].resource.alltime.lte(1)) {
				setInspectorText("Labor makes the world go round.<br>Right now it's just you.", redraw_inspector);
			} else {
				setInspectorText("Labor makes the world go round.<br>The crew is busy filling up the Chasm.", redraw_inspector);
			}
			setInspectorDivider(false, redraw_inspector);
			setInspectorSubtext("", redraw_inspector);
			break;
		case iid.currency_machinery:
			setInspectorTitle(chasm_currency[cid.currency_machinery].inspector_symbol + "Heavy Machinery", redraw_inspector);
			setInspectorCost("", redraw_inspector);
			setInspectorText("When you think about it, forklifts and front loaders are basically the same thing. And you are basically certified to operate a forklift. These things should help you with industrial construction.", redraw_inspector);
			setInspectorDivider(false, redraw_inspector);
			setInspectorSubtext("", redraw_inspector);
			break;

		// Elements
		case iid.element_earth:
			{
				let element_count = new Array(eid.element_count);
				for (let i = 0; i < eid.element_count; i++) {
					element_count[i] = 0;
				}
				element_count[eid.element_earth]++;
				setInspectorTitle(ElementSample(eid.element_earth) + "<div style = 'width: 6px;'></div>Dirt", redraw_inspector);
				setInspectorCost(stringifyValue(elementValue(element_count)), true);
				setInspectorText("The most readily available resource near the mouth of the Chasm. It doesn't seem to do anything special, but you sure can shovel a lot of it.", redraw_inspector);
				setInspectorDivider(true, redraw_inspector);
				setInspectorSubtext("Source: Shallow earth gathering", redraw_inspector);
			}
			break;
		case iid.element_stone:
			{
				let element_count = new Array(eid.element_count);
				for (let i = 0; i < eid.element_count; i++) {
					element_count[i] = 0;
				}
				element_count[eid.element_stone]++;
				setInspectorTitle(ElementSample(eid.element_stone) + "<div style = 'width: 6px;'></div>Stone", redraw_inspector);
				setInspectorCost(stringifyValue(elementValue(element_count)), true);
				setInspectorText("", redraw_inspector);
				setInspectorDivider(true, redraw_inspector);
				setInspectorSubtext("Source: Deep earth gathering", redraw_inspector);
			}
			break;
		case iid.element_coal:
			{
				let element_count = new Array(eid.element_count);
				for (let i = 0; i < eid.element_count; i++) {
					element_count[i] = 0;
				}
				element_count[eid.element_coal]++;
				setInspectorTitle(ElementSample(eid.element_coal) + "<div style = 'width: 6px;'></div>Coal", redraw_inspector);
				setInspectorCost(stringifyValue(elementValue(element_count)), true);
				setInspectorText("", redraw_inspector);
				setInspectorDivider(true, redraw_inspector);
				setInspectorSubtext("Source: Deep earth gathering", redraw_inspector);
			}
			break;
		case iid.element_copper:
			{
				let element_count = new Array(eid.element_count);
				for (let i = 0; i < eid.element_count; i++) {
					element_count[i] = 0;
				}
				element_count[eid.element_copper]++;
				setInspectorTitle(ElementSample(eid.element_copper) + "<div style = 'width: 6px;'></div>Copper", redraw_inspector);
				setInspectorCost(stringifyValue(elementValue(element_count)), true);
				setInspectorText("", redraw_inspector);
				setInspectorDivider(true, redraw_inspector);
				setInspectorSubtext("Source: Deep earth gathering", redraw_inspector);
			}
			break;
		case iid.element_iron:
			{
				let element_count = new Array(eid.element_count);
				for (let i = 0; i < eid.element_count; i++) {
					element_count[i] = 0;
				}
				element_count[eid.element_iron]++;
				setInspectorTitle(ElementSample(eid.element_iron) + "<div style = 'width: 6px;'></div>Iron", redraw_inspector);
				setInspectorCost(stringifyValue(elementValue(element_count)), true);
				setInspectorText("", redraw_inspector);
				setInspectorDivider(true, redraw_inspector);
				setInspectorSubtext("Source: Deep earth gathering", redraw_inspector);
			}
			break;
		case iid.element_lead:
			{
				let element_count = new Array(eid.element_count);
				for (let i = 0; i < eid.element_count; i++) {
					element_count[i] = 0;
				}
				element_count[eid.element_lead]++;
				setInspectorTitle(ElementSample(eid.element_lead) + "<div style = 'width: 6px;'></div>Lead", redraw_inspector);
				setInspectorCost(stringifyValue(elementValue(element_count)), true);
				setInspectorText("", redraw_inspector);
				setInspectorDivider(true, redraw_inspector);
				setInspectorSubtext("Source: Deep earth gathering", redraw_inspector);
			}
			break;
		case iid.element_gold:
			{
				let element_count = new Array(eid.element_count);
				for (let i = 0; i < eid.element_count; i++) {
					element_count[i] = 0;
				}
				element_count[eid.element_gold]++;
				setInspectorTitle(ElementSample(eid.element_gold) + "<div style = 'width: 6px;'></div>Gold", redraw_inspector);
				setInspectorCost(stringifyValue(elementValue(element_count)), true);
				setInspectorText("", redraw_inspector);
				setInspectorDivider(true, redraw_inspector);
				setInspectorSubtext("Source: Deep earth gathering", redraw_inspector);
			}
			break;
		case iid.element_fossil:
			{
				let element_count = new Array(eid.element_count);
				for (let i = 0; i < eid.element_count; i++) {
					element_count[i] = 0;
				}
				element_count[eid.element_fossil]++;
				setInspectorTitle(ElementSample(eid.element_fossil) + "<div style = 'width: 6px;'></div>Fossil", redraw_inspector);
				setInspectorCost(stringifyValue(elementValue(element_count)), true);
				setInspectorText("", redraw_inspector);
				setInspectorDivider(true, redraw_inspector);
				setInspectorSubtext("Source: Deep earth gathering", redraw_inspector);
			}
			break;
		case iid.element_emerald:
			{
				let element_count = new Array(eid.element_count);
				for (let i = 0; i < eid.element_count; i++) {
					element_count[i] = 0;
				}
				element_count[eid.element_emerald]++;
				setInspectorTitle(ElementSample(eid.element_emerald) + "<div style = 'width: 6px;'></div>Emerald", redraw_inspector);
				setInspectorCost(stringifyValue(elementValue(element_count)), true);
				setInspectorText("", redraw_inspector);
				setInspectorDivider(true, redraw_inspector);
				setInspectorSubtext("Source: Deep earth gathering", redraw_inspector);
			}
			break;
		case iid.element_sapphire:
			{
				let element_count = new Array(eid.element_count);
				for (let i = 0; i < eid.element_count; i++) {
					element_count[i] = 0;
				}
				element_count[eid.element_sapphire]++;
				setInspectorTitle(ElementSample(eid.element_sapphire) + "<div style = 'width: 6px;'></div>Sapphire", redraw_inspector);
				setInspectorCost(stringifyValue(elementValue(element_count)), true);
				setInspectorText("", redraw_inspector);
				setInspectorDivider(true, redraw_inspector);
				setInspectorSubtext("Source: Deep earth gathering", redraw_inspector);
			}
			break;
		case iid.element_ruby:
			{
				let element_count = new Array(eid.element_count);
				for (let i = 0; i < eid.element_count; i++) {
					element_count[i] = 0;
				}
				element_count[eid.element_ruby]++;
				setInspectorTitle(ElementSample(eid.element_ruby) + "<div style = 'width: 6px;'></div>Ruby", redraw_inspector);
				setInspectorCost(stringifyValue(elementValue(element_count)), true);
				setInspectorText("", redraw_inspector);
				setInspectorDivider(true, redraw_inspector);
				setInspectorSubtext("Source: Deep earth gathering", redraw_inspector);
			}
			break;
		case iid.element_diamond:
			{
				let element_count = new Array(eid.element_count);
				for (let i = 0; i < eid.element_count; i++) {
					element_count[i] = 0;
				}
				element_count[eid.element_diamond]++;
				setInspectorTitle(ElementSample(eid.element_diamond) + "<div style = 'width: 6px;'></div>Diamond", redraw_inspector);
				setInspectorCost(stringifyValue(elementValue(element_count)), true);
				setInspectorText("", redraw_inspector);
				setInspectorDivider(true, redraw_inspector);
				setInspectorSubtext("Source: Deep earth gathering", redraw_inspector);
			}
			break;
		case iid.element_magma:
			{
				let element_count = new Array(eid.element_count);
				for (let i = 0; i < eid.element_count; i++) {
					element_count[i] = 0;
				}
				element_count[eid.element_magma]++;
				setInspectorTitle(ElementSample(eid.element_magma) + "<div style = 'width: 6px;'></div>Magma", redraw_inspector);
				setInspectorCost(stringifyValue(elementValue(element_count)), true);
				setInspectorText("", redraw_inspector);
				setInspectorDivider(true, redraw_inspector);
				setInspectorSubtext("Source: Deep earth gathering", redraw_inspector);
			}
			break;
		case iid.element_water:
			{
				let element_count = new Array(eid.element_count);
				for (let i = 0; i < eid.element_count; i++) {
					element_count[i] = 0;
				}
				element_count[eid.element_water]++;
				setInspectorTitle(ElementSample(eid.element_water) + "<div style = 'width: 6px;'></div>Water", redraw_inspector);
				setInspectorCost(stringifyValue(elementValue(element_count)), true);
				setInspectorText("", redraw_inspector);
				setInspectorDivider(true, redraw_inspector);
				setInspectorSubtext("Source: Water gathering", redraw_inspector);
			}
			break;
		case iid.element_slime:
			{
				let element_count = new Array(eid.element_count);
				for (let i = 0; i < eid.element_count; i++) {
					element_count[i] = 0;
				}
				element_count[eid.element_slime]++;
				setInspectorTitle(ElementSample(eid.element_slime) + "<div style = 'width: 6px;'></div>Slime", redraw_inspector);
				setInspectorCost(stringifyValue(elementValue(element_count)), true);
				setInspectorText("", redraw_inspector);
				setInspectorDivider(true, redraw_inspector);
				setInspectorSubtext("Source: Slime gathering", redraw_inspector);
			}
			break;
		case iid.element_oil:
			{
				let element_count = new Array(eid.element_count);
				for (let i = 0; i < eid.element_count; i++) {
					element_count[i] = 0;
				}
				element_count[eid.element_oil]++;
				setInspectorTitle(ElementSample(eid.element_oil) + "<div style = 'width: 6px;'></div>Oil", redraw_inspector);
				setInspectorCost(stringifyValue(elementValue(element_count)), true);
				setInspectorText("", redraw_inspector);
				setInspectorDivider(true, redraw_inspector);
				setInspectorSubtext("Source: Oil gathering", redraw_inspector);
			}
			break;
		case iid.element_helium:
			{
				let element_count = new Array(eid.element_count);
				for (let i = 0; i < eid.element_count; i++) {
					element_count[i] = 0;
				}
				element_count[eid.element_helium]++;
				setInspectorTitle(ElementSample(eid.element_helium) + "<div style = 'width: 6px;'></div>Helium", redraw_inspector);
				setInspectorCost(stringifyValue(elementValue(element_count)), true);
				setInspectorText("", redraw_inspector);
				setInspectorDivider(true, redraw_inspector);
				setInspectorSubtext("Source: Helium gathering", redraw_inspector);
			}
			break;
		case iid.element_fish_1:
			{
				let element_count = new Array(eid.element_count);
				for (let i = 0; i < eid.element_count; i++) {
					element_count[i] = 0;
				}
				element_count[eid.element_fish_1]++;
				setInspectorTitle(ElementSample(eid.element_fish_1) + "<div style = 'width: 6px;'></div>Frog", redraw_inspector);
				setInspectorCost(stringifyValue(elementValue(element_count)), true);
				setInspectorText("", redraw_inspector);
				setInspectorDivider(true, redraw_inspector);
				setInspectorSubtext("Source: River fishing", redraw_inspector);
			}
			break;
		case iid.element_fish_2:
			{
				let element_count = new Array(eid.element_count);
				for (let i = 0; i < eid.element_count; i++) {
					element_count[i] = 0;
				}
				element_count[eid.element_fish_2]++;
				setInspectorTitle(ElementSample(eid.element_fish_2) + "<div style = 'width: 6px;'></div>Trout", redraw_inspector);
				setInspectorCost(stringifyValue(elementValue(element_count)), true);
				setInspectorText("", redraw_inspector);
				setInspectorDivider(true, redraw_inspector);
				setInspectorSubtext("Source: River fishing", redraw_inspector);
			}
			break;
		case iid.element_fish_3:
			{
				let element_count = new Array(eid.element_count);
				for (let i = 0; i < eid.element_count; i++) {
					element_count[i] = 0;
				}
				element_count[eid.element_fish_3]++;
				setInspectorTitle(ElementSample(eid.element_fish_3) + "<div style = 'width: 6px;'></div>Salmon", redraw_inspector);
				setInspectorCost(stringifyValue(elementValue(element_count)), true);
				setInspectorText("", redraw_inspector);
				setInspectorDivider(true, redraw_inspector);
				setInspectorSubtext("Source: River fishing", redraw_inspector);
			}
			break;
		
		// Upgrades
		case iid.upgrade_earth_density_1:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Steel-toed Boots", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_density_1].cost.stringify(), true);
			setInspectorText("You can fit a lot more dirt into your storage with a few well-placed stomps", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("2x earthworks density", redraw_inspector);
			break;
		case iid.upgrade_earth_density_2:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Tamping Rod", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_density_2].cost.stringify(), true);
			setInspectorText("A long stick with a flat metal plate at one end. The perfect tool for squishing dirt or less lethal jousting.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("2x earthworks density", redraw_inspector);
			break;
		case iid.upgrade_earth_density_3:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Trash Compactor", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_density_3].cost.stringify(), true);
			setInspectorText("A repurposed trash compactor can smash earth into a dense cube. Ignore the stench and raccoons.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("2x earthworks density", redraw_inspector);
			break;
		case iid.upgrade_earth_density_4:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Macrosonic Agitator", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_density_4].cost.stringify(), true);
			setInspectorText("A marvel of modern science. Vibrates the earth at incredible frequencies to squeeze out every last bit of empty space.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("2x earthworks density", redraw_inspector);
			break;
		case iid.upgrade_earth_density_5:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Gravity Well", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_density_5].cost.stringify(), true);
			setInspectorText("A miniature black hole which can compact earth to a ridiculous degree. You can also say it ate your homework.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("2x earthworks density", redraw_inspector);
			break;
		case iid.upgrade_earth_value_1:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Dustbusting", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_value_1].cost.stringify(), true);
			setInspectorText("By filtering out some of the lighter dust you can make your earth particles more valuable.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+100% " + ElementSample(eid.element_earth) + elementbuffer + "dirt particle value", redraw_inspector);
			break;
		case iid.upgrade_earth_value_2:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Industrial Waste Handling", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_value_2].cost.stringify(), true);
			setInspectorText("Our operation is starting to produce a good amount of oily waste... Might as well dump that stuff right into the ground!", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+50% " + ElementSample(eid.element_earth) + elementbuffer + "dirt particle value" + flexbreak + "+100% " + ElementSample(eid.element_copper) + elementbuffer + "copper particle value", redraw_inspector);
			break;
		case iid.upgrade_earth_value_3:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Heavy Metal Poisoning", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_value_3].cost.stringify(), true);
			setInspectorText("Bad news, you all have symptoms of heavy metal poisoning. Good news, you can now find even heavier metals!", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+50% " + ElementSample(eid.element_copper) + ElementSample(eid.element_iron) + ElementSample(eid.element_lead) + ElementSample(eid.element_gold) + elementbuffer + "metal particle value", redraw_inspector);
			break;
		case iid.upgrade_earth_value_4:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Marble Quarry", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_value_4].cost.stringify(), true);
			setInspectorText("This is the perfect spot for finding greek statues, kitchen counters, or food for the unquenchable cosmic maw.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+50% " + ElementSample(eid.element_stone) + elementbuffer + "stone particle value", redraw_inspector);
			break;
		case iid.upgrade_earth_value_5:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>The Economicon", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_value_5].cost.stringify(), true);
			setInspectorText("You have acquired a forbidden tome containing eldritch secrets of accounting and economics. Summoning a few finance demons will allow you to artificially inflate the value of emeralds. Neat!", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+50% " + ElementSample(eid.element_emerald) + elementbuffer + "emerald particle value", redraw_inspector);
			break;
		case iid.upgrade_earth_value_6:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Cement Plant", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_value_6].cost.stringify(), true);
			setInspectorText("A large facility for turning sandy clay and gravel into construction grade cement and concrete. This is a great way to increase the value of your mineshaft byproducts, and will enable even more elaborate construction projects in the future.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+50% " + ElementSample(eid.element_earth) + elementbuffer + "dirt particle value" + flexbreak + "+100% " + ElementSample(eid.element_stone) + elementbuffer + "stone particle value", redraw_inspector);
			break;
		case iid.upgrade_earth_value_7:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Crypt Coins", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_value_7].cost.stringify(), true);
			setInspectorText("Your dark powers have grown. You are now able to mint completely valueless coins out of iron. But you can probably convince the Chasm that these coins are \"totally real\" and \"going to the moon\" or something stupid like that.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+300% " + ElementSample(eid.element_iron) + elementbuffer + "iron particle value", redraw_inspector);
			break;
		case iid.upgrade_earth_value_8:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Catastrophic Converter", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_value_8].cost.stringify(), true);
			setInspectorText("Your researchers have created a machine that enriches coal to be much more fuel-dense, at the cost of being slightly more incredibly harmful for the ozone layer.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+100% " + ElementSample(eid.element_coal) + elementbuffer + "coal particle value", redraw_inspector);
			break;
		case iid.upgrade_earth_value_9:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Poison Swamp", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_value_9].cost.stringify(), true);
			setInspectorText("The chemical sludge produced by your mining operation has created a toxic swampland at the edge of the Chasm. Time to buy some wading pants.<br><br>\"But when making the game I rediscovered my love for making poison swamps. I know how people feel about them, but you know, suddenly I realize I'm in the middle of making one and I just can't help myself. <a href = 'https://x.com/hausofdecline/status/1760748342852673658?s=20' target = '_blank'>It just happens.</a>\"", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+100% " + ElementSample(eid.element_earth) + elementbuffer + "dirt particle value" + flexbreak + "+100% " + ElementSample(eid.element_copper) + elementbuffer + "copper particle value", redraw_inspector);
			break;
		case iid.upgrade_earth_value_10:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Ingot Casting Line", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_value_10].cost.stringify(), true);
			setInspectorText("This is a much cooler way to store all your metal before dumping it into the Chasm. Sometimes you like to build little castles out of the metal bricks.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+200% " + ElementSample(eid.element_copper) + ElementSample(eid.element_iron) + ElementSample(eid.element_lead) + ElementSample(eid.element_gold) + elementbuffer + "metal particle mass", redraw_inspector);
			break;
		case iid.upgrade_earth_value_11:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Jewel Pods", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_value_11].cost.stringify(), true);
			setInspectorText("Your environmental crimes have forever changed the chemical makeup of the soil beneath your feet. All the jewels in your mine are now mango-bubblegum flavor. Touching them permanently stains your hands though.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+200% " + ElementSample(eid.element_emerald) + ElementSample(eid.element_sapphire) + ElementSample(eid.element_ruby) + ElementSample(eid.element_diamond) + elementbuffer + "jewel particle mass", redraw_inspector);
			break;
		case iid.upgrade_earth_value_12:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Coal Doping", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_value_12].cost.stringify(), true);
			setInspectorText("Pumping nitrogen into your coal deposits reduces the oxygen content of the porous rock, making the coal burn hotter and longer. Doesn't get the coal high.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+50% " + ElementSample(eid.element_coal) + elementbuffer + "coal particle value", redraw_inspector);
			break;
		case iid.upgrade_earth_value_13:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Warehouse Expansion", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_value_13].cost.stringify(), true);
			setInspectorText("Your growing industrial facility demands a larger storage space for supplies and intermediary products. This upgrade will especially improve your bulk resource processing.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+25%" + chasm_currency[cid.currency_particles].inspector_symbol + "Void Particle gain", redraw_inspector);
			break;
		case iid.upgrade_earth_chance_1:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Fifty Shades of Green", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_chance_1].cost.stringify(), true);
			setInspectorText("The hot new book about emerald mining. Lots of pictures of glistening, shirtless miners. Also a few tips on where to find more emeralds.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+2% base " + ElementSample(eid.element_emerald) + elementbuffer + "emerald chance", redraw_inspector);
			break;
		case iid.upgrade_earth_chance_2:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Penny Flavored Gum", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_chance_2].cost.stringify(), true);
			setInspectorText("This stuff is disgusting, but you kind of want another piece. Really gets you in the mood to find more copper.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+2% base " + ElementSample(eid.element_copper) + elementbuffer + "copper chance", redraw_inspector);
			break;
		case iid.upgrade_earth_chance_3:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Spare Lungs", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_chance_3].cost.stringify(), true);
			setInspectorText("A freezer full of totally legal transplant lungs, just in case all this mining is bad for your health. Not actually that expensive if you buy in bulk.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+0.5% base " + ElementSample(eid.element_coal) + elementbuffer + "coal chance", redraw_inspector);
			break;
		case iid.upgrade_earth_chance_4:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Lucky Skipping Stone", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_chance_4].cost.stringify(), true);
			setInspectorText("This perfectly flat river rock makes you feel a little bit lucky. You could get eight, maybe nine skips out of this bad boy.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("Increased chance to find" + ElementSample(eid.element_stone) + elementbuffer + "stone" + flexbreak + "instead of" + ElementSample(eid.element_earth) + elementbuffer + "dirt, even at shallow depths", redraw_inspector);
			break;
		case iid.upgrade_earth_chance_5:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Jackpot State of Mind", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_chance_5].cost.stringify(), true);
			setInspectorText("Gambling is a scam. This upgrade is almost certainly not worth it, but you are going to buy it anyway. All the subliminal advertising in this game is starting to pay off.<br><br><span style = 'font-size: 4px;'>buy Our Queen Crumbles <a href = 'https://blooperly.itch.io/our-queen-crumbles' target = '_blank'>here</a></span>", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+0.1% base " + ElementSample(eid.element_diamond) + elementbuffer + "diamond chance," + flexbreak + "even at shallow depths", redraw_inspector);
			break;
		case iid.upgrade_earth_gather_speed_1:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Shovel Lotion", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_gather_speed_1].cost.stringify(), true);
			setInspectorText("Keeping your handle slippery helps to prevent blisters. It's shovel scented.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+20% earthworks gathering speed", redraw_inspector);
			break;
		case iid.upgrade_earth_gather_speed_2:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Carcinization", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_gather_speed_2].cost.stringify(), true);
			setInspectorText("Exposure to all this stinky pollution has slightly changed your genetic code. You are now 3% crab: the crustacean so nice, they made it twice. Your claws make digging a little easier, and everything else a lot harder.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+10% earthworks gathering speed", redraw_inspector);
			break;
		case iid.upgrade_earth_drop_speed_1:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Pulley System", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_drop_speed_1].cost.stringify(), true);
			setInspectorText("A pulley system is much better than the pushy system you were using before.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+20% earthworks dropping speed", redraw_inspector);
			break;
		case iid.upgrade_earth_drop_speed_2:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Spring-loaded Elevator", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_drop_speed_2].cost.stringify(), true);
			setInspectorText("The first version of this elevator played jack-in-the-box music, but everyone hated it. Now it plays Weezer.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+10% earthworks dropping speed", redraw_inspector);
			break;
		case iid.upgrade_earth_metals_1:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Surveying Tools", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_metals_1].cost.stringify(), true);
			setInspectorText("A pickaxe, some charts, and a metal detector. Just barely better than guessing where metal ore deposits are in the ground.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("Unlock the Surveying job", redraw_inspector);
			break;
		case iid.upgrade_earth_depth_1:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Mining Rights", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_depth_1].cost.stringify(), true);
			setInspectorText("It feels a bit silly to dig next to the yawning mouth of the Chasm, but there's some really good stuff down there.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("Unlock deep mining" + flexbreak + "+1" + chasm_currency[cid.currency_machinery].inspector_symbol + "Heavy Machinery", redraw_inspector);
			break;
		case iid.upgrade_earth_depth_2:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Notarized Mining Rights", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_depth_2].cost.stringify(), true);
			setInspectorText("Your old mining permit was a bit... forged. This one should stand up to even moderate scrutiny!", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("max depth +1" + flexbreak + "+1" + chasm_currency[cid.currency_machinery].inspector_symbol + "Heavy Machinery", redraw_inspector);
			break;
		case iid.upgrade_earth_depth_3:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Bloodpact Mining Rights", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_depth_3].cost.stringify(), true);
			setInspectorText("The Fringe Researcher insists that a document signed in blood will allow you to dig much deeper. That doesn't sound real, but you've got plenty of blood. Might as well try!<br>Does not come with heavy machinery. You will need to find another source better suited for the high-pressure environment...", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("max depth +1", redraw_inspector);
			break;
		case iid.upgrade_earth_depth_4:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Double Notarized Bloodpact", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_depth_4].cost.stringify(), true);
			setInspectorText("This document is now so laden with ink, blood, and wax seals that it is barely legible. Your legal team is thrilled.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("max depth +1" + flexbreak + "+1" + chasm_currency[cid.currency_machinery].inspector_symbol + "Heavy Machinery", redraw_inspector);
			break;
		case iid.upgrade_earth_depth_5:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Royal Mining Rights", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_depth_5].cost.stringify(), true);
			setInspectorText("The Fringe Researcher has spent his free time tracing the lineage of the royal family who used to own the land around the Chasm. The heir is willing to sell you ancient land rights, for a price.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("max depth +1" + flexbreak + "+1" + chasm_currency[cid.currency_machinery].inspector_symbol + "Heavy Machinery", redraw_inspector);
			break;
		case iid.upgrade_earth_depth_6:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Deep Mining Rights", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_depth_6].cost.stringify(), true);
			setInspectorText("You had your lawyers add in a few clauses protecting you from any liability for \"accidental plate shattering, geo-terrorism, and/or volcanic armageddon\"", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("max depth +1" + flexbreak + "+1" + chasm_currency[cid.currency_machinery].inspector_symbol + "Heavy Machinery", redraw_inspector);
			break;
		case iid.upgrade_earth_depth_7 :
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Blessed Mining Rights", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_earth_depth_7].cost.stringify(), true);
			setInspectorText("Apparently the only way to dig \"all the way to Hell\" is to get your documentation blessed. You should keep an eye out for God in the Chasm, maybe he will help you out.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("max depth +1" + flexbreak + "+1" + chasm_currency[cid.currency_machinery].inspector_symbol + "Heavy Machinery", redraw_inspector);
			break;
		case iid.upgrade_mining_rig_1:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>There Will Be Dirt", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_mining_rig_1].cost.stringify(), true);
			setInspectorText("This giant industrial mining rig will speed up your gathering as long as you keep it fueled. Hopefully unrelenting greed won't result in your ultimate downfall. I drink your milkshake!", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("Unlock the Mining Rig", redraw_inspector);
			break;
		case iid.upgrade_mining_rig_2:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Modular Mining Rig", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_mining_rig_2].cost.stringify(), true);
			setInspectorText("Swapping out parts of the mining rig should let you improve it incrementally. Mine harder, better, faster, stronger.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("Unlock Mining Rig upgrades", redraw_inspector);
			break;
		case iid.upgrade_mining_rig_3:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Pilot Light", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_mining_rig_3].cost.stringify(), true);
			setInspectorText("It takes a lot of work to keep the Mining Rig running. A little bit of Pitfire will help to keep the motor from freezing up.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("Mining Rig will not drop below 10% heat", redraw_inspector);
			break;
		case iid.upgrade_mining_rig_4:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Industrial Chimney Sweeps", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_mining_rig_4].cost.stringify(), true);
			setInspectorText("These extra-large Victorian orphans will keep your smokestacks sparkling clean.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("3x Mining Rig sustain time", redraw_inspector);
			break;
		case iid.upgrade_mining_rig_5:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Hot Pocket Technology", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_mining_rig_5].cost.stringify(), true);
			setInspectorText("By studying the physics of hot pockets, you have devised a method for keeping the center of the mining rig engine hotter, longer.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+1s Mining Rig sustain", redraw_inspector);
			break;
		case iid.upgrade_water_storage:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Water storage", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_water_storage].cost.stringify(), true);
			setInspectorText("Dumping water into the Chasm might speed things up, but you'll have to build a water pumping station first.", redraw_inspector);
			setInspectorSubtext("Unlock Waterworks", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			break;
		case iid.upgrade_water_bait_1:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Bait Box", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_water_bait_1].cost.stringify(), true);
			setInspectorText("The Angler has developed special fishing bait made from the Chasm's materials. It works even better than the hotdogs you were using before. This bait will help you satisfy the Chasm's peculiar hunger for more exotic fish.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("Unlock the Bait Box", redraw_inspector);
			break;
		case iid.upgrade_water_survey_1:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Fishing Report", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_water_survey_1].cost.stringify(), true);
			setInspectorText("The Angler can use his keen knowledge of the sea, the stars, the color of the sunrise, and a high-tech fish-finding sonar to predict exactly what fish you can find at different depths.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("Unlock the Fishing Report", redraw_inspector);
			break;
		case iid.upgrade_water_value_1:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Blue Dye Number 3", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_water_value_1].cost.stringify(), true);
			setInspectorText("It turns out natural water is clear, not electric blue like the ocean in a movie. Your researches say that a generous dose of food coloring will improve the hydration.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+100% " + ElementSample(eid.element_water) + elementbuffer + "water particle value", redraw_inspector);
			break;
		case iid.upgrade_water_value_2:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Water Value 2", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_water_value_2].cost.stringify(), true);
			setInspectorText("", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("", redraw_inspector);
			break;
		case iid.upgrade_water_value_3:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Water Value 3", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_water_value_3].cost.stringify(), true);
			setInspectorText("", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("", redraw_inspector);
			break;
		case iid.upgrade_water_value_4:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Water Value 4", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_water_value_4].cost.stringify(), true);
			setInspectorText("", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("", redraw_inspector);
			break;
		case iid.upgrade_water_value_5:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Water Value 5", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_water_value_5].cost.stringify(), true);
			setInspectorText("", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("", redraw_inspector);
			break;
		case iid.upgrade_water_value_6:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Water Value 6", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_water_value_6].cost.stringify(), true);
			setInspectorText("", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("", redraw_inspector);
			break;
		case iid.upgrade_water_value_7:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Water Value 7", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_water_value_7].cost.stringify(), true);
			setInspectorText("", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("", redraw_inspector);
			break;
		case iid.upgrade_water_value_8:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Water Value 8", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_water_value_8].cost.stringify(), true);
			setInspectorText("", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("", redraw_inspector);
			break;
		case iid.upgrade_water_gather_speed_1:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Muscular Pumps", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_water_gather_speed_1].cost.stringify(), true);
			setInspectorText("Hit a new PR by sending your pumps to the gym. Now they look pretty swole.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+20% waterworks gathering speed", redraw_inspector);
			break;
		case iid.upgrade_water_depth_1:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Diving Bell", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_water_depth_1].cost.stringify(), true);
			setInspectorText("Harvesting fish from deeper in the ocean will require specialized equipment to pump liquid and keep your fishermen alive. An industrial diving bell is a good platform for venturing into the depths.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("Unlock deep pumping" + flexbreak + "+1" + chasm_currency[cid.currency_machinery].inspector_symbol + "Heavy Machinery", redraw_inspector);
			break;
		case iid.upgrade_water_depth_2:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Water Depth 2", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_water_depth_2].cost.stringify(), true);
			setInspectorText("", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("max depth +1" + flexbreak + "+1" + chasm_currency[cid.currency_machinery].inspector_symbol + "Heavy Machinery", redraw_inspector);
			break;
		case iid.upgrade_water_depth_3:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Water Depth 3", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_water_depth_3].cost.stringify(), true);
			setInspectorText("", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("max depth +1" + flexbreak + "+1" + chasm_currency[cid.currency_machinery].inspector_symbol + "Heavy Machinery", redraw_inspector);
			break;
		case iid.upgrade_water_depth_4:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Water Depth 4", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_water_depth_4].cost.stringify(), true);
			setInspectorText("", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("max depth +1" + flexbreak + "+1" + chasm_currency[cid.currency_machinery].inspector_symbol + "Heavy Machinery", redraw_inspector);
			break;
		case iid.upgrade_water_depth_5:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Water Depth 5", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_water_depth_5].cost.stringify(), true);
			setInspectorText("", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("max depth +1" + flexbreak + "+1" + chasm_currency[cid.currency_machinery].inspector_symbol + "Heavy Machinery", redraw_inspector);
			break;
		case iid.upgrade_water_depth_6:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Water Depth 6", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_water_depth_6].cost.stringify(), true);
			setInspectorText("", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("max depth +1" + flexbreak + "+1" + chasm_currency[cid.currency_machinery].inspector_symbol + "Heavy Machinery", redraw_inspector);
			break;
		case iid.upgrade_water_depth_7:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Water Depth 7", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_water_depth_7].cost.stringify(), true);
			setInspectorText("", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("max depth +1" + flexbreak + "+1" + chasm_currency[cid.currency_machinery].inspector_symbol + "Heavy Machinery", redraw_inspector);
			break;
		case iid.upgrade_workers_1:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Fringe Researcher", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_workers_1].cost.stringify(), true);
			setInspectorText("You know a guy who would be very interested in studying the exotic materials coming out of the Chasm. He is a bit of a conspiracy nut, but you can probably convince him to shovel dirt.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+1" + chasm_currency[cid.currency_workers].inspector_symbol + "Worker", redraw_inspector);
			break;
		case iid.upgrade_workers_2:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Internship Program", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_workers_2].cost.stringify(), true);
			setInspectorText("Filling the Chasm is exhausting—just get a college student to do it. All the labor of an employee with none of the pay!", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+1" + chasm_currency[cid.currency_workers].inspector_symbol + "Worker", redraw_inspector);
			break;
		case iid.upgrade_workers_3:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Gig Worker", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_workers_3].cost.stringify(), true);
			setInspectorText("You found an app where you can hire manual labor for cheap! Hopefully the regulators don't catch on.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+1" + chasm_currency[cid.currency_workers].inspector_symbol + "Worker", redraw_inspector);
			break;
		case iid.upgrade_workers_4:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Old Timey Prospector", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_workers_4].cost.stringify(), true);
			setInspectorText("This old coot is willing to help you fill the Chasm, but first you must prove that there is ore in them there hills.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+1" + chasm_currency[cid.currency_workers].inspector_symbol + "Worker", redraw_inspector);
			break;
		case iid.upgrade_workers_5:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Creepy Twins", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_workers_5].cost.stringify(), true);
			setInspectorText("The Fringe Researcher has reported a pair of creepy children haunting the dark corners of the worksite... Is it even child labor if the children are ghosts?", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+2" + chasm_currency[cid.currency_workers].inspector_symbol + "Workers", redraw_inspector);
			break;
		case iid.upgrade_workers_6:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>HR Department", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_workers_6].cost.stringify(), true);
			setInspectorText("It seems like you can't grow your team much more without a hearty stockpile of office snacks, a bevy of teambuilding exercises, and 30 hours of incredibly boring training videos.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+1" + chasm_currency[cid.currency_workers].inspector_symbol + "Worker" + flexbreak + "+10%" + chasm_currency[cid.currency_workers].inspector_symbol + "Worker efficiency", redraw_inspector);
			break;
		case iid.upgrade_workers_7:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Survey Crew", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_workers_7].cost.stringify(), true);
			setInspectorText("A bunch of guys with hardhats will significantly improve your mining survey capabilities. The hardhats are key.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+2" + chasm_currency[cid.currency_workers].inspector_symbol + "Workers" + flexbreak + "+30% Survey efficiency", redraw_inspector);
			break;
		case iid.upgrade_workers_8:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Monocle Guy", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_workers_8].cost.stringify(), true);
			setInspectorText("Every company needs a fancy old man with a top hat and monocle to peer intensely at their gems and crystals. Why else would you dig up gems and crystals?", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+1" + chasm_currency[cid.currency_workers].inspector_symbol + "Worker" + flexbreak + "+20% " + ElementSample(eid.element_emerald) + ElementSample(eid.element_sapphire) + ElementSample(eid.element_ruby) + ElementSample(eid.element_diamond) + elementbuffer + "jewel particle value", redraw_inspector);
			break;
		case iid.upgrade_workers_9:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Jackhammer Jockey", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_workers_9].cost.stringify(), true);
			setInspectorText("The cowboys of the modern construction crew. A short ride on the iron stallion will shatter even the most stubborn boulders. They are also really good on a pogo stick.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+1" + chasm_currency[cid.currency_workers].inspector_symbol + "Worker" + flexbreak + "+10% earthworks gathering speed", redraw_inspector);
			break;
		case iid.upgrade_workers_10:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Italian Plumber", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_workers_10].cost.stringify(), true);
			setInspectorText("Not the one you are thinking of. Or the other one you are thinking of.<br><br>This guy even knows where to dig up some copper pipes.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+1" + chasm_currency[cid.currency_workers].inspector_symbol + "Worker" + flexbreak + "+50% " + ElementSample(eid.element_copper) + elementbuffer + "copper particle value", redraw_inspector);
			break;
		case iid.upgrade_workers_11:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Gas Station Attendant", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_workers_11].cost.stringify(), true);
			setInspectorText("Winner of the 1994 Gas Station Olympics in Barcelona. He's no longer in his prime, but he is still pretty good at fueling vehicles.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+1" + chasm_currency[cid.currency_workers].inspector_symbol + "Worker" + flexbreak + "+1s Mining Rig sustain", redraw_inspector);
			break;
		case iid.upgrade_workers_12:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Dedicated Salaryman", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_workers_12].cost.stringify(), true);
			setInspectorText("This guy will do anything for a moderate salary and some really bad healthcare. His job is the center of the universe, his reason for being. He is the perfect drone.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+1" + chasm_currency[cid.currency_workers].inspector_symbol + "Worker", redraw_inspector);
			break;
		case iid.upgrade_challenge_ecocide:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Challenge: Ecocide Prevention", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_challenge_ecocide].cost.stringify(), true);
			setInspectorText("You had the chance to destroy the environment for your own personal profit, but you didn't do it! Good job! You are a hero.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+1" + chasm_currency[cid.currency_challenge_1].inspector_symbol + "Ecocide Token on singularity", redraw_inspector);
			break;
		case iid.upgrade_singularity_workers_1:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Doppelgänger", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_singularity_workers_1].cost.stringify(), true);
			setInspectorText("After jumping into the Chasm you wake up on the surface once again, but this time you are not alone. The Chasm is empty and the work site has disappeared, but there is another version of you just starting to get to work.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+1" + chasm_currency[cid.currency_workers].inspector_symbol + "Worker per Singularity reset" + flexbreak + "(max 5)", redraw_inspector);
			break;
		case iid.upgrade_singularity_workers_2:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Bigfoot", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_singularity_workers_2].cost.stringify(), true);
			setInspectorText("This universe is the only one where Bigfoot exists, and he looks almost exactly like the Fringe Researcher. You had better bring him with you.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+1" + chasm_currency[cid.currency_workers].inspector_symbol + "Worker" + flexbreak + "+20%" + chasm_currency[cid.currency_mass].inspector_symbol + "Mass gain", redraw_inspector);
			break;
		case iid.upgrade_singularity_workers_3:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Intern Sarcophagus", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_singularity_workers_3].cost.stringify(), true);
			setInspectorText("You have crafted a grim and terrible artefact which can carry a single Intern through the Chasm, across the threshold between worlds. They still won't be paid.<br>Don't forget to poke a few air holes.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+1" + chasm_currency[cid.currency_workers].inspector_symbol + "Worker" + flexbreak + "+25%" + chasm_currency[cid.currency_capital].inspector_symbol + "Anticapital gain", redraw_inspector);
			break;
		case iid.upgrade_singularity_workers_4:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Timey Wimey Prospector", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_singularity_workers_4].cost.stringify(), true);
			setInspectorText("The prospector in this universe is young, British, and weirdly hot. He seems to know a lot about temporal paradoxes. It's probably a good idea to hire someone who can tell you if you are about to destroy the universe.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+1" + chasm_currency[cid.currency_workers].inspector_symbol + "Worker" + flexbreak + "+50% " + ElementSample(eid.element_copper) + ElementSample(eid.element_iron) + ElementSample(eid.element_lead) + ElementSample(eid.element_gold) + elementbuffer + "metal particle value", redraw_inspector);
			break;
		case iid.upgrade_singularity_workers_5:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Creepier Twins", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_singularity_workers_5].cost.stringify(), true);
			setInspectorText("The twins are way more evil after traveling through the Chasm. Their eyes glow, they crab walk everywhere, and one of them ate your lunch. These guys are the worst.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+2" + chasm_currency[cid.currency_workers].inspector_symbol + "Workers", redraw_inspector);
			break;
		case iid.upgrade_singularity_workers_6:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Omniversal HR Department", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_singularity_workers_6].cost.stringify(), true);
			setInspectorText("The HR department has figured out how to hire staff across every parallel universe at once. This will save a ton of time on recruiting, but company parties are going to get much harder to plan.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("Keep first 6" + chasm_currency[cid.currency_workers].inspector_symbol + "Worker upgrades on reset"+ flexbreak + "+1" + chasm_currency[cid.currency_workers].inspector_symbol + "Worker" + flexbreak + "+10%" + chasm_currency[cid.currency_workers].inspector_symbol + "Worker efficiency", redraw_inspector);
			break;
		case iid.upgrade_singularity_workers_7:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Trippelgänger", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_singularity_workers_7].cost.stringify(), true);
			setInspectorText("You have found a way to copy your Doppelgängers using the Chasm. These ones seem a bit... off. But small heads and extra arms are good for mining, right?", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+1" + chasm_currency[cid.currency_workers].inspector_symbol + "Worker per 2 Singularity resets" + flexbreak + "(after Doppelgänger maxed)" + flexbreak + "(max 5)", redraw_inspector);
			break;
		case iid.upgrade_singularity_workers_8:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Gängerbanger", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_singularity_workers_8].cost.stringify(), true);
			setInspectorText("You have found a way to copy your Trippelgängers using the Chasm. Don't look too hard at these guys, they are only barely passable as human. It seems that repeated paracausal cloning is not good for the human form.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+1" + chasm_currency[cid.currency_workers].inspector_symbol + "Worker per 4 Singularity resets" + flexbreak + "(after Trippelgänger maxed)" + flexbreak + "(max 5)", redraw_inspector);
			break;
		case iid.upgrade_singularity_earth_value_1:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Gate to Hell", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_singularity_earth_value_1].cost.stringify(), true);
			setInspectorText("You accidentally set the mines on fire, and the vast coal seams contain enough energy to burn for decades. On the plus side, flaming coal is worth more than regular coal.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+100% " + ElementSample(eid.element_coal) + elementbuffer + "coal particle value", redraw_inspector);
			break;
		case iid.upgrade_singularity_earth_value_2:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>The Atoms Family Issue #1", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_singularity_earth_value_2].cost.stringify(), true);
			setInspectorText("Your employees have organized a Void Particle Physics Fan Club. One of them has even written a fan-fic comic where two particles fall in love and start a family. It's a bit weird, but it seems to be working.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+50%" + chasm_currency[cid.currency_particles].inspector_symbol + "Void Particle gain", redraw_inspector);
			break;
		case iid.upgrade_singularity_survey_1:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Reverse Precognition", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_singularity_survey_1].cost.stringify(), true);
			setInspectorText("Your large, pulsating brain has developed the ability to predict where valuable mining veins are by remembering where they were the last time you dug them up.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("Earth Survey level is raised by 1", redraw_inspector);
			break;
		case iid.upgrade_singularity_survey_2:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>RGB Mining Lanterns", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_singularity_survey_2].cost.stringify(), true);
			setInspectorText("Upgrade your mining lanterns to sweet RGB LEDs instead of lame oil. This will obviously increase the game's FPS.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("+1% base " + ElementSample(eid.element_emerald) + elementbuffer + "emerald chance" + flexbreak + "+0.5% base " + ElementSample(eid.element_sapphire) + elementbuffer + "sapphire chance" + flexbreak + "+0.1% base " + ElementSample(eid.element_ruby) + elementbuffer + "ruby chance", redraw_inspector);
			break;
		case iid.upgrade_singularity_mining_rig_1:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Subspace Mining Rig", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_singularity_mining_rig_1].cost.stringify(), true);
			setInspectorText("Driving your Mining Rig into the Chasm is much faster than rebuilding it on the other side.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("Keep Mining Rig upgrades on reset", redraw_inspector);
			break;
		case iid.upgrade_singularity_mining_rig_2:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Semi-perpetual Motion Machine", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_singularity_mining_rig_2].cost.stringify(), true);
			setInspectorText("This machine will keep your Mining Rig running 60% of the time, all the time.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("3x Mining Rig sustain", redraw_inspector);
			break;
		case iid.upgrade_singularity_mining_rig_3:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Anti-thermal Paste", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_singularity_mining_rig_3].cost.stringify(), true);
			setInspectorText("A small tube of this silver goo will keep your Mining Rig from leaking so much heat. No matter how little you apply, it is always too much.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("50% slower Mining Rig decay", redraw_inspector);
			break;
		case iid.upgrade_singularity_ascend_1:
			setInspectorTitle("<img src = '" + chasm_upgrades[id - iid.offset_upgrades].upgrade_image + "' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Pit Suspenders", redraw_inspector);
			setInspectorCost(chasm_upgrades[uid.upgrade_singularity_ascend_1].cost.stringify(), true);
			setInspectorText("A pair of dapper suspenders that stretch allllll the way down. Your sensors are reporting that they make the bottomless pit significantly less infinite.", redraw_inspector);
			setInspectorDivider(true, redraw_inspector);
			setInspectorSubtext("-25% singularity base cost", redraw_inspector);
			break;

		// Achievements
		case iid.achievement_unknown:
			setInspectorTitle("???", redraw_inspector);
			setInspectorCost("", redraw_inspector);
			setInspectorText("Achievement unknown", redraw_inspector);
			setInspectorDivider(false, redraw_inspector);
			setInspectorSubtext("", redraw_inspector);
			break;
		case iid.achievement_babys_first_block:
			{
				let req_string = "Drop 1 block of earth into the Chasm";
				if (chasm_achievements[aid.achievement_babys_first_block].unlocked) {
					setInspectorTitle("<img src = 'images/a_babys_first_block.png' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Baby's First Block", redraw_inspector);
					setInspectorCost("", redraw_inspector);
					setInspectorText(strikethrough(req_string) + "<br>You still remember dropping your first block into the Chasm... Things were simpler back then.", redraw_inspector);
					setInspectorDivider(false, redraw_inspector);
					setInspectorSubtext("", redraw_inspector);
				} else {
					setInspectorTitle("<img src = 'images/a_babys_first_block.png' class = 'pixelart locked_tile' width = '25' height = '25' style = 'margin-right: 6px;'>Baby's First Block", redraw_inspector);
					setInspectorCost("", redraw_inspector);
					setInspectorText("", redraw_inspector);
					setInspectorDivider(false, redraw_inspector);
					setInspectorSubtext(req_string, redraw_inspector);
				}
			}
			break;
		case iid.achievement_reality_sprang_a_leak:
			{
				let req_string = "Collect 1 total void particle";
				if (chasm_achievements[aid.achievement_reality_sprang_a_leak].unlocked) {
					setInspectorTitle("<img src = 'images/a_reality_sprang.png' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Reality Sprang a Leak", redraw_inspector);
					setInspectorCost("", redraw_inspector);
					setInspectorText(strikethrough(req_string) + "<br>Dropping things into the Chasm seems to release clouds of nothing. I'm pretty sure the universe isn't supposed to do that.", redraw_inspector);
					setInspectorDivider(false, redraw_inspector);
					setInspectorSubtext("", redraw_inspector);
				} else {
					setInspectorTitle("<img src = 'images/a_reality_sprang.png' class = 'pixelart locked_tile' width = '25' height = '25' style = 'margin-right: 6px;'>Reality Sprang a Leak", redraw_inspector);
					setInspectorCost("", redraw_inspector);
					setInspectorText(req_string, redraw_inspector);
					setInspectorDivider(false, redraw_inspector);
					setInspectorSubtext("", redraw_inspector);
				}
			}
			break;
		case iid.achievement_nothing_to_worry_about:
			{
				let req_string = "Collect 100 total void particles";
				if (chasm_achievements[aid.achievement_nothing_to_worry_about].unlocked) {
					setInspectorTitle("<img src = 'images/a_nothing_to_worry_about.png' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Nothing to Worry About", redraw_inspector);
					setInspectorCost("", redraw_inspector);
					setInspectorText(strikethrough(req_string) + "<br>How much nothing can there be, anyway?", redraw_inspector);
					setInspectorDivider(false, redraw_inspector);
					setInspectorSubtext("", redraw_inspector);
				} else {
					setInspectorTitle("<img src = 'images/a_nothing_to_worry_about.png' class = 'pixelart locked_tile' width = '25' height = '25' style = 'margin-right: 6px;'>Nothing to Worry About", redraw_inspector);
					setInspectorCost("", redraw_inspector);
					setInspectorText(req_string, redraw_inspector);
					setInspectorDivider(false, redraw_inspector);
					setInspectorSubtext("", redraw_inspector);
				}
			}
			break;
		case iid.achievement_minor_case_of_wormhole:
			{
				let req_string = "Collect 10,000 total void particles";
				if (chasm_achievements[aid.achievement_minor_case_of_wormhole].unlocked) {
					setInspectorTitle("<img src = 'images/a_minor_case_of_wormhole.png' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>A Minor Case of Wormhole", redraw_inspector);
					setInspectorCost("", redraw_inspector);
					setInspectorText(strikethrough(req_string) + "<br>Worms? In MY hole??", redraw_inspector);
					setInspectorDivider(false, redraw_inspector);
					setInspectorSubtext("", redraw_inspector);
				} else {
					setInspectorTitle("<img src = 'images/a_minor_case_of_wormhole.png' class = 'pixelart locked_tile' width = '25' height = '25' style = 'margin-right: 6px;'>A Minor Case of Wormhole", redraw_inspector);
					setInspectorCost("", redraw_inspector);
					setInspectorText(req_string, redraw_inspector);
					setInspectorDivider(false, redraw_inspector);
					setInspectorSubtext("", redraw_inspector);
				}
			}
			break;
		case iid.achievement_eye_feel_extremely_unwell:
			{
				let req_string = "Collect 1,000,000 total void particles";
				if (chasm_achievements[aid.achievement_eye_feel_extremely_unwell].unlocked) {
					setInspectorTitle("<img src = 'images/a_eye_feel_extremely_unwell.png' class = 'pixelart' width = '25' height = '25' style = 'margin-right: 6px;'>Eye Feel Extremely Unwell", redraw_inspector);
					setInspectorCost("", redraw_inspector);
					setInspectorText(strikethrough(req_string) + "<br>If you gaze long enough into the abyss... The abyss will sprout creepy eyes and wink at you.", redraw_inspector);
					setInspectorDivider(false, redraw_inspector);
					setInspectorSubtext("", redraw_inspector);
				} else {
					setInspectorTitle("<img src = 'images/a_eye_feel_extremely_unwell.png' class = 'pixelart locked_tile' width = '25' height = '25' style = 'margin-right: 6px;'>Eye Feel Extremely Unwell", redraw_inspector);
					setInspectorCost("", redraw_inspector);
					setInspectorText(req_string, redraw_inspector);
					setInspectorDivider(false, redraw_inspector);
					setInspectorSubtext("", redraw_inspector);
				}
			}
			break;

		// Clear
		case iid.none:
		default:
			setInspectorTitle("", redraw_inspector);
			setInspectorCost("", redraw_inspector);
			setInspectorText("", redraw_inspector);
			setInspectorDivider(false, redraw_inspector);
			setInspectorSubtext("", redraw_inspector);
	}

	current_inspector_id = id;
	let inspector_height = "-=" + $("#inspector_box").height() + "px";
	$("#log_box").css("height", "100vh").css("height", "-=49px").css("height", inspector_height);
}