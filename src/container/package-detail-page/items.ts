export type Package = {
    [key: string]: boolean
}

export const packages: Package[] = [
    {
        LisensiSeumurHidup: true,
        DesignPromosi: true,
        SupportManagement: true,
        FreeAkunSosMed: true,
        Booth: true,
        XBanner: true,
        DaftarMenu: true,
        BahanBaku: true,
        PanciStainless: true,
        GayungStainless: true,
        TermosEs: true,
        MugStainless: true,
        TempatSedotanStainless: true,
        ToplesRoti: true,
        KainLap: true,
        CupSablonUk14Oz: true,
        CupSablonUk18Oz: true,
        TutupCup: true,
        SendokTehStainless: true,
        Sedotan: true,
        GelasTakar: true,
        PackagingKardus: true,
        CupSealerMachine: false,
        Apron: false,
        Kompor: false,
        Regulator: false,
    },
    {
        LisensiSeumurHidup: true,
        DesignPromosi: true,
        SupportManagement: true,
        FreeAkunSosMed: true,
        Booth: true,
        XBanner: true,
        DaftarMenu: true,
        BahanBaku: true,
        PanciStainless: true,
        GayungStainless: true,
        TermosEs: true,
        MugStainless: true,
        TempatSedotanStainless: true,
        ToplesRoti: true,
        KainLap: true,
        CupSablonUk14Oz: true,
        CupSablonUk18Oz: true,
        TutupCup: true,
        SendokTehStainless: true,
        Sedotan: true,
        GelasTakar: true,
        PackagingKardus: true,
        CupSealerMachine: true,
        Apron: true,
        Kompor: true,
        Regulator: true,
    },
]

export type Items = {
    id: string,
    text: string
}

export const items:Items[] = [
    { id: 'LisensiSeumurHidup', text: 'Lisensi Seumur Hidup'},
    { id: 'DesignPromosi', text: 'Design Promosi'},
    { id: 'SupportManagement', text: 'Support Management'},
    { id: 'FreeAkunSosMed', text: 'Free Akun Sosmed'},
    { id: 'Booth', text: 'Booth'},
    { id: 'XBanner', text: 'X-Banner'},
    { id: 'DaftarMenu', text: 'Daftar Menu'},
    { id: 'BahanBaku', text: 'Bahan Baku'},
    { id: 'PanciStainless', text: 'Panci Stainless'},
    { id: 'GayungStainless', text: 'Gayung Stainless'},
    { id: 'TermosEs', text: 'Termos Es'},
    { id: 'MugStainless', text: 'Mug Stainless'},
    { id: 'TempatSedotanStainless', text: 'Tempat Sedotan Stainless'},
    { id: 'ToplesRoti', text: 'Toples Roti'},
    { id: 'KainLap', text: 'Kain Lap'},
    { id: 'CupSablonUk14Oz', text: 'Cup Sablon Uk 14 Oz'},
    { id: 'CupSablonUk18Oz', text: 'Cup Sablon Uk 18 Oz'},
    { id: 'TutupCup', text: 'Tutup Cup'},
    { id: 'SendokTehStainless', text: 'Sendok Teh Stainless'},
    { id: 'Sedotan', text: 'Sedotan'},
    { id: 'GelasTakar', text: 'Gelas Takar'},
    { id: 'PackagingKardus', text: 'Packaging Kardus'},
    { id: 'CupSealerMachine', text: 'Cup Sealer Machine'},
    { id: 'Apron', text: 'Apron'},
    { id: 'Kompor', text: 'Kompor'},
    { id: 'Regulator', text: 'Regulator'}
]

export type Header = {
    title: string
    priceBefore: string
    priceAfter: string
}

export const headers: Header[] = [
    {
        title: "Paket Boedjang Super",
        priceBefore: "Rp 7.000.000",
        priceAfter: "Rp 2,99jt",
    },
    {
        title: "Paket Boedjang Premium",
        priceBefore: "Rp 16.400.000",
        priceAfter: "Rp 7,49jt",
    }
];