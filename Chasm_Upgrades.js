// Chasm Upgrades
	// The Upgrade shop contains upgrades which the player can purchase.
	// To add a new Upgrade, do the following:
	//
	// 1. Add upgrade to uid table							[_UPGRADE_ID]
	// 2. Add upgrade cost to init function					[initUpgrades]
	// 3. (optional) Add purchase-time functionality		[buy_upgrade]
	// 4. Add upgrade to research map						[generateResearchMap]
	// 5. (optional) Add upgrade handling to game task		[game_tick]

class _UPGRADE_ID {
	upgrade_first					= 0x0000;

	// Upgrade list
	upgrade_earth_density_1 		= 0x0000;	// 2x Earth density (4x4)
	upgrade_earth_density_2			= 0x0001;	// 2x Earth density (8x8)
	upgrade_earth_density_3			= 0x0002;	// 2x Earth density (16x16)
	upgrade_earth_density_4			= 0x0003;	// 2x Earth density (32x32)
	upgrade_earth_density_5			= 0x0004;	// 2x Earth density (64x64)
	upgrade_earth_value_1			= 0x0005;	// Value +0.01
	upgrade_earth_metals_1			= 0x0006;	// Gather copper

	upgrade_water_storage			= 0x0007;	// Unlock water storage

	upgrade_workers_1				= 0x0008;	// +1 Worker

	upgrade_count					= 0x0009;
} var uid = new _UPGRADE_ID();

class _CHASM_UPGRADE {
	name;
	upgrade_image = "images/tile_research_upgrade_unknown.png";
	unlocked = false;
	cost = new currency_value_map([]);
	prerequisites;

	constructor(name, upgrade_image, cost) {
		this.name = name;
		if (upgrade_image !== undefined && upgrade_image != "") {
			this.upgrade_image = upgrade_image;
		}
		this.cost = new currency_value_map(cost);
	}

	buy() {
		if (this.affordable()) {
			for (let i = 0; i < cid.currency_count; i++) {
				chasm_currency[i].resource.spend(this.cost.map[i]);
			}
	
			this.unlock();
			return true;
		}

		return false;
	}

	affordable() {
		if (this.unlocked == false) {
			if (this.prerequisites !== undefined) {
				for (let i = 0; i < this.prerequisites.length; i++) {
					if (!chasm_upgrades[this.prerequisites[i]].unlocked) {
						return false;
					}
				}
			}

			for (let i = 0; i < cid.currency_count; i++) {
				if (chasm_currency[i].resource.current.lt(this.cost.map[i])) {
					return false;
				}
			}

			return true;
		}

		return true;
	}

	unlock() {
		this.unlocked = true;
	}

	lock() {
		this.unlocked = false;
	}

	register_prerequisites(prerequisites) {
		this.prerequisites = prerequisites;
	}
}

var chasm_upgrades = new Array(uid.upgrade_count);

