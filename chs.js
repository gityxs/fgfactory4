/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "Continue": "继续",
    "Disable": "禁用",
    "FG Factory": "异星工厂网页版4",
    "from scratch. You have nothing but you could mine resources from this planet.": "从头开始。你什么都没有，但你可以从这个星球上开采资源。",
    "in the bottom bar of the screen.": "在屏幕的底部栏中。",
    "Initializing game...": "初始化游戏...",
    "Iron": "铁矿石",
    "Ironwork": "炼铁",
    "Let me teach you the first steps!": "让我教你第一步！",
    "Manual": "手动",
    "Pause": "暂停",
    "Production": "生产",
    "Rocket": "火箭",
    "Support": "支持",
    "This game is still under development so bugs and data lost could happen! Play as your own risks!": "此游戏仍在开发中，因此可能会发生错误和数据丢失！风险自负！",
    "Time Played": "游戏时长",
    "To do that you have to build a": "为此，您必须建造一个",
    "Tutorial": "教程",
    "Weapons": "武器",
    "Welcome": "欢迎",
    "With resources, you build items, machines and perform researches to unlock new items, new machines then discover the recipe to build your": "使用资源，您可以建造物品、机器并进行研究以解锁新物品，新机器然后发现配方来构建您的",
    "You could disable this tutorial. To open it again, click on the button": "您可以禁用本教程。要再次打开它，请点击按钮",
    "You finally woke up after your crash. You are on an hostile planet and you want to leave as soon as possible.": "坠机后你终于醒了。 你在一个充满敌意的星球上，你想尽快离开。",
    "button.": "按钮。",
    "Current Objective": "当前目标",
    "Iron Mining": "开采铁矿石",
    "is the first ore that you could mine manually. To manually mine ore, you just have to click on": "是您可以手动开采的第一种矿石。 要手动开采矿石，您只需点击",
    "Manually mine 5": "手动开采 5",
    "Game paused!": "游戏已暂停！",
    "Game resumed!": "游戏已恢复！",
    "Resume": "返回",
    "About": "关于",
    "and": "和",
    ". To be kept informed about other games and the future of this one, join Discord server and visit our official website.": ". 要随时了解其他游戏和这款游戏的未来，请加入 Discord 服务器并访问我们的官方网站。",
    "(productions, buildings, recipes, techs and etc ...)": "（生产、建筑、配方、技术等......）",
    "Congrats!. You unlock": "恭喜！。 你解锁了",
    "Data": "数据",
    "Discord": "Discord",
    "Export Save": "导出存档",
    "Factorio": "异星工厂",
    "Factorio Offical Site": "异星工厂官方网站",
    "Flaticon": "Flaticon",
    "Fontawesome": "Fontawesome",
    "Freddec Games": "Freddec Games",
    "Game saved in local storage!": "游戏保存在本地存储中！",
    "Hard Reset": "硬重置",
    "Icons are provided by": "图标由提供",
    "Import Save": "导入存档",
    "Iron Plate": "铁板",
    "manually. You have to build a": "手动。 你必须建造一个",
    "Masonry": "采石",
    "Options": "选项",
    "Show researched techs": "显示已研究的技术",
    "Stone": "石头",
    "Stone Furnace": "石炉",
    "Stone Mining": "开采石头",
    "tab. As you see, you cannot produce": "标签。 如您所见，您无法生产",
    "This game has been designed and developed by": "这个游戏是由设计和开发的",
    "This game is largely inspired by the game": "这个游戏很大程度上是受到游戏的启发",
    "This is still under development with bugs and maybe data lost!": "这仍在开发中，有错误，可能会丢失数据！",
    "to do that. To build a": "要做到这一点。 建立一个",
    "Wipe Local": "硬重置",
    "you have to manually mine": "你必须手动开采",
    ", you could build a": "，你可以建造一个",
    ">Basic Drill": ">基础钻",
    "Automated": "自动化",
    "Automated production": "自动化生产",
    "automatically too. To do that you have to build a": "也自动。 为此，您必须建造一个",
    "automatically, you have to produce": "自动地，你必须生产",
    "automatically. When there is not enought": "自动地。 当没有足够的时候",
    "Basic Drill": "基础钻",
    "Building": "建筑",
    "button will appear: this means there is a lack of input resource to produce automatically.": "按钮将出现：这意味着缺少自动生成的输入资源。",
    "button. Now since your": "按钮。 现在自从你的",
    "Congrats! You automated": "恭喜！ 你自动化了",
    "Furnace": "炉",
    "Iron Plate Production": "铁板生产",
    "Iron Production": "铁生产",
    "Mine manually": "手动采矿",
    "Mining Drill": "采矿钻",
    "None": "无",
    "Now with": "现在有了",
    "production": "生产",
    "production is automated, it is consuming your": "生产是自动化的，它正在消耗你的",
    "production.": "生产。",
    "production. If you want you could stop the production by clicking on": "生产。 如果你愿意，你可以通过点击停止生产",
    "So to continue to produce": "所以要继续生产",
    "the": "",
    "to automate": "自动化",
    "to have enough": "有足够的",
    "Copper": "铜矿石",
    "Copper Plate": "铜板",
    "Electronic": "电子",
    "Decrease research time": "研究时间减少",
    "Lab": "实验室",
    "Techs": "科技",
    "Researches": "研究",
    "Unlocks Assembler and Chest": "解锁组装器和箱子",
    "Assembler": "组装器",
    "Chest": "箱子",
    "Double storage": "储量翻倍",
    "Green Science": "绿瓶科技",
    "Green science": "绿瓶科技",
    "Steel Tech": "钢科技",
    "Stone Brick": "石砖",
    "Storage": "存储",
    "Unlocks Green Pack production": "解锁 绿瓶 生产",
    "Unlocks Steel production, tier 2 storages": "解锁钢生产、2 级存储",
    "Engine Tech": "引擎科技",
    "Steel Plate": "钢板",
    "Unlocks Engine production": "解锁引擎生产",
    "Green Pack": "绿瓶",
    "Green science": "绿瓶科技",
    "Green pack": "绿瓶",
    "Unlocks Concrete production": "解锁混凝土生产",
    ": one": ": 一个",
    "and to escape from this hostile planet: produce packs, perform researches, unlock new productions, produce more items!": "并逃离这个充满敌意的星球：生产包装、进行研究、解锁新产品、生产更多物品！",
    "buildings that allow you to automate packs production. So now, you know what to do to build": "允许您自动化包装生产的建筑物。所以现在，你知道如何构建",
    "chain.": "链。",
    "chains are both automated!": "链条都是自动化的！",
    "Close": "关闭",
    "Copper Production Chain": "铜生产链",
    "could perform one research at a time. So the more": "一次可以进行一项研究。所以越多",
    "Each research needs packs to be performed. Each research unlocks new productions, new buildings or new researches. THe first available research is": "每项研究都需要进行打包。每项研究都会解锁新产品、新建筑或新研究。第一个可用的研究是",
    "End of Tutorial": "教程结束",
    "Final Objective": "最终目标",
    "Good luck!": "祝你好运！",
    "Labs": "实验室",
    "Now your": "现在你的",
    "Packs and Researches": "组装和研究",
    "Perfect! Productions are automated so now we have to focus on researching new productions to build the": "完美的！制作是自动化的，所以现在我们必须专注于研究新的制作来构建",
    "Perform all researches": "进行所有研究",
    "Produce 10": "生产 10",
    "production chain is fully automated! Let's do the same for the": "生产链全自动化！让我们对",
    "production chain. Let's automate it.": "生产链。让我们自动化它。",
    "Red Packs": "红瓶",
    "Red pack": "红瓶",
    "Red Pack": "红瓶",
    "Red science": "红瓶科技",
    "Research": "研究",
    "Researches are performed in": "研究在",
    "Rocket Parts": "火箭零件",
    "Stone Production": "石材生产",
    "that will unlock assembler 1 buildings and tier 1 storages.": "这将解锁 组装器 1 建筑物和 1 阶仓库。",
    "to be able to perform researches": "能够进行研究",
    "To be kept informed about other games and the future of this one, join Discord. And if you want to support the job done, please support the Dev!": "要随时了解其他游戏以及这款游戏的未来，请加入 Discord。如果你想支持完成的工作，请支持开发！",
    "With one Lab you are able to perform researches and to produce packs.": "通过一个实验室，您可以进行研究并生产包装。",
    "you have, the more researches you could perform in the same time.": "你拥有的，你可以在同一时间进行的研究越多。",
    "You just unlocked the": "你刚刚解锁了",
    "You made a big step to escape from this hostile planet : your": "你为逃离这个充满敌意的星球迈出了一大步：你的",
    "You unlocked": "你解锁了",
    "Concrete Tech": "混凝土科技",
    "Barrel": "桶",
    "Battery": "电池",
    "Battery Tech": "电池科技",
    "Blue Pack": "蓝瓶",
    "Blue pack": "蓝瓶",
    "Blue science": "蓝瓶科技",
    "Blue Science": "蓝瓶科技",
    "Chemical Plant": "化工厂",
    "Chemistry": "化学",
    "Engine": "引擎",
    "Fluid Handling": "流体处理",
    "Heavy Oil": "重油",
    "Light Oil": "轻油",
    "Offshore Pump": "供水泵",
    "Oil": "油",
    "Oil Refinery": "炼油厂",
    "Petroleum Gas": "石油气",
    "Plastic Bar": "塑料棒",
    "Plastics": "塑料",
    "Pumpjack": "抽油机",
    "Sulfur": "硫",
    "Sulfur Tech": "硫磺科技",
    "Acid": "酸",
    "Sulfuric Acid": "硫酸",
    "Unlocks all oil productions": "解锁所有石油产品",
    "Unlocks Battery production": "解锁电池生产",
    "Unlocks Blue Pack production": "解锁蓝包生产",
    "Unlocks Plastic Bar production": "解锁塑料条生产",
    "Unlocks Solid Fuel production": "解锁固体燃料生产",
    "Unlocks Sulfur and Acid Sulfuric productions": "解锁硫磺和酸性硫酸产品",
    "Unlocks Water production": "解锁水生产",
    "Water": "水",
    "Concrete": "混凝土",
    "Electric Engine": "电动引擎",
    "Electric Engine Tech": "电动引擎科技",
    "Electronics": "电子产品",
    "Lubricant": "润滑剂",
    "Lubricant Tech": "润滑剂科技",
    "Pistol": "手枪",
    "Purple Pack": "紫瓶",
    "Purple pack": "紫瓶",
    "Purple Science": "紫瓶科技",
    "Purple science": "紫瓶科技",
    "Rocket Fuel": "火箭燃料",
    "Rocket Fuel Tech": "火箭燃料技术",
    "Rocket Part": "火箭零件",
    "Rocket Tech": "火箭科技",
    "Solid Fuel": "固体燃料",
    "Solid fuel": "固体燃料",
    "Solid fuel research": "固体燃料研究",
    "Unlocks Electric Engine production": "解锁电动发动机生产",
    "Unlocks Lubricant production": "解锁润滑油生产",
    "Unlocks Processing Unit production": "解锁处理单元的生产",
    "Unlocks Purple Pack production": "解锁 紫瓶 生产",
    "Unlocks Rocket Fuel production": "解锁火箭燃料生产",
    "Unlocks Rocket Part production": "解锁火箭零件生产",
    "Unlocks Yellow Pack production": "解锁黄瓶生产",
    "Yellow Pack": "黄瓶",
    "Yellow pack": "黄瓶",
    "Yellow Science": "黄瓶科技",
    "Yellow science": "黄瓶科技",
    "Manual production": "手动生产",
    "Processing Unit": "处理单元",
    "Rocket Silo": "火箭发射井",
    "To be informed when your device will be supported and new features will be ready, please join Discord server.": "要获知您的设备何时受支持以及新功能何时准备就绪，请加入 Discord 服务器。",
    "Your device is not supported for the moment.": "暂时不支持您的设备进行游戏。",
    "Are you sure you want to wipe your data?": "您确定要擦除游戏数据吗？",
    "Ok": "确定",
    "You will lose ALL your progress!": "您将失去所有的游戏进度，从头开始！",
    "Alpha version": "Alpha 版",
    "Alien Tech": "外星科技",
    "Explosives": "炸药",
    "Unlocks Coal and Explosive productions": "解锁煤炭和炸药生产",
    "Unlocks Pistol weapon": "解锁手枪武器",
    "Unlocks Robotics 2 research": "解锁研究 机器人学 2",
    "Alien Egg": "虫巢",
    "Aliens": "虫族",
    "Bullet": "子弹",
    "Coal": "煤",
    "Gray Pack": "灰瓶",
    "Gray pack": "灰瓶",
    "Piercing": "穿甲弹",
    "Shotgun Shell": "霰弹",
    "To collect Alien Eggs you have to build weapons.": "要收集虫巢，您必须制造武器。",
    "Construction Robot": "建造机器人",
    "Gray Science": "灰瓶科技",
    "Gray science": "灰瓶科技",
    "Rocketry": "火箭学",
    "Unlocks Combat Shotgun weapon": "解锁战斗霰弹枪武器",
    "Unlocks Construction Robot buildings": "解锁建造机器人建筑",
    "Unlocks Gray Pack production": "解锁灰瓶生产",
    "Unlocks Piercing ammunition": "解锁穿甲弹",
    "Unlocks Rocket ammunition": "解锁火箭弹药",
    "Unlocks Submachine Gun and Shotgun weapons": "解锁冲锋枪和霰弹枪武器",
    "Wood": "木头",
    "Ad Reward x2": "广告奖励 x2",
    "Explosive": "炸药",
    "Unlocks Artillery Turret weapon and Artillery Shell ammunition": "解锁炮塔武器和炮弹弹药",
    "Artillery Shell": "炮弹",
    "Arsenal": "军火库",
    "Artillery Turret": "炮塔",
    "Auto": "自动",
    "Combat Shotgun": "战斗霰弹枪",
    "Rocket Launcher": "火箭筒",
    "Shotgun": "霰弹枪",
    "Submachine Gun": "冲锋枪",
    // 二
    "Count": "数量",
    "Fabricated": "制造",
    "FG Factory 2": "FG异星工厂2",
    "Items": "物品",
    "Machines": "机器",
    "Raw": "原材料",
    "Science": "科技",
    "Stop all": "全部停止",
    "Storages": "存储",
    "Technologies": "技术",
    "To open the tutorial again, click on the button": "要再次打开教程，请点击按钮",
    "Boiler": "锅炉",
    "Burner Mining Drill": "热能采矿机",
    "Copper Cable": "铜缆",
    "Electric Mining Drill": "电力采矿机",
    "Electricity": "电力",
    "Electronic Circuit": "电子电路",
    "Firearm Magazine": "武器弹匣",
    "Iron Chest": "铁箱",
    "Iron Gear Wheel": "铁齿轮",
    "Iron Stick": "铁棒",
    "Pipe": "管道",
    "Radar": "雷达",
    "Steam": "蒸汽",
    "Steam Engine": "蒸汽机",
    "Steam engine": "蒸汽机",
    "Unused": "未使用",
    "Uranium": "铀",
    "Used": "使用中",
    "Wooden Chest": "木箱",
    "Factorio Wiki": "异星工厂（Factorio） Wiki",
    "Wipe Local Data": "清除本地数据",
    "\"ReferenceError: costs is not defined\"": "\"引用错误: costs未定义\"",
    "An error occured during game loading": "游戏加载过程中发生错误",
    "Freddec": "Freddec",
    "on Discord with following exported data": "在Discord附上以下存档数据",
    "Or you could wipe your local data to restart the game at the beginning": "或者您可以擦除本地数据以在开始时重新启动游戏",
    "To ask for help, you could contact": "要寻求帮助，您可以联系",
    "Are you sure you want to wipe your local data?": "您确定要擦除本地数据吗？",
    "You will loose ALL your progress!": "你会失去所有的进步！",
    "Consumption": "消耗",
    "Efficiency": "效率",
    "Generators": "发电机",
    "Infinity": "无限",
    "Wall": "墙",
    "Allows": "允许",
    "Copy to clipboard": "复制到剪贴板",
    "Download TXT file": "下载TXT文件",
    "Effects": "效果",
    "Electronics 1": "电子产品 1",
    "Gun Turret Tech": "炮塔技术",
    "Logistics 1": "物流 1",
    "Optics": "光学",
    "Steel Processing": "钢材加工",
    "Advanced Circuit": "高级电路",
    "Gun Turret": "炮塔",
    "Logistics 2": "物流 2",
    "Automation2": "自动化 2",
    "Electric Energy": "电能",
    "Material 1": "材料 1",
    "Solar Energy 1": "太阳能 1",
    "Steel Chest": "钢箱",
    "Heavy Armor": "重型装甲",
    "Shotgun Shells": "霰弹弹壳",
    "Piercing Magazine": "穿甲弹匣",
    "Automobilism": "汽车驾驶",
    "Railway": "铁路",
    "Car": "汽车",
    "Engine Unit": "引擎单元",
    "Rail": "铁轨",
    "Solar Panel": "太阳能板",
    "Storage Tank": "储存罐",
    "Steel Furnace": "钢炉",
    "Sulfur Processing": "硫处理",
    "Available": "可用",
    "Game data in clipboard!": "存档已复制到剪贴板！",
    "This game has been designed and built with all the love in the world by": "这个游戏是由世界上所有的爱设计和建造的",
    "This game is still under development with bugs and maybe data lost! Play as your own risks!": "该游戏仍在开发中，存在错误，可能会丢失数据！ 玩了就要自己承担丢档风险！",
    "Alpha Version": "Alpha版本",
    "Built": "已建造",
    "As a pioneer working for BIG Inc., you are dropped onto an alien planet and must harvest the planet's natural resources to construct an increasingly complex factory. After you are onboarded, it will be time to build the Space Elevator and to begin the BIG Inc. Project, satisfying BIG Inc. orders and supplying BIG Inc. with increasingly numerous and complex components for their unknown purposes.": "作为一个为 大公司 工作的先锋，你被降落到一个外星星球，必须收获这个星球的自然资源来建造一个日益复杂的工厂。在你登上飞船之后，就是时候建造太空电梯并开始大公司了。项目，满足 大公司 的订单，并为 大公司 提供越来越多和复杂的组件，用于他们未知的目的。",
    "Are you sure to want to wipe your local data?": "您确定要擦除本地数据吗？",
    "Are you sure you want to change scenario?": "确定要切换场景吗？",
    "Become a supporter": "成为支持者",
    "BIG Inc. Onboarding": "大公司新员工培训",
    "Buy me a Ko-fi": "给我买个高保真音响",
    "Change": "更改",
    "Change scenario": "改变场景",
    "Congratulations": "祝贺你",
    "Copy": "复制",
    "Costs": "成本",
    "Current": "当前",
    "Data corrupted!": "数据损坏!",
    "Download": "下载",
    "Dyson Sphere Program": "戴森球计划",
    "Employee of the Planet": "地球雇员",
    "Freepik": "Freepik",
    "Got it!": "得到它!",
    "Handcrafting": "手工制作",
    "Icons provided by": "图标来源",
    "Iron Ore": "铁矿石",
    "Iron Rod": "铁棒",
    "Let's go!": "让我们开始吧!",
    "Local data": "本地数据",
    "Local data copied in clipboard!": "本地存档已复制到剪贴板！",
    "Make a donation": "捐款",
    "No data to import!": "没有数据要导入！",
    "Offline Gains": "离线收益",
    "Results": "结果",
    "Satisfactory": "幸福工厂",
    "Scenario inspired by Satisfactory game": "受《Satisfactory》游戏启发的场景",
    "Scenarios": "场景",
    "Scenarios inspired by": "灵感来自",
    "Show completed milestones": "显示已完成的里程碑",
    "Show locked content": "显示锁定内容",
    "The Planet Crafter": "The Planet Crafter",
    "This game has been designed and built with love by Freddec. Please support him ;)": "这个游戏是由Freddec用爱设计和制作的。请支持他；)",
    "v0.19": "v0.19",
    "v0.19 - This is a prototype. Development is still in progress. Data loss and reset could happen.": "v0.19 -这是一个原型。开发仍在进行中。可能会发生数据丢失和重置。",
    "Victory": "胜利",
    "Welcome back!": "欢迎回来!",
    "Wipe": "擦除",
    "You beat this scenario!": "你打败了这个场景！",
    "You were away for": "你离开了",
    "You will lose all your progression and restart from the beginning.": "你将失去所有进程并从头开始。",
    "You will lose your current progression and you will start the new scenario at the beginning.": "你将失去当前的进程，并重新开始新的场景。",
    "Iron Ingot": "铁锭",
    "Local data corupted": "本地数据损坏",
    "Your current save is not compatible with the current version of the game. This may due to the last relase of the game. You have to wipe your local data and restart from the beginning. Sorry for the inconvenience.": "您当前保存的文件与当前版本的游戏不兼容。这可能是由于游戏的最后一次发布。你必须擦除本地数据，然后重新开始。很抱歉给您带来不便。",
    "BIG Inc. Orders": "大公司订单",
    "BIG Inc. Project": "大公司项目",
    "Energy": "能源",
    "Locked": "未解锁",
    "Prod": "提升",
    "Producers": "生产者",
    "Storers": "存储",
    "Alclad Aluminum Sheet": "镀铝复合铝板",
    "Biomass": "生物质",
    "Biomass Burner": "生物质燃烧器",
    "Buildings": "建筑",
    "Cable": "电缆",
    "Coal Generator": "煤炭发电机",
    "Containers": "容器",
    "Copper Sheet": "铜板",
    "Encased Industrial Beam": "封闭式工业梁",
    "Extractors": "提取器",
    "Fuel": "燃料",
    "Fuel Generator": "燃料发电机",
    "Heavy Modular Frame": "重型模块化框架",
    "Inputs": "输入",
    "Motor": "电动机",
    "Nuclear Power Plant": "核电站",
    "Portable Miner": "便携式采矿机",
    "Quickwire": "快线",
    "Reinforced Iron Plate": "加固铁板",
    "Rotor": "转子",
    "Rubber": "橡胶",
    "Supercomputer": "超级计算机",
    "Uranium Fuel Rod": "铀燃料棒",
    "Wire": "电线",
    "Outputs": "输出",
    "Copper Ingot": "铜锭",
    "Copper Ore": "铜矿石",
    "Smelter": "冶炼厂",
    "Constructor": "构造器",
    "Consumers": "消耗者",
    "Limestone": "石灰岩",
    "Screw": "螺丝",
    "Upgrades": "升级",
    "Storage Container": "存储容器",
    "Part Asssembly": "零件组装",
    "Space Elevator": "太空电梯",
    "Distribution Platform": "分销平台",
    "Modular Frame": "模块化框架",
    "Smart Plating": "智能电镀",
    "Basic Steel Production": "基础钢生产",
    "Coal Power": "煤电",
    "Fluid Buffer": "流体缓冲器",
    "Water Extractor": "抽水器",
    "Advanced Steel Production": "高级钢铁生产",
    "Foundry": "铸造厂",
    "Logistics": "物流",
    "Steel Ingot": "钢锭",
    "Steel Pipe": "钢管",
    "Steel Beam": "钢梁",
    "Versatile Framework": "通用框架",
    "Automated Wiring": "自动布线",
    "Construction Dock": "建造船坞",
    "Stator": "定子",
    "Industrial Storage Container": "工业储物箱",
    "Oil Processing": "石油加工",
    "Circuit Board": "电路板",
    "Industrial Manufacturing": "工业制造业",
    "Crude Oil": "原油",
    "Oil Extractor": "油分离器",
    "Petroleum Power": "石油能源",
    "Plastic": "塑料",
    "Refinery": "炼油厂",
    "Caterium Ore": "钦矿石",
    "Caterium Ingot": "钦锭",
    "Industrial Fluid Buffer": "工业流体缓冲器",
    "Main Body": "主体部分",
    "Adaptive Control Unit": "自适应控制单元",
    "Computer": "计算机",
    "Manufacturer": "制造商",
    "": "",
    "Modular Engine": "模块化引擎",
    "Advanced Aluminum Production": "高级铝生产",
    "AI Limiter": "人工智能限幅器",
    "Alumina Solution": "氧化铝的解决方案",
    "Aluminum Casing": "铝套管",
    "Aluminum Ingot": "铝锭",
    "Aluminum Scrap": "废铝",
    "Assembly Director System": "装配主任系统",
    "Bauxite": "铝土矿",
    "Bauxite Refinement": "铝土矿精炼",
    "Blender": "搅拌机",
    "Control System Development": "控制系统开发",
    "Cooling System": "冷却系统",
    "Crystal Oscillator": "晶体振荡器",
    "Electromagnetic Control Rod": "电磁控制杆",
    "Encased Uranium Cell": "密封铀电池",
    "Fused Modular Frame": "熔接模块框架",
    "Gas Extractor": "气体萃取器",
    "Heat Sink": "散热器",
    "High-Speed Connector": "高速连接器",
    "Leading-Edge Production": "前沿生产",
    "Magnetic Field Generator": "磁场发生器",
    "Nitrogen Gas": "氮气",
    "Nuclear Power": "核电",
    "Quartz Crystal": "石英晶体",
    "Radio Control Unit": "无线电控制单元",
    "Raw Quartz": "原石英",
    "Silica": "硅",
    "AI Expansion Server": "AI扩展服务器",
    "Assembly": "装配",
    "Ballistic Warp Drive": "弹道曲速引擎",
    "BIG Inc. Ingot": "大公司锭",
    "BIG Inc. Trigon": "大公司三角",
    "Biochemical Sculptor": "生化雕塑家",
    "Converter": "转换器",
    "Copper Powder": "铜粉",
    "Dark Matter Crystal": "暗物质晶体",
    "Dark Matter Residue": "暗物质残留",
    "Diamonds": "钻石",
    "Excited Photonic Matter": "受激光子物质",
    "Matter Conversion": "物质转换",
    "Neural-Quantum Processor": "神经量子处理器",
    "Nuclear Pasta": "核面",
    "Particle Accelerator": "粒子加速器",
    "Particle Enrichment": "粒子浓缩",
    "Pressure Conversion Cube": "压力转换立方",
    "Propulsion": "推进装置",
    "Quantum Encoder": "量子编码器",
    "Quantum Encoding": "量子编码",
    "Reanimated Sam": "复活的山姆",
    "Sam": "山姆",
    "Sam Fluctuator": "山姆波动器",
    "Singularity Cell": "奇点细胞",
    "Spatial Energy Regulation": "空间能量调节",
    "Superposition Oscillator": "叠加振荡器",
    "Thermal Propulsion Rocket": "热推进火箭",
    "Time Crystal": "时间晶体",
    "Turbo Motor": "涡轮增压发动机",
    "Material": "材料",
    "To support the dev": "支持开发人员",
    "Science packs are items which are built by Labs to perform researches. Performing researches requires a certain number of different types of science packs. Red pack is the first type of them.": "科技包是实验室用来进行研究的物品。进行研究需要一定数量的不同类型的科技包。红包是第一种。",
    "This game has been designed and built with all the love in the world by Freddec. It was inspired by several famous factory games. You could support the dev by clicking on one of the following links.": "这个游戏是由Freddec用世界上所有的爱设计和制作的。它的灵感来自几个著名的工厂游戏。您可以通过单击以下链接之一来支持开发。",
    "In this scenario, you crashed on an hostile planet and you have to escape from there by launching a Rocket to Space to come back to Home. To be able to launch a Rocket you will mine resources, build machines and craft items until all you complete all the missions. Good luck!": "在这个场景中，你坠毁在一个充满敌意的星球上，你必须通过发射火箭到太空来逃离那里并返回家园。为了能够发射火箭，你将挖掘资源，建造机器和制作物品，直到你完成所有的任务。祝你好运！",
    "Miner": "矿工",
    "Sciences": "科技",
    "Select": "选择",
    "Science packs": "科技包",
    "Tank": "罐",
    "Steel": "钢",
    "Steam research": "蒸汽研究",
    "Steel research": "钢研究",
    "A Satellite will allow you to communicate and explore the Space to retrieve the road to your Home.": "一颗卫星将允许你沟通和探索空间，以检索到你家的道路。",
    "Accumulator": "蓄电池",
    "An Electric engine is the advanced counterpart of the Engine, and is used in some higher end recipes.": "电动发动机是发动机的高级版本，在一些高端配方中使用。",
    "An Engine is used for building various items. Engine must be built using an Assembler 1, and cannot be made by hand.": "引擎用于构建各种物品。发动机必须使用汇编器制造，不能手工制造。",
    "Automation is one of the essential parts of a factory. Assembler 1 is the most basic assembling machine available. Start with it then progress further.": "自动化是工厂的重要组成部分之一。装配机1是最基本的装配机。从它开始，然后继续前进。",
    "Available scenarios": "可用的场景",
    "Battery research": "电池研究",
    "Blue pack is the third tier of science pack. It is used in Labs to complete many missions.": "蓝瓶是科技包的第三层。它在实验室中被用来完成许多任务。",
    "Brick": "砖",
    "Build a Satellite": "建造卫星",
    "Chemical plant": "化学工厂",
    "Circuit": "电路",
    "Circuit research": "电路研究",
    "Circuits is mainly used for making parts for the Rocket": "电路主要用于制造火箭的零件",
    "Concrete is an ingredient utilized for facilities relating to many more advanced machines.": "混凝土是与许多更先进的机器有关的设施所使用的一种成分。",
    "Concrete research": "混凝土研究",
    "Copper plate": "铜板",
    "Electric engine": "电动发动机",
    "Electric engine research": "发电机研究",
    "Electricity generation": "发电",
    "Engine research": "引擎研究",
    "Escape!": "逃跑!",
    "Extracted": "提取",
    "Green pack is the second tier of science pack. Combined with Red pack, it is used in Labs to complete many missions.": "绿瓶是科技包的第二层。结合Red pack，它在实验室中被用来完成许多任务。",
    "Heavy oil": "重油",
    "Import data": "导入数据",
    "Iron plate": "铁板",
    "Item unlocking": "物品解锁",
    "Kofi": "Kofi",
    "Launch the Rocket": "发射火箭",
    "Light oil": "光油",
    "Lubricant is a fluid converted from Heavy oil in a Chemical plant. It is used in the production of Engine 2.": "润滑剂是化工厂里由重油转化而来的液体。它被用于引擎2的生产。",
    "Lubricant research": "润滑剂的研究",
    "Lucide": "Lucide",
    "Missions": "任务",
    "Oil extracting research": "石油提取研究",
    "Oil refining is a large part of a factory. Oil refining may refer to the researches, the recipes used in a Refinery, or the overall workings of Oil.": "炼油是工厂的很大一部分。炼油可以指研究，在炼油厂使用的配方，或石油的整体工作。",
    "Oil refining research": "炼油研究",
    "Patreon": "Patreon",
    "Paypal": "Paypal",
    "Petrol": "汽油",
    "Plastic is a requirement for the production of Circuits which are highly used to build a Rocket and win the game.": "塑料是生产电路的必要条件，而电路被高度用于制造火箭并赢得比赛。",
    "Plastic research": "塑料研究",
    "Products": "产品",
    "Pump": "泵",
    "Pumpjacks extract Oil from resource fields. Oil can be converted into other items by a Refinery.": "抽油机从油田中提取石油。石油可以通过炼油厂转化成其他物品。",
    "Rocket fuel": "火箭燃料",
    "Rocket fuel research": "火箭燃料研究",
    "Rocket part": "火箭的一部分",
    "Rocket research": "火箭研究",
    "Rocket silo": "火箭发射井",
    "Smelted": "冶炼",
    "Solid fuel research allows you to obtain Solid fuel items based on Oil. These items will be used in the most complex items used in Rocket building.": "固体燃料研究允许你获得基于石油的固体燃料项目。这些物品将在火箭建造中最复杂的物品中使用。",
    "Steam is a gas created by heating Water in a Boiler. After being distributed, Steam can be used to generate Electricity via Steam engines.": "蒸汽是一种在锅炉里加热水而产生的气体。蒸汽被分配后，可以通过蒸汽机发电。",
    "Sulfur is a component in the production of Sulfuric acid also being intermediate products used in higher-level recipes.": "硫是生产硫酸的一种成分，也是高级配方中使用的中间产品。",
    "Sulfur research": "硫研究",
    "The battery is an intermediate product used in several key recipes used for later-game researches.": "电池是一种中间产品，用于后期游戏研究的几个关键配方中。",
    "The Purple pack is one of the two late-game science packs in the this scenario. The other one is Yellow pack.": "紫瓶是这个场景中两个后期科技包之一。另一个是黄瓶。",
    "The Rocket research is the final research to beat this scenario. It will unlock all what you need to build and laounch the Rocket.": "火箭研究是打败这种情况的最后一项研究。它将解锁所有你需要建造和发射火箭。",
    "The Steel is an advanced material made by smelting Iron plates again. It is used in many advanced recipes.": "钢是由铁板再冶炼而成的先进材料。它被用在许多高级食谱中。",
    "The Yellow pack is one of the two late-game science packs in the this scenario. The other one is Purple pack.": "黄瓶是这个场景中两个后期科技包之一。另一个是紫瓶。",
    "This is a prototype. Development is still in progress. Data loss and hard reset could happen.": "这是一个原型。开发仍在进行中。可能会发生存档数据丢失和硬复位。",
    "This reserch allows you to craft the Assembler 2, an essential part of more advanced auto-crafting.": "这项研究允许你制作汇编器2，一个更高级的自动制作的重要组成部分。",
    "Time played": "时间玩",
    "To launch the Rocket you have to build 100 Rocket parts. Launching the Rocket is the final step to escape from this hostile planet. After that you will be free!": "要发射火箭，你必须制造100个火箭部件。发射火箭是逃离这个充满敌意的星球的最后一步。之后你就自由了！",
    "To protect you against radiations during your travel, you have to wear a solid Armor.": "为了保护你在旅行中免受辐射，你必须穿一件坚固的盔甲。",
    "Used in the production of Rocket parts, Rocket fuel is the most long-lasting of all the fuel.": "用于生产火箭部件的火箭燃料是所有燃料中最持久的。",
    "Wear your Armor": "穿上你的盔甲",
    "Automation": "自动化",
    "Requirements": "要求",
    "You will lose your current progression and you will start this scenario at the beginning.": "你将失去当前的进度，你将从头开始这个场景。",
    "Assignment": "分配",
    "Crafting": "制作",
    "Notification": "通知",
    "Unassign": "未分配",
    "Alternatively, you can wipe your local data to restart the game from the beginning": "或者，你可以擦除本地数据重新开始游戏",
    "To ask for help, you can contact Freddec on Discord": "要寻求帮助，你可以在Discord上联系Freddec",
    "Assign": "分配",
    "Stop": "停止",
    "Usages": "消耗",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'II',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '<': '<',
    '<<': '<<',
    '>': '>',
    '>>': '>>',
    '': '',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-点击以切换工具提示：",
    "Storage +": "存储 +",
    "Step #": "步骤 #",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    ' I': ' I',
    ' II': ' II',
    ' III': ' III',
    ' IV': ' IV',
    ' V': ' V',
    ' VI': ' VI',
    ' VII': ' VII',
    ' VIII': ' VIII',
    ' X': ' X',
    ' XI': ' XI',
    ' XII': ' XII',
    ' XIII': ' XIII',
    ' XIV': ' XIV',
    ' XV': ' XV',
    ' XVI': ' XVI',
    "This is a prototype. Development is still in progress. Data loss and reset could happen.": "这是一个原型。开发还在进行中可能会发生数据丢失和重置。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\-([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)d ([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) k$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) m$/,
    /^([\d\.]+) B$/,
    /^\+([\d\.]+) M$/,
    /^\+([\d\.]+) G$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\/ ([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^([\d\.,]+) ms$/,
    /^x([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) physical damages$/, '$1 物理伤害'],
    [/^([\d\.]+) explosion damages$/, '$1 爆炸伤害'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+) \/s$/, '$1 \/秒'],
    [/^\+([\d\.]+)$/, '\+$1'],
    [/^\+([\d\.]+) \/s$/, '\+$1 \/秒'],
    [/^\+ ([\d\.]+) \/s$/, '\+ $1 \/秒'],
    [/^\- ([\d\.]+) \/s$/, '\- $1 \/秒'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^Oil Processing ([\d\.,]+)$/, '石油加工 $1'],
    [/^([\d\.,]+) physical \+ ([\d\.,]+) explosion damages$/, '$1 物理 \+ $2 爆炸伤害'],
    [/^Military ([\d\.,]+)$/, '军事 $1'],
    [/^Robotics ([\d\.,]+)$/, '机器人学 $1'],
    [/^Assembler ([\d\.,]+)$/, '组装机 $1'],
    [/^Tier ([\d\.,]+)$/, '层级 $1'],
    [/^Build ([\d\.,]+)$/, '建造 $1'],
    [/^Miner Mk.([\d\.,]+)$/, '矿工 Mk.$1'],
    [/^Automation ([\d\.,]+)$/, '自动化 $1'],
    [/^([\d\.,]+) Available$/, '$1 可用'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);