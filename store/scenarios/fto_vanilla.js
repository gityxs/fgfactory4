const fto_vanilla = {}
export default fto_vanilla

fto_vanilla.id = 'fto_vanilla'
fto_vanilla.title = 'fto_vanilla_title'
fto_vanilla.subtitle = 'fto_vanilla_subtitle'
fto_vanilla.desc = 'fto_vanilla_desc'

fto_vanilla.victoryReqs = { 'end':1 }

fto_vanilla.elems = [

	// MILESTONES
	
	{	type:'milestone',	group:'fto_final',	id:'rocket_launch',	name:'fto_rocket_launch',	count:0,	max:1,	},
	
	// ENERGY
	
	// BUILDINGS
	
	// ITEMS
	
	Coal
	Iron_ore
	Copper ore
	Water
	Crude_oil
	
	Iron_plate
	Copper_plate
	Steel_plate

	Petroleum_gas
	Plastic_bar
	Sulfur
	Sulfuric_acid
	Heavy_oil
	Light_oil
	Solid_fuel
	
	Copper_cable
	Electronic_circuit
	Advanced circuit
	Processing_unit
	Speed_module	
	low_density_structure
	Rocket_fuel
	Rocket_control_unit
	
	rocket_part
	
	// MANUALS

	{	type:'manual',	id:'manual_rocket_launch',	results:{ 'rocket_launch':1 },	costs:{ 'rocket_part':100 },	},
	
	// STORERS

	// PRODUCERS

]