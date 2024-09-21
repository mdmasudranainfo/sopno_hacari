import AboutUs from "@/components/website/aboutUs/AboutUs";
import Banner from "@/components/website/banner/Banner";
import Order from "@/components/website/Order/Order";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutUs />
      <Order />
    </>
  );
}
