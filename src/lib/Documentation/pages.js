// duplicate the import line and change the variable name
// then use the path to the md file and then add ?raw
// ex:
//      "./test.md?raw"
//      "./particle-tools.md?raw"
import PageParticleTools from "./particle-tools.md?raw";

// Extra Control (unlisted)
import PageExtraControl from "./Extra-Control.md?raw";

// TurboWeather
import PageTurboWeather from "./TurboWeather.md?raw";

// Number Utilities
import PageNumberUtilities from "./NumberUtilities.md?raw";

// PenguinAI
import PagePenguinAI from "./PenguinAI.md?raw";


// YeetYourFiles
import PageYeetYourFiles from "./YeetYourFiles.md?raw";


// Boxed Physics
import BoxedPhysics from "./BoxedPhysics.md?raw";


// Resolution
import Resolution from "./Resolution.md?raw";

// Date Format V2
import DateFormatV2 from "./DateFormatV2.md?raw";

// ODE
import ODE from "./ODE.md?raw";


export default {
    // the key is the path to the docs page
    // so you can do "sharkpool-particle-tools" for example
    // you cant use / like "sharkpool/particle-tools" yet
    "particle-tools": PageParticleTools,
    "Extra-Control": PageExtraControl,


    //TurboWeather
    "TurboWeather": PageTurboWeather,

    // Number Utilities
    "NumberUtilities": PageNumberUtilities,

    // PenguinAI
    "PenguinAI": PagePenguinAI,


    // YeetYourFiles
    "YeetYourFiles": PageYeetYourFiles,


    // Boxed Physics
    "BoxedPhysics": BoxedPhysics,

    
    // Resolution
    "Resolution": Resolution,

    "DateFormatV2": DateFormatV2,

    // ODE
    "ODE": ODE,

};
