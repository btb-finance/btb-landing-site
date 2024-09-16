import tableimg1 from "@/assets/images/HomeImages/uniswap.svg";
import tableimg2 from "@/assets/images/HomeImages/green-ethereum.svg";
import tableimg3 from "@/assets/images/HomeImages/green-base.svg";
import tableimg4 from "@/assets/images/HomeImages/green-polygon.svg";



const table = [
    {
      pair: "AZUR/WETH",
      fee: "0.30%",
      networks: [
        { src: tableimg2, alt: "Ethereum" },
        { src: tableimg1, alt: "Uniswap" },
      ],
      status: "ACTIVE",
      duration: "19/JUN/2024 13:00 - 19/SEP/2024 13:00",
      poolTVL: "$3,163,246",
      vesting: "0.0 days",
      rewardToken: "AZUR",
      totalRewards: "6,000,000 AZUR",
      approxValue: "$804,471.49",
      rewardsAPR: "100.90%",
      rewardsHour: "$364.34/hour",
    },
    {
      pair: "WETH/FARTHER",
      fee: "0.30%",
      networks: [
        { src: tableimg3, alt: "greenbase" },
        { src: tableimg1, alt: "Uniswap" },
      ],
      status: "ACTIVE",
      duration: "11/MAY/2024 00:00 - 28/OCT/2024 00:00",
      poolTVL: "$46,684",
      vesting: "0.0 days",
      rewardToken: "FARTHER",
      totalRewards: "50,000,000 FARTHER",
      approxValue: " $42,924.94",
      rewardsAPR: "186.45%",
      rewardsHour: "$9.94/hour",
    },
    {
      pair: "WMATIC/BONSAI",
      fee: "0.30%",
      networks: [
        { src: tableimg4, alt: "greenpolygon" },
        { src: tableimg1, alt: "Uniswap" },
      ],
      status: "ACTIVE",
      duration: "9/AUG/2024 13:1 - 7/NOV/2024 13:14",
      poolTVL: "$142,320",
      vesting: "0.0 days",
      rewardToken: "BONSAI",
      totalRewards: "2,000,000 BONSAI",
      approxValue: " $17,778.50",
      rewardsAPR: "50.66%",
      rewardsHour: "$8.23/hour",
    }

  ]
  export default table;