function initUpgrades() {
	for (let i = uid.upgrade_first; i < uid.upgrade_count; i++) {
		switch(i) {
			case uid.upgrade_earth_density_1:
				chasm_upgrades[i] = new _CHASM_UPGRADE(
					"upgrade_earth_density_1",
					"images/tile_research_earth_density_1.png",
					[
					0.4,	// Particles
					0,		// Strands
					0,		// Spirit
					0,		// Soul
				]);
				break;

			case uid.upgrade_earth_density_2:
				chasm_upgrades[i] = new _CHASM_UPGRADE(
					"upgrade_earth_density_2",
					"images/tile_research_upgrade_unknown.png",
					[
					1,		// Particles
					0,		// Strands
					0,		// Spirit
					0,		// Soul
				]);
				break;

			case uid.upgrade_earth_density_3:
				chasm_upgrades[i] = new _CHASM_UPGRADE(
					"upgrade_earth_density_3",
					"images/tile_research_upgrade_unknown.png",
					[
					2,		// Particles
					0,		// Strands
					0,		// Spirit
					0,		// Soul
				]);
				break;

			case uid.upgrade_earth_density_4:
				chasm_upgrades[i] = new _CHASM_UPGRADE(
					"upgrade_earth_density_4",
					"images/tile_research_upgrade_unknown.png",
					[
					3,		// Particles
					0,		// Strands
					0,		// Spirit
					0,		// Soul
				]);
				break;

			case uid.upgrade_earth_density_5:
				chasm_upgrades[i] = new _CHASM_UPGRADE(
					"upgrade_earth_density_5",
					"images/tile_research_upgrade_unknown.png",
					[
					4,		// Particles
					0,		// Strands
					0,		// Spirit
					0,		// Soul
				]);
				break;

			case uid.upgrade_earth_value_1:
				chasm_upgrades[i] = new _CHASM_UPGRADE(
					"upgrade_earth_value_1",
					"images/tile_research_upgrade_unknown.png",
					[
					0.08,	// Particles
					0,		// Strands
					0,		// Spirit
					0,		// Soul
				]);
				break;

			case uid.upgrade_water_storage:
				chasm_upgrades[i] = new _CHASM_UPGRADE(
					"upgrade_water_storage",
					"images/tile_research_upgrade_unknown.png",
					[
					20,		// Particles
					0,		// Strands
					0,		// Spirit
					0,		// Soul
				]);
				break;
			
			case uid.upgrade_earth_metals_1:
				chasm_upgrades[i] = new _CHASM_UPGRADE(
					"upgrade_earth_metals_1",
					"images/tile_research_upgrade_unknown.png",
					[
					100,	// Particles
					0,		// Strands
					0,		// Spirit
					0,		// Soul
				]);
				break;
			
			case uid.upgrade_workers_1:
				chasm_upgrades[i] = new _CHASM_UPGRADE(
					"upgrade_workers_1",
					"images/tile_research_upgrade_workers_1.png",
					[
					0.08,	// Particles
					0,		// Strands
					0,		// Spirit
					0,		// Soul
				]);
				break;

			default:
				chasm_upgrades[i] = new _CHASM_UPGRADE(
					"",
					"images/tile_research_upgrade_unknown.png",
					[
					0,		// Particles
					0,		// Strands
					0,		// Spirit
					0,		// Soul
				]);
		}
	}

	drawResearchMap();
}

function lock_all_upgrades() {
	for (let i = uid.upgrade_first; i < uid.upgrade_count; i++) {
		chasm_upgrades[i].lock();
	}
}

function buy_upgrade(upgrade_id) {
	if (chasm_upgrades[upgrade_id].buy()) {
		switch (upgrade_id) {
			case uid.upgrade_earth_density_1:
				chasm_storage[sid.storage_earth].brick_h = chasm_storage[sid.storage_earth].brick_h / 2;
				chasm_storage[sid.storage_earth].brick_w = chasm_storage[sid.storage_earth].brick_w / 2;
				earth.setCap((chasm_storage[sid.storage_earth].canvas_w * chasm_storage[sid.storage_earth].canvas_h) / (chasm_storage[sid.storage_earth].brick_w * chasm_storage[sid.storage_earth].brick_h));
				chasm_storage[sid.storage_earth].clear();
				break;

			case uid.upgrade_earth_density_2:
				chasm_storage[sid.storage_earth].brick_h = chasm_storage[sid.storage_earth].brick_h / 2;
				chasm_storage[sid.storage_earth].brick_w = chasm_storage[sid.storage_earth].brick_w / 2;
				earth.setCap((chasm_storage[sid.storage_earth].canvas_w * chasm_storage[sid.storage_earth].canvas_h) / (chasm_storage[sid.storage_earth].brick_w * chasm_storage[sid.storage_earth].brick_h));
				chasm_storage[sid.storage_earth].clear();
				break;

			case uid.upgrade_earth_density_3:
				chasm_storage[sid.storage_earth].brick_h = chasm_storage[sid.storage_earth].brick_h / 2;
				chasm_storage[sid.storage_earth].brick_w = chasm_storage[sid.storage_earth].brick_w / 2;
				earth.setCap((chasm_storage[sid.storage_earth].canvas_w * chasm_storage[sid.storage_earth].canvas_h) / (chasm_storage[sid.storage_earth].brick_w * chasm_storage[sid.storage_earth].brick_h));
				chasm_storage[sid.storage_earth].clear();
				break;

			case uid.upgrade_earth_density_4:
				chasm_storage[sid.storage_earth].brick_h = chasm_storage[sid.storage_earth].brick_h / 2;
				chasm_storage[sid.storage_earth].brick_w = chasm_storage[sid.storage_earth].brick_w / 2;
				earth.setCap((chasm_storage[sid.storage_earth].canvas_w * chasm_storage[sid.storage_earth].canvas_h) / (chasm_storage[sid.storage_earth].brick_w * chasm_storage[sid.storage_earth].brick_h));
				chasm_storage[sid.storage_earth].clear();
				break;

			case uid.upgrade_earth_density_5:
				chasm_storage[sid.storage_earth].brick_h = chasm_storage[sid.storage_earth].brick_h / 2;
				chasm_storage[sid.storage_earth].brick_w = chasm_storage[sid.storage_earth].brick_w / 2;
				earth.setCap((chasm_storage[sid.storage_earth].canvas_w * chasm_storage[sid.storage_earth].canvas_h) / (chasm_storage[sid.storage_earth].brick_w * chasm_storage[sid.storage_earth].brick_h));
				chasm_storage[sid.storage_earth].clear();
				break;

			case uid.upgrade_water_storage:
				$("#water_box").css("display", "block");
				break;

			case uid.upgrade_earth_metals_1:
				break;

			case uid.upgrade_workers_1:
				$("#water_drop_menu").fadeIn(400);
				chasm_currency[cid.currency_workers].resource.gain(1);
				break;
			
			default:
		}
	}
}

