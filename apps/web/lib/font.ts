import { Silkscreen } from "next/font/google";
import { Dokdo } from "next/font/google";
import { Nanum_Brush_Script } from "next/font/google";

const silkScreen = Silkscreen({ weight: ["400", "700"], subsets: ["latin"] });
const dokdo = Dokdo({ weight: "400", subsets: ["latin"] });
const NBS = Nanum_Brush_Script({ weight: "400", subsets: ["latin"] });

export { silkScreen, dokdo, NBS };
