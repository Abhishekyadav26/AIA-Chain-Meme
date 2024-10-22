"use client";
import { defineChain, getContract } from "thirdweb";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import addressmeme, { client } from "./client";
import Memeclaimer from "@/app/components/Memeclaimer";

export default function Home() {
  const account = useActiveAccount();

  const AIAContract = getContract({
    client: client,
    chain: defineChain(1320),
    address: addressmeme,
  });

  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <h1 className="text-center text-2xl md:text-6xl font-bold md:font-bold tracking-tighter mb-12 ">
          Claim your Favourite
          <br />
          <span className="text-green-500">MEME</span> NFTs
        </h1>
        <div className="text-center ">
        <ConnectButton 
          client={client}
        />
        </div>
        <div className="flex flex-row">
        <Memeclaimer
          recieverAddress={account?.address}
          dropContract={AIAContract}
          tokenId={0n}
        />  
        <div className="h-auto w-[1px] bg-gray-600 mx-12 mt-8"/>
        <Memeclaimer 
          recieverAddress={account?.address}
          dropContract={AIAContract}
          tokenId={1n}
        />
        <div className="h-auto w-[1px] bg-gray-600 mx-12 mt-8"/>
        <Memeclaimer 
          recieverAddress={account?.address}
          dropContract={AIAContract}
          tokenId={2n}
        />
        <div className="h-auto w-[1px] bg-gray-600 mx-12 mt-8"/>
        <Memeclaimer 
          recieverAddress={account?.address}
          dropContract={AIAContract}
          tokenId={3n}
        />
        <div className="h-auto w-[1px] bg-gray-600 mx-12 mt-8"/>
        <Memeclaimer 
          recieverAddress={account?.address}
          dropContract={AIAContract}
          tokenId={4n}
        />
        </div>
      </div>
    </main>
  );
}

