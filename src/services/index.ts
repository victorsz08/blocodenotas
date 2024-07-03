





type IProps = {
    id: number;
    name: string;
    value: string;
    nomeclature: string;
    promo?: string;
}



export const internet_padrao: IProps[] = [
    {
        id: 1,
        name: "1 Giga",
        value: "R$299,90",
        nomeclature: "BL 1 GIGA GPLAY UP100 FID"
    },
    {
        id: 2,
        name: "750 Megas",
        value: "R$139,90",
        nomeclature: "BL 750M TV OU C/ CEL GPLAY FID"
    },
    {
        id: 3,
        name: "500 Megas",
        value: "R$99,90",
        nomeclature: "BL 500M GPLAY 2P PAP RENT FID"
    },
    {
        id: 4,
        name: "350 Megas",
        value: "R$89,90",
        nomeclature: "BL 350M GPLAY 2P PAP RENT FID"
    }
];


export const internet_promo_six: IProps[] = [
    {
        id: 1,
        name: "1 Giga",
        value: "R$199,90",
        nomeclature: "BL 1 GIGA GPLAY UP100 FID"
    },
    {
        id: 2,
        name: "750 Megas",
        value: "R$129,90",
        nomeclature: "BL 750M TV OU C/ CEL GPLAY FID"
    },
    {
        id: 3,
        name: "500 Megas",
        value: "R$79,90",
        nomeclature: "BL 500M TV OU CEL GPLAY ESP FID",
        promo: "R$49,90/6 MESES"
    },
    {
        id: 4,
        name: "350 Megas",
        value: "R$79,90",
        nomeclature: "BL 350M SINGLE OU C/ FONE GPLAY FID"
    }
];


export const clarotv: IProps[] = [
    {
        id: 1,
        name: "Claro Box tv+",
        value: "R$119,90",
        nomeclature: "CTV+ STREAMING HD TOP ANUNCIO FID",
        promo: "R$99,90 SEM MAX"
    },
    {
        id: 2,
        name: "4k Claro tv+",
        value: "R$149,90",
        nomeclature: "CTV+ TOP HD 4K ANUNCIO FID",
        promo: "R$129,90 UPGRADE TV"
    },
    {
        id: 3,
        name: "SoundBox Claro tv+",
        value: "R$159,90",
        nomeclature: "CTV+ STREAMING HD TOP SOUND ANUNCIO FID",
        promo: "R$139,90 UPGRADE TV"
    },
]


