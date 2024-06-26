import type { MetaFunction } from "@remix-run/node";

import Header from "~/components/layout/header";

export const meta: MetaFunction = () => {
  return [
    { title: "Welcome to Bloggy!" },
    {
      name: "description",
      content:
        "Welcome to Bloggy, your most generic blog web app made by Tasssiooo.",
    },
  ];
};

export default function Index() {
  return (
    <>
      <Header />
    </>
  );
}
