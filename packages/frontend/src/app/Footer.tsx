import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import type { FC } from "react";
import { getImage } from "@/assets";

export const Footer: FC = () => {
  return (
    <footer>
      <Container>
        <div className="d-flex justify-content-between flex-column flex-md-row flex-wrap pt-5 pb-4">
          <motion.div initial={{ x: -200 }} whileInView={{ x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true, amount: 0.2 }}>
            <img src={getImage("logo/logo.png")} alt="logo" className="mb-3" />
            <p className="gray-100">
              Please contact us if you have any specific <br /> idea or request.
            </p>
          </motion.div>
          <span className="d-block d-md-none"></span>
          <motion.div
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            className="d-flex"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="me-5">
              <h6 className="gray-100 text-uppercase fw-normal mb-2">Company</h6>
              <ul className="p-0">
                <li>How it works</li>
                <li>Market</li>
                <li>About Us</li>
              </ul>
            </div>
            <div>
              <h6 className="gray-100 text-uppercase fw-normal mb-2">Socials</h6>
              <ul className="p-0">
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Facebook</li>
              </ul>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="d-flex justify-content-between flex-column flex-md-row gray-100 flex-wrap pt-3"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p>© 2025 Renting-Platform. All rights reserved</p>
        </motion.div>
      </Container>
    </footer>
  );
};
