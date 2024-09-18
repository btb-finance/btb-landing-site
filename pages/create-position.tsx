"use client";
import React, { useState } from "react";

export const CreatePosition = () => {
  const networkOptions = [
    { id: 1, label: "🌐 Ethereum", value: "ethereum" },
    { id: 2, label: "🚀 Binance Smart Chain", value: "bsc" },
    { id: 3, label: "⚡️ Polygon", value: "polygon" },
  ];

  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [selectedProtocol, setSelectedProtocol] = useState("");
  const [selectedAsset, setSelectedAsset] = useState("");
  const [selectedAsset2, setSelectedAsset2] = useState("");

  const [showDropdownNetwork, setShowDropdownNetwork] = useState(false);
  const [showDropdownProtocol, setShowDropdownProtocol] = useState(false);
  const [showDropdownAsset, setShowDropdownAsset] = useState(false);
  const [showDropdownAsset2, setShowDropdownAsset2] = useState(false);

  const handleSelectNetwork = (value: any) => {
    setSelectedNetwork(value);
    setShowDropdownNetwork(false);
  };

  const handleSelectProtocol = (value: any) => {
    setSelectedProtocol(value);
    setShowDropdownProtocol(false);
  };

  const handleSelectAsset = (value: any) => {
    setSelectedAsset(value);
    setShowDropdownAsset(false);
  };

  const handleSelectAsset2 = (value: any) => {
    setSelectedAsset2(value);
    setShowDropdownAsset2(false);
  };

  return (
    <div className="w-full h-screen bg-[#06171E] p-6 sm:p-10 font-roboto">
      <style jsx>{`
        .arrow-down::before {
          content: "";
          display: inline-block;
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 6px solid white;
        }
        .arrow-up::before {
          content: "";
          display: inline-block;
          width: 0;
          height: 0;
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 6px solid white;
        }
      `}</style>
      <div className="flex flex-col gap-1">
        <h1 className="flex text-white text-lg md:text-xl font-bold leading-8 flex-wrap">
          Create new position
        </h1>
        <p className="text-red-200 text-xs">
          Create a position by adding liquidity to a pool
        </p>
      </div>

      <div className="flex flex-col bg-gray-dark border border-gray-800 min-h-[320px] md:rounded-lg gap-5 px-3 md:px-6 py-6 mt-6 md:mt-8 text-white">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2 ">
            <h2 className="flex w-fit text-base text-red-200 bg-red-950 h-6 pl-2 pr-3 rounded-lg ">
              → Select network and exchange
            </h2>
            <p className="text-xs text-gray-200 md:pl-4">
              Select a network, AMM protocol, and pair of tokens to provide liquidity for
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-2 relative">
            <label className="text-sm text-gray-300"> Network </label>
            <div
              className="bg-gray-dark text-white p-2 rounded-lg cursor-pointer relative border-[0.5px] border-red-900 hover:border-gray-300 w-full sm:w-72 font-bold"
              onClick={() => setShowDropdownNetwork(!showDropdownNetwork)}
            >
              {selectedNetwork
                ? networkOptions.find((item) => item.value === selectedNetwork)
                    ?.label
                : "Select a network"}
              <span
                className={`absolute right-3 top-3 text-xs ${
                  showDropdownNetwork ? "arrow-up" : "arrow-down"
                }`}
              ></span>
            </div>

            {showDropdownNetwork && (
              <div className="bg-black absolute mt-2 top-full rounded-lg shadow-lg z-10 w-full sm:w-72">
                {networkOptions.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleSelectNetwork(item.value)}
                    className="px-4 py-2 hover:bg-red-500 hover:text-white cursor-pointer"
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2 relative">
            <label className="text-sm text-gray-300"> Protocol </label>
            <div
              className="bg-gray-dark text-white p-2 rounded-lg cursor-pointer relative border-[0.5px] border-red-900 hover:border-gray-300 w-full sm:w-72 font-bold"
              onClick={() => setShowDropdownProtocol(!showDropdownProtocol)}
            >
              {selectedProtocol
                ? networkOptions.find((item) => item.value === selectedProtocol)
                    ?.label
                : "Select a protocol"}
              <span
                className={`absolute right-3 top-3 text-xs ${
                  showDropdownProtocol ? "arrow-up" : "arrow-down"
                }`}
              ></span>
            </div>

            {showDropdownProtocol && (
              <div className="bg-black absolute mt-2 top-full rounded-lg shadow-lg z-10 w-full sm:w-72">
                {networkOptions.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleSelectProtocol(item.value)}
                    className="px-4 py-2 hover:bg-red-500 hover:text-white cursor-pointer"
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 ">
          <div className="flex flex-col gap-1 relative">
            <label className="text-sm text-gray-300">asset_pair</label>
            <div
              className="bg-gray-dark text-white p-2 rounded-lg cursor-pointer relative border-[0.5px] border-red-900 hover:border-gray-300 w-full sm:w-72 font-bold"
              onClick={() => setShowDropdownAsset(!showDropdownAsset)}
            >
              {selectedAsset
                ? networkOptions.find((item) => item.value === selectedAsset)
                    ?.label
                : "Select token or address"}
              <span
                className={`absolute right-3 top-3 text-xs ${
                  showDropdownAsset ? "arrow-up" : "arrow-down"
                }`}
              ></span>
            </div>

            {showDropdownAsset && (
              <div className="bg-black absolute mt-2 top-full rounded-lg shadow-lg z-10 w-full sm:w-72">
                {networkOptions.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleSelectAsset(item.value)}
                    className="px-4 py-2 hover:bg-red-500 hover:text-white cursor-pointer"
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2 relative">
            <div
              className="bg-gray-dark text-white p-2 rounded-lg cursor-pointer relative border-[0.5px] border-red-900 hover:border-gray-300 w-full sm:w-72 font-bold mt-6"
              onClick={() => setShowDropdownAsset2(!showDropdownAsset2)}
            >
              {selectedAsset2
                ? networkOptions.find((item) => item.value === selectedAsset2)
                    ?.label
                : "Select token or address"}
              <span
                className={`absolute right-3 top-3 text-xs ${
                  showDropdownAsset2 ? "arrow-up" : "arrow-down"
                }`}
              ></span>
            </div>

            {showDropdownAsset2 && (
              <div className="bg-black absolute mt-2 top-full rounded-lg shadow-lg z-10 w-full sm:w-72">
                {networkOptions.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleSelectAsset2(item.value)}
                    className="px-4 py-2 hover:bg-red-500 hover:text-white cursor-pointer"
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePosition;
