import {
    Sumeru6, Sumeru1, Sumeru7,
    Mon4, Mondstadt12, Mondstadt16,
    Liyue1, Liyue2, Liyue3, Liyue4, Liyue5, Liyue6,
    Inazuma1, Inazuma2, Inazuma3, Inazuma4, Inazuma5, Inazuma6,
    Fontaine1, Fontaine2, Fontaine3, Fontaine4, Fontaine5, Fontaine6, Fontaine7,
    Teyvat,
    Home,
    Lumine0
} from '../assets/index';
import {
    Element_Anemo,
    Element_Dendro,
    Element_Electro,
    Element_Geo,
    Element_Hydro,
    Element_Pyro
} from '../assets/index';
import {
    Nahida,
    Venti_Ori,
    Zhongli,
    Raiden_shogun20,
    FurinaOri1,
    Paimon
} from '../assets/index';

// Default images
const DEFAULT_REGION_IMAGE = Teyvat || Home;
const DEFAULT_CHARACTER_IMAGE = Lumine0 || Paimon;

const Region_Data = [
    {
        regionSerenties: [Mondstadt12, Mon4, Mondstadt16],
        nationLogo: '',
        elementLogo: Element_Anemo,
        nation: 'Mondstadt',
        element: 'Anemo',
        Archon: 'Barbatos (Venti)',
        imgCharacter: Venti_Ori,
        Ideals: 'Freedom',
        GoverningBody: 'Knights of Favonius'
    },
    {
        regionSerenties: [Liyue1, Liyue2, Liyue3, Liyue4, Liyue5, Liyue6],
        nationLogo: '',
        elementLogo: Element_Geo,
        nation: 'Liyue',
        element: 'Geo',
        Archon: 'Morax (Zhongli)',
        imgCharacter: Zhongli,
        Ideals: 'Contracts',
        GoverningBody: 'Liyue Qixing'
    },
    {
        regionSerenties: [Inazuma1, Inazuma2, Inazuma3, Inazuma4, Inazuma5, Inazuma6],
        nationLogo: '',
        elementLogo: Element_Electro,
        nation: 'Inazuma',
        element: 'Electro',
        Archon: 'Beelzebul (Raiden Shogun)',
        imgCharacter: Raiden_shogun20,
        Ideals: 'Eternity',
        GoverningBody: 'Inazuma Shogunate'
    },
    {
        regionSerenties: [Sumeru6, Sumeru1, Sumeru7],
        nationLogo: '',
        elementLogo: Element_Dendro,
        nation: 'Sumeru',
        element: 'Dendro',
        Archon: 'Buer (Nahida / Kusanali)',
        imgCharacter: Nahida,
        Ideals: 'Wisdom',
        GoverningBody: 'Sumeru Academia'
    },
    {
        regionSerenties: [Fontaine1, Fontaine2, Fontaine3, Fontaine4, Fontaine5, Fontaine6, Fontaine7],
        nationLogo: '',
        elementLogo: Element_Hydro,
        nation: 'Fontaine',
        element: 'Hydro',
        Archon: 'Focalors (Furina)',
        imgCharacter: FurinaOri1,
        Ideals: 'Justice',
        GoverningBody: 'Fontaine Court of Fontaine'
    },
    {
        regionSerenties: [DEFAULT_REGION_IMAGE], // Using default - Natlan images need to be added
        nationLogo: '',
        elementLogo: Element_Pyro,
        nation: 'Natlan',
        element: 'Pyro',
        Archon: 'Murata (The Pyro Archon)',
        imgCharacter: DEFAULT_CHARACTER_IMAGE, // Using default - Natlan archon image needs to be added
        Ideals: 'War',
        GoverningBody: 'Tribes of Natlan'
    },
    // Snezhnaya (Cryo) - Not yet released but confirmed
    // {
    //     regionSerenties: [], // Images to be added
    //     nationLogo: '',
    //     elementLogo: Element_Cryo,
    //     nation: 'Snezhnaya',
    //     element: 'Cryo',
    //     Archon: 'Tsaritsa (The Cryo Archon)',
    //     imgCharacter: '', // Image to be added
    //     Ideals: 'Love',
    //     GoverningBody: 'Fatui / Snezhnaya'
    // },
];

export default Region_Data;