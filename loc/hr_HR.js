module.exports = {
  _: {
    storage_is_encrypted: 'Vaš spremnik je kriptiran. Za dekripcoju je potrebna lozinka.',
    enter_password: 'Unesi lozinku',
    bad_password: 'Kriva lozinka, pokušaj ponovo',
    never: 'nikad',
    continue: 'Continue',
    ok: 'OK',
  },
  wallets: {
    select_wallet: 'Odaberi volet',
    options: 'opcije',
    list: {
      app_name: 'Blue Wallet',
      title: 'Voleti',
      header: 'Volet je par privatnog ključa (tajna!) i javne adrese' + 'koju slobodno možete dijeliti kada primate novce.',
      add: 'Dodaj volet',
      create_a_wallet: 'Stvori novi volet',
      create_a_wallet1: 'Ne košta ništa i možete',
      create_a_wallet2: 'ih stvoriti moliko želite',
      latest_transaction: 'posljednja transakcija',
      empty_txs1: 'Vaše transakcije će se pojaviti ovdje',
      empty_txs2: 'trenutno nema nijedne',
      tap_here_to_buy: 'Klikni ovdje za kupnju Bitkoina',
    },
    reorder: {
      title: 'Uredi volete',
    },
    add: {
      title: 'Dodaj volet',
      description: 'Možete ili skenirati bekap papirnati volet (u WIF - Wallet Import Format), ili stvoriti novi volet. Segwit je podržan.',
      scan: 'Skeniraj',
      create: 'Stvori',
      label_new_segwit: 'Novi SegWit',
      label_new_lightning: 'Novi Lightning',
      wallet_name: 'ime voleta',
      wallet_type: 'tip',
      or: 'ili',
      import_wallet: 'Unesi volet',
      imported: 'Unešeno',
      coming_soon: 'Dolazi uskoro',
      lightning: 'Lightning',
      bitcoin: 'Bitcoin',
    },
    details: {
      title: 'Volet',
      address: 'Adresa',
      type: 'Tip',
      label: 'Oznaka',
      destination: 'odredište',
      description: 'opis',
      are_you_sure: 'Jesi li ziher?',
      yes_delete: 'Da, briši',
      no_cancel: 'Ne, otiaži',
      delete: 'Obriši',
      save: 'Pohrani',
      delete_this_wallet: 'Obriši ovaj volet',
      export_backup: 'Izvoz / bekap',
      buy_bitcoin: 'Kupi Bitcoin',
      show_xpub: 'Prikaži voletov XPUB',
    },
    export: {
      title: 'izvoz voleta',
    },
    xpub: {
      title: 'volet XPUB',
      copiedToClipboard: 'Kopirano u međuspremnik.',
    },
    import: {
      title: 'unesi',
      explanation:
        'Ovdje upiši svoj mnemonik slijed riječi, privatni ključ, WIF, ili što već imaš. BlueWallet će pokušati porocijeniti format i unesti tvoj volet.',
      imported: 'Uneseno',
      error: 'Neuspješan unos. Molimo pažljivo provjerite ispravnost unesenih podataka.',
      success: 'Uspjeh',
      do_import: 'Unesi',
      scan_qr: 'ili skeniraj QR kod?',
    },
    scanQrWif: {
      go_back: 'Povratak',
      cancel: 'Otkaži',
      decoding: 'Dekodiranje',
      input_password: 'Unesi lozinku',
      password_explain: 'Ovo je BIP38 enkriptiran privatni ključ',
      bad_password: 'Pogrešna lozinka',
      wallet_already_exists: 'Ovaj volet već postoji',
      bad_wif: 'Pogrešan WIF',
      imported_wif: 'Unesen WIF ',
      with_address: ' sa adresom ',
      imported_segwit: 'Unesen SegWit',
      imported_legacy: 'Unesen Legacy',
      imported_watchonly: 'Unesen samo za pregled',
    },
  },
  transactions: {
    list: {
      tabBarLabel: 'Transakcije',
      title: 'transakcije',
      description: 'Popis dolaznih i odlaznih transakcija vašeg voleta.',
      conf: 'konf.',
    },
    details: {
      title: 'Transakcija',
      from: 'Od',
      to: 'Za',
      copy: 'Kopiraj',
      transaction_details: 'Detalji transakcije',
      show_in_block_explorer: 'Prikaži u blok eksploreru',
    },
  },
  send: {
    header: 'Šalji',
    details: {
      title: 'Stvori transakciju',
      amount_field_is_not_valid: 'Iznos nije ispravan',
      fee_field_is_not_valid: 'Ovo polje nije ispravno',
      address_field_is_not_valid: 'Polje adrese nije ispravno',
      total_exceeds_balance: 'Iznos je veći od raspoloživog.',
      create_tx_error: 'Pogreška prilikom stvaranja transakcije. Molimo provijeri da je adresa ispravna.',
      address: 'adresa',
      amount_placeholder: 'iznos za slanje (u BTC)',
      fee_placeholder: 'plus trošak transakcije (u BTC)',
      note_placeholder: 'bilješka za evidenciju',
      cancel: 'Otkaži',
      scan: 'Skeniraj',
      send: 'Šalji',
      create: 'Stvori',
      remaining_balance: 'Preostali saldo',
    },
    confirm: {
      header: 'Potvrdi',
      sendNow: 'Pošalji sad',
    },
    success: {
      done: 'U redu',
    },
    create: {
      details: 'Detalji',
      title: 'stvori transakciju',
      error: 'Pogreška. Neispravna adresa ili iznos slanja?',
      go_back: 'Nazad',
      this_is_hex: 'Ovoj je hex transakcije, potpisan i spreman za objavljivanje na mrežu.',
      to: 'Za',
      amount: 'Iznos',
      fee: 'Trošak slanja',
      tx_size: 'TX veličina',
      satoshi_per_byte: 'Satoshi / byte',
      memo: 'Bilješka',
      broadcast: 'Objavi',
      not_enough_fee: 'Trošak slanja je premal. Povećaj ga.',
    },
  },
  receive: {
    header: 'Primanje',
    details: {
      title: 'Pokaži ovu adresu platitelju',
      share: 'pokaži',
      copiedToClipboard: 'Kopirano u međuspremnik.',
      label: 'Opis',
      setAmount: 'Odredi iznos za primiti',
    },
  },
  buyBitcoin: {
    header: 'Kupi Bitcoin',
    tap_your_address: 'Klikni na adresu za spremanje u međuspremnik:',
    copied: 'Spremljeno u međuspremnik!',
  },
  settings: {
    header: 'Postavke',
    plausible_deniability: 'Fejk volet...',
    storage_not_encrypted: 'Spremnik: nije kriptiran',
    storage_encrypted: 'Spremnik: je kriptiran',
    password: 'Lozinka',
    password_explain: 'Upiši lozinku koja će dekriptirati spremnik.',
    retype_password: 'Ponovi lozinku',
    passwords_do_not_match: 'Lozinke su različite',
    encrypt_storage: 'Kriptiraj spremnik',
    about: 'Iznos',
    language: 'Jezik',
    currency: 'Valuta',
  },
  plausibledeniability: {
    title: 'Fejk volet',
    help:
      'U iznimnim okolnostima netko gadan (pa još ako drži oklagiju) te' +
      'može neljubazno pritisnuti da mu otkriješ lozinku za ovaj volet.' +
      'BlueWallet ti čuva leđa buraz. Nemaš brige. Gledaj.' +
      'Stvoriti ćemo dupli volet sa drugačijom lozinkom. Haha, žišku?' +
      'Pa kad se ovaj počne pjeniti a ti vidiš da je vrag odnio šalu' +
      'ti mu podvali ovaj drugi volet. Eto mu ga. Nek si cucla.',
    help2: 'Novi spremnik će biti posve funkcionalan, možeš pohraniti koliko' + 'misliš da je potrebno da izgleda uvjerljivo.',
    create_fake_storage: 'Stvori fejk enkriptirani spremnik',
    go_back: 'Povratak',
    create_password: 'Unesi lozinku',
    create_password_explanation: 'Lozinka za fejk spremnik treba biti drugačija od lozinke za oriđi spremnik',
    password_should_not_match: 'Lozinka za fejk spremnik treba biti drugačija od lozinke za oriđi spremnik',
    retype_password: 'Ponovi lozinku',
    passwords_do_not_match: 'Lozinke ne pašu, pokušaj ponovo',
    success: 'Uspjeh',
  },
  lnd: {
    title: 'Uredi novčeke',
    choose_source_wallet: 'Odaberi izvor',
    refill_lnd_balance: 'Dopuni Lightning volet saldo',
    refill: 'Dopuni',
    withdraw: 'Isprazni',
    expired: 'Isteklo',
    sameWalletAsInvoiceError: 'Ne možeš platiti račun s istim voletom s kojim si račun stvorio, ono.',
  },
};
