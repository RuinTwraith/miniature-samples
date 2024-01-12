import React, { useRef, useState } from "react";

const rawData = {
  ACIDITY:
    "The pleasant tartness of a fine coffee, often referred to as brightness or liveliness that carries the high notes of flavor in a coffee.",
  AEROPRESS:
    "A device for brewing coffee. Coffee is steeped for 10–50 seconds (depending on grind and preferred strength) and then forced through a filter by pressing the plunger through the tube.",
  AFFOGATO:
    "Ice cream (traditionally vanilla) “drowned” with a shot of espresso.",
  "AGED COFFEE":
    "Coffee that is held in warehouses for several years, sometimes deliberately, sometimes inadvertently. Such aging reduces acidity and increases body.",
  "AMERICAN ROAST":
    "Also known as a 'City Roast', coffee beans are medium brown and offer full flavor, acidity, and varietal character; the roast style traditionally preferred in the U.S.",
  AMERICANO:
    "An espresso that is cut with very hot water to fill an American-size cup.",
  ARABICA:
    "The earliest cultivated species of coffee tree (Coffea arabica), it accounts for 70 percent of the world's coffee and is dramatically superior in cup quality to other coffee species.",
  AROMA:
    "The smell that is released from freshly ground coffee (dry aroma) and from freshly brewed coffee.",
  BALANCE:
    "A tasting term applied to a coffee for which no single characteristic overwhelms the others, yet the coffee displays sufficient complexity to be interesting.",
  BARISTA: "Italian term for a skilled, experienced espresso bar operator.",
  "BATCH ROASTER":
    "A machine that roasts a given quantity or batch of coffee at a time.",
  "BLADE GRINDER": "A device that uses a propellor-like blade to grind coffee.",
  BLAND:
    "The weak flavor often found in low-grown robusta coffees. Also caused by under-extraction when too little coffee or too coarse a grind is used.",
  BLEND: "A mixture of two or more single-origin coffees.",
  BODY: "The perceived thickness, richness, or viscosity of brewed coffee. A full-bodied coffee is one with a heavy mouthfeel.",
  BOURBON:
    "An heirloom botanical variety of Coffea arabica, it was discovered on the island of Bourbon, now Réunion, and produces relatively low yields but is prized for its quality.",
  BRINY:
    "The salty sensation caused by excessive heat when coffee has been left on the warming element too long after brewing, e.g., truck-stop coffee.",
  "BURR GRINDER":
    "Coffee grinder with two adjustable shredding discs or burrs, preferred over the blade grinder for its precision.",
  "CAFÉ AU LAIT":
    "Coffee drink combining one-third drip-brewed coffee with two-thirds hot, frothed milk.",
  CAFFEINE:
    "An odorless, bitter compound responsible for coffee's stimulating effects.",
  CAPPUCCINO:
    "An espresso drink created with one serving of espresso topped with steamed milk and froth.",
  CHAFF:
    "Flakes of the innermost skin (silverskin) of the coffee fruit clings to green coffee after processing and loosens during roasting.",
  CHEMEX:
    "The classic hourglass-shaped filter coffee brewer. Chemex filters are denser than other paper filters, and many believe that this creates a sweeter, well-balanced cup of coffee.",
  CHERRY:
    "The fruit of the coffee tree. Each cherry contains two coffee beans or one 'peaberry.'",
  CLEAN:
    "A term used to describe coffee with no discernible defects in its flavor.",
  "CLEVER COFFEE DRIPPER":
    "A filter cone with a stopper allows coffee to steep before dripping to extract more flavor.",
  "CLOVER BREWER": " A high-tech, high-end, single-cup brewing machine.",
  "COLD-WATER METHOD":
    "Coffee grounds are steeped in cold water for ten to twenty hours, then strained to create a concentrate for iced coffee.",
  COMPLEXITY:
    "A term describing coffees whose flavors layer pleasurably, giving the impression of depth and resonance.",
  CORTADO:
    "Spanish term for an espresso topped with a small amount of flat steamed milk.",
  CREMA: "Thick, caramel-colored foam that covers the surface of an espresso.",
  CUPPING:
    "A process used by professionals to sample and evaluate coffees. Ground coffee is placed into cups, water is poured over the grounds, and the liquid is tasted.",
  "DARK ROAST":
    "Coffee beans roasted to a medium-dark color and beyond; coffee oils appear on the surface of the beans and varietal flavors are muted.",
  DECAFFEINATED:
    "Coffee that has had at least 97% of its caffeine removed is classified as decaffeinated.",
  DEGASSING:
    "A natural process in which recently roasted coffee releases three times its volume as carbon dioxide gas, protecting coffee from the staling effect of oxygen for several days.",
  DOPPIO: "A double espresso.",
  DOSER:
    "Spring-loaded device on specialized espresso grinders that dispenses single servings of ground coffee.",
  "DRIP METHOD":
    "Brewing method that allows hot water to settle through a bed of ground coffee.",
  "DRY PROCESS":
    "Coffee processed by removing the husk or fruit after the coffee fruit has been dried. When done carefully, dry-processed coffee can be fruity and complex.",
  EARTHINESS:
    "A taste characteristic found primarily in coffees from Sumatra and Sulawesi in which wet coffee has come into contact with earth during drying.",
  "ESPRESSO ROAST":
    "Term for coffee taken to a medium-dark roast where acidity diminishes and bittersweet flavors emerge, also known as a Full-City or Viennese Roast.",
  ESPRESSO:
    "A brewing method in which hot water is forced under pressure through a compressed bed of finely ground coffee; typically less than 2 ounces of espresso is produced.",
  EXTRACTION:
    "Using water that is 'just off the boil, (195-205° F) to draw flavor from coffee grounds. Coffee can be under extracted and taste weak or over extracted and taste bitter.",
  "FAIR-TRADE COFFEE":
    "Coffee purchased from farmers at a 'fair' price as defined by international agencies.",
  "FILTER METHOD":
    "Any method in which water filters through a bed of ground coffee. It also describes drip method brewers using a paper filter to separate grounds from brewed coffee.",
  FINISH: "The sensory experience of coffee just as it is swallowed. ",
  "FLAT WHITE": "Espresso topped with flat, steamed milk.",
  FLAVOR:
    "Flavor is what distinguishes the sensory experience of coffee once its acidity, body, and aroma have been described.",
  "FRENCH PRESS":
    "Also known as a press pot or plunger pot, coffee grounds are steeped with water. A strainer plate is pushed down to separate the brewed coffee from the spent grounds.",
  "FRENCH ROAST":
    "Beans become very dark brown in color with an oily surface; acidity and varietal qualities fade; bittersweet notes dominate.",
  "FULL-CITY ROAST":
    "Coffee taken to a medium-dark roast which produces some oil on the bean surface; varietal qualities mellow, body and sweetness increase, acidity diminishes.",
  "GREEN COFFEE": "Term used for unroasted coffee beans.",
  GROUP:
    "The fixture protruding from the front of most espresso machines into which the portafilter and filter clamp.",
  "HARD BEAN":
    "Coffee grown at altitudes of 4,000 to 4,500 feet. The higher altitudes and lower temperatures produce a slower-maturing fruit and a harder, less porous bean.",
  "HIGH-GROWN":
    "Arabica coffee grown at altitudes of 3,000 feet and beyond are generally superior in taste quality to coffee grown downslope.",
  HULLING:
    "Removal of the coffee bean's skin, called parchment, just prior to sorting.",
  "ITALIAN ROAST":
    "Coffee is generally roasted dark brown in color and is rich and bittersweet in flavor, but the color may range to nearly black and the flavor to nearly burned.",
  LATTE:
    "A serving of espresso combined with nearly three time as much steamed milk topped with froth.",
  MACCHIATO:
    "A serving of espresso 'stained' or topped off with a small quantity of hot, frothed milk.",
  "MACHINE DRYING":
    "After coffee beans have been defruited, they are dried in machines with rotating drums or cascading slides. The other option is to dry the beans on open patios.",
  "MICRO LOT":
    "Coffee from a single farm or from a specific part of the coffee farm.",
  MOCHA: "Espresso combined with chocolate syrup and steamed milk.",
  "MONSOONED COFFEE":
    "Dry-processed, single-origin coffee from India deliberately exposed to monsoon winds in open warehouses with the aim to increase body and reduce acidity.",
  "NEW CROP":
    "Coffee roasted soon after harvest when the beans are at their freshest and brightest.",
  "ORGANIC COFFEE":
    "Coffee that has been certified by a third-party agency as having been grown and processed without the use of pesticides, herbicides, or similar chemicals.",
  PARCHMENT:
    "A thin skin that covers wet-processed coffee beans after the coffee cherries have been skinned, the pulp removed, and the beans dried.",
  "PATIO DRYING":
    "A more traditional alternative to machine drying, patio drying exposes depulped coffee beans to the sun's heat by spreading and raking them in thin layers on open patios.",
  PEABERRY:
    "A small, round bean formed when only one seed, rather than the usual two, develops at the heart of the coffee fruit.",
  "PISTON MACHINE":
    "An espresso machine that uses a piston operated by a lever to force brewing water at high pressure through a compacted bed of ground coffee.",
  PORTAFILTER:
    "In espresso brewing, a metal object with a plastic handle that holds the coffee filter and clamps onto the group.",
  "POUR-OVER COFFEE":
    "A method of drip coffee in which water is poured in a thin, steady, slow stream over a filter cone filled with ground coffee. One cup of coffee requires three minutes to brew.",
  PUCK: "Spent coffee from a portafilter or a Clover brewer.",
  PULL: "Espresso shots are “pulled.” The term is a holdover from the time that machines were only lever-operated. One pull produces either a single or a double shot of espresso.",
  PULPING:
    "Process of removing the outermost skin of the coffee cherry or fruit.",
  "PUMP MACHINE":
    "An espresso machine that uses a pump to force brewing water at high pressure through a compacted bed of ground coffee.",
  QUAKERS:
    "Defective coffee beans that fail to roast properly, remaining pale-colored.",
  REDEYE: "A cup of brewed coffee with espresso.",
  RISTRETTO:
    "Espresso pulled short, containing less water, for a more concentrated drink.",
  ROAST:
    "Unpalatable green beans are heated to create complex flavors that are extracted during brewing.",
  ROBUSTA:
    "A low-growing, high-yield coffee tree, producing full-bodied but bland coffee of inferior quality and higher caffeine than Arabica. Used in cheap blends and instant coffee.",
  "SEASONAL COFFEE":
    "Coffee beans ripen at different times of the year in different regions and are available from specialty coffee roasters and in coffeehouses for limited times.",
  "SHADE GROWN":
    "Also known as 'Bird Friendly,' coffee is grown under the shade canopy of native trees which reduces the need for pesticide since birds act as natural insect control agents.",
  SHOT: "A single serving of espresso, generally 1 to no more than 2 ounces.",
  SILVERSKIN:
    "The thin, innermost skin of the coffee fruit which clings to dried coffee beans until it is either polished or floats free during roasting, becoming what is known as chaff.",
  "SINGLE-ORIGIN COFFEE":
    "Unblended coffee from a single country, region, and crop.",
  "SIPHON POT":
    "Also known as a Vacuum Pot, this brewer steeps coffee grounds in an upper globe and draws brewed coffee into a lower globe by way of a partial vacuum.",
  SORTING:
    "After beans are dried, they are hulled and sorted at a mill. The best coffees are sorted by: size for even roasting, density (the denser the more flavorful), and defects.",
  "SPECIALTY COFFEE ASSOC. OF AMERICA (SCAA)":
    "An important and influential association of specialty coffee roasters, wholesalers, retailers, importers, and growers.",
  "SPECIALTY COFFEE":
    "Specialty coffee is distinguished by the quality of its raw material and represents 10% of all coffee grown worldwide. Of that amount, only 1-2 percent qualify as superlative.",
  "STRICTLY HARD BEAN":
    "The highest grade designation based on growing altitude in some Central American countries.",
  TAMPER:
    "In espresso brewing, the small, pestle-like device with a round, flat end used to distribute and compress ground coffee inside the filter basket.",
  TERROIR:
    "(tare – wahr) From the French word 'terre,' meaning land, it denotes the influence of geography, geology, and climate on a coffee's unique taste qualities.",
  TRIFECTA:
    "A high-tech, single-cup coffee brewer recently introduced on the market.",
  TYPICA:
    "A botanical variety of Coffea arabia, var. typica is one of the oldest and most traditional coffee varieties. Some of the best Latin American coffees are from typica stock.",
  VARIETAL:
    "A term to describe a single predominant botanical variety of coffee tree, such as var. bourbon or var. typica. Often incorrectly used in the coffee world as denoting origin.",
  "VARIETAL CHARACTER":
    "A tasting or cupping term to describe positive characteristics that distinguish one coffee from those grown in other regions, representing a 'taste of the place' in the cup.",
  "VIENNESE ROAST": "Also known as a Full-City or Espresso Roast.",
  "WET-PROCESSED/ WASHED COFFEE":
    "This process removes the skin and pulp from the bean while the coffee fruit is still fresh. Most of the world's coffees are processed in this manner.",
};

