import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import "./Card.css";

export default function StatusCard({ title, cases, onClick }) {
  return (
    <Card onClick={onClick} className="card">
      <CardContent>
        <Typography className="card_title" color="textSecondary">
          {title}
        </Typography>
        <h2 className="card_cases">{cases}</h2>
      </CardContent>
    </Card>
  );
}
