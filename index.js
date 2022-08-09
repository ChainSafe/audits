import connext from "./assets/audit-covers/connext.png";
import elementfi from './assets/audit-covers/elementfi.png';
import epns from './assets/audit-covers/epns.png';
import exactly from './assets/audit-covers/exactly.png';
import gsn from './assets/audit-covers/gsn.png';
import thegraph from './assets/audit-covers/thegraph.png';

export const audits = [
  {
    "name": "Connext",
    "date": "12/2020",
    "desc": "Connext Labs Inc requested ChainSafe Systems to perform a review of the Vector state channel contracts.",
    "auditors": ["Oleksii Matiiasevych"],
    "commit": "f3d72fe0a4f2877bd0453ff8d4161129c459ad83 vector-0.0.17",
    "img": connext,
  },
  {
    "name": "OpenGSN",
    "date": "01/2021",
    "desc": "OpenGSN requested ChainSafe Systems to perform a review of the Gas Stations Network Protocol v2 contracts implementation by OpenGSN.",
    "auditors": ["Oleksii Matiiasevych"],
    "commit": "331166d9fcb5e01fd4dcf52e827123b7d3751972 release",
    "img": gsn,
  },
  {
    "name": "EPNS",
    "date": "03/2021",
    "desc": "EPNS requested ChainSafe Systems to perform a review of the PUSH Tokens, Staking and Time Vesting smart contracts.",
    "auditors": ["Oleksii Matiiasevych"],
    "commit": "80b7acaf8ef660cb2851ded9bc93bf41250bbc6e",
    "img": epns,
  },
  {
    "name": "Ribbon Finance",
    "date": "04/2021",
    "desc": "Ribbon Finance requested ChainSafe Systems to perform a review of the RibbonCoveredCall and parts of GammaAdapter and ProtocolAdapter smart contracts.",
    "auditors": ["Tanya Bushenyova", "Oleksii Matiiasevych"],
    "commit": "269e56845e76849855abe20f2dea5c5c5da52750",
    "img": ribbon,
  },
  {
    "name": "The Graph",
    "date": "04/2021",
    "desc": "The Graph requested ChainSafe Systems to perform a review of the GRTWithdrawHelper smart contract.",
    "auditors": ["Tanya Bushenyova", "Oleksii Matiiasevych"],
    "commit": "7170fc04a210c9158712edd81b797702f82fcff6",
    "img": thegraph,
  },
  {
    "name": "Element Finance",
    "date": "10/2021",
    "desc": "Element Finance requested ChainSafe Systems to perform a review of the Council smart contracts.",
    "auditors": ["Tanya Bushenyova", "Oleksii Matiiasevych", "Anderson Lee"],
    "commit": "4003f1bf818eec73cba545d49ecf1f897aa0f203",
    "img": elementfi,
  },
  {
    "name": "EPNS Protocol",
    "date": "10/2021",
    "desc": "EPNS requested ChainSafe Systems to perform a review of the EPNS Protocol smart contracts.",
    "auditors": ["Oleksii Matiiasevych", "Anderson Lee"],
    "commit": "95edbbf783cb862202079206b255bd8476548d4f",
    "img": epns,
  },
  {
    "name": "Ribbon Finance",
    "date": "11/2021",
    "desc": "Ribbon Finance requested ChainSafe Systems to perform a review of the Ribbon V2 smart contracts.",
    "auditors": ["Oleksii Matiiasevych"],
    "commit": "8328177fc188a344ea22591e872077d100a9e8a3",
    "img": ribbon,
  },
  {
    "name": "Exactly Finance",
    "date": "05/2022",
    "desc": "Exactly Finance requested ChainSafe Systems to perform a review of the Fixed Lending Protocol smart contracts.",
    "auditors": ["Tanya Bushenyova", "Oleksii Matiiasevych", "Anderson Lee"],
    "commit": "cc68303704cf9a3aaad0bfc49968033acc42a63b",
    "img": exactly,
  },
]