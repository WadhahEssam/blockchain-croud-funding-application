import web3 from './web3';
import { ABI } from './build/CampaignFactory.json';
import { contractAddress } from './contract.json';

export default new web3.eth.Contract(ABI, contractAddress);