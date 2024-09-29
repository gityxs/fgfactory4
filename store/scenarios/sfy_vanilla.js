const sfy_vanilla = {}
export default sfy_vanilla

sfy_vanilla.id = 'sfy_vanilla'
sfy_vanilla.name = 'sfy_vanilla'
sfy_vanilla.desc = 'sfy_vanilla_desc'

sfy_vanilla.elems = [

	//__ CATEGORIES
	
	{	type:'cat',	id:'milestones',	name:'sfy_milestones',	icon:'fas fa-check-circle' },
	{	type:'cat',	id:'inventory',	name:'sfy_inventory',	icon:'fas fa-list' },
	{	type:'cat',	id:'production',	name:'sfy_production',	icon:'fas fa-industry' },
	{	type:'cat',	id:'storages',	name:'sfy_storages',	icon:'fas fa-warehouse' },
	
	//__ MILESTONES
	
	{	cat:'milestones',	group:'sfy_project',	subgroup:'project_1',	type:'milestone',	id:'phase_1',	name:'sfy_phase_1',		max:1,	build:{ result:1, costs:{ 'iron_plate_3':50 } },	reqs:{ 'order_1':1 },	},
	{	cat:'milestones',	group:'sfy_project',	subgroup:'project_1',	type:'milestone',	id:'space_elevator',	name:'sfy_space_elevator',	desc:'sfy_space_elevator_desc',	max:1,	build:{ result:1, costs:{ 'concrete':500, 'wire':1500, 'iron_plate':250, 'iron_rod':400 } },	reqs:{ 'hub_upgrade_6':1 },	},
	
	{	cat:'milestones',	group:'sfy_orders',	subgroup:'orders_1',	type:'milestone',	id:'order_3',	name:'sfy_order_3',	desc:'sfy_order_3_desc',	max:1,	build:{ result:1, costs:{ 'modular_frame':50, 'rotor':150, 'concrete':500, 'wire':1e3 } },	reqs:{ 'order_2':1 },	},
	{	cat:'milestones',	group:'sfy_orders',	subgroup:'orders_1',	type:'milestone',	id:'order_2',	name:'sfy_order_2',	desc:'sfy_order_2_desc',	max:1,	build:{ result:1, costs:{ 'cable':500, 'iron_plate_2':150, 'rotor':50 } },	reqs:{ 'phase_1':1 },	},
	{	cat:'milestones',	group:'sfy_orders',	subgroup:'orders_1',	type:'milestone',	id:'order_1',	name:'sfy_order_1',	desc:'sfy_order_1_desc',	max:1,	build:{ result:1, costs:{ 'cable':200, 'iron_plate':300, 'screw':500, 'iron_rod':200 } },	reqs:{ 'hub_upgrade_6':1 },	},
	
	{	cat:'milestones',	group:'sfy_tier',	subgroup:'tier_1',	type:'milestone',	id:'hub_upgrade_6',	name:'sfy_hub_upgrade_6',	desc:'sfy_hub_upgrade_6_desc',	max:1,	build:{ result:1, costs:{ 'concrete':50, 'wire':100, 'iron_plate':100, 'iron_rod':100 } },	reqs:{ 'hub_upgrade_5':1 },	},
	{	cat:'milestones',	group:'sfy_tier',	subgroup:'tier_1',	type:'milestone',	id:'hub_upgrade_5',	name:'sfy_hub_upgrade_5',	desc:'sfy_hub_upgrade_5_desc',	max:1,	build:{ result:1, rewards:{ 'energy':20e6 }, costs:{ 'concrete':20, 'cable':75, 'iron_rod':75 } },	reqs:{ 'hub_upgrade_4':1 },	},
	{	cat:'milestones',	group:'sfy_tier',	subgroup:'tier_1',	type:'milestone',	id:'hub_upgrade_4',	name:'sfy_hub_upgrade_4',	desc:'sfy_hub_upgrade_4_desc',	max:1,	build:{ result:1, costs:{ 'concrete':10, 'cable':50, 'iron_rod':75 } },	reqs:{ 'hub_upgrade_3':1 },	},
	{	cat:'milestones',	group:'sfy_tier',	subgroup:'tier_1',	type:'milestone',	id:'hub_upgrade_3',	name:'sfy_hub_upgrade_3',	desc:'sfy_hub_upgrade_3_desc',	max:1,	build:{ result:1, costs:{ 'wire':20, 'iron_plate':20, 'iron_rod':20 } },	reqs:{ 'hub_upgrade_2':1 },	},
	{	cat:'milestones',	group:'sfy_tier',	subgroup:'tier_1',	type:'milestone',	id:'hub_upgrade_2',	name:'sfy_hub_upgrade_2',	desc:'sfy_hub_upgrade_2_desc',	max:1,	build:{ result:1, rewards:{ 'energy':20e6 }, costs:{ 'iron_plate':10, 'iron_rod':20 } },	reqs:{ 'hub_upgrade_1':1 },	},
	{	cat:'milestones',	group:'sfy_tier',	subgroup:'tier_1',	type:'milestone',	id:'hub_upgrade_1',	name:'sfy_hub_upgrade_1',	desc:'sfy_hub_upgrade_1_desc',	max:1,	build:{ result:1, costs:{ 'iron_rod':10 } },	reqs:{ 'intro':1 },	},
	
	{	cat:'milestones',	group:'sfy_start',	subgroup:'start_1',	type:'milestone',	id:'intro',	name:'sfy_intro',	desc:'sfy_intro_desc',	max:1,	build:{ result:1 },		},
	
	//__ ITEMS
	
	{	cat:'production',	group:'sfy_power',	subgroup:'power_1',	type:'item',	id:'energy',	name:'sfy_energy',	desc:'sfy_energy_desc',		img:'/fgfactory/icons/energy.png',			reqs:{ 'hub_upgrade_2':1 },	},
													
	{	cat:'inventory',	group:'sfy_generators',	subgroup:'generators_1',	type:'item',	id:'coal_burner',	name:'sfy_coal_burner',	desc:'sfy_coal_burner_desc',		img:'/fgfactory/icons/coal_burner.png',		build:{ result:1, seconds:0.25, rewards:{ 'energy':75e6 }, costs:{ 'cable':30, 'iron_plate_2':20, 'rotor':10 }, inputs:{ 'coal':0.25, 'water':0.75 } },	reqs:{ 'order_2':1 },	},
	{	cat:'inventory',	group:'sfy_generators',	subgroup:'generators_1',	type:'item',	id:'biomass_burner',	name:'sfy_biomass_burner',	desc:'sfy_biomass_burner_desc',		img:'/fgfactory/icons/biomass_burner.png',		build:{ result:1, seconds:0.25, rewards:{ 'energy':30e6 }, costs:{ 'wire':25, 'iron_plate':15, 'iron_rod':15 }, inputs:{ 'biomass':0.1 } },	reqs:{ 'hub_upgrade_6':1 },	},
													
	{	cat:'inventory',	group:'sfy_machines',	subgroup:'machines_3',	type:'item',	id:'assembler',	name:'sfy_assembler',	desc:'sfy_assembler_desc',		img:'/fgfactory/icons/assembler.png',		build:{ result:1, seconds:0.25, costs:{ 'rotor':4, 'cable':10, 'iron_plate_2':8 } },	reqs:{ 'order_1':1 },	},
	{	cat:'inventory',	group:'sfy_machines',	subgroup:'machines_3',	type:'item',	id:'constructor',	name:'sfy_constructor',	desc:'sfy_constructor_desc',		img:'/fgfactory/icons/constructor.png',		build:{ result:1, seconds:0.25, costs:{ 'cable':8, 'iron_plate_2':2 } },	reqs:{ 'hub_upgrade_3':1 },	},

	{	cat:'inventory',	group:'sfy_machines',	subgroup:'machines_2',	type:'item',	id:'foundry',	name:'sfy_foundry',	desc:'sfy_foundry_desc',		img:'/fgfactory/icons/foundry.png',		build:{ result:1, seconds:0.25, costs:{ 'modular_frame':10, 'rotor':10, 'concrete':20 } },	reqs:{ 'order_3':1 },	},
	{	cat:'inventory',	group:'sfy_machines',	subgroup:'machines_2',	type:'item',	id:'smelter',	name:'sfy_smelter',	desc:'sfy_smelter_desc',		img:'/fgfactory/icons/smelter.png',		build:{ result:1, seconds:0.25, costs:{ 'wire':8, 'iron_rod':5 } },	reqs:{ 'hub_upgrade_2':1 },	},

	{	cat:'inventory',	group:'sfy_machines',	subgroup:'machines_1',	type:'item',	id:'water_pump',	name:'sfy_water_pump',	desc:'sfy_water_pump_desc',		img:'/fgfactory/icons/water_pump.png',		build:{ result:1, seconds:0.25, costs:{ 'copper_sheet':20, 'iron_plate_2':10, 'rotor':10 } },	reqs:{ 'order_2':1 },	},
	{	cat:'inventory',	group:'sfy_machines',	subgroup:'machines_1',	type:'item',	id:'miner_1',	name:'sfy_miner_1',	desc:'sfy_miner_1_desc',		img:'/fgfactory/icons/miner_1.png',		build:{ result:1, seconds:0.25, costs:{ 'concrete':10, 'iron_plate':10, 'iron_plate':12, 'iron_rod':4 } },	reqs:{ 'hub_upgrade_5':1 },	},
	{	cat:'inventory',	group:'sfy_machines',	subgroup:'machines_1',	type:'item',	id:'miner',	name:'sfy_miner',	desc:'sfy_miner_desc',	max:5,	img:'/fgfactory/icons/miner.png',		build:{ result:1, seconds:0.25, costs:{ 'iron_plate':2, 'iron_rod':4 } },	reqs:{ 'hub_upgrade_1':1 },	},
													
	{	cat:'inventory',	group:'sfy_containers',	subgroup:'containers_2',	type:'item',	id:'buffer',	name:'sfy_buffer',	desc:'sfy_buffer_desc',		img:'/fgfactory/icons/buffer.png',		build:{ result:1, seconds:0.25, costs:{ 'modular_frame':5, 'copper_sheet':10 } },	reqs:{ 'order_2':1 },	},

	{	cat:'inventory',	group:'sfy_containers',	subgroup:'containers_1',	type:'item',	id:'box_1',	name:'sfy_box_1',	desc:'sfy_box_1_desc',		img:'/fgfactory/icons/box_1.png',		build:{ result:1, seconds:0.25, costs:{ 'iron_plate':10, 'iron_rod':10 } },	reqs:{ 'hub_upgrade_5':1 },	},
	{	cat:'inventory',	group:'sfy_containers',	subgroup:'containers_1',	type:'item',	id:'box',	name:'sfy_box',	desc:'sfy_box_desc',	max:1,	img:'/fgfactory/icons/box.png',		build:{ result:1, seconds:0.25, costs:{ 'iron_plate':6, 'iron_rod':6 } },	reqs:{ 'hub_upgrade_1':1 },	},
													
	{	cat:'inventory',	group:'sfy_structures',	subgroup:'assembly_1',	type:'item',	id:'versatile_framework',	name:'sfy_versatile_framework',	desc:'sfy_versatile_framework_desc',	max:50,	img:'/fgfactory/icons/versatile_framework.png',	prod:0,		reqs:{ 'order_3':1 },	},
	{	cat:'inventory',	group:'sfy_assembly',	subgroup:'assembly_1',	type:'item',	id:'iron_plate_3',	name:'sfy_iron_plate_3',	desc:'sfy_iron_plate_3_desc',	max:50,	img:'/fgfactory/icons/iron_plate_3.png',	prod:0,		reqs:{ 'order_1':1 },	},

	{	cat:'inventory',	group:'sfy_structures',	subgroup:'structures_1',	type:'item',	id:'modular_frame',	name:'sfy_modular_frame',	desc:'sfy_modular_frame_desc',	max:100,	img:'/fgfactory/icons/modular_frame.png',	prod:0,	build:{ result:1, seconds:3.75, costs:{ 'iron_plate_2':3, 'iron_rod':12 } },	reqs:{ 'order_2':1 },	},
	{	cat:'inventory',	group:'sfy_structures',	subgroup:'structures_1',	type:'item',	id:'iron_plate_2',	name:'sfy_iron_plate_2',	desc:'sfy_iron_plate_2_desc',	max:100,	img:'/fgfactory/icons/iron_plate_2.png',	prod:0,	build:{ result:1, seconds:1.5, costs:{ 'screw':12, 'iron_plate':6 } },	reqs:{ 'hub_upgrade_3':1 },	},
	{	cat:'inventory',	group:'sfy_structures',	subgroup:'structures_1',	type:'item',	id:'rotor',	name:'sfy_rotor',	desc:'sfy_rotor_desc',	max:100,	img:'/fgfactory/icons/rotor.png',	prod:0,	build:{ result:1, seconds:1.5, costs:{ 'screw':25, 'iron_rod':5 } },	reqs:{ 'order_1':1 },	},
													
	{	cat:'inventory',	group:'sfy_materials',	subgroup:'materials_4',	type:'item',	id:'steel_beam',	name:'sfy_steel_beam',	desc:'sfy_steel_beam_desc',	max:200,	img:'/fgfactory/icons/steel_beam.png',	prod:0,	build:{ result:1, seconds:0.5, costs:{ 'steel_ingot':4 } },	reqs:{ 'order_3':1 },	},
	{	cat:'inventory',	group:'sfy_materials',	subgroup:'materials_4',	type:'item',	id:'steel_pipe',	name:'sfy_steel_pipe',	desc:'sfy_steel_pipe_desc',	max:200,	img:'/fgfactory/icons/steel_pipe.png',	prod:0,	build:{ result:2, seconds:0.75, costs:{ 'steel_ingot':3 } },	reqs:{ 'order_3':1 },	},
	
	{	cat:'inventory',	group:'sfy_materials',	subgroup:'materials_3',	type:'item',	id:'concrete',	name:'sfy_concrete',	desc:'sfy_concrete_desc',	max:500,	img:'/fgfactory/icons/concrete.png',	prod:0,	build:{ result:1, seconds:0.5, costs:{ 'stone':3 } },	reqs:{ 'hub_upgrade_3':1 },	},

	{	cat:'inventory',	group:'sfy_materials',	subgroup:'materials_2',	type:'item',	id:'cable',	name:'sfy_cable',	desc:'sfy_cable_desc',	max:200,	img:'/fgfactory/icons/cable.png',	prod:0,	build:{ result:1, seconds:0.25, costs:{ 'wire':2 } },	reqs:{ 'hub_upgrade_3':1 },	},
	{	cat:'inventory',	group:'sfy_materials',	subgroup:'materials_2',	type:'item',	id:'wire',	name:'sfy_wire',	desc:'sfy_wire_desc',	max:500,	img:'/fgfactory/icons/wire.png',	prod:0,	build:{ result:2, seconds:0.5, costs:{ 'copper_ingot':1 } },	reqs:{ 'hub_upgrade_2':1 },	},
	{	cat:'inventory',	group:'sfy_materials',	subgroup:'materials_2',	type:'item',	id:'copper_sheet',	name:'sfy_copper_sheet',	desc:'sfy_copper_sheet_desc',	max:100,	img:'/fgfactory/icons/copper_sheet.png',	prod:0,	build:{ result:1, seconds:0.75, costs:{ 'copper_ingot':2 } },	reqs:{ 'order_2':1 },	},

	{	cat:'inventory',	group:'sfy_materials',	subgroup:'materials_1',	type:'item',	id:'iron_plate',	name:'sfy_iron_plate',	desc:'sfy_iron_plate_desc',	max:200,	img:'/fgfactory/icons/iron_plate.png',	prod:0,	build:{ result:2, seconds:0.75, costs:{ 'iron_ingot':3 } },	reqs:{ 'hub_upgrade_1':1 },	},
	{	cat:'inventory',	group:'sfy_materials',	subgroup:'materials_1',	type:'item',	id:'screw',	name:'sfy_screw',	desc:'sfy_screw_desc',	max:500,	img:'/fgfactory/icons/screw.png',	prod:0,	build:{ result:4, seconds:0.75, costs:{ 'iron_rod':1 } },	reqs:{ 'hub_upgrade_3':1 },	},
	{	cat:'inventory',	group:'sfy_materials',	subgroup:'materials_1',	type:'item',	id:'iron_rod',	name:'sfy_iron_rod',	desc:'sfy_iron_rod_desc',	max:200,	img:'/fgfactory/icons/iron_rod.png',	prod:0,	build:{ result:1, seconds:0.25, costs:{ 'iron_ingot':1 } },	reqs:{ 'intro':1 },	},

	{	cat:'inventory',	group:'sfy_ingots',	subgroup:'ingots_2',	type:'item',	id:'steel_ingot',	name:'sfy_steel_ingot',	desc:'sfy_steel_ingot_desc',	max:100,	img:'/fgfactory/icons/steel_ingot.png',	prod:0,	build:{ result:3, seconds:1.5, costs:{ 'coal':3, 'iron_ore':3 } },	reqs:{ 'order_3':1 },	},

	{	cat:'inventory',	group:'sfy_ingots',	subgroup:'ingots_1',	type:'item',	id:'copper_ingot',	name:'sfy_copper_ingot',	desc:'sfy_copper_ingot_desc',	max:100,	img:'/fgfactory/icons/copper_ingot.png',	prod:0,	build:{ result:1, seconds:0.75, costs:{ 'copper_ore':1 } },	reqs:{ 'hub_upgrade_2':1 },	},
	{	cat:'inventory',	group:'sfy_ingots',	subgroup:'ingots_1',	type:'item',	id:'iron_ingot',	name:'sfy_iron_ingot',	desc:'sfy_iron_ingot_desc',	max:100,	img:'/fgfactory/icons/iron_ingot.png',	prod:0,	build:{ result:1, seconds:0.75, costs:{ 'iron_ore':1 } },	reqs:{ 'intro':1 },	},
													
	{	cat:'inventory',	group:'sfy_fluid',	subgroup:'fluid_1',	type:'item',	id:'water',	name:'sfy_water',	desc:'sfy_water_desc',	max:400,	img:'/fgfactory/icons/water.png',	prod:0,		reqs:{ 'order_2':1 },	},
													
	{	cat:'inventory',	group:'sfy_raw',	subgroup:'raw_2',	type:'item',	id:'coal',	name:'sfy_coal',	desc:'sfy_coal_desc',	max:100,	img:'/fgfactory/icons/coal.png',	prod:0,	build:{ result:1, seconds:0.25 },	reqs:{ 'order_2':1 },	},
	{	cat:'inventory',	group:'sfy_raw',	subgroup:'raw_2',	type:'item',	id:'stone',	name:'sfy_stone',	desc:'sfy_stone_desc',	max:100,	img:'/fgfactory/icons/stone.png',	prod:0,	build:{ result:1, seconds:0.25 },	reqs:{ 'hub_upgrade_3':1 },	},
	{	cat:'inventory',	group:'sfy_raw',	subgroup:'raw_2',	type:'item',	id:'copper_ore',	name:'sfy_copper_ore',	desc:'sfy_copper_ore_desc',	max:100,	img:'/fgfactory/icons/copper.png',	prod:0,	build:{ result:1, seconds:0.25 },	reqs:{ 'hub_upgrade_2':1 },	},
	{	cat:'inventory',	group:'sfy_raw',	subgroup:'raw_2',	type:'item',	id:'iron_ore',	name:'sfy_iron_ore',	desc:'sfy_iron_ore_desc',	max:100,	img:'/fgfactory/icons/iron.png',	prod:0,	build:{ result:1, seconds:0.25 },	reqs:{ 'intro':1 },	},

	{	cat:'inventory',	group:'sfy_raw',	subgroup:'raw_1',	type:'item',	id:'biomass',	name:'sfy_biomass',	desc:'sfy_biomass_desc',	max:200,	img:'/fgfactory/icons/biomass.png',	prod:0,	build:{ result:1, seconds:0.25 },	reqs:{ 'hub_upgrade_6':1 },	},
	
	//__ PRODUCTION
	
	{	cat:'production',	group:'assembler',	subgroup:'assembler_2',	type:'recipe',	id:'assembler_versatile_framework',	name:'sfy_versatile_framework',	img:'/fgfactory/icons/versatile_framework.png',	assign:{ id:'assembler', costs:{ 'energy':15e6 }, output:{ id:'versatile_framework', count:0.75 }, inputs:{ 'modular_frame':0.05, 'steel_beam':0.5 } },	reqs:{ 'order_3':1 },	},
	{	cat:'production',	group:'assembler',	subgroup:'assembler_2',	type:'recipe',	id:'assembler_iron_plate_3',	name:'sfy_iron_plate_3',	img:'/fgfactory/icons/iron_plate_3.png',	assign:{ id:'assembler', costs:{ 'energy':15e6 }, output:{ id:'iron_plate_3', count:0.05 }, inputs:{ 'iron_plate':0.05, 'rotor':0.05 } },	reqs:{ 'order_1':1 },	},
	
	{	cat:'production',	group:'assembler',	subgroup:'assembler_1',	type:'recipe',	id:'assembler_modular_frame',	name:'sfy_modular_frame',	img:'/fgfactory/icons/modular_frame.png',	assign:{ id:'assembler', costs:{ 'energy':15e6 }, output:{ id:'modular_frame', count:0.05 }, inputs:{ 'iron_plate_2':0.05, 'iron_rod':0.25 } },	reqs:{ 'order_2':1 },	},
	{	cat:'production',	group:'assembler',	subgroup:'assembler_1',	type:'recipe',	id:'assembler_iron_plate_2',	name:'sfy_iron_plate_2',	img:'/fgfactory/icons/iron_plate_2.png',	assign:{ id:'assembler', costs:{ 'energy':15e6 }, output:{ id:'iron_plate_2', count:0.1 }, inputs:{ 'iron_plate':0.5, 'screw':1 } },	reqs:{ 'order_1':1 },	},
	{	cat:'production',	group:'assembler',	subgroup:'assembler_1',	type:'recipe',	id:'assembler_rotor',	name:'sfy_rotor',	img:'/fgfactory/icons/rotor.png',	assign:{ id:'assembler', costs:{ 'energy':15e6 }, output:{ id:'rotor', count:0.05 }, inputs:{ 'screw':1.5, 'iron_rod':0.25 } },	reqs:{ 'order_1':1 },	},
	
	{	cat:'production',	group:'constructor',	subgroup:'constructor_4',	type:'recipe',	id:'constructor_steel_beam',	name:'sfy_steel_beam',	img:'/fgfactory/icons/steel_beam.png',	assign:{ id:'constructor', costs:{ 'energy':4e6 }, output:{ id:'steel_beam', count:0.25 }, inputs:{ 'steel_ingot':1 } },	reqs:{ 'order_3':1 },	},
	{	cat:'production',	group:'constructor',	subgroup:'constructor_4',	type:'recipe',	id:'constructor_steel_pipe',	name:'sfy_steel_pipe',	img:'/fgfactory/icons/steel_pipe.png',	assign:{ id:'constructor', costs:{ 'energy':4e6 }, output:{ id:'steel_pipe', count:0.25 }, inputs:{ 'steel_ingot':0.5 } },	reqs:{ 'order_3':1 },	},
	
	{	cat:'production',	group:'constructor',	subgroup:'constructor_3',	type:'recipe',	id:'constructor_concrete',	name:'sfy_concrete',	img:'/fgfactory/icons/concrete.png',	assign:{ id:'constructor', costs:{ 'energy':4e6 }, output:{ id:'concrete', count:0.25 }, inputs:{ 'stone':0.75 } },	reqs:{ 'hub_upgrade_3':1 },	},

	{	cat:'production',	group:'constructor',	subgroup:'constructor_2',	type:'recipe',	id:'constructor_cable',	name:'sfy_cable',	img:'/fgfactory/icons/cable.png',	assign:{ id:'constructor', costs:{ 'energy':4e6 }, output:{ id:'cable', count:0.5 }, inputs:{ 'wire':1 } },	reqs:{ 'hub_upgrade_3':1 },	},
	{	cat:'production',	group:'constructor',	subgroup:'constructor_2',	type:'recipe',	id:'constructor_wire',	name:'sfy_wire',	img:'/fgfactory/icons/wire.png',	assign:{ id:'constructor', costs:{ 'energy':4e6 }, output:{ id:'wire', count:0.5 }, inputs:{ 'copper_ingot':0.25 } },	reqs:{ 'hub_upgrade_3':1 },	},
	{	cat:'production',	group:'constructor',	subgroup:'constructor_2',	type:'recipe',	id:'constructor_copper_sheet',	name:'sfy_copper_sheet',	img:'/fgfactory/icons/copper_sheet.png',	assign:{ id:'constructor', costs:{ 'energy':4e6 }, output:{ id:'copper_sheet', count:0.1 }, inputs:{ 'copper_ingot':0.25 } },	reqs:{ 'order_2':1 },	},

	{	cat:'production',	group:'constructor',	subgroup:'constructor_1',	type:'recipe',	id:'constructor_iron_plate',	name:'sfy_iron_plate',	img:'/fgfactory/icons/iron_plate.png',	assign:{ id:'constructor', costs:{ 'energy':4e6 }, output:{ id:'iron_plate', count:0.25 }, inputs:{ 'iron_ingot':0.5 } },	reqs:{ 'hub_upgrade_3':1 },	},
	{	cat:'production',	group:'constructor',	subgroup:'constructor_1',	type:'recipe',	id:'constructor_screw',	name:'sfy_screw',	img:'/fgfactory/icons/screw.png',	assign:{ id:'constructor', costs:{ 'energy':4e6 }, output:{ id:'screw', count:0.5 }, inputs:{ 'iron_rod':0.1 } },	reqs:{ 'hub_upgrade_3':1 },	},
	{	cat:'production',	group:'constructor',	subgroup:'constructor_1',	type:'recipe',	id:'constructor_iron_rod',	name:'sfy_iron_rod',	img:'/fgfactory/icons/iron_rod.png',	assign:{ id:'constructor', costs:{ 'energy':4e6 }, output:{ id:'iron_rod', count:0.25 }, inputs:{ 'iron_ingot':0.25 } },	reqs:{ 'hub_upgrade_3':1 },	},
										
	{	cat:'production',	group:'foundry',	subgroup:'foundry_1',	type:'recipe',	id:'foundry_steel_ingot',	name:'sfy_steel_ingot',	img:'/fgfactory/icons/steel_ingot.png',	assign:{ id:'foundry', costs:{ 'energy':16e6 }, output:{ id:'steel_ingot', count:0.05 }, inputs:{ 'coal':0.75, 'iron_ore':0.75 } },	reqs:{ 'order_3':1 },	},
	
	{	cat:'production',	group:'smelter',	subgroup:'smelter_1',	type:'recipe',	id:'smelter_copper_ingot',	name:'sfy_copper_ingot',	img:'/fgfactory/icons/copper_ingot.png',	assign:{ id:'smelter', costs:{ 'energy':4e6 }, output:{ id:'copper_ingot', count:0.5 }, inputs:{ 'copper_ore':0.5 } },	reqs:{ 'hub_upgrade_2':1 },	},
	{	cat:'production',	group:'smelter',	subgroup:'smelter_1',	type:'recipe',	id:'smelter_iron_ingot',	name:'sfy_iron_ingot',	img:'/fgfactory/icons/iron_ingot.png',	assign:{ id:'smelter', costs:{ 'energy':4e6 }, output:{ id:'iron_ingot', count:0.5 }, inputs:{ 'iron_ore':0.5 } },	reqs:{ 'hub_upgrade_2':1 },	},
										
	{	cat:'production',	group:'water_pump',	subgroup:'water_pump_1',	type:'recipe',	id:'water_pump_water',	name:'sfy_water',	img:'/fgfactory/icons/water.png',	assign:{ id:'water_pump', costs:{ 'energy':20e6 }, output:{ id:'water', count:2 } },	reqs:{ 'order_2':1 },	},
	
	{	cat:'production',	group:'miner_1',	subgroup:'miner_1_2',	type:'recipe',	id:'miner_1_coal',	name:'sfy_coal',	img:'/fgfactory/icons/coal.png',	assign:{ id:'miner_1', costs:{ 'energy':5e6 }, output:{ id:'coal', count:1 } },	reqs:{ 'order_2':1 },	},
	{	cat:'production',	group:'miner_1',	subgroup:'miner_1_2',	type:'recipe',	id:'miner_1_stone',	name:'sfy_stone',	img:'/fgfactory/icons/stone.png',	assign:{ id:'miner_1', costs:{ 'energy':5e6 }, output:{ id:'stone', count:1 } },	reqs:{ 'hub_upgrade_5':1 },	},
	{	cat:'production',	group:'miner_1',	subgroup:'miner_1_2',	type:'recipe',	id:'miner_1_copper_ore',	name:'sfy_copper_ore',	img:'/fgfactory/icons/copper.png',	assign:{ id:'miner_1', costs:{ 'energy':5e6 }, output:{ id:'copper_ore', count:1 } },	reqs:{ 'hub_upgrade_5':1 },	},
	{	cat:'production',	group:'miner_1',	subgroup:'miner_1_2',	type:'recipe',	id:'miner_1_iron_ore',	name:'sfy_iron_ore',	img:'/fgfactory/icons/iron.png',	assign:{ id:'miner_1', costs:{ 'energy':5e6 }, output:{ id:'iron_ore', count:1 } },	reqs:{ 'hub_upgrade_5':1 },	},

	{	cat:'production',	group:'miner_1',	subgroup:'miner_1_1',	type:'recipe',	id:'miner_1_biomass',	name:'sfy_biomass',	img:'/fgfactory/icons/biomass.png',	assign:{ id:'miner_1', costs:{ 'energy':5e6 }, output:{ id:'biomass', count:1 } },	reqs:{ 'hub_upgrade_6':1 },	},
										
	{	cat:'production',	group:'miner',	subgroup:'miner_2',	type:'recipe',	id:'miner_coal',	name:'sfy_coal',	img:'/fgfactory/icons/coal.png',	assign:{ id:'miner', output:{ id:'coal', count:0.5 } },	reqs:{ 'order_2':1 },	},
	{	cat:'production',	group:'miner',	subgroup:'miner_2',	type:'recipe',	id:'miner_stone',	name:'sfy_stone',	img:'/fgfactory/icons/stone.png',	assign:{ id:'miner', output:{ id:'stone', count:0.5 } },	reqs:{ 'hub_upgrade_3':1 },	},
	{	cat:'production',	group:'miner',	subgroup:'miner_2',	type:'recipe',	id:'miner_copper_ore',	name:'sfy_copper_ore',	img:'/fgfactory/icons/copper.png',	assign:{ id:'miner', output:{ id:'copper_ore', count:0.5 } },	reqs:{ 'hub_upgrade_2':1 },	},
	{	cat:'production',	group:'miner',	subgroup:'miner_2',	type:'recipe',	id:'miner_iron_ore',	name:'sfy_iron_ore',	img:'/fgfactory/icons/iron.png',	assign:{ id:'miner', output:{ id:'iron_ore', count:0.5 } },	reqs:{ 'hub_upgrade_1':1 },	},

	{	cat:'production',	group:'miner',	subgroup:'miner_1',	type:'recipe',	id:'miner_biomass',	name:'sfy_biomass',	img:'/fgfactory/icons/biomass.png',	assign:{ id:'miner', output:{ id:'biomass', count:0.5 } },	reqs:{ 'hub_upgrade_6':1 },	},
	
	//__ STORAGES
	
	{	cat:'storages',	group:'buffer',	subgroup:'buffer_1',	type:'storage',	id:'buffer_water',	name:'sfy_water',	img:'/fgfactory/icons/water.png',	assign:{ id:'buffer', storage:{ id:'water', count:400 } },	reqs:{ 'order_2':1 },	},
	
	{	cat:'storages',	group:'box_1',	subgroup:'box_1_10',	type:'storage',	id:'box_1_versatile_framework',	name:'sfy_versatile_framework',	img:'/fgfactory/icons/versatile_framework.png',	assign:{ id:'box_1', storage:{ id:'versatile_framework', count:50 } },	reqs:{ 'order_3':1 },	},
	{	cat:'storages',	group:'box_1',	subgroup:'box_1_10',	type:'storage',	id:'box_1_iron_plate_3',	name:'sfy_iron_plate_3',	img:'/fgfactory/icons/iron_plate_3.png',	assign:{ id:'box_1', storage:{ id:'iron_plate_3', count:50 } },	reqs:{ 'order_1':1 },	},

	{	cat:'storages',	group:'box_1',	subgroup:'box_1_9',	type:'storage',	id:'box_1_modular_frame',	name:'sfy_modular_frame',	img:'/fgfactory/icons/modular_frame.png',	assign:{ id:'box_1', storage:{ id:'modular_frame', count:100 } },	reqs:{ 'order_2':1 },	},
	{	cat:'storages',	group:'box_1',	subgroup:'box_1_9',	type:'storage',	id:'box_1_iron_plate_2',	name:'sfy_iron_plate_2',	img:'/fgfactory/icons/iron_plate_2.png',	assign:{ id:'box_1', storage:{ id:'iron_plate_2', count:100 } },	reqs:{ 'hub_upgrade_5':1 },	},
	{	cat:'storages',	group:'box_1',	subgroup:'box_1_9',	type:'storage',	id:'box_1_rotor',	name:'sfy_rotor',	img:'/fgfactory/icons/rotor.png',	assign:{ id:'box_1', storage:{ id:'rotor', count:100 } },	reqs:{ 'order_1':1 },	},
	
	{	cat:'storages',	group:'box_1',	subgroup:'box_1_8',	type:'storage',	id:'box_1_steel_beam',	name:'sfy_steel_beam',	img:'/fgfactory/icons/steel_beam.png',	assign:{ id:'box_1', storage:{ id:'steel_beam', count:200 } },	reqs:{ 'order_3':1 },	},
	{	cat:'storages',	group:'box_1',	subgroup:'box_1_8',	type:'storage',	id:'box_1_steel_pipe',	name:'sfy_steel_pipe',	img:'/fgfactory/icons/steel_pipe.png',	assign:{ id:'box_1', storage:{ id:'steel_pipe', count:200 } },	reqs:{ 'order_3':1 },	},

	{	cat:'storages',	group:'box_1',	subgroup:'box_1_7',	type:'storage',	id:'box_1_concrete',	name:'sfy_concrete',	img:'/fgfactory/icons/concrete.png',	assign:{ id:'box_1', storage:{ id:'concrete', count:500 } },	reqs:{ 'hub_upgrade_5':1 },	},

	{	cat:'storages',	group:'box_1',	subgroup:'box_1_6',	type:'storage',	id:'box_1_cable',	name:'sfy_cable',	img:'/fgfactory/icons/cable.png',	assign:{ id:'box_1', storage:{ id:'cable', count:200 } },	reqs:{ 'hub_upgrade_5':1 },	},
	{	cat:'storages',	group:'box_1',	subgroup:'box_1_6',	type:'storage',	id:'box_1_wire',	name:'sfy_wire',	img:'/fgfactory/icons/wire.png',	assign:{ id:'box_1', storage:{ id:'wire', count:500 } },	reqs:{ 'hub_upgrade_5':1 },	},
	{	cat:'storages',	group:'box_1',	subgroup:'box_1_6',	type:'storage',	id:'box_1_copper_sheet',	name:'sfy_copper_sheet',	img:'/fgfactory/icons/copper_sheet.png',	assign:{ id:'box_1', storage:{ id:'copper_sheet', count:100 } },	reqs:{ 'order_2':1 },	},

	{	cat:'storages',	group:'box_1',	subgroup:'box_1_5',	type:'storage',	id:'box_1_iron_plate',	name:'sfy_iron_plate',	img:'/fgfactory/icons/iron_plate.png',	assign:{ id:'box_1', storage:{ id:'iron_plate', count:200 } },	reqs:{ 'hub_upgrade_5':1 },	},
	{	cat:'storages',	group:'box_1',	subgroup:'box_1_5',	type:'storage',	id:'box_1_screw',	name:'sfy_screw',	img:'/fgfactory/icons/screw.png',	assign:{ id:'box_1', storage:{ id:'screw', count:500 } },	reqs:{ 'hub_upgrade_5':1 },	},
	{	cat:'storages',	group:'box_1',	subgroup:'box_1_5',	type:'storage',	id:'box_1_iron_rod',	name:'sfy_iron_rod',	img:'/fgfactory/icons/iron_rod.png',	assign:{ id:'box_1', storage:{ id:'iron_rod', count:200 } },	reqs:{ 'hub_upgrade_5':1 },	},

	{	cat:'storages',	group:'box_1',	subgroup:'box_1_4',	type:'storage',	id:'box_1_steel_ingot',	name:'sfy_steel_ingot',	img:'/fgfactory/icons/steel_ingot.png',	assign:{ id:'box_1', storage:{ id:'steel_ingot', count:100 } },	reqs:{ 'order_3':1 },	},
	
	{	cat:'storages',	group:'box_1',	subgroup:'box_1_3',	type:'storage',	id:'box_1_copper_ingot',	name:'sfy_copper_ingot',	img:'/fgfactory/icons/copper_ingot.png',	assign:{ id:'box_1', storage:{ id:'copper_ingot', count:100 } },	reqs:{ 'hub_upgrade_5':1 },	},
	{	cat:'storages',	group:'box_1',	subgroup:'box_1_3',	type:'storage',	id:'box_1_iron_ingot',	name:'sfy_iron_ingot',	img:'/fgfactory/icons/iron_ingot.png',	assign:{ id:'box_1', storage:{ id:'iron_ingot', count:100 } },	reqs:{ 'hub_upgrade_5':1 },	},

	{	cat:'storages',	group:'box_1',	subgroup:'box_1_2',	type:'storage',	id:'box_1_coal',	name:'sfy_coal',	img:'/fgfactory/icons/coal.png',	assign:{ id:'box_1', storage:{ id:'coal', count:100 } },	reqs:{ 'order_2':1 },	},
	{	cat:'storages',	group:'box_1',	subgroup:'box_1_2',	type:'storage',	id:'box_1_stone',	name:'sfy_stone',	img:'/fgfactory/icons/stone.png',	assign:{ id:'box_1', storage:{ id:'stone', count:100 } },	reqs:{ 'hub_upgrade_5':1 },	},
	{	cat:'storages',	group:'box_1',	subgroup:'box_1_2',	type:'storage',	id:'box_1_copper_ore',	name:'sfy_copper_ore',	img:'/fgfactory/icons/copper.png',	assign:{ id:'box_1', storage:{ id:'copper_ore', count:100 } },	reqs:{ 'hub_upgrade_5':1 },	},
	{	cat:'storages',	group:'box_1',	subgroup:'box_1_2',	type:'storage',	id:'box_1_iron_ore',	name:'sfy_iron_ore',	img:'/fgfactory/icons/iron.png',	assign:{ id:'box_1', storage:{ id:'iron_ore', count:100 } },	reqs:{ 'hub_upgrade_5':1 },	},

	{	cat:'storages',	group:'box_1',	subgroup:'box_1_1',	type:'storage',	id:'box_1_biomass',	name:'sfy_biomass',	img:'/fgfactory/icons/biomass.png',	assign:{ id:'box_1', storage:{ id:'biomass', count:200 } },	reqs:{ 'hub_upgrade_6':1 },	},
										
	{	cat:'storages',	group:'box',	subgroup:'box_10',	type:'storage',	id:'box_1_versatile_framework',	name:'sfy_versatile_framework',	img:'/fgfactory/icons/versatile_framework.png',	assign:{ id:'box', storage:{ id:'versatile_framework', count:25 } },	reqs:{ 'order_3':1 },	},
	{	cat:'storages',	group:'box',	subgroup:'box_10',	type:'storage',	id:'box_iron_plate_3',	name:'sfy_iron_plate_3',	img:'/fgfactory/icons/iron_plate_3.png',	assign:{ id:'box', storage:{ id:'iron_plate_3', count:25 } },	reqs:{ 'order_1':1 },	},

	{	cat:'storages',	group:'box',	subgroup:'box_9',	type:'storage',	id:'box_modular_frame',	name:'sfy_modular_frame',	img:'/fgfactory/icons/modular_frame.png',	assign:{ id:'box', storage:{ id:'modular_frame', count:50 } },	reqs:{ 'order_2':1 },	},
	{	cat:'storages',	group:'box',	subgroup:'box_9',	type:'storage',	id:'box_iron_plate_2',	name:'sfy_iron_plate_2',	img:'/fgfactory/icons/iron_plate_2.png',	assign:{ id:'box', storage:{ id:'iron_plate_2', count:50 } },	reqs:{ 'hub_upgrade_3':1 },	},
	{	cat:'storages',	group:'box',	subgroup:'box_9',	type:'storage',	id:'box_rotor',	name:'sfy_rotor',	img:'/fgfactory/icons/rotor.png',	assign:{ id:'box', storage:{ id:'rotor', count:50 } },	reqs:{ 'order_1':1 },	},

	{	cat:'storages',	group:'box',	subgroup:'box_8',	type:'storage',	id:'box_1_steel_beam',	name:'sfy_steel_beam',	img:'/fgfactory/icons/steel_beam.png',	assign:{ id:'box', storage:{ id:'steel_beam', count:100 } },	reqs:{ 'order_3':1 },	},
	{	cat:'storages',	group:'box',	subgroup:'box_8',	type:'storage',	id:'box_1_steel_pipe',	name:'sfy_steel_pipe',	img:'/fgfactory/icons/steel_pipe.png',	assign:{ id:'box', storage:{ id:'steel_pipe', count:100 } },	reqs:{ 'order_3':1 },	},

	{	cat:'storages',	group:'box',	subgroup:'box_7',	type:'storage',	id:'box_concrete',	name:'sfy_concrete',	img:'/fgfactory/icons/concrete.png',	assign:{ id:'box', storage:{ id:'concrete', count:250 } },	reqs:{ 'hub_upgrade_3':1 },	},

	{	cat:'storages',	group:'box',	subgroup:'box_6',	type:'storage',	id:'box_cable',	name:'sfy_cable',	img:'/fgfactory/icons/cable.png',	assign:{ id:'box', storage:{ id:'cable', count:100 } },	reqs:{ 'hub_upgrade_3':1 },	},
	{	cat:'storages',	group:'box',	subgroup:'box_6',	type:'storage',	id:'box_wire',	name:'sfy_wire',	img:'/fgfactory/icons/wire.png',	assign:{ id:'box', storage:{ id:'wire', count:250 } },	reqs:{ 'hub_upgrade_2':1 },	},
	{	cat:'storages',	group:'box',	subgroup:'box_6',	type:'storage',	id:'box_copper_sheet',	name:'sfy_copper_sheet',	img:'/fgfactory/icons/copper_sheet.png',	assign:{ id:'box', storage:{ id:'copper_sheet', count:50 } },	reqs:{ 'order_2':1 },	},

	{	cat:'storages',	group:'box',	subgroup:'box_5',	type:'storage',	id:'box_iron_plate',	name:'sfy_iron_plate',	img:'/fgfactory/icons/iron_plate.png',	assign:{ id:'box', storage:{ id:'iron_plate', count:100 } },	reqs:{ 'hub_upgrade_1':1 },	},
	{	cat:'storages',	group:'box',	subgroup:'box_5',	type:'storage',	id:'box_screw',	name:'sfy_screw',	img:'/fgfactory/icons/screw.png',	assign:{ id:'box', storage:{ id:'screw', count:250 } },	reqs:{ 'hub_upgrade_3':1 },	},
	{	cat:'storages',	group:'box',	subgroup:'box_5',	type:'storage',	id:'box_iron_rod',	name:'sfy_iron_rod',	img:'/fgfactory/icons/iron_rod.png',	assign:{ id:'box', storage:{ id:'iron_rod', count:100 } },	reqs:{ 'hub_upgrade_1':1 },	},

	{	cat:'storages',	group:'box',	subgroup:'box_4',	type:'storage',	id:'box_1_steel_ingot',	name:'sfy_steel_ingot',	img:'/fgfactory/icons/steel_ingot.png',	assign:{ id:'box', storage:{ id:'steel_ingot', count:50 } },	reqs:{ 'order_3':1 },	},

	{	cat:'storages',	group:'box',	subgroup:'box_3',	type:'storage',	id:'box_copper_ingot',	name:'sfy_copper_ingot',	img:'/fgfactory/icons/copper_ingot.png',	assign:{ id:'box', storage:{ id:'copper_ingot', count:50 } },	reqs:{ 'hub_upgrade_2':1 },	},
	{	cat:'storages',	group:'box',	subgroup:'box_3',	type:'storage',	id:'box_iron_ingot',	name:'sfy_iron_ingot',	img:'/fgfactory/icons/iron_ingot.png',	assign:{ id:'box', storage:{ id:'iron_ingot', count:50 } },	reqs:{ 'hub_upgrade_1':1 },	},

	{	cat:'storages',	group:'box',	subgroup:'box_2',	type:'storage',	id:'box_coal',	name:'sfy_coal',	img:'/fgfactory/icons/coal.png',	assign:{ id:'box', storage:{ id:'coal', count:50 } },	reqs:{ 'order_2':1 },	},
	{	cat:'storages',	group:'box',	subgroup:'box_2',	type:'storage',	id:'box_stone',	name:'sfy_stone',	img:'/fgfactory/icons/stone.png',	assign:{ id:'box', storage:{ id:'stone', count:50 } },	reqs:{ 'hub_upgrade_3':1 },	},
	{	cat:'storages',	group:'box',	subgroup:'box_2',	type:'storage',	id:'box_copper_ore',	name:'sfy_copper_ore',	img:'/fgfactory/icons/copper.png',	assign:{ id:'box', storage:{ id:'copper_ore', count:50 } },	reqs:{ 'hub_upgrade_2':1 },	},
	{	cat:'storages',	group:'box',	subgroup:'box_2',	type:'storage',	id:'box_iron_ore',	name:'sfy_iron_ore',	img:'/fgfactory/icons/iron.png',	assign:{ id:'box', storage:{ id:'iron_ore', count:50 } },	reqs:{ 'hub_upgrade_1':1 },	},

	{	cat:'storages',	group:'box',	subgroup:'box_1',	type:'storage',	id:'box_biomass',	name:'sfy_biomass',	img:'/fgfactory/icons/biomass.png',	assign:{ id:'box', storage:{ id:'biomass', count:100 } },	reqs:{ 'hub_upgrade_6':1 },	},
]