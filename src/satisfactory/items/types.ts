import type { IronPlate } from './recipes/ironPlate';
import type { IronRod } from './recipes/ironRod';
import type {
  AluminumIngot,
  CateriumIngot,
  Concrete,
  CopperIngot,
  HeavyOilResidue,
  IronIngot,
  IronOre,
  Plastic,
  Rubber,
  SteelIngot,
} from './recipes/importOnlyItems';
import type { ReinforcedIronPlate } from './recipes/reinforcedIronPlate';
import type { Screws } from './recipes/screws';
import type { SteelBeam } from './recipes/steelBeam';
import type { Wire } from './recipes/wire';
import type { Cable } from './recipes/cable';
import type { AdaptiveControlUnit } from './recipes/adaptiveControlUnit';
import type { AiLimiter } from './recipes/aiLimiter';
import type { AlcladAluminumSheet } from './recipes/alcladAluminumSheet';
import type { AluminumCasing } from './recipes/aluminumCasing';
import type { AssemblyDirectorSystem } from './recipes/assemblyDirectorSystem';
import type { AutomatedWiring } from './recipes/automatedWiring';
import type { Battery } from './recipes/battery';
import type { Quickwire } from './recipes/quickwire';
import type { CircuitBoard } from './recipes/circuitBoard';
import type { Computer } from './recipes/computer';
import type { Supercomputer } from './recipes/supercomputer';
import type { CoolingSystem } from './recipes/coolingSystem';
import type { HeatSink } from './recipes/heatSink';
import type { CopperPowder } from './recipes/copperPowder';
import type { CopperSheet } from './recipes/copperSheet';
import type { CrystalOscillator } from './recipes/crystalOscillator';
import type { ElectromagneticControlRod } from './recipes/electromagneticControlRod';
import type { EncasedIndustrialBeam } from './recipes/encasedIndustrialBeam';
import type { FicsiteTrigon } from './recipes/ficsiteTrigon';
import type { ModularEngine } from './recipes/modularEngine';
import type { ModularFrame } from './recipes/modularFrame';
import type { FusedModularFrame } from './recipes/fusedModularFrame';
import type { HeavyModularFrame } from './recipes/heavyModularFrame';
import type { HighSpeedConnector } from './recipes/highSpeedConnector';
import type { Motor } from './recipes/motor';
import type { NeuralQuantumProcessor } from './recipes/neuralQuantumProcessor';
import type { NuclearPasta } from './recipes/nuclearPasta';
import type { PressureConversionCube } from './recipes/pressureConversionCube';
import type { RadioControlUnit } from './recipes/radioControlUnit';
import type { Rotor } from './recipes/rotor';
import type { Stator } from './recipes/stator';
import type { SmartPlating } from './recipes/smartPlating';
import type { SteelPipe } from './recipes/steelPipe';
import type { SuperpositionOscillator } from './recipes/superpositionOscillator';
import type { TimeCrystal } from './recipes/timeCrystal';
import type { TurboMotor } from './recipes/turboMotor';
import type { VersatileFramework } from './recipes/versatileFramework';

/**
 * This includes evey string for all items. Including the non-production ones
 */
export type Item =
  | typeof AdaptiveControlUnit
  | typeof AiLimiter
  | typeof AlcladAluminumSheet
  | typeof AluminumCasing
  | typeof AluminumIngot
  | typeof AssemblyDirectorSystem
  | typeof AutomatedWiring
  | typeof Battery
  | typeof Cable
  | typeof CateriumIngot
  | typeof CircuitBoard
  | typeof Computer
  | typeof Concrete
  | typeof CoolingSystem
  | typeof CopperIngot
  | typeof CopperPowder
  | typeof CopperSheet
  | typeof CrystalOscillator
  | typeof ElectromagneticControlRod
  | typeof EncasedIndustrialBeam
  | typeof FicsiteTrigon
  | typeof FusedModularFrame
  | typeof HeatSink
  | typeof HeavyModularFrame
  | typeof HeavyOilResidue
  | typeof HighSpeedConnector
  | typeof IronIngot
  | typeof IronOre
  | typeof IronPlate
  | typeof IronRod
  | typeof ModularEngine
  | typeof ModularFrame
  | typeof Motor
  | typeof NeuralQuantumProcessor
  | typeof NuclearPasta
  | typeof Plastic
  | typeof PressureConversionCube
  | typeof Quickwire
  | typeof RadioControlUnit
  | typeof ReinforcedIronPlate
  | typeof Rotor
  | typeof Rubber
  | typeof Screws
  | typeof SmartPlating
  | typeof Stator
  | typeof SteelBeam
  | typeof SteelIngot
  | typeof SteelPipe
  | typeof Supercomputer
  | typeof SuperpositionOscillator
  | typeof TimeCrystal
  | typeof TurboMotor
  | typeof VersatileFramework
  | typeof Wire;

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
