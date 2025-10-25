import type { FC } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { getImage } from "@/assets";
import { useWallet } from "@/hooks/useWallet";

import "./navbar.css";

export const NavBar: FC = () => {
  const { formattedAddress, address, balance, connect, disconnect, isConnecting, error } = useWallet();
  const isConnected = Boolean(address);
  const buttonLabel = formattedAddress || (isConnecting ? "Connecting..." : "Connect Wallet");
  const balanceLabel = `${balance || "0.0000"} ETH`;

  return (
    <Navbar expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="#" className="me-lg-5">
          <img className="logo" src={getImage("logo/logo.png")} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="my-lg-0 my-2 me-auto w-100  align-items-lg-center gap-3 gap-lg-0" navbarScroll>
            <Nav.Link href="#action1">Marketplace</Nav.Link>
            <Nav.Link href="#action2" className="px-lg-3">
              About Us
            </Nav.Link>
            <Nav.Link href="#action3">Developers</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center order">
          <span className="line d-lg-inline-block d-none"></span>
          <i className="fa-regular fa-heart"></i>
          <div className="wallet-panel">
            <Button variant="primary" className="btn-primary d-none d-lg-inline-block" onClick={connect} disabled={isConnecting}>
              {buttonLabel}
            </Button>
            {isConnected && (
              <>
                <Button variant="outline-light" className="wallet-disconnect-button d-none d-lg-inline-block" onClick={disconnect}>
                  Disconnect
                </Button>
                <span className="wallet-balance">{balanceLabel}</span>
              </>
            )}
            <span className="wallet-error text-danger">{error || "\u00a0"}</span>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};
