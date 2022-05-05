import * as React from "react";
import DeviceChart from "./DeviceChart";
import Layout from "./Layout";
import { name } from "../utils/generators";
import RadialChart from "./Gradiant"

export default function Home() {
  return (
    <Layout>
      <h2>{name("Jordan", "Hudgens")}</h2>
      <DeviceChart
        options={{
          colors: ["#e302a7", "#07e3b0", "#f58e20"],
          labels: ["Apple", "Android", "Pixel"],
        }}
      />

      <DeviceChart
        options={{
          colors: ["#910606", "#320691", "#910647"],
          labels: ["Smartphones", "laptops", "ipads"],
        }}
      />
      <RadialChart />
    </Layout>
  );
}