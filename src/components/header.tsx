import { Modal, Popover, Result, Switch } from "antd"
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Fortmatic, Frame, Logo, Metamask, NoNotification, Portis, SettingBtn1, SettingBtn2, SettingBtn3, WalletConnect } from "../utils/image"
import { Bell, Connect, Setting } from "../utils/svg-icons"
import NetworkModal from "./network_modal"

interface Props {
    name: string
}

const Header: React.FC<Props> = ({ name }) => {
    const navigate = useNavigate()
    function toHome() {
        navigate("/")
    }

    const connectPopup = (
        <div id="wallet-list" className="ant-connect-form">
            <h1 className="cf-title">
                use account from
            </h1>
            <div className="wallet-box">
                <div className="w-item" id="enableEthereumButton">
                    <Metamask />
                    <div className="w-name" >MetaMask</div>
                </div>
                <div className="w-item">
                    <Frame />
                    <div className="w-name">Frame</div>
                </div>
                <div className="w-item">
                    <Fortmatic />
                    <div className="w-name">Fortmatic</div>
                </div>
                <div className="w-item">
                    <Portis />
                    <div className="w-name">Portis</div>
                </div>
                <div className="w-item">
                    <WalletConnect />
                    <div className="w-name">WalletConnect</div>
                </div>
            </div>
        </div>
    )

    const settingPopup = (
        <div id="setting-id" className="setting-popup-wrapper">
            <h1 className="cf-title">
                global references
            </h1>
            <ul className="setting-list">
                <li className="setting-item">
                    <button className="setting-item-btn">
                        <div className="sib-content-box">
                            <div>
                                <SettingBtn1 />
                            </div>
                            <div className="sibc-text">Custom labels</div>
                        </div>
                    </button>
                </li>

                <li className="setting-item">
                    <button className="setting-item-btn">
                        <div className="sib-content-box">
                            <div>
                                <SettingBtn2 />
                            </div>
                            <div className="sibc-text">Network</div>
                        </div>
                    </button>
                </li>

                <li className="setting-item">
                    <button className="setting-item-btn">
                        <div className="sib-content-box">
                            <div>
                                <SettingBtn3 />
                            </div>
                            <div className="sibc-text">Notifications</div>
                        </div>
                    </button>
                </li>

                <li className="sib-content-box">
                    <div className="mode-row">
                        <span>Dark mode</span>
                        <Switch defaultChecked onChange={() => console.log()} />
                    </div>
                </li>
            </ul>

        </div>
    )

    const bellPopup = (
        <div id="bell-id" className="setting-popup-wrapper">
            <h1 className="cf-title">
                activity
            </h1>
            <div className="bell-wrapper">
                <NoNotification />
                <div className="bell-text">
                    No activity yet!
                </div>
            </div>
        </div>
    )

    const [isModalOpen, setIsModalOpen] = useState(false)

    const showModal = () => {
        setIsModalOpen(true)
    }

    const handleOk = () => {
        setIsModalOpen(false)
    }

    const handleCancel = () => {
        setIsModalOpen(false)
    }

    function handleNetworkClick(n: any) {
        const name = n
        let tipe = 0

        if (n == "Goerli" || n == "Mumbai" || n == "BSC TestNet" ||
            n == "Stardust" || n == "Harmony Testnet") {
            tipe = 1
        }

        setIsModalOpen(false)
    }

    return (
        <>
            <div id="header-id" className="header">
                <div className="logo-box">
                    <button className="logo-btn" onClick={toHome}>
                        <Logo />
                    </button>
                    <span className="logo-title">Aragon Governance</span>
                </div>
                <div className="user-box">
                    <div className="connect-box">
                        <button id="network-btn-id" className="btn name" onClick={showModal}>Network</button>

                        <Popover id="wl-id" placement="bottomRight" content={connectPopup} trigger="click">
                            {/* <button className="btn connect connect-space">
                                <span className="connect-icon"><Connect /></span>
                                Connect account
                            </button> */}
                            <button className="btn connect connect-space">
                                <span className="connect-icon"><Connect /></span>
                                Connect account
                            </button>
                        </Popover>

                    </div>

                    <>
                        <div className="setting-box">
                            <Popover id="setting-id" placement="bottomRight" content={settingPopup} trigger="click">
                                <button className="setting-box">
                                    <span><Setting /></span>
                                </button>
                            </Popover>
                        </div>

                        <div className="setting-box">
                            <Popover id="setting-id" placement="bottomRight" content={bellPopup} trigger="click">
                                <button className="setting-box">
                                    <span><Bell /></span>
                                </button>
                            </Popover>
                        </div>

                    </>
                </div>
            </div>

            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <NetworkModal />
            </Modal>
        </>
    )
}

export default Header