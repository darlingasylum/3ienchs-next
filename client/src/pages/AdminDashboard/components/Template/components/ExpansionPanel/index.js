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

export default function DetailedExpansionPanel() {
  return (
    <div className='my-2'>
      <ExpansionPanel>
        <ExpansionPanelSummary
          //   expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1c-content'
          id='panel1c-header'
        >
          <div>
            <Typography>Big Daddy</Typography>
          </div>
          {/* <div>
            <Typography>Select trip destination</Typography>
          </div> */}
        </ExpansionPanelSummary>
        {/* <ExpansionPanelDetails> */}
        {/* <div />
          <div>
            <Chip label='Barbados' onDelete={() => {}} />
          </div>
          <div>
            <Typography variant='caption'>
              Select your destination of choice
              <br />
              <a href='#secondary-heading-and-columns'>Learn more</a>
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider /> */}
        <ExpansionPanelActions>
          <Button size='small'>Cancel</Button>
          <Button size='small' color='primary'>
            Save
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
}
