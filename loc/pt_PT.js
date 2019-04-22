module.exports = {
  _: {
    storage_is_encrypted: 'O armazenamento está encriptado. Uma password é necessaria para desencriptar',
    enter_password: 'Inserir password',
    bad_password: 'pasword errada, tente novamente',
    never: 'never',
    continue: 'Continue',
    ok: 'OK',
  },
  wallets: {
    options: 'options',
    select_wallet: 'Select Wallet',
    createBitcoinWallet: 'In order to use a Lightning wallet, a Bitcoin wallet is needed to fund it. Would you like to continue anyway?',

    list: {
      app_name: 'BlueWallet',
      title: 'wallets',
      header: 'Uma wallet representa um par entre um segredo (chave privada) e um endereço' + 'que pode partilhar para receber Bitcoin.',
      add: 'adicionar wallet',
      create_a_wallet: 'Adicionar uma wallet',
      create_a_wallet1: 'É gratuito e pode',
      create_a_wallet2: 'adicionar quantas quiser',
      latest_transaction: 'últimas transacções',
      empty_txs1: 'As suas transacções aparecerão aqui,',
      empty_txs2: 'nenhuma de momento',
      empty_txs1_lightning:
        'Lightning wallet should be used for your daily transactions. Fees are unfairly cheap and speed is blazing fast.',
      empty_txs2_lightning: '\nTo start using it tap on "manage funds" and topup your balance.',
      tap_here_to_buy: 'Tap here to buy Bitcoin',
    },
    reorder: {
      title: 'Reorder Wallets',
    },
    add: {
      title: 'adicionar wallet',
      description:
        'Pode fazer um scan de um backup de uma wallet em papel (em WIF - Wallet Import Format), ou criar uma nova wallet. Segwit suportado por defeito.',
      scan: 'Scan',
      create: 'Adicionar',
      label_new_segwit: 'Novo SegWit',
      label_new_lightning: 'Novo Lightning',
      wallet_name: 'nome',
      wallet_type: 'tipo',
      or: 'ou',
      import_wallet: 'Importar wallet',
      imported: 'Importada',
      coming_soon: 'Brevemente',
      lightning: 'Lightning',
      bitcoin: 'Bitcoin',
    },
    details: {
      title: 'wallet',
      address: 'Endereço',
      type: 'Tipo',
      delete: 'Delete',
      save: 'Save',
      label: 'Nome',
      destination: 'destination',
      description: 'description',
      are_you_sure: 'Tem a certeza?',
      yes_delete: 'Sim, eliminar',
      no_cancel: 'Não, cancelar',
      delete_this_wallet: 'Apagar esta wallet',
      export_backup: 'Exportar / backup',
      buy_bitcoin: 'Buy Bitcoin',
      show_xpub: 'Show wallet XPUB',
    },
    export: {
      title: 'Exportar Wallet',
    },
    xpub: {
      title: 'wallet XPUB',
      copiedToClipboard: 'copiado para clip board',
    },
    import: {
      title: 'importar',
      explanation:
        'Escreva a sua frase mnemônica, chave-privada, WIF, ou qualuer informação que disponha. Vamos tentar interpretar o formato e importat a sua wallet',
      imported: 'Importada',
      error: 'Falhou. É um dado válido?',
      success: 'Sucesso',
      do_import: 'Importar',
      scan_qr: 'ou scan o QR code?',
    },
    scanQrWif: {
      go_back: 'Voltar',
      cancel: 'Cancelar',
      decoding: 'Descodificar',
      input_password: 'Inserir password',
      password_explain: 'Isto é um BIP38 chave privada encriptada',
      bad_password: 'Password errada',
      wallet_already_exists: 'Esta wallet já existe',
      bad_wif: 'WIF errado',
      imported_wif: 'WIF transferido ',
      with_address: ' com endereço ',
      imported_segwit: 'SegWit transferido',
      imported_legacy: 'Legacy transferido',
      imported_watchonly: 'Watch-only importada',
    },
  },
  transactions: {
    list: {
      tabBarLabel: 'Transacções',
      title: 'transacções',
      description: 'Uma lista de transações feitas ou recebidas nas suas wallets',
      conf: 'conf',
    },
    details: {
      title: 'detalhes',
      from: 'De',
      to: 'Para',
      copy: 'Copiar',
      transaction_details: 'Transaction details',
      show_in_block_explorer: 'Show in block explorer',
    },
  },
  send: {
    header: 'Enviar',
    confirm: {
      header: 'Confirm',
      sendNow: 'Send now',
    },
    success: {
      done: 'Done',
    },
    details: {
      title: 'Criar Transacção',
      amount_field_is_not_valid: 'Campo de quantia não é válido',
      fee_field_is_not_valid: 'Campo de taxa não é válido',
      address_field_is_not_valid: 'Campo de endereço não é válido',
      receiver_placeholder: 'endereço de envio aqui',
      amount_placeholder: 'quantia a enviar (em BTC)',
      fee_placeholder: 'mais a taxa de transacção (em BTC)',
      create_tx_error: 'There was an error creating the transaction. Please, make sure the address is valid.',
      note_placeholder: 'Nota pessoal',
      total_exceeds_balance: 'Total amount exceeds available balance.',
      cancel: 'Cancelar',
      scan: 'Scan',
      create: 'Criar',
      address: 'Address',
      send: 'Send',
      remaining_balance: 'Saldo restante',
    },
    create: {
      title: 'Criar Transacção',
      details: 'Details',
      error: 'Erro ao criar transacção. Endereço inválido ou quantia?',
      go_back: 'Voltar',
      this_is_hex: 'Este é o hex da transacção, assinado e pronto para ser difundido para a network. Continuar?',
      to: 'Para',
      amount: 'Quantia',
      fee: 'Taxa',
      tx_size: 'Tamanho TX',
      satoshi_per_byte: 'satoshiPerByte',
      memo: 'Nota pessoal',
      broadcast: 'Difundir',
      not_enough_fee: 'Taxa demasiado baixo. Aumente a taxa.',
    },
  },
  buyBitcoin: {
    header: 'Buy Bitcoin',
    tap_your_address: 'Tap your address to copy it to clipboard:',
    copied: 'Copied to Clipboard!',
  },
  receive: {
    header: 'receber',
    details: {
      title: 'Partilhar este endereço com o pagador',
      share: 'partilhar',
      copiedToClipboard: 'copiado para clip board',
      label: 'Description',
      create: 'Create',
      setAmount: 'Receive with amount',
    },
  },
  settings: {
    tabBarLabel: 'Definições',
    header: 'definições',
    plausible_deniability: 'Negação plausível...',
    storage_not_encrypted: 'Armazenamento: não encriptado',
    storage_encrypted: 'Armazenamento: encriptado',
    password: 'Password',
    password_explain: 'Definir a password para desencriptar o armazenamento',
    retype_password: 'Inserir password novamente',
    passwords_do_not_match: 'Passwords não coincidem',
    encrypt_storage: 'Encriptar',
    lightning_settings: 'Lightning settings',
    lightning_settings_explain:
      'To connect to your own LND node please install LndHub' +
      ' and put its URL here in settings. Leave blank to use default ' +
      'ndHub\n (lndhub.io)',
    save: 'save',
    about: 'Sobre',
    language: 'Idioma',
    currency: 'Moeda',
  },
  plausibledeniability: {
    title: 'Negação plausível',
    help:
      'Em algumas circunstâncias, pode ser forçado a relevar uma ' +
      'password. Para manter as suas moedas seguras, A BlueWallet pode criar outro ' +
      'armazenamento encriptado, com uma password diferente. Sobre pressão, ' +
      'pode revelar esta password a um terceiro. Se inserida na ' +
      'BlueWallet, esta vai abrir um armazenamento "falso". Que vai parecer ' +
      'legítimo a um terceiro, mas que secretamente vai manter o seu armazenamento principal ' +
      'com as moedas em segurança.',
    help2: 'Este novo armazenamento é completamente funcional, e pode guardar ' + 'um valor minímo para parecer mais real.',
    create_fake_storage: 'Criar armazenamento encriptado FALSO',
    go_back: 'Voltar',
    create_password: 'Criar password',
    create_password_explanation: 'Password para armazenamento FALSO não deve coincidir com o principal',
    password_should_not_match: 'Password para armazenamento FALSO não deve coincidir com o principal',
    retype_password: 'Inserir password novamente',
    passwords_do_not_match: 'Passwords não coincidem, tente novamente',
    success: 'Sucesso',
  },
  lnd: {
    title: 'gerir saldo',
    choose_source_wallet: 'Escolha a wallet',
    refill_lnd_balance: 'Carregar o saldo da Lightning wallet',
    refill: 'Carregar',
    placeholder: 'Invoice',
    withdraw: 'Transferir',
    expired: 'Expired',
    sameWalletAsInvoiceError: 'You can not pay an invoice with the same wallet used to create it.',
  },
  pleasebackup: {
    title: 'Your wallet is created...',
    text:
      "Please take a moment to write down this mnemonic phrase on a piece of paper. It's your backup you can use to restore the wallet on other device. You can use Electrum wallet on desktop (https://electrum.org/) to restore the same wallet.",
    ok: 'OK, I wrote this down!',
  },
};
