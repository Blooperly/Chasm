// Todo:
// Look into resource sinks. Gacha style storage to recycle high-volume resources for high-rarity resources?

// +---------------------+
// | Game Initialization |
// +---------------------+

function game_init() {
	// Page Initialization
	$("#lib_chasm_version").html(lib_chasm_version());

	// Log Initialization
	chasm_log = new lib_chasm_log("log_box", 45, 0);
	chasm_log.writeColor("You stand in front of a massive, seemingly bottomless Chasm in the middle of nowhere. Some wretched urge inside you insists that you fill it up.", log_color_story);

	// Storage Initialization
	initStorage();

	// Currency Initialization
	initCurrency();

	// Upgrade Initialization
	initUpgrades();

	// Achievement Initialization
	init_achievements();
	init_milestones();

	// Animation Initialization
	chasm_storage[sid.storage_earth].init($("#earth_storage")[0].getContext("2d"));
	chasm_storage[sid.storage_water].init($("#water_storage")[0].getContext("2d"));
	animation_tick();

	// Timing Initialization
	chasm_timing_add_task_to_scheduler(game_tick, 			80, 	0);
	chasm_timing_add_task_to_scheduler(achievement_tick, 	200, 	chasm_task_flag_disable_multitick);
	chasm_timing_add_task_to_scheduler(autoSave, 			30000, 	chasm_task_flag_disable_multitick);
	chasm_timing_init(animation_tick);
	
	// Register Events
	registerInspectorEvents();

	// Load Saved Game
	loadSave();

	// Loading finished, reveal the game
	$("#game_box").css("display", "block")
}

// +----------------+
// | Task Callbacks |
// +----------------+

function animation_tick() {
	draw_resources();
	showInspector(current_inspector_id);
	animateResearchMap();

	// Earth
	chasm_storage[sid.storage_earth].draw();
	if (earth.current == earth.cap) {
		// Disable gather
		$("#earth_gather").addClass("disabled");
		$("#earth_gather_progress").removeClass(color_earth).addClass(color_disabled);

		// Enable drop
		$("#earth_drop").removeClass("disabled");
		$("#earth_drop_progress").removeClass(color_disabled).addClass(color_earth);
	} else {
		// Enable gather
		$("#earth_gather").removeClass("disabled");
		$("#earth_gather_progress").removeClass(color_disabled).addClass(color_earth);

		// Disable drop
		$("#earth_drop").addClass("disabled");
		$("#earth_drop_progress").removeClass(color_earth).addClass(color_disabled);
	}

	$("#earth_gather_progress").width(chasm_storage[sid.storage_earth].gather_progress + "%");
	$("#earth_drop_progress").width(chasm_storage[sid.storage_earth].drop_progress + "%");

	// Water
	chasm_storage[sid.storage_water].draw();
	if (water.current == water.cap) {
		// Disable gather
		$("#water_gather").addClass("disabled");
		$("#water_gather_progress").removeClass(color_water).addClass(color_disabled);

		// Enable drop
		$("#water_drop").removeClass("disabled");
		$("#water_drop_progress").removeClass(color_disabled).addClass(color_water);
	} else {
		// Enable gather
		$("#water_gather").removeClass("disabled");
		$("#water_gather_progress").removeClass(color_disabled).addClass(color_water);

		// Disable drop
		$("#water_drop").addClass("disabled");
		$("#water_drop_progress").removeClass(color_water).addClass(color_disabled);
	}

	$("#water_gather_progress").width(chasm_storage[sid.storage_water].gather_progress + "%");
	$("#water_drop_progress").width(chasm_storage[sid.storage_water].drop_progress + "%");
}

function draw_resources() {
	// Update currency
	$("#currency_particles_amount").html(DisplayNumberFormatter(chasm_currency[cid.currency_particles].resource.current, true));
	$("#currency_strands_amount").html(DisplayNumberFormatter(chasm_currency[cid.currency_strands].resource.current, true));
	$("#currency_spirit_amount").html(DisplayNumberFormatter(chasm_currency[cid.currency_spirit].resource.current, true));
	$("#currency_soul_amount").html(DisplayNumberFormatter(chasm_currency[cid.currency_soul].resource.current, true));
	$("#currency_capital_amount").html(DisplayNumberFormatter(chasm_currency[cid.currency_capital].resource.current, true));

	$("#currency_mass_amount").html(DisplayNumberFormatter(chasm_currency[cid.currency_mass].resource.current, true));
	$("#currency_workers_amount").html(chasm_currency[cid.currency_workers].resource.current.toFixed(0));
	$("#currency_machinery_amount").html(chasm_currency[cid.currency_machinery].resource.current.toFixed(0));

	// Update resources
	let earth_element_count = chasm_storage[sid.storage_earth].bitmap.element_count();
	let earth_currency_count = elementValue(earth_element_count);
	$("#element_earth_amount").html(stringifyElements(earth_element_count));
	$("#value_earth_amount").html("Value: " + stringifyValue(earth_currency_count));

	let water_element_count = chasm_storage[sid.storage_water].bitmap.element_count();
	let water_currency_count = elementValue(water_element_count);
	$("#element_water_amount").html(stringifyElements(water_element_count));
	$("#value_water_amount").html("Value: " + stringifyValue(water_currency_count));
}