class _TILE_ID {
	tile_first						= 0x0000;

	// Tile list
	tile_none 						= 0x0000;
	tile_connect_ud 				= 0x0001;	// up down
	tile_connect_ur 				= 0x0002;	// up right
	tile_connect_ul 				= 0x0003;	// up left
	tile_connect_lr 				= 0x0004;	// left right
	tile_connect_ld 				= 0x0005;	// left down
	tile_connect_rd 				= 0x0006;	// right down
	tile_connect_ulr				= 0x0007;	// up left right
	tile_connect_uld				= 0x0008;	// up left down
	tile_connect_urd				= 0x0009;	// up right down
	tile_connect_lrd				= 0x000a;	// left right down
	tile_connect_ulrd				= 0x000b;	// up left right down
	tile_node						= 0x000c;

	tile_count						= 0x000d;
} var tid = new _TILE_ID();

// Upgrade menu layout
let upgrade_menu_width 	= 600;
let upgrade_tile_width 	= 40;
let upgrade_menu_rows 	= 30;
let upgrade_menu_cols 	= upgrade_menu_width / upgrade_tile_width;
let upgrade_map_size	= upgrade_menu_cols * upgrade_menu_rows;

let upgrade_map = new Array(upgrade_map_size);

let research_bkg_header = "<div class = 'flex' style = 'width: " + upgrade_menu_width + "px; background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(\"./images/research_bkg.png\");'>";
let research_bkg_footer = "</div>";

let tile_div_header = "<div id = 'research_tile_";
let tile_div_style_core = "' style = 'position: relative; width: " + upgrade_tile_width + "px; height: " + upgrade_tile_width + "px;";
let tile_div_style_node = " cursor: pointer;";
let tile_div_style_footer = "'>";
let tile_div_footer = "</div>";

let image_header = "<img src = '";
let image_style_core = "' class = 'pixelart' style = 'position: absolute; left: 0px; top: 0px; pointer-events: none;";
let image_style_purchased = " filter: hue-rotate(90deg) brightness(1.5);";
let image_style_affordable = " filter: hue-rotate(65deg) brightness(1.9);";
let image_footer = "' width = '" + upgrade_tile_width + "' height = '" + upgrade_tile_width + "' draggable = 'false'></img>";

class Research_Tile {
	tile_id = tid.tile_none;
	upgrade_id = uid.upgrade_count;
	upgrade_triggers_1;
	upgrade_triggers_2;

	coordinate;

	constructor(coordinate) {
		this.coordinate = coordinate;
	}

	assign_tile(tile_id, upgrade_id, upgrade_triggers_1, upgrade_triggers_2) {
		if (this.tile_id == tid.tile_none && this.upgrade_id) {
			this.tile_id = tile_id;
			this.upgrade_id = upgrade_id;
			this.upgrade_triggers_1 = upgrade_triggers_1;
			this.upgrade_triggers_2 = upgrade_triggers_2;

			if (this.tile_id == tid.tile_node) {
				chasm_upgrades[upgrade_id].register_prerequisites(upgrade_triggers_1);
			}

			return true;
		} else {
			throw new Error("Research map generation collision");
		}
	}

