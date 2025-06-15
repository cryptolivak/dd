import React from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'

export default function ConnectButton() {
  const { connected, publicKey, disconnect } = useWallet()
  const { setVisible } = useWalletModal()

  const handleClick = () => {
    if (connected) {
      disconnect()
    } else {
      setVisible(true)
    }
  }

  const label = connected && publicKey
    ? `${publicKey.toBase58().slice(0,4)}..${publicKey.toBase58().slice(-4)}`
    : 'Start Your Planet'

  return (
    <button
      onClick={handleClick}
      className="glow bg-neon text-black rounded-full px-8 py-3 text-2xl font-bold uppercase hover:scale-105 transition"
    >
      {label}
    </button>
  )
}

