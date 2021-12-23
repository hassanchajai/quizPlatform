import React from "react";


import { Card, CardContent } from "@mui/material";



export default function CardWithTable({ title, children }) {

  return (
    <Card style={{ overflow: "auto", marginTop: 10 }}>
      {/* <CardHeader title={"Proudcts"}/> */}
      <CardContent style={{ padding: "0", overflowX: "auto" }}>
        {/* <Divider /> */}
        {children}
      </CardContent>
    </Card>
  );
}
