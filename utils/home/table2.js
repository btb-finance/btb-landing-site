
import tableimg1 from "@/assets/images/HomeImages/uniswap.svg";
import tableimg2 from "@/assets/images/HomeImages/green-ethereum.svg";
import tableimg5 from "@/assets/images/HomeImages/green-arbitrum.svg";
import tableimg6 from "@/assets/images/HomeImages/green-optimism.svg";

  const table2 = [
    {
      pair: "AZUR/WETH",
      fee: "0.30%",
      networks: [
        { src: tableimg2, alt: "Ethereum" },
        { src: tableimg1, alt: "Uniswap" },
      ],
      NFTid: "861012",
      owner: "0x3fbe",
      poolAsset: "$2,557.07",
      Pnl: "$109.70",
      APR: "656.5%",
      feeAPR: "735.1%",
      age: "20.5 d",
    },
    {
      pair: "WETH/FARTHER",
      fee: "0.05%",
      networks: [
        { src: tableimg5, alt: "greenbase" },
        { src: tableimg1, alt: "Uniswap" },
      ],
      NFTid: "3410723",
      owner: "0x3fbe",
      poolAsset: "$35,590.54",
      Pnl: "$110.78",
      APR: "116.3%",
      feeAPR: "140.1%",
      age: "13.2 d",
    },
    {
      pair: "WMATIC/BONSAI",
      fee: "1.00%",
      networks: [
        { src: tableimg6, alt: "greenpolygon" },
        { src: tableimg1, alt: "Uniswap" },
      ],
      NFTid: "973013",
      poolAsset: "$10,827.43",
      owner: "0x6b1a",
      Pnl: "$4,794.24",
      APR: "33.62%",
      feeAPR: "35.58%",
      age: "804.8 d",
    },
    {
      pair: "WMATIC/BONSAI",
      fee: "0.30%",
      networks: [
        { src: tableimg2, alt: "greenpolygon" },
        { src: tableimg1, alt: "Uniswap" },
      ],
      NFTid: "973013",
      owner: "0x6b1a",
      poolAsset: "$27,193.17",
      Pnl: "$210.61",
      APR: "3.78%",
      feeAPR: "90.35%",
      age: "7.8 d",
    }


  ]
  export default table2;