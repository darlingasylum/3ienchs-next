import React from 'react';
import clsx from 'clsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

export default function DetailedExpansionPanel({ product }) {
  return (
    <div className='my-2'>
      <ExpansionPanel>
        <ExpansionPanelSummary
          //   expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1c-content'
          id='panel1c-header'
        >
          <div>
            <Typography>{product.product_name} / </Typography>
          </div>
          <div>
            <Typography> / {product.product_type}</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <img
            className='max-height-80 mr-10'
            src={`/static/images/${product.product_img}`}
          ></img>
          <div>
            <Typography>{product.product_descr}</Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size='small'>Editer</Button>
          <Button size='small' color='primary'>
            Supprimer
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
}
