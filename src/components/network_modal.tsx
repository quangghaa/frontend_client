import React from "react"

interface Props {

}

const NetworkModal: React.FC<Props> = (props) => {
    const onSelectNetwork = (value: any) => {
    }

    return (
        <div className="nm-content">
            <div className="nm-header">
                <h2 className="nmh-title">Select a Network</h2>
                <p className="nmh-sub">You are currently connected to the Ethereum Mainnet network</p>
            </div>
            <div className="nm-body-wrapper">
                <div>
                    <p className="network-title">Mainnets</p>
                    <div className="network-list">
                        <button className="network-btn" onClick={() => onSelectNetwork("Ethereum")}>
                            Ethereum
                        </button>
                        <button className="network-btn" onClick={() => onSelectNetwork("Polygon")}>
                            Polygon
                        </button>
                        <button className="network-btn" onClick={() => onSelectNetwork("Harmony")}>
                            Harmony
                        </button>
                        <button className="network-btn" onClick={() => onSelectNetwork("Andromeda")}>
                            Andromeda
                        </button>
                    </div>
                </div>

                <div>
                    <p className="network-title">Testnets</p>
                    <div className="network-list">
                        <button className="network-btn" onClick={() => onSelectNetwork("Goerli")}>
                            Goerli
                        </button>
                        <button className="network-btn" onClick={() => onSelectNetwork("Mumbai")}>
                            Mumbai
                        </button>
                        <button className="network-btn" onClick={() => onSelectNetwork("BSC Testnet")}>
                            BSC Testnet
                        </button>
                        <button className="network-btn" onClick={() => onSelectNetwork("Stardust")}>
                            Stardust
                        </button>
                        <button className="network-btn" onClick={() => onSelectNetwork("Harmony Testnet")}>
                            Harmony Testnet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NetworkModal