function game_tick(scalar) {
	
	// Earth Gather
	if (chasm_storage[sid.storage_earth].workers_gather > 0) {
		chasm_storage[sid.storage_earth].gather_progress += chasm_storage[sid.storage_earth].workers_gather * 10 * scalar;
	}
	if (chasm_storage[sid.storage_earth].gather_progress > 100) {
		if (earth.current == earth.cap) {
			chasm_storage[sid.storage_earth].gather_progress = 100;
		} else {
			let cycles = Math.floor(chasm_storage[sid.storage_earth].gather_progress / 100);
			chasm_storage[sid.storage_earth].gather_progress -= Math.floor(cycles) * 100;
			for (let i = 0; i < cycles; i++) {
				gather(earth);
			}
		}
	}

	// Earth Drop
	if (chasm_storage[sid.storage_earth].workers_drop > 0) {
		chasm_storage[sid.storage_earth].drop_progress += chasm_storage[sid.storage_earth].workers_drop * 10 * scalar;
	}
	if (chasm_storage[sid.storage_earth].drop_progress > 100) {
		if (earth.current == earth.cap) {
			chasm_storage[sid.storage_earth].drop_progress = 0;
			drop("earth_storage");
		} else {
			chasm_storage[sid.storage_earth].drop_progress = 100;
		}
	}

	// Water Gather
	if (chasm_storage[sid.storage_water].workers_gather > 0) {
		chasm_storage[sid.storage_water].gather_progress += chasm_storage[sid.storage_water].workers_gather * 10 * scalar;
	}
	if (chasm_storage[sid.storage_water].gather_progress > 100) {
		if (water.current == water.cap) {
			chasm_storage[sid.storage_water].gather_progress = 100;
		} else {
			let cycles = Math.floor(chasm_storage[sid.storage_water].gather_progress / 100);
			chasm_storage[sid.storage_water].gather_progress -= Math.floor(cycles) * 100;
			for (let i = 0; i < cycles; i++) {
				gather(water);
			}
		}
	}

	// Water Drop
	if (chasm_storage[sid.storage_water].workers_drop > 0) {
		chasm_storage[sid.storage_water].drop_progress += chasm_storage[sid.storage_water].workers_drop * 10 * scalar;
	}
	if (chasm_storage[sid.storage_water].drop_progress > 100) {
		if (water.current == water.cap) {
			chasm_storage[sid.storage_water].drop_progress = 0;
			drop("water_storage");
		} else {
			chasm_storage[sid.storage_water].drop_progress = 100;
		}
	}
}

// +-----------------+
// | Button Handling |
// +-----------------+

function gather(resource) {
	switch (resource) {
		case earth:
			resource.gain(1);
			break;
		case water:
			resource.gain(1);
			break;
		default:
	}
}

function drop(storage) {
	switch (storage) {
		case "earth_storage":
			if(chasm_storage[sid.storage_earth].drop()) {
				currency_gain(elementValue(chasm_storage[sid.storage_earth].bitmap.element_count()));
				chasm_storage[sid.storage_earth].clear();

				if (chasm_achievements[aid.achievement_babys_first_block].unlocked == false) {
					chasm_achievements[aid.achievement_babys_first_block].unlock();
				}
			}
			break;

		case "water_storage":
			if (chasm_storage[sid.storage_water].drop()) {
				currency_gain(elementValue(chasm_storage[sid.storage_water].bitmap.element_count()));
				chasm_storage[sid.storage_water].clear();
			}
			break;
			
		default:
	}
}

// +---------------+
// | UI Management |
// +---------------+

// Chasm log
var chasm_log;

// Log colors
const log_color_story 			= "GhostWhite";
const log_color_achievement 	= "LightGreen";
const log_color_unlock 			= "LightPink";
const log_color_cheat 			= "Plum";

// Materialize Colors
const color_disabled 			= "blue-grey lighten-3";
const color_earth 				= "brown lighten-1";
const color_water 				= "blue lighten-2";

// UI Progression
var achievement_tab_hidden 		= true;
var research_tab_hidden 		= true;

