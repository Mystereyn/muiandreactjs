// https://www.devwares.com/docs/contrast/react/components/footer/

import React from 'react';
import {
    CDBFooter,
    CDBFooterLink, 
    CDBContainer,
    CDBBtn,
    CDBIcon,
    CDBBox
} from "cdbreact";

export const customizeFooter = () => {
    return (
        <CDBFooter className="shadow">
            <CDBBox 

                display="flex"
                justifyContent="between"
                alignItems="center"
                className="mx-auto py-4 flex-wrap"
                style={{
                width : "80%"}}>
            </CDBBox>
        </CDBFooter>
    )
};
export default customizeFooter;

customizeFooter.run();
