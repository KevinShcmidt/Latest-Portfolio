import { Poppins } from "next/font/google";

export const poppins = Poppins({
    subsets: ["latin"],
    weight : ["400", "700"],
    display: "swap", // Ajoute cette option pour éviter le "FOIT" (flash of invisible text)
  });
  