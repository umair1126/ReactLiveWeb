import React, { useState } from "react";
import PlusOneIcon from '@material-ui/icons/PlusOne';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';



const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }))(Tooltip);





const IncDec = ()=>{

    const [curnum, setcurnum] = useState(0);
    const doIncrement = ()=>{
        setcurnum(curnum + 1);
    }

    const doDecrement = ()=>{
        if (curnum == 0) {
            alert("zero limit exceed");
        } else {
            setcurnum(curnum - 1);
        }
    }

    return(
        <>
            <div className="container01">
                <div className="main-container01">
                    <h2> IncDec </h2>
                    <h3> {curnum} </h3>
                    <div className="btngroup">
                    <LightTooltip title="Add">
                        <Button onClick= {doIncrement}> <PlusOneIcon /> </Button>
                    </LightTooltip>    

                    <LightTooltip title="Delete">
                        <Button onClick= {doDecrement}> <DeleteIcon /> </Button>
                    </LightTooltip>
                    </div>
                </div>
            </div>
        </>
    );
}

export default IncDec;