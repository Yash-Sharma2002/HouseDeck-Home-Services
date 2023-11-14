import React from 'react'
import { css } from "@emotion/react";
import ClockLoader from "react-spinners/ClockLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #ffd416;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
`;
export default function Loader() {
    return (
            <ClockLoader color={'#FFA736'} css={override} size={60} margin={10} />
    );
}
