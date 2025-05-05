const scenario_1 = {}
export default scenario_1

scenario_1.id = 'scenario_1'

scenario_1.elems = [

	{ id:'tab_items', type:'tab', label:'sc1_tab_items', icon:'i-lucide-boxes' },
	
		{ id:'entry_energy', type:'entry', parentId:'tab_items', label:'sc1_entry_energy' },
		
			{ id:'page_coal', type:'page', parentId:'entry_energy', label:'sc1_coal', itemId:'coal', link:'/item/coal' },
			{ id:'page_water', type:'page', parentId:'entry_energy', label:'sc1_water', itemId:'water', link:'/item/water' },
			{ id:'page_steam', type:'page', parentId:'entry_energy', label:'sc1_steam', itemId:'steam', link:'/item/steam' },
			{ id:'page_elec', type:'page', parentId:'entry_energy', label:'sc1_elec', itemId:'elec', link:'/item/elec' },
			
		{ id:'entry_extracted', type:'entry', parentId:'tab_items', label:'sc1_entry_extracted' },
		
			{ id:'page_stone', type:'page', parentId:'entry_extracted', label:'sc1_stone', itemId:'stone', link:'/item/stone' },
			{ id:'page_iron', type:'page', parentId:'entry_extracted', label:'sc1_iron', itemId:'iron', link:'/item/iron' },
			{ id:'page_copper', type:'page', parentId:'entry_extracted', label:'sc1_copper', itemId:'copper', link:'/item/copper' },
			{ id:'page_oil', type:'page', parentId:'entry_extracted', label:'sc1_oil', itemId:'oil', link:'/item/oil' },
			
		{ id:'entry_smelted', type:'entry', parentId:'tab_items', label:'sc1_entry_smelted' },

			{ id:'page_brick', type:'page', parentId:'entry_smelted', label:'sc1_brick', itemId:'brick', link:'/item/brick' },
			{ id:'page_iron_plate', type:'page', parentId:'entry_smelted', label:'sc1_iron_plate', itemId:'iron_plate', link:'/item/iron_plate' },
			{ id:'page_copper_plate', type:'page', parentId:'entry_smelted', label:'sc1_copper_plate', itemId:'copper_plate', link:'/item/copper_plate' },
			{ id:'page_steel', type:'page', parentId:'entry_smelted', label:'sc1_steel', itemId:'steel', link:'/item/steel' },
			
		{ id:'entry_chemistry', type:'entry', parentId:'tab_items', label:'sc1_entry_chemistry' },

			{ id:'page_petrol', type:'page', parentId:'entry_chemistry', label:'sc1_petrol', itemId:'petrol', link:'/item/petrol' },
			{ id:'page_plastic', type:'page', parentId:'entry_chemistry', label:'sc1_plastic', itemId:'plastic', link:'/item/plastic' },
			{ id:'page_sulfur', type:'page', parentId:'entry_chemistry', label:'sc1_sulfur', itemId:'sulfur', link:'/item/sulfur' },
			{ id:'page_acid', type:'page', parentId:'entry_chemistry', label:'sc1_acid', itemId:'acid', link:'/item/acid' },
			{ id:'page_heavy_oil', type:'page', parentId:'entry_chemistry', label:'sc1_heavy_oil', itemId:'heavy_oil', link:'/item/heavy_oil' },
			{ id:'page_light_oil', type:'page', parentId:'entry_chemistry', label:'sc1_light_oil', itemId:'light_oil', link:'/item/light_oil' },
			{ id:'page_solid_fuel', type:'page', parentId:'entry_chemistry', label:'sc1_solid_fuel', itemId:'solid_fuel', link:'/item/solid_fuel' },
			{ id:'page_lubricant', type:'page', parentId:'entry_chemistry', label:'sc1_lubricant', itemId:'lubricant', link:'/item/lubricant' },
			
		{ id:'entry_products', type:'entry', parentId:'tab_items', label:'sc1_entry_products' },

			{ id:'page_circuit', type:'page', parentId:'entry_products', label:'sc1_circuit', itemId:'circuit', link:'/item/circuit' },
			{ id:'page_engine_1', type:'page', parentId:'entry_products', label:'sc1_engine_1', itemId:'engine_1', link:'/item/engine_1' },
			{ id:'page_engine_2', type:'page', parentId:'entry_products', label:'sc1_engine_2', itemId:'engine_2', link:'/item/engine_2' },
			{ id:'page_rocket_fuel', type:'page', parentId:'entry_products', label:'sc1_rocket_fuel', itemId:'rocket_fuel', link:'/item/rocket_fuel' },
			{ id:'page_rocket_part', type:'page', parentId:'entry_products', label:'sc1_rocket_part', itemId:'rocket_part', link:'/item/rocket_part' },

	{ id:'tab_buildings', type:'tab', label:'sc1_tab_buildings', icon:'i-lucide-building' },
	
		{ id:'entry_storers', type:'entry', parentId:'tab_buildings', label:'sc1_entry_storers' },
		
			{ id:'page_chest', type:'page', parentId:'entry_storers', label:'sc1_chest', itemId:'chest', link:'/item/chest' },
			{ id:'page_tank', type:'page', parentId:'entry_storers', label:'sc1_tank', itemId:'tank', link:'/item/tank' },
			{ id:'page_pipe', type:'page', parentId:'entry_storers', label:'sc1_pipe', itemId:'pipe', link:'/item/pipe' },
			{ id:'page_accumulator', type:'page', parentId:'entry_storers', label:'sc1_accumulator', itemId:'accumulator', link:'/item/accumulator' },
			{ id:'page_barrel', type:'page', parentId:'entry_storers', label:'sc1_barrel', itemId:'barrel', link:'/item/barrel' },

		{ id:'entry_machines', type:'entry', parentId:'tab_buildings', label:'sc1_entry_machines' },

			{ id:'page_miner', type:'page', parentId:'entry_machines', label:'sc1_miner', itemId:'miner', link:'/item/miner' },
			{ id:'page_pump', type:'page', parentId:'entry_machines', label:'sc1_pump', itemId:'pump', link:'/item/pump' },
			{ id:'page_boiler', type:'page', parentId:'entry_machines', label:'sc1_boiler', itemId:'boiler', link:'/item/boiler' },
			{ id:'page_steam_engine', type:'page', parentId:'entry_machines', label:'sc1_steam_engine', itemId:'steam_engine', link:'/item/steam_engine' },
			{ id:'page_pumpjack', type:'page', parentId:'entry_machines', label:'sc1_pumpjack', itemId:'pumpjack', link:'/item/pumpjack' },
			{ id:'page_furnace', type:'page', parentId:'entry_machines', label:'sc1_furnace', itemId:'furnace', link:'/item/furnace' },
			{ id:'page_refinery', type:'page', parentId:'entry_machines', label:'sc1_refinery', itemId:'refinery', link:'/item/refinery' },
			{ id:'page_chemical_plant', type:'page', parentId:'entry_machines', label:'sc1_chemical_plant', itemId:'chemical_plant', link:'/item/chemical_plant' },
			{ id:'page_assembler', type:'page', parentId:'entry_machines', label:'sc1_assembler', itemId:'assembler', link:'/item/assembler' },
			{ id:'page_rocket_silo', type:'page', parentId:'entry_machines', label:'sc1_rocket_silo', itemId:'rocket_silo', link:'/item/rocket_silo' },

	//////
	
	{ id:'coal', type:'item', label:'sc1_coal', img:'/sc1/coal.png', max:50 },
		
		{ id:'coal_storage', type:'storage', itemId:'coal', assignId:'chest', stack:50 },
		{ id:'coal_manual', type:'manual', itemId:'coal', output:1, seconds:4 },
		{ id:'coal_production', type:'production', itemId:'coal', assignId:'miner', output:1, seconds:5 },
	
	{ id:'water', type:'item', label:'sc1_water', img:'/sc1/water.png', max:25000 },
		
		{ id:'water_storage', type:'storage', itemId:'water', assignId:'tank', stack:25000 },
		{ id:'water_production', type:'production', itemId:'water', assignId:'pump', output:60, seconds:1 },
	
	{ id:'steam', type:'item', label:'sc1_steam', img:'/sc1/steam.png', max:1000 },
		
		{ id:'steam_storage', type:'storage', itemId:'steam', assignId:'pipe', stack:1000 },
		{ id:'steam_production', type:'production', itemId:'steam', assignId:'boiler', output:60, seconds:1, inputs:[{ id:'coal', count:0.45 },{ id:'water', count:60 }] },
	
	{ id:'elec', type:'item', label:'sc1_elec', img:'/sc1/elec.png', max:5000 },
		
		{ id:'elec_storage', type:'storage', itemId:'elec', assignId:'accumulator', stack:5000 },
		{ id:'elec_production', type:'production', itemId:'elec', assignId:'steam_engine', output:900, seconds:1, inputs:[{ id:'steam', count:30 }] },
	
	{ id:'stone', type:'item', label:'sc1_stone', img:'/sc1/stone.png', max:50 },
		
		{ id:'stone_storage', type:'storage', itemId:'stone', assignId:'chest', stack:50 },
		{ id:'stone_manual', type:'manual', itemId:'stone', output:1, seconds:4 },
		{ id:'stone_production', type:'production', itemId:'stone', assignId:'miner', output:1, seconds:4, inputs:[{ id:'coal', count:0.15 }] },

	{ id:'iron', type:'item', label:'sc1_iron', img:'/sc1/iron.png', max:50 },
		
		{ id:'iron_storage', type:'storage', itemId:'iron', assignId:'chest', stack:50 },
		{ id:'iron_manual', type:'manual', itemId:'iron', output:1, seconds:4 },
		{ id:'iron_production', type:'production', itemId:'iron', assignId:'miner', output:1, seconds:4, inputs:[{ id:'coal', count:0.15 }] },
		
	{ id:'copper', type:'item', label:'sc1_copper', img:'/sc1/copper.png', max:50 },
		
		{ id:'copper_storage', type:'storage', itemId:'copper', assignId:'chest', stack:50 },
		{ id:'copper_manual', type:'manual', itemId:'copper', output:1, seconds:4 },
		{ id:'copper_production', type:'production', itemId:'copper', assignId:'miner', output:1, seconds:4, inputs:[{ id:'coal', count:0.15 }] },
		
	{ id:'oil', type:'item', label:'sc1_oil', img:'/sc1/oil.png', max:1000 },
		
		{ id:'oil_storage', type:'storage', itemId:'oil', assignId:'barrel', stack:1000 },
		{ id:'oil_production', type:'production', itemId:'oil', assignId:'pumpjack', output:10, seconds:1, inputs:[{ id:'elec', count:90 }] },

	{ id:'brick', type:'item', label:'sc1_brick', img:'/sc1/brick.png', max:100 },
		
		{ id:'brick_storage', type:'storage', itemId:'brick', assignId:'chest', stack:100 },
		{ id:'brick_production', type:'production', itemId:'brick', assignId:'furnace', output:1, seconds:3.2, inputs:[{ id:'coal', count:0.07 },{ id:'stone', count:2 }] },

	{ id:'iron_plate', type:'item', label:'sc1_iron_plate', img:'/sc1/iron_plate.png', max:100 },
		
		{ id:'iron_plate_storage', type:'storage', itemId:'iron_plate', assignId:'chest', stack:100 },
		{ id:'iron_plate_production', type:'production', itemId:'iron_plate', assignId:'furnace', output:1, seconds:3.2, inputs:[{ id:'coal', count:0.07 },{ id:'iron', count:1 }] },

	{ id:'copper_plate', type:'item', label:'sc1_copper_plate', img:'/sc1/copper_plate.png', max:100 },
		
		{ id:'copper_plate_storage', type:'storage', itemId:'copper_plate', assignId:'chest', stack:100 },
		{ id:'copper_plate_production', type:'production', itemId:'copper_plate', assignId:'furnace', output:1, seconds:3.2, inputs:[{ id:'coal', count:0.07 },{ id:'iron', count:1 }] },

	{ id:'steel', type:'item', label:'sc1_steel', img:'/sc1/steel.png', max:100 },
		
		{ id:'steel_storage', type:'storage', itemId:'steel', assignId:'chest', stack:100 },
		{ id:'steel_production', type:'production', itemId:'steel', assignId:'furnace', output:1, seconds:16, inputs:[{ id:'coal', count:0.36 },{ id:'iron_plate', count:5 }] },

	{ id:'petrol', type:'item', label:'sc1_petrol', img:'/sc1/petrol.png', max:1000 },
		
		{ id:'petrol_storage', type:'storage', itemId:'petrol', assignId:'barrel', stack:1000 },
		{ id:'petrol_production', type:'production', itemId:'petrol', assignId:'refinery', output:45, seconds:5, inputs:[{ id:'elec', count:2100 },{ id:'oil', count:100 }] },
		
	{ id:'plastic', type:'item', label:'sc1_plastic', img:'/sc1/plastic.png', max:100 },
		
		{ id:'plastic_storage', type:'storage', itemId:'plastic', assignId:'chest', stack:100 },
		{ id:'plastic_production', type:'production', itemId:'plastic', assignId:'chemical_plant', output:2, seconds:1, inputs:[{ id:'elec', count:210 },{ id:'coal', count:1 },{ id:'petrol', count:20 }] },
		
	{ id:'sulfur', type:'item', label:'sc1_sulfur', img:'/sc1/sulfur.png', max:50 },
		
		{ id:'sulfur_storage', type:'storage', itemId:'sulfur', assignId:'chest', stack:50 },
		{ id:'sulfur_production', type:'production', itemId:'sulfur', assignId:'chemical_plant', output:2, seconds:1, inputs:[{ id:'elec', count:210 },{ id:'water', count:30 },{ id:'petrol', count:30 }] },
		
	{ id:'acid', type:'item', label:'sc1_acid', img:'/sc1/acid.png', max:1000 },
		
		{ id:'acid_storage', type:'storage', itemId:'acid', assignId:'barrel', stack:1000 },
		{ id:'acid_production', type:'production', itemId:'acid', assignId:'chemical_plant', output:50, seconds:1, inputs:[{ id:'elec', count:210 },{ id:'water', count:100 },{ id:'iron_plate', count:1 },{ id:'sulfur', count:5 }] },
		
	{ id:'heavy_oil', type:'item', label:'sc1_heavy_oil', img:'/sc1/heavy_oil.png', max:1000 },
		
		{ id:'heavy_oil_storage', type:'storage', itemId:'heavy_oil', assignId:'barrel', stack:1000 },
		{ id:'heavy_oil_production', type:'production', itemId:'heavy_oil', assignId:'refinery', output:25, seconds:5, inputs:[{ id:'elec', count:1050 },{ id:'water', count:50 },{ id:'oil', count:100 }] },
		
	{ id:'light_oil', type:'item', label:'sc1_light_oil', img:'/sc1/light_oil.png', max:1000 },
		
		{ id:'light_oil_storage', type:'storage', itemId:'light_oil', assignId:'barrel', stack:1000 },
		{ id:'light_oil_production', type:'production', itemId:'light_oil', assignId:'refinery', output:45, seconds:5, inputs:[{ id:'elec', count:1050 },{ id:'water', count:50 },{ id:'oil', count:100 }] },
		
	{ id:'solid_fuel', type:'item', label:'sc1_solid_fuel', img:'/sc1/solid_fuel.png', max:50 },
		
		{ id:'solid_fuel_storage', type:'storage', itemId:'solid_fuel', assignId:'chest', stack:50 },
		{ id:'solid_fuel_production', type:'production', itemId:'solid_fuel', assignId:'chemical_plant', output:1, seconds:1, inputs:[{ id:'elec', count:420 },{ id:'light_oil', count:10 }] },
		
	{ id:'lubricant', type:'item', label:'sc1_lubricant', img:'/sc1/lubricant.png', max:1000 },
		
		{ id:'lubricant_storage', type:'storage', itemId:'lubricant', assignId:'barrel', stack:1000 },
		{ id:'lubricant_production', type:'production', itemId:'lubricant', assignId:'chemical_plant', output:10, seconds:1, inputs:[{ id:'elec', count:420 },{ id:'heavy_oil', count:10 }] },
		
	{ id:'circuit', type:'item', label:'sc1_circuit', img:'/sc1/circuit.png', max:100 },
	{ id:'engine_1', type:'item', label:'sc1_engine_1', img:'/sc1/engine_1.png', max:50 },
	{ id:'engine_2', type:'item', label:'sc1_engine_2', img:'/sc1/engine_2.png', max:50 },
	{ id:'rocket_fuel', type:'item', label:'sc1_rocket_fuel', img:'/sc1/rocket_fuel.png', max:20 },
	{ id:'rocket_part', type:'item', label:'sc1_rocket_part', img:'/sc1/rocket_part.png', max:5 },
	
	//////

	{ id:'chest', type:'storer', label:'sc1_chest', img:'/sc1/chest.png' },
	{ id:'tank', type:'storer', label:'sc1_tank', img:'/sc1/tank.png' },
	{ id:'pipe', type:'storer', label:'sc1_pipe', img:'/sc1/pipe.png' },
	{ id:'accumulator', type:'storer', label:'sc1_accumulator', img:'/sc1/accumulator.png' },
	{ id:'barrel', type:'storer', label:'sc1_barrel', img:'/sc1/barrel.png' },

	{ id:'miner', type:'machine', label:'sc1_miner', img:'/sc1/miner.png' },
	{ id:'pump', type:'machine', label:'sc1_pump', img:'/sc1/pump.png' },
	{ id:'boiler', type:'machine', label:'sc1_boiler', img:'/sc1/boiler.png' },
	{ id:'steam_engine', type:'machine', label:'sc1_steam_engine', img:'/sc1/steam_engine.png' },
	{ id:'pumpjack', type:'machine', label:'sc1_pumpjack', img:'/sc1/pumpjack.png' },
	{ id:'furnace', type:'machine', label:'sc1_furnace', img:'/sc1/furnace.png' },
	{ id:'refinery', type:'machine', label:'sc1_refinery', img:'/sc1/refinery.png' },
	{ id:'chemical_plant', type:'machine', label:'sc1_chemical_plant', img:'/sc1/chemical_plant.png' },
	{ id:'assembler', type:'machine', label:'sc1_assembler', img:'/sc1/assembler.png' },
	{ id:'rocket_silo', type:'machine', label:'sc1_rocket_silo', img:'/sc1/rocket_silo.png' },
]
