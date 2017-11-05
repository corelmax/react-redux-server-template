import React from 'react'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles'

export const PaperGrid = props => {
  const { xs, sm, md, lg, xl, children, className, classes } = props
  return (
    <Grid
      item
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}>
      <Paper className={className}>
        {children}
      </Paper>
    </Grid>
  )
}

export const PaperGridContainer = props => {
  const { spacing, children } = props
  return (
    <Grid container spacing={spacing}>
      {children}
    </Grid>
  )
}
