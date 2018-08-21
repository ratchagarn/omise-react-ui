'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * UI - example schema
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
var defaultSchame = [{
  id: 'authorized',
  type: 'boolean',
  displayName: 'Authorized',
  defaultValue: false
}, {
  id: 'amount',
  type: 'number',
  displayName: 'Amount',
  defaultOption: 'between',
  defaultValue: '100'
}, {
  id: 'captured_at',
  type: 'date',
  displayName: 'Captured at',
  defaultValue: '2018-07-24'
}, {
  id: 'charge_id',
  type: 'text',
  displayName: 'Charge ID',
  defaultValue: 'charge_id_1234567890'
}, {
  id: 'currency',
  type: 'choices',
  displayName: 'Currency',
  defaultValue: 'USD',
  items: [{ label: 'THB', value: 'THB' }, { label: 'JPY', value: 'JPY' }, { label: 'USD', value: 'USD' }, { label: 'EUR', value: 'EUR' }, { label: 'GBP', value: 'GBP' }, { label: 'SGD', value: 'SGD' }]
}, {
  id: 'source_type',
  type: 'select',
  displayName: 'Source Type',
  defaultValue: 'internet_banking_bbl',
  options: [{ label: 'Internet Banking Bay', value: 'internet_banking_bay' }, { label: 'Internet Banking Ktb', value: 'internet_banking_ktb' }, { label: 'Internet Banking Scb', value: 'internet_banking_scb' }, { label: 'Internet Banking Bbl', value: 'internet_banking_bbl' }, { label: 'Alipay', value: 'alipay' }, { label: 'Installment Bay', value: 'installment_bay' }, { label: 'Installment Kbank', value: 'installment_kbank' }, { label: 'Installment Ktc', value: 'installment_ktc' }, { label: 'Installment Bbl', value: 'installment_bbl' }, { label: 'Installment First Choice', value: 'installment_first_choice' }, { label: 'Virtual Account Sinarmas', value: 'virtual_account_sinarmas' }, { label: 'Bill Payment Tesco Lotus', value: 'bill_payment_tesco_lotus' }, { label: 'Econtext', value: 'econtext' }, { label: 'Wallet Alipay', value: 'wallet_alipay' }]
}];

exports.default = defaultSchame;