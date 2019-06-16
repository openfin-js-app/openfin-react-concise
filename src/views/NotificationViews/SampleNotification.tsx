import * as React from 'react';
import { makeStyles } from '@material-ui/styles';

import Typography from '@material-ui/core/Typography';

import cx from "classnames";
import { sampleNotificationViewStyle as style } from '../../assets/jss/sample-name';

import appSvg from '../../assets/svg/app.svg';

const useStyles = makeStyles(style);

const SampleNotificationView:React.FunctionComponent<{}> = (
    {}
)=>{

    const classes = useStyles({});

    return (
        <div className={classes.container}>

            <img className={classes.appImg} src={appSvg}/>

            <Typography variant='h2'>
                Sample
            </Typography>

        </div>
    )

}

export default SampleNotificationView;