	purchase_style(upgrade_array_1, upgrade_array_2) {
		// Node handling
		if (this.tile_id == tid.tile_node) {
			if (chasm_upgrades[this.upgrade_id].unlocked) {
				return image_style_purchased;
			}
		}

		// Check purchase state
		if (upgrade_array_1 !== undefined) {
			for (let i = 0; i < upgrade_array_1.length; i++) {
				if (!chasm_upgrades[upgrade_array_1[i]].unlocked) {
					return "";
				}
			}

			// Optional second upgrade array
			if (upgrade_array_2 !== undefined) {
				for (let i = 0; i < upgrade_array_2.length; i++) {
					if (!chasm_upgrades[upgrade_array_2[i]].unlocked) {
						return "";
					}
				}
			}

			// Prerequisites purchased, output style modifier
			if (this.tile_id == tid.tile_node) {
				if (chasm_upgrades[this.upgrade_id].affordable()) {
					return image_style_affordable;
				} else {
					return "";
				}
			}

			return image_style_purchased;
		}

		if (this.tile_id == tid.tile_node) {
			if (chasm_upgrades[this.upgrade_id].affordable()) {
				return image_style_affordable;
			} else {
				return "";
			}
		}

		return "";
	}

	generate_tile_frame_header() {
		let out = "";
		out += tile_div_header + this.coordinate + tile_div_style_core;
		if (this.tile_id == tid.tile_node) out += tile_div_style_node;
		out += tile_div_style_footer;
		return out;
	}

	generate_tile_content() {
		let out = "";

		switch (this.tile_id) {
			case tid.tile_connect_ud:
				out += image_header + "images/tile_research_connect_up.png" + image_style_core + this.purchase_style(this.upgrade_triggers_1) + image_footer;
				out += image_header + "images/tile_research_connect_down.png" + image_style_core + this.purchase_style(this.upgrade_triggers_1) + image_footer;
				break;

			case tid.tile_connect_ur:
				out += image_header + "images/tile_research_connect_up.png" + image_style_core + this.purchase_style(this.upgrade_triggers_1) + image_footer;
				out += image_header + "images/tile_research_connect_right.png" + image_style_core + this.purchase_style(this.upgrade_triggers_1) + image_footer;
				break;

			case tid.tile_connect_ul:
				out += image_header + "images/tile_research_connect_up.png" + image_style_core + this.purchase_style(this.upgrade_triggers_1) + image_footer;
				out += image_header + "images/tile_research_connect_left.png" + image_style_core + this.purchase_style(this.upgrade_triggers_1) + image_footer;
				break;

			case tid.tile_connect_lr:
				out += image_header + "images/tile_research_connect_left.png" + image_style_core + this.purchase_style(this.upgrade_triggers_1) + image_footer;
				out += image_header + "images/tile_research_connect_right.png" + image_style_core + this.purchase_style(this.upgrade_triggers_1) + image_footer;
				break;

			case tid.tile_connect_ld:
				out += image_header + "images/tile_research_connect_left.png" + image_style_core + this.purchase_style(this.upgrade_triggers_1) + image_footer;
				out += image_header + "images/tile_research_connect_down.png" + image_style_core + this.purchase_style(this.upgrade_triggers_1) + image_footer;
				break;

			case tid.tile_connect_rd:
				out += image_header + "images/tile_research_connect_right.png" + image_style_core + this.purchase_style(this.upgrade_triggers_1) + image_footer;
				out += image_header + "images/tile_research_connect_down.png" + image_style_core + this.purchase_style(this.upgrade_triggers_1) + image_footer;
				break;

			case tid.tile_connect_ulr:
				out += image_header + "images/tile_research_connect_up.png" + image_style_core + this.purchase_style(this.upgrade_triggers_1) + image_footer;
				out += image_header + "images/tile_research_connect_left.png" + image_style_core + this.purchase_style(this.upgrade_triggers_1) + image_footer;
				out += image_header + "images/tile_research_connect_right.png" + image_style_core + this.purchase_style(this.upgrade_triggers_1) + image_footer;
				break;

			case tid.tile_connect_uld:
				out += image_header + "images/tile_research_connect_up.png" + image_style_core + this.purchase_style(this.upgrade_triggers_1) + image_footer;
				out += image_header + "images/tile_research_connect_left.png" + image_style_core + this.purchase_style(this.upgrade_triggers_1) + image_footer;
				out += image_header + "images/tile_research_connect_down.png" + image_style_core + this.purchase_style(this.upgrade_triggers_1) + image_footer;
				break;

			case tid.tile_connect_urd:
				out += image_header + "images/tile_research_connect_up.png" + image_style_core + this.purchase_style(this.upgrade_triggers_1) + image_footer;
				out += image_header + "images/tile_research_connect_right.png" + image_style_core + this.purchase_style(this.upgrade_triggers_1) + image_footer;
				out += image_header + "images/tile_research_connect_down.png" + image_style_core + this.purchase_style(this.upgrade_triggers_1) + image_footer;
				break;

			case tid.tile_connect_lrd:
				out += image_header + "images/tile_research_connect_left.png" + image_style_core + this.purchase_style(this.upgrade_triggers_1) + image_footer;
				out += image_header + "images/tile_research_connect_right.png" + image_style_core + this.purchase_style(this.upgrade_triggers_2) + image_footer;
				out += image_header + "images/tile_research_connect_down.png" + image_style_core + this.purchase_style(this.upgrade_triggers_1, this.upgrade_triggers_2) + image_footer;
				break;

			case tid.tile_connect_ulrd:
				out += image_header + "images/tile_research_connect_up.png" + image_style_core + this.purchase_style(this.upgrade_triggers_1) + image_footer;
				out += image_header + "images/tile_research_connect_left.png" + image_style_core + this.purchase_style(this.upgrade_triggers_1) + image_footer;
				out += image_header + "images/tile_research_connect_right.png" + image_style_core + this.purchase_style(this.upgrade_triggers_1) + image_footer;
				out += image_header + "images/tile_research_connect_down.png" + image_style_core + this.purchase_style(this.upgrade_triggers_1) + image_footer;
				break;

			case tid.tile_node:
				out += image_header + chasm_upgrades[this.upgrade_id].upgrade_image + image_style_core + image_footer;
				out += image_header + "images/tile_research_node.png'" + image_style_core + this.purchase_style(this.upgrade_triggers_1) + image_footer;
				break;

			case tid.tile_none:
			default:
		}

		return out;
	}
}

