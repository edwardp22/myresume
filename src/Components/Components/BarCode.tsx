import React from "react";
import { Grid } from "@material-ui/core";
import { useBarcode } from "react-barcodes";

export default function BarCode({
  selectedUser,
}: {
  selectedUser?: { id: number; name: string; email: string };
}) {
  const { inputRef } = useBarcode({ value: selectedUser?.name ?? "no user" });

  return (
    <>
      <Grid item xs={12}>
        <h2>React Barcodes</h2>
        <p>
          I use this component for generating barcodes from the app. This is
          useful for companies that requires to label their products.
        </p>
      </Grid>

      <Grid item xs={12}>
        <svg ref={inputRef} />
      </Grid>
    </>
  );
}
