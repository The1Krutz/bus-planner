import { IronPlate, IronPlateRecipes } from './recipes/ironPlate';
import {
  ReinforcedIronPlate,
  ReinforcedIronPlateRecipes,
} from './recipes/reinforcedIronPlate';
import { IronRod, IronRodRecipes } from './recipes/ironRod';
import { Screws, ScrewsRecipes } from './recipes/screws';
import {
  AdaptiveControlUnit,
  AdaptiveControlUnitRecipes,
} from './recipes/adaptiveControlUnit';
import { AiLimiter, AiLimiterRecipes } from './recipes/aiLimiter';
import {
  AlcladAluminumSheet,
  AlcladAluminumSheetRecipes,
} from './recipes/alcladAluminumSheet';
import {
  AluminumCasing,
  AluminumCasingRecipes,
} from './recipes/aluminumCasing';
import {
  AssemblyDirectorSystem,
  AssemblyDirectorSystemRecipes,
} from './recipes/assemblyDirectorSystem';
import {
  AutomatedWiring,
  AutomatedWiringRecipes,
} from './recipes/automatedWiring';
import { Battery, BatteryRecipes } from './recipes/battery';
import { Cable, CableRecipes } from './recipes/cable';
import { CircuitBoard, CircuitBoardRecipes } from './recipes/circuitBoard';
import { Computer, ComputerRecipes } from './recipes/computer';
import { CoolingSystem, CoolingSystemRecipes } from './recipes/coolingSystem';
import { CopperPowder, CopperPowderRecipes } from './recipes/copperPowder';
import { CopperSheet, CopperSheetRecipes } from './recipes/copperSheet';
import {
  CrystalOscillator,
  CrystalOscillatorRecipes,
} from './recipes/crystalOscillator';
import {
  ElectromagneticControlRod,
  ElectromagneticControlRodRecipes,
} from './recipes/electromagneticControlRod';
import {
  EncasedIndustrialBeam,
  EncasedIndustrialBeamRecipes,
} from './recipes/encasedIndustrialBeam';
import { FicsiteTrigon, FicsiteTrigonRecipes } from './recipes/ficsiteTrigon';
import {
  FusedModularFrame,
  FusedModularFrameRecipes,
} from './recipes/fusedModularFrame';
import { HeatSink, HeatSinkRecipes } from './recipes/heatSink';
import {
  HeavyModularFrame,
  HeavyModularFrameRecipes,
} from './recipes/heavyModularFrame';
import {
  HighSpeedConnector,
  HighSpeedConnectorRecipes,
} from './recipes/highSpeedConnector';
import { ModularEngine, ModularEngineRecipes } from './recipes/modularEngine';
import { ModularFrame, ModularFrameRecipes } from './recipes/modularFrame';
import { Motor, MotorRecipes } from './recipes/motor';
import {
  NeuralQuantumProcessor,
  NeuralQuantumProcessorRecipes,
} from './recipes/neuralQuantumProcessor';
import { NuclearPasta, NuclearPastaRecipes } from './recipes/nuclearPasta';
import {
  PressureConversionCube,
  PressureConversionCubeRecipes,
} from './recipes/pressureConversionCube';
import { Quickwire, QuickwireRecipes } from './recipes/quickwire';
import {
  RadioControlUnit,
  RadioControlUnitRecipes,
} from './recipes/radioControlUnit';
import { Rotor, RotorRecipes } from './recipes/rotor';
import { SmartPlating, SmartPlatingRecipes } from './recipes/smartPlating';
import { Stator, StatorRecipes } from './recipes/stator';
import { SteelBeam, SteelBeamRecipes } from './recipes/steelBeam';
import { SteelPipe, SteelPipeRecipes } from './recipes/steelPipe';
import { Supercomputer, SupercomputerRecipes } from './recipes/supercomputer';
import {
  SuperpositionOscillator,
  SuperpositionOscillatorRecipes,
} from './recipes/superpositionOscillator';
import { TimeCrystal, TimeCrystalRecipes } from './recipes/timeCrystal';
import { TurboMotor, TurboMotorRecipes } from './recipes/turboMotor';
import {
  VersatileFramework,
  VersatileFrameworkRecipes,
} from './recipes/versatileFramework';
import { Wire, WireRecipes } from './recipes/wire';
import {
  AluminaSolution,
  AluminumIngot,
  CateriumIngot,
  Coal,
  Concrete,
  CopperIngot,
  CrudeOil,
  DarkMatterResidue,
  ExcitedPhotonicMatter,
  Fuel,
  HeavyOilResidue,
  IronIngot,
  IronOre,
  Limestone,
  NitricAcid,
  NitrogenGas,
  PackagedNitrogenGas,
  PackagedTurbofuel,
  PetroleumCoke,
  Plastic,
  QuartzCrystal,
  ReanimatedSam,
  Rubber,
  Silica,
  SteelIngot,
  Sulfur,
  SulfuricAcid,
  Water,
} from './recipes/importOnlyItems';
import { FicsiteIngot, FicsiteIngotRecipes } from './recipes/ficsiteIngot';
import {
  DarkMatterCrystal,
  DarkMatterCrystalRecipes,
} from './recipes/darkMatterCrystal';
import { Diamonds, DiamondsRecipes } from './recipes/diamonds';
import {
  MagneticFieldGenerator,
  MagneticFieldGeneratorRecipes,
} from './recipes/magneticFieldGenerator';
import {
  AiExpansionServer,
  AiExpansionServerRecipes,
} from './recipes/aiExpansionServer';
import {
  BallisticWarpDrive,
  BallisticWarpDriveRecipes,
} from './recipes/ballisticWarpDrive';
import {
  SingularityCell,
  SingularityCellRecipes,
} from './recipes/singularityCell';
import {
  ThermalPropulsionRocket,
  ThermalPropulsionRocketRecipes,
} from './recipes/thermalPropulsionRocket';
import {
  BiochemicalSculptor,
  BiochemicalSculptorRecipes,
} from './recipes/biochemicalSculptor';
import { SamFluctuator, SamFluctuatorRecipes } from './recipes/samFluctuator';

