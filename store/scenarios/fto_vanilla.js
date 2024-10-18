const fto_vanilla = {}
export default fto_vanilla

fto_vanilla.id = 'fto_vanilla'
fto_vanilla.title = 'fto_vanilla_title'
fto_vanilla.subtitle = 'fto_vanilla_subtitle'
fto_vanilla.desc = 'fto_vanilla_desc'

fto_vanilla.victoryReqs = { 'rocket_launch':1 }

fto_vanilla.elems = [

	// MILESTONES

	{	type:'milestone',	group:'fto_final',	id:'rocket_launch',	name:'sfy_rocket_launch',	},
	
	// ENERGY
	
	{	type:'power',	id:'energy',	name:'fto_energy',	img:'/fgfactory/fto/energy.png',	},
	
	// GENERATORS

	{	type:'generator',	id:'coal_engine',	name:'sfy_coal_engine',	img:'/fgfactory/fto/coal_engine.png',	},
	{	type:'generator',	id:'solar_engine',	name:'sfy_solar_engine',	img:'/fgfactory/fto/solar_engine.png',	},
	{	type:'generator',	id:'nuclear_turbine',	name:'sfy_nuclear_turbine',	img:'/fgfactory/fto/nuclear_turbine.png',	},
	
	// BUILDINGS

	{	type:'building',	group:'fto_container',	id:'iron_chest',	name:'sfy_iron_chest',	img:'/fgfactory/fto/iron_chest.png',	},
	{	type:'building',	group:'fto_container',	id:'steel_chest',	name:'sfy_steel_chest',	img:'/fgfactory/fto/steel_chest.png',	},
	{	type:'building',	group:'fto_container',	id:'storage_tank',	name:'sfy_storage_tank',	img:'/fgfactory/fto/storage_tank.png',	},
	
	// ITEMS
	
	{	type:'item',	group:'fto_raw',	id:'coal',	name:'fto_coal',	img:'/fgfactory/fto/coal.png',	max:50,	},
	{	type:'item',	group:'fto_raw',	id:'stone',	name:'fto_stone',	img:'/fgfactory/fto/stone.png',	max:50,	},
	{	type:'item',	group:'fto_raw',	id:'iron_ore',	name:'fto_iron_ore',	img:'/fgfactory/fto/iron_ore.png',	max:50,	},
	{	type:'item',	group:'fto_raw',	id:'copper_ore',	name:'fto_copper_ore',	img:'/fgfactory/fto/copper_ore.png',	max:50,	},
	{	type:'item',	group:'fto_raw',	id:'water',	name:'fto_water',	img:'/fgfactory/fto/water.png',	max:25000,	},
	{	type:'item',	group:'fto_raw',	id:'crude_oil',	name:'fto_crude_oil',	img:'/fgfactory/fto/crude_oil.png',	max:25000,	},
	
	{	type:'item',	group:'fto_material',	id:'brick',	name:'fto_brick',	img:'/fgfactory/fto/brick.png',	max:100,	},
	{	type:'item',	group:'fto_material',	id:'iron_plate',	name:'fto_iron_plate',	img:'/fgfactory/fto/iron_plate.png',	max:100,	},
	{	type:'item',	group:'fto_material',	id:'copper_plate',	name:'fto_copper_plate',	img:'/fgfactory/fto/copper_plate.png',	max:100,	},
	{	type:'item',	group:'fto_material',	id:'steel_plate',	name:'fto_steel_plate',	img:'/fgfactory/fto/steel_plate.png',	max:100,	},
	
	{	type:'item',	group:'fto_chemistry',	id:'petroleum_gas',	name:'fto_petroleum_gas',	img:'/fgfactory/fto/petroleum_gas.png',	max:25000,	},
	{	type:'item',	group:'fto_chemistry',	id:'plastic_bar',	name:'fto_plastic_bar',	img:'/fgfactory/fto/plastic_bar.png',	max:100,	},
	{	type:'item',	group:'fto_chemistry',	id:'heavy_oil',	name:'fto_heavy_oil',	img:'/fgfactory/fto/heavy_oil.png',	max:25000,	},
	{	type:'item',	group:'fto_chemistry',	id:'light_oil',	name:'fto_light_oil',	img:'/fgfactory/fto/light_oil.png',	max:25000,	},
	{	type:'item',	group:'fto_chemistry',	id:'lubricant',	name:'fto_lubricant',	img:'/fgfactory/fto/lubricant.png',	max:25000,	},
	{	type:'item',	group:'fto_chemistry',	id:'sulfur',	name:'fto_sulfur',	img:'/fgfactory/fto/sulfur.png',	max:50,	},
	{	type:'item',	group:'fto_chemistry',	id:'sulfuric_acid',	name:'fto_sulfuric_acid',	img:'/fgfactory/fto/sulfuric_acid.png',	max:25000,	},
	{	type:'item',	group:'fto_chemistry',	id:'battery',	name:'fto_battery',	img:'/fgfactory/fto/battery.png',	max:200,	},
	{	type:'item',	group:'fto_chemistry',	id:'solid_fuel',	name:'fto_solid_fuel',	img:'/fgfactory/fto/solid_fuel.png',	max:50,	},
	
	{	type:'item',	group:'fto_component',	id:'pipe',	name:'fto_pipe',	img:'/fgfactory/fto/pipe.png',	max:100,	},
	{	type:'item',	group:'fto_component',	id:'iron_gear_wheel',	name:'fto_iron_gear_wheel',	img:'/fgfactory/fto/iron_gear_wheel.png',	max:100,	},
	{	type:'item',	group:'fto_component',	id:'copper_cable',	name:'fto_copper_cable',	img:'/fgfactory/fto/copper_cable.png',	max:200,	},
	{	type:'item',	group:'fto_component',	id:'electronic_circuit',	name:'fto_electronic_circuit',	img:'/fgfactory/fto/electronic_circuit.png',	max:200,	},
	{	type:'item',	group:'fto_component',	id:'advanced_circuit',	name:'fto_advanced_circuit',	img:'/fgfactory/fto/advanced_circuit.png',	max:200,	},
	{	type:'item',	group:'fto_component',	id:'processing_unit',	name:'fto_processing_unit',	img:'/fgfactory/fto/processing_unit.png',	max:100,	},
	{	type:'item',	group:'fto_component',	id:'speed_module',	name:'fto_speed_module',	img:'/fgfactory/fto/speed_module.png',	max:50,	},
	
	{	type:'item',	group:'fto_part',	id:'concrete',	name:'fto_concrete',	img:'/fgfactory/fto/concrete.png',	max:100,	},
	{	type:'item',	group:'fto_part',	id:'radar',	name:'fto_radar',	img:'/fgfactory/fto/radar.png',	max:50,	},
	{	type:'item',	group:'fto_part',	id:'engine_unit',	name:'fto_engine_unit',	img:'/fgfactory/fto/engine_unit.png',	max:50,	},
	{	type:'item',	group:'fto_part',	id:'electric_engine_unit',	name:'fto_electric_engine_unit',	img:'/fgfactory/fto/electric_engine_unit.png',	max:50,	},
	{	type:'item',	group:'fto_part',	id:'solar_panel',	name:'fto_solar_panel',	img:'/fgfactory/fto/solar_panel.png',	max:50,	},
	{	type:'item',	group:'fto_part',	id:'accumulator',	name:'fto_accumulator',	img:'/fgfactory/fto/accumulator.png',	max:50,	},
	{	type:'item',	group:'fto_part',	id:'low_density_structure',	name:'fto_low_density_structure',	img:'/fgfactory/fto/low_density_structure.png',	max:10,	},
	{	type:'item',	group:'fto_part',	id:'rocket_fuel',	name:'fto_rocket_fuel',	img:'/fgfactory/fto/rocket_fuel.png',	max:10,	},
	{	type:'item',	group:'fto_part',	id:'rocket_control_unit',	name:'fto_rocket_control_unit',	img:'/fgfactory/fto/rocket_control_unit.png',	max:10,	},
	
	{	type:'item',	group:'fto_final',	id:'rocket_part',	name:'fto_rocket_part',	img:'/fgfactory/fto/rocket_part.png',	max:5,	},
	{	type:'item',	group:'fto_final',	id:'satellite',	name:'fto_satellite',	img:'/fgfactory/fto/satellite.png',	max:1,	},
	
	// MANUALS

	// STORERS

	// PRODUCERS

]