import "@ui5/webcomponents-icons/dist/AllIcons.js";
import { Card, Icon, CardHeader } from "@ui5/webcomponents-react";
import Link from "next/link";

const cardsData = [
  { href: "/items", title: "Items Page", icon: "search", color: "blue" },
  { href: "#", title: "List 1", icon: "search", color: "red" },
  { href: "#", title: "List 2", icon: "search", color: "violet" }, // Fixed typo: "bluevoilt" to "violet"
  { href: "#", title: "List 3", icon: "search", color: "blue" },
];

export default function Home() {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f1f1f1", height: "100vh" }}>
      <h1 style={{ marginBlockEnd: "15px" }}>Overview</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        {cardsData.map(({ href, title, icon, color }, index) => (
          <Link key={index} href={href}>
            <Card
              header={
                <CardHeader
                  avatar={<Icon name={icon} style={{ fontSize: "40px", color }} />} // Set color directly
                  titleText={title}
                />
              }
              style={{ width: "300px" }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