export const cidades_promo = [
    "Cascavel-PR", "Cianorte-PR", "Estancia Velha-RS", "Navegantes-SC", "Xangri-La-RS",
    "Aparecida-SP", "Campos Dos Goytacazes-RJ", "Potim-SP", "Presidente Prudente-SP", 
    "Rio Das Ostras-RJ", "Teofilo Otoni-MG", "Teresopolis-RJ", "Campina Grande-PB",
    "Alegrete-RS", "Ararangua-SC", "Arroio Do Meio-RS", "Cacador-SC", "Cachoeira Do Sul-RS",
    "Camaqua-RS", "Camboriu-SC", "Canela-RS", "Carazinho-RS", "Carlos Barbosa-RS",
    "Charqueadas-RS", "Concordia-SC", "Dois Irmaos-RS", "Eldorado Do Sul-RS", 
    "Encantado-RS", "Estrela-RS", "Fraiburgo-SC", "Frederico Westphalen-RS", 
    "Garibaldi-RS", "Gaspar-SC", "Gramado-RS", "Guaiba-RS", "Herval DOeste-SC", 
    "Icara-SC", "Igrejinha-RS", "Imbe-RS", "Indaial-SC", "Itaqui-RS", "Ivoti-RS", 
    "Joacaba-SC", "Lages-SC", "Mafra-SC", "Marau-RS", "Montenegro-RS", "Nova Petropolis-RS", 
    "Osorio-RS", "Palmeira Das Missoes-RS", "Panambi-RS", "Paranagua-PR", "Parobe-RS", 
    "Rio Do Sul-SC", "Rio Negrinho-SC", "Rio Pardo-RS", "Rosario Do Sul-RS", "Santa Rosa-RS", 
    "Santana Do Livramento-RS", "Santo Angelo-RS", "Sao Bento Do Sul-SC", "Sao Borja-RS", 
    "Sao Gabriel-RS", "Sao Lourenco Do Sul-RS", "Sao Luiz Gonzaga-RS", "Taquara-RS", 
    "Teutonia-RS", "Timbo-SC", "Torres-RS", "Tramandai-RS", "Tres Coroas-RS", "Tubarao-SC", 
    "Vacaria-RS", "Venancio Aires-RS", "Vera Cruz-RS", "Veranopolis-RS", "Videira-SC", 
    "Xanxere-SC", "Xaxim-SC", "Adamantina-SP", "Agudos-SP", "Alvares Machado-SP", 
    "Amparo-SP", "Andradina-SP", "Aracruz-ES", "Araguari-MG", "Araxa-MG", 
    "Armacao Dos Buzios-RJ", "Avare-SP", "Bady Bassitt-SP", "Barbacena-MG", "Barretos-SP", 
    "Barrinha-SP", "Batatais-SP", "Bebedouro-SP", "Birigui-SP", "Boituva-SP", "Cabo Frio-RJ", 
    "Campos Do Jordao-SP", "Casa Branca-SP", "Cataguases-MG", "Catanduva-SP", "Cerquilho-SP", 
    "Colatina-ES", "Conselheiro Lafaiete-MG", "Coronel Fabriciano-MG", "Cravinhos-SP", 
    "Descalvado-SP", "Divinopolis-MG", "Dracena-SP", "Espirito Santo Do Pinhal-SP", 
    "Fernandopolis-SP", "Garca-SP", "Guaira-SP", "Guapiacu-SP", "Guararapes-SP", 
    "Ibate-SP", "Ibiuna-SP", "Ipero-SP", "Itabira-MG", "Itajuba-MG", "Itapeva-SP", 
    "Itapira-SP", "Itauna-MG", "Ituiutaba-MG", "Ituverava-SP", "Jaboticabal-SP", 
    "Jales-SP", "Jardinopolis-SP", "Jose Bonifacio-SP", "Laranjal Paulista-SP", "Lavras-MG", 
    "Leme-SP", "Lencois Paulista-SP", "Lins-SP", "Louveira-SP", "Manhuacu-MG", 
    "Matao-SP", "Miguel Pereira-RJ", "Mirandopolis-SP", "Mococa-SP", "Monte Alto-SP", 
    "Montes Claros-MG", "Nova Friburgo-RJ", "Olimpia-SP", "Orlandia-SP", "Ourinhos-SP", 
    "Para De Minas-MG", "Paraiba Do Sul-RJ", "Passos-MG", "Patos De Minas-MG", "Pedreira-SP", 
    "Penapolis-SP", "Piedade-SP", "Pirassununga-SP", "Pocos De Caldas-MG", "Pontal-SP", 
    "Porto Ferreira-SP", "Potirendaba-SP", "Pouso Alegre-MG", "Presidente Bernardes-SP", 
    "Promissao-SP", "Registro-SP", "Santa Cruz das Palmeiras-SP", "Santa Cruz Do Rio Pardo-SP", 
    "Santa Rosa De Viterbo-SP", "Sao Joao Da Boa Vista-SP", "Sao Joao Del Rei-MG", 
    "Sao Joaquim Da Barra-SP", "Sao Jose Do Rio Pardo-SP", "Sao Pedro Da Aldeia-RJ", 
    "Serra Negra-SP", "Serrana-SP", "Tambau-SP", "Tatui-SP", "Timoteo-MG", "Tremembe-SP", 
    "Tres Coracoes-MG", "Tres Rios-RJ", "Uba-MG", "Valenca-RJ", "Valparaiso-SP", 
    "Vassouras-RJ", "Vicosa-MG", "Votuporanga-SP", "Caldas Novas-GO", "Formosa-GO", 
    "Itumbiara-GO", "Jatai-GO", "Lucas Do Rio Verde-MT", "Navirai-MS", "Nova Mutum-MT", 
    "Ponta Pora-MS", "Rio Verde-GO", "Santa Helena De Goias-GO", "Senador Canedo-GO", 
    "Sinop-MT", "Sorriso-MT", "Tres Lagoas-MS", "Trindade-GO", "Valparaiso De Goias-GO", 
    "Araguaina-TO", "Ariquemes-RO", "Cacoal-RO", "Castanhal-PA", "Gurupi-TO", "Ji-Parana-RO", 
    "Maraba-PA", "Paragominas-PA", "Paraiso Do Tocantins-TO", "Parauapebas-PA", "Vilhena-RO", 
    "Alagoinhas-BA", "Arapiraca-AL", "Barreiras-BA", "Caxias-MA", "Eunapolis-BA", 
    "Feira De Santana-BA", "Ilheus-BA", "Imperatriz-MA", "Itabuna-BA", "Jequie-BA", 
    "Juazeiro Do Norte-CE", "Juazeiro-BA", "Mossoro-RN", "Parnaiba-PI", "Petrolina-PE", 
    "Porto Seguro-BA", "Sobral-CE", "Teixeira De Freitas-BA", "Timon-MA", "Bage-RS", 
    "Balneario Camboriu-SC", "Bento Goncalves-RS", "Blumenau-SC", "Brusque-SC", 
    "Campo Bom-RS", "Capao Da Canoa-RS", "Chapeco-SC", "Criciuma-SC", "Cruz Alta-RS", 
    "Erechim-RS", "Guarapuava-PR", "Itajai-SC", "Itapema-SC", "Lajeado-RS", "Passo Fundo-RS", 
    "Ponta Grossa-PR", "Santa Cruz Do Sul-RS", "Santa Maria-RS", "Sapiranga-RS", 
    "Uruguaiana-RS", "Aracatuba-SP", "Barra Mansa-RJ", "Botucatu-SP", "Cachoeira Paulista-SP", 
    "Cachoeiro De Itapemirim-ES", "Cruzeiro-SP", "Governador Valadares-MG", "Guaratingueta-SP", 
    "Ipatinga-MG", "Itapetininga-SP", "Juiz De Fora-MG", "Lorena-SP", "Macae-RJ", 
    "Marilia-SP", "Petropolis-RJ", "Pindamonhangaba-SP", "Resende-RJ", "Sete Lagoas-MG", 
    "Uberaba-MG", "Uberlandia-MG", "Varginha-MG", "Volta Redonda-RJ", "Anapolis-GO", 
    "Dourados-MS", "Rondonopolis-MT", "Caruaru-PE", "Vitoria Da Conquista-BA"
]