/**
 * Non-bus production items. Always imported
 */
export type ImportItems =
  | typeof AluminaSolution
  | typeof AluminumIngot
  | typeof CateriumIngot
  | typeof Coal
  | typeof Concrete
  | typeof CopperIngot
  | typeof CrudeOil
  | typeof DarkMatterResidue
  | typeof ExcitedPhotonicMatter
  | typeof Fuel
  | typeof HeavyOilResidue
  | typeof IronIngot
  | typeof IronOre
  | typeof Limestone
  | typeof NitricAcid
  | typeof NitrogenGas
  | typeof PackagedNitrogenGas
  | typeof PackagedTurbofuel
  | typeof PetroleumCoke
  | typeof Plastic
  | typeof QuartzCrystal
  | typeof ReanimatedSam
  | typeof Rubber
  | typeof Silica
  | typeof SteelIngot
  | typeof Sulfur
  | typeof SulfuricAcid
  | typeof Water;

/**
 * Bus production items, minus the space elevator parts
 */
export type BusItems =
  | typeof AdaptiveControlUnit
  | typeof AiLimiter
  | typeof AlcladAluminumSheet
  | typeof AluminumCasing
  | typeof AssemblyDirectorSystem
  | typeof AutomatedWiring
  | typeof Battery
  | typeof Cable
  | typeof CircuitBoard
  | typeof Computer
  | typeof CoolingSystem
  | typeof CopperPowder
  | typeof CopperSheet
  | typeof CrystalOscillator
  | typeof DarkMatterCrystal
  | typeof Diamonds
  | typeof ElectromagneticControlRod
  | typeof EncasedIndustrialBeam
  | typeof FicsiteIngot
  | typeof FicsiteTrigon
  | typeof FusedModularFrame
  | typeof HeatSink
  | typeof HeavyModularFrame
  | typeof HighSpeedConnector
  | typeof IronPlate
  | typeof IronRod
  | typeof ModularEngine
  | typeof ModularFrame
  | typeof Motor
  | typeof NeuralQuantumProcessor
  | typeof NuclearPasta
  | typeof PressureConversionCube
  | typeof Quickwire
  | typeof RadioControlUnit
  | typeof ReinforcedIronPlate
  | typeof Rotor
  | typeof SamFluctuator
  | typeof Screws
  | typeof SmartPlating
  | typeof Stator
  | typeof SteelBeam
  | typeof SteelPipe
  | typeof Supercomputer
  | typeof SuperpositionOscillator
  | typeof TimeCrystal
  | typeof TurboMotor
  | typeof VersatileFramework
  | typeof Wire;

/**
 * Bus production items, only the space elevator parts
 * TODO - There are more of these
 */
export type SpaceElevatorItems =
  | typeof AdaptiveControlUnit
  | typeof AiExpansionServer
  | typeof AssemblyDirectorSystem
  | typeof AutomatedWiring
  | typeof BallisticWarpDrive
  | typeof BiochemicalSculptor
  | typeof MagneticFieldGenerator
  | typeof ModularEngine
  | typeof SingularityCell
  | typeof SmartPlating
  | typeof ThermalPropulsionRocket
  | typeof VersatileFramework;

/**
 * Combined all items
 */
export type Item = ImportItems | BusItems | SpaceElevatorItems;