// This is for instantly updating UI on game load, UI reveal animations handled by milestones
function refresh_ui() {
	// Achievements
	for (let i = aid.achievement_first; i < aid.achievement_count; i++) {
		if (chasm_achievements[i].unlocked) {
			achievement_tab_hidden = false;
			$("#tab_achievements").css("display", "block")
			break;
		}
	}
	reload_achievements();

	// Research
	if (chasm_milestones[mid.milestone_reveal_research].unlocked) {
		$("#tab_research").css("display", "block")
	}
	drawResearchMap();

	// Currency
	if (chasm_milestones[mid.milestone_reveal_currency_particles].unlocked) {
		chasm_currency[cid.currency_particles].hidden = false;
		$("#currency_particles_symbol").css("display", "block");
		$("#currency_particles_value").css("display", "block");
	}

	if (chasm_milestones[mid.milestone_reveal_currency_strands].unlocked) {
		chasm_currency[cid.currency_strands].hidden = false;
		$("#currency_strands_symbol").css("display", "block");
		$("#currency_strands_value").css("display", "block");
	}

	if (chasm_milestones[mid.milestone_reveal_currency_spirit].unlocked) {
		chasm_currency[cid.currency_spirit].hidden = false;
		$("#currency_spirit_symbol").css("display", "block");
		$("#currency_spirit_value").css("display", "block");
	}

	if (chasm_milestones[mid.milestone_reveal_currency_soul].unlocked) {
		chasm_currency[cid.currency_soul].hidden = false;
		$("#currency_soul_symbol").css("display", "block");
		$("#currency_soul_value").css("display", "block");
	}

	if (chasm_milestones[mid.milestone_reveal_currency_capital].unlocked) {
		chasm_currency[cid.currency_capital].hidden = false;
		$("#currency_capital_symbol").css("display", "block");
		$("#currency_capital_value").css("display", "block");
	}
	if (chasm_milestones[mid.milestone_reveal_currency_machinery].unlocked) {
		chasm_currency[cid.currency_machinery].hidden = false;
		$("#currency_machinery_symbol").css("display", "block");
		$("#currency_machinery_value").css("display", "block");
	}

	// Storage
	for (let i = sid.storage_first; i < sid.storage_count; i++) {
		chasm_storage[i].manage_production_resource(cid.currency_workers, 0, "gather");
		chasm_storage[i].manage_production_resource(cid.currency_workers, 0, "drop");
		chasm_storage[i].manage_production_resource(cid.currency_workers, 0, "survey");
		chasm_storage[i].manage_production_resource(cid.currency_machinery_1, 0, "machinery_1");
	}
	
	if (chasm_upgrades[uid.upgrade_earth_density_1].unlocked) {
		compress_earth();
	}
	
	if (chasm_upgrades[uid.upgrade_earth_density_2].unlocked) {
		compress_earth();
	}
	
	if (chasm_upgrades[uid.upgrade_earth_density_3].unlocked) {
		compress_earth();
	}
	
	if (chasm_upgrades[uid.upgrade_earth_density_4].unlocked) {
		compress_earth();
	}
	
	if (chasm_upgrades[uid.upgrade_earth_density_5].unlocked) {
		compress_earth();
	}
	
	if (chasm_upgrades[uid.upgrade_earth_metals_1].unlocked) {
		$("#earth_survey").css("display", "block");
	}
	
	if (chasm_upgrades[uid.upgrade_earth_depth_1].unlocked) {
		$("#earth_depth").css("display", "block");
	}

	if (chasm_upgrades[uid.upgrade_water_storage].unlocked) {
		$("#water_section").css("display", "block");
	}

	RefreshMaxDepth();
}

function RefreshMaxDepth() {
	$("#max_depth_label").html("Max Depth: " + CalculateMaxDepth());
}

function CalculateMaxDepth() {
	let max = 0;
	if (chasm_upgrades[uid.upgrade_earth_depth_1].unlocked) max++;
	return max;
}

function DisplayNumberFormatter(x, fractional) {
	if (BigNumber.isBigNumber(x)) {
		if (x.gte(10000)) {
			return x.toExponential(2).replace('e+', ' e');
		} else {
			if (fractional) {
				return x.toFixed(2);
			} else {
				return x.toFixed(0);
			}
		}
	} else {
		if (x >= 10000) {
			return x.toExponential(2).replace('e+', ' e');
		} else {
			if (fractional) {
				return x.toFixed(2);
			} else {
				return x.toFixed(0);
			}
		}
	}
}

// Materialize UI
$(document).ready(function(){
	M.AutoInit();
    $('.tabs-vertical').tabs();
	var sliders = document.querySelectorAll("input[type=range]");
    M.Range.init(sliders);
});