const data = {
  acidity:
    "The pleasant tartness of a fine coffee, often referred to as brightness or liveliness that carries the high notes of flavor in a coffee.",
  aeropress:
    "A device for brewing coffee. Coffee is steeped for 10–50 seconds (depending on grind and preferred strength) and then forced through a filter by pressing the plunger through the tube.",
  affogato:
    "Ice cream (traditionally vanilla) “drowned” with a shot of espresso.",
  "aged coffee":
    "Coffee that is held in warehouses for several years, sometimes deliberately, sometimes inadvertently. Such aging reduces acidity and increases body.",
  "american roast":
    "Also known as a 'City Roast', coffee beans are medium brown and offer full flavor, acidity, and varietal character; the roast style traditionally preferred in the U.S.",
  americano:
    "An espresso that is cut with very hot water to fill an American-size cup.",
  arabica:
    "The earliest cultivated species of coffee tree (Coffea arabica), it accounts for 70 percent of the world's coffee and is dramatically superior in cup quality to other coffee species.",
  aroma:
    "The smell that is released from freshly ground coffee (dry aroma) and from freshly brewed coffee.",
  balance:
    "A tasting term applied to a coffee for which no single characteristic overwhelms the others, yet the coffee displays sufficient complexity to be interesting.",
  barista: "Italian term for a skilled, experienced espresso bar operator.",
  "batch roaster":
    "A machine that roasts a given quantity or batch of coffee at a time.",
  "blade grinder": "A device that uses a propellor-like blade to grind coffee.",
  bland:
    "The weak flavor often found in low-grown robusta coffees. Also caused by under-extraction when too little coffee or too coarse a grind is used.",
  blend: "A mixture of two or more single-origin coffees.",
  body: "The perceived thickness, richness, or viscosity of brewed coffee. A full-bodied coffee is one with a heavy mouthfeel.",
  bourbon:
    "An heirloom botanical variety of Coffea arabica, it was discovered on the island of Bourbon, now Réunion, and produces relatively low yields but is prized for its quality.",
  briny:
    "The salty sensation caused by excessive heat when coffee has been left on the warming element too long after brewing, e.g., truck-stop coffee.",
  "burr grinder":
    "Coffee grinder with two adjustable shredding discs or burrs, preferred over the blade grinder for its precision.",
  "café au lait":
    "Coffee drink combining one-third drip-brewed coffee with two-thirds hot, frothed milk.",
  caffeine:
    "An odorless, bitter compound responsible for coffee's stimulating effects.",
  cappuccino:
    "An espresso drink created with one serving of espresso topped with steamed milk and froth.",
  chaff:
    "Flakes of the innermost skin (silverskin) of the coffee fruit clings to green coffee after processing and loosens during roasting.",
  chemex:
    "The classic hourglass-shaped filter coffee brewer. Chemex filters are denser than other paper filters, and many believe that this creates a sweeter, well-balanced cup of coffee.",
  cherry:
    "The fruit of the coffee tree. Each cherry contains two coffee beans or one 'peaberry.'",
  clean:
    "A term used to describe coffee with no discernible defects in its flavor.",
  "clever coffee dripper":
    "A filter cone with a stopper allows coffee to steep before dripping to extract more flavor.",
  "clover brewer": " A high-tech, high-end, single-cup brewing machine.",
  "cold-water method":
    "Coffee grounds are steeped in cold water for ten to twenty hours, then strained to create a concentrate for iced coffee.",
  complexity:
    "A term describing coffees whose flavors layer pleasurably, giving the impression of depth and resonance.",
  cortado:
    "Spanish term for an espresso topped with a small amount of flat steamed milk.",
  crema: "Thick, caramel-colored foam that covers the surface of an espresso.",
  cupping:
    "A process used by professionals to sample and evaluate coffees. Ground coffee is placed into cups, water is poured over the grounds, and the liquid is tasted.",
  "dark roast":
    "Coffee beans roasted to a medium-dark color and beyond; coffee oils appear on the surface of the beans and varietal flavors are muted.",
  decaffeinated:
    "Coffee that has had at least 97% of its caffeine removed is classified as decaffeinated.",
  degassing:
    "A natural process in which recently roasted coffee releases three times its volume as carbon dioxide gas, protecting coffee from the staling effect of oxygen for several days.",
  doppio: "A double espresso.",
  doser:
    "Spring-loaded device on specialized espresso grinders that dispenses single servings of ground coffee.",
  "drip method":
    "Brewing method that allows hot water to settle through a bed of ground coffee.",
  "dry process":
    "Coffee processed by removing the husk or fruit after the coffee fruit has been dried. When done carefully, dry-processed coffee can be fruity and complex.",
  earthiness:
    "A taste characteristic found primarily in coffees from Sumatra and Sulawesi in which wet coffee has come into contact with earth during drying.",
  "espresso roast":
    "Term for coffee taken to a medium-dark roast where acidity diminishes and bittersweet flavors emerge, also known as a Full-City or Viennese Roast.",
  espresso:
    "A brewing method in which hot water is forced under pressure through a compressed bed of finely ground coffee; typically less than 2 ounces of espresso is produced.",
  extraction:
    "Using water that is 'just off the boil, (195-205° F) to draw flavor from coffee grounds. Coffee can be under extracted and taste weak or over extracted and taste bitter.",
  "fair-trade coffee":
    "Coffee purchased from farmers at a 'fair' price as defined by international agencies.",
  "filter method":
    "Any method in which water filters through a bed of ground coffee. It also describes drip method brewers using a paper filter to separate grounds from brewed coffee.",
  finish: "The sensory experience of coffee just as it is swallowed. ",
  "flat white": "Espresso topped with flat, steamed milk.",
  flavor:
    "Flavor is what distinguishes the sensory experience of coffee once its acidity, body, and aroma have been described.",
  "french press":
    "Also known as a press pot or plunger pot, coffee grounds are steeped with water. A strainer plate is pushed down to separate the brewed coffee from the spent grounds.",
  "french roast":
    "Beans become very dark brown in color with an oily surface; acidity and varietal qualities fade; bittersweet notes dominate.",
  "full-city roast":
    "Coffee taken to a medium-dark roast which produces some oil on the bean surface; varietal qualities mellow, body and sweetness increase, acidity diminishes.",
  "green coffee": "Term used for unroasted coffee beans.",
  group:
    "The fixture protruding from the front of most espresso machines into which the portafilter and filter clamp.",
  "hard bean":
    "Coffee grown at altitudes of 4,000 to 4,500 feet. The higher altitudes and lower temperatures produce a slower-maturing fruit and a harder, less porous bean.",
  "high-grown":
    "Arabica coffee grown at altitudes of 3,000 feet and beyond are generally superior in taste quality to coffee grown downslope.",
  hulling:
    "Removal of the coffee bean's skin, called parchment, just prior to sorting.",
  "italian roast":
    "Coffee is generally roasted dark brown in color and is rich and bittersweet in flavor, but the color may range to nearly black and the flavor to nearly burned.",
  latte:
    "A serving of espresso combined with nearly three time as much steamed milk topped with froth.",
  macchiato:
    "A serving of espresso 'stained' or topped off with a small quantity of hot, frothed milk.",
  "machine drying":
    "After coffee beans have been defruited, they are dried in machines with rotating drums or cascading slides. The other option is to dry the beans on open patios.",
  "micro lot":
    "Coffee from a single farm or from a specific part of the coffee farm.",
  mocha: "Espresso combined with chocolate syrup and steamed milk.",
  "monsooned coffee":
    "Dry-processed, single-origin coffee from India deliberately exposed to monsoon winds in open warehouses with the aim to increase body and reduce acidity.",
  "new crop":
    "Coffee roasted soon after harvest when the beans are at their freshest and brightest.",
  "organic coffee":
    "Coffee that has been certified by a third-party agency as having been grown and processed without the use of pesticides, herbicides, or similar chemicals.",
  parchment:
    "A thin skin that covers wet-processed coffee beans after the coffee cherries have been skinned, the pulp removed, and the beans dried.",
  "patio drying":
    "A more traditional alternative to machine drying, patio drying exposes depulped coffee beans to the sun's heat by spreading and raking them in thin layers on open patios.",
  peaberry:
    "A small, round bean formed when only one seed, rather than the usual two, develops at the heart of the coffee fruit.",
  "piston machine":
    "An espresso machine that uses a piston operated by a lever to force brewing water at high pressure through a compacted bed of ground coffee.",
  portafilter:
    "In espresso brewing, a metal object with a plastic handle that holds the coffee filter and clamps onto the group.",
  "pour-over coffee":
    "A method of drip coffee in which water is poured in a thin, steady, slow stream over a filter cone filled with ground coffee. One cup of coffee requires three minutes to brew.",
  puck: "Spent coffee from a portafilter or a Clover brewer.",
  pull: "Espresso shots are “pulled.” The term is a holdover from the time that machines were only lever-operated. One pull produces either a single or a double shot of espresso.",
  pulping:
    "Process of removing the outermost skin of the coffee cherry or fruit.",
  "pump machine":
    "An espresso machine that uses a pump to force brewing water at high pressure through a compacted bed of ground coffee.",
  quakers:
    "Defective coffee beans that fail to roast properly, remaining pale-colored.",
  redeye: "A cup of brewed coffee with espresso.",
  ristretto:
    "Espresso pulled short, containing less water, for a more concentrated drink.",
  roast:
    "Unpalatable green beans are heated to create complex flavors that are extracted during brewing.",
  robusta:
    "A low-growing, high-yield coffee tree, producing full-bodied but bland coffee of inferior quality and higher caffeine than Arabica. Used in cheap blends and instant coffee.",
  "seasonal coffee":
    "Coffee beans ripen at different times of the year in different regions and are available from specialty coffee roasters and in coffeehouses for limited times.",
  "shade grown":
    "Also known as 'Bird Friendly,' coffee is grown under the shade canopy of native trees which reduces the need for pesticide since birds act as natural insect control agents.",
  shot: "A single serving of espresso, generally 1 to no more than 2 ounces.",
  silverskin:
    "The thin, innermost skin of the coffee fruit which clings to dried coffee beans until it is either polished or floats free during roasting, becoming what is known as chaff.",
  "single-origin coffee":
    "Unblended coffee from a single country, region, and crop.",
  "siphon pot":
    "Also known as a Vacuum Pot, this brewer steeps coffee grounds in an upper globe and draws brewed coffee into a lower globe by way of a partial vacuum.",
  sorting:
    "After beans are dried, they are hulled and sorted at a mill. The best coffees are sorted by: size for even roasting, density (the denser the more flavorful), and defects.",
  "specialty coffee assoc. of america (scaa)":
    "An important and influential association of specialty coffee roasters, wholesalers, retailers, importers, and growers.",
  "specialty coffee":
    "Specialty coffee is distinguished by the quality of its raw material and represents 10% of all coffee grown worldwide. Of that amount, only 1-2 percent qualify as superlative.",
  "strictly hard bean":
    "The highest grade designation based on growing altitude in some Central American countries.",
  tamper:
    "In espresso brewing, the small, pestle-like device with a round, flat end used to distribute and compress ground coffee inside the filter basket.",
  terroir:
    "(tare – wahr) From the French word 'terre,' meaning land, it denotes the influence of geography, geology, and climate on a coffee's unique taste qualities.",
  trifecta:
    "A high-tech, single-cup coffee brewer recently introduced on the market.",
  typica:
    "A botanical variety of Coffea arabia, var. typica is one of the oldest and most traditional coffee varieties. Some of the best Latin American coffees are from typica stock.",
  varietal:
    "A term to describe a single predominant botanical variety of coffee tree, such as var. bourbon or var. typica. Often incorrectly used in the coffee world as denoting origin.",
  "varietal character":
    "A tasting or cupping term to describe positive characteristics that distinguish one coffee from those grown in other regions, representing a 'taste of the place' in the cup.",
  "viennese roast": "Also known as a Full-City or Espresso Roast.",
  "wet-processed/ washed coffee":
    "This process removes the skin and pulp from the bean while the coffee fruit is still fresh. Most of the world's coffees are processed in this manner.",
};

