import web3 from './web3';
import compiledFactory from './build/CampaignFactory.json';
import { contractAddress } from './contract.json';

export default new web3.eth.Contract(JSON.parse(compiledFactory.interface) , contractAddress);