import { PDFViewer, StyleSheet } from "@react-pdf/renderer";
import { Resume } from "./Resume";

import "./App.css";

const styles = StyleSheet.create({
  viewer: {
    border: 0,
    width: window.innerWidth,
    height: window.innerHeight,
  },
});

export const App = () => (
  <PDFViewer style={styles.viewer}>
    <Resume />
  </PDFViewer>
);