const TypeAhead = ({}) => {
  const [value, setValue] = useState("");
  const [result, setResults] = useState([]);
  const element = useRef(null);
  const inputRef = useRef(null);

  const handleChange = (val) => {
    let possibleValues = [];
    if (val.length > 0) {
      possibleValues = Object.keys(data).filter((item) =>
        item.toLowerCase().includes(val.toLowerCase())
      );
      setResults(possibleValues);
    } else {
      setResults([]);
    }
    setValue(val);
  };

  const handleFocus = (e, item) => {
    if (e.code === "ArrowDown") {
      const items = [...element.current.querySelectorAll('[role="menuitem"]')];
      const activeItem = document.activeElement;
      const activeIndex = items.indexOf(activeItem) + 1;
      items[activeIndex]?.focus();
    } else if (e.code === "ArrowUp") {
      const items = [...element.current.querySelectorAll('[role="menuitem"]')];
      const activeItem = document.activeElement;
      const activeIndex = items.indexOf(activeItem) - 1;
      items[activeIndex]?.focus();
      if (activeIndex === -1) {
        inputRef.current.focus();
      }
    }
    if (e.code === "Enter") {
      setValue(item);
      setResults([]);
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div className="w-72">
        <p>Search for coffee related terms...</p>
        <input
          value={value}
          ref={inputRef}
          className="border px-2 py-1 rounded-md w-full"
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={(e) => handleFocus(e)}
        />
        <ul
          ref={element}
          role="menu"
          className="mt-2 w-full flex flex-col shadow-md"
        >
          {result.map((item) => (
            <li
              role="menuitem"
              tabIndex="-1"
              onKeyDown={(e) => handleFocus(e, item)}
              className="flex flex-col border-b p-2 last:border-0 focus:outline outline-2 rounded outline-blue-500"
              onClick={() => {
                setValue(item);
                setResults([]);
              }}
            >
              <p className="capitalize font-semibold">{`${item}`}</p>
            </li>
          ))}
        </ul>
      </div>
      {data[value] && (
        <div className="border bg-slate-200 p-4 rounded">
          <div className="capitalize mb-2 font-semibold">{value}</div>
          <div className="text-sm">{data[value]}</div>
        </div>
      )}
    </div>
  );
};

export default TypeAhead;
