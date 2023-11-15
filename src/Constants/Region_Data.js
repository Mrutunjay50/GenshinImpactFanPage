import {Sumeru6,Mon4,Mondstadt12,Liyue1,Liyue2,Inazuma1,Inazuma2,Inazuma3,Inazuma4,Inazuma5,Inazuma6, Fontaine1, Fontaine2, Fontaine3} from '../assets/index';
import {Element_Anemo,Element_Cryo,Element_Dendro,Element_Electro,Element_Geo,Element_Hydro,Element_Pyro} from '../assets/index';
import {Nahida,Paimon,Venti_Ori,Zhongli,Raiden_shogun20,Furina} from '../assets/index';
const Region_Data = [

    {
        regionSerenties:[Mondstadt12,Mon4],
        nationLogo:'',
        elementLogo:Element_Anemo,
        nation:'Mondstadt',
        element:'Anemo',
        Archon:'Barbatos(Venti)',
        imgCharacter : Venti_Ori,
        Ideals:'Freedom',
        GoverningBody:'KnightsOfFavonius'
    },
    {
        regionSerenties:[Liyue1,Liyue2],
        nationLogo:'',
        elementLogo:Element_Geo,
        nation:'Liyue',
        element:'Geo',
        Archon:'Morax(Zhongli)',
        imgCharacter : Zhongli,
        Ideals:'Contracts',
        GoverningBody:'Liyue Quixing'
    },
    {
        regionSerenties:[Inazuma1,Inazuma2,Inazuma3,Inazuma4,Inazuma5,Inazuma6],
        nationLogo:'',
        elementLogo:Element_Electro,
        nation:'Inazuma',
        element:'Electro',
        Archon:'Beelzebul(Raiden Shogun)',
        imgCharacter : Raiden_shogun20,
        Ideals:'Eternity',
        GoverningBody:'Inazuma Shogunate'
    },
    {
        regionSerenties:[Sumeru6],
        nationLogo:'',
        elementLogo:Element_Dendro,
        nation:'Sumeru',
        element:'Dendro',
        Archon:'Buer(Nahida Or Kusanali)',
        imgCharacter : Nahida,
        Ideals:'Wisdom',
        GoverningBody:'Sumeru Academia'
    },
    {
        regionSerenties:[Fontaine3,Fontaine2,Fontaine1],
        nationLogo:'',
        elementLogo:Element_Hydro,
        nation:'Fontaine',
        element:'Hydro',
        Archon:'Focalors',
        imgCharacter : Furina,
        Ideals:'Justice',
        GoverningBody:'Fontaine Court'
    },
    // {
    //     regionSerenties:[],
    //     nationLogo:'',
    //     elementLogo:{Element_Anemo},
    //     nation:'',
    //     element:'',
    //     Archon:'',
    //     Ideals:'',
    //     GoverningBody:''
    // },
    // {
    //     regionSerenties:[],
    //     nationLogo:'',
    //     elementLogo:{Element_Anemo},
    //     nation:'',
    //     element:'',
    //     Archon:'',
    //     Ideals:'',
    //     GoverningBody:''
    // },
];

export default Region_Data;