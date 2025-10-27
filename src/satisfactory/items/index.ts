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
  DarkMatterResidue,
  ExcitedPhotonicMatter,
  NitrogenGas,
  PetroleumCoke,
  QuartzCrystal,
  ReanimatedSam,
  Silica,
  Sulfur,
  SulfuricAcid,
  Water,
  type AluminumIngot,
  type CateriumIngot,
  type Concrete,
  type CopperIngot,
  type HeavyOilResidue,
  type IronIngot,
  type IronOre,
  type PackagedNitrogenGas,
  type Plastic,
  type Rubber,
  type SteelIngot,
} from './recipes/importOnlyItems';
import { FicsiteIngot, FicsiteIngotRecipes } from './recipes/ficsiteIngot';

/**
 * Non-bus production items. Always imported
 */
export type ImportItems =
  | typeof AluminaSolution
  | typeof AluminumIngot
  | typeof CateriumIngot
  | typeof Concrete
  | typeof CopperIngot
  | typeof DarkMatterResidue
  | typeof ExcitedPhotonicMatter
  | typeof HeavyOilResidue
  | typeof IronIngot
  | typeof IronOre
  | typeof NitrogenGas
  | typeof PackagedNitrogenGas
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
  | typeof AssemblyDirectorSystem
  | typeof AutomatedWiring
  | typeof ModularEngine
  | typeof SmartPlating
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
  ...AiLimiterRecipes,
  ...AlcladAluminumSheetRecipes,
  ...AluminumCasingRecipes,
  ...AssemblyDirectorSystemRecipes,
  ...AutomatedWiringRecipes,
  ...BatteryRecipes,
  ...CableRecipes,
  ...CircuitBoardRecipes,
  ...ComputerRecipes,
  ...CoolingSystemRecipes,
  ...CopperPowderRecipes,
  ...CopperSheetRecipes,
  ...CrystalOscillatorRecipes,
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
  ...ScrewsRecipes,
  ...SmartPlatingRecipes,
  ...StatorRecipes,
  ...SteelBeamRecipes,
  ...SteelPipeRecipes,
  ...SupercomputerRecipes,
  ...SuperpositionOscillatorRecipes,
  ...TimeCrystalRecipes,
  ...TurboMotorRecipes,
  ...VersatileFrameworkRecipes,
  ...WireRecipes,
];

export const AllBusItems: Item[] = [
  AdaptiveControlUnit,
  AiLimiter,
  AlcladAluminumSheet,
  AluminumCasing,
  AssemblyDirectorSystem,
  AutomatedWiring,
  Battery,
  Cable,
  CircuitBoard,
  Computer,
  CoolingSystem,
  CopperPowder,
  CopperSheet,
  CrystalOscillator,
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
  Screws,
  SmartPlating,
  Stator,
  SteelBeam,
  SteelPipe,
  Supercomputer,
  SuperpositionOscillator,
  TimeCrystal,
  TurboMotor,
  VersatileFramework,
  Wire,
];
