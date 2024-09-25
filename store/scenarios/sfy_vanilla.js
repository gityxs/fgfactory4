const sfy_vanilla = {}
export default sfy_vanilla

sfy_vanilla.id = 'sfy_vanilla'
sfy_vanilla.name = 'sfy_vanilla'
sfy_vanilla.desc = 'sfy_vanilla_desc'

sfy_vanilla.elems = [

	//__ MILESTONES
	
	{ type:'milestone',	group:'sfy_project',	id:'space_elevator',	name:'sfy_space_elevator',	desc:'sfy_space_elevator_desc',	max:1,	build:{ result:1, costs:{ 'concrete':500, 'wire':1500, 'iron_plate':250, 'iron_rod':400 } },	reqs:{ 'hub_upgrade_6':1 } },
	
	{ type:'milestone',	group:'sfy_tier',	id:'hub_upgrade_6',	name:'sfy_hub_upgrade_6',	desc:'sfy_hub_upgrade_6_desc',	max:1,	build:{ result:1, costs:{ 'concrete':50, 'wire':100, 'iron_plate':100, 'iron_rod':100 } },	reqs:{ 'hub_upgrade_5':1 } },									
	{ type:'milestone',	group:'sfy_tier',	id:'hub_upgrade_5',	name:'sfy_hub_upgrade_5',	desc:'sfy_hub_upgrade_5_desc',	max:1,	build:{ result:1, rewards:{ 'energy':20e6 }, costs:{ 'concrete':20, 'cable':75, 'iron_rod':75 } },	reqs:{ 'hub_upgrade_4':1 } },									
	{ type:'milestone',	group:'sfy_tier',	id:'hub_upgrade_4',	name:'sfy_hub_upgrade_4',	desc:'sfy_hub_upgrade_4_desc',	max:1,	build:{ result:1, costs:{ 'concrete':10, 'cable':50, 'iron_rod':75 } },	reqs:{ 'hub_upgrade_3':1 } },									
	{ type:'milestone',	group:'sfy_tier',	id:'hub_upgrade_3',	name:'sfy_hub_upgrade_3',	desc:'sfy_hub_upgrade_3_desc',	max:1,	build:{ result:1, costs:{ 'wire':20, 'iron_plate':20, 'iron_rod':20 } },	reqs:{ 'hub_upgrade_2':1 } },									
	{ type:'milestone',	group:'sfy_tier',	id:'hub_upgrade_2',	name:'sfy_hub_upgrade_2',	desc:'sfy_hub_upgrade_2_desc',	max:1,	build:{ result:1, rewards:{ 'energy':20e6 }, costs:{ 'iron_plate':10, 'iron_rod':20 } },	reqs:{ 'hub_upgrade_1':1 } },									
	{ type:'milestone',	group:'sfy_tier',	id:'hub_upgrade_1',	name:'sfy_hub_upgrade_1',	desc:'sfy_hub_upgrade_1_desc',	max:1,	build:{ result:1, costs:{ 'iron_rod':10 } },	reqs:{ 'intro':1 } },									
	
	{ type:'milestone',	group:'sfy_start',	id:'intro',	name:'sfy_intro',	desc:'sfy_intro_desc',	max:1,	build:{ result:1 } },										
	
	//__ ITEMS
	
	{ type:'item',	group:'sfy_power',	id:'energy',	name:'sfy_energy',	desc:'sfy_energy_desc',			img:'/icons/energy.png',		reqs:{ 'hub_upgrade_2':1 } },								
	
	{ type:'item',	group:'sfy_generators',	id:'biomass_burner',	name:'sfy_biomass_burner',	desc:'sfy_biomass_burner_desc',		img:'/icons/biomass_burner.png',		build:{ result:1, seconds:0.25, rewards:{ 'energy':30e6 }, costs:{ 'wire':25, 'iron_plate':15, 'iron_rod':15 }, inputs:{ 'biomass':0.1 } },	reqs:{ 'hub_upgrade_6':1 } },								
	
	{ type:'item',	group:'sfy_machines',	id:'miner_1',	name:'sfy_miner_1',	desc:'sfy_miner_1_desc',		img:'/icons/miner_1.png',		build:{ result:1, seconds:0.25, costs:{ 'concrete':10, 'iron_plate':10, 'iron_plate':12, 'iron_rod':4 } },	reqs:{ 'hub_upgrade_5':1 } },								
	{ type:'item',	group:'sfy_machines',	id:'constructor',	name:'sfy_constructor',	desc:'sfy_constructor_desc',		img:'/icons/constructor.png',		build:{ result:1, seconds:0.25, costs:{ 'cable':8, 'iron_plate_2':2 } },	reqs:{ 'hub_upgrade_3':1 } },								
	{ type:'item',	group:'sfy_machines',	id:'smelter',	name:'sfy_smelter',	desc:'sfy_smelter_desc',		img:'/icons/smelter.png',		build:{ result:1, seconds:0.25, costs:{ 'wire':8, 'iron_rod':5 } },	reqs:{ 'hub_upgrade_2':1 } },								
	{ type:'item',	group:'sfy_machines',	id:'miner',	name:'sfy_miner',	desc:'sfy_miner_desc',	max:1,	img:'/icons/miner.png',		build:{ result:1, seconds:0.25, costs:{ 'iron_plate':2, 'iron_rod':4 } },	reqs:{ 'hub_upgrade_1':1 } },								
	
	{ type:'item',	group:'sfy_containers',	id:'box_1',	name:'sfy_box_1',	desc:'sfy_box_1_desc',		img:'/icons/box_1.png',		build:{ result:1, seconds:0.25, costs:{ 'iron_plate':10, 'iron_rod':10 } },	reqs:{ 'hub_upgrade_5':1 } },								
	{ type:'item',	group:'sfy_containers',	id:'box',	name:'sfy_box',	desc:'sfy_box_desc',	max:1,	img:'/icons/box.png',		build:{ result:1, seconds:0.25, costs:{ 'iron_plate':6, 'iron_rod':6 } },	reqs:{ 'hub_upgrade_1':1 } },								
	
	{ type:'item',	group:'sfy_materials',	id:'concrete',	name:'sfy_concrete',	desc:'sfy_concrete_desc',	max:500,	img:'/icons/concrete.png',	prod:0,	build:{ result:1, seconds:0.5, costs:{ 'stone':3 } },	reqs:{ 'hub_upgrade_3':1 } },								
	{ type:'item',	group:'sfy_materials',	id:'cable',	name:'sfy_cable',	desc:'sfy_cable_desc',	max:200,	img:'/icons/cable.png',	prod:0,	build:{ result:1, seconds:0.25, costs:{ 'wire':2 } },	reqs:{ 'hub_upgrade_3':1 } },								
	{ type:'item',	group:'sfy_materials',	id:'wire',	name:'sfy_wire',	desc:'sfy_wire_desc',	max:500,	img:'/icons/wire.png',	prod:0,	build:{ result:2, seconds:0.5, costs:{ 'copper_ingot':1 } },	reqs:{ 'hub_upgrade_2':1 } },								
	{ type:'item',	group:'sfy_materials',	id:'copper_ingot',	name:'sfy_copper_ingot',	desc:'sfy_copper_ingot_desc',	max:100,	img:'/icons/copper_ingot.png',	prod:0,	build:{ result:1, seconds:0.75, costs:{ 'copper_ore':1 } },	reqs:{ 'hub_upgrade_2':1 } },								
	{ type:'item',	group:'sfy_materials',	id:'iron_plate_2',	name:'sfy_iron_plate_2',	desc:'sfy_iron_plate_2_desc',	max:100,	img:'/icons/iron_plate_2.png',	prod:0,	build:{ result:1, seconds:1.5, costs:{ 'screw':12, 'iron_plate':6 } },	reqs:{ 'hub_upgrade_3':1 } },								
	{ type:'item',	group:'sfy_materials',	id:'iron_plate',	name:'sfy_iron_plate',	desc:'sfy_iron_plate_desc',	max:200,	img:'/icons/iron_plate.png',	prod:0,	build:{ result:2, seconds:0.75, costs:{ 'iron_ingot':3 } },	reqs:{ 'hub_upgrade_1':1 } },								
	{ type:'item',	group:'sfy_materials',	id:'screw',	name:'sfy_screw',	desc:'sfy_screw_desc',	max:500,	img:'/icons/screw.png',	prod:0,	build:{ result:4, seconds:0.75, costs:{ 'iron_rod':1 } },	reqs:{ 'hub_upgrade_3':1 } },
	{ type:'item',	group:'sfy_materials',	id:'iron_rod',	name:'sfy_iron_rod',	desc:'sfy_iron_rod_desc',	max:200,	img:'/icons/iron_rod.png',	prod:0,	build:{ result:1, seconds:0.25, costs:{ 'iron_ingot':1 } },	reqs:{ 'intro':1 } },								
	{ type:'item',	group:'sfy_materials',	id:'iron_ingot',	name:'sfy_iron_ingot',	desc:'sfy_iron_ingot_desc',	max:100,	img:'/icons/iron_ingot.png',	prod:0,	build:{ result:1, seconds:0.75, costs:{ 'iron_ore':1 } },	reqs:{ 'intro':1 } },								
	
	{ type:'item',	group:'sfy_raw',	id:'biomass',	name:'sfy_biomass',	desc:'sfy_biomass_desc',	max:200,	img:'/icons/biomass.png',	prod:0,	build:{ result:1, seconds:0.25 },	reqs:{ 'hub_upgrade_6':1 } },								
	{ type:'item',	group:'sfy_raw',	id:'stone',	name:'sfy_stone',	desc:'sfy_stone_desc',	max:100,	img:'/icons/stone.png',	prod:0,	build:{ result:1, seconds:0.25 },	reqs:{ 'hub_upgrade_3':1 } },								
	{ type:'item',	group:'sfy_raw',	id:'copper_ore',	name:'sfy_copper_ore',	desc:'sfy_copper_ore_desc',	img:'/icons/copper.png',	max:100,	prod:0,	build:{ result:1, seconds:0.25 },	reqs:{ 'hub_upgrade_2':1 } },								
	{ type:'item',	group:'sfy_raw',	id:'iron_ore',	name:'sfy_iron_ore',	desc:'sfy_iron_ore_desc',	img:'/icons/iron.png',	max:100,	prod:0,	build:{ result:1, seconds:0.25 },	reqs:{ 'intro':1 } },								
	
	//__ PRODUCTION
	
	{ type:'recipe',	id:'constructor_concrete',	name:'sfy_concrete',	assign:{ id:'constructor', costs:{ 'energy':4e6 }, output:{ id:'concrete', count:0.25 }, inputs:{ 'stone':0.75 } },	reqs:{ 'hub_upgrade_3':1 } },
	{ type:'recipe',	id:'constructor_cable',	name:'sfy_cable',	assign:{ id:'constructor', costs:{ 'energy':4e6 }, output:{ id:'cable', count:0.5 }, inputs:{ 'wire':1 } },	reqs:{ 'hub_upgrade_3':1 } },
	{ type:'recipe',	id:'constructor_wire',	name:'sfy_wire',	assign:{ id:'constructor', costs:{ 'energy':4e6 }, output:{ id:'wire', count:0.5 }, inputs:{ 'copper_ingot':0.25 } },	reqs:{ 'hub_upgrade_3':1 } },
	{ type:'recipe',	id:'constructor_screw',	name:'sfy_screw',	assign:{ id:'constructor', costs:{ 'energy':4e6 }, output:{ id:'screw', count:0.5 }, inputs:{ 'iron_rod':0.1 } },	reqs:{ 'hub_upgrade_3':1 } },
	{ type:'recipe',	id:'constructor_iron_rod',	name:'sfy_iron_rod',	assign:{ id:'constructor', costs:{ 'energy':4e6 }, output:{ id:'iron_rod', count:0.25 }, inputs:{ 'iron_ingot':0.25 } },	reqs:{ 'hub_upgrade_3':1 } },
	
	{ type:'recipe',	id:'smelter_copper_ingot',	name:'sfy_copper_ingot',	assign:{ id:'smelter', costs:{ 'energy':4e6 }, output:{ id:'copper_ingot', count:0.5 }, inputs:{ 'copper_ore':0.5 } },	reqs:{ 'hub_upgrade_2':1 } },
	{ type:'recipe',	id:'smelter_iron_ingot',	name:'sfy_iron_ingot',	assign:{ id:'smelter', costs:{ 'energy':4e6 }, output:{ id:'iron_ingot', count:0.5 }, inputs:{ 'iron_ore':0.5 } },	reqs:{ 'hub_upgrade_2':1 } },
	
	{ type:'recipe',	id:'miner_stone',	name:'sfy_stone',	assign:{ id:'miner', output:{ id:'stone', count:0.65 } },	reqs:{ 'hub_upgrade_3':1 } },										
	{ type:'recipe',	id:'miner_copper_ore',	name:'sfy_copper_ore',	assign:{ id:'miner', output:{ id:'copper_ore', count:0.65 } },	reqs:{ 'hub_upgrade_2':1 } },										
	{ type:'recipe',	id:'miner_iron_ore',	name:'sfy_iron_ore',	assign:{ id:'miner', output:{ id:'iron_ore', count:0.65 } },	reqs:{ 'hub_upgrade_1':1 } },										
	
	//__ STORAGES
	
	{ type:'storage',	id:'box_concrete',	name:'sfy_concrete',	assign:{ id:'box', storage:{ id:'concrete', count:500 } },	reqs:{ 'hub_upgrade_3':1 } },										
	{ type:'storage',	id:'box_stone',	name:'sfy_stone',	assign:{ id:'box', storage:{ id:'stone', count:100 } },	reqs:{ 'hub_upgrade_3':1 } },										
	{ type:'storage',	id:'box_cable',	name:'sfy_cable',	assign:{ id:'box', storage:{ id:'cable', count:200 } },	reqs:{ 'hub_upgrade_3':1 } },											
	{ type:'storage',	id:'box_wire',	name:'sfy_wire',	assign:{ id:'box', storage:{ id:'wire', count:500 } },	reqs:{ 'hub_upgrade_2':1 } },										
	{ type:'storage',	id:'box_copper_ingot',	name:'sfy_copper_ingot',	assign:{ id:'box', storage:{ id:'copper_ingot', count:100 } },	reqs:{ 'hub_upgrade_2':1 } },										
	{ type:'storage',	id:'box_copper_ore',	name:'sfy_copper_ore',	assign:{ id:'box', storage:{ id:'copper_ore', count:100 } },	reqs:{ 'hub_upgrade_2':1 } },										
	{ type:'storage',	id:'box_iron_plate_2',	name:'sfy_iron_plate_2',	assign:{ id:'box', storage:{ id:'iron_plate_2', count:100 } },	reqs:{ 'hub_upgrade_3':1 } },										
	{ type:'storage',	id:'box_iron_plate',	name:'sfy_iron_plate',	assign:{ id:'box', storage:{ id:'iron_plate', count:200 } },	reqs:{ 'hub_upgrade_1':1 } },										
	{ type:'storage',	id:'box_screw',	name:'sfy_screw',	assign:{ id:'box', storage:{ id:'screw', count:500 } },	reqs:{ 'hub_upgrade_3':1 } },										
	{ type:'storage',	id:'box_iron_rod',	name:'sfy_iron_rod',	assign:{ id:'box', storage:{ id:'iron_rod', count:200 } },	reqs:{ 'hub_upgrade_1':1 } },										
	{ type:'storage',	id:'box_iron_ingot',	name:'sfy_iron_ingot',	assign:{ id:'box', storage:{ id:'iron_ingot', count:100 } },	reqs:{ 'hub_upgrade_1':1 } },										
	{ type:'storage',	id:'box_iron_ore',	name:'sfy_iron_ore',	assign:{ id:'box', storage:{ id:'iron_ore', count:100 } },	reqs:{ 'hub_upgrade_1':1 } },										
]
