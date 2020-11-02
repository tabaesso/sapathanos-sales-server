import dotenv from 'dotenv';

dotenv.config();

// const { PAYPAL_MODE, PAYPAL_CLIENT, PAYPAL_SECRET } = process.env;
// PAYPAL_MODE=sandbox
// PAYPAL_CLIENT=Ad4n9HjYWiswrwK-6SzjuDtk6-T_iEeJd28_natwpU9tYYUhw8MfcIoC995pWbppVmU7IT-f2_ixoytf
// PAYPAL_SECRET=EFAnPBsvoJld2qWu2I1tnwZOWHQkGG3r9TZZyLH4OKD8fuyVNJ22F_ZdnyCpUg4oLaodKOSF15lTFVMW

export default {
  mode: 'sandbox',
  client_id:
    'Ad4n9HjYWiswrwK-6SzjuDtk6-T_iEeJd28_natwpU9tYYUhw8MfcIoC995pWbppVmU7IT-f2_ixoytf',
  client_secret:
    'EFAnPBsvoJld2qWu2I1tnwZOWHQkGG3r9TZZyLH4OKD8fuyVNJ22F_ZdnyCpUg4oLaodKOSF15lTFVMW',
};