function drawResearchMap() {
	generateResearchMap();
	let out = "";

	// Background image
	out += research_bkg_header;
	
	// Tiles
	for (let i = 0; i < upgrade_map.length; i++) {
		out += upgrade_map[i].generate_tile_frame_header();
		out += upgrade_map[i].generate_tile_content();
		out += tile_div_footer;
	}

	out += research_bkg_footer;
	$("#research_map").html(out);

	// Register mouse events
	for (let i = 0; i < upgrade_map_size; i++) {
		if (upgrade_map[i].tile_id == tid.tile_node) {
			$("#research_tile_" + i).mouseenter(function(){showInspector(upgrade_map[i].upgrade_id + iid.offset_upgrades);});
			$("#research_tile_" + i).click(function(){buy_upgrade(upgrade_map[i].upgrade_id);});
		}
	}
}

function generateResearchMap() {
	for (let i = 0; i < upgrade_map_size; i++) {
		upgrade_map[i] = new Research_Tile(i);
	}

	// Upgrade Tree
	upgrade_map[mapColRow(2, 2)]	.assign_tile(tid.tile_node, 		uid.upgrade_earth_value_1,																							);
	upgrade_map[mapColRow(2, 3)]	.assign_tile(tid.tile_connect_ur, 	uid.upgrade_count,				[uid.upgrade_earth_value_1]															);

	upgrade_map[mapColRow(4, 2)]	.assign_tile(tid.tile_node, 		uid.upgrade_earth_density_1,																						);
	upgrade_map[mapColRow(4, 3)]	.assign_tile(tid.tile_connect_ul, 	uid.upgrade_count,				[uid.upgrade_earth_density_1]														);

	upgrade_map[mapColRow(3, 3)]	.assign_tile(tid.tile_connect_lrd, 	uid.upgrade_count,				[uid.upgrade_earth_value_1], 		[uid.upgrade_earth_density_1]					);
	upgrade_map[mapColRow(3, 4)]	.assign_tile(tid.tile_connect_ud, 	uid.upgrade_count,				[uid.upgrade_earth_value_1, uid.upgrade_earth_density_1]							);
	upgrade_map[mapColRow(3, 5)]	.assign_tile(tid.tile_connect_ur, 	uid.upgrade_count,				[uid.upgrade_earth_value_1, uid.upgrade_earth_density_1]							);
	upgrade_map[mapColRow(4, 5)]	.assign_tile(tid.tile_connect_lr, 	uid.upgrade_count,				[uid.upgrade_earth_value_1, uid.upgrade_earth_density_1]							);
	
	upgrade_map[mapColRow(8, 4)]	.assign_tile(tid.tile_node, 		uid.upgrade_workers_1,																								);
	upgrade_map[mapColRow(8, 3)]	.assign_tile(tid.tile_connect_ld, 	uid.upgrade_count,				[uid.upgrade_workers_1]																);
	upgrade_map[mapColRow(7, 3)]	.assign_tile(tid.tile_connect_rd, 	uid.upgrade_count,				[uid.upgrade_workers_1]																);
	upgrade_map[mapColRow(7, 4)]	.assign_tile(tid.tile_connect_ud, 	uid.upgrade_count,				[uid.upgrade_workers_1]																);
	upgrade_map[mapColRow(7, 5)]	.assign_tile(tid.tile_connect_ul, 	uid.upgrade_count,				[uid.upgrade_workers_1]																);
	upgrade_map[mapColRow(6, 5)]	.assign_tile(tid.tile_connect_lr, 	uid.upgrade_count,				[uid.upgrade_workers_1]																);

	upgrade_map[mapColRow(5, 5)]	.assign_tile(tid.tile_connect_lrd, 	uid.upgrade_count,				[uid.upgrade_earth_value_1, uid.upgrade_earth_density_1], [uid.upgrade_workers_1] 	);
	upgrade_map[mapColRow(5, 6)]	.assign_tile(tid.tile_connect_ud, 	uid.upgrade_count,				[uid.upgrade_earth_value_1, uid.upgrade_earth_density_1, uid.upgrade_workers_1] 	);
	upgrade_map[mapColRow(5, 7)]	.assign_tile(tid.tile_connect_ud, 	uid.upgrade_count,				[uid.upgrade_earth_value_1, uid.upgrade_earth_density_1, uid.upgrade_workers_1] 	);

	upgrade_map[mapColRow(5, 8)]	.assign_tile(tid.tile_node, 		uid.upgrade_earth_density_2,	[uid.upgrade_earth_value_1, uid.upgrade_earth_density_1, uid.upgrade_workers_1]		);
	upgrade_map[mapColRow(5, 9)]	.assign_tile(tid.tile_connect_ud, 	uid.upgrade_count,				[uid.upgrade_earth_density_2]														);

	upgrade_map[mapColRow(5, 10)]	.assign_tile(tid.tile_node, 		uid.upgrade_earth_density_3,	[uid.upgrade_earth_density_2]														);
	upgrade_map[mapColRow(5, 11)]	.assign_tile(tid.tile_connect_ud, 	uid.upgrade_count,				[uid.upgrade_earth_density_3]														);

	upgrade_map[mapColRow(5, 12)]	.assign_tile(tid.tile_node, 		uid.upgrade_earth_density_4,	[uid.upgrade_earth_density_3]														);
	upgrade_map[mapColRow(5, 13)]	.assign_tile(tid.tile_connect_ud, 	uid.upgrade_count,				[uid.upgrade_earth_density_4]														);

	upgrade_map[mapColRow(5, 14)]	.assign_tile(tid.tile_node, 		uid.upgrade_earth_density_5,	[uid.upgrade_earth_density_4]														);
	upgrade_map[mapColRow(5, 15)]	.assign_tile(tid.tile_connect_ud, 	uid.upgrade_count,				[uid.upgrade_earth_density_5]														);

	upgrade_map[mapColRow(5, 16)]	.assign_tile(tid.tile_node, 		uid.upgrade_earth_metals_1,		[uid.upgrade_earth_density_5]														);
}

function mapColRow(col, row) {
	return ((upgrade_menu_cols * row) + col);
}

function animateResearchMap() {
	for (let i = 0; i < upgrade_map_size; i++) {
		if (upgrade_map[i].tile_id != tid.tile_none) {
			let dom_target = "#research_tile_" + i;
			$(dom_target).html(upgrade_map[i].generate_tile_content());
		}
	}
}