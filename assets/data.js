const taskId2instruction = {
    "valid_unseen__look_at_obj_in_light-AlarmClock-None-DeskLamp-308__trial_T20190908_222917_366542": "Hold the clock and turn on the lamp.",
    "valid_unseen__look_at_obj_in_light-AlarmClock-None-DeskLamp-308__trial_T20190908_222933_607649": "Carry a clock while turning on a lamp.",
    "valid_unseen__look_at_obj_in_light-AlarmClock-None-DeskLamp-308__trial_T20190908_222951_616606": "Turn on a lamp with a metal box.",
    "valid_unseen__look_at_obj_in_light-Book-None-DeskLamp-308__trial_T20190908_020029_636862": "Use the light from the lamp to look at the book.",
    "valid_unseen__look_at_obj_in_light-Book-None-DeskLamp-308__trial_T20190908_020048_814402": "Picking up a book and turning on a light to read it by.",
    "valid_unseen__look_at_obj_in_light-Book-None-DeskLamp-308__trial_T20190908_144951_587345": "grab the book from the bed, turn on the lamp on the desk.",
    "valid_unseen__look_at_obj_in_light-Bowl-None-DeskLamp-308__trial_T20190907_133919_856963": "Inspect a bowl near a lit lamp.",
    "valid_unseen__look_at_obj_in_light-Bowl-None-DeskLamp-308__trial_T20190907_133935_066606": "Examine a bowl by the light of a desk lamp.",
    "valid_unseen__look_at_obj_in_light-Bowl-None-DeskLamp-308__trial_T20190907_133953_562557": "Examine the bowl by the light on the desk.",
    "valid_unseen__look_at_obj_in_light-CD-None-DeskLamp-308__trial_T20190908_141942_810052": "Pick up the disc and turn the lamp on.",
    "valid_unseen__look_at_obj_in_light-CD-None-DeskLamp-308__trial_T20190908_141958_463362": "examine a CD with a lamp.",
    "valid_unseen__look_at_obj_in_light-CD-None-DeskLamp-308__trial_T20190908_142046_281296": "Look at a CD under a lamp's light.",
    "valid_unseen__look_at_obj_in_light-Mug-None-DeskLamp-308__trial_T20190908_161733_213242": "Look at a mug in lamp light.",
    "valid_unseen__look_at_obj_in_light-Mug-None-DeskLamp-308__trial_T20190908_201421_021646": "Turn on the desk lamp.",
    "valid_unseen__look_at_obj_in_light-Mug-None-DeskLamp-308__trial_T20190908_201444_037645": "Examine a mug in the light of a lamp.",
    "valid_unseen__look_at_obj_in_light-Pencil-None-DeskLamp-308__trial_T20190908_220545_153480": "Pick a pencil up and turn a lamp on.",
    "valid_unseen__look_at_obj_in_light-Pencil-None-DeskLamp-308__trial_T20190908_220604_010430": "Examine a pencil by the light of a desk lamp.",
    "valid_unseen__look_at_obj_in_light-Pencil-None-DeskLamp-308__trial_T20190908_220656_510400": "Pick a pencil up and turn the lamp on.",
    "valid_unseen__pick_and_place_simple-Mug-None-Desk-308__trial_T20190908_125200_737896": "Put a cup on the desk, by the chcair.",
    "valid_unseen__pick_and_place_simple-Mug-None-Desk-308__trial_T20190909_203041_433487": "take the mug from the desk shelf to put it on the desk.",
    "valid_unseen__pick_and_place_simple-Mug-None-Desk-308__trial_T20190909_210238_431966": "take a coffee mug from a book shelf and place it on a desk.",
    "valid_unseen__pick_and_place_simple-Pencil-None-Shelf-308__trial_T20190908_121952_610012": "Move the pencil on the desk over.",
    "valid_unseen__pick_and_place_simple-Pencil-None-Shelf-308__trial_T20190908_122024_052056": "Move a pencil on the desk over.",
    "valid_unseen__pick_and_place_simple-Pencil-None-Shelf-308__trial_T20190908_122154_042763": "Pick up the white pencil on the desk and put it on another spot on the desk.",
    "valid_unseen__pick_and_place_simple-PepperShaker-None-Drawer-10__trial_T20190906_184021_215264": "Move the salt shaker from the counter to the middle drawer.",
    "valid_unseen__pick_and_place_simple-PepperShaker-None-Drawer-10__trial_T20190918_154326_823501": "Place the salt shaker in the middle drawer.",
    "valid_unseen__pick_and_place_simple-PepperShaker-None-Drawer-10__trial_T20190918_154424_844749": "Put the salt shaker in the drawer.",
    "valid_unseen__pick_and_place_simple-SaltShaker-None-Cabinet-10__trial_T20190906_191429_743650": "Put salt in the cabinet next to the fridge.",
    "valid_unseen__pick_and_place_simple-SaltShaker-None-Cabinet-10__trial_T20190906_191445_723170": "To acquire an odd item as place it where it is not useful.",
    "valid_unseen__pick_and_place_simple-SaltShaker-None-Cabinet-10__trial_T20190906_191501_563086": "Put the salt shaker in the cabinet to the left above the stove.",
    "valid_unseen__pick_and_place_simple-SaltShaker-None-Drawer-10__trial_T20190909_021613_077537": "place salt in second drawer to the left of stove.",
    "valid_unseen__pick_and_place_simple-SaltShaker-None-Drawer-10__trial_T20190909_021650_880235": "Put a shaker in a drawer.",
    "valid_unseen__pick_and_place_simple-SaltShaker-None-Drawer-10__trial_T20190909_021728_339782": "Move a salt shaker to a drawer.",
    "valid_unseen__pick_and_place_simple-SoapBottle-None-Toilet-424__trial_T20190907_004321_405868": "Place the bottle from the sink to the toilet basin.",
    "valid_unseen__pick_and_place_simple-SoapBottle-None-Toilet-424__trial_T20190907_004351_281384": "Place the green bottle on the toilet baisin.",
    "valid_unseen__pick_and_place_simple-SoapBottle-None-Toilet-424__trial_T20190907_004404_604165": "Place soap on top of a toilet tank.",
    "valid_unseen__pick_and_place_simple-Vase-None-Safe-219__trial_T20190908_205204_244321": "Put a vase in a safe.",
    "valid_unseen__pick_and_place_simple-Vase-None-Safe-219__trial_T20190908_205221_748352": "Store a vase in a safe.",
    "valid_unseen__pick_and_place_simple-Vase-None-Safe-219__trial_T20190908_205246_776817": "Put the gold vase into the white safe.",
    "valid_unseen__pick_and_place_simple-Watch-None-Safe-219__trial_T20190907_074524_006355": "Move a watch to the inside of a small safe.",
    "valid_unseen__pick_and_place_simple-Watch-None-Safe-219__trial_T20190907_074556_124850": "Move the watch from the cabinet to the safe.",
    "valid_unseen__pick_and_place_simple-Watch-None-Safe-219__trial_T20190907_074643_810052": "Place a watch inside of the safe.",
    "valid_unseen__pick_clean_then_place_in_recep-Bowl-None-Cabinet-10__trial_T20190909_061130_844814": "Put a cleaned, filled bowl of water in the cabinet,  left of the microwave.",
    "valid_unseen__pick_clean_then_place_in_recep-Bowl-None-Cabinet-10__trial_T20190909_061158_110530": "Put a filled bowl of water in the cabinet left of the microwave.",
    "valid_unseen__pick_clean_then_place_in_recep-Bowl-None-Cabinet-10__trial_T20190909_061232_368489": "Place a washed bowl in a cabinet.",
    "valid_unseen__pick_clean_then_place_in_recep-Cloth-None-Cabinet-424__trial_T20190908_022321_380927": "Put a cleaned rag in the cabinet under the sink.",
    "valid_unseen__pick_clean_then_place_in_recep-Cloth-None-Cabinet-424__trial_T20190908_022436_073995": "Get a towel out of the drawer to soak it, then put it back in the drawer.",
    "valid_unseen__pick_clean_then_place_in_recep-Cloth-None-CounterTop-424__trial_T20190908_100632_546757": "Place a clean rag on a counter.",
    "valid_unseen__pick_clean_then_place_in_recep-Cloth-None-CounterTop-424__trial_T20190908_114340_674467": "Put a clean rag on the counter.",
    "valid_unseen__pick_clean_then_place_in_recep-Egg-None-Microwave-10__trial_T20190909_120554_888709": "Put a clean egg in the microwave.",
    "valid_unseen__pick_clean_then_place_in_recep-Egg-None-Microwave-10__trial_T20190909_120632_691361": "Put a washed egg in a microwave.",
    "valid_unseen__pick_clean_then_place_in_recep-Egg-None-Microwave-10__trial_T20190909_120712_273910": "rinse the egg to put it in the microwave.",
    "valid_unseen__pick_clean_then_place_in_recep-Knife-None-CounterTop-10__trial_T20190909_110347_624008": "put a knife in the sink before standing it on the counter.",
    "valid_unseen__pick_clean_then_place_in_recep-Knife-None-CounterTop-10__trial_T20190909_110445_675754": "clean a knife and put it back onto the counter.",
    "valid_unseen__pick_clean_then_place_in_recep-Knife-None-CounterTop-10__trial_T20190909_110531_148235": "Wash a knife in the sink to place on a countertop.",
    "valid_unseen__pick_clean_then_place_in_recep-Mug-None-CoffeeMachine-10__trial_T20190907_221208_560499": "Put a mug of water in the coffee maker mug location.",
    "valid_unseen__pick_clean_then_place_in_recep-Mug-None-CoffeeMachine-10__trial_T20190907_221300_362511": "Move a washed mug to the coffee maker.",
    "valid_unseen__pick_clean_then_place_in_recep-Mug-None-CoffeeMachine-10__trial_T20190907_221355_558505": "Pick up the white coffee cup, fill it in the sink, place it in the coffee maker.",
    "valid_unseen__pick_clean_then_place_in_recep-Pan-None-CounterTop-10__trial_T20190908_032434_013084": "Wash the pan in the sink, put the pan on the counter.",
    "valid_unseen__pick_clean_then_place_in_recep-Pan-None-CounterTop-10__trial_T20190908_032518_891433": "Place a clean pan on the kitchen counter.",
    "valid_unseen__pick_clean_then_place_in_recep-Pan-None-CounterTop-10__trial_T20190908_032543_712058": "Place a washed pan on a counter.",
    "valid_unseen__pick_clean_then_place_in_recep-Plate-None-CounterTop-10__trial_T20190908_213356_017769": "wash the dirty bowl before putting the bowl on the counter.",
    "valid_unseen__pick_clean_then_place_in_recep-Plate-None-CounterTop-10__trial_T20190908_213420_728917": "Put a clean plate on the counter.",
    "valid_unseen__pick_clean_then_place_in_recep-Plate-None-CounterTop-10__trial_T20190908_213533_897289": "Wash a plate and place on counter.",
    "valid_unseen__pick_clean_then_place_in_recep-SoapBar-None-Cabinet-424__trial_T20190908_214926_337906": "Move soap from counter to sink, followed by moving to cupboard below sink.",
    "valid_unseen__pick_clean_then_place_in_recep-SoapBar-None-Cabinet-424__trial_T20190908_214946_567644": "Put washed soap away in a cabinet.",
    "valid_unseen__pick_clean_then_place_in_recep-SoapBar-None-Cabinet-424__trial_T20190908_215019_162873": "Put a wet bar of soap in the cupboard.",
    "valid_unseen__pick_clean_then_place_in_recep-SoapBar-None-CounterTop-424__trial_T20190907_074045_109439": "Put a clean bar of soap on the counter.",
    "valid_unseen__pick_clean_then_place_in_recep-SoapBar-None-CounterTop-424__trial_T20190907_074106_050405": "Put a wet soap on the counter.",
    "valid_unseen__pick_clean_then_place_in_recep-SoapBar-None-CounterTop-424__trial_T20190907_074124_966890": "Put a clean bar of soap on the bathroom counter.",
    "valid_unseen__pick_clean_then_place_in_recep-Spatula-None-Drawer-10__trial_T20190907_080730_211959": "Wash the spatula, put it in the first drawer.",
    "valid_unseen__pick_clean_then_place_in_recep-Spatula-None-Drawer-10__trial_T20190907_080800_275989": "Put a clean spatula in a drawer.",
    "valid_unseen__pick_clean_then_place_in_recep-Spatula-None-Drawer-10__trial_T20190907_080825_222432": "Clean a spatula to put it away.",
    "valid_unseen__pick_cool_then_place_in_recep-Bread-None-CounterTop-10__trial_T20190908_091747_866951": "Put a cold loaf of bread on the counter.",
    "valid_unseen__pick_cool_then_place_in_recep-Bread-None-CounterTop-10__trial_T20190908_091811_414150": "Put chilled bread on the counter, right of the fridge.",
    "valid_unseen__pick_cool_then_place_in_recep-Bread-None-CounterTop-10__trial_T20190908_091835_825830": "Place a loaf of bread on a counter.",
    "valid_unseen__pick_cool_then_place_in_recep-Lettuce-None-CounterTop-10__trial_T20190909_123133_763972": "chill the lettuce then return it to the counter.",
    "valid_unseen__pick_cool_then_place_in_recep-Lettuce-None-CounterTop-10__trial_T20190909_174807_646433": "Put cold lettuce on the counter next to the other food.",
    "valid_unseen__pick_cool_then_place_in_recep-Lettuce-None-CounterTop-10__trial_T20190909_174840_771703": "put chilled lettuce on counter.",
    "valid_unseen__pick_cool_then_place_in_recep-Mug-None-Cabinet-10__trial_T20190909_121559_082363": "Chill a cup and place it in the cabinet.",
    "valid_unseen__pick_cool_then_place_in_recep-Mug-None-Cabinet-10__trial_T20190909_121635_622676": "Place a chilled mug in a cabinet.",
    "valid_unseen__pick_cool_then_place_in_recep-Mug-None-Cabinet-10__trial_T20190909_121710_650938": "Put a cold mug in the cupboard.",
    "valid_unseen__pick_cool_then_place_in_recep-Mug-None-CoffeeMachine-10__trial_T20190907_183715_299073": "Put the cold mug on the coffee maker.",
    "valid_unseen__pick_cool_then_place_in_recep-Mug-None-CoffeeMachine-10__trial_T20190907_183807_477267": "get mug from coffee maker, chill, and return mug to coffee maker.",
    "valid_unseen__pick_cool_then_place_in_recep-Mug-None-CoffeeMachine-10__trial_T20190907_183853_958104": "Cool a mug in the fridge.",
    "valid_unseen__pick_cool_then_place_in_recep-Pan-None-CounterTop-10__trial_T20190908_114545_244903": "Remove the pan from the stove, chill it in the fridge and return it to the counter.",
    "valid_unseen__pick_cool_then_place_in_recep-Pan-None-CounterTop-10__trial_T20190908_114622_738670": "Put a chilled pan on the counter.",
    "valid_unseen__pick_cool_then_place_in_recep-Pan-None-CounterTop-10__trial_T20190908_114656_768805": "Chill a pan and put it on a counter.",
    "valid_unseen__pick_cool_then_place_in_recep-Potato-None-Microwave-10__trial_T20190907_033157_424297": "Put a chilled potato in the microwave.",
    "valid_unseen__pick_cool_then_place_in_recep-Potato-None-Microwave-10__trial_T20190907_033228_194678": "Place a chilled potato in the microwave.",
    "valid_unseen__pick_cool_then_place_in_recep-Potato-None-Microwave-10__trial_T20190907_033306_962974": "put a cooled potato inside the microwave.",
    "valid_unseen__pick_cool_then_place_in_recep-Tomato-None-Microwave-10__trial_T20190909_102608_318800": "Put a cooled tomato in the microwave.",
    "valid_unseen__pick_cool_then_place_in_recep-Tomato-None-Microwave-10__trial_T20190909_102644_926781": "Place a chilled tomato in a microwave.",
    "valid_unseen__pick_cool_then_place_in_recep-Tomato-None-Microwave-10__trial_T20190909_102710_795182": "chill then warm a tomato in the microwave.",
    "valid_unseen__pick_heat_then_place_in_recep-Apple-None-Fridge-10__trial_T20190906_182259_116320": "Warm up apple to put in fridge.",
    "valid_unseen__pick_heat_then_place_in_recep-Apple-None-Fridge-10__trial_T20190906_182353_418140": "Put the heated apple in the fridge.",
    "valid_unseen__pick_heat_then_place_in_recep-Apple-None-Fridge-10__trial_T20190906_182435_622538": "Place a heated apple in the fridge.",
    "valid_unseen__pick_heat_then_place_in_recep-Apple-None-GarbageCan-10__trial_T20190908_145050_918567": "Put a heated apple in the trash can.",
    "valid_unseen__pick_heat_then_place_in_recep-Apple-None-GarbageCan-10__trial_T20190908_145143_820541": "Put the heather apple in the trash bin.",
    "valid_unseen__pick_heat_then_place_in_recep-Apple-None-GarbageCan-10__trial_T20190908_145356_918528": "Put a heated apple in the trash can.",
    "valid_unseen__pick_heat_then_place_in_recep-Cup-None-Cabinet-10__trial_T20190907_083346_800823": "Put a heated vase in the cabinet.",
    "valid_unseen__pick_heat_then_place_in_recep-Cup-None-Cabinet-10__trial_T20190907_083429_887065": "Heat up a green cup to put it back in the cupboard.",
    "valid_unseen__pick_heat_then_place_in_recep-Cup-None-Cabinet-10__trial_T20190907_083507_594820": "Put a warmed vase in the cupboard.",
    "valid_unseen__pick_heat_then_place_in_recep-Egg-None-GarbageCan-10__trial_T20190908_113432_673307": "Move egg from counter, heat in microwave, put in garbage can.",
    "valid_unseen__pick_heat_then_place_in_recep-Egg-None-GarbageCan-10__trial_T20190908_113523_123938": "place a microwaved egg inside the garbage bin.",
    "valid_unseen__pick_heat_then_place_in_recep-Egg-None-GarbageCan-10__trial_T20190908_113610_425142": "Put a heated egg in the trash can.",
    "valid_unseen__pick_heat_then_place_in_recep-Mug-None-Cabinet-10__trial_T20190909_021100_341887": "Place a heated mug in a cabinet.",
    "valid_unseen__pick_heat_then_place_in_recep-Mug-None-Cabinet-10__trial_T20190909_021200_669381": "Place a heated mug in a cabinet.",
    "valid_unseen__pick_heat_then_place_in_recep-Mug-None-Cabinet-10__trial_T20190909_021247_306737": "Place a heated mug in a cabinet.",
    "valid_unseen__pick_heat_then_place_in_recep-Mug-None-CoffeeMachine-10__trial_T20190907_171806_406231": "Put the warm mug on the coffee maker.",
    "valid_unseen__pick_heat_then_place_in_recep-Mug-None-CoffeeMachine-10__trial_T20190907_171850_960211": "Put a warmed mug under a coffee maker.",
    "valid_unseen__pick_heat_then_place_in_recep-Mug-None-CoffeeMachine-10__trial_T20190907_171933_349922": "Move a heated mug to the base of the coffee maker.",
    "valid_unseen__pick_heat_then_place_in_recep-Potato-None-GarbageCan-10__trial_T20190907_161745_664033": "Put a heated potato in the garbage can on the floor, next to the kitchen Island.",
    "valid_unseen__pick_heat_then_place_in_recep-Potato-None-GarbageCan-10__trial_T20190907_161853_945788": "Put a cooked potato in the garbage can.",
    "valid_unseen__pick_heat_then_place_in_recep-Tomato-None-GarbageCan-10__trial_T20190908_225046_020282": "Heat a tomato and place in a bin.",
    "valid_unseen__pick_heat_then_place_in_recep-Tomato-None-GarbageCan-10__trial_T20190908_225359_617900": "Put a heated tomato in the trash can.",
    "valid_unseen__pick_heat_then_place_in_recep-Tomato-None-GarbageCan-10__trial_T20190908_225453_272533": "Heat a tomato and throw it away.",
    "valid_unseen__pick_two_obj_and_place-CD-None-Safe-308__trial_T20190907_050942_897916": "Put the two CDs on the desk closest to the window in the safe.",
    "valid_unseen__pick_two_obj_and_place-CD-None-Safe-308__trial_T20190907_051013_060265": "Transfer the two CDs from the desk to the vault.",
    "valid_unseen__pick_two_obj_and_place-CD-None-Safe-308__trial_T20190907_051056_585414": "Move the CD's from the table to the safe.",
    "valid_unseen__pick_two_obj_and_place-KeyChain-None-Safe-219__trial_T20190909_011803_423115": "Move two sets of keys to the white safe.",
    "valid_unseen__pick_two_obj_and_place-KeyChain-None-Safe-219__trial_T20190909_012027_782483": "put two sets of keys in to the safe.",
    "valid_unseen__pick_two_obj_and_place-PepperShaker-None-Drawer-10__trial_T20190908_010306_215435": "Put two containers of salt in the kitchen drawer.",
    "valid_unseen__pick_two_obj_and_place-PepperShaker-None-Drawer-10__trial_T20190912_221016_460197": "Place two salt shakers in a drawer.",
    "valid_unseen__pick_two_obj_and_place-PepperShaker-None-Drawer-10__trial_T20190912_221141_608117": "Put two shakers in the drawer to the left of the stove.",
    "valid_unseen__pick_two_obj_and_place-Pillow-None-Sofa-219__trial_T20190907_163240_345855": "Put two pillows on a couch.",
    "valid_unseen__pick_two_obj_and_place-Pillow-None-Sofa-219__trial_T20190907_163327_486300": "Move both pillows from the blue chair to the tan sofa.",
    "valid_unseen__pick_two_obj_and_place-Pillow-None-Sofa-219__trial_T20190907_163408_914117": "Move two pillows to the couch.",
    "valid_unseen__pick_two_obj_and_place-SoapBar-None-Cabinet-424__trial_T20190909_081720_491733": "Put two soap in the cabinet.",
    "valid_unseen__pick_two_obj_and_place-SoapBar-None-Cabinet-424__trial_T20190909_081746_857594": "To move two bars of soap to the cabinet.",
    "valid_unseen__pick_two_obj_and_place-SoapBar-None-GarbageCan-424__trial_T20190909_064053_839817": "place two bars of soap inside the same garbage bin.",
    "valid_unseen__pick_two_obj_and_place-SoapBar-None-GarbageCan-424__trial_T20190909_064221_368939": "Move two bars of soap from counter to garbage can.",
    "valid_unseen__pick_two_obj_and_place-SoapBar-None-GarbageCan-424__trial_T20190909_064309_357168": "To move two bars of soap from the back of the toilet to the trash can.",
    "valid_unseen__pick_two_obj_and_place-ToiletPaper-None-Cabinet-424__trial_T20190906_202926_527010": "Take the empty toilet paper roll off."
}