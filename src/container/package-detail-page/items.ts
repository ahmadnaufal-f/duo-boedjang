export type Package = {
    [key: string]: boolean | string
}

export const packages: Package[] = [
    {
        LisensiSeumurHidup: true,
        DesignPromosi: true,
        SupportManagement: true,
        FreeAkunSosMed: true,
        SistemInventori: false,
        FormReportPenjualan: false,
        FormKPIGajiPegawai: false,
        Booth: "Booth Uk 90x60",
        XBanner: true,
        DaftarMenu: true,
        BubukCokelat: "1 Pack / 50 Porsi",
        PanciStainless: true,
        GayungStainless: true,
        TermosEs: "14L",
        MugStainless: "6 pcs",
        TempatSedotanStainless: true,
        ToplesRoti: true,
        KainLap: "2 pcs",
        CupSablonUk14Oz: "25 pcs",
        CupSablonUk18Oz: "25 pcs",
        TutupCup: "Tutup Biasa",
        SendokTehStainless: "6 pcs",
        Sedotan: "50 pcs",
        GelasTakar: true,
        KantongPlastik: "1 Pack",
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
        SistemInventori: true,
        FormReportPenjualan: true,
        FormKPIGajiPegawai: true,
        Booth: "Booth Atap Uk 100x60",
        XBanner: true,
        DaftarMenu: true,
        BubukCokelat: "5 Pack / 250 Porsi",
        PanciStainless: true,
        GayungStainless: true,
        TermosEs: "30L",
        MugStainless: "12 pcs",
        TempatSedotanStainless: true,
        ToplesRoti: true,
        KainLap: "4 pcs",
        CupSablonUk14Oz: "125 pcs",
        CupSablonUk18Oz: "125 pcs",
        TutupCup: "Cup Seal 1 Roll",
        SendokTehStainless: "12 pcs",
        Sedotan: "250 pcs",
        GelasTakar: true,
        KantongPlastik: "5 Pack",
        PackagingKardus: true,
        CupSealerMachine: "1 Unit",
        Apron: "2 Unit",
        Kompor: "1 Unit",
        Regulator: "1 Unit",
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
    { id: 'SistemInventori', text: 'Sistem Inventori'},
    { id: 'FormReportPenjualan', text: 'Form Report Penjualan'},
    { id: 'FormKPIGajiPegawai', text: 'Form KPI & Gaji Pegawai'},
    { id: 'Booth', text: 'Booth'},
    { id: 'XBanner', text: 'X-Banner'},
    { id: 'DaftarMenu', text: 'Daftar Menu'},
    { id: 'BubukCokelat', text: 'Bubuk Cokelat'},
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
    { id: 'KantongPlastik', text: 'Kantong Plastik'},
    { id: 'PackagingKardus', text: 'Packaging Kardus'},
    { id: 'CupSealerMachine', text: 'Cup Sealer Machine'},
    { id: 'Apron', text: 'Apron Keren'},
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