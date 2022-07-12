import React from 'react'
import { css } from "@emotion/react";
import PulseLoader from "react-spinners/PulseLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #FFA736;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
`;
export default function Loader() {
    return (
            <PulseLoader color={'#FFA736'} css={override} size={20} margin={10} />
    );
}