type ItemQuantity = {
  item: Item;
  rate: number;
};

export type Recipe = {
  name: string;
  default?: boolean;
  produces: ItemQuantity[];
  consumes: ItemQuantity[];
};

export const AllRecipes: Recipe[] = [
  ...AdaptiveControlUnitRecipes,
  ...AiExpansionServerRecipes,
  ...AiLimiterRecipes,
  ...AlcladAluminumSheetRecipes,
  ...AluminumCasingRecipes,
  ...AssemblyDirectorSystemRecipes,
  ...AutomatedWiringRecipes,
  ...BallisticWarpDriveRecipes,
  ...BatteryRecipes,
  ...BiochemicalSculptorRecipes,
  ...CableRecipes,
  ...CircuitBoardRecipes,
  ...ComputerRecipes,
  ...CoolingSystemRecipes,
  ...CopperPowderRecipes,
  ...CopperSheetRecipes,
  ...CrystalOscillatorRecipes,
  ...DarkMatterCrystalRecipes,
  ...DiamondsRecipes,
  ...ElectromagneticControlRodRecipes,
  ...EncasedIndustrialBeamRecipes,
  ...FicsiteIngotRecipes,
  ...FicsiteTrigonRecipes,
  ...FusedModularFrameRecipes,
  ...HeatSinkRecipes,
  ...HeavyModularFrameRecipes,
  ...HighSpeedConnectorRecipes,
  ...IronPlateRecipes,
  ...IronRodRecipes,
  ...MagneticFieldGeneratorRecipes,
  ...ModularEngineRecipes,
  ...ModularFrameRecipes,
  ...MotorRecipes,
  ...NeuralQuantumProcessorRecipes,
  ...NuclearPastaRecipes,
  ...PressureConversionCubeRecipes,
  ...QuickwireRecipes,
  ...RadioControlUnitRecipes,
  ...ReinforcedIronPlateRecipes,
  ...RotorRecipes,
  ...SamFluctuatorRecipes,
  ...ScrewsRecipes,
  ...SingularityCellRecipes,
  ...SmartPlatingRecipes,
  ...StatorRecipes,
  ...SteelBeamRecipes,
  ...SteelPipeRecipes,
  ...SupercomputerRecipes,
  ...SuperpositionOscillatorRecipes,
  ...ThermalPropulsionRocketRecipes,
  ...TimeCrystalRecipes,
  ...TurboMotorRecipes,
  ...VersatileFrameworkRecipes,
  ...WireRecipes,
];

export const AllImportItems: Item[] = [
  AluminaSolution,
  AluminumIngot,
  CateriumIngot,
  Coal,
  Concrete,
  CopperIngot,
  CrudeOil,
  DarkMatterResidue,
  ExcitedPhotonicMatter,
  Fuel,
  HeavyOilResidue,
  IronIngot,
  IronOre,
  Limestone,
  NitricAcid,
  NitrogenGas,
  PackagedNitrogenGas,
  PackagedTurbofuel,
  PetroleumCoke,
  Plastic,
  QuartzCrystal,
  ReanimatedSam,
  Rubber,
  Silica,
  SteelIngot,
  Sulfur,
  SulfuricAcid,
  Water,
];

export const AllBusItems: Item[] = [
  AdaptiveControlUnit,
  AiExpansionServer,
  AiLimiter,
  AlcladAluminumSheet,
  AluminumCasing,
  AssemblyDirectorSystem,
  AutomatedWiring,
  BallisticWarpDrive,
  Battery,
  BiochemicalSculptor,
  Cable,
  CircuitBoard,
  Computer,
  CoolingSystem,
  CopperPowder,
  CopperSheet,
  CrystalOscillator,
  DarkMatterCrystal,
  Diamonds,
  ElectromagneticControlRod,
  EncasedIndustrialBeam,
  FicsiteIngot,
  FicsiteTrigon,
  FusedModularFrame,
  HeatSink,
  HeavyModularFrame,
  HighSpeedConnector,
  IronPlate,
  IronRod,
  MagneticFieldGenerator,
  ModularEngine,
  ModularFrame,
  Motor,
  NeuralQuantumProcessor,
  NuclearPasta,
  PressureConversionCube,
  Quickwire,
  RadioControlUnit,
  ReinforcedIronPlate,
  Rotor,
  SamFluctuator,
  Screws,
  SingularityCell,
  SmartPlating,
  Stator,
  SteelBeam,
  SteelPipe,
  Supercomputer,
  SuperpositionOscillator,
  ThermalPropulsionRocket,
  TimeCrystal,
  TurboMotor,
  VersatileFramework,
  Wire,
];

export const AllItems: Item[] = [...AllImportItems, ...AllBusItems].sort();
