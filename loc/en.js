module.exports = {
  _: {
    storage_is_encrypted: 'Your storage is encrypted. Password is required to decrypt it',
    enter_password: 'Enter password',
    bad_password: 'Bad pasword, try again',
    months_ago: 'months ago',
    days_ago: 'days ago',
    hours_ago: 'hours ago',
    minutes_ago: 'minutes ago',
    never: 'never',
  },
  wallets: {
    list: {
      tabBarLabel: 'Wallets',
      app_name: 'Blue Wallet',
      title: 'wallets',
      header: 'A wallet represents a pair of a secret (private key) and an address' + 'you can share to receive coins.',
      add: 'Add Wallet',
      create_a_wallet: 'Create a wallet',
      create_a_wallet1: "It's free and you can create",
      create_a_wallet2: 'as many as you like',
      latest_transaction: 'latest transaction',
      empty_txs1: 'Your transactions will appear here,',
      empty_txs2: 'none at the moment',
    },
    add: {
      title: 'add wallet',
      description:
        'You can either scan backup paper wallet (in WIF - Wallet Import Format), or create a new wallet. Segwit wallets supported by default.',
      scan: 'Scan',
      create: 'Create',
      label_new_segwit: 'New SegWit',
      wallet_name: 'wallet name',
      wallet_type: 'wallet type',
      or: 'or',
      import_wallet: 'Import wallet',
      imported: 'Imported',
      coming_soon: 'Coming soon',
      lightning: 'Lightning',
      bitcoin: 'Bitcoin',
    },
    details: {
      title: 'wallet details',
      address: 'Address',
      type: 'Type',
      label: 'Label',
      are_you_sure: 'Are you sure?',
      yes_delete: 'Yes, delete',
      no_cancel: 'No, cancel',
      delete_this_wallet: 'Delete this wallet',
      export_backup: 'Export / backup',
    },
    export: {
      title: 'wallet export',
    },
    import: {
      title: 'import',
      explanation:
        "Write here you mnemonic, private key, WIF, or anything you've got. BlueWallet will do it's best to guess the correct format and import your wallet",
      imported: 'Imported',
      error: 'Failed to import. Is it event valid?',
      success: 'Success',
      do_import: 'Import',
      scan_qr: 'or scan QR code instead?',
    },
    scanQrWif: {
      go_back: 'Go Back',
      cancel: 'Cancel',
      decoding: 'Decoding',
      input_password: 'Input password',
      password_explain: 'This is BIP38 encrypted private key',
      bad_password: 'Bad password',
      wallet_already_exists: 'Such wallet already exists',
      bad_wif: 'Bad WIF',
      imported_wif: 'Imported WIF ',
      with_address: ' with address ',
      imported_segwit: 'Imported SegWit',
      imported_legacy: 'Imported Legacy',
      imported_watchonly: 'Imported Watch-only',
    },
  },
  transactions: {
    list: {
      tabBarLabel: 'Transactions',
      title: 'transactions',
      description: 'A list of ingoing or outgoing transactions of your wallets',
      conf: 'conf',
    },
    details: {
      title: 'transaction details',
      from: 'Inputs',
      to: 'Outputs',
    },
  },
  send: {
    list: {
      tabBarLabel: 'Send',
      header: 'send',
    },
    details: {
      title: 'create transaction',
      amount_fiels_is_not_valid: 'Amount field is not valid',
      fee_fiels_is_not_valid: 'Fee field is not valid',
      address_fiels_is_not_valid: 'Address field is not valid',
      receiver_placeholder: 'receiver address here',
      amount_placeholder: 'amount to send (in BTC)',
      fee_placeholder: 'plus transaction fee (in BTC)',
      memo_placeholder: 'memo to self',
      cancel: 'Cancel',
      scan: 'Scan',
      create: 'Create',
      remaining_balance: 'Remaining balance',
    },
    create: {
      title: 'create transaction',
      error: 'Error creating transaction. Invalid address or send amount?',
      go_back: 'Go Back',
      this_is_hex: 'This is transaction hex, signed and ready to be broadcast to the network. Continue?',
      to: 'To',
      amount: 'Amount',
      fee: 'Fee',
      tx_size: 'TX size',
      satoshi_per_byte: 'satoshiPerByte',
      memo: 'Memo',
      broadcast: 'Broadcast',
      not_enough_fee: 'Not enough fee. Increase the fee',
    },
  },
  receive: {
    list: {
      tabBarLabel: 'Receive',
      header: 'receive',
    },
    details: {
      title: 'Share this address with payer',
    },
  },
  settings: {
    tabBarLabel: 'Settings',
    header: 'settings',
    plausible_deniability: 'Plausible deniability...',
    storage_not_encrypted: 'Storage: not encrypted',
    storage_encrypted: 'Storage: encrypted',
    password: 'Password',
    password_explain: 'Create the password you will use to decrypt the storage',
    retype_password: 'Re-type password',
    passwords_do_not_match: 'Passwords do not match',
    encrypt_storage: 'Encrypt storage',
    about: 'About',
  },
  plausibledeniability: {
    title: 'Plausible Deniability',
    help:
      'Under certain circumstances, you might be forced to disclose a ' +
      'password. To keep your coins safe, BlueWallet can create another ' +
      'encrypted storage, with a different password. Under the pressure, ' +
      'you can disclose this password to a 3rd party. If entered in ' +
      "BlueWallet, it will unlock new 'fake' storage. This will seem " +
      'legit to a 3rd party, but will secretly keep your main storage ' +
      'with coins safe.',
    help2: 'New storage will be fully functional, and you can store some ' + 'minimum amounts there so it looks more believable.',
    create_fake_storage: 'Create fake encrypted storage',
    go_back: 'Go Back',
    create_password: 'Create a password',
    create_password_explanation: 'Password for fake storage should not match password for your main storage',
    password_should_not_match: 'Password for fake storage should not match password for your main storage',
    retype_password: 'Retype password',
    passwords_do_not_match: 'Passwords do not match, try again',
    success: 'Success',
  },
  lnd: {
    title: 'manage funds',
    choose_source_wallet: 'Choose a source wallet',
    refill_lnd_balance: 'Refill Lightning wallet balance',
    refill: 'Refill',
    withdraw: 'Withdraw',
  },
};
