import type { Item, Recipe } from '..';

/**
 * This is where all the items go that are not produced by any recipe we care about.
 * Ores, etc
 */
export const AluminaSolution = 'Alumina Solution';
export const AluminumIngot = 'Aluminum Ingot';
export const CateriumIngot = 'Caterium Ingot';
export const Coal = 'Coal';
export const Concrete = 'Concrete';
export const CopperIngot = 'Copper Ingot';
export const CrudeOil = 'Crude Oil';
export const DarkMatterResidue = 'Dark Matter Residue';
export const ExcitedPhotonicMatter = 'Excited Photonic Matter';
export const Fuel = 'Fuel';
export const HeavyOilResidue = 'Heavy Oil Residue';
export const IronIngot = 'Iron Ingot';
export const IronOre = 'Iron Ore';
export const Limestone = 'Limestone';
export const NitricAcid = 'Nitric Acid';
export const NitrogenGas = 'Nitrogen Gas';
export const PackagedNitrogenGas = 'Packaged Nitrogen Gas';
export const PackagedTurbofuel = 'Packaged Turbofuel';
export const PetroleumCoke = 'Petroleum Coke';
export const Plastic = 'Plastic';
export const QuartzCrystal = 'Quartz Crystal';
export const ReanimatedSam = 'Reanimated Sam';
export const Rubber = 'Rubber';
export const Silica = 'Silica';
export const SteelIngot = 'Steel Ingot';
export const Sulfur = 'Sulfur';
export const SulfuricAcid = 'Sulfuric Acid';
export const Water = 'Water';

export function GetImportRecipe(item: Item): Recipe {
  return {
    consumes: [],
    name: `Import - ${item}`,
    produces: [
      {
        item,
        rate: 1,
      },
    ],
  };
}
